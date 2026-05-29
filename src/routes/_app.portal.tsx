import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/lib/auth-context";
import { portalModules as initialModules, alerts } from "@/lib/mock-data";
import { Calendar, CheckCircle2, Clock, PlayCircle, FileCheck2, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/_app/portal")({
  head: () => ({ meta: [{ title: "Worker Portal — CompliBridge AI" }] }),
  component: PortalPage,
});

function PortalPage() {
  const { user } = useAuth();
  const [modules, setModules] = useState(initialModules);

  function handleModule(id: string) {
    setModules((prev) => prev.map((m) => {
      if (m.id !== id) return m;
      if (m.progress === 100) {
        toast.success(`Reviewing: ${m.title}`);
        return m;
      }
      const next = Math.min(100, m.progress + (m.progress === 0 ? 25 : 25));
      toast.success(next === 100 ? `Completed: ${m.title}` : `Progress saved: ${m.title} (${next}%)`);
      return { ...m, progress: next };
    }));
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-hero text-primary-foreground shadow-glow overflow-hidden relative">
        <div className="absolute -bottom-20 -right-20 size-64 rounded-full bg-white/10 blur-3xl" />
        <div className="relative flex items-center gap-4">
          <Avatar className="size-16 ring-2 ring-white/20">
            <AvatarFallback className="bg-white/20 text-primary-foreground text-xl">{user?.fullName?.[0] ?? "W"}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm opacity-80">Welcome to your worker portal</p>
            <h1 className="text-3xl font-bold">{user?.fullName ?? "Sponsored Worker"}</h1>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-5 bg-gradient-card">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="size-5 text-primary" />
            <Badge className="bg-success/10 text-success border-success/20" variant="outline">Active</Badge>
          </div>
          <div className="text-xs text-muted-foreground">Visa expiry</div>
          <div className="text-2xl font-bold mt-1">2026-03-14</div>
          <p className="text-xs text-muted-foreground mt-1">9 months remaining</p>
        </Card>
        <Card className="p-5 bg-gradient-card">
          <div className="flex items-center justify-between mb-2">
            <FileCheck2 className="size-5 text-chart-5" />
            <Badge variant="outline">Scheduled</Badge>
          </div>
          <div className="text-xs text-muted-foreground">Next RTW recheck</div>
          <div className="text-2xl font-bold mt-1">2025-08-15</div>
          <p className="text-xs text-muted-foreground mt-1">in 12 weeks</p>
        </Card>
        <Card className="p-5 bg-gradient-card">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle2 className="size-5 text-success" />
            <Badge variant="outline" className="bg-success/10 text-success border-success/20">On track</Badge>
          </div>
          <div className="text-xs text-muted-foreground">Onboarding</div>
          <div className="text-2xl font-bold mt-1">76%</div>
          <p className="text-xs text-muted-foreground mt-1">3 of 5 modules done</p>
        </Card>
      </div>

      <Card className="p-6 bg-gradient-card">
        <h3 className="font-semibold mb-4">Your Onboarding Modules</h3>
        <div className="space-y-3">
          {modules.map((m) => (
            <div key={m.id} className="flex items-center gap-4 p-3 rounded-lg border bg-background/50">
              <div className={`size-10 rounded-lg grid place-items-center shrink-0 ${
                m.progress === 100 ? "bg-success/15 text-success" : m.progress > 0 ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
              }`}>
                {m.progress === 100 ? <CheckCircle2 className="size-5" /> : <PlayCircle className="size-5" />}
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">{m.title}</div>
                <div className="h-1.5 rounded-full bg-muted mt-2 overflow-hidden">
                  <div className="h-full bg-gradient-hero" style={{ width: `${m.progress}%` }} />
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={() => handleModule(m.id)}>{m.progress === 100 ? "Review" : m.progress > 0 ? "Continue" : "Start"}</Button>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-gradient-card">
        <h3 className="font-semibold mb-4 flex items-center gap-2"><AlertTriangle className="size-4 text-warning" /> Compliance Reminders</h3>
        <div className="space-y-2">
          {alerts.slice(0, 3).map((a) => (
            <div key={a.id} className="flex gap-3 items-start text-sm py-2 border-b last:border-0">
              <Clock className="size-4 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <div className="font-medium">{a.title}</div>
                <div className="text-xs text-muted-foreground">{a.message}</div>
              </div>
              <span className="text-xs text-muted-foreground">{a.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
