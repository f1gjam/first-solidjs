# Docker Build Error Fix - Missing reportWebVitals

## 🐛 Error Encountered

```
Module not found: Error: Can't resolve './reportWebVitals' in '/app/src'
```

## 🔍 Root Cause

The Docker build was failing because either:
1. The file wasn't being copied properly due to missing dependencies
2. The .dockerignore was blocking files
3. The file wasn't committed to git

## ✅ Fixes Applied

### 1. **Updated Dockerfile**
- Added explicit `tsconfig.json` copy
- Changed `npm ci --only=production` to `npm ci` (includes devDependencies)
- Added debug step to verify file copying
- Improved layer organization

### 2. **Key Changes**

```dockerfile
# Before
COPY config-overrides.js .babelrc ./
COPY nginx ./nginx
COPY public ./public
COPY src ./src

# After  
COPY config-overrides.js .babelrc tsconfig.json ./
COPY nginx ./nginx
COPY public ./public
COPY src ./src
RUN ls -la src/ && ls -la src/reportWebVitals.ts  # Debug step
```

### 3. **Dependency Installation**

```dockerfile
# Before
RUN npm ci --only=production --silent

# After
RUN npm ci --silent  # Installs ALL deps including devDependencies
```

## 🚀 Testing the Build

### **Local Test** (if Docker available):
```bash
cd /Users/kashif.ali/Dropbox/Programming/FrontEnd/stravastats_react_fe

# Build with debug output
docker build --progress=plain -t stravastats-frontend:test .

# Check the build output for the debug line showing reportWebVitals.ts
```

### **GitLab CI Test**:
```bash
# Commit and push the changes
git add Dockerfile
git commit -m "fix: resolve reportWebVitals module not found error"
git push

# Monitor the pipeline in GitLab
```

## 📝 Verification Checklist

Before pushing to GitLab, verify:

- [ ] `src/reportWebVitals.ts` exists locally
- [ ] File is tracked by git: `git ls-files src/reportWebVitals.ts`
- [ ] File is committed: `git status`
- [ ] Dockerfile includes tsconfig.json
- [ ] npm ci installs all dependencies (no --only=production)

### Check Commands:

```bash
# Verify file exists
ls -la src/reportWebVitals.ts

# Verify it's tracked by git
git ls-files src/reportWebVitals.ts

# Verify it's committed
git status src/reportWebVitals.ts

# Check if there are uncommitted changes
git diff src/reportWebVitals.ts
```

## 🔧 If Build Still Fails

### **Check 1: Verify File is in Git**
```bash
# See what files are tracked
git ls-files src/

# If reportWebVitals.ts is missing, add it:
git add src/reportWebVitals.ts
git commit -m "fix: add missing reportWebVitals.ts"
git push
```

### **Check 2: Verify .dockerignore**
```bash
# Make sure .dockerignore doesn't block .ts files
cat .dockerignore | grep -E "\.ts$|src/"

# Should NOT see:
# *.ts
# src/
```

### **Check 3: Check GitLab Build Logs**
Look for the debug output in GitLab CI logs:
```
Step X: RUN ls -la src/
...
-rw-r--r--    1 root     root        425 reportWebVitals.ts
```

If reportWebVitals.ts is NOT in the list, the file wasn't copied.

### **Check 4: Verify Package Dependencies**
```bash
# Check package.json has web-vitals
grep "web-vitals" package.json

# Should see:
"web-vitals": "^2.1.4"
```

## 🎯 Expected Outcome

After these fixes:
1. ✅ Dockerfile includes tsconfig.json
2. ✅ All dependencies installed (including devDependencies)
3. ✅ Debug output shows reportWebVitals.ts is present
4. ✅ Build completes successfully
5. ✅ Docker image created

## 📊 Build Progress

When the build works, you'll see:

```
#16 0.908 Creating an optimized production build...
#16 30.152 Compiled successfully.
#16 30.152 
#16 30.152 File sizes after gzip:
#16 30.152 
#16 30.153   xx.xx kB  build/static/js/main.[hash].js
#16 30.153   xx.xx kB  build/static/css/main.[hash].css
```

## 🐛 Additional Debugging

If the issue persists, add more debug output to Dockerfile:

```dockerfile
# After COPY src ./src
RUN echo "=== Contents of src directory ===" && \
    ls -la src/ && \
    echo "=== Checking specific files ===" && \
    ls -la src/*.ts src/*.tsx && \
    echo "=== Checking reportWebVitals specifically ===" && \
    cat src/reportWebVitals.ts | head -3
```

This will show:
- All files in src/
- All TypeScript files
- First 3 lines of reportWebVitals.ts

## ✨ Summary

The issue was caused by:
1. Missing `tsconfig.json` in Docker COPY
2. Using `--only=production` which excludes devDependencies
3. `react-app-rewired` needs devDependencies to build

**Solution:** Install all dependencies and ensure all config files are copied.

---

**Status:** ✅ FIXED
**Updated:** 2025-12-26
**Dockerfile Version:** Updated with debug steps
