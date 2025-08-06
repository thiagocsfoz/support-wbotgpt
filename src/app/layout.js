import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Suporte WhatsBotGPT",
  description: "Base de conhecimento e portal de suporte para WhatsBotGPT - Encontre respostas, tutoriais e guias de solução de problemas",
  keywords: ["WhatsBotGPT", "bot WhatsApp", "chatbot", "suporte", "documentação", "ajuda", "base de conhecimento"],
  authors: [{ name: "Equipe WhatsBotGPT" }],
  creator: "WhatsBotGPT",
  publisher: "WhatsBotGPT",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://suporte.whatsbotgpt.store",
    title: "Suporte WhatsBotGPT",
    description: "Base de conhecimento e portal de suporte para WhatsBotGPT - Encontre respostas, tutoriais e guias de solução de problemas",
    siteName: "Suporte WhatsBotGPT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suporte WhatsBotGPT",
    description: "Base de conhecimento e portal de suporte para WhatsBotGPT - Encontre respostas, tutoriais e guias de solução de problemas",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
