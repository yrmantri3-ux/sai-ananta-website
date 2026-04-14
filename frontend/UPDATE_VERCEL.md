# Update Vercel Deployment - Remove Branding

## Method 1: Auto-Deploy (Easiest - 5 minutes)

Since Vercel is connected to your GitHub, it auto-deploys when you push new code.

### Step 1: Update Code on GitHub

**Using GitHub Desktop:**

1. Open **GitHub Desktop**
2. You'll see changes in the files:
   - `public/index.html` (modified)
   - `public/manifest.json` (modified)
3. At the bottom left:
   - **Summary:** Type `Remove Emergent branding and update site name`
   - Click **"Commit to main"**
4. Click **"Push origin"** (top bar)

**✅ Done!** Vercel will automatically detect the push and redeploy.

### Step 2: Wait for Auto-Deploy

1. Go to: https://vercel.com/dashboard
2. Click on your project (`sai-ananta` or whatever you named it)
3. You'll see **"Building..."** status
4. Wait 2-3 minutes
5. Status will change to **"Ready"**

### Step 3: Verify

1. Click **"Visit"** to open your site
2. Check:
   - ✅ No "Made with Emergent" badge
   - ✅ Browser tab shows "Sai Ananta - Premium 2 & 3 BHK..."
   - ✅ WhatsApp button visible

---

## Method 2: Manual Redeploy (If auto-deploy doesn't work)

### Step 1: Push Code to GitHub
(Same as Method 1, Step 1)

### Step 2: Manually Trigger Redeploy

1. Go to: https://vercel.com/dashboard
2. Click your project
3. Go to **"Deployments"** tab
4. Click the **"..."** (three dots) next to latest deployment
5. Click **"Redeploy"**
6. Confirm by clicking **"Redeploy"** again
7. Wait 2-3 minutes

---

## Method 3: Change Site Name in Vercel Settings

To change the project name in Vercel dashboard:

### Step 1: Go to Settings
1. Vercel Dashboard → Your Project
2. Click **"Settings"** tab
3. Scroll to **"Project Name"**

### Step 2: Rename Project
1. Current name might be: `sai-ananta-website` or similar
2. Change to: `sai-ananta` (or your preferred name)
3. Click **"Save"**

**Note:** This changes the Vercel URL to:
- Old: `https://sai-ananta-website.vercel.app`
- New: `https://sai-ananta.vercel.app`

---

## If You Don't Have GitHub Desktop

### Using Git Command Line:

```bash
# Navigate to your project folder
cd /path/to/sai-ananta-website

# Add all changes
git add .

# Commit changes
git commit -m "Remove Emergent branding and update site name"

# Push to GitHub
git push origin main
```

Vercel will auto-deploy after push.

---

## Troubleshooting

### "Build Failed" Error

If Vercel shows build failed:

1. Go to **Deployments** → Click failed deployment
2. Check **"Build Logs"**
3. Common fix:
   - Settings → **Build & Development Settings**
   - Build Command: `yarn build`
   - Output Directory: `build`
   - Install Command: `yarn install`
   - Click **"Save"**
4. Click **"Redeploy"**

### "Old Version Still Showing"

1. Hard refresh browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear browser cache
3. Try incognito/private window
4. Check deployment status is "Ready" not "Building"

### "Changes Not Detected"

1. Verify code was pushed to GitHub:
   - Go to your GitHub repository
   - Check if files show latest changes
2. If not updated, push again from GitHub Desktop

---

## Quick Verification Checklist

After deployment completes, verify:

- [ ] Open your Vercel URL
- [ ] Browser tab shows: "Sai Ananta - Premium 2 & 3 BHK..."
- [ ] No "Made with Emergent" badge in bottom-right
- [ ] WhatsApp button is visible (green)
- [ ] All forms work correctly
- [ ] Images load properly

---

## Timeline

| Step | Time |
|------|------|
| Push to GitHub | 1 minute |
| Vercel detects change | 10-30 seconds |
| Build & Deploy | 2-3 minutes |
| DNS propagation | Instant |
| **Total** | **~5 minutes** |

---

## Next Steps After Update

1. **Test on mobile:** Open site on phone
2. **Share on WhatsApp:** Test the preview
3. **Share on Facebook:** Check if correct image shows
4. **Test all forms:** Submit enquiry, site visit
5. **Custom domain:** If you have one, update DNS

---

## Important Notes

⚠️ **Don't delete old deployments** - Vercel keeps history for rollback

✅ **Environment variables remain** - No need to re-add REACT_APP_BACKEND_URL

✅ **Custom domain stays** - If configured, it automatically points to new deployment

✅ **SSL certificate remains** - HTTPS continues to work

---

## Need Help?

**If auto-deploy isn't working:**
1. Check Vercel → Settings → Git → "Production Branch" is set to `main`
2. Ensure GitHub integration is active
3. Try manual redeploy

**If site still shows old version:**
- Wait 5 minutes
- Hard refresh (Ctrl+Shift+R)
- Clear browser cache
- Check in incognito mode

---

## ✅ Summary

**What to do:**
1. Open GitHub Desktop
2. Commit changes: "Remove Emergent branding"
3. Push to GitHub
4. Wait 3 minutes
5. Refresh your Vercel site

**Result:**
- Clean, branded website
- No Emergent references
- Professional appearance
- Ready for customers!

🎉 **Your site will be updated automatically!**
