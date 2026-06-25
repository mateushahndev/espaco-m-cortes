import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Scissors, Home } from "lucide-react"

export const metadata = {
  title: "Página não encontrada",
  robots: "noindex, nofollow",
}

export default function NotFound() {
  return (
    <section className="flex-1 flex items-center justify-center bg-background">
      <div className="text-center px-4 py-32 space-y-6 max-w-md">
        <Scissors className="w-16 h-16 text-primary/30 mx-auto" />
        <h1 className="font-playfair text-4xl font-semibold text-foreground">
          404
        </h1>
        <p className="text-muted">
          Ops! Essa página não existe. Pode ter sido removida ou o link estar errado.
        </p>
        <Button className="bg-primary hover:bg-primary-light text-white rounded-full px-8 py-6" asChild>
          <Link href="/">
            <Home className="w-4 h-4 mr-2" />
            Voltar para Home
          </Link>
        </Button>
      </div>
    </section>
  )
}