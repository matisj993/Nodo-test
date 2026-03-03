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
          const response = await fetch(`${window.location.origin}/api/leads/submit`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ formData, recaptchaToken })
          });
    
          const respuesta = await response.json();
          console.log("API Response:", respuesta);
    
          if (response.ok && respuesta.status === 200) {
            setBtnSubmitClicked(false);
            
            const tier = respuesta.tier;
            const redirects = respuesta.redirects || {};
            const redirectUrl = redirects[tier] || "";

            setSuccessData({
                tier,
                redirectUrl
            });

            return;
          } else {
            setBtnSubmitClicked(false);
            setNotification({
              content: "Ocurrió un error al procesar tu solicitud. Intentá nuevamente.",
              isOpen: true,
            });
            setTimeout(() => {
              setNotification({
                content: "",
                isOpen: false,
              });
            }, 5000);
            return;
          }
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
    
    
