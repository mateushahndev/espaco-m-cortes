import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"

export const metadata = {
  title: "Termos de Uso",
  robots: "noindex, nofollow",
}

export default function TermosUsoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#FDFBF7] to-[#F5EDE4] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1.5">
              <FileText className="w-3 h-3 mr-1 inline" />
              Jurídico
            </Badge>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
              Termos de Uso
            </h1>
            <p className="text-muted max-w-lg mx-auto">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-stone max-w-none space-y-8 text-muted leading-relaxed">

          <div className="bg-surface border border-border rounded-3xl p-8">
            <p>
              Bem-vinda ao site do <strong className="text-foreground">Espaço M Concept</strong>. 
              Ao acessar e utilizar este site, você concorda com os presentes Termos de Uso. 
              Pedimos a leitura atenta de todas as disposições.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-surface border border-border rounded-2xl p-6">
              <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">
                1. Definições
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong className="text-foreground">Site:</strong> conjunto de páginas web 
                hospedadas sob o domínio do Espaço M Concept;</li>
                <li><strong className="text-foreground">Usuária:</strong> toda pessoa física que 
                acessa e utiliza o site;</li>
                <li><strong className="text-foreground">Serviços:</strong> todos os tratamentos 
                de beleza e bem-estar ofertados presencialmente no Espaço M Concept.</li>
              </ul>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6">
              <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">
                2. Uso do Site
              </h2>
              <p>
                O site tem finalidade informativa, exibindo a lista de serviços, preços, 
                horários e informações de contato. O agendamento de serviços é realizado 
                via WhatsApp ou plataforma externa (Trinks), estando sujeito às políticas 
                próprias dessas plataformas.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6">
              <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">
                3. Preços e Disponibilidade
              </h2>
              <p>
                Os preços exibidos no site são referenciais e podem sofrer alterações sem 
                aviso prévio. O valor final do serviço será sempre confirmado no momento 
                do agendamento. A disponibilidade de horários e profissionais está sujeita 
                à agenda do salão.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6">
              <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">
                4. Propriedade Intelectual
              </h2>
              <p>
                Todo o conteúdo do site — incluindo textos, imagens, logotipos, ícones, 
                layout e código-fonte — é de propriedade exclusiva do{" "}
                <strong className="text-foreground">Espaço M Concept</strong> ou de terceiros 
                licenciadores. É proibida a reprodução total ou parcial sem autorização 
                prévia por escrito.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6">
              <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">
                5. Limitação de Responsabilidade
              </h2>
              <p>
                O Espaço M Concept se empenha em manter as informações do site precisas e 
                atualizadas, mas não garante ausência de erros ou omissões. O uso do site 
                é por conta e risco da usuária. Não nos responsabilizamos por eventuais 
                indisponibilidades técnicas ou falhas de terceiros (hospedagem, conexão, 
                plataforma de agendamento).
              </p>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6">
              <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">
                6. Links para Terceiros
              </h2>
              <p>
                O site pode conter links para plataformas externas (WhatsApp, Trinks, 
                Google Maps, Instagram, etc.). Não temos controle sobre o conteúdo ou 
                práticas de privacidade desses sites, e o acesso a eles é de responsabilidade 
                da usuária.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6">
              <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">
                7. Política de Cancelamento
              </h2>
              <p>
                Os agendamentos estão sujeitos à{" "}
                <a href="/politica-de-cancelamento" className="text-primary hover:text-primary-light underline">
                  Política de Cancelamento
                </a>{" "}
                do Espaço M Concept, que integra estes Termos de Uso.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6">
              <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">
                8. Privacidade
              </h2>
              <p>
                O tratamento de dados pessoais é regido pela nossa{" "}
                <a href="/politica-de-privacidade" className="text-primary hover:text-primary-light underline">
                  Política de Privacidade
                </a>
                , em conformidade com a LGPD (Lei nº 13.709/2018).
              </p>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6">
              <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">
                9. Alterações nos Termos
              </h2>
              <p>
                Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento. 
                As alterações entram em vigor na data de sua publicação no site. Recomendamos 
                a consulta periódica.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6">
              <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">
                10. Contato
              </h2>
              <p>
                Dúvidas sobre estes Termos de Uso podem ser esclarecidas pelo WhatsApp:{" "}
                <strong className="text-foreground">(XX) XXXXX-XXXX</strong>{" "}
                ou presencialmente no Espaço M Concept, Morada do Ouro, Cuiabá - MT.
              </p>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-3xl p-8 text-center">
            <p className="text-sm">
              Ao continuar navegando neste site, você declara estar ciente e de acordo 
              com estes Termos de Uso.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}