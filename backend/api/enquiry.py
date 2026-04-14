from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr, Field
from typing import Optional
import os
from datetime import datetime
import resend

router = APIRouter()

# Resend Email configuration
RESEND_API_KEY = os.getenv('RESEND_API_KEY', '')
RECIPIENT_EMAIL = os.getenv('RECIPIENT_EMAIL', 'info@saiananta.com')
FROM_EMAIL = os.getenv('FROM_EMAIL', 'onboarding@resend.dev')

# Initialize Resend
resend.api_key = RESEND_API_KEY

class EnquiryRequest(BaseModel):
    name: str = Field(..., min_length=1)
    email: EmailStr
    mobile: str = Field(..., pattern=r'^\d{10}$')
    countryCode: str = '+91'
    fullMobile: Optional[str] = None

class SiteVisitRequest(BaseModel):
    name: str = Field(..., min_length=1)
    phone: str = Field(..., pattern=r'^\d{10}$')
    email: EmailStr
    date: str

async def send_email(subject: str, html_body: str):
    """Send email using Resend API"""
    try:
        params = {
            "from": FROM_EMAIL,
            "to": [RECIPIENT_EMAIL],
            "subject": subject,
            "html": html_body
        }
        
        email = resend.Emails.send(params)
        print(f"Email sent successfully: {email}")
        return True
    except Exception as e:
        print(f"Email sending failed: {str(e)}")
        return False

@router.post("/enquiry")
async def submit_enquiry(enquiry: EnquiryRequest):
    """Handle enquiry form submission"""
    try:
        # Create email body
        email_body = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #1e3a8a; border-radius: 10px;">
                    <h2 style="color: #1e3a8a; text-align: center;">New Enquiry - Sai Ananta</h2>
                    <p style="font-size: 14px; color: #666;">Received on: {datetime.now().strftime('%d %B %Y, %I:%M %p')}</p>
                    
                    <div style="background: #f0f9ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <h3 style="color: #1e3a8a; margin-top: 0;">Contact Details:</h3>
                        <p><strong>Name:</strong> {enquiry.name}</p>
                        <p><strong>Email:</strong> <a href="mailto:{enquiry.email}">{enquiry.email}</a></p>
                        <p><strong>Mobile:</strong> {enquiry.fullMobile or f"{enquiry.countryCode}{enquiry.mobile}"}</p>
                    </div>
                    
                    <p style="font-size: 12px; color: #888; text-align: center; margin-top: 30px;">
                        This is an automated email from Sai Ananta website enquiry form.
                    </p>
                </div>
            </body>
        </html>
        """
        
        # Send email
        email_sent = await send_email(
            subject=f"New Enquiry from {enquiry.name} - Sai Ananta",
            html_body=email_body
        )
        
        if not email_sent:
            print("Warning: Email notification failed, but enquiry recorded")
        
        return {
            "success": True,
            "message": "Thank you for your enquiry. We will contact you soon!",
            "emailSent": email_sent
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/site-visit")
async def book_site_visit(visit: SiteVisitRequest):
    """Handle site visit booking"""
    try:
        email_body = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 2px solid #1e3a8a; border-radius: 10px;">
                    <h2 style="color: #1e3a8a; text-align: center;">Site Visit Request - Sai Ananta</h2>
                    <p style="font-size: 14px; color: #666;">Received on: {datetime.now().strftime('%d %B %Y, %I:%M %p')}</p>
                    
                    <div style="background: #f0f9ff; padding: 15px; border-radius: 5px; margin: 20px 0;">
                        <h3 style="color: #1e3a8a; margin-top: 0;">Visit Details:</h3>
                        <p><strong>Name:</strong> {visit.name}</p>
                        <p><strong>Email:</strong> <a href="mailto:{visit.email}">{visit.email}</a></p>
                        <p><strong>Phone:</strong> +91 {visit.phone}</p>
                        <p><strong>Preferred Date:</strong> {visit.date}</p>
                    </div>
                    
                    <p style="font-size: 12px; color: #888; text-align: center; margin-top: 30px;">
                        This is an automated email from Sai Ananta website.
                    </p>
                </div>
            </body>
        </html>
        """
        
        email_sent = await send_email(
            subject=f"Site Visit Request from {visit.name} - Sai Ananta",
            html_body=email_body
        )
        
        return {
            "success": True,
            "message": "Your site visit has been scheduled! We will contact you soon.",
            "emailSent": email_sent
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
