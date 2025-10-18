"use client";

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { FeatureCard } from "@/components/ui/grid-feature-cards"
import { Leaf, Flame, GraduationCap, ArrowRight, CheckCircle2, Users, Calendar, TrendingUp, Trophy } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ProjectsPage() {
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
              <span className="text-base font-bold text-[#0077B6] tracking-wider">NOS INITIATIVES</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
            Projets qui transforment l'avenir
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto text-pretty leading-relaxed">
            Découvrez nos initiatives qui unissent innovation, culture et sport pour créer des opportunités concrètes
            pour la jeunesse
          </p>
        </div>
      </section>

      {/* Grainy Project */}
      <section id="grainy" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
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

              <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">Grainy</h2>
              <p className="text-lg font-medium text-primary mb-6">Moins de gaspillage, plus d'avenir</p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Grainy est notre initiative dédiée à l'innovation durable et à la réduction du gaspillage. Nous
                développons des solutions créatives qui transforment les déchets en ressources, tout en sensibilisant la
                jeunesse aux enjeux environnementaux.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Projets d'économie circulaire et d'upcycling</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Ateliers de sensibilisation environnementale</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Incubation de startups green-tech</p>
                </div>
              </div>

              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/projects/grainy">
                  Détails
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="order-1 lg:order-2">
              <Card className="overflow-hidden border-[#0077B6]/20 p-0">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/sustainable-innovation-technology.jpg"
                    alt="Innovation durable et technologie verte"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Football Kagbelen Project */}
      <section id="football-kagbelen" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 scroll-mt-20">
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

              <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">Tournoi Inter-Secteur de Football</h2>
              <p className="text-lg font-medium text-primary mb-6">Kagbelen Plateau — Édition 2025</p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Un événement citoyen et communautaire qui rassemble la jeunesse autour des valeurs de solidarité, 
                respect et unité. Huit équipes des différents secteurs s'affronteront du 17 au 29 novembre 2025 
                dans un esprit de fair-play et de fraternité.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Promouvoir la cohésion sociale et l'unité communautaire</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Révéler les jeunes talents sportifs du quartier</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Sensibiliser aux valeurs citoyennes et au respect</p>
                </div>
              </div>

              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/projects/football-kagbelen">
                  Détails
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Streetfire 3x3 Project */}
      <section id="streetfire" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="overflow-hidden border-[#00B4D8]/20 p-0">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/basketball-3x3-street-sports-energy.jpg"
                    alt="Tournoi de basketball 3x3 Streetfire"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            <div>
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

              <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">Streetfire 3x3</h2>
              <p className="text-lg font-medium text-secondary mb-6">Plus qu'un tournoi, un mouvement</p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Streetfire 3x3 est notre tournoi de basketball urbain qui rassemble les jeunes talents autour de valeurs
                de fair-play, de dépassement de soi et d'esprit d'équipe. C'est une célébration de l'énergie collective
                et de la culture street.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Tournois régionaux et nationaux de basketball 3x3</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Événements culturels et concerts live</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Programme de détection de talents sportifs</p>
                </div>
              </div>

              <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/projects/streetfire">
                  Détails
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Formation Project */}
      <section id="formation" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative mb-8">
                <div className="inline-flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-pulse"></div>
                    <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-bounce"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-ping"></div>
                  </div>
                  <span className="text-base font-bold text-[#0077B6] tracking-wider">FORMATION & LEADERSHIP</span>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">Formation & Masterclass</h2>
              <p className="text-lg font-medium text-accent mb-6">Former les champions leaders de demain</p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Notre programme de formation offre des masterclass et des ateliers animés par des experts pour
                développer les compétences en leadership, entrepreneuriat et innovation. Nous préparons la prochaine
                génération de leaders africains.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Masterclass avec des leaders et entrepreneurs</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Programmes de mentorat personnalisés</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">Ateliers pratiques en innovation et business</p>
                </div>
              </div>

              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  S'inscrire aux formations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="order-1 lg:order-2">
              <Card className="overflow-hidden border-[#0077B6]/20 p-0">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/leadership-training-education-mentorship.jpg"
                    alt="Formation et développement du leadership"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
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
                <span className="text-base font-bold text-[#0077B6] tracking-wider">NOTRE IMPACT</span>
              </div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
              Notre impact
            </h2>
            <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto text-pretty leading-relaxed">
              Des résultats concrets qui transforment des vies
            </p>
          </div>

          <AnimatedContainer
            delay={0.4}
            className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed border-[#0077B6]/20 sm:grid-cols-2 md:grid-cols-3"
          >
            {[
              {
                title: 'Jeunes accompagnés',
                icon: Users,
                description: 'Plus de 500 jeunes actifs dans notre écosystème d\'innovation et de développement',
              },
              {
                title: 'Projets lancés',
                icon: TrendingUp,
                description: 'Plus de 15 initiatives concrètes qui transforment les communautés guinéennes',
              },
              {
                title: 'Villes touchées',
                icon: Calendar,
                description: 'Plus de 10 villes où nous avons créé un impact durable et positif',
              },
            ].map((feature, i) => (
              <FeatureCard key={i} feature={feature} />
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">Vous avez un projet en tête ?</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Rejoignez ORION et transformons ensemble vos idées en réalité
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">
              Proposer un projet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
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
