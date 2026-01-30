import { template } from "@/app/utils/email/template";
import { NextResponse } from "next/server";
import { validateRecaptchaToken } from "@/utils/recaptcha/recaptcha";
const nodemailer = require("nodemailer");

export interface FormRequestInterface {
  formData: {
    name: string;
    lastName: string;
    email: string;
    city?: string;
    phone: string;
    message: string;
  };
  recaptchaToken: string;
}

export async function POST(req: Request) {
  console.log("--- Contact API Request Started ---");

  const recipients = [
    process.env.EMAIL_USERNAME,
    process.env.EMAIL_USERNAME2,
    process.env.EMAIL_USERNAME3,
  ];

  // Debug: Check environment variables
  const envVars = {
    EMAIL_SERVICE: !!process.env.EMAIL_SERVICE,
    EMAIL_USERNAME: !!process.env.EMAIL_USERNAME,
    EMAIL_PASSWORD: !!process.env.EMAIL_PASSWORD,
    RECAPTCHA_SECRET_KEY: !!process.env.RECAPTCHA_SECRET_KEY,
  };
  console.log("Environment Variables status:", envVars);

  try {
    const body = (await req.json()) as FormRequestInterface;
    console.log("Request Body:", JSON.stringify(body, null, 2));
    
    if (!body.recaptchaToken) {
      console.error("Missing reCAPTCHA token in request body");
      return NextResponse.json(
        { message: "Missing reCAPTCHA token", status: 400 },
        { status: 400 }
      );
    }

    const isValidToken = await validateRecaptchaToken(body.recaptchaToken);
    console.log("reCAPTCHA validation result:", isValidToken);

    if (!isValidToken) {
      return NextResponse.json(
        { message: "Invalid reCAPTCHA token", status: 400 },
        { status: 400 }
      );
    }

    // Check if we have the necessary email config before proceeding
    if (!process.env.EMAIL_SERVICE || !process.env.EMAIL_USERNAME || !process.env.EMAIL_PASSWORD) {
      console.error("Critical email environment variables are missing!");
      return NextResponse.json(
        { message: "Server configuration error (Email)", status: 400 },
        { status: 400 }
      );
    }

    const contentHtml = template(body);

    const transporter = nodemailer.createTransport({
      host: `${process.env.EMAIL_SERVICE}`,
      port: 465,
      secure: true,
      auth: {
        user: `${process.env.EMAIL_USERNAME}`,
        pass: `${process.env.EMAIL_PASSWORD}`,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });


    const mailOptions = {
      from: `${process.env.EMAIL_USERNAME}`,
      to: recipients.filter(Boolean) as string[], // Filter out undefined recipients
      subject: "NODO PAID MEDIA",
      html: contentHtml
    };

    console.log("Attempting to send mail with options:", { ...mailOptions, html: "[HTML Content]" });
    await transporter.sendMail(mailOptions);
    console.log("Mail sent successfully!");

    return NextResponse.json(
      { message: "Message sent", status: 200 },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Unexpected error in Contact API:", error);
    return NextResponse.json(
      { 
        message: "Message not sent", 
        status: 400, 
        debug: error.message || "Unknown error" 
      },
      { status: 400 }
    );
  } finally {
    console.log("--- Contact API Request Finished ---");
  }
}
