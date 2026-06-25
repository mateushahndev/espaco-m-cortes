import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarClock, AlertCircle, MessageCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Política de Cancelamento",
  robots: "noindex, nofollow",
}

export default function PoliticaCancelamentoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#FDFBF7] to-[#F5EDE4] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1.5">
              <CalendarClock className="w-3 h-3 mr-1 inline" />
              Agendamento
            </Badge>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
              Política de Cancelamento
            </h1>
            <p className="text-muted max-w-lg mx-auto">
              Para garantirmos o melhor atendimento, pedimos atenção às nossas regras.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-stone max-w-none space-y-8">
          
          <div className="bg-surface border border-border rounded-3xl p-8 space-y-6">
            <p className="text-muted leading-relaxed">
              Olá, querida cliente!
            </p>
            <p className="text-muted leading-relaxed">
              Agradecemos por escolher o <strong className="text-foreground">Espaço M Concept</strong>. 
              Para garantirmos que você tenha sempre o melhor atendimento, pedimos atenção 
              à nossa política de cancelamento:
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-surface border border-border rounded-2xl p-6 flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-playfair text-lg font-semibold text-foreground mb-2">
                  Confirmação
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  Você receberá uma mensagem automática 24 horas antes do seu atendimento 
                  via WhatsApp com nome de <strong className="text-foreground">Trinks</strong>. 
                  Pedimos que confirme sua presença o mais rápido possível para garantirmos o horário.
                </p>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6 flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <CalendarClock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-playfair text-lg font-semibold text-foreground mb-2">
                  Cancelamentos e Alterações
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  Caso precise alterar ou cancelar seu agendamento, pedimos que o faça com, 
                  no mínimo, <strong className="text-foreground">24 horas de antecedência</strong>. 
                  Isso nos ajuda a reorganizar a agenda e possibilitar que outras clientes 
                  aproveitem o horário disponível.
                </p>
              </div>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6 flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                <AlertCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="font-playfair text-lg font-semibold text-foreground mb-2">
                  Tolerância de Atraso
                </h2>
                <p className="text-muted text-sm leading-relaxed">
                  Em caso de atraso, temos uma tolerância de até{" "}
                  <strong className="text-foreground">15 a 20 minutos</strong>. Após esse período, 
                  caso não recebamos sua confirmação, o horário será desmarcado automaticamente.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-3xl p-8 space-y-4">
            <p className="text-muted leading-relaxed">
              Sabemos que imprevistos podem acontecer, e sempre faremos o possível para ajudar 
              com um novo agendamento.
            </p>
            <p className="text-muted leading-relaxed">
              Agradecemos sua compreensão e colaboração!
            </p>
            <p className="font-playfair text-foreground font-medium">
              Com carinho,
              <br />
              Equipe Espaço M Concept
            </p>
          </div>

          <div className="text-center pt-4">
            <Button className="bg-primary hover:bg-primary-light text-white rounded-full px-8 py-6" asChild>
              <Link href="https://wa.me/55XXXXXXXXXXX" target="_blank">
                <MessageCircle className="w-4 h-4 mr-2" />
                Falar no WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}