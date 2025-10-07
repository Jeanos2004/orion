import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Comment Grainy transforme le gaspillage en opportunité",
    excerpt:
      "Découvrez comment notre initiative Grainy révolutionne l'approche de la durabilité en Afrique à travers l'innovation et l'économie circulaire.",
    category: "Innovation",
    date: "15 Mars 2024",
    readTime: "5 min",
    image: "/sustainable-innovation-technology.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Streetfire 3x3 : Plus qu'un tournoi, une révolution culturelle",
    excerpt:
      "Retour sur la première édition de Streetfire 3x3 qui a rassemblé plus de 200 jeunes athlètes et créé une véritable communauté.",
    category: "Sport",
    date: "10 Mars 2024",
    readTime: "4 min",
    image: "/basketball-3x3-street-sports-energy.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Les clés du leadership selon nos mentors",
    excerpt:
      "Nos experts partagent leurs conseils pour développer son leadership et devenir un acteur du changement dans sa communauté.",
    category: "Formation",
    date: "5 Mars 2024",
    readTime: "6 min",
    image: "/leadership-training-education-mentorship.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "5 jeunes entrepreneurs qui changent l'Afrique",
    excerpt:
      "Portrait inspirant de cinq jeunes qui ont transformé leurs idées en entreprises à impact social grâce au programme ORION.",
    category: "Inspiration",
    date: "1 Mars 2024",
    readTime: "7 min",
    image: "/young-african-entrepreneurs-success.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "L'innovation au service de la durabilité",
    excerpt: "Comment la technologie et la créativité peuvent résoudre les défis environnementaux de notre génération.",
    category: "Innovation",
    date: "25 Février 2024",
    readTime: "5 min",
    image: "/sustainable-technology-innovation-africa.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Construire une communauté engagée : nos apprentissages",
    excerpt:
      "Les leçons tirées de notre première année à fédérer la jeunesse autour de projets innovants et impactants.",
    category: "Communauté",
    date: "20 Février 2024",
    readTime: "4 min",
    image: "/community-youth-engagement-africa.jpg",
    featured: false,
  },
]

const categories = ["Tous", "Innovation", "Sport", "Formation", "Inspiration", "Communauté"]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30">
        <div className="mx-auto max-w-7xl text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Blog ORION</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Histoires, insights et inspiration
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Découvrez les coulisses de nos projets, les success stories de notre communauté et les tendances qui
            façonnent l'avenir
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border/40">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Tous" ? "default" : "outline"}
                className={
                  category === "Tous"
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "border-border hover:bg-muted"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Articles à la une</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-primary/10 transition-all"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: `url('${post.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground border-0">
                    {post.category}
                  </Badge>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>

                  <Button variant="ghost" className="group-hover:text-primary p-0">
                    Lire l'article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold mb-8">Tous les articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden group cursor-pointer hover:shadow-xl hover:shadow-primary/10 transition-all"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: `url('${post.image}')` }}
                  />
                  <Badge className="absolute top-4 left-4 bg-card/90 text-foreground border-border">
                    {post.category}
                  </Badge>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <Button variant="ghost" className="group-hover:text-primary p-0 text-sm">
                    Lire plus
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Restez informé de nos actualités</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Recevez nos derniers articles, événements et opportunités directement dans votre boîte mail
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">S'abonner</Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
