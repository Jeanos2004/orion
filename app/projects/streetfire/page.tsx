"use client";

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Users, Target, Calendar, MapPin, Trophy, Music, Camera, CheckCircle2, Star, Globe, Sparkles, Heart, Flame } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function StreetFirePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30">
        <div className="mx-auto max-w-7xl text-center">
          <div className="relative mb-8">
            <div className="inline-flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-pulse"></div>
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-bounce"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-ping"></div>
              </div>
              <span className="text-base font-bold text-[#00B4D8] tracking-wider">SPORT & ÉNERGIE COLLECTIVE</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#00B4D8] via-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent">
            StreetFire 3x3
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto text-pretty leading-relaxed">
            L'étincelle de la jeunesse guinéenne
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="overflow-hidden border-[#00B4D8]/20 p-0">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/basketball-3x3-street-sports-energy.jpg"
                    alt="StreetFire 3x3 - Basketball urbain"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00B4D8] via-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent">
                Un événement unique en Guinée
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                StreetFire 3x3 est un événement sportif et culturel unique en Guinée, organisé par ORION, une structure 
                innovante dédiée à l'épanouissement de la jeunesse et à la valorisation du sport.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Cette première édition, prévue en décembre 2025 à la Plage de Camayenne (Conakry), réunira les 
                passionnés de basketball, les universités, les clubs et les talents émergents autour d'un concept urbain et festif.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bien plus qu'une compétition, StreetFire 3x3 est une plateforme de cohésion sociale, un show sportif 
                et artistique où performance, créativité et engagement se rencontrent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs Section - Design innovant */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00B4D8]/5 via-[#0077B6]/5 to-[#00B4D8]/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="relative mb-8">
              <div className="inline-flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-bounce"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-ping"></div>
                </div>
                <span className="text-base font-bold text-[#00B4D8] tracking-wider">NOS OBJECTIFS</span>
              </div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#00B4D8] via-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent">
              Nos objectifs
            </h2>
          </div>

          {/* Design en grille avec effets visuels */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/10 to-[#0077B6]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-8 bg-white/90 backdrop-blur-sm rounded-3xl border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00B4D8] to-[#0077B6] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Trophy className="h-8 w-8 text-white" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">Promouvoir le basketball guinéen</h3>
                  <p className="text-muted-foreground leading-relaxed">
                      Mettre en valeur les talents locaux et créer une dynamique sportive durable dans le pays
                  </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/10 to-[#00B4D8]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-8 bg-white/90 backdrop-blur-sm rounded-3xl border border-[#0077B6]/20 hover:border-[#0077B6]/40 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent">Favoriser la cohésion sociale</h3>
                  <p className="text-muted-foreground leading-relaxed">
                      Rassembler les jeunes de différents milieux autour de valeurs communes et d'un esprit d'équipe
                  </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/10 to-[#0077B6]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-8 bg-white/90 backdrop-blur-sm rounded-3xl border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00B4D8] to-[#0077B6] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Star className="h-8 w-8 text-white" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">Détecter les talents</h3>
                  <p className="text-muted-foreground leading-relaxed">
                      Identifier et accompagner les joueurs prometteurs vers des opportunités de développement
                  </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/10 to-[#00B4D8]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-8 bg-white/90 backdrop-blur-sm rounded-3xl border border-[#0077B6]/20 hover:border-[#0077B6]/40 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Globe className="h-8 w-8 text-white" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent">Positionner la Guinée</h3>
                  <p className="text-muted-foreground leading-relaxed">
                      Créer un événement de référence qui place la Guinée sur la carte du basketball africain
                  </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Public Section - Design créatif */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00B4D8] via-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent">
                Notre public
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Un public jeune, actif et connecté, âgé de 17 à 35 ans — étudiants, travailleurs et passionnés — 
                représentant la nouvelle génération urbaine de Guinée.
              </p>
              
              {/* Stats avec design moderne */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/10 to-[#00B4D8]/5 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <div className="relative p-6 text-center bg-white/80 backdrop-blur-sm rounded-2xl border border-[#00B4D8]/20">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent mb-2">5 000+</div>
                  <p className="text-sm text-muted-foreground">Spectateurs attendus</p>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/10 to-[#0077B6]/5 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <div className="relative p-6 text-center bg-white/80 backdrop-blur-sm rounded-2xl border border-[#0077B6]/20">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent mb-2">Milliers</div>
                  <p className="text-sm text-muted-foreground">D'internautes connectés</p>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                L'événement vise plus de 5 000 spectateurs et des milliers d'internautes via une couverture médiatique 
                locale et digitale.
              </p>
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/20 to-[#0077B6]/20 rounded-3xl blur-2xl"></div>
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#00B4D8]/10 to-[#0077B6]/10 rounded-3xl flex items-center justify-center border border-[#00B4D8]/20">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#00B4D8] to-[#0077B6] flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Jeunesse Connectée</h3>
                    <p className="text-muted-foreground">17-35 ans, urbaine et passionnée</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Format Section - Design innovant */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00B4D8]/5 via-[#0077B6]/5 to-[#00B4D8]/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="relative mb-8">
              <div className="inline-flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-bounce"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-ping"></div>
                </div>
                <span className="text-base font-bold text-[#00B4D8] tracking-wider">FORMAT DE L'ÉVÉNEMENT</span>
              </div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#00B4D8] via-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent">
              Format de l'événement
            </h2>
          </div>

          {/* Timeline moderne */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00B4D8] to-[#0077B6] rounded-full"></div>
            
            <div className="space-y-16">
              {/* Phase 1 */}
              <div className="flex items-center gap-8">
                <div className="flex-1 text-right pr-8">
                  <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-[#00B4D8]/10 to-[#00B4D8]/5 border border-[#00B4D8]/20">
                    <h3 className="text-xl font-bold mb-3 text-[#00B4D8]">Phase 1 : Qualifications</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tournois de qualification dans les universités et clubs de Conakry
                    </p>
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#0077B6] flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Phase 2 */}
              <div className="flex items-center gap-8">
                <div className="flex-1 pr-8"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
              </div>
                <div className="flex-1 pl-8">
                  <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-[#0077B6]/10 to-[#0077B6]/5 border border-[#0077B6]/20">
                    <h3 className="text-xl font-bold mb-3 text-[#0077B6]">Phase 2 : Finale</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tournoi final à la Plage de Camayenne avec 16 équipes qualifiées
                    </p>
              </div>
              </div>
          </div>

              {/* Phase 3 */}
              <div className="flex items-center gap-8">
                <div className="flex-1 text-right pr-8">
                  <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-[#00B4D8]/10 to-[#00B4D8]/5 border border-[#00B4D8]/20">
                    <h3 className="text-xl font-bold mb-3 text-[#00B4D8]">Phase 3 : Show</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Concerts, performances artistiques et cérémonie de remise des prix
            </p>
          </div>
        </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#0077B6] flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                </div>
                <div className="flex-1 pl-8"></div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activités Section - Design créatif */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#00B4D8] via-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent">
              Activités parallèles
            </h2>
          </div>

          {/* Design en grille avec effets visuels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/10 to-[#00B4D8]/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-8 text-center bg-white/90 backdrop-blur-sm rounded-3xl border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-500">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#00B4D8] to-[#0077B6] flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Music className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#00B4D8]">Concerts live</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Performances d'artistes locaux et internationaux pour animer l'événement
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/10 to-[#0077B6]/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-8 text-center bg-white/90 backdrop-blur-sm rounded-3xl border border-[#0077B6]/20 hover:border-[#0077B6]/40 transition-all duration-500">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Camera className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#0077B6]">Village média</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Espace dédié aux médias, réseaux sociaux et couverture de l'événement
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/10 to-[#00B4D8]/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-8 text-center bg-white/90 backdrop-blur-sm rounded-3xl border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-500">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#00B4D8] to-[#0077B6] flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#00B4D8]">Animations</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ateliers, jeux interactifs et activités pour tous les âges
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00B4D8] to-[#0077B6]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-8 text-white">
            StreetFire 3x3, l'étincelle qui allume la passion
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Rejoignez-nous pour cette première édition historique qui marquera le début d'une nouvelle ère 
            pour le basketball guinéen.
          </p>
          <p className="text-lg text-white/80 mb-12">
            Plus qu'un tournoi, c'est un mouvement qui unit la jeunesse autour du sport et de la culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white hover:bg-white/90 text-[#00B4D8] text-lg h-14 px-10 rounded-full">
              <Link href="/contact">
                Participer à StreetFire
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white text-lg h-14 px-10 rounded-full">
              <Link href="/projects">Voir nos autres projets</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}