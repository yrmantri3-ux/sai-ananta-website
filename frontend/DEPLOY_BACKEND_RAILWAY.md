# Deploy Backend to Railway - Complete Guide

## What is the Backend For?

The backend handles:
- ✅ Form submissions (Enquiry, Site Visit)
- ✅ Email notifications to info@saiananta.com
- ✅ Database storage (MongoDB)

**Without backend:** Website works, but forms won't submit and no emails sent.

---

## Step 1: Download Backend Code (5 minutes)

### From Emergent:

1. In Emergent, navigate to `/app/backend` folder
2. Download/export the entire `backend` folder
3. Save it on your computer

**What you should have:**
```
backend/
├── api/
│   ├── __init__.py
│   └── enquiry.py
├── server.py
├── requirements.txt
├── .env.example
└── .env
```

---

## Step 2: Create GitHub Repository for Backend (5 minutes)

### Using GitHub Desktop:

1. Open **GitHub Desktop**
2. **File → New Repository**
3. Fill in:
   - **Name:** `sai-ananta-backend`
   - **Description:** `Backend API for Sai Ananta website`
   - **Local Path:** Choose where to save
   - ✅ Check "Initialize with README"
4. Click **"Create Repository"**

### Add Backend Files:

1. Open the repository folder (GitHub Desktop → Repository → Show in Explorer/Finder)
2. **Copy ALL files** from your downloaded `backend` folder
3. Your folder should now have:
   ```
   sai-ananta-backend/
   ├── api/
   ├── server.py
   ├── requirements.txt
   ├── README.md
   └── .env (don't commit this - use .gitignore)
   ```

### Create .gitignore:

Create a file named `.gitignore` with this content:
```
# Don't upload these
.env
__pycache__/
*.pyc
.DS_Store
venv/
```

### Commit & Push:

1. Go back to GitHub Desktop
2. You'll see all files listed
3. Bottom left:
   - **Summary:** `Initial commit - Backend API`
   - Click **"Commit to main"**
4. Click **"Publish repository"**
5. Click **"Publish Repository"**

**✅ Backend code is now on GitHub!**

---

## Step 3: Get Free MongoDB Database (10 minutes)

### 3.1 Create MongoDB Atlas Account:

1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Click **"Sign Up"**
3. Fill in:
   - Email
   - Password
   - First Name, Last Name
4. Click **"Create your Atlas account"**
5. Verify your email

### 3.2 Create Free Cluster:

1. Choose **"Build a Database"**
2. Select **FREE** tier (M0)
   - Provider: AWS
   - Region: Choose nearest to India (e.g., Mumbai)
3. Cluster Name: `sai-ananta-cluster`
4. Click **"Create"**
5. Wait 2-3 minutes for cluster creation

### 3.3 Create Database User:

1. Security → Database Access → **"Add New Database User"**
2. Authentication Method: Password
3. Fill in:
   - **Username:** `saiananta`
   - **Password:** Create strong password (save this!)
   - Example: `SaiAnanta@2024`
4. Database User Privileges: **"Read and write to any database"**
5. Click **"Add User"**

### 3.4 Allow Network Access:

1. Security → Network Access → **"Add IP Address"**
2. Click **"Allow Access from Anywhere"**
   - IP Address: `0.0.0.0/0`
   - Description: `All locations`
3. Click **"Confirm"**

### 3.5 Get Connection String:

1. Database → **"Connect"**
2. Choose **"Connect your application"**
3. Driver: **Python**
4. Version: **3.12 or later**
5. Copy the connection string:
   ```
   mongodb+srv://saiananta:<password>@sai-ananta-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. **Replace `<password>`** with your actual password
7. Save this URL - you'll need it!

**Example:**
```
mongodb+srv://saiananta:SaiAnanta@2024@sai-ananta-cluster.abc123.mongodb.net/?retryWrites=true&w=majority
```

---

## Step 4: Get Gmail App Password (5 minutes)

For sending emails from your backend:

### 4.1 Enable 2-Factor Authentication:

1. Go to: https://myaccount.google.com/security
2. Find **"2-Step Verification"**
3. Click **"Get Started"**
4. Follow the steps (verify with phone)

### 4.2 Generate App Password:

1. Go to: https://myaccount.google.com/apppasswords
2. Select app: **Mail**
3. Select device: **Other (Custom name)**
   - Type: `Sai Ananta Backend`
4. Click **"Generate"**
5. Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)
6. **Important:** Remove spaces when using

**Your app password:** `abcdefghijklmnop` (example)

---

## Step 5: Deploy to Railway (10 minutes)

### 5.1 Create Railway Account:

1. Go to: https://railway.app
2. Click **"Login"**
3. Choose **"Login with GitHub"**
4. Authorize Railway to access your GitHub
5. You get **$5 FREE credit** (500 hours)

### 5.2 Create New Project:

1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Click **"Configure GitHub App"**
4. Select **"Only select repositories"**
5. Choose: `sai-ananta-backend`
6. Click **"Install & Authorize"**

### 5.3 Import Repository:

1. You'll see your repositories listed
2. Click on **`sai-ananta-backend`**
3. Railway will start deploying

### 5.4 Configure Python Environment:

1. Click on your deployed service
2. Go to **"Settings"** tab
3. Scroll to **"Build & Deploy"**

**Set these:**

| Setting | Value |
|---------|-------|
| **Builder** | Nixpacks (default) |
| **Root Directory** | `.` (leave empty or dot) |
| **Start Command** | `uvicorn server:app --host 0.0.0.0 --port $PORT` |

4. Click **"Update"** if you changed anything

---

## Step 6: Add Environment Variables (5 minutes)

### 6.1 Go to Variables:

1. Click on your service
2. Go to **"Variables"** tab
3. Click **"New Variable"**

### 6.2 Add Each Variable:

Click **"New Variable"** for each:

#### Variable 1: MongoDB URL
```
Name: MONGO_URL
Value: mongodb+srv://saiananta:YourPassword@sai-ananta-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
```
*(Use your actual MongoDB connection string)*

#### Variable 2: Database Name
```
Name: DB_NAME
Value: saiananta
```

#### Variable 3: SMTP Server
```
Name: SMTP_SERVER
Value: smtp.gmail.com
```

#### Variable 4: SMTP Port
```
Name: SMTP_PORT
Value: 587
```

#### Variable 5: SMTP Username
```
Name: SMTP_USERNAME
Value: your-email@gmail.com
```
*(Your Gmail address)*

#### Variable 6: SMTP Password
```
Name: SMTP_PASSWORD
Value: abcdefghijklmnop
```
*(Your 16-character Gmail app password WITHOUT spaces)*

### 6.3 Save Variables:

After adding all 6 variables, Railway will automatically restart your backend.

---

## Step 7: Generate Public URL (2 minutes)

### 7.1 Create Domain:

1. Go to **"Settings"** tab
2. Scroll to **"Networking"** section
3. Click **"Generate Domain"**
4. Railway will give you a URL like:
   ```
   https://sai-ananta-backend-production.up.railway.app
   ```

### 7.2 Copy Backend URL:

**Save this URL!** You'll need it for frontend.

---

## Step 8: Connect Frontend to Backend (5 minutes)

Now connect your Vercel frontend to Railway backend:

### 8.1 Update Vercel Environment Variable:

1. Go to: https://vercel.com/dashboard
2. Click your **Sai Ananta project**
3. Go to **"Settings"** → **"Environment Variables"**
4. Find `REACT_APP_BACKEND_URL` or create new:
   - **Name:** `REACT_APP_BACKEND_URL`
   - **Value:** `https://your-backend.up.railway.app`
   - **Environment:** Production, Preview, Development (all)
5. Click **"Save"**

### 8.2 Redeploy Frontend:

1. Go to **"Deployments"** tab
2. Click **"..."** next to latest deployment
3. Click **"Redeploy"**
4. Wait 2-3 minutes

**✅ Frontend and backend are now connected!**

---

## Step 9: Test Everything (5 minutes)

### 9.1 Test Backend Directly:

Open in browser:
```
https://your-backend.up.railway.app/api/
```

**You should see:**
```json
{"message":"Hello World"}
```

If you see this, backend is working! ✅

### 9.2 Test Frontend Forms:

1. Open your Vercel site
2. Click **"Enquire Now"** button
3. Fill the form:
   - Name: Test User
   - Email: your-email@gmail.com
   - Mobile: 9876543210
   - BHK: 2 BHK
4. Click **"Get Pre Launch Deals"**
5. You should see success message!

### 9.3 Check Email:

1. Check inbox of: `info@saiananta.com`
2. You should receive email with form details
3. If yes, **everything is working!** ✅

---

## 📊 Cost Breakdown

| Service | Free Tier | After Free |
|---------|-----------|------------|
| **Railway** | $5 credit (500 hours) | $5/month (~₹400) |
| **MongoDB Atlas** | 512MB free forever | $9/month |
| **Gmail SMTP** | Free | Free |
| **Vercel Frontend** | Free | Free |
| **Total** | **FREE for 1 month** | **~₹400/month** |

---

## 🔧 Troubleshooting

### Backend Shows "Application Failed"

**Check Railway Logs:**
1. Railway → Your service → **"Deployments"** tab
2. Click latest deployment
3. Check **"Build Logs"** and **"Deploy Logs"**
4. Look for errors

**Common Issues:**
- Missing environment variables
- Wrong MongoDB connection string
- SMTP credentials incorrect

### Forms Submit but No Email

**Check:**
1. SMTP_PASSWORD is correct (no spaces)
2. Gmail app password is valid
3. Gmail 2FA is enabled
4. Railway logs show email sending attempt

**Fix:**
1. Railway → Variables → Update SMTP_PASSWORD
2. Remove any spaces from password
3. Service will auto-restart

### "Cannot connect to MongoDB"

**Check:**
1. MONGO_URL is correct
2. Password in URL is correct
3. Network access allows 0.0.0.0/0
4. Database user exists with read/write permissions

**Fix:**
1. MongoDB Atlas → Copy connection string again
2. Replace password in URL
3. Update Railway variable
4. Wait for restart

### Backend URL Not Working

**Check:**
1. Domain is generated in Railway
2. Service is running (green status)
3. No build errors in logs

**Fix:**
1. Settings → Networking → Generate Domain
2. Check Deployments for errors
3. Redeploy if needed

---

## 📋 Quick Reference

### Important URLs to Save:

```
Frontend (Vercel): https://sai-ananta.vercel.app
Backend (Railway): https://your-backend.up.railway.app
MongoDB: https://cloud.mongodb.com
Railway Dashboard: https://railway.app/dashboard
```

### Important Credentials:

```
MongoDB Username: saiananta
MongoDB Password: [your-password]
Gmail App Password: [16-character-password]
Backend URL: [save from Railway]
```

---

## ✅ Success Checklist

After deployment, verify:

- [ ] Backend URL opens and shows {"message":"Hello World"}
- [ ] Frontend enquiry form opens
- [ ] Form submission shows success message
- [ ] Email received at info@saiananta.com
- [ ] Site visit form works
- [ ] WhatsApp button works
- [ ] No console errors in browser
- [ ] Railway shows "Active" status
- [ ] MongoDB shows connections

---

## 🎯 What You've Deployed

### Backend Handles:
- ✅ POST /api/enquiry (form submission)
- ✅ POST /api/site-visit (site visit booking)
- ✅ Email notifications
- ✅ Database storage
- ✅ CORS enabled for Vercel

### Stack:
- **Language:** Python 3
- **Framework:** FastAPI
- **Database:** MongoDB Atlas
- **Email:** Gmail SMTP
- **Hosting:** Railway
- **Cost:** ~₹400/month

---

## 📞 Need Help?

**Railway Issues:**
- Check: https://docs.railway.app
- Discord: https://discord.gg/railway

**MongoDB Issues:**
- Docs: https://docs.mongodb.com/atlas
- Support: https://support.mongodb.com

**Email Issues:**
- Gmail Help: https://support.google.com/mail
- Check 2FA is enabled

---

## 🚀 Next Steps

After backend is deployed:

1. ✅ Test all forms thoroughly
2. ✅ Monitor Railway usage (500 hours free)
3. ✅ Set up billing after free credit ends
4. ✅ Add custom domain (optional)
5. ✅ Set up monitoring/alerts

---

## 💡 Pro Tips

### Tip 1: Monitor Usage
- Railway Dashboard shows hours used
- $5 credit = 500 hours (~20 days if always running)
- Add $5 credit to avoid downtime

### Tip 2: Database Backups
- MongoDB Atlas auto-backs up free tier
- Download backups manually if needed

### Tip 3: Email Limits
- Gmail: 500 emails/day
- For more, use SendGrid (100 free/day)

### Tip 4: Logs
- Railway keeps logs for 7 days
- Check regularly for errors

---

🎉 **Your backend is now live and connected!**

Forms work → Emails sent → Database stores data → Everything functional!
