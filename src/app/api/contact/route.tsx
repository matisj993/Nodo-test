import { template } from "@/app/utils/email/template";
import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export interface FormRequestInterface {
  formData: {
    name: string;
    lastName: string;
    email: string;
    city: string;
    phone: string;
    message: string;
  };
}

export async function POST(req: Request) {

  const recipients = [
    process.env.EMAIL_USERNAME,
    process.env.EMAIL_USERNAME2,
    process.env.EMAIL_USERNAME3,
  ];

  try {
    const body = (await req.json()) as FormRequestInterface;
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
  } catch (error) {
    console.log("error:", error);
    return NextResponse.json(
      { message: "Message no sent", status: 400 },
      { status: 400 }
    );
  }
}
