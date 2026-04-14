# Sai Ananta Backend API

FastAPI backend for handling form submissions and email notifications.

## 🎯 Purpose

This backend handles:
- Form submissions from website (enquiry, site visit)
- Email notifications to info@saiananta.com
- Data validation
- MongoDB storage (optional)

## 🚀 Deployment

**Recommended:** Deploy to Railway

See deployment guide: `/app/frontend/DEPLOY_BACKEND_RAILWAY.md`

## 📋 Environment Variables Required

```env
MONGO_URL=mongodb+srv://...
DB_NAME=saiananta
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

## 🔧 Local Development

```bash
# Install dependencies
pip install -r requirements.txt

# Run server
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

## 📡 API Endpoints

### POST /api/enquiry
Submit enquiry form
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "mobile": "9876543210",
  "countryCode": "+91"
}
```

### POST /api/site-visit
Book site visit
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "date": "2024-01-15"
}
```

## 🏗️ Tech Stack

- **Framework:** FastAPI
- **Database:** MongoDB (Motor async)
- **Email:** SMTP (aiosmtplib)
- **Validation:** Pydantic

## 📦 Dependencies

See `requirements.txt` for complete list.

Main packages:
- fastapi
- uvicorn
- motor (MongoDB)
- aiosmtplib (Email)
- pydantic (Validation)

## 🔒 Security

- CORS configured for frontend domain
- Input validation with Pydantic
- Environment variables for secrets
- No hardcoded credentials

## 📞 Support

For deployment help, see guide files in `/app/frontend/` folder.
