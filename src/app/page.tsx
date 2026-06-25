import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GaleriaCarrossel } from "@/components/home/GaleriaCarrossel"
import { 
  ChevronRight,
  Clock,
  Wifi,
  CreditCard,
  Users,
  Star
} from "lucide-react"

const servicosDestaque = [
  {
    nome: "Design de Corte Feminino",
    descricao: "Cortes personalizados que realçam seus traços com técnicas atualizadas.",
    preco: "R$ 100",
    duracao: "1h",
    categoria: "Corte & Finalização",
    slug: "Design de Corte Feminino",
  },
  {
    nome: "Escova Clássica",
    descricao: "Fios lisos, sedosos e com brilho radiante. Do curto ao extra longo.",
    preco: "R$ 60",
    duracao: "50min",
    categoria: "Corte & Finalização",
    slug: "Escova Clássica",
  },
  {
    nome: "Manicure Tradicional",
    descricao: "Cuidado completo: corte, cuticulagem, lixamento e esmaltação.",
    preco: "R$ 35",
    duracao: "1h",
    categoria: "Manicure & Pedicure",
    slug: "Manicure Tradicional",
  },
  {
    nome: "Mechas/Luzes",
    descricao: "Ilumine seus cabelos com mechas personalizadas Keune ou London.",
    preco: "R$ 250",
    duracao: "4h",
    categoria: "Química & Tratamento",
    slug: "Mechas/Luzes",
  },
  {
    nome: "Extensão de Cílios",
    descricao: "Volume russo, brasileiro, híbrido. Olhar marcante e duradouro.",
    preco: "R$ 150",
    duracao: "1h",
    categoria: "Olhar & Face",
    slug: "Extensão de Cílios",
  },
  {
    nome: "Maquiagem Completa",
    descricao: "Make profissional com cílios para ocasiões especiais ou dia a dia.",
    preco: "R$ 200",
    duracao: "1h",
    categoria: "Maquiagem",
    slug: "Maquiagem Completa",
  },
]

const diferenciais = [
  { icone: Wifi, titulo: "Wi-Fi Grátis", descricao: "Conecte-se enquanto cuida de você." },
  { icone: CreditCard, titulo: "Aceita Cartão", descricao: "Crédito, débito, PIX e parcelamento próprio." },
  { icone: Users, titulo: "Adultos & Crianças", descricao: "Atendimento para toda a família." },
  { icone: Clock, titulo: "Ambiente Acolhedor", descricao: "Bar, lanchonete e TV para seu conforto." },
]

const imagensGaleria = [
  { src: "/home/galeria/cabelo-feminino.webp", alt: "Corte feminino personalizado no Espaço M Cortes" },
  { src: "/home/galeria/escova-modelada.webp", alt: "Escova modelada com babyliss — cachos definidos" },
  { src: "/home/galeria/manicure-unhas.webp", alt: "Manicure tradicional com esmaltação impecável" },
  { src: "/home/galeria/cilios-extensao.webp", alt: "Extensão de cílios volume russo" },
  { src: "/home/galeria/maquiagem-noiva.webp", alt: "Maquiagem para noiva — make elegante" },
  { src: "/home/galeria/mechas-luzes.webp", alt: "Mechas e luzes iluminando os cabelos" },
  { src: "/home/galeria/spa-pes.webp", alt: "Spa dos pés relaxante no Espaço M Cortes" },
  { src: "/home/galeria/sobrancelha-design.webp", alt: "Design de sobrancelha com refectocil" },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FDFBF7] to-[#F5EDE4] border-b border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            
            {/* Texto — ocupa 3/5 */}
            <div className="lg:col-span-3 space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1.5">
                ✨ Salão Premium em Avenida da Prata
              </Badge>
              <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance">
                Realce sua beleza em um espaço pensado para{" "}
                <span className="text-primary">você brilhar</span>
              </h1>
              <p className="text-lg text-muted max-w-xl">
                Corte, química, manicure, cílios, maquiagem e muito mais. 
                Ambiente acolhedor com equipe qualificada no coração da Avenida da Prata.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button className="bg-primary hover:bg-primary-light text-white rounded-full px-8 py-6 text-base">
                  <a href="https://wa.me/5511999999999" target="_blank">
                    Agendar no WhatsApp  
                  </a>
                </Button>
                <Button variant="outline" className="rounded-full px-8 py-6 text-base border-border text-foreground hover:bg-surface" asChild>
                  <Link href="/servicos">
                    Ver todos os serviços
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Ilustração — ocupa 2/5, alinhada à direita */}
            <div className="hidden lg:flex lg:col-span-2 justify-end items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/home/hero-moca.png"
                alt="Ilustração de mulher com cabelos esvoaçantes representando beleza e transformação"
                width={600}
                height={600}
                className="w-[120%] max-w-[550px] h-auto -mr-8"
                loading="eager"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Galeria Carrossel */}
      <GaleriaCarrossel imagens={imagensGaleria} />

      {/* Serviços em Destaque */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-14">
          <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1.5 mb-4">
            Nossos Carros-Chefe
          </Badge>
          <h2 className="font-playfair text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Serviços mais procurados
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Conheça os tratamentos que fazem nossas clientes voltarem sempre.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicosDestaque.map((servico) => {
            const mensagem = encodeURIComponent(
              `Olá! Vim do site e quero agendar: ${servico.slug}`
            )
            const linkWhatsApp = `https://wa.me/5511999999999?text=${mensagem}`

            return (
              <a
                key={servico.nome}
                href={linkWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface border border-border rounded-2xl p-6 hover:shadow-md hover:border-primary/20 transition-all group block"
              >
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="text-xs font-normal">
                    {servico.categoria}
                  </Badge>
                  <Badge className="bg-background text-muted border-border text-xs font-normal">
                    <Clock className="w-3 h-3 mr-1" />
                    {servico.duracao}
                  </Badge>
                </div>
                <h3 className="font-playfair text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {servico.nome}
                </h3>
                <p className="text-sm text-muted mb-4 leading-relaxed">
                  {servico.descricao}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted">A partir de</span>
                  <span className="font-playfair text-xl font-semibold text-primary">
                    {servico.preco}
                  </span>
                </div>
              </a>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="rounded-full px-8 border-border text-foreground hover:bg-surface" asChild>
            <Link href="/servicos">
              Ver catálogo completo
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1.5 mb-4">
              Por que nos escolher
            </Badge>
            <h2 className="font-playfair text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Muito além de um salão de beleza
            </h2>
            <p className="text-muted max-w-lg mx-auto">
              Cada detalhe pensado para seu conforto e bem-estar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diferenciais.map((diff) => (
              <div
                key={diff.titulo}
                className="bg-background border border-border rounded-2xl p-6 text-center hover:shadow-sm transition-shadow"
              >
                <diff.icone className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-playfair text-base font-semibold text-foreground mb-2">
                  {diff.titulo}
                </h3>
                <p className="text-sm text-muted">{diff.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Resumido */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1.5">
              Nossa História
            </Badge>
            <h2 className="font-playfair text-3xl sm:text-4xl font-semibold text-foreground">
              Um espaço dedicado à sua{" "}
              <span className="text-primary">autoestima</span>
            </h2>
            <p className="text-muted leading-relaxed">
              O Espaço M Cortes nasceu no coração da Avenida da Prata com uma missão clara: 
              oferecer uma experiência completa de beleza e bem-estar. 
            </p>
            <p className="text-muted leading-relaxed">
              Com ambiente acolhedor, equipe qualificada e serviços de alta qualidade, 
              nosso compromisso é fazer você se sentir ainda mais confiante e linda a cada visita.
            </p>
            <Button variant="outline" className="rounded-full border-border text-foreground hover:bg-surface" asChild>
              <Link href="/sobre">
                Conheça nossa história
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <div className="bg-gradient-to-br from-[#F5EDE4] to-[#EDE0D4] rounded-3xl p-12 text-center">
            <div className="space-y-4">
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-primary fill-primary" />
                ))}
              </div>
              <p className="font-playfair text-xl text-foreground italic">
                &ldquo;O melhor salão da região! Ambiente incrível e profissionais 
                super atenciosos. Saí me sentindo maravilhosa.&rdquo;
              </p>
              <p className="text-sm text-muted">— Cliente Espaço M Cortes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl font-semibold text-white mb-4">
            Pronta para se sentir ainda mais linda?
          </h2>
          <p className="text-white/80 max-w-md mx-auto mb-8">
            Agende seu horário agora mesmo pelo WhatsApp. Resposta rápida, sem burocracia.
          </p>
          <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-base">
            <a href="https://wa.me/5511999999999" target="_blank">
              Agendar no WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </>
  )
}