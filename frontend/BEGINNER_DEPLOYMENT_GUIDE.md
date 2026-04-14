# Complete Beginner's Guide to Deploy Sai Ananta Website

## 🎯 What We'll Do
1. Download your website code
2. Upload it to GitHub (code storage)
3. Deploy frontend to Vercel (FREE hosting)
4. Deploy backend to Railway (backend hosting)
5. Connect everything together

**Time needed:** 30-45 minutes  
**Cost:** FREE (or $5/month for backend after trial)

---

## Step 1: Download Your Website Code (5 minutes)

### Option A: Using Emergent's Export Feature
1. In Emergent, look for "Save to GitHub" or "Export" button
2. This will give you all the code

### Option B: Manual Download
Since you're on Emergent, I'll create a downloadable package for you:

```bash
# Run these commands in Emergent terminal
cd /app
tar -czf sai-ananta-website.tar.gz frontend/
```

Then download the `sai-ananta-website.tar.gz` file.

---

## Step 2: Create GitHub Account (5 minutes)

### 2.1 Sign Up
1. Go to: https://github.com
2. Click **"Sign up"** (top right)
3. Enter:
   - Email address
   - Password
   - Username (e.g., `yourname-dev`)
4. Verify email
5. Choose **FREE plan**

### 2.2 Install GitHub Desktop (Easiest for beginners)
1. Go to: https://desktop.github.com
2. Download for your OS (Windows/Mac)
3. Install and open
4. Click **"Sign in to GitHub.com"**
5. Login with your GitHub account

---

## Step 3: Upload Code to GitHub (10 minutes)

### 3.1 Create New Repository

1. Open GitHub Desktop
2. Click **"Create a New Repository"** or **File → New Repository**
3. Fill in:
   - **Name:** `sai-ananta-website`
   - **Description:** `Real estate landing page for Sai Ananta project`
   - **Local Path:** Choose where to save (e.g., Desktop)
   - ✅ Check "Initialize with README"
4. Click **"Create Repository"**

### 3.2 Add Your Website Files

1. Open the repository folder (GitHub Desktop → Repository → Show in Explorer/Finder)
2. Extract your downloaded code into this folder
3. Your folder should look like:
   ```
   sai-ananta-website/
   ├── public/
   ├── src/
   ├── package.json
   ├── vercel.json
   └── README.md
   ```

### 3.3 Commit and Push

1. Go back to GitHub Desktop
2. You'll see all files listed
3. In bottom left:
   - **Summary:** Type `Initial commit - Sai Ananta website`
   - Click **"Commit to main"**
4. Click **"Publish repository"** (top bar)
5. ✅ Uncheck "Keep this code private" if you want it public
6. Click **"Publish Repository"**

**✅ Done!** Your code is now on GitHub.

---

## Step 4: Deploy to Vercel (10 minutes)

### 4.1 Create Vercel Account

1. Go to: https://vercel.com/signup
2. Click **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub
4. Choose **Hobby (FREE)** plan

### 4.2 Import Your Project

1. You'll see Vercel Dashboard
2. Click **"Add New..."** → **"Project"**
3. Find your `sai-ananta-website` repository
4. Click **"Import"**

### 4.3 Configure Project

You'll see a configuration page:

1. **Framework Preset:** 
   - Select **"Create React App"** (should auto-detect)

2. **Root Directory:**
   - Leave as **"./"** (current directory)

3. **Build Settings:**
   - Build Command: `yarn build`
   - Output Directory: `build`
   - Install Command: `yarn install`

4. **Environment Variables:**
   - Click **"Add"**
   - **Name:** `REACT_APP_BACKEND_URL`
   - **Value:** Leave empty for now (we'll add after backend setup)

5. Click **"Deploy"**

### 4.4 Wait for Deployment

- You'll see a building animation
- Takes 2-5 minutes
- ✅ Success screen will show

### 4.5 Get Your Website URL

- You'll get a URL like: `https://sai-ananta-website.vercel.app`
- Click **"Visit"** to see your website!

**⚠️ Note:** Forms won't work yet (we need backend). But you can see the full design!

---

## Step 5: Deploy Backend to Railway (15 minutes)

### 5.1 Create Railway Account

1. Go to: https://railway.app
2. Click **"Login with GitHub"**
3. Authorize Railway
4. You get **$5 FREE credit** (no credit card needed initially)

### 5.2 Create New Project

1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Click **"Configure GitHub App"**
4. Give Railway access to your `sai-ananta-website` repository
5. Select your repository

### 5.3 Configure Backend

Railway will auto-detect your backend. You need to set it up:

1. Click on your project
2. Go to **"Settings"**
3. Change **"Root Directory"** to: `backend`
4. **Start Command:** `uvicorn server:app --host 0.0.0.0 --port $PORT`

### 5.4 Add Environment Variables

1. Go to **"Variables"** tab
2. Click **"Add Variable"** for each:

```
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/saiananta
DB_NAME=saiananta
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-gmail-app-password
```

**To get MongoDB URL:**

#### Option A: Free MongoDB Atlas
1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Create FREE account
3. Create a cluster (select FREE M0 tier)
4. Database Access → Add User
5. Network Access → Allow access from anywhere (0.0.0.0/0)
6. Connect → Drivers → Copy connection string
7. Replace `<password>` with your database password

#### Option B: Use Railway's MongoDB
1. In Railway, click **"New"** → **"Database"** → **"Add MongoDB"**
2. Railway will auto-create MongoDB and set MONGO_URL

### 5.5 Get Backend URL

1. Go to **"Settings"** tab
2. Click **"Generate Domain"**
3. Copy the URL (e.g., `https://sai-ananta-backend.railway.app`)

---

## Step 6: Connect Frontend to Backend (5 minutes)

### 6.1 Update Vercel Environment Variable

1. Go back to Vercel dashboard
2. Select your project
3. Go to **"Settings"** → **"Environment Variables"**
4. Find `REACT_APP_BACKEND_URL`
5. Edit and add your Railway backend URL:
   ```
   https://your-backend.railway.app
   ```
6. Click **"Save"**

### 6.2 Redeploy Frontend

1. Go to **"Deployments"** tab
2. Click the **"..."** menu on latest deployment
3. Click **"Redeploy"**
4. Wait 2-3 minutes

---

## Step 7: Setup Email Notifications (10 minutes)

### 7.1 Get Gmail App Password

1. Go to: https://myaccount.google.com/security
2. Enable **"2-Step Verification"** (follow steps)
3. Go to: https://myaccount.google.com/apppasswords
4. Select:
   - **App:** Mail
   - **Device:** Other (Custom name) → Type "Sai Ananta"
5. Click **"Generate"**
6. Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

### 7.2 Add to Railway

1. Go to Railway → Your backend project
2. **Variables** tab
3. Update:
   ```
   SMTP_USERNAME=your-gmail@gmail.com
   SMTP_PASSWORD=abcdefghijklmnop (no spaces)
   ```
4. Railway will auto-restart

---

## Step 8: Test Everything (5 minutes)

### 8.1 Test Website
1. Open your Vercel URL: `https://sai-ananta-website.vercel.app`
2. Test WhatsApp button (bottom right)
3. Click **"Enquire Now"** button
4. Fill the form:
   - Name: Test User
   - Email: your-email@gmail.com
   - Mobile: 9876543210
5. Submit

### 8.2 Check Email
- Check `info@saiananta.com` inbox
- You should receive an email with form details

### 8.3 Test All Features
- ✅ WhatsApp button works
- ✅ Forms submit successfully
- ✅ Email received
- ✅ All images load
- ✅ Mobile responsive

---

## Step 9: Custom Domain (Optional - 10 minutes)

### 9.1 Buy Domain
1. Go to: https://www.namecheap.com or https://domains.google
2. Search for: `saiananta.com`
3. Purchase (₹500-800/year)

### 9.2 Add to Vercel
1. Vercel Dashboard → Your Project → **"Settings"** → **"Domains"**
2. Add your domain: `saiananta.com`
3. Vercel will show DNS records to add

### 9.3 Configure DNS
1. Go to your domain registrar (Namecheap/Google Domains)
2. DNS Settings
3. Add the records shown by Vercel
4. Wait 24-48 hours for propagation

---

## 📊 Pricing Summary

| Service | Free Tier | Paid Plan |
|---------|-----------|-----------|
| **Vercel** | ✅ Unlimited (Hobby) | $20/month (Pro) |
| **Railway** | $5 credit (500 hours) | $5/month after |
| **MongoDB Atlas** | ✅ 512MB free | $9/month (larger) |
| **Domain** | ❌ | ₹500-800/year |
| **Gmail SMTP** | ✅ Free | Free |

**Total Cost:** FREE initially, then ~₹500/month after Railway credit

---

## 🆘 Troubleshooting

### "Build Failed" on Vercel
- Check build logs
- Ensure all dependencies in `package.json`
- Try: Settings → Build & Development → Override build command: `yarn install && yarn build`

### "API calls not working"
- Check REACT_APP_BACKEND_URL is correct
- Ensure Railway backend is running (check logs)
- Verify CORS is enabled in backend

### "Email not sending"
- Verify Gmail App Password is correct
- Check Railway logs for SMTP errors
- Ensure 2FA is enabled on Gmail

### "WhatsApp not opening"
- Clear browser cache
- Try different browser
- Check if WhatsApp Web is blocked by network

---

## 📱 Quick Commands Reference

### Vercel CLI (Alternative to dashboard)
```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```

### Railway CLI (Alternative to dashboard)
```bash
npm i -g @railway/cli
railway login
railway up
railway open
```

### Update Code
1. Make changes in GitHub Desktop
2. Commit changes
3. Push to GitHub
4. Vercel auto-deploys
5. Railway auto-deploys

---

## ✅ Final Checklist

- [ ] Code uploaded to GitHub
- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to Railway
- [ ] MongoDB connected
- [ ] Environment variables set
- [ ] Email notifications working
- [ ] WhatsApp button working
- [ ] Custom domain added (optional)
- [ ] SSL certificate active (auto by Vercel)
- [ ] Mobile responsive tested

---

## 🎉 Congratulations!

Your Sai Ananta website is now live on the internet!

**Share these URLs:**
- Website: `https://sai-ananta-website.vercel.app`
- Backend: `https://your-backend.railway.app`

**Need Help?**
- Vercel Discord: https://vercel.com/discord
- Railway Discord: https://discord.gg/railway
- GitHub Support: https://support.github.com

---

## 📞 Support Contacts

If you get stuck, you can:
1. Check Vercel/Railway documentation
2. Ask on their Discord communities
3. Search on Stack Overflow
4. YouTube tutorials on "Deploy React to Vercel"

**Good luck! 🚀**
