"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const features = [
  {
    id: "chat-interface",
    title: "Role-Based Chat Interface",
    description: "Real-time conversations with context-aware AI roles",
    icon: "💬",
    demo: {
      type: "chat",
      messages: [
        { role: "user", content: "How should I approach user onboarding?" },
        { role: "assistant", content: "As a UX Designer, I recommend a progressive disclosure approach. Start with core value demonstration, limit initial form fields to 2-3 essentials, and use interactive tooltips for feature discovery." }
      ]
    }
  },
  {
    id: "role-customization",
    title: "AI Role Customization",
    description: "Create and customize AI roles for your specific needs",
    icon: "🛠️",
    demo: {
      type: "editor",
      content: {
        name: "Senior Marketing Manager",
        expertise: "B2B SaaS, Growth Hacking, Content Strategy",
        context: "10+ years experience in scaling SaaS products from $1M to $50M ARR",
        tone: "Strategic, data-driven, actionable insights"
      }
    }
  },
  {
    id: "community-marketplace",
    title: "Community Role Marketplace",
    description: "Discover and share AI roles created by professionals worldwide",
    icon: "🌍",
    demo: {
      type: "marketplace",
      roles: [
        { name: "Startup Advisor", rating: 4.9, downloads: "12k", category: "Business" },
        { name: "React Developer", rating: 4.8, downloads: "8.5k", category: "Tech" },
        { name: "Content Strategist", rating: 4.7, downloads: "6.2k", category: "Marketing" }
      ]
    }
  },
  {
    id: "multi-model",
    title: "Multi-Model Support",
    description: "Seamlessly switch between Claude, ChatGPT, and Gemini",
    icon: "🔄",
    demo: {
      type: "model-selector",
      models: [
        { name: "Claude", status: "active", latency: "1.2s" },
        { name: "ChatGPT", status: "available", latency: "1.8s" },
        { name: "Gemini", status: "available", latency: "2.1s" }
      ]
    }
  }
];

export function KeyFeatures() {
  const [activeFeature, setActiveFeature] = useState("chat-interface");
  const currentFeature = features.find(f => f.id === activeFeature) || features[0];

  const renderDemo = () => {
    const { demo } = currentFeature;

    switch (demo.type) {
      case "chat":
        return (
          <div className="space-y-4">
            {demo.messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-3 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}>
                  <p className="text-sm">{msg.content}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs">UX Designer is typing...</span>
            </div>
          </div>
        );

      case "editor":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground">Role Name</label>
                <div className="bg-muted/50 p-2 rounded text-sm">{demo.content.name}</div>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Expertise</label>
                <div className="bg-muted/50 p-2 rounded text-sm">{demo.content.expertise}</div>
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Context</label>
              <div className="bg-muted/50 p-2 rounded text-sm">{demo.content.context}</div>
            </div>
            <Button size="sm" className="w-full">Save Custom Role</Button>
          </div>
        );

      case "marketplace":
        return (
          <div className="space-y-3">
            {demo.roles.map((role, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <div className="font-medium text-sm">{role.name}</div>
                  <div className="text-xs text-muted-foreground">{role.category}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs">⭐ {role.rating}</div>
                  <div className="text-xs text-muted-foreground">{role.downloads}</div>
                </div>
              </div>
            ))}
            <Button size="sm" variant="outline" className="w-full">Browse All Roles</Button>
          </div>
        );

      case "model-selector":
        return (
          <div className="space-y-3">
            {demo.models.map((model, idx) => (
              <div key={idx} className={`flex items-center justify-between p-3 rounded-lg border ${
                model.status === 'active' ? 'border-primary bg-primary/5' : 'border-muted'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    model.status === 'active' ? 'bg-green-500' : 'bg-muted-foreground'
                  }`}></div>
                  <span className="font-medium text-sm">{model.name}</span>
                </div>
                <div className="text-xs text-muted-foreground">{model.latency}</div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need for{" "}
            <span className="text-primary">Expert AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful features designed to transform how you interact with AI.
            Professional-grade tools with zero technical complexity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            {features.map((feature) => (
              <Card
                key={feature.id}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  activeFeature === feature.id
                    ? "ring-2 ring-primary shadow-lg"
                    : "hover:shadow-md"
                }`}
                onClick={() => setActiveFeature(feature.id)}
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                  {activeFeature === feature.id && (
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          <div className="lg:sticky lg:top-8">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{currentFeature.icon}</span>
                <div>
                  <h3 className="text-xl font-bold">{currentFeature.title}</h3>
                  <p className="text-sm text-muted-foreground">Interactive Demo</p>
                </div>
              </div>

              <div className="min-h-[300px]">
                {renderDemo()}
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">Real-time</Badge>
                  <Badge variant="outline" className="text-xs">Interactive</Badge>
                  <Badge variant="outline" className="text-xs">No Setup</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your AI Experience?</h3>
          <p className="text-muted-foreground mb-6">
            Experience all features with our free tier - no credit card required.
          </p>
          <Button size="lg">Start Free Trial</Button>
        </div>
      </div>
    </section>
  );
}