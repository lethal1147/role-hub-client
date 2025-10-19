"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { motion } from "motion/react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { SparklesText } from "@/components/ui/sparkles-text";

const socialLoginOptions = [
  { name: "GitHub", icon: "🐙", description: "Import your development context" },
  { name: "Google", icon: "🔍", description: "Quick setup with your Google account" },
  { name: "LinkedIn", icon: "💼", description: "Professional profile integration" }
];

const onboardingSteps = [
  { step: 1, title: "Choose Your Role", description: "Select from 50+ predefined AI experts", time: "30 seconds" },
  { step: 2, title: "Start Chatting", description: "Ask questions and get expert responses", time: "Immediate" },
  { step: 3, title: "Customize & Create", description: "Build roles tailored to your needs", time: "2 minutes" }
];

export function CTASections() {
  return (
    <>
      {/* Primary CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <AnimatedShinyText className="text-lg text-muted-foreground mb-4">
              🚀 Join the AI Revolution
            </AnimatedShinyText>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your{" "}
            <SparklesText text="AI Experience?" />
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join 47,500+ professionals who have revolutionized their workflows with expert AI roles.
            Start with immediate value, scale as you grow.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <InteractiveHoverButton size="lg" className="text-lg px-8 py-4">
              Start with Predefined Roles
            </InteractiveHoverButton>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Explore Community Roles
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {socialLoginOptions.map((option, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-3xl mb-3">{option.icon}</div>
                <h3 className="font-semibold mb-2">Continue with {option.name}</h3>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              ✨ No credit card required • 🚀 Setup in under 2 minutes • 🔄 Cancel anytime
            </p>
            <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
              <span>🔒 SOC 2 Certified</span>
              <span>🌍 GDPR Compliant</span>
              <span>💰 30-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA - Guided Onboarding */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">Get Started in Less Than 2 Minutes</h3>
            <p className="text-xl text-muted-foreground">
              Our guided onboarding ensures you experience immediate value from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {onboardingSteps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{step.step}</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-muted-foreground mb-3">{step.description}</p>
                <div className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">
                  {step.time}
                </div>
              </div>
            ))}
          </div>

          <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-2xl font-bold mb-4">Immediate Value Guarantee</h4>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Start seeing results from your first conversation. Our AI roles are designed to deliver
                expert-level insights immediately, with no learning curve required.
              </p>
              <Button size="lg" className="mr-4">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline">
                Watch 2-Minute Demo
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA - Alternative Path */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-6">Still Not Convinced?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              See RoleHub in action with a personalized demo tailored to your specific use case.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="p-6 border-dashed">
                <h4 className="font-semibold mb-3">🎥 Watch Demo</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  See real professionals using RoleHub to solve actual business challenges.
                </p>
                <Button variant="outline" className="w-full">
                  View Success Stories
                </Button>
              </Card>

              <Card className="p-6 border-dashed">
                <h4 className="font-semibold mb-3">📞 Schedule Call</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Get a personalized walkthrough with our team and see custom role creation.
                </p>
                <Button variant="outline" className="w-full">
                  Book 15-Min Demo
                </Button>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Join the 95% of users who rate RoleHub as "significantly better" than generic AI
              </p>
              <InteractiveHoverButton size="lg">
                Start Your Free Trial Now
              </InteractiveHoverButton>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Transform Your AI Workflow Today
          </h3>
          <p className="text-lg opacity-90 mb-8">
            Don't settle for generic AI. Experience the power of role-based expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Sales
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm opacity-80">
            <span>✅ Free forever plan</span>
            <span>⚡ Instant setup</span>
            <span>🎯 Immediate results</span>
          </div>
        </div>
      </section>
    </>
  );
}