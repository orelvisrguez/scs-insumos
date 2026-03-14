import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";
import { CartProvider } from "@/components/CartContext";
import { ToastProvider } from "@/components/Toast";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SCS Insumos | Insumos de Oficina y Escolar",
  description: "Tu tienda de confianza para insumos escolares y de oficina. Envíos a todo el país. ¡Encontrá los mejores productos!",
  keywords: ["insumos", "oficina", "escolar", "papelería", "librería", "artículos de oficina"],
  openGraph: {
    title: "SCS Insumos",
    description: "Tu tienda de confianza para insumos escolares y de oficina",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <CartProvider>
            <ToastProvider>
              {children}
              <WhatsAppFloat />
            </ToastProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}