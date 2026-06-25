import { Badge } from "@/components/ui/badge"
import { Shield } from "lucide-react"

export const metadata = {
  title: "Política de Privacidade",
  robots: "noindex, nofollow",
}

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#FDFBF7] to-[#F5EDE4] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1.5">
              <Shield className="w-3 h-3 mr-1 inline" />
              LGPD
            </Badge>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
              Política de Privacidade
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
              A sua privacidade é importante para nós. Esta política descreve como o 
              <strong className="text-foreground"> Espaço M Concept</strong> coleta, 
              utiliza, armazena e protege os seus dados pessoais, em conformidade com a 
              <strong className="text-foreground"> Lei Geral de Proteção de Dados 
              (Lei nº 13.709/2018 — LGPD)</strong>.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-surface border border-border rounded-2xl p-6">
              <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">
                1. Dados que Coletamos
              </h2>
              <p>
                Coletamos apenas os dados estritamente necessários para a prestação dos nossos 
                serviços e para proporcionar a melhor experiência possível:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong className="text-foreground">Dados de cadastro:</strong> nome completo, telefone 
                (WhatsApp), e-mail (opcional);</li>
                <li><strong className="text-foreground">Dados de agendamento:</strong> serviços contratados, 
                datas e horários, profissional preferido (se informado);</li>
                <li><strong className="text-foreground">Dados de navegação:</strong> informações anônimas 
                de visita ao site, como páginas acessadas e tempo de permanência (via cookies).</li>
              </ul>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6">
              <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">
                2. Finalidade do Tratamento
              </h2>
              <p>Utilizamos os seus dados para as seguintes finalidades:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Confirmação e gerenciamento de agendamentos;</li>
                <li>Envio de lembretes de horário via WhatsApp;</li>
                <li>Comunicação sobre alterações, cancelamentos ou novidades do salão;</li>
                <li>Melhoria contínua dos nossos serviços e atendimento;</li>
                <li>Cumprimento de obrigações legais e regulatórias.</li>
              </ul>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6">
              <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">
                3. Compartilhamento de Dados
              </h2>
              <p>
                O <strong className="text-foreground">Espaço M Concept</strong> não vende, 
                aluga ou compartilha seus dados pessoais com terceiros para fins comerciais. 
                O compartilhamento ocorre apenas:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Com a plataforma de agendamento (Trinks), para operacionalização dos serviços;</li>
                <li>Por exigência legal, mediante ordem judicial ou solicitação de autoridade competente.</li>
              </ul>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6">
              <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">
                4. Armazenamento e Segurança
              </h2>
              <p>
                Seus dados são armazenados em servidores seguros, com medidas técnicas e 
                administrativas para proteção contra acessos não autorizados, perda ou 
                alteração indevida. Utilizamos criptografia e boas práticas de segurança 
                da informação.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6">
              <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">
                5. Período de Retenção
              </h2>
              <p>
                Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades 
                descritas nesta política ou conforme exigido por lei. Após esse período, os 
                dados são excluídos de forma segura.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6">
              <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">
                6. Seus Direitos (LGPD)
              </h2>
              <p>
                De acordo com a LGPD, você tem os seguintes direitos sobre seus dados pessoais:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Confirmar a existência de tratamento;</li>
                <li>Acessar seus dados armazenados;</li>
                <li>Corrigir dados incompletos ou desatualizados;</li>
                <li>Solicitar a exclusão de dados desnecessários;</li>
                <li>Revogar consentimento a qualquer momento;</li>
                <li>Solicitar portabilidade dos dados.</li>
              </ul>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6">
              <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">
                7. Cookies
              </h2>
              <p>
                Nosso site utiliza cookies essenciais para funcionamento e cookies de análise 
                (Google Analytics) para entendermos como as visitantes interagem com o site. 
                Você pode desabilitar cookies nas configurações do seu navegador.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6">
              <h2 className="font-playfair text-xl font-semibold text-foreground mb-4">
                8. Contato do Encarregado de Dados (DPO)
              </h2>
              <p>
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
                entre em contato pelo WhatsApp: <strong className="text-foreground">(XX) XXXXX-XXXX</strong>{" "}
                ou presencialmente no Espaço M Concept, Morada do Ouro, Cuiabá - MT.
              </p>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-3xl p-8 text-center">
            <p className="text-sm">
              Esta política pode ser atualizada periodicamente. Recomendamos a consulta 
              regular. A data da última atualização está indicada no topo desta página.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}