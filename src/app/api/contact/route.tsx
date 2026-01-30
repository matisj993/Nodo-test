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

  const recipients = [
    process.env.EMAIL_USERNAME,
    process.env.EMAIL_USERNAME2,
    process.env.EMAIL_USERNAME3,
  ];

  try {
    const body = (await req.json()) as FormRequestInterface;
    
    const isValidToken = await validateRecaptchaToken(body.recaptchaToken);
    if (!isValidToken) {
      return NextResponse.json(
        { message: "Invalid reCAPTCHA token", status: 400 },
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
      to: recipients,
      subject: "NODO PAID MEDIA",
      html: contentHtml
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent", status: 200 },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { message: "Message not sent", error: error.message, status: 400 },
      { status: 400 }
    );
  }
}
