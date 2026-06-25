"use client"

import { Categoria, categorias } from "@/lib/servicos"
import { 
  Scissors, Sparkles, Paintbrush, Flower2, Eye, 
  Heart, Palette, Wind, Crown, LucideIcon, ChevronDown 
} from "lucide-react"
import { useState, useRef, useEffect } from "react"

const icones: Record<Categoria, LucideIcon> = {
  "corte-finalizacao": Scissors,
  "quimica-tratamento": Sparkles,
  "manicure-pedicure": Paintbrush,
  "alongamento": Flower2,
  "olhar-face": Eye,
  "bem-estar": Heart,
  "maquiagem": Palette,
  "depilacao": Wind,
  "penteado": Crown,
}

interface Props {
  ativa: Categoria
  onChange: (categoria: Categoria) => void
}

export function CategoriaTabs({ ativa, onChange }: Props) {
  const [dropdownAberto, setDropdownAberto] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const categoriaAtiva = categorias.find((c) => c.id === ativa)
  const IconeAtivo = icones[ativa]

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickFora(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownAberto(false)
      }
    }
    document.addEventListener("mousedown", handleClickFora)
    return () => document.removeEventListener("mousedown", handleClickFora)
  }, [])

  return (
    <>
      {/* ========== MOBILE: Select estilizado ========== */}
      <div className="lg:hidden relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownAberto(!dropdownAberto)}
          className="w-full flex items-center justify-between gap-3 px-5 py-3.5 bg-primary text-white rounded-2xl text-sm font-medium shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
              <IconeAtivo className="w-4 h-4" />
            </div>
            <span>{categoriaAtiva?.nome}</span>
          </div>
          <ChevronDown className={`w-4 h-4 transition-transform ${dropdownAberto ? "rotate-180" : ""}`} />
        </button>

        {dropdownAberto && (
          <div className="absolute top-full mt-2 left-0 right-0 z-50 bg-surface border border-border rounded-2xl shadow-lg overflow-hidden animate-in slide-in-from-top-2">
            {categorias.map((cat) => {
              const Icone = icones[cat.id]
              const isAtiva = ativa === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    onChange(cat.id)
                    setDropdownAberto(false)
                  }}
                  className={`
                    w-full flex items-center gap-3 px-5 py-3 text-sm transition-colors
                    ${isAtiva 
                      ? "bg-primary/5 text-primary font-medium" 
                      : "text-muted hover:bg-background hover:text-foreground"
                    }
                    ${cat.id !== categorias[categorias.length - 1].id ? "border-b border-border" : ""}
                  `}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isAtiva ? "bg-primary/10" : "bg-background"}`}>
                    <Icone className="w-4 h-4" />
                  </div>
                  {cat.nome}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* ========== DESKTOP: Tabs horizontais ========== */}
      <div className="hidden lg:flex flex-wrap gap-2">
        {categorias.map((cat) => {
          const Icone = icones[cat.id]
          const isAtiva = ativa === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => onChange(cat.id)}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium
                transition-all
                ${isAtiva 
                  ? "bg-primary text-white shadow-sm" 
                  : "bg-surface text-muted border border-border hover:border-primary/30 hover:text-foreground"
                }
              `}
            >
              <Icone className="w-4 h-4" />
              {cat.nome}
            </button>
          )
        })}
      </div>
    </>
  )
}