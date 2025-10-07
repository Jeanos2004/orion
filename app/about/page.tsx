import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Target, Lightbulb, Zap, Users, Globe, Rocket, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">À propos d'ORION</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
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
              <div className="inline-flex items-center gap-2 mb-6">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-primary">Notre histoire</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Pourquoi ORION ?</h2>
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
              <Card className="overflow-hidden border-primary/20">
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="h-32 w-32 text-primary/40" />
                  </div>
                  {/* Constellation dots */}
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full star-twinkle" />
                  <div
                    className="absolute top-1/3 right-1/3 w-2 h-2 bg-secondary rounded-full star-twinkle"
                    style={{ animationDelay: "1s" }}
                  />
                  <div
                    className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-accent rounded-full star-twinkle"
                    style={{ animationDelay: "2s" }}
                  />
                  <div
                    className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary/60 rounded-full star-twinkle"
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Nos valeurs fondamentales</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Trois piliers qui guident chacune de nos actions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border">
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/10">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Unité</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Rassembler les talents et les énergies pour créer une communauté forte et solidaire.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nous croyons que la force collective dépasse toujours les efforts individuels. Ensemble, nous sommes
                plus forts.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-secondary/10">
                <Lightbulb className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Inspiration</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Donner confiance et ouvrir des perspectives pour révéler le potentiel de chacun.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Chaque jeune possède un talent unique. Notre rôle est de l'aider à le découvrir et à le développer.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border">
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-accent/10">
                <Zap className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Action</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Passer des idées aux réalisations concrètes qui transforment notre avenir.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Les rêves sans action restent des rêves. Nous transformons les idées en projets tangibles et impactants.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Notre vision</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Construire un avenir où chaque jeune peut réaliser son plein potentiel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Communauté</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Créer un réseau solide de jeunes leaders, entrepreneurs et créateurs qui s'entraident et grandissent
                ensemble.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-secondary/5 to-transparent border-secondary/20">
              <Globe className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-3">Impact global</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Étendre notre influence au-delà des frontières pour toucher et transformer des vies à travers le monde
                entier.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/5 to-transparent border-accent/20">
              <Rocket className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Encourager la créativité et l'innovation pour résoudre les défis de demain avec des solutions
                audacieuses.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Rejoignez le mouvement ORION</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Ensemble, transformons l'énergie collective en opportunités concrètes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">
                Nous contacter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border hover:bg-muted bg-transparent">
              <Link href="/projects">Découvrir nos projets</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
