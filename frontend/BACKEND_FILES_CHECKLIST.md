# Backend Files Checklist

## ✅ Files You Need from Backend Folder

When downloading the backend folder from Emergent, make sure you have:

### 📁 Required Structure:

```
sai-ananta-backend/
│
├── api/                       ⭐ REQUIRED FOLDER
│   ├── __init__.py           ✅ Makes it a Python package
│   └── enquiry.py            ✅ Form handling & email logic
│
├── server.py                  ⭐ REQUIRED - Main FastAPI app
├── requirements.txt           ⭐ REQUIRED - Python dependencies
├── .env.example              ✅ Template for environment variables
└── README.md                 ℹ️ Optional - Documentation
```

---

## 📄 File Descriptions

### 1. server.py
**What it does:** Main FastAPI application
- Routes setup
- CORS configuration
- Database connection
- API endpoints

**Must have:** ✅

### 2. requirements.txt
**What it does:** Lists all Python packages needed
```
fastapi==0.110.1
uvicorn==0.25.0
motor==3.3.1
aiosmtplib>=5.1.0
pydantic>=2.6.4
python-dotenv>=1.0.1
... (and more)
```

**Must have:** ✅

### 3. api/enquiry.py
**What it does:** 
- Handles form submissions
- Sends emails
- Validates data

**Must have:** ✅

### 4. api/__init__.py
**What it does:** Makes `api` folder a Python package

**Must have:** ✅ (Even if empty)

### 5. .env.example
**What it does:** Template showing what environment variables needed

**Optional but helpful:** ✅

---

## ❌ Files You DON'T Need

```
❌ .env                 (has local credentials, don't upload)
❌ __pycache__/        (Python cache, auto-generated)
❌ *.pyc               (Compiled Python, auto-generated)
❌ venv/               (Virtual environment, too large)
❌ .DS_Store           (Mac system file)
```

---

## 🎯 Minimum Required Files

To deploy backend, you MUST have at least:

1. ✅ `server.py`
2. ✅ `requirements.txt`
3. ✅ `api/` folder with:
   - ✅ `__init__.py`
   - ✅ `enquiry.py`

**That's only 4 files!** Very simple.

---

## 📋 Pre-Upload Checklist

Before uploading to GitHub:

- [ ] `server.py` exists
- [ ] `requirements.txt` exists
- [ ] `api/` folder exists
- [ ] `api/__init__.py` exists (can be empty)
- [ ] `api/enquiry.py` exists
- [ ] Create `.gitignore` file
- [ ] NO `.env` file (don't upload credentials!)

---

## 🔒 Create .gitignore

Create a file named `.gitignore` in backend folder:

```gitignore
# Environment variables (never upload!)
.env

# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python

# Virtual environments
venv/
env/
ENV/

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
```

This prevents sensitive files from being uploaded.

---

## 📦 What Railway Needs

Railway will automatically:
1. ✅ Read `requirements.txt`
2. ✅ Install all packages
3. ✅ Run `server.py` with uvicorn
4. ✅ Set up Python environment

You just need to provide the files!

---

## ✅ Verification

After copying files, your folder should look like:

```
sai-ananta-backend/
├── api/
│   ├── __init__.py       (can be empty, just exists)
│   └── enquiry.py        (has code)
├── server.py             (has code)
├── requirements.txt      (lists packages)
├── .gitignore           (you create this)
└── README.md            (optional)
```

**Total files:** 5-6 files  
**Total size:** < 50 KB (very small!)

---

## 🚀 Upload Process

1. **Create GitHub repo** for backend
2. **Copy these files** into repo folder
3. **Commit & Push** to GitHub
4. **Deploy to Railway** from GitHub
5. **Add environment variables** in Railway
6. **Done!**

---

## ⚠️ Common Mistakes

### Mistake 1: Uploading .env file
**Problem:** Contains sensitive credentials  
**Fix:** Add .env to .gitignore

### Mistake 2: Missing api/__init__.py
**Problem:** Python can't import api folder  
**Fix:** Create empty `__init__.py` file

### Mistake 3: Wrong file structure
**Problem:** Files not in right folders  
**Fix:** Follow structure exactly as shown

### Mistake 4: Missing requirements.txt
**Problem:** Railway can't install packages  
**Fix:** Make sure requirements.txt is in root

---

## 💡 Pro Tips

### Tip 1: Check File Contents
Before uploading, open each file to verify:
- `server.py` has code (not empty)
- `requirements.txt` lists packages
- `api/enquiry.py` has email logic

### Tip 2: Test Locally First (Optional)
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload
```
If this works, files are correct!

### Tip 3: Keep It Simple
Don't add extra files or folders. Just the minimum needed.

---

## ✅ Ready to Deploy?

If you have these 4 files, you're ready:
1. ✅ server.py
2. ✅ requirements.txt  
3. ✅ api/__init__.py
4. ✅ api/enquiry.py

**Next:** Follow `DEPLOY_BACKEND_RAILWAY.md`

🎉 **Good luck!**
