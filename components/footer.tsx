import Link from "next/link"
import { Sparkles, ArrowRight, Mail, MapPin, Phone, Instagram, Twitter, Linkedin, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0077B6]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand section */}
            <div className="lg:col-span-5">
              <div className="mb-8">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                  <Sparkles className="h-6 w-6 text-white" />
                  <span className="text-2xl font-bold text-white">ORION</span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                  L'avenir de la jeunesse guinéenne
                </h3>
                
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  Une plateforme qui fédère la jeunesse autour de projets innovants, culturels et sportifs pour transformer l'avenir.
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                  <Heart className="h-4 w-4 text-white animate-pulse" />
                  <span className="text-sm font-medium text-white">Unir, inspirer, agir</span>
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4">
                <span className="text-white/80 text-sm font-medium">Suivez-nous :</span>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, href: "https://www.instagram.com/orion_guinee?igsh=dmJoNjNicGViNXpj&utm_source=qr", label: "Instagram" },
                    { icon: Twitter, href: "https://x.com/orionguinee?s=21", label: "Twitter" },
                    { icon: Linkedin, href: "#", label: "LinkedIn" }
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation sections */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {/* Quick Links */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6 relative">
                    Navigation
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-white/60 rounded-full" />
                  </h4>
                  <ul className="space-y-3">
                    {[
                      { href: "/", label: "Accueil" },
                      { href: "/about", label: "À propos" },
                      { href: "/projects", label: "Projets" },
                      { href: "/blog", label: "Blog" }
                    ].map(({ href, label }) => (
                      <li key={label}>
                        <Link 
                          href={href} 
                          className="group flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300"
                        >
                          <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span className="group-hover:translate-x-1 transition-transform">{label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Projects */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6 relative">
                    Projets
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-white/60 rounded-full" />
                  </h4>
                  <ul className="space-y-3">
                    {[
                      { href: "/projects#grainy", label: "Grainy" },
                      { href: "/projects#streetfire", label: "Streetfire 3x3" },
                      { href: "/projects#formation", label: "Formation" },
                      { href: "/projects", label: "Voir tous" }
                    ].map(({ href, label }) => (
                      <li key={label}>
                        <Link 
                          href={href} 
                          className="group flex items-center gap-2 text-white/80 hover:text-white transition-all duration-300"
                        >
                          <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span className="group-hover:translate-x-1 transition-transform">{label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-6 relative">
                    Contact
                    <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-white/60 rounded-full" />
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-white/80">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">contact@orionguinee.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">Conakry, Guinée</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/80">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">629078819</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-4 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-white/80">
              <span className="text-sm">© {new Date().getFullYear()} ORION</span>
              <span className="text-white/40">•</span>
              <span className="text-sm">Tous droits réservés</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-white/80">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Confidentialité
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Conditions
              </Link>
              <div className="flex items-center gap-1">
                <span>Fait avec</span>
                <Heart className="h-3 w-3 text-red-400 animate-pulse" />
                <span>en Guinée</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
