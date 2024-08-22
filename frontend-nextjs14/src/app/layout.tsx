import Providers from "@/store/Provider";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plataforma Alquileres de Canchas",
  description: "Nueva Plataforma de escuelas de futbol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/public/favicon.ico" />
      </head>
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
