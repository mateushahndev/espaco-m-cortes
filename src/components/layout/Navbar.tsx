"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Scissors } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Scissors className="w-7 h-7 text-primary group-hover:rotate-12 transition-transform" />
            <span className="font-playfair text-xl font-semibold text-foreground tracking-tight">
              Espaço M Cortes
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary-light text-white rounded-full px-6">
              <a href="https://wa.me/5511999999999" target="_blank">
                Agendar no WhatsApp
              </a>
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Abrir menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-foreground py-2"
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-primary hover:bg-primary-light text-white rounded-full w-full mt-2">
              Agendar no WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}