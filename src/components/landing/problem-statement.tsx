"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

export function ProblemStatement() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
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
            <Badge variant="outline" className="mb-4 text-sm px-4 py-2">
              The Problem
            </Badge>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            AI is Powerful, But{" "}
            <span className="text-primary">Complex</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Business professionals struggle with inconsistent AI responses, complex prompt engineering,
            and lack of role-specific context that matches their expertise.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "⚡",
              title: "Complex Prompt Engineering",
              description: "Hours spent crafting prompts that still don't deliver consistent, professional results.",
              stat: "73%",
              detail: "of professionals struggle with prompt creation"
            },
            {
              icon: "🎯",
              title: "Inconsistent Results",
              description: "Generic AI responses that lack the expertise and context of specialized roles.",
              stat: "65%",
              detail: "report inconsistent AI output quality"
            },
            {
              icon: "⏱️",
              title: "Time Wasted",
              description: "Multiple iterations and refinements needed to get professional-grade responses.",
              stat: "4.2hrs",
              detail: "average weekly time lost on AI inefficiency"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <Card className="p-8 text-center border-dashed border-primary/20 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/40">
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl">{item.icon}</span>
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>
                <motion.div
                  className="text-2xl font-bold text-primary"
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {item.stat}
                </motion.div>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Before vs After</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-muted-foreground text-sm">✗</span>
                  </div>
                  <div>
                    <p className="font-medium">Generic AI Response</p>
                    <p className="text-sm text-muted-foreground">"Create a marketing strategy for your product..."</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-500 text-sm">✓</span>
                  </div>
                  <div>
                    <p className="font-medium">Role-Specific Expert Response</p>
                    <p className="text-sm text-muted-foreground">"As a Senior Product Manager with B2B SaaS experience, I recommend a tiered GTM approach focusing on user acquisition metrics..."</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">10x</div>
              <p className="text-xl font-semibold">More Relevant</p>
              <p className="text-muted-foreground">Context-aware responses that match your professional needs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}