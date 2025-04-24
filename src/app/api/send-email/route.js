import nodemailer from 'nodemailer';

console.log("API route loaded: /api/send-email");
export async function POST(request) {
  try {
    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing environment variables: EMAIL_USER or EMAIL_PASS');
      return new Response(JSON.stringify({ error: 'Server configuration error: Missing email credentials' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Extract and validate form data
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      console.error('Invalid input:', { name, email, message });
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter connection
    await transporter.verify();
    console.log('Transporter verified successfully');

    // Define email options
    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in /api/send-email:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });
    return new Response(JSON.stringify({ error: 'Failed to send email: ' + error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}