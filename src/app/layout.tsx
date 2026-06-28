import type { Metadata } from "next"
import dynamic from "next/dynamic"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { playfair, inter } from "./fonts"

const ChatWidget = dynamic(
  () => import("@/components/chat/ChatWidget").then((mod) => ({ default: mod.ChatWidget })),
  { ssr: false }
)

export const metadata: Metadata = {
  metadataBase: new URL("https://espacomcortes.vercel.app"),
  title: {
    default: "Espaço M Cortes | Salão de Beleza em Avenida da Prata",
    template: "%s | Espaço M Cortes",
  },
  description:
    "Salão de beleza premium em Avenida da Prata. Corte feminino, química capilar, manicure, alongamento de unhas, cílios, maquiagem e spa dos pés. Agende pelo WhatsApp.",
  keywords: [
    "salão de beleza",
    "Avenida da Prata",
    "corte feminino",
    "manicure",
    "progressiva",
    "cílios",
    "maquiagem",
    "espaço m cortes",
  ],
  authors: [{ name: "Espaço M Cortes" }],
  creator: "Espaço M Cortes",
  publisher: "Espaço M Cortes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://espacomcortes.vercel.app",
    siteName: "Espaço M Cortes",
    title: "Espaço M Cortes | Salão de Beleza em Avenida da Prata",
    description:
      "Salão de beleza premium em Avenida da Prata. Corte, química, manicure, cílios, maquiagem e muito mais.",
    images: [
      {
        url: "/home/hero-moca.webp",
        width: 1200,
        height: 630,
        alt: "Espaço M Cortes - Salão de Beleza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Espaço M Cortes | Salão de Beleza em Avenida da Prata",
    description:
      "Salão de beleza premium em Avenida da Prata. Agende pelo WhatsApp.",
    images: ["/home/hero-moca.webp"],
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='%238B5E3C'/><text y='.9em' font-size='62' text-anchor='middle' dominant-baseline='middle' x='50' fill='%23FDFBF7' font-family='Georgia, serif' font-weight='bold'>M</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://espacomcortes.vercel.app",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preload" as="image" href="/home/hero-moca.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Espaço M Cortes",
              description:
                "Salão de beleza premium em Avenida da Prata. Corte feminino, química capilar, manicure, alongamento de unhas, cílios, maquiagem e spa dos pés.",
              image: "https://espacomcortes.vercel.app/home/hero-moca.webp",
              url: "https://espacomcortes.vercel.app",
              telephone: "+55-11-99999-9999",
              email: "contato@espacomcortes.com.br",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Avenida da Prata, 123",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                postalCode: "01234-567",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-23.5505",
                longitude: "-46.6333",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
              priceRange: "R$ 15 - R$ 500",
              paymentAccepted: "Cash, Credit Card, Debit Card, PIX",
              currenciesAccepted: "BRL",
              knowsLanguage: "pt-BR",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços de Beleza",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Design de Corte Feminino" },
                    price: "100.00",
                    priceCurrency: "BRL",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Escova Clássica" },
                    price: "60.00",
                    priceCurrency: "BRL",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Manicure Tradicional" },
                    price: "35.00",
                    priceCurrency: "BRL",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Mechas/Luzes" },
                    price: "250.00",
                    priceCurrency: "BRL",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Extensão de Cílios" },
                    price: "150.00",
                    priceCurrency: "BRL",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: { "@type": "Service", name: "Maquiagem Completa" },
                    price: "200.00",
                    priceCurrency: "BRL",
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "87",
                bestRating: "5",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Quanto custa um corte feminino no Espaço M Cortes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "O Design de Corte Feminino custa R$ 100 (1h). Também temos Corte Infantil (R$ 86), Corte Franja (R$ 46) e Corte Especial com higienização a partir de R$ 104.",
                  },
                },
                {
                  "@type": "Question",
                  name: "O Espaço M Cortes faz progressiva?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sim! Trabalhamos com Escova Progressiva tradicional e orgânica. Preços a partir de R$ 300 (cabelo curto) até R$ 480 (extra longo). Também oferecemos selagem e botox capilar.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quais serviços de manicure e pedicure estão disponíveis?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Oferecemos esmaltação simples (R$ 23,20), tradicional com cuticulagem (R$ 35), magnífica com esfoliação e massagem (R$ 38), e esmaltação em gel (R$ 85). Também atendemos crianças.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Precisa agendar horário no Espaço M Cortes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Recomendamos agendamento pelo WhatsApp (11 99999-9999) para garantir seu horário. Trabalhamos com tolerância de 15 a 20 minutos para atrasos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quais formas de pagamento o Espaço M Cortes aceita?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Aceitamos cartão de crédito e débito (todas as bandeiras), dinheiro, PIX, vale-presente e parcelamento próprio.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Fazem maquiagem para noiva?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sim! Maquiagem de Noiva por R$ 240 (1h20). Também temos Maquiagem Completa (R$ 200) e Truke de Make (R$ 170), todas com cílios inclusos.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}