// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { to, subject, text, html } = req.body;

    // Create a transporter object using SMTP transport.
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: process.env.NEXT_PUBLIC_EMAIL_USER, // Sender address
        to, // Recipient(s)
        subject, // Subject line
        text, // Plain text body
        html
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send email', details: error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
