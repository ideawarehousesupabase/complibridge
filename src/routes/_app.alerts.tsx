import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { alerts } from "@/lib/mock-data";
import { AlertTriangle, AlertCircle, Info, CheckCheck, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/_app/alerts")({
  head: () => ({ meta: [{ title: "Alerts — CompliBridge AI" }] }),
  component: AlertsPage,
});


const sevConfig = {
  high: { icon: AlertCircle, color: "bg-destructive/10 text-destructive border-destructive/20", dot: "bg-destructive" },
  medium: { icon: AlertTriangle, color: "bg-warning/10 text-warning border-warning/20", dot: "bg-warning" },
  low: { icon: Info, color: "bg-success/10 text-success border-success/20", dot: "bg-success" },
};
function AlertsPage() {
  const [resolved, setResolved] = useState<Set<string>>(new Set());

  const sevCount = {
    high: alerts.filter((a) => a.severity === "high" && !resolved.has(a.id)).length,
    medium: alerts.filter((a) => a.severity === "medium" && !resolved.has(a.id)).length,
    low: alerts.filter((a) => a.severity === "low" && !resolved.has(a.id)).length,
  };

  function resolveOne(id: string, title: string) {
    setResolved((prev) => new Set(prev).add(id));
    toast.success(`Resolved: ${title}`);
  }

  function resolveAll() {
    setResolved(new Set(alerts.map((a) => a.id)));
    toast.success("All alerts marked as resolved");
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Alerts & Notifications</h1>
          <p className="text-muted-foreground mt-1">Stay on top of every compliance event.</p>
        </div>
        <Button variant="outline" size="sm" onClick={resolveAll}><CheckCheck className="size-4 mr-2" /> Mark all read</Button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {(["high", "medium", "low"] as const).map((s) => (
          <Card key={s} className="p-5 bg-gradient-card">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase text-muted-foreground tracking-wide">{s} severity</div>
                <div className="text-2xl font-bold mt-1">{sevCount[s]}</div>
              </div>
              <div className={`size-3 rounded-full ${sevConfig[s].dot}`} />
            </div>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All ({alerts.length})</TabsTrigger>
          <TabsTrigger value="visa">Visa</TabsTrigger>
          <TabsTrigger value="rtw">RTW</TabsTrigger>
          <TabsTrigger value="doc">Documents</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>
        {(["all", "visa", "rtw", "doc", "compliance"] as const).map((tab) => (
          <TabsContent key={tab} value={tab}>
            <Card className="bg-gradient-card divide-y overflow-hidden">
              {alerts.filter((a) => tab === "all" || a.type === tab || (tab === "compliance" && a.type === "renewal")).map((a) => {
                const cfg = sevConfig[a.severity];
                const Icon = cfg.icon;
                const isResolved = resolved.has(a.id);
                return (
                  <div key={a.id} className={`p-4 flex gap-4 items-start hover:bg-muted/30 transition ${isResolved ? "opacity-60" : ""}`}>
                    <div className={`size-10 rounded-lg grid place-items-center shrink-0 ${cfg.color}`}>
                      <Icon className="size-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <div className={`font-medium ${isResolved ? "line-through" : ""}`}>{a.title}</div>
                        <Badge variant="outline" className={cfg.color}>{a.severity}</Badge>
                        {a.worker && <Badge variant="outline">{a.worker}</Badge>}
                        {isResolved && <Badge variant="outline" className="bg-success/10 text-success border-success/20"><CheckCircle2 className="size-3 mr-1" />Resolved</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{a.message}</p>
                      <div className="text-xs text-muted-foreground mt-1">{a.time}</div>
                    </div>
                    {isResolved ? (
                      <Button variant="ghost" size="sm" disabled>Resolved</Button>
                    ) : (
                      <Button variant="ghost" size="sm" onClick={() => resolveOne(a.id, a.title)}>Resolve</Button>
                    )}
                  </div>
                );
              })}
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
