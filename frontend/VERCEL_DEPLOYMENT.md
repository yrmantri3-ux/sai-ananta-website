# Sai Ananta - Vercel Deployment Guide

## Quick Deployment Steps

### 1. Prerequisites
- GitHub account
- Vercel account (free): https://vercel.com
- Backend hosted separately (Railway, Render, or your server)

### 2. Push Code to GitHub

```bash
# Initialize git (if not already done)
cd /app/frontend
git init
git add .
git commit -m "Sai Ananta landing page ready for deployment"

# Create GitHub repo and push
git remote add origin https://github.com/YOUR_USERNAME/sai-ananta.git
git branch -M main
git push -u origin main
```

### 3. Deploy to Vercel

#### Option A: Via Vercel Dashboard (Easiest)

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Configure:
   - **Framework Preset**: Create React App
   - **Root Directory**: `frontend` (if deploying from monorepo) or `.` (if deploying frontend only)
   - **Build Command**: `yarn build`
   - **Output Directory**: `build`

4. Add Environment Variable:
   - **Key**: `REACT_APP_BACKEND_URL`
   - **Value**: Your backend URL (e.g., `https://your-backend.railway.app`)

5. Click "Deploy"

#### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
cd /app/frontend
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: sai-ananta
# - Directory: .
# - Override settings? No

# Set environment variable
vercel env add REACT_APP_BACKEND_URL

# Deploy to production
vercel --prod
```

### 4. Backend Deployment Options

Since Vercel is for frontend only, deploy your backend separately:

#### Option A: Railway (Recommended - Easy)
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Deploy backend
cd /app/backend
railway init
railway up
railway open

# Copy the backend URL and add to Vercel env
```

#### Option B: Render (Free Tier Available)
1. Go to https://render.com
2. New → Web Service
3. Connect GitHub repository
4. Configure:
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn server:app --host 0.0.0.0 --port $PORT`
   - Add environment variables (MONGO_URL, SMTP credentials)

#### Option C: Your Own Server
- Deploy FastAPI backend on your VPS
- Use the server URL as REACT_APP_BACKEND_URL

### 5. Environment Variables

#### Frontend (Vercel)
```
REACT_APP_BACKEND_URL=https://your-backend-url.com
```

#### Backend (Railway/Render/Your Server)
```
MONGO_URL=your-mongodb-connection-string
DB_NAME=saiananta
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

### 6. Custom Domain (Optional)

1. In Vercel Dashboard → Settings → Domains
2. Add your domain: `saiananta.com`
3. Update DNS records as instructed by Vercel
4. SSL certificate is automatic

### 7. Post-Deployment Checklist

✅ Test all forms (enquiry, site visit)
✅ Verify WhatsApp button works
✅ Check email notifications
✅ Test on mobile devices
✅ Verify all images load
✅ Check page load speed

## File Structure for Vercel

```
frontend/
├── public/
├── src/
├── package.json
├── vercel.json          ← Vercel configuration
├── .env.production      ← Production env vars (optional)
└── README.md
```

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies in package.json
- Verify Node version compatibility

### API Calls Failing
- Check REACT_APP_BACKEND_URL is correct
- Ensure backend CORS allows Vercel domain
- Check backend is running

### Images Not Loading
- Verify all image URLs are absolute
- Check image paths in code

## URLs After Deployment

- **Frontend**: https://sai-ananta.vercel.app (or your custom domain)
- **Backend**: https://your-backend.railway.app (or your server URL)

## Cost

- **Vercel**: Free for personal/hobby projects
- **Railway**: $5/month after free trial
- **Render**: Free tier available (with limitations)

## Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app
- Render Docs: https://render.com/docs
