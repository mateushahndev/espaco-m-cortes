import Link from "next/link"
import { Scissors, Phone, MapPin, Clock } from "lucide-react"

const footerLinks = {
  institucional: [
    { href: "/", label: "Home" },
    { href: "/servicos", label: "Serviços" },
    { href: "/sobre", label: "Sobre" },
    { href: "/contato", label: "Contato" },
  ],
  legal: [
    { href: "/politica-de-cancelamento", label: "Política de Cancelamento" },
    { href: "/termos-de-uso", label: "Termos de Uso" },
    { href: "/politica-de-privacidade", label: "Política de Privacidade" },
  ],
}

const servicosDestaque = [
  { href: "/servicos?categoria=corte-finalizacao", label: "Corte Feminino" },
  { href: "/servicos?categoria=manicure-pedicure", label: "Manicure & Pedicure" },
  { href: "/servicos?categoria=quimica-tratamento", label: "Química Capilar" },
  { href: "/servicos?categoria=olhar-face", label: "Extensão de Cílios" },
  { href: "/servicos?categoria=maquiagem", label: "Maquiagem" },
]

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Marca */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scissors className="w-6 h-6 text-primary" />
              <span className="font-playfair text-lg font-semibold text-foreground">
                Espaço M Cortes
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Um espaço dedicado à beleza e bem-estar no coração da Avenida da Prata. 
              Experiência completa para realçar sua autoestima.
            </p>
          </div>

          {/* Links Institucionais */}
          <div>
            <h4 className="font-playfair text-sm font-semibold text-foreground mb-4">
              Páginas
            </h4>
            <ul className="space-y-2">
              {footerLinks.institucional.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="font-playfair text-sm font-semibold text-foreground mb-4">
              Serviços
            </h4>
            <ul className="space-y-2">
              {servicosDestaque.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-playfair text-sm font-semibold text-foreground mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted">
                  Avenida da Prata, Cuiabá - MT
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted">
                  WhatsApp: (11) 99999-9999
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted">
                  Seg a Sáb — Consulte horários
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Linha inferior */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} Espaço M Cortes. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-muted hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}