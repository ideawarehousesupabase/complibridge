import { createFileRoute } from "@tanstack/react-router";
import { PublicHeader, PublicFooter } from "@/components/PublicLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Bell, Bot, BarChart3, FileCheck2, Users, Workflow, Database, Cloud } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "Platform — CompliBridge AI" },
    { name: "description", content: "How CompliBridge AI helps UK sponsors automate immigration compliance." },
  ]}),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="outline" className="mb-4">About the platform</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">Built for UK sponsor licence holders</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            CompliBridge AI brings together immigration compliance, workforce management, and onboarding into a single intelligent platform.
            Designed alongside HR leaders, compliance officers, and immigration solicitors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: ShieldCheck, t: "Compliance First", d: "Engineered to match Home Office sponsor licence guidance and RTW requirements." },
            { icon: Bot, t: "AI-Augmented", d: "Smart triage of alerts, conversational onboarding, and predictive risk scoring." },
            { icon: Cloud, t: "Cloud Native", d: "Enterprise-grade security, GDPR-compliant, hosted in UK data centres." },
          ].map((b) => (
            <Card key={b.t} className="p-6 bg-gradient-card">
              <b.icon className="size-8 text-primary mb-3" />
              <h3 className="font-semibold text-lg">{b.t}</h3>
              <p className="text-sm text-muted-foreground mt-2">{b.d}</p>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-10">How it works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Database, t: "1. Import workers", d: "CSV upload or HRIS sync." },
              { icon: Workflow, t: "2. Auto-monitor", d: "Visa, RTW, and document checks." },
              { icon: Bell, t: "3. Get alerts", d: "Severity-ranked notifications." },
              { icon: FileCheck2, t: "4. Stay audit-ready", d: "Export reports anytime." },
            ].map((s) => (
              <div key={s.t} className="text-center">
                <div className="size-14 mx-auto rounded-2xl bg-gradient-hero grid place-items-center shadow-soft mb-3">
                  <s.icon className="size-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold">{s.t}</h4>
                <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">Features at a glance</h2>
            <p className="text-muted-foreground mt-3">A complete toolkit for HR Managers, Compliance Officers, Senior Management, and Auditors.</p>
          </div>
          <ul className="space-y-3">
            {[
              "Real-time sponsor licence health scoring",
              "Worker visa expiry & renewal tracking",
              "Right-to-Work recheck scheduling",
              "AI onboarding coach for new joiners",
              "Audit-ready timestamped activity logs",
              "Multilingual worker self-service portal",
              "Role-based dashboards & analytics",
            ].map((f) => (
              <li key={f} className="flex gap-3 items-start">
                <BarChart3 className="size-4 text-primary mt-1" /> {f}
              </li>
            ))}
            <li className="flex gap-3 items-start"><Users className="size-4 text-primary mt-1" /> Designed for 10–10,000 sponsored workers</li>
          </ul>
        </div>
      </section>
      <PublicFooter />
    </div>
  );
}
