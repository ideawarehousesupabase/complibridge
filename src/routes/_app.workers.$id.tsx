import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { workers, auditLogs } from "@/lib/mock-data";
import { ArrowLeft, Mail, MapPin, Briefcase, Calendar, FileText, Download, CheckCircle2, Clock } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_app/workers/$id")({
  head: () => ({ meta: [{ title: "Worker Profile — CompliBridge AI" }] }),
  component: WorkerProfile,
});

function WorkerProfile() {
  const { id } = useParams({ from: "/_app/workers/$id" });
  const w = workers.find((x) => x.id === id);
  if (!w) return (
    <div className="text-center py-20">
      <h2 className="text-xl font-semibold">Worker not found</h2>
      <Link to="/workers" className="text-primary mt-3 inline-block">← Back to workers</Link>
    </div>
  );

  const docs = [
    { name: "Passport.pdf", uploaded: "2024-01-12", status: "Verified" },
    { name: "Visa-BRP.pdf", uploaded: "2024-01-12", status: "Verified" },
    { name: "Right-to-Work-Evidence.pdf", uploaded: "2024-01-14", status: "Verified" },
    { name: "Contract-of-Employment.pdf", uploaded: "2024-01-15", status: "Verified" },
    { name: "Qualifications.pdf", uploaded: "2024-01-20", status: "Pending" },
  ];

  const timeline = [
    { date: "2024-01-10", event: "Sponsorship application submitted", status: "complete" },
    { date: "2024-01-15", event: "CoS issued", status: "complete" },
    { date: "2024-01-28", event: "Visa granted", status: "complete" },
    { date: "2024-02-05", event: "Started employment", status: "complete" },
    { date: "2024-08-05", event: "6-month RTW recheck", status: "complete" },
    { date: "2025-02-05", event: "Annual review", status: "complete" },
    { date: "2025-07-01", event: "Visa renewal window", status: "pending" },
  ];

  const employeeLogs = auditLogs.filter((l) => l.employee === w.name);

  return (
    <div className="space-y-6">
      <Link to="/workers" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4 mr-1" /> Back to workers
      </Link>

      <Card className="p-6 bg-gradient-card">
        <div className="flex flex-wrap gap-6 items-start justify-between">
          <div className="flex gap-4">
            <Avatar className="size-20">
              <AvatarFallback className="bg-gradient-hero text-primary-foreground text-2xl">
                {w.name.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">{w.name}</h1>
              <p className="text-muted-foreground">{w.role} · {w.department}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge variant="outline" className="bg-success/10 text-success border-success/20">{w.sponsorshipStatus}</Badge>
                <Badge variant="outline" className={
                  w.risk === "Low" ? "bg-success/10 text-success border-success/20" :
                  w.risk === "Medium" ? "bg-warning/10 text-warning border-warning/20" :
                  "bg-destructive/10 text-destructive border-destructive/20"
                }>{w.risk} risk</Badge>
                <Badge variant="outline">{w.visaType}</Badge>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => toast.success(`Message sent to ${w.name}`)}><Mail className="size-4 mr-2" /> Message</Button>
            <Button size="sm" className="bg-gradient-hero shadow-soft" onClick={() => toast.success("Edit profile (demo)")}>Edit profile</Button>
          </div>
        </div>
      </Card>

      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="timeline">Compliance Timeline</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-5 bg-gradient-card">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><MapPin className="size-4" /> Personal</h3>
              <dl className="text-sm space-y-2">
                <div><dt className="text-muted-foreground text-xs">Email</dt><dd>{w.email}</dd></div>
                <div><dt className="text-muted-foreground text-xs">Nationality</dt><dd>{w.nationality}</dd></div>
                <div><dt className="text-muted-foreground text-xs">Date of Birth</dt><dd>1990-05-22</dd></div>
              </dl>
            </Card>
            <Card className="p-5 bg-gradient-card">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><Calendar className="size-4" /> Visa</h3>
              <dl className="text-sm space-y-2">
                <div><dt className="text-muted-foreground text-xs">Type</dt><dd>{w.visaType}</dd></div>
                <div><dt className="text-muted-foreground text-xs">Expiry</dt><dd className="font-medium">{w.visaExpiry}</dd></div>
                <div><dt className="text-muted-foreground text-xs">CoS Number</dt><dd>C2{w.id.slice(1)}E9F4A</dd></div>
              </dl>
            </Card>
            <Card className="p-5 bg-gradient-card">
              <h3 className="font-semibold mb-3 flex items-center gap-2"><Briefcase className="size-4" /> Employment</h3>
              <dl className="text-sm space-y-2">
                <div><dt className="text-muted-foreground text-xs">Role</dt><dd>{w.role}</dd></div>
                <div><dt className="text-muted-foreground text-xs">Department</dt><dd>{w.department}</dd></div>
                <div><dt className="text-muted-foreground text-xs">Start Date</dt><dd>{w.startDate}</dd></div>
              </dl>
            </Card>
          </div>
          <Card className="p-5 bg-gradient-card">
            <h3 className="font-semibold mb-3">Onboarding Progress</h3>
            <div className="h-3 rounded-full bg-muted overflow-hidden">
              <div className="h-full bg-gradient-hero" style={{ width: `${w.onboarding}%` }} />
            </div>
            <div className="text-xs text-muted-foreground mt-2">{w.onboarding}% complete</div>
          </Card>
        </TabsContent>

        <TabsContent value="timeline">
          <Card className="p-6 bg-gradient-card">
            <div className="space-y-4">
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className={`size-8 rounded-full grid place-items-center shrink-0 ${
                    t.status === "complete" ? "bg-success/15 text-success" : "bg-warning/15 text-warning"
                  }`}>
                    {t.status === "complete" ? <CheckCircle2 className="size-4" /> : <Clock className="size-4" />}
                  </div>
                  <div className="flex-1 pb-4 border-b last:border-0">
                    <div className="font-medium text-sm">{t.event}</div>
                    <div className="text-xs text-muted-foreground">{t.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <Card className="bg-gradient-card overflow-hidden">
            <div className="divide-y">
              {docs.map((d) => (
                <div key={d.name} className="p-4 flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-primary/10 grid place-items-center"><FileText className="size-5 text-primary" /></div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{d.name}</div>
                    <div className="text-xs text-muted-foreground">Uploaded {d.uploaded}</div>
                  </div>
                  <Badge variant="outline" className={d.status === "Verified" ? "bg-success/10 text-success border-success/20" : "bg-warning/10 text-warning border-warning/20"}>{d.status}</Badge>
                  <Button variant="ghost" size="sm" onClick={() => toast.success(`Downloaded ${d.name}`)}><Download className="size-4" /></Button>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card className="p-6 bg-gradient-card">
            {employeeLogs.length === 0 ? (
              <p className="text-sm text-muted-foreground">No activity yet for this worker.</p>
            ) : (
              <div className="space-y-3">
                {employeeLogs.map((l) => (
                  <div key={l.id} className="flex justify-between text-sm py-2 border-b last:border-0">
                    <div>
                      <div className="font-medium">{l.action}</div>
                      <div className="text-xs text-muted-foreground">{l.user} · {l.timestamp}</div>
                    </div>
                    <Badge variant="outline">{l.status}</Badge>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
