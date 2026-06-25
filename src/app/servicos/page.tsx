"use client"

import { useState, useMemo, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { categorias, servicos, Categoria } from "@/lib/servicos"
import { CategoriaTabs } from "@/components/servicos/CategoriaTabs"
import { ServicoCard } from "@/components/servicos/ServicoCard"
import { BuscaServicos } from "@/components/servicos/BuscaServicos"
import { Badge } from "@/components/ui/badge"
import { Scissors } from "lucide-react"

function ServicosContent() {
  const searchParams = useSearchParams()
  const catParam = searchParams.get("categoria") as Categoria | null
  
  const [categoriaAtiva, setCategoriaAtiva] = useState<Categoria>("corte-finalizacao")
  const [busca, setBusca] = useState("")

  useEffect(() => {
    if (catParam && categorias.some((c) => c.id === catParam)) {
      setCategoriaAtiva(catParam)
    }
  }, [catParam])

  const servicosFiltrados = useMemo(() => {
    let filtrados = servicos.filter((s) => s.categoria === categoriaAtiva)

    if (busca.trim()) {
      const termo = busca.toLowerCase()
      filtrados = servicos.filter(
        (s) =>
          s.nome.toLowerCase().includes(termo) ||
          s.descricao.toLowerCase().includes(termo)
      )
    }

    return filtrados
  }, [categoriaAtiva, busca])

  const categoriaInfo = categorias.find((c) => c.id === categoriaAtiva)

  return (
    <>
      {/* Hero pequeno */}
      <section className="bg-gradient-to-br from-[#FDFBF7] to-[#F5EDE4] border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-1.5">
              <Scissors className="w-3 h-3 mr-1 inline" />
              Catálogo Completo
            </Badge>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
              Nossos Serviços
            </h1>
            <p className="text-muted max-w-lg mx-auto">
              Conheça todos os tratamentos que preparamos para realçar sua beleza e bem-estar.
            </p>
          </div>
        </div>
      </section>

      {/* Busca + Tabs + Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <BuscaServicos valor={busca} onChange={setBusca} />
        </div>

        {!busca.trim() && (
          <div className="mb-10">
            <CategoriaTabs ativa={categoriaAtiva} onChange={setCategoriaAtiva} />
          </div>
        )}

        {categoriaInfo && !busca.trim() && (
          <div className="mb-8">
            <h2 className="font-playfair text-2xl font-semibold text-foreground mb-2">
              {categoriaInfo.nome}
            </h2>
            <p className="text-muted">{categoriaInfo.descricao}</p>
          </div>
        )}

        {busca.trim() && (
          <div className="mb-8">
            <p className="text-muted">
              {servicosFiltrados.length} serviço{servicosFiltrados.length !== 1 ? "s" : ""} encontrado{servicosFiltrados.length !== 1 ? "s" : ""} para &ldquo;{busca}&rdquo;
            </p>
          </div>
        )}

        {servicosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicosFiltrados.map((servico) => (
              <ServicoCard key={servico.nome} servico={servico} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted text-lg">Nenhum serviço encontrado.</p>
            <p className="text-muted text-sm mt-1">Tente outro termo de busca.</p>
          </div>
        )}
      </section>
    </>
  )
}

export default function ServicosPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <p className="text-muted">Carregando serviços...</p>
      </div>
    }>
      <ServicosContent />
    </Suspense>
  )
}