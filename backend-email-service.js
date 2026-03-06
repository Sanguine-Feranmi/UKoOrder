// Backend Email Service - Node.js/Express Implementation
// Install: npm install nodemailer express

const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // or 'smtp.gmail.com'
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASSWORD // App password (not regular password)
  }
});

// POST /api/orders/send-emails
router.post('/orders/send-emails', async (req, res) => {
  try {
    const { customer, items, total, orderDate, adminEmail } = req.body;

    // Customer email template
    const customerEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FC8A06;">Order Confirmation</h2>
        <p>Hi ${customer.name},</p>
        <p>Thank you for your order! Your food will be delivered in 30-45 minutes.</p>
        
        <h3>Order Details:</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background-color: #f5f5f5;">
              <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Item</th>
              <th style="padding: 10px; text-align: center; border: 1px solid #ddd;">Qty</th>
              <th style="padding: 10px; text-align: right; border: 1px solid #ddd;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${items.map(item => `
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">${item.name}</td>
                <td style="padding: 10px; text-align: center; border: 1px solid #ddd;">${item.quantity}</td>
                <td style="padding: 10px; text-align: right; border: 1px solid #ddd;">£${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
          <p style="margin: 5px 0;"><strong>Subtotal:</strong> £${(total - 2.99).toFixed(2)}</p>
          <p style="margin: 5px 0;"><strong>Delivery Fee:</strong> £2.99</p>
          <p style="margin: 5px 0; font-size: 18px; color: #FC8A06;"><strong>Total:</strong> £${total.toFixed(2)}</p>
        </div>
        
        <div style="margin-top: 20px;">
          <p><strong>Delivery Address:</strong><br>${customer.address}</p>
          <p><strong>Phone:</strong> ${customer.phone}</p>
        </div>
        
        <p style="margin-top: 30px; color: #666;">Thank you for choosing Order.uk!</p>
      </div>
    `;

    // Admin email template
    const adminEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FC8A06;">New Order Received</h2>
        <p><strong>Order Date:</strong> ${new Date(orderDate).toLocaleString()}</p>
        
        <h3>Customer Information:</h3>
        <p><strong>Name:</strong> ${customer.name}</p>
        <p><strong>Email:</strong> ${customer.email}</p>
        <p><strong>Phone:</strong> ${customer.phone}</p>
        <p><strong>Address:</strong> ${customer.address}</p>
        
        <h3>Order Items:</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background-color: #f5f5f5;">
              <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Item</th>
              <th style="padding: 10px; text-align: center; border: 1px solid #ddd;">Qty</th>
              <th style="padding: 10px; text-align: right; border: 1px solid #ddd;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${items.map(item => `
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd;">${item.name}</td>
                <td style="padding: 10px; text-align: center; border: 1px solid #ddd;">${item.quantity}</td>
                <td style="padding: 10px; text-align: right; border: 1px solid #ddd;">£${(item.price * item.quantity).toFixed(2)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
          <p style="margin: 5px 0; font-size: 18px; color: #FC8A06;"><strong>Total Order Value:</strong> £${total.toFixed(2)}</p>
        </div>
      </div>
    `;

    // Send email to customer
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: customer.email,
      subject: 'Order Confirmation - Order.uk',
      html: customerEmailHTML
    });

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: `New Order from ${customer.name}`,
      html: adminEmailHTML
    });

    res.status(200).json({ 
      success: true, 
      message: 'Order emails sent successfully' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send emails',
      error: error.message 
    });
  }
});

module.exports = router;

/* 
SETUP INSTRUCTIONS:

1. Install dependencies:
   npm install nodemailer express dotenv

2. Create .env file with:
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password

3. For Gmail, enable 2-Step Verification and create App Password:
   - Go to Google Account Settings
   - Security > 2-Step Verification
   - App passwords > Generate new password
   - Use this password in EMAIL_PASSWORD

4. In your main server file (server.js or app.js):
   const emailRoutes = require('./backend-email-service');
   app.use('/api', emailRoutes);

5. Alternative email services:
   - SendGrid: service: 'SendGrid', auth: { user: 'apikey', pass: 'YOUR_API_KEY' }
   - Mailgun: Configure with SMTP settings
   - AWS SES: Use aws-sdk instead of nodemailer

6. For production, consider:
   - Rate limiting
   - Email queue (Bull/Redis)
   - Email templates engine (Handlebars)
   - Email validation
   - Logging service
*/
