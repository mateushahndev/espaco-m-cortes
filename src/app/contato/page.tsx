import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle,
  CreditCard,
  Banknote,
  Gift,
  QrCode,
  Wifi,
  Tv,
  Wine,
  Users,
  ChevronRight
} from "lucide-react"
import Link from "next/link"

const formasPagamento = [
  { icone: CreditCard, texto: "Cartão de Crédito e Débito" },
  { icone: Banknote, texto: "Dinheiro" },
  { icone: QrCode, texto: "PIX" },
  { icone: Gift, texto: "Vale-Presente" },
  { icone: CreditCard, texto: "Parcelamento Próprio" },
  { icone: CreditCard, texto: "Belezinha (todas as bandeiras)" },
]

const horarios = [
  { dia: "Segunda a Sexta", horario: "Consulte disponibilidade" },
  { dia: "Sábado", horario: "Consulte disponibilidade" },
  { dia: "Domingo", horario: "Fechado" },
]

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#FDFBF7] to-[#F5EDE4] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1.5">
              Fale Conosco
            </Badge>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
              Contato
            </h1>
            <p className="text-muted max-w-lg mx-auto">
              Estamos no coração da Avenida da Prata. Venha nos visitar ou agende pelo WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Cards de Contato */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {/* Endereço */}
          <div className="bg-surface border border-border rounded-2xl p-6 text-center hover:shadow-sm transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
              Endereço
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              Avenida da Prata
              <br />
              Cuiabá - MT
            </p>
          </div>

          {/* WhatsApp */}
          <div className="bg-primary rounded-2xl p-6 text-center shadow-sm">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-playfair text-lg font-semibold text-white mb-2">
              WhatsApp
            </h3>
            <p className="text-white/80 text-sm mb-5">
              Agende seu horário agora mesmo
            </p>
            <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-6 py-2.5 text-sm w-full" asChild>
              <Link href="https://wa.me/5511999999999" target="_blank">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chamar no WhatsApp
              </Link>
            </Button>
          </div>

          {/* Horários */}
          <div className="bg-surface border border-border rounded-2xl p-6 text-center hover:shadow-sm transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-playfair text-lg font-semibold text-foreground mb-2">
              Horários
            </h3>
            <div className="space-y-1.5">
              {horarios.map((h) => (
                <div key={h.dia} className="text-sm">
                  <span className="text-muted">{h.dia}</span>
                  <br />
                  <span className="text-foreground font-medium">{h.horario}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Facilidades */}
        <div className="bg-surface border border-border rounded-3xl p-8 mb-10">
          <h2 className="font-playfair text-xl font-semibold text-foreground text-center mb-8">
            Facilidades no Local
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icone: Wifi, texto: "Wi-Fi Grátis" },
              { icone: Tv, texto: "TV no Ambiente" },
              { icone: Wine, texto: "Bar e Lanchonete" },
              { icone: Users, texto: "Adultos e Crianças" },
            ].map((item) => (
              <div
                key={item.texto}
                className="flex flex-col items-center text-center gap-2 p-4"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <item.icone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-foreground font-medium">{item.texto}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Formas de Pagamento */}
        <div className="bg-surface border border-border rounded-3xl p-8">
          <h2 className="font-playfair text-xl font-semibold text-foreground text-center mb-8">
            Formas de Pagamento
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {formasPagamento.map((item) => (
              <div
                key={item.texto}
                className="flex items-center gap-3 bg-background rounded-xl p-4"
              >
                <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-foreground">{item.texto}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-12">
          <p className="text-muted mb-6">
            Pronta para realçar sua beleza? Agende agora mesmo.
          </p>
          <Button className="bg-primary hover:bg-primary-light text-white rounded-full px-8 py-6 text-base" asChild>
            <Link href="/servicos">
              Ver todos os serviços
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

      </section>
    </>
  )
}