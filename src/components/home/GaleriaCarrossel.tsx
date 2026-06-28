"use client"

import Image from "next/image"

interface Props {
  imagens: {
    src: string
    alt: string
  }[]
}

export function GaleriaCarrossel({ imagens }: Props) {
  // Apenas 2 conjuntos: original + duplicata
  const imagensLoop = [...imagens, ...imagens]

  return (
    <section className="border-b border-border bg-background overflow-hidden">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex gap-4 py-6 animate-scroll">
          {imagensLoop.map((imagem, index) => (
            <div
              key={index}
              className="w-[280px] sm:w-[320px] flex-shrink-0 rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-colors bg-[#F5EDE4]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imagem.src}
                alt={imagem.alt}
                width={320}
                height={240}
                className="w-full h-[200px] sm:h-[240px] object-cover block"
                // Garante que o browser trate como crítica
                // @ts-ignore
                fetchpriority="high"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}