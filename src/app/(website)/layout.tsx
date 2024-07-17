
import { FooterComponent } from "@/components/FooterComponent/FooterComponent";
import { NavbarComponent } from "@/components/NavbarComponent/NavbarComponent";
import type { Metadata } from "next";
import { montserrat } from "@/app/utils/font"
import '@/app/utils/styles/global.css'



export const metadata: Metadata = {
  title: "Nodo - Paid Media Solutions",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html>
      <body className={montserrat.className}>
      <NavbarComponent />
       {children}
      <FooterComponent />
      </body>
    </html>

  );
}
