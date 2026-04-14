# Quick Start - Deploy in 3 Steps

## For Complete Beginners - Fastest Method

### Step 1️⃣: Push to GitHub (5 min)

1. **Download GitHub Desktop:**
   - Windows: https://desktop.github.com
   - Mac: https://desktop.github.com
   
2. **Sign in with GitHub account** (create one if needed at github.com)

3. **Create Repository:**
   - File → New Repository
   - Name: `sai-ananta`
   - Click "Create"

4. **Add your code:**
   - Copy all files from `/app/frontend` to the repository folder
   - Commit with message: "Initial commit"
   - Click "Publish repository"

### Step 2️⃣: Deploy Frontend to Vercel (5 min)

1. **Go to:** https://vercel.com/signup
2. **Click:** "Continue with GitHub"
3. **Import your repository:** Click "Import" next to `sai-ananta`
4. **Configure:**
   - Framework: Create React App
   - Build Command: `yarn build`
   - Output Directory: `build`
5. **Click "Deploy"**
6. **Done!** You'll get a URL like: `sai-ananta.vercel.app`

### Step 3️⃣: Deploy Backend to Railway (10 min)

1. **Go to:** https://railway.app
2. **Login with GitHub**
3. **New Project → Deploy from GitHub**
4. **Select your repo**
5. **Settings:**
   - Root Directory: `backend`
   - Start Command: `uvicorn server:app --host 0.0.0.0 --port $PORT`
6. **Add Variables:**
   ```
   MONGO_URL=<get from MongoDB Atlas - see below>
   DB_NAME=saiananta
   SMTP_SERVER=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USERNAME=<your gmail>
   SMTP_PASSWORD=<gmail app password>
   ```
7. **Generate Domain** (in Settings)
8. **Copy backend URL**

### Step 4️⃣: Connect Them

1. **Go back to Vercel**
2. **Your project → Settings → Environment Variables**
3. **Add:**
   - Name: `REACT_APP_BACKEND_URL`
   - Value: `https://your-backend.railway.app`
4. **Redeploy** (Deployments → ... → Redeploy)

---

## Get Free MongoDB (2 min)

1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Create FREE account
3. Create Cluster (M0 - FREE tier)
4. Add Database User (username + password)
5. Network Access → Add IP: `0.0.0.0/0` (allow all)
6. Connect → Drivers → Copy connection string
7. Replace `<password>` with your database password
8. Use this as MONGO_URL in Railway

---

## Get Gmail App Password (3 min)

1. Go to: https://myaccount.google.com/security
2. Enable "2-Step Verification"
3. Go to: https://myaccount.google.com/apppasswords
4. App: Mail | Device: Other (type "Sai Ananta")
5. Click "Generate"
6. Copy 16-character password
7. Use as SMTP_PASSWORD in Railway

---

## ✅ That's It!

**Your website is LIVE!**

- Frontend: `https://sai-ananta.vercel.app`
- Backend: `https://your-app.railway.app`

**Cost:** FREE for first month, then ~₹500/month

---

## Video Tutorial Links (Recommended)

If you prefer video tutorials:

1. **GitHub Desktop Basics:**
   https://www.youtube.com/watch?v=8Dd7KRpKeaE

2. **Deploy React to Vercel:**
   https://www.youtube.com/watch?v=SdX76ObIHv0

3. **Deploy Backend to Railway:**
   https://www.youtube.com/watch?v=3NCNZ5WqzDs

4. **MongoDB Atlas Setup:**
   https://www.youtube.com/watch?v=rPqRyYJmx2g

---

## Need Help?

**Stuck somewhere?**

1. Check the detailed guide: `BEGINNER_DEPLOYMENT_GUIDE.md`
2. Vercel Docs: https://vercel.com/docs
3. Railway Docs: https://docs.railway.app
4. Ask on Discord: 
   - Vercel: https://vercel.com/discord
   - Railway: https://discord.gg/railway

**Common Issues:**

❌ Build fails → Check `package.json` has all dependencies
❌ API not working → Verify backend URL in Vercel env vars
❌ Email not sending → Check Gmail app password
❌ WhatsApp error → Already fixed (uses wa.me now)
