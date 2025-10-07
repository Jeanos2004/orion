import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0077B6]/5 via-[#00B4D8]/5 to-[#0077B6]/5">
      <div className="mx-auto max-w-2xl text-center px-4">
        <Card className="p-12 bg-white border-2 border-[#0077B6]/20 shadow-xl">
          <div className="relative mb-8">
            <div className="inline-flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-pulse"></div>
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-bounce"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-ping"></div>
              </div>
              <span className="text-base font-bold text-[#0077B6] tracking-wider">ERREUR 404</span>
            </div>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
            Page introuvable
          </h1>
          
          <p className="text-xl text-foreground/70 mb-8 text-pretty leading-relaxed">
            La page que vous recherchez n'existe pas ou a été déplacée. 
            Retournons ensemble vers la constellation ORION.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#0077B6] hover:bg-[#0077B6]/90 text-white h-14 px-8 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-[#0077B6]/30 transition-all hover:scale-105">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Retour à l'accueil
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-[#0077B6] text-[#0077B6] hover:bg-[#0077B6] hover:text-white h-14 px-8 rounded-full text-lg font-semibold transition-all hover:scale-105">
              <Link href="javascript:history.back()">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Page précédente
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </main>
  )
}
