import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PublicHeader, PublicFooter } from "@/components/PublicLayout";
import {
  ShieldCheck, Bell, Bot, BarChart3, FileCheck2, Users, Building2, HeartPulse,
  GraduationCap, Briefcase, ArrowRight, Check, Sparkles, Globe, Lock,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CompliBridge AI — UK Immigration Compliance Platform" },
      { name: "description", content: "Automate sponsor licence compliance, visa monitoring, and Right-to-Work checks for UK employers." },
    ],
  }),
  component: Landing,
});

const features = [
  { icon: Bell, title: "Visa Expiry Monitoring", desc: "Automated alerts for upcoming visa expirations, RTW rechecks, and renewal windows." },
  { icon: ShieldCheck, title: "Sponsor Licence Health", desc: "Live compliance score with Home Office-style audit readiness indicators." },
  { icon: Bot, title: "AI Onboarding Coach", desc: "Conversational guidance for new sponsored workers on UK culture & rights." },
  { icon: BarChart3, title: "Workforce Analytics", desc: "Retention, stability, and risk insights across your sponsored workforce." },
  { icon: FileCheck2, title: "Audit-Ready Records", desc: "Every action logged, timestamped, and exportable for Home Office inspection." },
  { icon: Users, title: "Worker Self-Service Portal", desc: "Employees see their own visa status, documents, and onboarding progress." },
];

const sectors = [
  { icon: HeartPulse, name: "Healthcare & Care", count: "2,400+ sponsors" },
  { icon: GraduationCap, name: "Higher Education", count: "180+ institutions" },
  { icon: Building2, name: "Construction & Engineering", count: "1,100+ firms" },
  { icon: Briefcase, name: "Professional Services", count: "3,200+ companies" },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-[0.08]" />
        <div className="absolute top-20 -right-40 size-[500px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 size-[500px] rounded-full bg-chart-5/20 blur-3xl" />
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 px-3 py-1 glass">
              <Sparkles className="size-3 mr-1.5 text-primary" /> AI-powered for UK sponsor licence holders
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              Stay <span className="bg-gradient-hero bg-clip-text text-transparent">audit-ready</span><br />
              every single day.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              CompliBridge AI helps UK employers automate sponsored worker compliance —
              from visa monitoring to Right-to-Work checks — all in one intelligent platform.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-gradient-hero hover:opacity-90 shadow-glow w-full sm:w-auto">
                  Start free trial <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">See platform</Button>
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Check className="size-4 text-success" /> Home Office aligned</span>
              <span className="flex items-center gap-1.5"><Check className="size-4 text-success" /> GDPR compliant</span>
              <span className="flex items-center gap-1.5"><Check className="size-4 text-success" /> Multilingual support</span>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="glass rounded-2xl shadow-soft p-2 ring-1 ring-primary/10">
              <div className="rounded-xl bg-card overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b">
                  <div className="size-3 rounded-full bg-destructive/60" />
                  <div className="size-3 rounded-full bg-warning/60" />
                  <div className="size-3 rounded-full bg-success/60" />
                  <div className="ml-3 text-xs text-muted-foreground">app.complibridge.ai/dashboard</div>
                </div>
                <div className="p-6 grid md:grid-cols-3 gap-4">
                  {[
                    { label: "Sponsored Workers", value: "247", trend: "+12%" },
                    { label: "Expiring Visas", value: "18", trend: "next 90d" },
                    { label: "Licence Score", value: "82", trend: "Healthy" },
                  ].map((k) => (
                    <Card key={k.label} className="p-4 bg-gradient-card">
                      <div className="text-xs text-muted-foreground">{k.label}</div>
                      <div className="text-3xl font-bold mt-1">{k.value}</div>
                      <div className="text-xs text-success mt-1">{k.trend}</div>
                    </Card>
                  ))}
                  <div className="md:col-span-3 h-32 rounded-lg bg-gradient-to-r from-primary/10 via-chart-5/10 to-success/10 grid place-items-center text-muted-foreground text-sm">
                    Live compliance analytics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="outline" className="mb-3">Features</Badge>
          <h2 className="text-3xl md:text-5xl font-bold">Everything you need to manage sponsored workers</h2>
          <p className="mt-4 text-muted-foreground">One platform replacing spreadsheets, calendar reminders, and manual audits.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Card key={f.title} className="p-6 bg-gradient-card hover:shadow-soft transition group">
              <div className="size-11 rounded-lg bg-primary/10 grid place-items-center mb-4 group-hover:bg-gradient-hero group-hover:shadow-glow transition">
                <f.icon className="size-5 text-primary group-hover:text-primary-foreground transition" />
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-card border-y">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-3">Industries</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Trusted across UK regulated sectors</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((s) => (
              <div key={s.name} className="text-center p-6 rounded-xl bg-background border hover:border-primary/30 transition">
                <div className="size-12 mx-auto rounded-full bg-gradient-hero grid place-items-center mb-3 shadow-soft">
                  <s.icon className="size-6 text-primary-foreground" />
                </div>
                <h4 className="font-semibold">{s.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{s.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-3">Why CompliBridge</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Reduce compliance risk by 80%</h2>
            <p className="mt-4 text-muted-foreground">Automate the work that puts your sponsor licence at risk — late renewals, missing RTW checks, and inconsistent record keeping.</p>
            <ul className="mt-6 space-y-3">
              {[
                "Cut admin time on compliance by 12+ hours/week",
                "Never miss a visa expiry or RTW recheck again",
                "Generate audit reports in seconds, not days",
                "Onboard international workers 3x faster",
              ].map((b) => (
                <li key={b} className="flex gap-3"><Check className="size-5 text-success shrink-0 mt-0.5" /> <span>{b}</span></li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Globe, label: "Languages", value: "12+" },
              { icon: Lock, label: "GDPR", value: "Compliant" },
              { icon: ShieldCheck, label: "Uptime SLA", value: "99.9%" },
              { icon: Users, label: "Workers monitored", value: "50K+" },
            ].map((s) => (
              <Card key={s.label} className="p-6 bg-gradient-card">
                <s.icon className="size-6 text-primary mb-3" />
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">{s.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="rounded-3xl bg-gradient-hero p-12 md:p-16 text-center shadow-glow relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,white,transparent_40%)] opacity-10" />
          <h2 className="relative text-3xl md:text-5xl font-bold text-primary-foreground">Ready to stay audit-ready?</h2>
          <p className="relative mt-4 text-primary-foreground/80 max-w-xl mx-auto">Join hundreds of UK sponsors automating compliance with CompliBridge AI.</p>
          <Link to="/signup" className="relative inline-block mt-8">
            <Button size="lg" variant="secondary" className="shadow-soft">Get started free <ArrowRight className="ml-2 size-4" /></Button>
          </Link>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
