"use client";

import { TestimonialCard } from "@/components/ui/testimonial-cards";
import { useState } from "react";
import { Users, Calendar, TrendingUp, Heart, Sparkles, Zap, Target } from "lucide-react";

const testimonials = [
  {
    id: 1,
    testimonial: "ORION m'a ouvert des portes que je n'imaginais pas. Grâce à leurs formations, j'ai pu lancer mon propre projet d'innovation sociale.",
    author: "Aïcha B. - Entrepreneure @ Conakry"
  },
  {
    id: 2,
    testimonial: "Le tournoi Streetfire 3x3 a été une expérience incroyable. On a créé des liens forts et découvert nos talents cachés.", 
    author: "Mohamed K. - Étudiant @ Kindia"
  },
  {
    id: 3,
    testimonial: "ORION, c'est plus qu'une organisation, c'est une famille. Ensemble, on transforme vraiment notre communauté.",
    author: "Fatoumata T. - Leader communautaire @ Labé"
  }
];

const stats = [
  {
    icon: Users,
    number: "50+",
    label: "Jeunes connectés",
    description: "Actifs dans notre écosystème",
    color: "text-[#0077B6]",
    bgColor: "bg-[#0077B6]/10"
  },
  {
    icon: Calendar,
    number: "5+",
    label: "Événements organisés",
    description: "Formations, tournois, conférences",
    color: "text-[#00B4D8]",
    bgColor: "bg-[#00B4D8]/10"
  },
  {
    icon: TrendingUp,
    number: "1+",
    label: "Projets lancés",
    description: "Initiatives innovantes en cours",
    color: "text-[#0077B6]",
    bgColor: "bg-[#0077B6]/10"
  },
  {
    icon: Heart,
    number: "98%",
    label: "Satisfaction",
    description: "Taux de satisfaction des participants",
    color: "text-[#00B4D8]",
    bgColor: "bg-[#00B4D8]/10"
  }
];

function ShuffleCards() {
  const [positions, setPositions] = useState(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    const lastItem = newPositions.pop();
    if (lastItem) {
      newPositions.unshift(lastItem);
    }
    setPositions(newPositions);
  };

  return (
    <div className="relative h-[450px] w-[350px] mx-auto">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.id}
          {...testimonial}
          handleShuffle={handleShuffle}
          position={positions[index]}
        />
      ))}
    </div>
  );
}

export function TestimonialsStats() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white via-[#0077B6]/5 to-white">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle, #0077B6 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
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
            Notre impact en chiffres
          </h2>
          <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto text-pretty leading-relaxed">
            Des résultats concrets qui témoignent de notre engagement envers la jeunesse guinéenne
          </p>
        </div>

        {/* Centered Stats Section */}
        <div className="flex justify-center">
          <div className="max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative p-8 rounded-3xl bg-white border-2 border-transparent hover:border-[#0077B6]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[#0077B6]/10 hover:scale-[1.02]">
                    {/* Background effect removed */}
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="inline-flex mb-6 relative">
                        <div className={`absolute inset-0 ${stat.bgColor?.replace('/10', '/20') || stat.bgColor} rounded-full animate-ping opacity-20`} />
                        <div className={`relative w-16 h-16 rounded-full ${stat.bgColor} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                          <stat.icon className={`h-8 w-8 ${stat.color}`} />
                        </div>
                      </div>

                      {/* Number */}
                      <div className="mb-2">
                        <span className={`text-4xl font-bold ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                          {stat.number}
                        </span>
                      </div>

                      {/* Label */}
                      <h3 className="text-xl font-bold text-[#0077B6] mb-2">
                        {stat.label}
                      </h3>

                      {/* Description */}
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section - Commented out for now */}
        {/* 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-1 lg:order-2">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-[#0077B6]">
                Ce qu'ils disent
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Les témoignages de notre communauté qui témoignent de l'impact réel d'ORION
              </p>
            </div>
            
            <div className="relative">
              <ShuffleCards />
              
              <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077B6]/10 border border-[#0077B6]/20">
                  <Sparkles className="h-4 w-4 text-[#0077B6]" />
                  <span className="text-sm font-medium text-[#0077B6]">
                    Glissez pour voir plus
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
