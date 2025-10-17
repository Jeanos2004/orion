"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, MessageSquare, Instagram, Twitter, Linkedin } from "lucide-react"
import { useEffect } from "react"

// Déclaration des types pour HubSpot
declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (options: {
          portalId: string;
          formId: string;
          region: string;
          target?: string;
        }) => void;
      };
    };
  }
}

export default function ContactPage() {
  useEffect(() => {
    // Charger le script HubSpot
    const script = document.createElement('script');
    script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    document.head.appendChild(script);

    script.onload = () => {
      // Créer le formulaire HubSpot une fois le script chargé
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "146719237",
          formId: "e6c105a6-6c52-4fc8-a199-d2f670036e53",
          region: "eu1",
          target: "#hubspot-form"
        });
      }
    };

    return () => {
      // Nettoyer le script lors du démontage du composant
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

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
              <span className="text-base font-bold text-[#0077B6] tracking-wider">CONTACT</span>
            </div>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
            Parlons de votre projet
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto text-pretty leading-relaxed">
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
                <div className="relative mb-8">
                  <div className="inline-flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-pulse"></div>
                      <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-bounce"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-ping"></div>
                    </div>
                    <span className="text-base font-bold text-[#0077B6] tracking-wider">RESTONS CONNECTÉS</span>
                  </div>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#0077B6] bg-clip-text text-transparent">
                  Rejoignez la constellation
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
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
                      <h3 className="font-semibold mb-1">Adresse email</h3>
                      <p className="text-sm text-muted-foreground">contact@orionguinee.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border hover:border-secondary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-secondary/10">
                      <MessageSquare className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Téléphone</h3>
                      <p className="text-sm text-muted-foreground">629078819</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border border-border">
                <h3 className="font-semibold mb-4">Réseaux sociaux</h3>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground font-medium">Suivez-nous :</span>
                  <div className="flex gap-3">
                    {[
                      { icon: Instagram, href: "https://www.instagram.com/orion_guinee?igsh=dmJoNjNicGViNXpj&utm_source=qr", label: "Instagram" },
                      { icon: Twitter, href: "https://x.com/orionguinee?s=21", label: "Twitter" },
                      { icon: Linkedin, href: "#", label: "LinkedIn" }
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        className="w-10 h-10 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                        aria-label={label}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border border-border">
                <h3 className="font-semibold mb-2">Vous êtes une organisation ?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nous sommes ouverts aux partenariats avec des entreprises, ONG et institutions qui partagent notre
                  vision d'un avenir meilleur pour la jeunesse.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="p-8 bg-white border-2 border-[#0077B6]/20 hover:border-[#0077B6]/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#0077B6]/10">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-[#0077B6]">Envoyez-nous un message</h3>
                <p className="text-foreground/70">Nous vous répondrons dans les plus brefs délais</p>
              </div>
              {/* Conteneur pour le formulaire HubSpot */}
              <div id="hubspot-form" className="hubspot-form-container"></div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0077B6]/5 via-[#00B4D8]/5 to-[#0077B6]/5">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="relative mb-8">
              <div className="inline-flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-pulse"></div>
                  <div className="w-1 h-1 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00B4D8] animate-bounce"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00B4D8] to-[#0077B6] animate-ping"></div>
                </div>
                <span className="text-base font-bold text-[#00B4D8] tracking-wider">QUESTIONS FRÉQUENTES</span>
              </div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance text-[#00B4D8]">
              Trouvez vos réponses
            </h2>
            <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto text-pretty leading-relaxed">
              Découvrez rapidement les réponses aux questions les plus courantes sur ORION
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#00B4D8]/20 shadow-xl">
            <Accordion
              type="single"
              collapsible
              className="w-full"
            >
              {[
                {
                  id: 'item-1',
                  question: 'Comment puis-je rejoindre ORION ?',
                  answer: 'Remplissez le formulaire de contact ci-dessus en nous parlant de vous et de vos intérêts. Notre équipe vous recontactera rapidement pour discuter des opportunités disponibles et vous accompagner dans votre intégration à la communauté ORION.',
                },
                {
                  id: 'item-2',
                  question: 'Les programmes sont-ils gratuits ?',
                  answer: 'La plupart de nos programmes et événements sont gratuits ou à prix accessible. Notre mission est de rendre les opportunités accessibles à tous les jeunes, peu importe leur situation financière. Certains événements premium peuvent avoir un coût symbolique pour couvrir les frais d\'organisation.',
                },
                {
                  id: 'item-3',
                  question: 'Puis-je proposer mon propre projet ?',
                  answer: 'Absolument ! ORION est une plateforme ouverte aux initiatives portées par les jeunes. Contactez-nous avec votre idée et nous vous accompagnerons dans sa réalisation, en vous fournissant les ressources, le mentorat et le réseau nécessaire pour réussir.',
                },
                {
                  id: 'item-4',
                  question: 'Quels sont les projets actuellement disponibles ?',
                  answer: 'ORION propose plusieurs initiatives : Grainy (innovation et durabilité), Streetfire 3x3 (sport et énergie collective), des programmes de formation au leadership, et des événements culturels. Consultez notre page projets pour découvrir toutes nos initiatives.',
                },
                {
                  id: 'item-5',
                  question: 'Comment puis-je devenir mentor ou partenaire ?',
                  answer: 'Nous recherchons constamment des mentors passionnés et des partenaires qui partagent notre vision. Si vous avez de l\'expérience à partager ou des ressources à offrir, contactez-nous via le formulaire en précisant votre domaine d\'expertise et votre motivation.',
                },
              ].map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-[#00B4D8]/10 last:border-b-0"
                >
                  <AccordionTrigger className="cursor-pointer text-left text-lg font-semibold text-[#0077B6] hover:text-[#00B4D8] hover:no-underline px-8 py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6">
                    <p className="text-base text-foreground/80 leading-relaxed">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-8">
            <p className="text-foreground/70">
              Vous ne trouvez pas votre réponse ?{' '}
              <a
                href="#contact-form"
                className="text-[#0077B6] font-semibold hover:text-[#00B4D8] hover:underline transition-colors"
              >
                Contactez notre équipe
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
