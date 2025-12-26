# GitLab CI/CD Configuration Guide

## 📋 Overview

This document provides comprehensive information about the GitLab CI/CD pipeline for the Strava Club Stats React Frontend.

## 🔍 Current Configuration Issues

### ❌ **Critical Issues in Current `.gitlab-ci.yml`**

1. **Hardcoded Webhook URL** (Line 40)
   - Security risk: Exposes internal infrastructure details
   - Makes it impossible to use different webhooks for different environments
   - **Fix:** Move to GitLab CI/CD Variables

2. **Insecure SSL Verification** (Line 40)
   - Uses `-k` flag which ignores SSL certificate validation
   - Vulnerable to man-in-the-middle attacks
   - **Fix:** Remove `-k` flag and ensure proper SSL certificates

3. **Security Scanning Disabled** (Lines 22-27)
   - Trivy vulnerability scanning is commented out
   - No security checks before deployment
   - **Fix:** Re-enable Trivy scanning

4. **No Build Caching**
   - Using `--no-cache` on every build
   - Wastes time and resources
   - **Fix:** Use Docker layer caching

5. **Missing Testing**
   - No unit tests or linting
   - No quality gates
   - **Fix:** Add test stage

6. **No Environment Separation**
   - Same deployment for all branches
   - No staging environment
   - **Fix:** Add separate staging/production deployments

## ✅ **Recommended Configuration**

A new `.gitlab-ci.yml.recommended` file has been created with the following improvements:

### **Pipeline Stages**

```
validate → test → build → security → deploy
```

#### 1. **Validate Stage**
- Runs linting checks
- Validates code quality
- Allows failure on merge requests

#### 2. **Test Stage**
- Runs unit tests with coverage
- Generates coverage reports
- Stores artifacts for 30 days

#### 3. **Build Stage**
- Builds Docker image with build arguments
- Tags with commit SHA and 'latest'
- Uses Docker layer caching for speed
- Injects environment variables during build

#### 4. **Security Stage**
- Scans Docker image with Trivy
- Fails on CRITICAL vulnerabilities
- Generates security reports

#### 5. **Deploy Stage**
- Separate staging and production deployments
- Manual approval for production
- Proper error handling
- Health checks

## 🔧 **Required GitLab CI/CD Variables**

Set these in: **Settings → CI/CD → Variables**

### **Registry Variables** (Already configured)
- `CI_REGISTRY` - GitLab container registry URL
- `CI_REGISTRY_USER` - Registry username
- `CI_REGISTRY_PASSWORD` - Registry password (Protected, Masked)

### **Deployment Variables** (New - Required)
- `PORTAINER_WEBHOOK_URL` - Staging Portainer webhook (Protected, Masked)
- `PORTAINER_WEBHOOK_URL_PROD` - Production Portainer webhook (Protected, Masked)
- `REACT_APP_API_URL` - API base URL (e.g., `https://www.unixcraft.dev`)

### **Optional Variables**
- `REACT_APP_NAME` - Application name
- `REACT_APP_VERSION` - Application version

## 📝 **How to Migrate**

### Step 1: Backup Current Configuration
```bash
cp .gitlab-ci.yml .gitlab-ci.yml.backup
```

### Step 2: Set GitLab Variables
1. Go to: **Project → Settings → CI/CD → Variables**
2. Add the following variables:

| Variable | Value | Type | Protected | Masked |
|----------|-------|------|-----------|--------|
| `PORTAINER_WEBHOOK_URL` | Your staging webhook URL | Variable | ✅ | ✅ |
| `PORTAINER_WEBHOOK_URL_PROD` | Your production webhook URL | Variable | ✅ | ✅ |
| `REACT_APP_API_URL` | `https://www.unixcraft.dev` | Variable | ❌ | ❌ |

### Step 3: Update .gitlab-ci.yml
```bash
# Review the recommended file
cat .gitlab-ci.yml.recommended

# If you're satisfied, replace the current one
mv .gitlab-ci.yml.recommended .gitlab-ci.yml
```

### Step 4: Test the Pipeline
1. Create a feature branch
2. Make a small change
3. Push and observe the pipeline
4. Verify all stages complete successfully

## 🚀 **Pipeline Workflow**

### For Feature Branches / Merge Requests:
```
validate (lint) → test (unit tests)
```
- Runs code quality checks
- Runs unit tests
- No deployment

### For `develop` Branch:
```
validate → test → build → security → deploy-staging
```
- Builds Docker image
- Scans for vulnerabilities
- Deploys to staging automatically

### For `main` Branch:
```
validate → test → build → security → deploy-production (manual)
```
- Builds production Docker image
- Scans for vulnerabilities
- Waits for manual approval
- Deploys to production

### For Tags (e.g., `v1.0.0`):
```
build → security → deploy-production (manual)
```
- Builds tagged release
- Deploys to production with manual approval

## 🔒 **Security Improvements**

### 1. **Vulnerability Scanning**
- Trivy scans for CVEs in Docker image
- Fails pipeline on CRITICAL vulnerabilities
- Provides detailed security reports

### 2. **Secure Webhooks**
- Webhooks stored in protected variables
- Proper SSL certificate validation
- Error handling and status code checking

### 3. **Non-Root Container**
- Docker image runs as non-root user (UID 1001)
- Reduced attack surface

### 4. **Secrets Management**
- No hardcoded credentials
- All sensitive data in GitLab variables
- Masked and protected variables

## 📊 **Build Optimization**

### **Docker Layer Caching**
```yaml
--cache-from $LATEST_IMAGE_TAG
```
- Reuses previous layers
- Faster builds (~50% time reduction)

### **NPM Caching**
```yaml
cache:
  paths:
    - node_modules/
    - .npm/
```
- Caches dependencies between builds
- Faster test/build stages

### **Multi-Stage Builds**
- Separates build and runtime stages
- Smaller final image size
- Better security (no build tools in production)

## 🧪 **Testing & Quality Gates**

### **Linting**
```bash
npm run lint
```
- Enforces code style
- Catches syntax errors
- Allows failure (won't block MR)

### **Unit Tests**
```bash
npm run test -- --coverage
```
- Runs Jest tests
- Generates coverage reports
- Stores artifacts

### **Security Scanning**
```bash
trivy image --severity CRITICAL
```
- Scans for vulnerabilities
- Blocks deployment on critical issues

## 🌍 **Environment Strategy**

### **Staging Environment**
- **Branch:** `develop`
- **URL:** https://staging.unixcraft.dev
- **Deployment:** Automatic
- **Purpose:** Testing before production

### **Production Environment**
- **Branch:** `main` or tags
- **URL:** https://www.unixcraft.dev
- **Deployment:** Manual approval required
- **Purpose:** Live site

## 📈 **Monitoring & Artifacts**

### **Coverage Reports**
- Stored for 30 days
- Visible in merge request
- Helps track code quality

### **Security Reports**
- Container scanning results
- Vulnerability details
- Action items for remediation

### **Build Logs**
- Detailed build output
- Error messages
- Debugging information

## 🔄 **Rollback Procedure**

### Manual Rollback Job
```yaml
rollback:
  when: manual
  environment: production
```

### Steps to Rollback:
1. Go to: **CI/CD → Pipelines**
2. Find the last successful production deployment
3. Click "Rollback" job
4. Confirm execution

### Alternative: Deploy Previous Tag
1. Find previous working tag (e.g., `v1.0.0`)
2. Create new tag pointing to same commit
3. Pipeline will redeploy that version

## 🐛 **Troubleshooting**

### **Build Fails: "Cannot find module"**
```bash
# Solution: Clear cache
# In .gitlab-ci.yml, temporarily add:
- rm -rf node_modules
- npm ci
```

### **Docker Push Fails: "Authentication required"**
```bash
# Solution: Check registry credentials
# Verify CI_REGISTRY_USER and CI_REGISTRY_PASSWORD variables
```

### **Trivy Scan Fails: "CRITICAL vulnerabilities found"**
```bash
# Solution: Update dependencies
npm audit fix
npm update

# Or temporarily allow failures:
allow_failure: true
```

### **Portainer Webhook Fails**
```bash
# Check:
1. Webhook URL is correct in GitLab variables
2. Portainer is accessible from GitLab runner
3. Webhook is not expired
4. SSL certificate is valid
```

## 📚 **Additional Resources**

### **GitLab Documentation**
- [GitLab CI/CD](https://docs.gitlab.com/ee/ci/)
- [GitLab Variables](https://docs.gitlab.com/ee/ci/variables/)
- [Docker Integration](https://docs.gitlab.com/ee/ci/docker/)

### **Security Tools**
- [Trivy](https://github.com/aquasecurity/trivy)
- [Docker Security Best Practices](https://docs.docker.com/develop/security-best-practices/)

### **Portainer**
- [Portainer Webhooks](https://docs.portainer.io/user/docker/stacks/webhooks)

## ✨ **Summary of Improvements**

| Feature | Before | After |
|---------|--------|-------|
| Security Scanning | ❌ Disabled | ✅ Enabled |
| Testing | ❌ None | ✅ Unit tests + Coverage |
| SSL Verification | ❌ Disabled (-k) | ✅ Enabled |
| Secrets | ❌ Hardcoded | ✅ Variables |
| Environments | ❌ None | ✅ Staging + Production |
| Caching | ❌ No cache | ✅ Docker + NPM cache |
| Manual Gates | ❌ None | ✅ Production approval |
| Error Handling | ❌ None | ✅ Proper checks |
| Rollback | ❌ None | ✅ Manual rollback |

## 🎯 **Next Steps**

1. ✅ Review this documentation
2. ⚠️ Set up GitLab CI/CD variables
3. ⚠️ Test the new pipeline on a feature branch
4. ⚠️ Deploy to staging
5. ⚠️ Verify staging deployment
6. ⚠️ Deploy to production
7. ⚠️ Monitor logs and metrics

---

**Note:** The recommended configuration is in `.gitlab-ci.yml.recommended`. Review and test before replacing the current `.gitlab-ci.yml`.
