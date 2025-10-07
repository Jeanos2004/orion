"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/projects", label: "Projets" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#0077B6]/10 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Sparkles className="h-8 w-8 text-[#0077B6] transition-all duration-300 group-hover:text-[#00B4D8] group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#00B4D8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#0077B6] rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-100" />
              <div className="absolute top-1/2 -left-2 w-1 h-1 bg-[#00B4D8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity delay-200" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-[#0077B6]">ORION</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#00B4D8] relative py-2",
                  item.href === "/" ? "text-[#00B4D8]" : "text-foreground/70",
                )}
              >
                {item.label}
                {item.href === "/" && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00B4D8]" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button
              asChild
              className="bg-[#0077B6] hover:bg-[#00B4D8] text-white rounded-full px-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <Link href="/contact">Rejoindre ORION</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button type="button" className="md:hidden text-[#0077B6]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#0077B6]/10 bg-white/95 backdrop-blur-xl">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-lg px-3 py-2 text-base font-medium transition-colors",
                  item.href === "/"
                    ? "bg-[#00B4D8]/10 text-[#00B4D8]"
                    : "text-foreground/70 hover:bg-[#00B4D8]/5 hover:text-[#00B4D8]",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full bg-[#0077B6] hover:bg-[#00B4D8] text-white rounded-full">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Rejoindre ORION
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
