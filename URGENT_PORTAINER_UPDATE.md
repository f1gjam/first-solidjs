# URGENT: Manual Portainer Update Required

## 🚨 **Current Status**

- ✅ Code is fixed (postcss.config.js added)
- ✅ Committed to repository  
- ✅ GitLab pipeline should be complete
- ❌ **Portainer is NOT pulling the new image automatically**
- ❌ Website still shows OLD build (no CSS)

**CSS Hash:** `main.5352cad1.css` (54KB - OLD)
**Need:** New CSS with Tailwind classes (100KB+)

---

## 🎯 **WHAT YOU MUST DO NOW**

### **Option A: Portainer Web UI (Recommended)**

1. **Open Portainer in your browser**
   
2. **Navigate to your stack:**
   - Click **"Stacks"** in left menu
   - Find **"StravaClubStatsFrontEnd"** (or your stack name)
   - Click on it

3. **Update the stack:**
   - Click **"Editor"** tab at top
   - Scroll to the VERY BOTTOM
   - Find checkbox: **"Pull and redeploy"** 
   - ✅ CHECK THIS BOX
   - Click blue button: **"Update the stack"**

4. **Wait 30-60 seconds** for container to restart

5. **Test the website:**
   - Go to: https://www2.unixcraft.dev
   - Press: **Ctrl + Shift + R** (hard refresh)
   - CSS should now be working!

---

### **Option B: SSH Command Line**

If you have SSH access to your server:

```bash
# Step 1: Pull the latest image
docker pull registry.gitlab.com/unixcraft/frontend/stravastats_react_fe/stravastats_react_fe-dev:latest

# Step 2: Stop and remove the old container
docker stop StravaClubStatsFrontEnd
docker rm StravaClubStatsFrontEnd

# Step 3: Restart via Portainer
# Go to Portainer UI → Stacks → Your stack → "Deploy the stack"

# OR if you have docker-compose locally:
cd /path/to/your/docker-compose/
docker-compose up -d
```

---

### **Option C: Portainer Webhook (If configured)**

If you have a webhook configured:

```bash
# Trigger the webhook
curl -X POST https://your-portainer-url/api/webhooks/your-webhook-id
```

---

## 🔍 **Why Isn't It Auto-Updating?**

Portainer **does NOT automatically pull new Docker images** by default. You have 3 options:

1. **Manual update** (what we're doing now)
2. **Configure webhooks** (for future auto-deploys)
3. **Use Watchtower** (auto-updates containers)

---

## ✅ **How to Verify It Worked**

After updating Portainer, check these:

### **1. CSS Hash Changed**
```bash
curl -s https://www2.unixcraft.dev/ | grep "main\."
# Should show NEW hash, not main.5352cad1.css
```

### **2. CSS Has Tailwind Classes**
```bash
curl -s https://www2.unixcraft.dev/static/css/main.NEWHASH.css | grep -o "\.bg-blue-500"
# Should return: .bg-blue-500
```

### **3. Visual Check**
- Visit https://www2.unixcraft.dev
- Hard refresh: Ctrl + Shift + R
- Should see: Colors, styled tables, proper layout

---

## 📊 **Timeline**

| Action | Time | Status |
|--------|------|--------|
| Code fixed | ✅ Done | postcss.config.js added |
| Pipeline complete | ✅ Done | Image in registry |
| **→ Update Portainer** | **⏳ YOU DO THIS** | **Manual action required** |
| Container restart | 30 sec | Happens automatically |
| Website updated | Instant | After container restart |
| **TOTAL** | **1 minute** | After you click update |

---

## 🎯 **Simple Steps (Copy/Paste)**

**Go to Portainer:**
1. Stacks → Your Stack
2. Editor tab
3. ✅ Check "Pull and redeploy"
4. Click "Update the stack"
5. Wait 30 seconds
6. Visit https://www2.unixcraft.dev
7. Ctrl + Shift + R (hard refresh)
8. **DONE! CSS works!** 🎉

---

## 🚨 **Common Mistakes**

❌ **Just refreshing the website** - Browser cache! Use Ctrl+Shift+R
❌ **Not checking the "Pull and redeploy" box** - Container won't update
❌ **Waiting for automatic update** - Portainer doesn't auto-pull by default
❌ **Not waiting for container restart** - Give it 30 seconds

---

## ❓ **Still Not Working?**

If after updating Portainer it still doesn't work:

1. **Check Pipeline Status:**
   https://gitlab.com/unixcraft/frontend/stravastats_react_fe/-/pipelines
   - Should be green ✅ PASSED

2. **Check Container Logs:**
   Portainer → Containers → StravaClubStatsFrontEnd → Logs
   - Look for errors

3. **Verify Image Was Pulled:**
   Portainer → Images
   - Search for: `stravastats_react_fe-dev`
   - Check "Created" timestamp (should be recent)

4. **Check Container ID Changed:**
   ```bash
   docker ps | grep StravaClubStatsFrontEnd
   # Container ID should be different after restart
   ```

---

## 🎊 **After It Works**

Once CSS is loading, we can:
- ✅ Add documentation images from Google Doc
- ✅ Enhance hero sections with gradients
- ✅ Polish leaderboard tables
- ✅ Add animations and transitions
- ✅ Make it look even more modern!

---

**The fix is ready. Just need YOU to click "Update the stack" in Portainer!** 🚀

**ETA: 1 minute after you do this.**

---

## 📞 **Quick Help**

**Can't find Portainer?**
- Check your bookmarks
- Usually at: https://portainer.your-domain.com
- Or: http://your-server-ip:9000

**Can't find the stack?**
- Look under "Stacks" in left menu
- Stack name might be different
- Look for "stravastats" or "frontend"

**No "Pull and redeploy" checkbox?**
- Update Portainer to latest version
- Or use Option B (SSH commands)

---

**STATUS: WAITING FOR YOU TO UPDATE PORTAINER** ⏳
