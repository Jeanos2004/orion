"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageSquare, Send, Sparkles } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30">
        <div className="mx-auto max-w-7xl text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Contact</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">Parlons de votre projet</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Vous avez une idée, un projet ou simplement envie d'en savoir plus ? Nous sommes là pour vous écouter.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 mb-6">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Restons connectés</span>
                </div>
                <h2 className="text-3xl font-bold mb-4">Rejoignez la constellation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Que vous soyez un jeune entrepreneur, un créateur, un athlète ou simplement quelqu'un qui veut faire
                  la différence, ORION est votre plateforme.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-sm text-muted-foreground">contact@orion-platform.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border hover:border-secondary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-secondary/10">
                      <MessageSquare className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Réseaux sociaux</h3>
                      <p className="text-sm text-muted-foreground">#UnirInspirerAgir</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border border-border">
                <h3 className="font-semibold mb-2">Vous êtes une organisation ?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nous sommes ouverts aux partenariats avec des entreprises, ONG et institutions qui partagent notre
                  vision d'un avenir meilleur pour la jeunesse.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-card border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nom complet</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="De quoi souhaitez-vous parler ?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Parlez-nous de votre projet ou de vos questions..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Envoyer le message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-muted-foreground">Trouvez rapidement les réponses à vos questions</p>
          </div>

          <div className="space-y-4">
            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold mb-2">Comment puis-je rejoindre ORION ?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Remplissez le formulaire de contact ci-dessus en nous parlant de vous et de vos intérêts. Notre équipe
                vous recontactera rapidement pour discuter des opportunités disponibles.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold mb-2">Les programmes sont-ils gratuits ?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                La plupart de nos programmes et événements sont gratuits ou à prix accessible. Notre mission est de
                rendre les opportunités accessibles à tous les jeunes, peu importe leur situation.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold mb-2">Puis-je proposer mon propre projet ?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Absolument ! ORION est une plateforme ouverte aux initiatives portées par les jeunes. Contactez-nous
                avec votre idée et nous vous accompagnerons dans sa réalisation.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
