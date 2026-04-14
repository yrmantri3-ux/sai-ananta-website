# Quick Update Guide - For Vercel

## Already Deployed on Vercel? Follow These 3 Steps:

### Step 1: Push Changes to GitHub (2 minutes)

**If you used GitHub Desktop:**
1. Open GitHub Desktop
2. You'll see changed files listed
3. Bottom left box:
   - Write: `Update branding`
   - Click **"Commit to main"**
4. Click **"Push origin"** (top right)

**If you used Git command line:**
```bash
git add .
git commit -m "Update branding"
git push origin main
```

### Step 2: Vercel Auto-Deploys (3 minutes)

1. Vercel automatically detects the GitHub push
2. Starts building new version
3. Deploys automatically
4. No action needed from you!

**To Watch Progress:**
- Go to: https://vercel.com/dashboard
- Click your project
- See "Building..." then "Ready"

### Step 3: Verify (1 minute)

1. Open your Vercel URL
2. Hard refresh: Press `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
3. Check:
   - ✅ No "Made with Emergent" badge
   - ✅ New site name in browser tab
   - ✅ WhatsApp button working

---

## That's It! 🎉

Your live website is now updated with:
- ✅ No Emergent branding
- ✅ Professional site name
- ✅ Clean appearance

**Total time:** ~5 minutes

---

## Didn't Work? Try This:

### Manual Redeploy:
1. Go to Vercel Dashboard
2. Your Project → **Deployments** tab
3. Click **"..."** next to latest
4. Click **"Redeploy"**
5. Wait 3 minutes

### Still Old Version?
- Clear browser cache
- Open in incognito/private window
- Wait 5 more minutes
- Hard refresh (Ctrl+Shift+R)

---

## Questions?

**Q: Do I lose my custom domain?**
A: No, it stays connected.

**Q: Do environment variables reset?**
A: No, they remain.

**Q: Will the site go offline?**
A: No, Vercel does zero-downtime deployment.

**Q: How long does it take?**
A: 3-5 minutes total.

**Q: Can I rollback if needed?**
A: Yes, Vercel keeps all previous versions.

---

**Need detailed help?** See `UPDATE_VERCEL.md` file.
