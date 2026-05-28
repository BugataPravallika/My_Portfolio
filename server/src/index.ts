import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import Contact from './models/Contact';

// Initialize configuration
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Security and utility middleware
app.use(helmet());
app.use(express.json());
app.set('trust proxy', 1);

// Enable CORS
const clientUrlsFromEnv = (process.env.CLIENT_URL || '')
  .split(',')
  .map((url) => url.trim())
  .filter(Boolean);
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  ...clientUrlsFromEnv,
];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

// Rate limiter for contact API to prevent spam
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 submissions per window
  message: { error: 'Too many contact requests from this IP, please try again after 15 minutes' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Database Connection
let isDatabaseConnected = false;
const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;
  if (!mongoUri) {
    console.log('MONGODB_URI not found. Falling back to Mock Database Mode.');
    return;
  }
  try {
    await mongoose.connect(mongoUri);
    isDatabaseConnected = true;
    console.log('Connected to MongoDB Atlas successfully.');
  } catch (error) {
    console.error('MongoDB Connection Error:', error);
    console.log('Continuing in Mock Database Mode (submissions will be saved in memory).');
  }
};
connectDB();

// Mock database storage in case MongoDB is down or not configured yet
const mockDatabase: any[] = [];

// Nodemailer setup
const sendEmailNotification = async (contactData: { name: string; email: string; subject: string; message: string }) => {
  const { EMAIL_USER, EMAIL_PASS, RECEIVER_EMAIL } = process.env;
  
  if (!EMAIL_USER || !EMAIL_PASS || !RECEIVER_EMAIL) {
    console.log('Simulated Email Dispatch:');
    console.log(`To: ${RECEIVER_EMAIL || 'pravallikabugata@gmail.com'}`);
    console.log(`From: portfolio-system@prawallika.dev`);
    console.log(`Subject: New Portfolio Contact - ${contactData.subject}`);
    console.log(`Content:\nName: ${contactData.name}\nEmail: ${contactData.email}\nMessage: ${contactData.message}`);
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"Pravallika Portfolio" <${EMAIL_USER}>`,
      to: RECEIVER_EMAIL,
      replyTo: contactData.email,
      subject: `⚡ Portfolio Contact: ${contactData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #6d28d9; border-bottom: 2px solid #6d28d9; padding-bottom: 10px;">New Message from Portfolio Website</h2>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
          <p><strong>Subject:</strong> ${contactData.subject}</p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #6d28d9; margin-top: 15px; white-space: pre-wrap;">
            ${contactData.message}
          </div>
          <footer style="margin-top: 25px; font-size: 12px; color: #888; border-top: 1px solid #eee; padding-top: 10px;">
            Submitted on ${new Date().toLocaleString()} | Bugata Pravallika Portfolio Server
          </footer>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log(`Notification email successfully dispatched to ${RECEIVER_EMAIL}`);
  } catch (error) {
    console.error('Failed to dispatch notification email:', error);
  }
};

// Routes
app.get('/health', (_req: Request, res: Response) => {
  res.redirect('/api/health');
});

app.get('/api/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date(),
    env: NODE_ENV,
    database: isDatabaseConnected ? 'connected' : 'mock-mode',
  });
});

app.post('/api/contact', contactLimiter, async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body;

    // Server-side validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields (name, email, subject, message) are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    let savedData;

    if (isDatabaseConnected) {
      const newContact = new Contact({ name, email, subject, message });
      savedData = await newContact.save();
    } else {
      savedData = {
        _id: `mock-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        name,
        email,
        subject,
        message,
        createdAt: new Date()
      };
      mockDatabase.push(savedData);
      console.log(`Mock DB Saved Submission (Total: ${mockDatabase.length}):`, savedData);
    }

    // Trigger asynchronous email notification (won't block HTTP response)
    void sendEmailNotification({ name, email, subject, message });

    return res.status(201).json({
      success: true,
      message: 'Your message has been securely submitted! Thank you for reaching out.',
      data: savedData,
      mode: isDatabaseConnected ? 'production' : 'mock'
    });

  } catch (error: any) {
    console.error('Error handling contact request:', error);
    return res.status(500).json({ error: 'An internal server error occurred while processing your request.' });
  }
});

app.get('/api/test-db', async (_req: Request, res: Response) => {
  if (!isDatabaseConnected) {
    return res.status(200).json({ success: true, mode: 'mock', message: 'Database is running in mock mode.' });
  }

  try {
    const db = mongoose.connection.db;
    if (!db) {
      return res.status(500).json({ success: false, message: 'MongoDB database object is unavailable.' });
    }
    await db.admin().ping();
    return res.status(200).json({ success: true, mode: 'production', message: 'MongoDB connection is healthy.' });
  } catch (error) {
    console.error('MongoDB ping failed:', error);
    return res.status(500).json({ success: false, message: 'MongoDB connection ping failed.' });
  }
});

// Handle 404
app.use((_req, res) => {
  res.status(404).json({ error: 'Resource not found' });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const isCorsError = err.message === 'Not allowed by CORS';
  if (isCorsError) {
    return res.status(403).json({ error: 'CORS policy blocked this origin.' });
  }

  console.error('Unhandled server error:', err);
  return res.status(500).json({ error: 'Internal server error.' });
});

// Start Server
app.listen(PORT, () => {
  console.log('===============================================');
  console.log(`Portfolio Server running on port ${PORT}`);
  console.log(`API URL: http://localhost:${PORT}`);
  console.log(`Status: ${isDatabaseConnected ? 'MDB Connected' : 'Running in Mock DB Mode'}`);
  console.log('===============================================');
});
