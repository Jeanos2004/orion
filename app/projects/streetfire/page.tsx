"use client";

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Users, Target, Calendar, MapPin, Trophy, Music, Camera, CheckCircle2, Star, Globe, Sparkles } from "lucide-react"
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

      {/* Objectifs Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#00B4D8]/10 flex items-center justify-center flex-shrink-0">
                  <Trophy className="h-6 w-6 text-[#00B4D8]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#00B4D8]">Promouvoir le basketball guinéen</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Révéler de nouveaux talents et mettre en valeur le basketball guinéen sur la scène nationale et internationale
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white border-[#0077B6]/20 hover:border-[#0077B6]/40 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0077B6]/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-[#0077B6]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#0077B6]">Créer un cadre de rassemblement</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Rassembler la jeunesse autour du sport, de la culture et créer des liens durables dans la communauté
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#00B4D8]/10 flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-[#00B4D8]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#00B4D8]">Sensibiliser aux bienfaits du sport</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Promouvoir les valeurs du sport et sensibiliser le public à l'importance de l'activité physique et de la solidarité
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white border-[#0077B6]/20 hover:border-[#0077B6]/40 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0077B6]/10 flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6 text-[#0077B6]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-[#0077B6]">Offrir une visibilité exceptionnelle</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Proposer aux marques partenaires une visibilité valorisante dans un environnement vibrant et moderne
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Public Section */}
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
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-2xl bg-[#00B4D8]/10">
                  <div className="text-3xl font-bold text-[#00B4D8] mb-2">5 000+</div>
                  <p className="text-sm text-muted-foreground">Spectateurs attendus</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-[#0077B6]/10">
                  <div className="text-3xl font-bold text-[#0077B6] mb-2">Milliers</div>
                  <p className="text-sm text-muted-foreground">D'internautes connectés</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mt-6 leading-relaxed">
                L'événement vise plus de 5 000 spectateurs et des milliers d'internautes via une couverture médiatique 
                locale et digitale.
              </p>
            </div>

            <div>
              <Card className="overflow-hidden border-[#00B4D8]/20 p-0">
                <div className="aspect-[4/3] relative bg-gradient-to-br from-[#00B4D8]/10 to-[#0077B6]/10 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="h-24 w-24 text-[#00B4D8] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-[#00B4D8] mb-2">Jeunesse Connectée</h3>
                    <p className="text-muted-foreground">17-35 ans • Actifs • Passionnés</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00B4D8]/5 via-[#0077B6]/5 to-[#00B4D8]/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#00B4D8] via-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent">
              Un événement à fort impact
            </h2>
            <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto text-pretty leading-relaxed">
              Entre matchs spectaculaires, concours de dunk, performances artistiques, animations DJ et présence d'influenceurs, 
              StreetFire 3x3 fera vibrer Conakry le temps d'un week-end inoubliable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center bg-white border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-500">
              <div className="w-16 h-16 rounded-full bg-[#00B4D8]/10 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-[#00B4D8]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#00B4D8]">Matchs Spectaculaires</h3>
              <p className="text-sm text-muted-foreground">Compétitions de haut niveau</p>
            </Card>

            <Card className="p-6 text-center bg-white border-[#0077B6]/20 hover:border-[#0077B6]/40 transition-all duration-500">
              <div className="w-16 h-16 rounded-full bg-[#0077B6]/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-[#0077B6]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0077B6]">Concours de Dunk</h3>
              <p className="text-sm text-muted-foreground">Performances aériennes</p>
            </Card>

            <Card className="p-6 text-center bg-white border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-500">
              <div className="w-16 h-16 rounded-full bg-[#00B4D8]/10 flex items-center justify-center mx-auto mb-4">
                <Music className="h-8 w-8 text-[#00B4D8]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#00B4D8]">Performances Artistiques</h3>
              <p className="text-sm text-muted-foreground">Animations DJ et spectacles</p>
            </Card>

            <Card className="p-6 text-center bg-white border-[#0077B6]/20 hover:border-[#0077B6]/40 transition-all duration-500">
              <div className="w-16 h-16 rounded-full bg-[#0077B6]/10 flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-[#0077B6]" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-[#0077B6]">Influenceurs</h3>
              <p className="text-sm text-muted-foreground">Couverture médiatique</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chaque sponsor y trouvera une visibilité valorisante et un impact réel sur la jeunesse guinéenne.
            </p>
          </div>
        </div>
      </section>

      {/* ORION Project Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="overflow-hidden border-[#0077B6]/20 p-0">
                <div className="aspect-[4/3] relative bg-gradient-to-br from-[#0077B6]/10 to-[#00B4D8]/10 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="h-24 w-24 text-[#0077B6] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-[#0077B6] mb-2">Projet ORION</h3>
                    <p className="text-muted-foreground">Innovation • Jeunesse • Impact</p>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
                Un projet signé ORION
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                ORION s'impose comme une nouvelle référence de l'événementiel guinéen, axée sur la création 
                d'expériences mémorables et l'accompagnement des jeunes talents.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                À travers StreetFire 3x3, ORION continue de bâtir des ponts entre le sport, la culture et le 
                développement social.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00B4D8]/5 via-[#0077B6]/5 to-[#00B4D8]/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#00B4D8] via-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent">
              Informations pratiques
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center bg-white border-[#00B4D8]/20">
              <div className="w-16 h-16 rounded-full bg-[#00B4D8]/10 flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-[#00B4D8]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#00B4D8]">Date</h3>
              <p className="text-lg text-muted-foreground">À venir en décembre 2025</p>
            </Card>

            <Card className="p-8 text-center bg-white border-[#0077B6]/20">
              <div className="w-16 h-16 rounded-full bg-[#0077B6]/10 flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-[#0077B6]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#0077B6]">Lieu</h3>
              <p className="text-lg text-muted-foreground">Plage Camayenne, Conakry</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#00B4D8] to-[#0077B6]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-8 text-white">
            Prêt à vivre l'expérience StreetFire ?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Rejoignez-nous pour un week-end inoubliable de sport, de culture et de solidarité. 
            StreetFire 3x3, c'est l'étincelle qui allume la passion de la jeunesse guinéenne.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white hover:bg-white/90 text-[#00B4D8] text-lg h-14 px-10 rounded-full">
              <Link href="/contact">
                Participer à l'événement
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
