"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface Props {
  valor: string
  onChange: (valor: string) => void
}

export function BuscaServicos({ valor, onChange }: Props) {
  return (
    <div className="relative max-w-md mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
      <Input
        type="text"
        placeholder="Buscar serviço..."
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 h-12 bg-surface border-border rounded-full text-sm"
      />
    </div>
  )
}