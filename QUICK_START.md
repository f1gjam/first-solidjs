# 🚀 Quick Start - Unified Web Experience Migration

## ⚡ Execute These Commands in Order

```bash
# 1. Navigate to project
cd /Users/kashif.ali/Dropbox/Programming/FrontEnd/stravastats_react_fe

# 2. Install dependencies
npm install

# 3. Copy all unified components
cp -r ~/Dropbox/Programming/FrontEnd/unified-web-experience/src/components/ui/* src/components/ui/
cp ~/Dropbox/Programming/FrontEnd/unified-web-experience/src/components/layout/*.tsx src/components/layout/
cp ~/Dropbox/Programming/FrontEnd/unified-web-experience/src/lib/*.ts src/lib/
cp ~/Dropbox/Programming/FrontEnd/unified-web-experience/src/hooks/* src/hooks/ 2>/dev/null || true
cp ~/Dropbox/Programming/FrontEnd/unified-web-experience/src/index.css src/
cp ~/Dropbox/Programming/FrontEnd/unified-web-experience/src/App.css src/ 2>/dev/null || true

# 4. Test local build
npm run build

# 5. Test development server
npm run dev
# Open http://localhost:5173 in browser

# 6. If everything works, commit and push
git add -A
git commit -m "Complete unified web experience migration"
git push origin dev

# 7. Wait for CI/CD (2 minutes)
sleep 120

# 8. Verify production
curl -I https://www2.unixcraft.dev/
```

## 📋 Checklist

- [ ] Dependencies installed
- [ ] Components copied
- [ ] Local build successful
- [ ] Dev server runs without errors
- [ ] All pages load in browser
- [ ] API data displays correctly
- [ ] Mobile responsive working
- [ ] Navigation menu works
- [ ] Changes committed and pushed
- [ ] CI/CD pipeline completes
- [ ] Production site verified

## 🔧 If Issues Occur

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### CSS Missing
```bash
# Check tailwind content paths in tailwind.config.ts
# Verify index.css imports Tailwind directives
```

### API Not Working
```bash
# Check .env file exists with VITE_API_BASE_URL
# Verify API endpoints in browser DevTools
```

## 📚 Full Documentation

- `MIGRATION_COMPLETION_GUIDE.md` - Detailed step-by-step guide
- `README_MIGRATION.md` - Complete migration overview
- `UNIFIED_MIGRATION_PLAN.md` - Migration strategy
- `PROJECT_PLAN.md` - Original project plan

## ⏱️ Estimated Time: 10-15 minutes

## ✅ Success Criteria

Website should have:
- Modern shadcn/ui design
- All leaderboard pages working
- Responsive mobile layout
- Fast page loads
- Working API integration
- Proper navigation

---

**Ready to execute!** Follow the commands above in sequence.
