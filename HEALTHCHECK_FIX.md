# Quick Fix - Disable Health Check Temporarily

## Update your Portainer Stack with this:

```yaml
version: '3.8'

services:
  app:
    container_name: StravaClubStatsFrontEnd
    image: registry.gitlab.com/unixcraft/frontend/stravastats_react_fe/stravastats_react_fe-dev:latest
    
    restart: unless-stopped
    
    # TEMPORARILY DISABLE HEALTH CHECK
    healthcheck:
      disable: true
    
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.strava-app-fe.rule=Host(`www2.unixcraft.dev`) || Host(`iwww2.unixcraft.dev`)"
      - "traefik.http.routers.strava-app-fe.entrypoints=websecure"
      - "traefik.http.routers.strava-app-fe.service=strava-app-fe"
      - "traefik.http.routers.strava-app-fe.middlewares=cloudflarewarp@file"
      - "traefik.http.services.strava-app-fe.loadbalancer.server.port=3000"
    
    ports:
      - "3000:3000"
    
    networks:
      - traefik-proxy

networks:
  traefik-proxy:
    external: true
```

## After Disabling Health Check:

1. Update the stack in Portainer
2. Wait for container to restart
3. Check if website loads: https://www2.unixcraft.dev
4. If it works, we know the health check was the issue
5. Then rebuild with the fixed Dockerfile (using `nc` instead of `wget`)

## Investigation Commands:

If website still doesn't load after disabling health check:

```bash
# Check if container is running
docker ps | grep StravaClubStatsFrontEnd

# Check logs
docker logs StravaClubStatsFrontEnd --tail 100

# Check if nginx is responding
docker exec StravaClubStatsFrontEnd nc -z localhost 3000 && echo "Port 3000 is open" || echo "Port 3000 is closed"

# Check nginx processes
docker exec StravaClubStatsFrontEnd ps aux | grep nginx

# Test from host
curl -v http://localhost:3000
```

## If Nginx is Running but Not Responding:

Check the nginx error logs:
```bash
docker exec StravaClubStatsFrontEnd cat /var/log/nginx/error.log
```

## Permanent Fix:

Once we confirm the issue is the health check, commit this change:

```bash
git add Dockerfile
git commit -m "fix: change health check from wget to nc

wget is not available in alpine image by default.
Use nc (netcat) which is included in alpine."
git push
```
