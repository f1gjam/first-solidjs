# Docker Build Error Fix - Missing reportWebVitals & Nginx Permissions

## 🐛 Errors Encountered

### Error 1: Missing Module
```
Module not found: Error: Can't resolve './reportWebVitals' in '/app/src'
```

### Error 2: Nginx Permission Denied
```
nginx: [emerg] open() "/var/run/nginx.pid" failed (13: Permission denied)
```

### Error 3: Nginx PID Directive Location
```
nginx: [emerg] "pid" directive is not allowed here in /etc/nginx/conf.d/default.conf:6
```

## 🔍 Root Causes

### Issue 1: Missing reportWebVitals
1. Missing `tsconfig.json` in Docker COPY
2. Using `--only=production` which excludes devDependencies
3. `react-app-rewired` needs devDependencies to build

### Issue 2: Nginx Permissions
1. Nginx running as non-root user (appuser)
2. Cannot write to `/var/run/nginx.pid` (requires root)
3. Cannot write to default nginx cache/log directories

### Issue 3: PID Directive Placement
1. `pid` directive placed in server block (wrong)
2. Must be in main nginx context, not server block
3. Dockerfile handles PID location via sed command

## ✅ Fixes Applied

### Fix 1: Build Dependencies
- Added explicit `tsconfig.json` copy
- Changed `npm ci --only=production` to `npm ci` (includes devDependencies)
- Improved layer organization

### Fix 2: Nginx Non-Root Support
- Modified nginx to use `/tmp/nginx.pid` instead of `/var/run/nginx.pid`
- Created writable directories for non-root user:
  - `/var/cache/nginx`
  - `/var/log/nginx`
  - `/tmp/nginx`
  - `/tmp/nginx.pid`
- Removed default nginx user directive
- Set proper permissions for appuser

### Fix 3: PID Directive Removal
- Removed `pid /tmp/nginx.pid;` from server block in nginx.conf
- Dockerfile uses `sed` to modify main nginx.conf instead
- PID location set at nginx main context level, not server level

## 📝 Key Changes

### Dockerfile Changes:

```dockerfile
# Create writable directories for nginx non-root user
RUN mkdir -p /var/cache/nginx /var/log/nginx /tmp/nginx && \
    chown -R appuser:appuser /var/cache/nginx /var/log/nginx /tmp/nginx /usr/share/nginx/html /etc/nginx/conf.d && \
    chmod -R 755 /var/cache/nginx /var/log/nginx /tmp/nginx && \
    touch /tmp/nginx.pid && \
    chown appuser:appuser /tmp/nginx.pid

# Remove default nginx user directive
RUN sed -i '/user  nginx;/d' /etc/nginx/nginx.conf || true

# Modify nginx.conf to use /tmp for pid (at main context level)
RUN sed -i 's|/var/run/nginx.pid|/tmp/nginx.pid|g' /etc/nginx/nginx.conf
```

### nginx/nginx.conf Changes:

```nginx
server {
  listen       3000;
  server_name  _;
  
  # NO pid directive here - it's handled by Dockerfile at main nginx.conf level
  
  # Security headers
  add_header X-Frame-Options "SAMEORIGIN" always;
  # ... rest of config
}
```

**Note:** The `pid` directive is automatically set by the Dockerfile's `sed` command which modifies the main `/etc/nginx/nginx.conf` file.

## 🚀 Testing the Build

### **GitLab CI Test**:
```bash
# Commit and push the changes
git add Dockerfile nginx/nginx.conf DOCKER_BUILD_FIX.md
git commit -m "fix: resolve nginx configuration errors

- Remove pid directive from server block (must be in main context)
- Add tsconfig.json to Docker context
- Install all dependencies including devDependencies
- Configure nginx to run as non-root user
- Use /tmp for nginx pid file via Dockerfile sed command
- Set proper permissions for appuser"
git push

# Monitor the pipeline in GitLab
```

## 🎯 Expected Outcome

After these fixes:
1. ✅ Dockerfile includes tsconfig.json
2. ✅ All dependencies installed (including devDependencies)
3. ✅ Build completes successfully
4. ✅ Docker image created
5. ✅ Nginx starts as non-root user
6. ✅ No permission errors
7. ✅ No nginx configuration errors
8. ✅ Application accessible on port 3000

## 📊 Successful Startup Output

When everything works, you'll see:

```
/docker-entrypoint.sh: Configuration complete; ready for start up
2025/12/26 04:16:58 [notice] 1#1: using the "epoll" event method
2025/12/26 04:16:58 [notice] 1#1: nginx/1.25.5
2025/12/26 04:16:58 [notice] 1#1: built by gcc 13.2.1 20231014 (Alpine 13.2.1_git20231014)
2025/12/26 04:16:58 [notice] 1#1: OS: Linux 5.14.0-427.20.1.el9_4.x86_64
2025/12/26 04:16:58 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1073741816:1073741816
2025/12/26 04:16:58 [notice] 1#1: start worker processes
2025/12/26 04:16:58 [notice] 7#7: start worker process 7
```

No errors about permissions or configuration!

## 🔒 Security Benefits

Running nginx as non-root:
- ✅ Reduced attack surface
- ✅ Better container security
- ✅ Follows security best practices
- ✅ Compliant with most security policies

## ✨ Summary

### Build Issue Fixed:
- Missing `tsconfig.json` → Added to COPY
- Wrong npm install → Changed to include devDependencies
- `react-app-rewired` not found → Fixed by installing all deps

### Runtime Issue Fixed:
- Permission denied → Use `/tmp/nginx.pid`
- Cannot write to `/var/run` → Created writable directories
- Running as root → Now runs as appuser (UID 1001)

### Configuration Issue Fixed:
- PID directive in server block → Removed from server block
- Handled by Dockerfile sed command → Sets PID at main nginx.conf level
- Proper nginx context → No configuration errors

---

**Status:** ✅ FULLY FIXED
**Updated:** 2025-12-26
**Issues Resolved:** 3/3
