"use client";

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Leaf, Smartphone, Users, Target, TrendingUp, CheckCircle2, DollarSign, Globe, Zap, Sparkles, Heart } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function GrainyPage() {
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
              <span className="text-base font-bold text-[#0077B6] tracking-wider">INNOVATION & DURABILITÉ</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
            Grainy
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto text-pretty leading-relaxed">
            Lutter contre le gaspillage alimentaire en Guinée
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
                    src="/sustainable-innovation-technology.jpg"
                    alt="Grainy - Innovation alimentaire durable"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
                Une solution technologique innovante
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Grainy est une initiative sociale et technologique née en Guinée, qui vise à réduire le gaspillage 
                alimentaire tout en soutenant les professionnels de la restauration.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Grâce à son application mobile innovante, Grainy permet aux restaurants, hôtels, boulangeries et traiteurs 
                de revendre ou donner leurs invendus à prix réduit avant leur expiration.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Les consommateurs, de leur côté, peuvent géolocaliser, réserver et payer leurs repas directement 
                depuis la plateforme, tout en participant activement à une économie circulaire plus responsable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Redesign innovant */}
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
                <span className="text-base font-bold text-[#0077B6] tracking-wider">NOTRE MISSION</span>
              </div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
              Notre mission
            </h2>
            <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto text-pretty leading-relaxed">
              Transformer les pertes alimentaires en opportunités économiques, sociales et écologiques
            </p>
          </div>

          {/* Design innovant avec des éléments flottants */}
          <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Économie circulaire */}
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/10 to-[#00B4D8]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative p-8 text-center bg-white/80 backdrop-blur-sm rounded-3xl border border-[#0077B6]/20 hover:border-[#0077B6]/40 transition-all duration-500">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Target className="h-10 w-10 text-white" />
              </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent">Économie circulaire</h3>
              <p className="text-muted-foreground leading-relaxed">
                Grainy agit comme un écosystème circulaire qui valorise les surplus et réduit les déchets
              </p>
                </div>
              </motion.div>

              {/* Impact environnemental */}
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/10 to-[#0077B6]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative p-8 text-center bg-white/80 backdrop-blur-sm rounded-3xl border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-500">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#0077B6] flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Leaf className="h-10 w-10 text-white" />
              </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">Impact environnemental</h3>
              <p className="text-muted-foreground leading-relaxed">
                Réduction significative du gaspillage alimentaire et de l'empreinte carbone
              </p>
                </div>
              </motion.div>

              {/* Solidarité locale */}
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/10 to-[#00B4D8]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative p-8 text-center bg-white/80 backdrop-blur-sm rounded-3xl border border-[#0077B6]/20 hover:border-[#0077B6]/40 transition-all duration-500">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Users className="h-10 w-10 text-white" />
              </div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent">Solidarité locale</h3>
              <p className="text-muted-foreground leading-relaxed">
                Renforcement des liens communautaires et accès à une alimentation de qualité
              </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnement Section - Design moderne */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="relative mb-8">
              <div className="inline-flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-bounce"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-ping"></div>
                </div>
                <span className="text-base font-bold text-[#00B4D8] tracking-wider">FONCTIONNEMENT</span>
              </div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance text-[#00B4D8]">
              Comment ça marche ?
            </h2>
          </div>

          {/* Timeline moderne */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0077B6] to-[#00B4D8] rounded-full"></div>
            
            <div className="space-y-16">
              {/* Étape 1 */}
              <div className="flex items-center gap-8">
                <div className="flex-1 text-right pr-8">
                  <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-[#0077B6]/10 to-[#0077B6]/5 border border-[#0077B6]/20">
                    <h3 className="text-xl font-bold mb-3 text-[#0077B6]">Publication des invendus</h3>
              <p className="text-muted-foreground leading-relaxed">
                Les professionnels publient leurs repas invendus via un tableau de bord simple et rapide
              </p>
            </div>
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Étape 2 */}
              <div className="flex items-center gap-8">
                <div className="flex-1 pr-8"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00B4D8] to-[#0077B6] flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                </div>
                <div className="flex-1 pl-8">
                  <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-[#00B4D8]/10 to-[#00B4D8]/5 border border-[#00B4D8]/20">
                    <h3 className="text-xl font-bold mb-3 text-[#00B4D8]">Géolocalisation et réservation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Les utilisateurs repèrent les offres sur une carte interactive, réservent et paient en ligne
              </p>
            </div>
                </div>
              </div>

              {/* Étape 3 */}
              <div className="flex items-center gap-8">
                <div className="flex-1 text-right pr-8">
                  <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-[#0077B6]/10 to-[#0077B6]/5 border border-[#0077B6]/20">
                    <h3 className="text-xl font-bold mb-3 text-[#0077B6]">Récupération</h3>
              <p className="text-muted-foreground leading-relaxed">
                Les repas sont récupérés sur place à prix réduit avant la fermeture
              </p>
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                </div>
                <div className="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages Section - Design créatif */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0077B6]/5 via-[#00B4D8]/5 to-[#0077B6]/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
              Pourquoi choisir Grainy ?
            </h2>
          </div>

          {/* Design en colonnes avec effets visuels */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pour les restaurants */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/5 to-[#0077B6]/10 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative p-8 bg-white/90 backdrop-blur-sm rounded-3xl border border-[#0077B6]/20 hover:border-[#0077B6]/40 transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center shadow-lg">
                    <DollarSign className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0077B6]">Pour les restaurants</h3>
              </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#0077B6]"></div>
                  <span className="text-muted-foreground">Revenus supplémentaires</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00B4D8]"></div>
                  <span className="text-muted-foreground">Image écoresponsable</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#0077B6]"></div>
                  <span className="text-muted-foreground">Fidélisation de la clientèle</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pour les consommateurs */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/5 to-[#00B4D8]/10 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative p-8 bg-white/90 backdrop-blur-sm rounded-3xl border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00B4D8] to-[#0077B6] flex items-center justify-center shadow-lg">
                    <Users className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#00B4D8]">Pour les consommateurs</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00B4D8]"></div>
                  <span className="text-muted-foreground">Repas de qualité à prix abordable</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#0077B6]"></div>
                  <span className="text-muted-foreground">Découverte de nouveaux lieux</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00B4D8]"></div>
                  <span className="text-muted-foreground">Contribution à l'économie circulaire</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pour la société */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/5 to-[#0077B6]/10 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative p-8 bg-white/90 backdrop-blur-sm rounded-3xl border border-[#0077B6]/20 hover:border-[#0077B6]/40 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center shadow-lg">
                    <Globe className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0077B6]">Pour la société</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#0077B6]"></div>
                  <span className="text-muted-foreground">Réduction du gaspillage</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00B4D8]"></div>
                  <span className="text-muted-foreground">Empreinte carbone allégée</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#0077B6]"></div>
                  <span className="text-muted-foreground">Solidarité renforcée</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
                Une application propulsée par l'IA
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Grainy intègre des fonctionnalités intelligentes pour optimiser l'expérience utilisateur et la performance des restaurants :
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#0077B6]/5 to-[#00B4D8]/5 border border-[#0077B6]/10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0077B6] mb-1">Recommandations personnalisées</h3>
                    <p className="text-muted-foreground text-sm">Selon les préférences et la localisation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#00B4D8]/5 to-[#0077B6]/5 border border-[#00B4D8]/10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00B4D8] to-[#0077B6] flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#00B4D8] mb-1">Analyse prédictive des invendus</h3>
                    <p className="text-muted-foreground text-sm">Pour ajuster la production</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#0077B6]/5 to-[#00B4D8]/5 border border-[#0077B6]/10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0077B6] mb-1">Reconnaissance visuelle des plats</h3>
                    <p className="text-muted-foreground text-sm">Pour faciliter la mise en ligne</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#00B4D8]/5 to-[#0077B6]/5 border border-[#00B4D8]/10">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00B4D8] to-[#0077B6] flex items-center justify-center flex-shrink-0">
                    <Leaf className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#00B4D8] mb-1">Calcul automatique</h3>
                    <p className="text-muted-foreground text-sm">Des repas sauvés et du CO₂ économisé</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/20 to-[#00B4D8]/20 rounded-3xl blur-2xl"></div>
                <div className="relative aspect-[4/3] bg-gradient-to-br from-[#0077B6]/10 to-[#00B4D8]/10 rounded-3xl flex items-center justify-center border border-[#0077B6]/20">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <Smartphone className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0077B6] mb-2">Application Mobile</h3>
                    <p className="text-muted-foreground">Interface intuitive et intelligente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modèle économique Section - Design moderne */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0077B6]/5 via-[#00B4D8]/5 to-[#0077B6]/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
              Notre modèle économique
            </h2>
          </div>

          {/* Design en grille avec effets visuels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/10 to-[#00B4D8]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-8 text-center bg-white/90 backdrop-blur-sm rounded-3xl border border-[#0077B6]/20 hover:border-[#0077B6]/40 transition-all duration-500">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <DollarSign className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0077B6]">Commission</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent mb-2">12%</div>
              <p className="text-muted-foreground">Sur chaque transaction</p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00B4D8]/10 to-[#0077B6]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-8 text-center bg-white/90 backdrop-blur-sm rounded-3xl border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-500">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#00B4D8] to-[#0077B6] flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#00B4D8]">Grainy Pro</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent mb-2">30 000 GNF</div>
              <p className="text-muted-foreground">Abonnement mensuel</p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0077B6]/10 to-[#00B4D8]/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative p-8 text-center bg-white/90 backdrop-blur-sm rounded-3xl border border-[#0077B6]/20 hover:border-[#0077B6]/40 transition-all duration-500">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0077B6]">Partenariats</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent mb-2">+</div>
              <p className="text-muted-foreground">Publicitaires et services premium</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perspectives Section - Design créatif */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
              Perspectives d'avenir
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-[#0077B6]">Objectifs de croissance</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#0077B6]/5 to-[#00B4D8]/5 border border-[#0077B6]/10">
                  <div className="w-3 h-3 rounded-full bg-[#0077B6]"></div>
                  <span className="text-muted-foreground">Atteindre la rentabilité dès la 2e année</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#00B4D8]/5 to-[#0077B6]/5 border border-[#00B4D8]/10">
                  <div className="w-3 h-3 rounded-full bg-[#00B4D8]"></div>
                  <span className="text-muted-foreground">324 millions GNF de budget annuel</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#0077B6]/5 to-[#00B4D8]/5 border border-[#0077B6]/10">
                  <div className="w-3 h-3 rounded-full bg-[#0077B6]"></div>
                  <span className="text-muted-foreground">99 millions GNF de revenus dès la première année</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-[#00B4D8]/5 to-[#0077B6]/5 border border-[#00B4D8]/10">
                  <div className="w-3 h-3 rounded-full bg-[#00B4D8]"></div>
                  <span className="text-muted-foreground">+15% par mois en volume de transactions</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-8 text-[#00B4D8]">Partenaires cibles</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0077B6]/10 to-[#0077B6]/5 border border-[#0077B6]/20 hover:border-[#0077B6]/40 transition-all duration-300">
                  <h4 className="font-semibold text-[#0077B6] mb-2">Institutions</h4>
                  <p className="text-sm text-muted-foreground">Ministères, collectivités locales</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#00B4D8]/10 to-[#00B4D8]/5 border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-300">
                  <h4 className="font-semibold text-[#00B4D8] mb-2">Opérationnels</h4>
                  <p className="text-sm text-muted-foreground">Restaurants, hôtels, boulangeries</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0077B6]/10 to-[#0077B6]/5 border border-[#0077B6]/20 hover:border-[#0077B6]/40 transition-all duration-300">
                  <h4 className="font-semibold text-[#0077B6] mb-2">Technologiques</h4>
                  <p className="text-sm text-muted-foreground">Développeurs, plateformes de paiement</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#00B4D8]/10 to-[#00B4D8]/5 border border-[#00B4D8]/20 hover:border-[#00B4D8]/40 transition-all duration-300">
                  <h4 className="font-semibold text-[#00B4D8] mb-2">Universités & ONG</h4>
                  <p className="text-sm text-muted-foreground">Recherche et sensibilisation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0077B6] to-[#00B4D8]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-8 text-white">
            Grainy, une solution concrète pour une Guinée durable
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            En alliant innovation technologique et impact social, Grainy fait le lien entre la transition écologique, 
            la solidarité locale et le développement durable.
          </p>
          <p className="text-lg text-white/80 mb-12">
            Chaque repas sauvé est un pas de plus vers une Guinée responsable et résiliente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white hover:bg-white/90 text-[#0077B6] text-lg h-14 px-10 rounded-full">
              <Link href="/contact">
                Rejoindre Grainy
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