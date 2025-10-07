import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Leaf, Flame, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30">
        <div className="mx-auto max-w-7xl text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Nos initiatives</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Projets qui transforment l'avenir
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Leaf className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Innovation & Durabilité</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Grainy</h2>
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
                <Link href="/contact">
                  Participer à Grainy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="order-1 lg:order-2">
              <Card className="overflow-hidden border-primary/20">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 relative">
                  <div className="absolute inset-0 bg-[url('/sustainable-innovation-technology.jpg')] bg-cover bg-center opacity-60" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Streetfire 3x3 Project */}
      <section id="streetfire" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 scroll-mt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="overflow-hidden border-secondary/20">
                <div className="aspect-[4/3] bg-gradient-to-br from-secondary/20 to-primary/20 relative">
                  <div className="absolute inset-0 bg-[url('/basketball-3x3-street-sports-energy.jpg')] bg-cover bg-center opacity-60" />
                </div>
              </Card>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                <Flame className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Sport & Énergie collective</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Streetfire 3x3</h2>
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
                <Link href="/contact">
                  Rejoindre Streetfire
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <GraduationCap className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">Formation & Leadership</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Formation & Masterclass</h2>
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
              <Card className="overflow-hidden border-accent/20">
                <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-secondary/20 relative">
                  <div className="absolute inset-0 bg-[url('/leadership-training-education-mentorship.jpg')] bg-cover bg-center opacity-60" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Notre impact</h2>
            <p className="text-lg text-muted-foreground">Des résultats concrets qui transforment des vies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-card border-border">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Jeunes accompagnés</p>
            </Card>

            <Card className="p-8 text-center bg-card border-border">
              <div className="text-4xl sm:text-5xl font-bold text-secondary mb-2">15+</div>
              <p className="text-muted-foreground">Projets lancés</p>
            </Card>

            <Card className="p-8 text-center bg-card border-border">
              <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">10+</div>
              <p className="text-muted-foreground">Villes touchées</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Vous avez un projet en tête ?</h2>
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
