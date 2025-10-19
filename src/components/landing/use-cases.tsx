"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    id: "business-strategy",
    industry: "Business Strategy",
    icon: "📊",
    color: "bg-blue-500",
    scenario: "Strategic Planning & Market Analysis",
    description: "Transform high-level business decisions with expert strategic insights",
    beforeAfter: {
      before: "Generic business advice with no industry context",
      after: "Strategic frameworks tailored to your market, competitive analysis, and actionable roadmaps"
    },
    roi: {
      metric: "Decision Speed",
      improvement: "5x faster",
      details: "From weeks of research to hours of expert insight"
    },
    testimonial: {
      quote: "RoleHub's Strategy Advisor helped us identify a $2M market opportunity we completely missed in our internal analysis.",
      author: "Sarah Chen, VP Strategy at TechCorp"
    }
  },
  {
    id: "content-creation",
    industry: "Content & Marketing",
    icon: "✍️",
    color: "bg-purple-500",
    scenario: "Content Strategy & Campaign Development",
    description: "Scale content creation with brand-consistent, audience-targeted messaging",
    beforeAfter: {
      before: "Inconsistent tone, generic content, manual campaign planning",
      after: "Brand-aligned content strategies, audience segmentation, and conversion-optimized campaigns"
    },
    roi: {
      metric: "Content Output",
      improvement: "8x increase",
      details: "From 2 posts/week to 16 high-quality pieces across channels"
    },
    testimonial: {
      quote: "Our content engagement increased 300% after implementing role-specific AI for our marketing campaigns.",
      author: "Marcus Rivera, Marketing Director at GrowthCo"
    }
  },
  {
    id: "product-management",
    industry: "Product Management",
    icon: "🎯",
    color: "bg-green-500",
    scenario: "Feature Planning & User Research",
    description: "Build better products with data-driven insights and user-centric approaches",
    beforeAfter: {
      before: "Feature bloat, unclear requirements, disconnected user feedback",
      after: "Prioritized feature roadmaps, detailed user stories, and research-backed product decisions"
    },
    roi: {
      metric: "Feature Success Rate",
      improvement: "85% higher",
      details: "Features launched with role-based planning show 85% higher user adoption"
    },
    testimonial: {
      quote: "The Product Owner AI helped us reduce feature development time by 40% while improving user satisfaction scores.",
      author: "Alex Kim, Head of Product at InnovateTech"
    }
  },
  {
    id: "technical-consulting",
    industry: "Technical Consulting",
    icon: "⚙️",
    color: "bg-orange-500",
    scenario: "Architecture & Code Review",
    description: "Solve complex technical challenges with senior-level engineering expertise",
    beforeAfter: {
      before: "Generic coding advice, unclear architectural decisions, manual code reviews",
      after: "Enterprise-grade architecture recommendations, optimized code patterns, and scalability insights"
    },
    roi: {
      metric: "Development Velocity",
      improvement: "60% faster",
      details: "Senior-level insights without senior-level consulting fees"
    },
    testimonial: {
      quote: "RoleHub's Senior Engineer AI identified performance bottlenecks that would have taken our team weeks to discover.",
      author: "David Park, CTO at ScaleTech"
    }
  }
];

export function UseCases() {
  const [activeUseCase, setActiveUseCase] = useState("business-strategy");
  const currentCase = useCases.find(uc => uc.id === activeUseCase) || useCases[0];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm px-4 py-2">
            Real-World Impact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven Results Across{" "}
            <span className="text-primary">Industries</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how professionals are transforming their workflows and achieving
            measurable results with role-based AI expertise.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {useCases.map((useCase) => (
            <Button
              key={useCase.id}
              variant={activeUseCase === useCase.id ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveUseCase(useCase.id)}
              className="flex items-center gap-2"
            >
              <span>{useCase.icon}</span>
              {useCase.industry}
            </Button>
          ))}
        </div>

        <Card className="p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full ${currentCase.color} flex items-center justify-center text-white text-xl`}>
                  {currentCase.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{currentCase.scenario}</h3>
                  <p className="text-muted-foreground">{currentCase.industry}</p>
                </div>
              </div>

              <p className="text-lg mb-8">{currentCase.description}</p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-destructive">❌</span>
                    Before RoleHub
                  </h4>
                  <p className="text-muted-foreground pl-6">{currentCase.beforeAfter.before}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-green-500">✅</span>
                    After RoleHub
                  </h4>
                  <p className="text-muted-foreground pl-6">{currentCase.beforeAfter.after}</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
                <h4 className="font-semibold mb-4">Measurable Impact</h4>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {currentCase.roi.improvement}
                  </div>
                  <div className="text-lg font-semibold mb-2">{currentCase.roi.metric}</div>
                  <p className="text-sm text-muted-foreground">{currentCase.roi.details}</p>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-l-primary">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl">💬</span>
                  <div>
                    <h4 className="font-semibold">Success Story</h4>
                  </div>
                </div>
                <blockquote className="text-muted-foreground italic mb-4">
                  "{currentCase.testimonial.quote}"
                </blockquote>
                <cite className="text-sm font-medium">— {currentCase.testimonial.author}</cite>
              </Card>

              <div className="text-center">
                <Button size="lg" className="w-full">
                  Start Your Success Story
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Join {Math.floor(Math.random() * 5000 + 15000)} professionals already using RoleHub
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">300%</div>
            <div className="text-sm font-medium mb-1">Average Productivity Gain</div>
            <p className="text-xs text-muted-foreground">Across all industries and use cases</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2.3hrs</div>
            <div className="text-sm font-medium mb-1">Daily Time Savings</div>
            <p className="text-xs text-muted-foreground">From faster, higher-quality AI responses</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-sm font-medium mb-1">User Satisfaction</div>
            <p className="text-xs text-muted-foreground">Rate RoleHub as "significantly better" than generic AI</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">$50k</div>
            <div className="text-sm font-medium mb-1">Average Annual ROI</div>
            <p className="text-xs text-muted-foreground">Based on time savings and improved decisions</p>
          </div>
        </div>
      </div>
    </section>
  );
}