'use client'

import { ContactComponent } from "@/components/ContactComponent/ContactComponent";
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

    const handleSubmit = (async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setBtnSubmitClicked(true);
    
        try {
    
          const formData = new FormData(e.currentTarget);
          const name = formData.get('name') as string;
          const lastName = formData.get('lastName') as string;
          const email = formData.get('email') as string;
          const phone = formData.get('phone') as string;
          const message = formData.get('message') as string;
          const recaptchaToken = formData.get('recaptchaToken') as string;
          await submitForm({
            formData: { name, lastName, email, message, phone},
            recaptchaToken
          });

        } catch (error) {
          setBtnSubmitClicked(false);
          console.log(error);
        }
    });

    const submitForm = async ({
        formData,
        recaptchaToken
      }: {
        formData: {
          name: string,
          lastName: string;
          email: string,
          phone: string,
          message: string,
        },
        recaptchaToken: string
      }) => {
          const body = JSON.stringify({ formData, recaptchaToken });
          console.log("Sending request to /api/contact with body:", body);
          
          const response = await fetch(`${window.location.origin}/api/contact`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: body
          });
    
          const respuesta = await response.json();
    
          if (respuesta.status === 200) {
            setBtnSubmitClicked(false);
            setNotification({
              content: "¡Email enviado con éxito!",
              isOpen: true,
            });
            setTimeout(() => {
              setNotification({
                content: "",
                isOpen: false,
              });
            }, 5000);
            return;
          } else {
          setBtnSubmitClicked(false);
          setNotification({
            content: "Ocurrió un error al enviar el email. Intentá nuevamente.",
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
    />

    )
};
    
    
