# Railway Deployment - Fixed Requirements

The error you're seeing is because the `requirements.txt` contains Emergent-specific packages that don't exist on public PyPI.

## ✅ Solution: Use Clean requirements.txt

I've created a clean `requirements.txt` with only the packages needed for deployment.

### Clean requirements.txt (already updated):

```txt
fastapi==0.110.1
uvicorn==0.25.0
motor==3.3.1
aiosmtplib==5.1.0
pydantic>=2.6.4
pydantic-core>=2.16.0
email-validator>=2.2.0
python-dotenv>=1.0.1
dnspython>=2.6.0
python-multipart>=0.0.9
```

---

## 🔧 How to Fix on Railway

### Option 1: Update on GitHub (Recommended)

1. **Download the updated backend folder** from Emergent (with new requirements.txt)
2. **Replace requirements.txt** in your GitHub repository
3. **Commit & Push:**
   ```
   git add requirements.txt
   git commit -m "Fix requirements.txt for Railway"
   git push
   ```
4. **Railway will auto-redeploy** with fixed requirements

### Option 2: Manual Fix on GitHub

If you already uploaded to GitHub:

1. Go to your GitHub repository: `sai-ananta-backend`
2. Click on `requirements.txt` file
3. Click the **pencil icon** (Edit)
4. Replace entire content with:
   ```
   fastapi==0.110.1
   uvicorn==0.25.0
   motor==3.3.1
   aiosmtplib==5.1.0
   pydantic>=2.6.4
   pydantic-core>=2.16.0
   email-validator>=2.2.0
   python-dotenv>=1.0.1
   dnspython>=2.6.0
   python-multipart>=0.0.9
   ```
5. Click **"Commit changes"**
6. Railway will automatically redeploy

---

## 🚀 What Will Happen

After fixing:

1. ✅ Railway detects new commit
2. ✅ Rebuilds with clean requirements
3. ✅ All packages install successfully
4. ✅ Backend deploys successfully
5. ✅ Status shows "Active" (green)

**Time:** 3-5 minutes

---

## 📋 Packages Removed (Emergent-specific)

These were removed because they only exist in Emergent environment:

- ❌ `emergentintegrations==0.1.0` (Emergent only)
- ❌ `annotated-doc` (not needed)
- ❌ `boto3` (AWS, not needed)
- ❌ `black` (dev tool, not needed in production)
- ❌ Other unnecessary packages

---

## ✅ Packages Kept (Essential)

- ✅ `fastapi` - Web framework
- ✅ `uvicorn` - Server
- ✅ `motor` - MongoDB async driver
- ✅ `aiosmtplib` - Email sending
- ✅ `pydantic` - Data validation
- ✅ `email-validator` - Email validation
- ✅ `python-dotenv` - Environment variables
- ✅ `dnspython` - DNS for MongoDB
- ✅ `python-multipart` - Form data handling

---

## 🔍 Verify Deployment

After Railway redeploys:

### Check Build Logs:
1. Railway Dashboard → Your service
2. **Deployments** tab
3. Click latest deployment
4. Check **Build Logs** - should show:
   ```
   Successfully installed fastapi uvicorn motor...
   ```

### Check Deploy Logs:
Should show:
```
INFO:     Started server process
INFO:     Uvicorn running on http://0.0.0.0:PORT
INFO:     Application startup complete
```

### Test Backend:
Open in browser:
```
https://your-backend.up.railway.app/api/
```

Should see:
```json
{"message":"Hello World"}
```

---

## 🆘 If Still Not Working

### Check Railway Logs:

**Build Logs show error?**
- Copy the error message
- Check which package is failing
- Remove it from requirements.txt

**Deploy Logs show error?**
- Check environment variables are set
- Verify MONGO_URL is correct
- Check SMTP credentials

### Common Issues:

**Issue:** "Module not found"
**Fix:** Add the missing package to requirements.txt

**Issue:** "Can't connect to MongoDB"
**Fix:** Check MONGO_URL environment variable

**Issue:** "SMTP error"
**Fix:** Verify Gmail app password (no spaces)

---

## 💡 Pro Tip

For future deployments, always use minimal requirements.txt with only:
- Packages your code actually imports
- No development tools (black, pytest, etc.)
- No Emergent-specific packages

---

## ✅ Quick Fix Summary

**Problem:** Emergent packages in requirements.txt  
**Solution:** Use clean requirements.txt (already created)  
**Action:** Update on GitHub → Railway auto-redeploys  
**Time:** 5 minutes  
**Result:** Backend deploys successfully ✅

---

**Next Step:** Update requirements.txt on GitHub and Railway will redeploy automatically!
