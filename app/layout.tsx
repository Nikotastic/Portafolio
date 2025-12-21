import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio Nikol Velasquez",
  description: "Este es mi portafolio web creado con Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative overflow-x-hidden`}
      >
        {/* Fondo animado con gradiente */}
        <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-neutral-900 animate-gradient-shift"></div>

        {/* Efectos de luz animados */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -left-40 w-80 h-80 bg-slate-700/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-700/20 rounded-full blur-3xl animate-float-delay"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-slate-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative z-10">
          <LanguageProvider>{children}</LanguageProvider>
        </div>
      </body>
    </html>
  );
}
