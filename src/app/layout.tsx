import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ChatWidget } from "@/components/chat/ChatWidget"

export const metadata: Metadata = {
  title: {
    default: "Espaço M Concept | Salão de Beleza em Morada do Ouro",
    template: "%s | Espaço M Concept",
  },
  description:
    "Salão de beleza premium em Morada do Ouro. Corte, química, manicure, alongamento, cílios, maquiagem e muito mais. Ambiente acolhedor com equipe qualificada.",
  keywords: [
    "salão de beleza",
    "Morada do Ouro",
    "corte feminino",
    "manicure",
    "progressiva",
    "cílios",
    "maquiagem",
  ],
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='%238B5E3C'/><text y='.9em' font-size='62' text-anchor='middle' dominant-baseline='middle' x='50' fill='%23FDFBF7' font-family='Georgia, serif' font-weight='bold'>M</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Espaço M Concept",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}