// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
//"http://localhost:3000/widget.js?id=CAFE_AROMA_001"
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Café Aroma - El mejor café de la ciudad",
  description: "Descubre nuestros cafés artesanales, repostería fresca y un ambiente acogedor.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
    <body className={`${playfair.variable} ${inter.variable} antialiased`}>
    {children}
    <Script
      id="adtracker"
      strategy="afterInteractive"
      src="https://kaleidoscopically-unpiqued-jeraldine.ngrok-free.dev/api/scripts/client"
    />
    </body>
    </html>
  );
}