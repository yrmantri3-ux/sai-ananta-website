# Vercel Deployment Guide - Sai Ananta Website

## 📦 Pre-Deployment Checklist

Before deploying to Vercel, ensure you have:

- ✅ All code changes committed to GitHub
- ✅ Railway backend URL noted down
- ✅ Resend API key ready
- ✅ Email address for receiving form submissions

---

## 🚀 Step-by-Step Deployment to Vercel

### Step 1: Push All Code to GitHub

1. Ensure all frontend code is in your GitHub repository
2. Repository structure should be:
   ```
   your-repo/
   ├── frontend/
   │   ├── public/
   │   ├── src/
   │   ├── package.json
   │   └── ...
   └── backend/ (optional, if pushing both)
   ```

### Step 2: Deploy Frontend to Vercel

1. Go to: https://vercel.com/
2. Click **"Add New"** → **"Project"**
3. Import your GitHub repository
4. Configure Project:
   - **Framework Preset:** Create React App
   - **Root Directory:** `frontend` (if your repo has both frontend & backend)
   - **Build Command:** `yarn build`
   - **Output Directory:** `build`

### Step 3: Configure Environment Variables

In Vercel Project Settings → **Environment Variables**, add:

| Variable Name | Value | Environment |
|--------------|-------|-------------|
| `REACT_APP_BACKEND_URL` | `https://backend-production-2df2.up.railway.app` | Production, Preview, Development |

**Important:** 
- Use your actual Railway backend URL
- No trailing slash at the end
- Must start with `https://`

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. Your site will be live at: `https://your-project.vercel.app`

### Step 5: Configure Custom Domain (Optional)

1. Go to Project Settings → **Domains**
2. Add your custom domain (e.g., `saiananta.com`)
3. Update DNS records as instructed by Vercel
4. Wait for SSL certificate to be issued (automatic)

---

## 📧 How to Change Email for Form Submissions

### Option 1: Change via Railway Environment Variables (Recommended)

1. **Go to Railway Dashboard:**
   - Navigate to your backend service
   - Click on **"Variables"** tab

2. **Update RECIPIENT_EMAIL:**
   - Find variable: `RECIPIENT_EMAIL`
   - Click **Edit** (three dots icon)
   - Change value to your new email address
   - Example: `sales@saiananta.com` or `leads@saiananta.com`
   - Click **Save**

3. **Railway will auto-redeploy** with the new email

4. **Test the form** to ensure emails arrive at the new address

### Option 2: Change via Code (If you prefer)

1. **Update Backend Code:**
   - Open: `/app/backend/api/enquiry.py`
   - Find line with: `RECIPIENT_EMAIL = os.getenv('RECIPIENT_EMAIL', 'info@saiananta.com')`
   - Change the default: `'info@saiananta.com'` → `'yournew@email.com'`

2. **Push to GitHub:**
   ```bash
   git add backend/api/enquiry.py
   git commit -m "Update recipient email"
   git push
   ```

3. **Railway will auto-deploy** the changes

### Option 3: Multiple Email Recipients

If you want to receive emails on multiple addresses:

1. **Edit `/app/backend/api/enquiry.py`:**
   - Find: `RECIPIENT_EMAIL = os.getenv('RECIPIENT_EMAIL', 'info@saiananta.com')`
   - Change to: `RECIPIENT_EMAIL = os.getenv('RECIPIENT_EMAIL', 'email1@example.com,email2@example.com')`

2. **Update Resend Email Sending Logic:**
   - Find the `send_email` function
   - Change:
     ```python
     "to": [RECIPIENT_EMAIL],
     ```
   - To:
     ```python
     "to": RECIPIENT_EMAIL.split(','),
     ```

3. **Set in Railway Variables:**
   - `RECIPIENT_EMAIL` = `email1@example.com,email2@example.com`

4. Push changes and test

---

## 🔄 Redeployment After Changes

### Vercel (Frontend)

**Automatic:**
- Any push to your GitHub main/master branch triggers auto-deployment

**Manual:**
1. Go to Vercel Dashboard → Your Project
2. Click **"Deployments"** tab
3. Click **three dots (⋮)** on latest deployment
4. Click **"Redeploy"**

### Railway (Backend)

**Automatic:**
- Any push to GitHub backend folder triggers auto-deployment
- Environment variable changes trigger auto-restart

**Manual:**
1. Go to Railway Dashboard → Backend Service
2. Click **"Deploy"** button at top right

---

## ⚙️ Environment Variables Reference

### Vercel (Frontend)
```
REACT_APP_BACKEND_URL=https://your-backend.up.railway.app
```

### Railway (Backend)
```
RESEND_API_KEY=re_your_api_key_here
FROM_EMAIL=onboarding@resend.dev
RECIPIENT_EMAIL=info@saiananta.com
SMTP_SERVER=smtp.gmail.com (no longer used, but keep for now)
SMTP_PORT=465 (no longer used)
SMTP_USERNAME=your@email.com (no longer used)
SMTP_PASSWORD=your_password (no longer used)
```

**Note:** SMTP variables are no longer used (switched to Resend), but you can keep them in Railway without issues.

---

## 🧪 Testing Checklist After Deployment

### Frontend (Vercel)
- [ ] Website loads correctly
- [ ] All sections display properly (Hero, Pricing, Amenities, etc.)
- [ ] Enquiry modal opens when clicking "Enquire Now"
- [ ] Phone numbers are correct (+91 70663 31177)
- [ ] WhatsApp button works with correct number
- [ ] Call button works with correct number
- [ ] Exit intent popup appears when moving mouse to top
- [ ] Images load properly (lazy loading working)
- [ ] Amenities tabs display without border issues
- [ ] Privacy Policy page loads at `/privacy-policy`
- [ ] Terms & Conditions page loads at `/terms-and-conditions`
- [ ] Footer links work correctly
- [ ] Favicon shows in browser tab
- [ ] Site loads fast (check with PageSpeed Insights)

### Backend (Railway)
- [ ] Health check works: `curl https://your-backend.up.railway.app/`
- [ ] Form submission works (submit enquiry from website)
- [ ] Email arrives at RECIPIENT_EMAIL address
- [ ] Site visit form works
- [ ] No errors in Railway deployment logs

### Integration
- [ ] Submit form from Vercel website
- [ ] Check if email arrives within 1 minute
- [ ] Verify email content is correct
- [ ] Test WhatsApp button
- [ ] Test Call button

---

## 🐛 Common Issues & Solutions

### Issue 1: Form Submission Fails
**Solution:**
- Check if `REACT_APP_BACKEND_URL` is set correctly in Vercel
- Verify Railway backend is running (check deployment status)
- Test backend directly: `curl https://your-backend.up.railway.app/api/enquiry -X POST -H "Content-Type: application/json" -d '{"name":"Test","email":"test@test.com","mobile":"9876543210"}'`

### Issue 2: No Email Received
**Solution:**
- Check Railway logs for errors
- Verify `RESEND_API_KEY` is correct
- Check if `RECIPIENT_EMAIL` is set correctly
- Test Resend API key in Resend dashboard

### Issue 3: Website Shows "REACT_APP_BACKEND_URL is not defined"
**Solution:**
- Environment variables must start with `REACT_APP_` in React
- Redeploy Vercel after adding the variable
- Variables are only loaded during build time, not runtime

### Issue 4: Images Not Loading
**Solution:**
- Check if images are accessible (open image URLs in browser)
- Verify image URLs in code are correct
- Check browser console for CORS errors

### Issue 5: Exit Popup Not Showing
**Solution:**
- Move mouse cursor to the very top of the browser window (outside the page)
- Popup only shows once per session
- Refresh page and try again

---

## 📊 Monitoring & Analytics

### Vercel Analytics (Free)
- Automatically enabled for all projects
- View in: Vercel Dashboard → Your Project → **Analytics**
- Shows: Page views, visitors, performance

### Google Analytics (Recommended)
1. Create GA4 property
2. Get tracking ID
3. Add to `public/index.html`:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Railway Logs
- View in: Railway Dashboard → Backend Service → **Logs** tab
- Shows: API requests, email sending status, errors

---

## 🔐 Security Best Practices

1. **Never commit sensitive data to GitHub:**
   - API keys, passwords, email credentials
   - Use environment variables instead

2. **Use HTTPS only:**
   - Vercel and Railway provide SSL automatically
   - Never use HTTP URLs

3. **Keep dependencies updated:**
   - Run `yarn upgrade` periodically
   - Check for security vulnerabilities

4. **Monitor logs regularly:**
   - Check for suspicious activity
   - Monitor failed API requests

---

## 📞 Support

If you need help:
- **Vercel Docs:** https://vercel.com/docs
- **Railway Docs:** https://docs.railway.app
- **Resend Docs:** https://resend.com/docs

---

## ✅ Deployment Complete!

Your Sai Ananta website is now live and ready to generate leads! 🎉

**Live URLs:**
- Frontend: `https://sai-ananta-website.vercel.app`
- Backend: `https://backend-production-2df2.up.railway.app`

**Next Steps:**
1. Submit sitemap to Google Search Console
2. Set up Google My Business listing
3. List on property portals (99acres, MagicBricks)
4. Start social media marketing
