"use client"

import Image from "next/image"

interface Props {
  imagens: {
    src: string
    alt: string
  }[]
}

export function GaleriaCarrossel({ imagens }: Props) {
  const imagensDuplicadas = [...imagens, ...imagens]

  return (
    <section className="border-b border-border bg-background overflow-hidden">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="flex gap-4 py-6 animate-scroll">
          {imagensDuplicadas.map((imagem, index) => (
            <div
              key={index}
              className="w-[280px] sm:w-[320px] flex-shrink-0 rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-colors"
            >
              <Image
                src={imagem.src}
                alt={imagem.alt}
                width={320}
                height={240}
                unoptimized
                className="w-full h-[200px] sm:h-[240px] object-cover pointer-events-none"
              />
            </div>
          ))}
        </div>
        {/* Segunda cópia idêntica pro loop infinito */}
        <div className="flex gap-4 py-6 animate-scroll" aria-hidden="true">
          {imagensDuplicadas.map((imagem, index) => (
            <div
              key={`clone-${index}`}
              className="w-[280px] sm:w-[320px] flex-shrink-0 rounded-2xl overflow-hidden border border-border"
            >
              <Image
                src={imagem.src}
                alt=""
                width={320}
                height={240}
                unoptimized
                className="w-full h-[200px] sm:h-[240px] object-cover pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}