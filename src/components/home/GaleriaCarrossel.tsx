"use client"

import Image from "next/image"
import { useState } from "react"

interface Props {
  imagens: {
    src: string
    alt: string
  }[]
}

export function GaleriaCarrossel({ imagens }: Props) {
  const [imagensCarregadas, setImagensCarregadas] = useState<Set<number>>(new Set())

  // Apenas 2 cópias: original + 1 duplicata (suficiente pro loop CSS)
  const imagensLoop = [...imagens, ...imagens]

  return (
    <section className="border-b border-border bg-background overflow-hidden">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex gap-4 py-6 animate-scroll">
          {imagensLoop.map((imagem, index) => {
            const carregada = imagensCarregadas.has(index)
            // Primeiras 4 imagens têm prioridade
            const isPrioritaria = index < 4

            return (
              <div
                key={index}
                className={`
                  w-[280px] sm:w-[320px] flex-shrink-0 rounded-2xl overflow-hidden 
                  border border-border hover:border-primary/30 transition-colors
                  ${!carregada ? "bg-[#F5EDE4] animate-pulse" : ""}
                `}
              >
                <Image
                  src={imagem.src}
                  alt={imagem.alt}
                  width={320}
                  height={240}
                  unoptimized
                  priority={isPrioritaria}
                  loading={isPrioritaria ? "eager" : "lazy"}
                  onLoad={() => setImagensCarregadas((prev) => new Set(prev).add(index))}
                  className={`
                    w-full h-[200px] sm:h-[240px] object-cover pointer-events-none
                    transition-opacity duration-300
                    ${carregada ? "opacity-100" : "opacity-0"}
                  `}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}