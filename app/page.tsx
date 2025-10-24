import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { TestimonialsStats } from "@/components/testimonials-stats"
import { ArrowRight, Target, Lightbulb, Zap, Sparkles, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Full width immersive with constellation effect */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/young.jpg')",
            backgroundPosition: 'center 10%'
          }}
        >
          {/* Subtle overlay for text readability only */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/20" />
        </div>

        {/* Hero content */}
        <div className="relative h-full flex items-end justify-center px-4 sm:px-6 lg:px-8 pb-24">
          <div className="text-center max-w-6xl mx-auto">
            {/* ORION Logo */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/95 backdrop-blur-md border border-[#0077B6]/20 mb-8 animate-fade-in-up">
              <Sparkles className="h-8 w-8 text-[#0077B6] transition-all duration-300" />
              <span className="text-2xl font-bold tracking-tight text-[#0077B6]">ORION</span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-8 text-white text-balance animate-fade-in-up delay-100 drop-shadow-2xl">
              Unir, inspirer, agir
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl text-white mb-12 max-w-4xl mx-auto text-pretty leading-relaxed font-normal animate-fade-in-up delay-200 drop-shadow-lg bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              ORION fédère la jeunesse guinéenne autour de projets innovants, culturels et sportifs qui transforment
              l'avenir
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <Button
                asChild
                size="lg"
                className="bg-[#0077B6] hover:bg-[#0077B6]/90 text-white text-lg h-14 px-10 rounded-full shadow-2xl shadow-[#0077B6]/30 hover:shadow-[#0077B6]/50 transition-all hover:scale-105"
              >
                <Link href="/projects">
                  Découvrir nos projets
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-white/95 hover:bg-white text-[#0077B6] text-lg h-14 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <Link href="/about">En savoir plus</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Ultra innovative bento grid layout */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
             className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "radial-gradient(circle, #0077B6 1px, transparent 1px)",
               backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
           <div className="text-center mb-24">
             <div className="relative mb-8">
               <div className="inline-flex items-center gap-3">
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-pulse"></div>
                   <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-bounce"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-ping"></div>
                 </div>
                 <span className="text-base font-bold text-[#0077B6] tracking-wider">NOTRE MISSION</span>
               </div>
            </div>
             <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
              Trois piliers, un mouvement
            </h2>
             <p className="text-xl sm:text-2xl text-foreground/60 max-w-4xl mx-auto text-pretty leading-relaxed font-light">
              Créer un espace où les jeunes peuvent apprendre, créer, entreprendre et s'élever ensemble
            </p>
          </div>

           <div className="relative max-w-6xl mx-auto">

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20 relative" style={{ zIndex: 1 }}>
              {/* Unité */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#0077B6]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative text-center">
                  {/* Icon with pulse effect */}
                  <div className="inline-flex mb-6 relative">
                    <div className="absolute inset-0 bg-[#0077B6] rounded-full animate-ping opacity-20" />
                    <div className="relative w-20 h-20 rounded-full bg-[#0077B6] flex items-center justify-center shadow-xl shadow-[#0077B6]/30 group-hover:scale-110 transition-transform duration-500">
                      <Target className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0077B6]/10 border border-[#0077B6]/20">
                      <span className="text-xs font-bold text-[#0077B6]">01</span>
                    </div>

                    <h3 className="text-4xl font-bold text-[#0077B6]">Unité</h3>

                    <p className="text-foreground/70 leading-relaxed text-lg">
                      Rassembler les talents et les énergies pour créer une communauté forte et solidaire qui transcende
                      les frontières
                    </p>

                    <div className="flex items-center gap-3 text-[#0077B6] justify-center pt-2">
                      <Users className="h-5 w-5" />
                      <span className="text-sm font-semibold">+50 jeunes connectés</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inspiration */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#00B4D8]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative text-center">
                  {/* Icon with pulse effect */}
                  <div className="inline-flex mb-6 relative">
                    <div className="absolute inset-0 bg-[#00B4D8] rounded-full animate-ping opacity-20 delay-300" />
                    <div className="relative w-20 h-20 rounded-full bg-[#00B4D8] flex items-center justify-center shadow-xl shadow-[#00B4D8]/30 group-hover:scale-110 transition-transform duration-500">
                      <Lightbulb className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00B4D8]/10 border border-[#00B4D8]/20">
                      <span className="text-xs font-bold text-[#00B4D8]">02</span>
                    </div>

                    <h3 className="text-4xl font-bold text-[#00B4D8]">Inspiration</h3>

                    <p className="text-foreground/70 leading-relaxed text-lg">
                      Donner confiance et ouvrir des perspectives pour révéler le potentiel de chacun et créer des
                      modèles
                    </p>

                    <div className="flex items-center gap-3 text-[#00B4D8] justify-center pt-2">
                      <TrendingUp className="h-5 w-5" />
                      <span className="text-sm font-semibold">Impact croissant</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#0077B6]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative text-center">
                  {/* Icon with pulse effect */}
                  <div className="inline-flex mb-6 relative">
                    <div className="absolute inset-0 bg-[#0077B6] rounded-full animate-ping opacity-20 delay-700" />
                    <div className="relative w-20 h-20 rounded-full bg-[#0077B6] flex items-center justify-center shadow-xl shadow-[#0077B6]/30 group-hover:scale-110 transition-transform duration-500">
                      <Zap className="h-10 w-10 text-white" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0077B6]/10 border border-[#0077B6]/20">
                      <span className="text-xs font-bold text-[#0077B6]">03</span>
                    </div>

                    <h3 className="text-4xl font-bold text-[#0077B6]">Action</h3>

                    <p className="text-foreground/70 leading-relaxed text-lg">
                      Passer des idées aux réalisations concrètes qui transforment notre avenir et créent un impact
                      durable
                    </p>

                    <div className="pt-4">
                      <Button
                        asChild
                        className="bg-[#0077B6] hover:bg-[#0077B6]/90 text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all"
                      >
                        <Link href="/projects">
                          Voir les projets
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview - Innovative cards */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#0077B6]/5 to-white relative">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="relative mb-8">
              <div className="inline-flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-bounce"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-ping"></div>
                </div>
                <span className="text-base font-bold text-[#00B4D8] tracking-wider">NOS INITIATIVES</span>
              </div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance text-[#00B4D8]">
              Projets phares
            </h2>
            <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto text-pretty leading-relaxed">
              Des initiatives qui unissent innovation, culture et sport pour bâtir l'avenir
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Grainy */}
            <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-[#0077B6]/20 transition-all duration-500 hover:scale-[1.03] bg-white border-2 border-transparent hover:border-[#0077B6]/30 flex flex-col p-0">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/sustainable-innovation-technology.jpg"
                  alt="Grainy - Innovation & Durabilité"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0077B6]/90 via-[#0077B6]/40 to-transparent" />
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-4xl font-bold mb-2 text-white">Grainy</h3>
                  <p className="text-sm text-white/90 font-medium uppercase tracking-wider">Innovation & Durabilité</p>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-foreground/70 mb-6 leading-relaxed text-lg flex-grow">
                  Moins de gaspillage, plus d'avenir. Transformer les déchets en opportunités.
                </p>
                <Button
                  asChild
                  className="group-hover:bg-[#0077B6] group-hover:text-white bg-[#0077B6]/10 text-[#0077B6] w-full rounded-full h-12 font-semibold transition-all"
                >
                  <Link href="/projects#grainy">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Streetfire 3x3 */}
            <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-[#00B4D8]/20 transition-all duration-500 hover:scale-[1.03] bg-white border-2 border-transparent hover:border-[#00B4D8]/30 flex flex-col p-0">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/basketball-3x3-street-sports-energy.jpg"
                  alt="Streetfire 3x3 - Sport & Énergie collective"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00B4D8]/90 via-[#00B4D8]/40 to-transparent" />
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-4xl font-bold mb-2 text-white">Streetfire 3x3</h3>
                  <p className="text-sm text-white/90 font-medium uppercase tracking-wider">Sport & Énergie</p>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-foreground/70 mb-6 leading-relaxed text-lg flex-grow">
                  Plus qu'un tournoi, un mouvement qui unit la jeunesse par le sport.
                </p>
                <Button
                  asChild
                  className="group-hover:bg-[#00B4D8] group-hover:text-white bg-[#00B4D8]/10 text-[#00B4D8] w-full rounded-full h-12 font-semibold transition-all"
                >
                  <Link href="/projects#streetfire">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </Card>

            {/* Formation */}
            <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-[#0077B6]/20 transition-all duration-500 hover:scale-[1.03] bg-white border-2 border-transparent hover:border-[#0077B6]/30 flex flex-col p-0">
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/leadership-training-education-mentorship.jpg"
                  alt="Formation - Leadership & Développement"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0077B6]/90 via-[#0077B6]/40 to-transparent" />
                <div className="absolute top-6 right-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-4xl font-bold mb-2 text-white">Formation</h3>
                  <p className="text-sm text-white/90 font-medium uppercase tracking-wider">
                    Leadership & Développement
                  </p>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-foreground/70 mb-6 leading-relaxed text-lg flex-grow">
                  Former les leaders de demain avec des compétences concrètes et durables.
                </p>
                <Button
                  asChild
                  className="group-hover:bg-[#0077B6] group-hover:text-white bg-[#0077B6]/10 text-[#0077B6] w-full rounded-full h-12 font-semibold transition-all"
                >
                  <Link href="/projects#formation">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials & Stats Section */}
      <TestimonialsStats />

      {/* CTA Section - Ultra modern */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0077B6]">
          <div className="constellation-dots absolute inset-0 opacity-20" />
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
            {/* Partie texte à gauche */}
            <div className="text-center lg:text-left">
              <div className="relative mb-8">
                <div className="inline-flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-white to-blue-100 animate-pulse"></div>
                    <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-100 to-white animate-bounce"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-white to-blue-100 animate-ping"></div>
                  </div>
                  <span className="text-base font-bold text-white tracking-wider">REJOIGNEZ LE MOUVEMENT</span>
                </div>
          </div>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Prêt à rejoindre ORION ?
          </h2>
              <p className="text-xl sm:text-2xl text-white/90 mb-12 text-pretty leading-relaxed">
            Ensemble, transformons l'énergie collective en opportunités concrètes pour l'avenir de la Guinée
          </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-white hover:bg-white/90 text-[#0077B6] text-lg h-14 px-10 rounded-full shadow-2xl hover:shadow-white/30 transition-all hover:scale-105"
            >
              <Link href="/contact">
                Rejoindre ORION
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white text-lg h-14 px-10 rounded-full transition-all hover:scale-105"
            >
              <Link href="/blog">Lire notre blog</Link>
            </Button>
              </div>
            </div>

            {/* Partie image circulaire à droite */}
            <div className="flex justify-center lg:justify-end lg:pt-16">
              <div className="w-96 h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: "url('/people.jpg')",
                    backgroundPosition: 'center'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
