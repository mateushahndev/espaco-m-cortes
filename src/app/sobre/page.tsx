import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Heart, 
  Star, 
  Wifi, 
  CreditCard, 
  Users, 
  Tv, 
  Wine,
  Smartphone,
  MapPin,
  ChevronRight
} from "lucide-react"
import Link from "next/link"

const valores = [
  {
    icone: Heart,
    titulo: "Missão",
    descricao: "Realçar a autoestima de cada cliente através de serviços de beleza de alta qualidade, em um ambiente acolhedor e com profissionais dedicados.",
  },
  {
    icone: Star,
    titulo: "Visão",
    descricao: "Ser referência em beleza e bem-estar na Morada do Ouro, reconhecida pela excelência no atendimento e resultados que transformam.",
  },
  {
    icone: Users,
    titulo: "Valores",
    descricao: "Respeito, cuidado, profissionalismo e atenção aos detalhes. Cada cliente é única e merece um atendimento personalizado.",
  },
]

const facilidades = [
  { icone: Wifi, texto: "Wi-Fi gratuito para você se conectar enquanto cuida de si" },
  { icone: Tv, texto: "TV no ambiente para seu entretenimento" },
  { icone: Wine, texto: "Bar e lanchonete para momentos de pausa e prazer" },
  { icone: Users, texto: "Atendemos adultos e crianças com o mesmo carinho" },
  { icone: CreditCard, texto: "Cartão de crédito, débito, PIX e parcelamento próprio" },
  { icone: Smartphone, texto: "Agendamento fácil pelo WhatsApp com confirmação automática" },
]

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#FDFBF7] to-[#F5EDE4] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1.5">
              Nossa História
            </Badge>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
              Sobre o Espaço M Concept
            </h1>
            <p className="text-muted max-w-lg mx-auto">
              Um espaço dedicado à beleza e bem-estar no coração da Morada do Ouro.
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-playfair text-3xl font-semibold text-foreground">
              Um espaço pensado para{" "}
              <span className="text-primary">você se sentir em casa</span>
            </h2>
            <p className="text-muted leading-relaxed">
              O Espaço M Concept nasceu no coração da Morada do Ouro com uma missão clara: 
              oferecer uma experiência completa de beleza e bem-estar que vai além dos serviços tradicionais.
            </p>
            <p className="text-muted leading-relaxed">
              Com um ambiente acolhedor, equipe qualificada e serviços de alta qualidade, 
              nosso compromisso é fazer você se sentir ainda mais confiante e linda a cada visita.
            </p>
            <p className="text-muted leading-relaxed">
              Acreditamos que beleza é sinônimo de autoestima — e é isso que entregamos 
              em cada corte, cada química, cada unha feita e cada cílio alongado.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#F5EDE4] to-[#EDE0D4] rounded-3xl p-10">
            <div className="space-y-6">
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              <blockquote className="font-playfair text-lg text-foreground italic leading-relaxed">
                &ldquo;Ambiente incrível e profissionais super atenciosos. Saí me sentindo 
                maravilhosa. É o melhor salão da região, sem dúvida!&rdquo;
              </blockquote>
              <p className="text-sm text-muted">— Cliente fiel do Espaço M Concept</p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valores.map((item) => (
              <div key={item.titulo} className="text-center space-y-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <item.icone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-foreground">
                  {item.titulo}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{item.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilidades */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1.5 mb-4">
            Comodidades
          </Badge>
          <h2 className="font-playfair text-3xl font-semibold text-foreground mb-4">
            Tudo para seu conforto
          </h2>
          <p className="text-muted max-w-lg mx-auto">
            Cada detalhe pensado para que sua experiência seja ainda mais especial.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {facilidades.map((item) => (
            <div
              key={item.texto}
              className="flex items-start gap-3 bg-surface border border-border rounded-2xl p-5 hover:shadow-sm transition-shadow"
            >
              <item.icone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm text-foreground leading-relaxed">{item.texto}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-white mb-4">
            Venha nos conhecer
          </h2>
          <p className="text-white/80 max-w-md mx-auto mb-8">
            Estamos prontos para cuidar de você. Agende seu horário agora mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6" asChild>
              <Link href="/contato">
                <MapPin className="w-4 h-4 mr-2" />
                Como chegar
              </Link>
            </Button>
            <Button className="bg-white/15 text-white border border-white/30 hover:bg-white/25 rounded-full px-8 py-6" asChild>
              <Link href="/servicos">
                Ver serviços
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}