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
          <div className="relative mb-8">
            <div className="inline-flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-pulse"></div>
                <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-bounce"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-ping"></div>
              </div>
              <span className="text-base font-bold text-[#0077B6] tracking-wider">BLOG ORION</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
            Histoires, insights et inspiration
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto text-pretty leading-relaxed">
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
          <div className="text-center mb-16">
            <div className="relative mb-8">
              <div className="inline-flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-bounce"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-ping"></div>
                </div>
                <span className="text-base font-bold text-[#0077B6] tracking-wider">ARTICLES À LA UNE</span>
              </div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
              Nos coups de cœur
            </h2>
            <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto text-pretty leading-relaxed">
              Des articles qui marquent et inspirent notre communauté
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-[#0077B6]/20 transition-all duration-500 hover:scale-[1.03] bg-white border-2 border-transparent hover:border-[#0077B6]/30 flex flex-col p-0"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" 
                    style={{ backgroundImage: `url('${post.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0077B6]/90 via-[#0077B6]/40 to-transparent" />
                  <div className="absolute top-6 right-6">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <Badge className="absolute top-6 left-6 bg-white/90 text-[#0077B6] border-0 font-semibold">
                    {post.category}
                  </Badge>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold mb-2 text-white line-clamp-2">{post.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-white/90">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <p className="text-foreground/70 mb-6 leading-relaxed text-lg flex-grow">{post.excerpt}</p>

                  <Button 
                    variant="ghost" 
                    className="group-hover:bg-[#0077B6] group-hover:text-white bg-[#0077B6]/10 text-[#0077B6] w-full rounded-full h-12 font-semibold transition-all"
                  >
                    Lire l'article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0077B6]/5 via-[#00B4D8]/5 to-[#0077B6]/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="relative mb-8">
              <div className="inline-flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-bounce"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-ping"></div>
                </div>
                <span className="text-base font-bold text-[#00B4D8] tracking-wider">TOUS LES ARTICLES</span>
              </div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance text-[#00B4D8]">
              Découvrez notre univers
            </h2>
            <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto text-pretty leading-relaxed">
              Une collection d'histoires, d'analyses et d'inspirations pour nourrir votre curiosité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card
                key={post.id}
                className="overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-[#00B4D8]/20 transition-all duration-500 hover:scale-[1.03] bg-white border-2 border-transparent hover:border-[#00B4D8]/30 flex flex-col p-0"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700" 
                    style={{ backgroundImage: `url('${post.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00B4D8]/90 via-[#00B4D8]/40 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-[#00B4D8] border-0 font-semibold">
                    {post.category}
                  </Badge>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-4 text-xs text-white/90">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#00B4D8] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3 flex-grow">{post.excerpt}</p>

                  <Button 
                    variant="ghost" 
                    className="group-hover:bg-[#00B4D8] group-hover:text-white bg-[#00B4D8]/10 text-[#00B4D8] w-full rounded-full h-10 font-semibold transition-all"
                  >
                    Lire plus
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
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
                  <span className="text-base font-bold text-white tracking-wider">RESTEZ CONNECTÉ</span>
                </div>
              </div>

              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Restez informé de nos actualités
              </h2>
              <p className="text-xl sm:text-2xl text-white/90 mb-12 text-pretty leading-relaxed">
                Recevez nos derniers articles, événements et opportunités directement dans votre boîte mail
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-lg">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="flex-1 px-6 py-4 rounded-full bg-white/95 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 text-[#0077B6] placeholder-[#0077B6]/60"
                />
                <Button className="bg-white hover:bg-white/90 text-[#0077B6] text-lg h-14 px-8 rounded-full shadow-2xl hover:shadow-white/30 transition-all hover:scale-105">
                  S'abonner
                </Button>
              </div>
            </div>

            {/* Partie image circulaire à droite */}
            <div className="flex justify-center lg:justify-end lg:pt-16">
              <div className="w-96 h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: "url('/diverse-young-people-collaborating-on-innovative-p.jpg')",
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
