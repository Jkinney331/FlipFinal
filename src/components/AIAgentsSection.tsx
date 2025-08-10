"use client";

import React, { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  Cog,
  MessageSquare,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Orb from "@/components/ui/Orb";

const agentData = [
  {
    id: 1,
    name: "Nancy",
    role: "Natural Language Processing Specialist",
    description: "Transforms communication into actionable insights",
    icon: MessageSquare,
    specialty: "NLP",
    hue: 280, // Purple/Pink for NLP
  },
  {
    id: 2,
    name: "Ellis",
    role: "Predictive Analytics Expert",
    description: "Forecasts trends before they happen",
    icon: TrendingUp,
    specialty: "Analytics",
    hue: 200, // Blue for Analytics
  },
  {
    id: 3,
    name: "Justin",
    role: "Intelligent Automation Architect",
    description: "Streamlines workflows with surgical precision",
    icon: Cog,
    specialty: "Automation",
    hue: 40, // Orange for Automation
  },
  {
    id: 4,
    name: "Dan",
    role: "Social Media Strategist",
    description: "Amplifies your brand voice across all channels",
    icon: MessageSquare,
    specialty: "Social",
    hue: 150, // Green for Social
  },
  {
    id: 5,
    name: "Chloe",
    role: "Project Operations Manager",
    description: "Keeps everything running like clockwork",
    icon: CheckCircle,
    specialty: "Operations",
    hue: 260, // Indigo for Operations
  },
];

function AIAgentsSection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const [viewportRef, embla] = useEmblaCarousel({ align: "center", loop: true });

  const palette = useMemo(
    () => ({
      NLP: "from-fuchsia-500 to-pink-500",
      Analytics: "from-blue-500 to-cyan-500",
      Automation: "from-amber-400 to-orange-500",
      Social: "from-emerald-500 to-green-400",
      Operations: "from-indigo-500 to-purple-500",
      Default: "from-slate-300 to-slate-500",
    }),
    []
  );

  return (
    <section className="py-32 bg-white">
      <div className="mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Meet Your Specialized AI Agents
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Every agent comes with an intuitive dashboard to fine-tune, train, and optimize performance.
          </p>
        </div>

        {/* Full-width carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={viewportRef}>
            <div className="flex">
              {agentData.map((agent) => {
                const Icon = agent.icon;
                const gradient = (palette as any)[agent.specialty] || palette.Default;

                return (
                  <div key={agent.id} className="flex-[0_0_100%] px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
                      {/* Large Orb */}
                      <div className="flex justify-center lg:justify-end order-2 lg:order-1">
                        <div className="w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
                          <Orb
                            hue={agent.hue}
                            hoverIntensity={0.41}
                            rotateOnHover={true}
                            forceHoverState={false}
                          />
                        </div>
                      </div>

                      {/* Clean profile card */}
                      <div className="order-1 lg:order-2 flex flex-col justify-center">
                        <div className="space-y-8">
                          {/* Icon and title */}
                          <div className="flex items-center gap-6">
                            <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${gradient} ring-1 ring-black/5 grid place-items-center text-white shadow-lg`}>
                              <Icon className="h-8 w-8" />
                            </div>
                            <div>
                              <div className="text-sm tracking-wider uppercase font-semibold text-muted-foreground mb-2">
                                {agent.specialty}
                              </div>
                              <h3 className="text-5xl md:text-6xl font-bold text-foreground">
                                {agent.name}
                              </h3>
                            </div>
                          </div>

                          {/* Role */}
                          <h4 className="text-2xl md:text-3xl font-medium text-muted-foreground leading-tight">
                            {agent.role}
                          </h4>

                          {/* Description */}
                          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                            {agent.description}
                          </p>

                          {/* CTA */}
                          <div className="pt-4">
                            <button className="px-8 py-4 rounded-2xl bg-foreground text-background font-semibold text-lg tracking-wide transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95">
                              Explore {agent.name}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* Custom agent slide */}
              <div className="flex-[0_0_100%] px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
                  {/* Large Orb */}
                  <div className="flex justify-center lg:justify-end order-2 lg:order-1">
                    <div className="w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
                      <Orb
                        hue={120}
                        hoverIntensity={0.41}
                        rotateOnHover={true}
                        forceHoverState={false}
                      />
                    </div>
                  </div>

                  {/* Clean profile card */}
                  <div className="order-1 lg:order-2 flex flex-col justify-center">
                    <div className="space-y-8">
                      {/* Icon and title */}
                      <div className="flex items-center gap-6">
                        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-slate-400 to-slate-600 ring-1 ring-black/5 grid place-items-center text-white shadow-lg">
                          <Sparkles className="h-8 w-8" />
                        </div>
                        <div>
                          <div className="text-sm tracking-wider uppercase font-semibold text-muted-foreground mb-2">
                            Custom
                          </div>
                          <h3 className="text-5xl md:text-6xl font-bold text-foreground">
                            Your Agent
                          </h3>
                        </div>
                      </div>

                      {/* Role */}
                      <h4 className="text-2xl md:text-3xl font-medium text-muted-foreground leading-tight">
                        Built Just for You
                      </h4>

                      {/* Description */}
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                        We will create the exact AI agent your business needs, tailored to your specific workflows and requirements.
                      </p>

                      {/* CTA */}
                      <div className="pt-4">
                        <button className="px-8 py-4 rounded-2xl bg-foreground text-background font-semibold text-lg tracking-wide transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95">
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-4 mt-16">
            <button
              aria-label="Previous agent"
              className="size-14 rounded-full bg-[#f5f5f7] text-[#1d1d1f] grid place-items-center transition-all duration-200 hover:scale-110 hover:bg-[#e8e8ed] shadow-lg"
              onClick={() => embla?.scrollPrev()}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              aria-label="Next agent"
              className="size-14 rounded-full bg-[#f5f5f7] text-[#1d1d1f] grid place-items-center transition-all duration-200 hover:scale-110 hover:bg-[#e8e8ed] shadow-lg"
              onClick={() => embla?.scrollNext()}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIAgentsSection; 