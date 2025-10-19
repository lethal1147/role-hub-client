"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const plans = [
  {
    id: "free",
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    description: "Perfect for exploring AI role-based interactions",
    features: [
      "5 predefined AI roles",
      "100 messages/month",
      "Basic customization",
      "Community access",
      "Email support"
    ],
    limitations: [
      "Limited role switching",
      "Standard response time",
      "Community support only"
    ],
    cta: "Start Free",
    popular: false,
    color: "border-muted"
  },
  {
    id: "professional",
    name: "Professional",
    price: { monthly: 29, annual: 290 },
    description: "For professionals who need advanced AI expertise",
    features: [
      "50+ predefined AI roles",
      "Unlimited messages",
      "Advanced role customization",
      "Priority response times",
      "Role marketplace access",
      "Integration APIs",
      "Analytics dashboard",
      "Priority support"
    ],
    limitations: [],
    cta: "Start 14-Day Trial",
    popular: true,
    color: "border-primary"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: { monthly: "Custom", annual: "Custom" },
    description: "For teams and organizations requiring advanced features",
    features: [
      "Unlimited AI roles",
      "Custom role development",
      "Team collaboration tools",
      "SSO integration",
      "Advanced security",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantees",
      "Training & onboarding"
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false,
    color: "border-muted"
  }
];

const featureComparison = [
  { feature: "AI Role Access", free: "5 roles", pro: "50+ roles", enterprise: "Unlimited" },
  { feature: "Monthly Messages", free: "100", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Response Time", free: "Standard", pro: "Priority", enterprise: "Dedicated" },
  { feature: "Custom Roles", free: "Basic", pro: "Advanced", enterprise: "Full custom" },
  { feature: "Team Features", free: "❌", pro: "Limited", enterprise: "Advanced" },
  { feature: "API Access", free: "❌", pro: "✅", enterprise: "Advanced" },
  { feature: "Analytics", free: "Basic", pro: "Advanced", enterprise: "Custom" },
  { feature: "Support", free: "Community", pro: "Priority", enterprise: "Dedicated" }
];

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  const calculateROI = (plan: typeof plans[0]) => {
    if (plan.id === "free") return null;

    const monthlyCost = typeof plan.price.monthly === "number" ? plan.price.monthly : 0;
    const timeSaved = plan.id === "professional" ? 10 : 20; // hours per month
    const hourlyValue = 75; // average professional hourly rate
    const monthlyValue = timeSaved * hourlyValue;
    const roi = monthlyCost > 0 ? Math.round((monthlyValue - monthlyCost) / monthlyCost * 100) : 0;

    return {
      timeSaved,
      monthlyValue,
      roi
    };
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm px-4 py-2">
            Transparent Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your{" "}
            <span className="text-primary">AI Expertise Level</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and scale as your AI needs grow. No hidden fees,
            cancel anytime. ROI guaranteed or your money back.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-muted rounded-lg p-1 flex">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingPeriod === "monthly"
                  ? "bg-background shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingPeriod === "annual"
                  ? "bg-background shadow-sm"
                  : "text-muted-foreground"
              }`}
            >
              Annual
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 17%
              </Badge>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => {
            const roi = calculateROI(plan);
            const price = billingPeriod === "annual" ? plan.price.annual : plan.price.monthly;
            const displayPrice = typeof price === "number"
              ? billingPeriod === "annual"
                ? `$${Math.round(price / 12)}`
                : `$${price}`
              : price;

            return (
              <Card
                key={plan.id}
                className={`p-8 relative ${plan.color} ${
                  plan.popular ? "ring-2 ring-primary shadow-lg scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{displayPrice}</span>
                    {typeof price === "number" && (
                      <span className="text-muted-foreground">
                        /{billingPeriod === "annual" ? "month" : "month"}
                      </span>
                    )}
                  </div>
                  {billingPeriod === "annual" && typeof plan.price.annual === "number" && (
                    <div className="text-sm text-muted-foreground">
                      ${plan.price.annual} billed annually
                    </div>
                  )}
                  <p className="text-muted-foreground mt-4">{plan.description}</p>
                </div>

                {roi && (
                  <Card className="p-4 mb-6 bg-green-50 border-green-200">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-700">
                        {roi.roi}% ROI
                      </div>
                      <div className="text-sm text-green-600">
                        Save {roi.timeSaved}hrs/month = ${roi.monthlyValue} value
                      </div>
                    </div>
                  </Card>
                )}

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-muted-foreground">
                      <span>⚠️</span>
                      <span className="text-sm">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>

                {plan.id === "free" && (
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    No credit card required
                  </p>
                )}
              </Card>
            );
          })}
        </div>

        <Card className="p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Feature Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Feature</th>
                  <th className="text-center py-3 px-4">Starter</th>
                  <th className="text-center py-3 px-4">Professional</th>
                  <th className="text-center py-3 px-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.map((row, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-3 px-4 font-medium">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-sm">{row.free}</td>
                    <td className="py-3 px-4 text-center text-sm font-medium">{row.pro}</td>
                    <td className="py-3 px-4 text-center text-sm">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Not Sure Which Plan Is Right?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Start with our free tier and upgrade when you're ready. Our ROI calculator
            shows most professionals save 10x their subscription cost in time alone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Calculate Your ROI
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            💰 30-day money-back guarantee • 🔄 Cancel anytime • 📞 Free migration support
          </p>
        </div>
      </div>
    </section>
  );
}