'use client'

import { ContactComponent } from "@/components/ContactComponent/ContactComponent";
import { calculateLeadTier } from "@/utils/tierLogic";
import { useState } from "react";

export const ContactContainer = () => {

    const [btnSubmitClicked, setBtnSubmitClicked] = useState(false);
    const [notification, setNotification] = useState<{
      content: string,
      isOpen: boolean
    }>({
      content: "",
      isOpen: false,
    });
    const [successData, setSuccessData] = useState<{
      tier: string;
      redirectUrl: string;
    } | null>(null);

    const handleSubmit = (async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setBtnSubmitClicked(true);
    
        try {
          const formData = new FormData(e.currentTarget);
          const name = formData.get('name') as string;
          const lastName = formData.get('lastName') as string;
          const email = formData.get('email') as string;
          const phone = formData.get('phone') as string;
          const web = formData.get('web') as string | undefined;
          const proyectoTipo = formData.get('proyectoTipo') as string;
          const madurezDigital = formData.get('madurezDigital') as string;
          const presupuesto = formData.get('presupuesto') as string;
          const message = formData.get('message') as string;
          const recaptchaToken = formData.get('recaptchaToken') as string;

          await submitLead({
            formData: { 
                name, 
                lastName, 
                email, 
                phone, 
                web,
                proyectoTipo,
                madurezDigital,
                presupuesto,
                message
            },
            recaptchaToken
          });

        } catch (error) {
          setBtnSubmitClicked(false);
          console.log(error);
        }
    });

    const submitLead = async ({
        formData,
        recaptchaToken
      }: {
        formData: any,
        recaptchaToken: string
      }) => {
          // Simulation for staging - Decoupled from Backend
          console.log("Staging Mode: Simulating submission...", formData);
          
          // 1. Calculate Tier client-side
          const tier = calculateLeadTier({
              proyectoTipo: formData.proyectoTipo,
              madurezDigital: formData.madurezDigital,
              presupuesto: formData.presupuesto,
          });

          // 2. Define Redirect URLs (Accessible in Staging/Vercel)
          const redirects: Record<string, string> = {
              TIER_A: process.env.NEXT_PUBLIC_CALENDLY_TIER_A_URL || "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3sM7CDnyCy4jybbHYNEYy1ucBUCCESWZu6HQPmG4Vp7Hrw6SANbBJQjprxdXh4FNXoqOj0Q2df",
              TIER_B: process.env.NEXT_PUBLIC_CALENDLY_TIER_B_URL || "https://calendly.com/ramiro-pereyra-25watts/30min",
              TIER_C: process.env.NEXT_PUBLIC_NODO_GPT_URL || "https://gemini.google.com/gem/1-tfS2V40dIJZYujWHlkkcNMRn6DWsQx9?usp=sharing"
          };

          const redirectUrl = redirects[tier] || redirects.TIER_C;

          // 3. Simulate network delay for the spinner
          await new Promise(resolve => setTimeout(resolve, 2000));

          // 4. Set Success State
          setBtnSubmitClicked(false);
          setSuccessData({
              tier,
              redirectUrl
          });
    } 

    return(
        <ContactComponent
      handleSubmit={handleSubmit}
      notification={notification}
      btnSubmitClicked={btnSubmitClicked}
      successData={successData}
    />

    )
};
    
    
