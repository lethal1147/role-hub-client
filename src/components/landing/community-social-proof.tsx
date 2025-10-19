"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const communityStats = [
  { metric: "Active Users", value: "47,500+", description: "Growing by 15% monthly", icon: "👥" },
  { metric: "AI Roles Created", value: "12,800+", description: "Community-generated expertise", icon: "🤖" },
  { metric: "Daily Conversations", value: "250k+", description: "Productive AI interactions", icon: "💬" },
  { metric: "Success Stories", value: "3,200+", description: "Documented improvements", icon: "🏆" }
];

const featuredRoles = [
  {
    name: "Senior Marketing Strategist",
    creator: "Sarah Chen",
    downloads: "8.2k",
    rating: 4.9,
    category: "Marketing",
    description: "B2B SaaS marketing expert with 12+ years experience scaling startups to $100M ARR",
    tags: ["Growth Hacking", "Content Strategy", "Lead Generation"]
  },
  {
    name: "Full-Stack Architect",
    creator: "Marcus Rodriguez",
    downloads: "6.7k",
    rating: 4.8,
    category: "Engineering",
    description: "Enterprise software architect specializing in microservices and cloud-native solutions",
    tags: ["System Design", "AWS", "Kubernetes"]
  },
  {
    name: "UX Research Lead",
    creator: "Jennifer Park",
    downloads: "5.9k",
    rating: 4.9,
    category: "Design",
    description: "User experience researcher with expertise in behavioral psychology and design thinking",
    tags: ["User Research", "Design Systems", "Prototyping"]
  }
];

const testimonials = [
  {
    quote: "RoleHub transformed how our team approaches AI. Instead of generic responses, we get expert-level insights tailored to our specific roles and challenges.",
    author: "David Kim",
    title: "VP of Product, TechCorp",
    company: "TechCorp",
    avatar: "👨‍💼",
    metrics: "Reduced product planning time by 60%"
  },
  {
    quote: "The community-created roles are incredible. I found a Senior DevOps Engineer role that solved architectural problems I'd been struggling with for weeks.",
    author: "Lisa Thompson",
    title: "CTO, StartupXYZ",
    company: "StartupXYZ",
    avatar: "👩‍💻",
    metrics: "Saved $50k in consulting fees"
  },
  {
    quote: "Our content team's productivity increased 5x after implementing role-based AI workflows. The quality and consistency are remarkable.",
    author: "Ahmed Hassan",
    title: "Content Director, MediaCo",
    company: "MediaCo",
    avatar: "👨‍🎨",
    metrics: "5x content output increase"
  }
];

const integrationTools = [
  { name: "Slack", logo: "💬", usage: "12k teams" },
  { name: "Discord", logo: "🎮", usage: "8k servers" },
  { name: "Notion", logo: "📝", usage: "15k workspaces" },
  { name: "GitHub", logo: "🐙", usage: "6k repositories" },
  { name: "Figma", logo: "🎨", usage: "9k design teams" },
  { name: "Jira", logo: "🎯", usage: "11k projects" }
];

export function CommunitySocialProof() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            Community Driven
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by{" "}
            <span className="text-primary">Professionals Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join a thriving community of professionals sharing expertise,
            creating specialized AI roles, and achieving remarkable results together.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {communityStats.map((stat, idx) => (
            <Card key={idx} className="p-6 text-center">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="font-semibold mb-1">{stat.metric}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Featured Community Roles</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredRoles.map((role, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-lg mb-1">{role.name}</h4>
                    <p className="text-sm text-muted-foreground">by {role.creator}</p>
                  </div>
                  <Badge variant="outline">{role.category}</Badge>
                </div>

                <p className="text-sm mb-4 line-clamp-3">{role.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {role.tags.map((tag, tagIdx) => (
                    <Badge key={tagIdx} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>⭐ {role.rating}</span>
                    <span>📥 {role.downloads}</span>
                  </div>
                  <Button size="sm">Use Role</Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" variant="outline">
              Explore All {communityStats[1].value.replace('+', '')} Community Roles
            </Button>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Success Stories</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card
                key={idx}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  activeTestimonial === idx ? "ring-2 ring-primary shadow-lg" : "hover:shadow-md"
                }`}
                onClick={() => setActiveTestimonial(idx)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>

                <blockquote className="text-muted-foreground italic mb-4">
                  "{testimonial.quote}"
                </blockquote>

                <div className="bg-primary/5 rounded-lg p-3 text-center">
                  <div className="text-sm font-semibold text-primary">{testimonial.metrics}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8">Integrates with Your Existing Workflow</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {integrationTools.map((tool, idx) => (
              <Card key={idx} className="p-4 text-center hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">{tool.logo}</div>
                <div className="font-medium text-sm">{tool.name}</div>
                <div className="text-xs text-muted-foreground">{tool.usage}</div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Connect RoleHub with 100+ tools through our API and Zapier integration
            </p>
            <Button variant="outline">View All Integrations</Button>
          </div>
        </div>

        <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Join the AI Revolution</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Become part of a community that's redefining how professionals interact with AI.
              Share your expertise, discover new roles, and achieve extraordinary results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Join Community (Free)
              </Button>
              <Button size="lg" variant="outline">
                Create Your First Role
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 mt-6 text-sm text-muted-foreground">
              <span>🚀 No setup required</span>
              <span>🤝 Supportive community</span>
              <span>💡 Expert knowledge sharing</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}