"use client"

import { Servico } from "@/lib/servicos"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, ChevronDown, MessageCircle } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const WHATSAPP_NUMERO = "5511999999999"

export function ServicoCard({ servico }: { servico: Servico }) {
  const [expandido, setExpandido] = useState(false)
  const temVariantes = servico.variantes && servico.variantes.length > 0

  const mensagemWhatsApp = encodeURIComponent(
    `Olá! Vim do site e quero agendar: ${servico.nome}`
  )
  const linkWhatsApp = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensagemWhatsApp}`

  return (
    <div className="bg-surface border border-border rounded-2xl p-5 hover:shadow-sm hover:border-primary/20 transition-all flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-playfair text-base font-semibold text-foreground leading-snug">
          {servico.nome}
        </h3>
        <Badge className="bg-background text-muted border-border text-xs font-normal flex-shrink-0">
          <Clock className="w-3 h-3 mr-1" />
          {servico.duracao}
        </Badge>
      </div>
      
      <p className="text-sm text-muted mb-4 leading-relaxed flex-1">
        {servico.descricao}
      </p>

      <div className="flex items-center justify-between pt-3 border-t border-border mb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted">
            {temVariantes ? "A partir de" : ""}
          </span>
          <span className="font-playfair text-lg font-semibold text-primary">
            {servico.preco}
          </span>
        </div>

        {servico.promocao && (
          <Badge className="bg-green-50 text-green-700 border-green-200 text-xs">
            {servico.promocao}
          </Badge>
        )}
      </div>

      {temVariantes && (
        <div className="mb-3">
          <button
            onClick={() => setExpandido(!expandido)}
            className="flex items-center gap-1 text-xs text-primary hover:text-primary-light transition-colors w-full justify-end"
          >
            Ver preços por comprimento
            <ChevronDown className={`w-3 h-3 transition-transform ${expandido ? "rotate-180" : ""}`} />
          </button>

          {expandido && (
            <div className="mt-3 space-y-1.5 bg-background rounded-xl p-3 border border-border">
              {servico.variantes!.map((v) => (
                <div key={v.nome} className="flex justify-between text-sm">
                  <span className="text-muted">{v.nome}</span>
                  <span className="font-medium text-foreground">{v.preco}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <Button className="w-full bg-primary hover:bg-primary-light text-white rounded-full text-sm py-2.5" asChild>
        <Link href={linkWhatsApp} target="_blank">
          <MessageCircle className="w-4 h-4 mr-2" />
          Agendar no WhatsApp
        </Link>
      </Button>
    </div>
  )
}