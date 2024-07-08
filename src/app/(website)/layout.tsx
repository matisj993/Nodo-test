
import { FooterComponent } from "@/components/FooterComponent/FooterComponent";
import { NavbarComponent } from "@/components/NavbarComponent/NavbarComponent";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <body>
      <NavbarComponent />
       {children}
      <FooterComponent />
      </body>
    </html>

  );
}
