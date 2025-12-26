# Docker Compose Configuration Review

## 🔍 Current Configuration Issues

### ❌ **Critical Issues**

#### 1. **Port Mapping Mismatch** 🚨
```yaml
ports:
  - 3000:80
```
**Problem:** Container listens on port 3000, but mapping expects port 80
**Impact:** Application won't be accessible
**Risk Level:** HIGH

#### 2. **Working Directory Incorrect**
```yaml
working_dir: /app
```
**Problem:** Nginx serves from `/usr/share/nginx/html`, not `/app`
**Impact:** May cause issues, but shouldn't break the app
**Risk Level:** LOW

#### 3. **Unnecessary Environment Variable**
```yaml
environment:
  NODE_ENV: production
```
**Problem:** React app is already built (static files), NODE_ENV has no effect at runtime
**Impact:** None, but misleading
**Risk Level:** NONE

### ⚠️ **Medium Priority Issues**

#### 4. **Traefik Service Port Mismatch**
```yaml
- "traefik.http.services.strava-app-fe.loadbalancer.server.port=3000"
```
**Status:** This is CORRECT (matches container port)
**Note:** Make sure this matches the exposed port

#### 5. **Missing Health Check**
No health check defined in docker-compose (though Dockerfile has one)
**Impact:** Traefik might route traffic before app is ready

#### 6. **No Resource Limits**
No memory or CPU limits defined
**Impact:** Container could consume all host resources

#### 7. **No Restart Policy**
Container won't restart automatically on failure

---

## ✅ **Recommended Configuration**

```yaml
version: '3.8'

services:
  app:
    container_name: StravaClubStatsFrontEnd
    image: registry.gitlab.com/unixcraft/frontend/stravastats_react_fe/stravastats_react_fe-dev:latest
    
    # Health check (uses Dockerfile HEALTHCHECK)
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:3000/"]
      interval: 30s
      timeout: 3s
      start_period: 5s
      retries: 3
    
    # Restart policy
    restart: unless-stopped
    
    # Resource limits
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 256M
        reservations:
          cpus: '0.25'
          memory: 128M
    
    # Traefik labels
    labels:
      # Enable Traefik
      - "traefik.enable=true"
      
      # Router configuration
      - "traefik.http.routers.strava-app-fe.rule=Host(`www2.unixcraft.dev`) || Host(`iwww2.unixcraft.dev`)"
      - "traefik.http.routers.strava-app-fe.entrypoints=websecure"
      - "traefik.http.routers.strava-app-fe.service=strava-app-fe"
      - "traefik.http.routers.strava-app-fe.middlewares=cloudflarewarp@file"
      - "traefik.http.routers.strava-app-fe.tls=true"
      - "traefik.http.routers.strava-app-fe.tls.certresolver=cloudflare"
      
      # Service configuration (CRITICAL: Must match container port)
      - "traefik.http.services.strava-app-fe.loadbalancer.server.port=3000"
      
      # Health check
      - "traefik.http.services.strava-app-fe.loadbalancer.healthcheck.path=/"
      - "traefik.http.services.strava-app-fe.loadbalancer.healthcheck.interval=30s"
    
    # Port mapping - FIXED to match container port
    ports:
      - "3000:3000"
    
    # Security options (optional but recommended)
    security_opt:
      - no-new-privileges:true
    
    # Read-only root filesystem (optional, for extra security)
    # read_only: true
    # tmpfs:
    #   - /tmp
    #   - /var/cache/nginx
    #   - /var/log/nginx
    
    networks:
      - traefik-proxy

networks:
  traefik-proxy:
    external: true
```

---

## 🔧 **Minimal Fix (Quick Deploy)**

If you want to deploy quickly with minimal changes:

```yaml
version: '3.8'

services:
  app:
    container_name: StravaClubStatsFrontEnd
    image: registry.gitlab.com/unixcraft/frontend/stravastats_react_fe/stravastats_react_fe-dev:latest
    
    restart: unless-stopped
    
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.strava-app-fe.rule=Host(`www2.unixcraft.dev`) || Host(`iwww2.unixcraft.dev`)"
      - "traefik.http.routers.strava-app-fe.entrypoints=websecure"
      - "traefik.http.routers.strava-app-fe.service=strava-app-fe"
      - "traefik.http.routers.strava-app-fe.middlewares=cloudflarewarp@file"
      - "traefik.http.services.strava-app-fe.loadbalancer.server.port=3000"
    
    # FIXED: Port mapping to match container
    ports:
      - "3000:3000"
    
    networks:
      - traefik-proxy

networks:
  traefik-proxy:
    external: true
```

---

## 📊 **Before vs After Comparison**

| Setting | Current (Wrong) | Fixed (Correct) | Impact |
|---------|----------------|-----------------|---------|
| **Port Mapping** | `3000:80` | `3000:3000` | 🔴 CRITICAL |
| **Working Dir** | `/app` | (removed) | 🟡 Low |
| **Environment** | `NODE_ENV` | (removed) | 🟢 None |
| **Restart Policy** | None | `unless-stopped` | 🟡 Medium |
| **Health Check** | None | Added | 🟡 Medium |
| **Resource Limits** | None | Added | 🟢 Optional |
| **Compose Version** | `3` | `3.8` | 🟢 Better |

---

## 🚀 **Deployment Steps**

### **Step 1: Update docker-compose.yml in Portainer**

1. Go to Portainer → Stacks → Your Stack
2. Click "Editor"
3. Replace with the recommended or minimal fix configuration
4. Click "Update the stack"

### **Step 2: Verify Container Logs**

```bash
# Check if nginx started successfully
docker logs StravaClubStatsFrontEnd

# Should see:
# nginx: [notice] 1#1: start worker processes
# No permission errors!
```

### **Step 3: Test Accessibility**

```bash
# Test directly
curl http://localhost:3000

# Test through Traefik
curl https://www2.unixcraft.dev
```

---

## 🔍 **Detailed Issue Analysis**

### **Issue 1: Port Mapping `3000:80`**

#### Current:
```yaml
ports:
  - 3000:80  # Maps host port 3000 to container port 80
```

#### Problem:
- Container exposes port **3000** (nginx listens on 3000)
- Mapping looks for port **80** inside container
- Port 80 has nothing listening
- Connection will fail

#### Fix:
```yaml
ports:
  - 3000:3000  # Maps host port 3000 to container port 3000
```

#### Alternative (if you want host port 80):
```yaml
ports:
  - 80:3000  # Maps host port 80 to container port 3000
```

---

### **Issue 2: Working Directory `/app`**

#### Current:
```yaml
working_dir: /app
```

#### Problem:
- Build artifacts are in `/usr/share/nginx/html` (not `/app`)
- Working directory doesn't affect nginx serving path
- Misleading and unnecessary

#### Fix:
Remove the line entirely. Nginx knows where to serve files from its config.

---

### **Issue 3: NODE_ENV Environment Variable**

#### Current:
```yaml
environment:
  NODE_ENV: production
```

#### Problem:
- React app is already built (during Docker build)
- Static files don't use NODE_ENV at runtime
- Only matters during `npm run build` (already done)
- Has no effect in production

#### Fix:
Remove it. Not needed for serving static files with nginx.

---

## ⚡ **Performance Recommendations**

### **1. Resource Limits**
```yaml
deploy:
  resources:
    limits:
      cpus: '0.5'        # Max 50% of one CPU core
      memory: 256M       # Max 256MB RAM
    reservations:
      cpus: '0.25'       # Reserved 25% of one CPU core
      memory: 128M       # Reserved 128MB RAM
```

**Why?** 
- Prevents one container from consuming all resources
- Nginx + static files needs very little

### **2. Restart Policy**
```yaml
restart: unless-stopped
```

**Options:**
- `no` - Never restart (default)
- `always` - Always restart
- `on-failure` - Only restart on failure
- `unless-stopped` - Always restart unless manually stopped (RECOMMENDED)

### **3. Health Checks**
```yaml
healthcheck:
  test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:3000/"]
  interval: 30s
  timeout: 3s
  start_period: 5s
  retries: 3
```

**Why?**
- Traefik won't route traffic until healthy
- Automatic recovery if app becomes unhealthy
- Better monitoring

---

## 🔒 **Security Enhancements**

### **1. No New Privileges**
```yaml
security_opt:
  - no-new-privileges:true
```
Prevents privilege escalation attacks.

### **2. Read-Only Root Filesystem** (Optional)
```yaml
read_only: true
tmpfs:
  - /tmp
  - /var/cache/nginx
  - /var/log/nginx
```
Maximum security - filesystem is immutable except for specified temp directories.

### **3. Drop Capabilities** (Advanced)
```yaml
cap_drop:
  - ALL
cap_add:
  - NET_BIND_SERVICE  # Only if using port < 1024
```

---

## 📝 **Testing Checklist**

After deploying:

- [ ] Container starts successfully
- [ ] No errors in logs: `docker logs StravaClubStatsFrontEnd`
- [ ] Port 3000 is accessible: `curl http://localhost:3000`
- [ ] Traefik routing works: `curl https://www2.unixcraft.dev`
- [ ] Health check passes: `docker inspect StravaClubStatsFrontEnd | grep -A 10 Health`
- [ ] Application loads in browser
- [ ] All pages accessible (home, leaderboards, docs, etc.)
- [ ] No console errors in browser
- [ ] Mobile view works

---

## 🐛 **Troubleshooting**

### **If container won't start:**
```bash
# Check logs
docker logs StravaClubStatsFrontEnd

# Check if port 3000 is already in use on host
netstat -tulpn | grep 3000

# Try running without port mapping first
docker run -d --name test registry.gitlab.com/unixcraft/frontend/stravastats_react_fe/stravastats_react_fe-dev:latest
docker logs test
```

### **If Traefik can't reach it:**
```bash
# Check if container is on the same network as Traefik
docker network inspect traefik-proxy

# Verify container is healthy
docker inspect StravaClubStatsFrontEnd | grep -A 5 State

# Check Traefik logs
docker logs traefik | grep strava-app-fe
```

### **If getting "502 Bad Gateway":**
- Check the service port label matches container port (3000)
- Verify nginx is actually listening on 3000
- Check container logs for nginx errors

---

## ✨ **Summary**

### **Critical Fix Required:**
```yaml
ports:
  - "3000:3000"  # Changed from 3000:80
```

### **Recommended Additional Changes:**
1. Add restart policy: `unless-stopped`
2. Remove `working_dir` (unnecessary)
3. Remove `NODE_ENV` (no effect)
4. Add health check
5. Add resource limits
6. Update compose version to 3.8

### **Priority:**
1. **HIGH** - Fix port mapping (won't work without this)
2. **MEDIUM** - Add restart policy (prevents outages)
3. **LOW** - Everything else (improvements)

---

**Files to Update:**
- Portainer Stack: docker-compose.yml

**Estimated Downtime:** ~30 seconds (stack update)

**Ready to deploy!** 🚀
