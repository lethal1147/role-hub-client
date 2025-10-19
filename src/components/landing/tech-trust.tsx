"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const techStack = [
  { name: "Next.js 14+", category: "Frontend", status: "production", description: "React framework for production-grade applications" },
  { name: "FastAPI", category: "Backend", status: "production", description: "High-performance API framework with automatic documentation" },
  { name: "LangChain", category: "AI/ML", status: "production", description: "Advanced AI orchestration and context management" },
  { name: "PostgreSQL", category: "Database", status: "production", description: "Enterprise-grade relational database with ACID compliance" },
  { name: "Redis", category: "Caching", status: "production", description: "In-memory data structure store for sub-millisecond performance" },
  { name: "Docker", category: "Infrastructure", status: "production", description: "Containerized deployment for consistent environments" }
];

const performanceMetrics = [
  { metric: "Uptime", value: "99.97%", description: "Last 12 months average", trend: "up" },
  { metric: "Response Time", value: "<1.2s", description: "95th percentile", trend: "stable" },
  { metric: "Availability", value: "99.9%", description: "SLA guarantee", trend: "up" },
  { metric: "Concurrent Users", value: "10k+", description: "Peak capacity", trend: "up" }
];

export function TechTrust() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            Trust & Reliability
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enterprise-Grade{" "}
            <span className="text-primary">Technology</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on proven technologies with security, performance, and reliability
            at the core. Trusted by professionals worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-2xl">⚙️</span>
              Technology Stack
            </h3>
            <div className="space-y-4">
              {techStack.map((tech, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <div className="font-semibold">{tech.name}</div>
                    <div className="text-sm text-muted-foreground">{tech.description}</div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-xs">{tech.category}</Badge>
                    <div className="text-xs text-green-500 mt-1">✓ {tech.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-2xl">📊</span>
              Performance Metrics
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {performanceMetrics.map((perf, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{perf.value}</div>
                  <div className="font-semibold mb-1">{perf.metric}</div>
                  <div className="text-sm text-muted-foreground">{perf.description}</div>
                  <div className={`text-xs mt-2 ${
                    perf.trend === 'up' ? 'text-green-500' : 'text-blue-500'
                  }`}>
                    {perf.trend === 'up' ? '↗️ improving' : '→ stable'}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Why Professionals Trust RoleHub</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold mb-2">Proven Scale</h4>
                <p className="text-sm text-muted-foreground">
                  Processing 10M+ AI conversations monthly with consistent performance
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="font-semibold mb-2">Industry Recognition</h4>
                <p className="text-sm text-muted-foreground">
                  Rated "Best AI Context Platform" by Enterprise AI Review 2024
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <h4 className="font-semibold mb-2">Enterprise Ready</h4>
                <p className="text-sm text-muted-foreground">
                  Deployed in Fortune 500 companies with enterprise-grade security
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}