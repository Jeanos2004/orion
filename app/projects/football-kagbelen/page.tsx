"use client";

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Trophy, Users, Target, Calendar, MapPin, CheckCircle2, Star, Globe, Sparkles, Heart, Shield, Award } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function FootballKagbelenPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30">
        <div className="mx-auto max-w-7xl text-center">
          <div className="relative mb-8">
            <div className="inline-flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-pulse"></div>
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-bounce"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-ping"></div>
              </div>
              <span className="text-base font-bold text-[#0077B6] tracking-wider">SPORT & COHÉSION SOCIALE</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
            Tournoi Inter-Secteur de Football
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto text-pretty leading-relaxed">
            Kagbelen Plateau — Édition 2025
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="overflow-hidden border-[#0077B6]/20 p-0">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/soccer.jpg"
                    alt="Tournoi Inter-Secteur de Football de Kagbelen Plateau"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
                Un événement citoyen et communautaire
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Organisé par <strong>ORION Guinée</strong>, le Tournoi Inter-Secteur de Football de Kagbelen Plateau est 
                un événement citoyen et communautaire qui rassemble la jeunesse autour des valeurs de solidarité, 
                respect et unité.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Porté sous l'égide du <strong>Mouvement de soutien des actions de développement et de refondation 
                du Général Mamady Doumbouya (MSDR-GMD)</strong>, ce tournoi vise à renforcer la cohésion sociale 
                et à révéler les jeunes talents sportifs du quartier.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Durant deux semaines — du 17 au 29 novembre 2025 — huit équipes issues des différents 
                secteurs de Kagbelen Plateau s'affronteront dans un esprit de fair-play et de fraternité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Design innovant */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0077B6]/5 via-[#00B4D8]/5 to-[#0077B6]/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="relative mb-8">
              <div className="inline-flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-bounce"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-ping"></div>
                </div>
                <span className="text-base font-bold text-[#0077B6] tracking-wider">NOS OBJECTIFS</span>
              </div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
              Nos objectifs
            </h2>
            <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto text-pretty leading-relaxed">
              Promouvoir la cohésion sociale et révéler les talents sportifs de la jeunesse
            </p>
          </div>

          {/* Design en grille avec effets visuels */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div 
              className="group relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/10 to-[#00B4D8]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-8 text-center bg-white/80 backdrop-blur-sm rounded-3xl border border-[#0077B6]/20 hover:border-[#0077B6]/40 transition-all duration-500">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent">Cohésion sociale</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Renforcer l'unité communautaire à travers le sport et créer des liens durables entre 
                  les différents secteurs de Kagbelen Plateau.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/10 to-[#0077B6]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-8 text-center bg-white/80 backdrop-blur-sm rounded-3xl border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-500">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#0077B6] flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">Révéler les talents</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Offrir un cadre d'expression et d'émulation pour les jeunes sportifs et mettre en 
                  lumière le potentiel sportif local.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/10 to-[#00B4D8]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-8 text-center bg-white/80 backdrop-blur-sm rounded-3xl border border-[#0077B6]/20 hover:border-[#0077B6]/40 transition-all duration-500">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent">Valeurs citoyennes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sensibiliser la jeunesse aux valeurs citoyennes, au respect et à la discipline 
                  à travers la pratique sportive.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Details Section - Design moderne */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="relative mb-8">
              <div className="inline-flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-bounce"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-ping"></div>
                </div>
                <span className="text-base font-bold text-[#0077B6] tracking-wider">DÉTAILS DE L'ÉVÉNEMENT</span>
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
              Deux semaines de compétition
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Plus qu'une compétition, c'est un mouvement communautaire favorisant la rencontre entre 
              jeunes, autorités locales et acteurs économiques.
            </p>
          </div>

          {/* Design en grille avec effets visuels */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <motion.div 
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/10 to-[#00B4D8]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-6 text-center bg-white/90 backdrop-blur-sm rounded-3xl border border-[#0077B6]/20 hover:border-[#0077B6]/40 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0077B6]">Dates</h3>
                <p className="text-muted-foreground">17 – 29 novembre 2025</p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/10 to-[#0077B6]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-6 text-center bg-white/90 backdrop-blur-sm rounded-3xl border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00B4D8] to-[#0077B6] flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#00B4D8]">Lieu</h3>
                <p className="text-muted-foreground">Terrain principal de Kagbelen Plateau (Conakry)</p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/10 to-[#00B4D8]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-6 text-center bg-white/90 backdrop-blur-sm rounded-3xl border border-[#0077B6]/20 hover:border-[#0077B6]/40 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#0077B6]">Équipes</h3>
                <p className="text-muted-foreground">8 équipes des différents secteurs</p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/10 to-[#0077B6]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-6 text-center bg-white/90 backdrop-blur-sm rounded-3xl border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00B4D8] to-[#0077B6] flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#00B4D8]">Format</h3>
                <p className="text-muted-foreground">Tournoi à élimination directe</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Impact Section - Design créatif */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0077B6]/5 via-[#00B4D8]/5 to-[#0077B6]/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative mb-8">
                <div className="inline-flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-pulse"></div>
                    <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-bounce"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-ping"></div>
                  </div>
                  <span className="text-base font-bold text-[#0077B6] tracking-wider">IMPACT COMMUNAUTAIRE</span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
                Un événement pour et par la jeunesse
              </h2>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Le tournoi est une opportunité de mettre en lumière le potentiel sportif et social de 
                <strong> Kagbelen Plateau</strong>, tout en créant un cadre d'échange et de développement durable.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Chaque édition contribue à bâtir une tradition locale d'unité et d'espoir portée par la 
                jeunesse guinéenne, favorisant la rencontre entre jeunes, autorités locales et acteurs économiques.
              </p>

              {/* Design moderne pour les points clés */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#0077B6]/5 to-[#00B4D8]/5 border border-[#0077B6]/10">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-muted-foreground">Rencontre entre jeunes de différents secteurs</p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#00B4D8]/5 to-[#0077B6]/5 border border-[#00B4D8]/10">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#00B4D8] to-[#0077B6] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-muted-foreground">Participation des autorités locales</p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#0077B6]/5 to-[#00B4D8]/5 border border-[#0077B6]/10">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-muted-foreground">Engagement des acteurs économiques</p>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#00B4D8]/5 to-[#0077B6]/5 border border-[#00B4D8]/10">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#00B4D8] to-[#0077B6] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-muted-foreground">Création d'une tradition locale d'unité</p>
                </div>
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/20 to-[#00B4D8]/20 rounded-3xl blur-2xl"></div>
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#0077B6]/10 to-[#00B4D8]/10 rounded-3xl flex items-center justify-center border border-[#0077B6]/20">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <Heart className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0077B6] mb-2">Communauté Unie</h3>
                    <p className="text-muted-foreground">Kagbelen Plateau ensemble</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="relative mb-8">
            <div className="inline-flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-pulse"></div>
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-bounce"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-ping"></div>
              </div>
              <span className="text-base font-bold text-[#0077B6] tracking-wider">INFORMATIONS</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
            Rejoignez-nous pour cette édition 2025
          </h2>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Pour plus d'informations sur le tournoi, les inscriptions ou le parrainage, 
            contactez-nous dès maintenant.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#0077B6] hover:bg-[#0077B6]/90 text-white text-lg h-14 px-10 rounded-full">
              <Link href="/contact">
                Nous contacter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-[#00B4D8]/10 hover:bg-[#00B4D8]/20 backdrop-blur-md border-2 border-[#00B4D8]/30 text-[#00B4D8] text-lg h-14 px-10 rounded-full">
              <Link href="/projects">Voir nos autres projets</Link>
            </Button>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-[#0077B6]/5 to-[#00B4D8]/5 rounded-2xl border border-[#0077B6]/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-[#0077B6]" />
              <span className="text-lg font-semibold">Contact</span>
            </div>
            <p className="text-muted-foreground">
              <strong>Email :</strong> contact@orionguinee.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}