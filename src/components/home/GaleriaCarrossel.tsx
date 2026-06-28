"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

interface Props {
  imagens: {
    src: string
    alt: string
  }[]
}

export function GaleriaCarrossel({ imagens }: Props) {
  const [imagensVisiveis, setImagensVisiveis] = useState<Set<number>>(new Set([0, 1, 2, 3, 4, 5, 6, 7]))
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    imagens.forEach((imagem, index) => {
      const img = new window.Image()
      img.src = imagem.src
      img.onload = () => {
        setImagensVisiveis((prev) => new Set(prev).add(index))
      }
    })
  }, [imagens])

  // Única duplicata: 8 originais + 8 clones = 16 itens
  const imagensLoop = [...imagens, ...imagens]

  return (
    <section className="border-b border-border bg-background overflow-hidden">
      <div 
        ref={containerRef}
        className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      >
        <div className="flex gap-4 py-6 animate-scroll">
          {imagensLoop.map((imagem, index) => {
            const indiceReal = index % imagens.length
            const carregada = imagensVisiveis.has(indiceReal)

            return (
              <div
                key={index}
                className={`
                  w-[280px] sm:w-[320px] flex-shrink-0 rounded-2xl overflow-hidden 
                  border border-border hover:border-primary/30 transition-colors
                  ${!carregada ? "bg-[#F5EDE4]" : ""}
                `}
              >
                {carregada ? (
                  <Image
                    src={imagem.src}
                    alt={imagem.alt}
                    width={320}
                    height={240}
                    unoptimized
                    loading="eager"
                    className="w-full h-[200px] sm:h-[240px] object-cover pointer-events-none"
                  />
                ) : (
                  <div className="w-full h-[200px] sm:h-[240px] bg-[#F5EDE4] animate-pulse" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}