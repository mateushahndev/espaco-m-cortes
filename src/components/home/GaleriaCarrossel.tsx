"use client"

import { useEffect, useRef, useState } from "react"

interface Props {
  imagens: {
    src: string
    alt: string
  }[]
}

export function GaleriaCarrossel({ imagens }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let animationId: number
    let scrollSpeed = 0.5 // pixels por frame

    const scroll = () => {
      if (!isPaused && container) {
        container.scrollLeft += scrollSpeed

        // Reset infinito: quando chegar na metade, volta ao início
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0
        }
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [isPaused])

  // Duplica as imagens pra criar efeito infinito
  const imagensDuplicadas = [...imagens, ...imagens]

  return (
    <section className="border-b border-border bg-background overflow-hidden">
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex gap-4 py-6 px-2 flex-shrink-0">
          {imagensDuplicadas.map((imagem, index) => (
            <div
              key={index}
              className="w-[280px] sm:w-[320px] flex-shrink-0 rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-colors"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imagem.src}
                alt={imagem.alt}
                width={320}
                height={240}
                loading="lazy"
                className="w-full h-[200px] sm:h-[240px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}