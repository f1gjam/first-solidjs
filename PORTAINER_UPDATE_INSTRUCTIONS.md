# Portainer Deployment Instructions - Get the CSS Fix Live!

## 🔍 **Current Situation**

**Problem:** Website is still showing the OLD Docker image (without PostCSS config)
**Fix:** New Docker image with PostCSS config is ready, but Portainer needs to pull it

**Current Image Hash:** Shows `main.5352cad1.css` (OLD - no Tailwind classes)
**Need:** New image with PostCSS processing (will have Tailwind classes)

---

## ✅ **How to Update Portainer**

### **Option 1: Recreate the Stack (Easiest)**

1. **Go to Portainer:**
   - Navigate to: **Stacks** → **StravaClubStatsFrontEnd**

2. **Pull Latest Image:**
   - Click **"Editor"** tab
   - Scroll to bottom
   - Click **"Pull and redeploy"** checkbox ✅
   - Click **"Update the stack"** button

3. **Wait 30 seconds** for container to restart

4. **Test:** Visit https://www2.unixcraft.dev and hard refresh (Ctrl+Shift+R)

---

### **Option 2: Manual Image Pull (If Option 1 doesn't work)**

**In Portainer:**

1. **Go to Images:**
   - Click **Images** in left menu

2. **Pull New Image:**
   - Click **"Pull image"** button
   - Enter: `registry.gitlab.com/unixcraft/frontend/stravastats_react_fe/stravastats_react_fe-dev:latest`
   - Click **"Pull the image"**

3. **Recreate Container:**
   - Go to **Containers**
   - Find **StravaClubStatsFrontEnd**
   - Click the **stop** icon
   - Click the **delete** icon
   - Go back to **Stacks** → Your stack
   - Click **"Deploy the stack"**

---

### **Option 3: Command Line (Server SSH)**

If you have SSH access to your server:

```bash
# Pull the latest image
docker pull registry.gitlab.com/unixcraft/frontend/stravastats_react_fe/stravastats_react_fe-dev:latest

# Stop and remove old container
docker stop StravaClubStatsFrontEnd
docker rm StravaClubStatsFrontEnd

# In Portainer UI: Click "Deploy the stack" again
# OR use docker-compose if you have the file locally
```

---

## 🔍 **How to Verify It's Updated**

### **Check 1: Asset Hash Changed**

```bash
# View page source
curl -s https://www2.unixcraft.dev/ | grep "main\."

# Should show DIFFERENT hash than: main.5352cad1.css
# New hash will be something like: main.abc123.css (random)
```

### **Check 2: CSS File Has Tailwind Classes**

```bash
# Check for Tailwind utility classes
curl -s https://www2.unixcraft.dev/static/css/main.NEWHASH.css | grep -o "\.bg-blue-500" | head -1

# Should return: .bg-blue-500 (if it's the new build)
# If empty: Still old build
```

### **Check 3: CSS File Size**

```bash
# Check file size
curl -I https://www2.unixcraft.dev/static/css/main.NEWHASH.css | grep Content-Length

# Old build: ~54KB
# New build: Should be 100KB+ (with all Tailwind classes)
```

### **Check 4: Visual Check**

Visit https://www2.unixcraft.dev and:
- **Hard refresh:** Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- **Look for:**
  - Colored navigation bar
  - Styled buttons
  - Proper spacing and margins
  - Tables with borders and styling

---

## 🐛 **If Still Not Working**

### **Check GitLab CI Pipeline**

1. Visit: https://gitlab.com/unixcraft/frontend/stravastats_react_fe/-/pipelines
2. Check if the latest pipeline (commit `62e6fe6`) is **passed** ✅
3. If it's still running or failed, wait for it to complete

### **Verify Docker Image Exists**

```bash
# Check if new image was pushed to registry
# You can check in GitLab:
# Project → Packages & Registries → Container Registry
# Should see recent image tagged as "dev"
```

### **Check Portainer Logs**

```bash
# In Portainer
# Go to: Containers → StravaClubStatsFrontEnd → Logs
# Look for image pull messages
```

---

## 📊 **Expected Timeline**

| Step | Time | Status |
|------|------|--------|
| Pipeline completes | ~3 min | ✅ Should be done now |
| Image available in registry | Immediate | ✅ Should be ready |
| Pull image in Portainer | 30 sec | ⏳ Needs manual action |
| Container restart | 10 sec | ⏳ Happens after pull |
| Website updated | Immediate | ⏳ After container restart |
| **TOTAL** | **~1 minute** | After you trigger pull |

---

## ✅ **Step-by-Step Quick Guide**

**DO THIS NOW:**

1. Open Portainer: https://your-portainer-url
2. Go to: **Stacks** → Find your stack
3. Click: **Editor** tab
4. Check: ✅ **"Pull and redeploy"** checkbox
5. Click: **"Update the stack"** button
6. Wait: 30 seconds
7. Test: https://www2.unixcraft.dev
8. **Hard refresh:** Ctrl+Shift+R

**That's it!** CSS should now be working! 🎉

---

## 🎯 **What You'll See After Update**

### **Before (Current - Broken):**
- Plain text, no colors
- No styling on buttons
- Tables have no borders
- Everything looks like 1995 HTML

### **After (Fixed):**
- ✅ Orange/red header with gradient
- ✅ Styled navigation bar
- ✅ Colored buttons
- ✅ Tables with borders and zebra stripes
- ✅ Proper spacing and layout
- ✅ Modern, professional look

---

## 📞 **Need Help?**

If you get stuck:

1. **Check Pipeline:** https://gitlab.com/unixcraft/frontend/stravastats_react_fe/-/pipelines
2. **Check Container Logs:** Portainer → Containers → StravaClubStatsFrontEnd → Logs
3. **Verify Image:** Portainer → Images → Search for "stravastats_react_fe-dev"

---

**The fix is ready! Just need to pull the new image in Portainer!** 🚀

**ETA: 1 minute after you click "Update the stack"**
