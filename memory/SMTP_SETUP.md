# Email Notification Setup for Sai Ananta

## Current Status
✅ Backend API endpoints created (`/api/enquiry` and `/api/site-visit`)
✅ Frontend forms integrated with backend
✅ Email template designed
⚠️ SMTP credentials required for email sending

## To Enable Email Notifications:

### Option 1: Gmail (Quick Setup)

1. **Enable 2-Factor Authentication**
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "Sai Ananta Website"
   - Copy the 16-character password

3. **Update `/app/backend/.env`**
   ```
   SMTP_SERVER=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USERNAME=your-email@gmail.com
   SMTP_PASSWORD=abcd efgh ijkl mnop (16 chars without spaces)
   ```

4. **Restart Backend**
   ```bash
   sudo supervisorctl restart backend
   ```

### Option 2: SendGrid (Production Ready)

1. **Sign up at SendGrid**
   - Go to: https://sendgrid.com
   - Free plan: 100 emails/day

2. **Create API Key**
   - Dashboard → Settings → API Keys
   - Create API Key with "Mail Send" permission

3. **Update `/app/backend/.env`**
   ```
   SMTP_SERVER=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USERNAME=apikey
   SMTP_PASSWORD=your-sendgrid-api-key
   ```

4. **Restart Backend**

## Testing Email Functionality

1. Fill the enquiry form on website
2. Check backend logs: `tail -f /var/log/supervisor/backend.out.log`
3. Check email at: info@saiananta.com

## Email Features Implemented

✅ HTML formatted emails
✅ Professional branding
✅ Form data included
✅ Timestamp on each email
✅ Automatic sending on form submission
✅ Sends to: info@saiananta.com

## Note
- Without SMTP credentials, forms still work but emails won't be sent
- Form data is still captured in the backend
- User receives success message on frontend
