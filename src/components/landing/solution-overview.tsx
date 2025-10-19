"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { AnimatedList } from "@/components/ui/animated-list";
import { SparklesText } from "@/components/ui/sparkles-text";

const roles = [
  {
    id: "admin",
    title: "Admin",
    description: "System administration and technical infrastructure expert",
    expertise: "Server management, security protocols, system optimization",
    avatar: "👨‍💼",
    color: "bg-blue-500",
    example: "I'll help you configure secure user authentication with proper role-based access controls and implement automated backup strategies for your infrastructure."
  },
  {
    id: "product-owner",
    title: "Product Owner",
    description: "Strategic product development and user experience specialist",
    expertise: "Requirements gathering, user stories, roadmap planning",
    avatar: "📋",
    color: "bg-green-500",
    example: "Let's break down your feature into user stories with clear acceptance criteria and prioritize them based on user impact and technical complexity."
  },
  {
    id: "ui-designer",
    title: "UX/UI Designer",
    description: "User-centered design and interface optimization expert",
    expertise: "User research, wireframing, design systems, prototyping",
    avatar: "🎨",
    color: "bg-purple-500",
    example: "I recommend conducting user interviews first, then creating low-fidelity wireframes to test the information architecture before moving to high-fidelity designs."
  },
  {
    id: "engineer",
    title: "Senior Software Engineer",
    description: "Full-stack development and architecture specialist",
    expertise: "Code architecture, performance optimization, best practices",
    avatar: "💻",
    color: "bg-orange-500",
    example: "I suggest implementing a microservices architecture with Docker containers, using Redis for caching, and PostgreSQL with proper indexing for optimal performance."
  }
];

export function SolutionOverview() {
  const [activeRole, setActiveRole] = useState("product-owner");
  const currentRole = roles.find(role => role.id === activeRole) || roles[1];

  const features = [
    { icon: "⚡", text: "No Technical Expertise Required" },
    { icon: "🔄", text: "Instant Role Switching" },
    { icon: "🎯", text: "Expert-Level Insights" },
    { icon: "🚀", text: "Professional Results" }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
              The Solution
            </Badge>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <SparklesText text="Democratizing AI Context Engineering" />
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Get expert-level responses from specialized AI roles without any technical expertise.
            Switch between professional contexts instantly.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-8">Choose Your AI Expert</h3>
            <div className="grid grid-cols-2 gap-4">
              {roles.map((role) => (
                <Card
                  key={role.id}
                  className={`p-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    activeRole === role.id
                      ? "ring-2 ring-primary shadow-lg"
                      : "hover:shadow-md"
                  }`}
                  onClick={() => setActiveRole(role.id)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full ${role.color} flex items-center justify-center text-white text-lg`}>
                      {role.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{role.title}</h4>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {role.description}
                  </p>
                </Card>
              ))}
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <AnimatedList>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                    <span className="text-xl">{feature.icon}</span>
                    <span className="font-medium">{feature.text}</span>
                  </div>
                ))}
              </AnimatedList>
            </motion.div>
          </div>

          <div>
            <Card className="p-6 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full ${currentRole.color} flex items-center justify-center text-white text-xl`}>
                  {currentRole.avatar}
                </div>
                <div>
                  <h4 className="text-xl font-bold">{currentRole.title}</h4>
                  <p className="text-sm text-muted-foreground">{currentRole.expertise}</p>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Live Demo Response</span>
                </div>
                <p className="text-sm leading-relaxed">
                  {currentRole.example}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Context-Aware</Badge>
                <Badge variant="outline" className="text-xs">Expert Knowledge</Badge>
                <Badge variant="outline" className="text-xs">Instant Switch</Badge>
              </div>
            </Card>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience Expert AI?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their AI interactions with role-based context engineering.
          </p>
          <Button size="lg" className="mr-4">
            Start with Predefined Roles
          </Button>
          <Button size="lg" variant="outline">
            Explore Community Roles
          </Button>
        </div>
      </div>
    </section>
  );
}