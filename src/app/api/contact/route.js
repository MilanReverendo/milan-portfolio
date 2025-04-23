import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: "All fields required" }), {
        status: 400,
      });
    }

    // Log environment variables
    console.log("Environment variables:", {
      SMTP_USER: process.env.SMTP_USER,
      RECEIVER_EMAIL: process.env.RECEIVER_EMAIL,
    });

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Fixed from smtp-relay.gmail.com
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2",
      },
    });

    // Verify transporter
    await transporter.verify();
    console.log("SMTP connection verified");

    // Mail options
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // Sender
      replyTo: email, // For replies
      to: process.env.RECEIVER_EMAIL,
      subject: "New Portfolio Contact",
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    return new Response(JSON.stringify({ message: "Email sent" }), {
      status: 200,
    });
  } catch (err) {
    console.error("Email error:", err.message, err.stack);
    return new Response(JSON.stringify({ message: "Failed to send", error: err.message }), {
      status: 500,
    });
  }
}