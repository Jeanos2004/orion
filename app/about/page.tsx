"use client";

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { FeatureCard } from "@/components/ui/grid-feature-cards"
import { CircularTestimonials } from "@/components/ui/circular-testimonials"
import { Sparkles, Target, Lightbulb, Zap, Users, Globe, Rocket, ArrowRight, Heart, Shield, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="relative mb-8">
              <div className="inline-flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-bounce"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-ping"></div>
                </div>
                <span className="text-base font-bold text-[#0077B6] tracking-wider">À PROPOS D'ORION</span>
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
              Une constellation qui guide la jeunesse vers l'avenir
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              ORION est bien plus qu'une plateforme. C'est un mouvement qui unit, inspire et transforme l'énergie
              collective en opportunités concrètes.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
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
                  <span className="text-base font-bold text-[#0077B6] tracking-wider">NOTRE HISTOIRE</span>
                </div>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
                Pourquoi ORION ?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ORION tire son nom de la constellation la plus reconnaissable dans le ciel nocturne. Depuis des
                  millénaires, elle sert de repère aux voyageurs, aux explorateurs et aux rêveurs.
                </p>
                <p>
                  Comme cette constellation, nous voulons être une étoile-guide pour la jeunesse africaine et mondiale.
                  Un point de référence qui inspire confiance, donne une direction et illumine le chemin vers un avenir
                  meilleur.
                </p>
                <p>
                  Notre mission est de fédérer les talents, de catalyser l'innovation et de transformer les rêves en
                  réalisations concrètes à travers des projets qui unissent culture, sport et innovation.
                </p>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden border-[#0077B6]/20 p-0">
                <div className="aspect-square relative">
                  <img
                    src="/young.jpg"
                    alt="Jeunes guinéens unis pour l'avenir"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0077B6]/20 via-transparent to-transparent" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimatedContainer className="mx-auto max-w-3xl text-center">
            <div className="relative mb-8">
              <div className="inline-flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-bounce"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-ping"></div>
                </div>
                <span className="text-base font-bold text-[#0077B6] tracking-wider">NOTRE VISION</span>
              </div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
              Notre vision
            </h2>
            <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto text-pretty leading-relaxed">
              Construire un avenir où chaque jeune peut réaliser son plein potentiel
            </p>
          </AnimatedContainer>

          <AnimatedContainer
            delay={0.4}
            className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed border-[#0077B6]/20 sm:grid-cols-2 md:grid-cols-3"
          >
            {[
              {
                title: 'Communauté',
                icon: Users,
                description: 'Créer un réseau solide de jeunes leaders, entrepreneurs et créateurs qui s\'entraident et grandissent ensemble.',
              },
              {
                title: 'Impact global',
                icon: Globe,
                description: 'Étendre notre influence au-delà des frontières pour toucher et transformer des vies à travers le monde entier.',
              },
              {
                title: 'Innovation',
                icon: Rocket,
                description: 'Encourager la créativité et l\'innovation pour résoudre les défis de demain avec des solutions audacieuses.',
              },
            ].map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0077B6]/5 via-[#00B4D8]/5 to-[#0077B6]/5">
        <div className="mx-auto max-w-7xl">
          <AnimatedContainer className="mx-auto max-w-3xl text-center mb-16">
            <div className="relative mb-8">
              <div className="inline-flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-bounce"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-ping"></div>
                </div>
                <span className="text-base font-bold text-[#0077B6] tracking-wider">NOTRE ÉQUIPE</span>
              </div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
              Brève présentation de l'équipe fondatrice
            </h2>
            <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto text-pretty leading-relaxed">
              Des leaders passionnés qui portent la vision d'ORION
            </p>
          </AnimatedContainer>

          <div className="flex justify-center">
            <CircularTestimonials
              testimonials={[
                {
                  quote: "Nous croyons que la jeunesse guinéenne a un potentiel extraordinaire. Notre mission est de créer les conditions pour qu'elle puisse s'épanouir et transformer notre société.",
                  name: "Mamadouba Youla",
                  designation: "Fondateur & CEO",
                  src: "/you.jpg",
                },
                {
                  quote: "L'innovation commence par l'éducation et la formation. Nous accompagnons chaque jeune dans la découverte et le développement de ses talents uniques.",
                  name: "Mamadouba Youla",
                  designation: "Directeur de l'Innovation",
                  src: "/you.jpg",
                },
                {
                  quote: "La culture et le sport sont des leviers puissants pour rassembler les communautés. Nous créons des espaces où chacun peut s'exprimer et grandir.",
                  name: "Mamadouba Youla",
                  designation: "Directeur des Projets Culturels",
                  src: "/you.jpg",
                },
                {
                  quote: "Notre impact se mesure par les vies que nous transformons. Chaque projet d'ORION vise à créer un changement durable et positif.",
                  name: "Mamadouba Youla",
                  designation: "Directeur de l'Impact Social",
                  src: "/you.jpg",
                },
              ]}
              autoplay={true}
              colors={{
                name: "#0077B6",
                designation: "#00B4D8",
                testimony: "#374151",
                arrowBackground: "#0077B6",
                arrowForeground: "#ffffff",
                arrowHoverBackground: "#00B4D8",
              }}
              fontSizes={{
                name: "28px",
                designation: "18px",
                quote: "18px",
              }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
