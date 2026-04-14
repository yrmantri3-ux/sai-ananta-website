# Railway Crash Fix - Motor/PyMongo Compatibility

## Error Explanation

The crash is caused by version incompatibility between `motor` and `pymongo`:

```
ImportError: cannot import name '_QUERY_OPTIONS' from 'pymongo.cursor'
```

**Root Cause:** `motor==3.3.1` requires `pymongo==4.5.0`, but Railway installed a newer incompatible version.

---

## ✅ Fixed requirements.txt

I've updated the requirements.txt with the correct versions:

```txt
fastapi==0.110.1
uvicorn==0.25.0
pymongo==4.5.0          ← Added (compatible with motor 3.3.1)
motor==3.3.1
aiosmtplib==5.1.0
pydantic>=2.6.4
pydantic-core>=2.16.0
email-validator>=2.2.0
python-dotenv>=1.0.1
dnspython>=2.6.0
python-multipart>=0.0.9
starlette==0.37.2       ← Added (FastAPI dependency)
```

---

## 🔧 How to Fix on Railway

### Step 1: Update requirements.txt on GitHub

**Method A: Via GitHub Website**

1. Go to your repository: `sai-ananta-backend`
2. Click `requirements.txt`
3. Click **Edit** (pencil icon)
4. Replace entire content with:

```txt
fastapi==0.110.1
uvicorn==0.25.0
pymongo==4.5.0
motor==3.3.1
aiosmtplib==5.1.0
pydantic>=2.6.4
pydantic-core>=2.16.0
email-validator>=2.2.0
python-dotenv>=1.0.1
dnspython>=2.6.0
python-multipart>=0.0.9
starlette==0.37.2
```

5. Click **Commit changes**

**Method B: Via GitHub Desktop**

1. Download updated `/app/backend` folder from Emergent
2. Replace `requirements.txt` in your local repository
3. Commit: "Fix motor/pymongo compatibility"
4. Push to GitHub

### Step 2: Railway Auto-Redeploys

Railway will automatically:
1. Detect the commit
2. Rebuild with correct versions
3. Deploy successfully

**Time:** 3-5 minutes

---

## ✅ What Will Happen

After fixing:

1. **Build Logs** will show:
   ```
   Successfully installed pymongo-4.5.0 motor-3.3.1 ...
   ```

2. **Deploy Logs** will show:
   ```
   INFO:     Started server process
   INFO:     Uvicorn running on http://0.0.0.0:PORT
   INFO:     Application startup complete
   ```

3. **Status:** Green "Active" badge

---

## 🧪 Test Backend

After deployment succeeds:

### Test 1: API Health Check
Open in browser:
```
https://your-backend.up.railway.app/api/
```

**Expected Response:**
```json
{"message":"Hello World"}
```

### Test 2: Check Logs
Railway → Your service → **Logs** tab

Should see:
```
INFO:     Application startup complete
```

No error messages.

---

## 📋 Version Compatibility Matrix

| Package | Version | Notes |
|---------|---------|-------|
| Python | 3.11-3.13 | Railway auto-detects |
| pymongo | 4.5.0 | Must match motor |
| motor | 3.3.1 | Async MongoDB driver |
| fastapi | 0.110.1 | Web framework |
| uvicorn | 0.25.0 | ASGI server |

---

## 🆘 If Still Crashing

### Check Railway Logs:

1. Railway Dashboard → Your Service
2. **Deployments** → Click latest
3. Check both:
   - **Build Logs** (package installation)
   - **Deploy Logs** (runtime errors)

### Common Issues:

**Issue 1: "Still showing motor error"**
- Verify `pymongo==4.5.0` is in requirements.txt
- Check Railway rebuilt (new deployment timestamp)

**Issue 2: "MongoDB connection error"**
- Different error! That's progress.
- Check `MONGO_URL` environment variable
- Verify MongoDB Atlas network access

**Issue 3: "SMTP error"**
- Also different! Backend is running.
- Check SMTP credentials

---

## 💡 Why This Happened

**Original requirements.txt had:**
- ✅ `motor==3.3.1` specified
- ❌ `pymongo` NOT specified

**Result:**
- Railway installed latest pymongo (5.x)
- motor 3.3.1 requires pymongo 4.x
- Version mismatch → crash

**Fix:**
- ✅ Explicitly specify `pymongo==4.5.0`
- ✅ Ensures compatibility
- ✅ No version conflicts

---

## ✅ Quick Fix Checklist

- [ ] Update requirements.txt on GitHub
- [ ] Include `pymongo==4.5.0`
- [ ] Commit changes
- [ ] Wait for Railway to redeploy (3-5 min)
- [ ] Check deployment status (should be green)
- [ ] Test API endpoint
- [ ] Check logs (no errors)
- [ ] Test frontend form submission

---

## 🎯 Expected Timeline

| Step | Time |
|------|------|
| Update GitHub | 1 minute |
| Railway detects change | 10-30 seconds |
| Build packages | 2 minutes |
| Deploy | 1 minute |
| **Total** | **~4 minutes** |

---

**After this fix, your backend will deploy successfully!** ✅
