import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
import { calculateLeadTier, TierAnswers } from "@/utils/tierLogic";
import { validateRecaptchaToken } from "@/utils/recaptcha/recaptcha";
import { template } from "@/app/utils/email/template";
const nodemailer = require("nodemailer");

export interface LeadSubmitRequest {
  formData: {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    web?: string;
    proyectoTipo: string;
    madurezDigital: string;
    presupuesto: string;
    message?: string;
  };
  recaptchaToken: string;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as LeadSubmitRequest;
    const { formData, recaptchaToken } = body;

    // 1. Validation
    if (!formData.email || !formData.name || !formData.phone) {
      return NextResponse.json(
        { message: "Missing required fields", status: 400 },
        { status: 400 }
      );
    }

    // 2. reCAPTCHA Validation
    const isValidToken = await validateRecaptchaToken(recaptchaToken);
    if (!isValidToken) {
      return NextResponse.json(
        { message: "Invalid reCAPTCHA token", status: 400 },
        { status: 400 }
      );
    }

    // 3. Calculate Tier
    const tierAnswers: TierAnswers = {
      proyectoTipo: formData.proyectoTipo,
      madurezDigital: formData.madurezDigital,
      presupuesto: formData.presupuesto,
    };
    const tier = calculateLeadTier(tierAnswers);

    // 4. Persistence (Disabled for Staging)
    /*
    const lead = await prisma.lead.create({
      data: {
        nombre: formData.name,
        email: formData.email,
        telefono: formData.phone,
        web: formData.web,
        proyectoTipo: formData.proyectoTipo,
        madurezDigital: formData.madurezDigital,
        presupuesto: formData.presupuesto,
        tierCalculado: tier as any,
      },
    });
    */
    const lead = { id: "mock-id", ...formData }; // Mock lead for webhook if needed

    // 5. Send Notification Email
    const recipients = [
      process.env.EMAIL_USERNAME,
      process.env.EMAIL_USERNAME2,
      process.env.EMAIL_USERNAME3,
    ];

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

    const contentHtml = template({
        formData: {
            ...formData,
            city: "", // Not used in new form but required by template for now
            message: formData.message || ""
        },
        recaptchaToken: "", // Not needed for template
        tierCalculado: tier
    } as any);

    const mailOptions = {
      from: `${process.env.EMAIL_USERNAME}`,
      to: recipients,
      subject: `[${tier}] NODO PAID MEDIA - NUEVO LEAD`,
      html: contentHtml
    };

    await transporter.sendMail(mailOptions);

    // 6. Optional: CRM Webhook Integration
    const webhookUrl = process.env.CRM_WEBHOOK_URL;
    if (webhookUrl) {
        try {
            await fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    event: "new_lead",
                    lead: {
                        ...lead,
                        fullName: `${formData.name} ${formData.lastName}`
                    }
                })
            });
        } catch (webhookError) {
            console.error("Failed to trigger CRM Webhook:", webhookError);
            // We don't block the user response if the webhook fails
        }
    }

    // 7. Return Tier & Configured URLs for Frontend Redirection
    return NextResponse.json(
      { 
        message: "Lead submitted successfully", 
        tier: tier, 
        status: 200,
        redirects: {
            TIER_A: process.env.CALENDLY_TIER_A_URL || "",
            TIER_B: process.env.CALENDLY_TIER_B_URL || "",
            TIER_C: process.env.NODO_GPT_URL || ""
        }
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error in lead submission API:", error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message, status: 500 },
      { status: 500 }
    );
  }
}
