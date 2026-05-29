import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAuth } from "@/lib/auth-context";
import { useI18n } from "@/lib/i18n";
import {
  Users, AlertTriangle, ShieldAlert, ShieldCheck, Activity, TrendingUp,
  ArrowUpRight, Calendar, FileCheck2,
} from "lucide-react";
import { workers, alerts, auditLogs, visaExpiryTrend, workforceStability, departmentBreakdown } from "@/lib/mock-data";
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar,
  PieChart, Pie, Cell, RadialBarChart, RadialBar,
} from "recharts";

export const Route = createFileRoute("/_app/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — CompliBridge AI" }] }),
  component: Dashboard,
});

const COLORS = ["oklch(0.55 0.2 260)", "oklch(0.62 0.16 155)", "oklch(0.75 0.16 75)", "oklch(0.58 0.22 25)", "oklch(0.62 0.18 200)"];

const kpis = [
  { label: "Total Sponsored Workers", value: "247", icon: Users, trend: "+12 this month", color: "text-primary" },
  { label: "Expiring Visas (90d)", value: "18", icon: Calendar, trend: "3 critical", color: "text-warning" },
  { label: "Pending RTW Rechecks", value: "7", icon: FileCheck2, trend: "Due this week", color: "text-chart-5" },
  { label: "Compliance Alerts", value: "12", icon: AlertTriangle, trend: "2 high severity", color: "text-destructive" },
  { label: "Workforce Stability", value: "94%", icon: TrendingUp, trend: "+2% QoQ", color: "text-success" },
];

function Dashboard() {
  const { user } = useAuth();
  const { t } = useI18n();
  const licenceScore = 82;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{t("welcome")}{user ? `, ${user.fullName.split(" ")[0]}` : ""} 👋</h1>
          <p className="text-muted-foreground mt-1">Here's your compliance snapshot for today.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => { import("sonner").then(({ toast }) => toast.success("Downloaded compliance-report.pdf")); }}><Activity className="size-4 mr-2" /> Export report</Button>
          <Button size="sm" className="bg-gradient-hero shadow-soft">Add worker</Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {kpis.map((k) => (
          <Card key={k.label} className="p-5 bg-gradient-card hover:shadow-soft transition">
            <div className="flex items-center justify-between mb-3">
              <div className={`size-10 rounded-lg bg-primary/10 grid place-items-center ${k.color}`}>
                <k.icon className="size-5" />
              </div>
              <ArrowUpRight className="size-4 text-muted-foreground" />
            </div>
            <div className="text-2xl font-bold">{k.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{k.label}</div>
            <div className={`text-[11px] mt-2 ${k.color}`}>{k.trend}</div>
          </Card>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="p-6 lg:col-span-2 bg-gradient-card">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold">Visa Expiry Trend</h3>
              <p className="text-xs text-muted-foreground">Expiring vs renewed over time</p>
            </div>
            <Badge variant="outline">Last 7 months</Badge>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={visaExpiryTrend}>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.58 0.22 25)" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="oklch(0.58 0.22 25)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="oklch(0.55 0.2 260)" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="oklch(0.55 0.2 260)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="oklch(0.5 0.02 250)" fontSize={12} />
              <YAxis stroke="oklch(0.5 0.02 250)" fontSize={12} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid oklch(0.92 0.01 250)", background: "white" }} />
              <Area type="monotone" dataKey="expiring" stroke="oklch(0.58 0.22 25)" fill="url(#g1)" strokeWidth={2} />
              <Area type="monotone" dataKey="renewed" stroke="oklch(0.55 0.2 260)" fill="url(#g2)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Licence Health Score */}
        <Card className="p-6 bg-gradient-card">
          <h3 className="font-semibold">Sponsor Licence Health</h3>
          <p className="text-xs text-muted-foreground mb-2">Live composite score</p>
          <div className="relative">
            <ResponsiveContainer width="100%" height={220}>
              <RadialBarChart innerRadius="70%" outerRadius="100%" data={[{ name: "score", value: licenceScore, fill: "oklch(0.62 0.16 155)" }]} startAngle={90} endAngle={-270}>
                <RadialBar background dataKey="value" cornerRadius={20} />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="text-4xl font-bold">{licenceScore}</div>
                <div className="text-xs text-muted-foreground">out of 100</div>
                <Badge className="mt-2 bg-success/10 text-success border-success/20" variant="outline">
                  <ShieldCheck className="size-3 mr-1" /> Healthy
                </Badge>
              </div>
            </div>
          </div>
          <div className="mt-3 space-y-1.5 text-xs">
            <div className="flex justify-between"><span className="text-muted-foreground">Reporting duties</span><span className="font-medium text-success">98%</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Record keeping</span><span className="font-medium text-success">91%</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">RTW compliance</span><span className="font-medium text-warning">76%</span></div>
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-card">
          <h3 className="font-semibold mb-1">Workforce Stability</h3>
          <p className="text-xs text-muted-foreground mb-4">Retention by quarter</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={workforceStability}>
              <XAxis dataKey="quarter" stroke="oklch(0.5 0.02 250)" fontSize={12} />
              <YAxis stroke="oklch(0.5 0.02 250)" fontSize={12} domain={[80, 100]} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid oklch(0.92 0.01 250)", background: "white" }} />
              <Bar dataKey="retention" fill="oklch(0.55 0.2 260)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 bg-gradient-card">
          <h3 className="font-semibold mb-1">Department Breakdown</h3>
          <p className="text-xs text-muted-foreground mb-4">Sponsored workers by team</p>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={departmentBreakdown} dataKey="value" nameKey="name" innerRadius={55} outerRadius={85} paddingAngle={2}>
                {departmentBreakdown.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid oklch(0.92 0.01 250)", background: "white" }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-1 text-xs mt-2">
            {departmentBreakdown.map((d, i) => (
              <div key={d.name} className="flex items-center gap-2">
                <div className="size-2 rounded-full" style={{ background: COLORS[i % COLORS.length] }} />
                <span className="text-muted-foreground">{d.name}</span>
                <span className="ml-auto font-medium">{d.value}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-gradient-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Recent Alerts</h3>
            <Link to="/alerts" className="text-xs text-primary font-medium">View all</Link>
          </div>
          <div className="space-y-3">
            {alerts.slice(0, 4).map((a) => (
              <div key={a.id} className="flex gap-3 p-3 rounded-lg border bg-background/50">
                <div className={`size-2 rounded-full mt-1.5 shrink-0 ${
                  a.severity === "high" ? "bg-destructive" : a.severity === "medium" ? "bg-warning" : "bg-success"
                }`} />
                <div className="min-w-0">
                  <div className="text-sm font-medium truncate">{a.title}</div>
                  <div className="text-xs text-muted-foreground truncate">{a.message}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Employee compliance table */}
      <Card className="bg-gradient-card overflow-hidden">
        <div className="p-6 pb-3 flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Employee Compliance Overview</h3>
            <p className="text-xs text-muted-foreground">Risk-ranked sponsored workers</p>
          </div>
          <Link to="/workers" className="text-xs text-primary font-medium">View all workers</Link>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Visa Type</TableHead>
                <TableHead>Expiry</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Risk</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {workers.slice(0, 6).map((w) => (
                <TableRow key={w.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">
                    <Link to="/workers/$id" params={{ id: w.id }} className="hover:text-primary">{w.name}</Link>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{w.visaType}</TableCell>
                  <TableCell>{w.visaExpiry}</TableCell>
                  <TableCell className="text-muted-foreground">{w.department}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={
                      w.sponsorshipStatus === "Active" ? "bg-success/10 text-success border-success/20" :
                      w.sponsorshipStatus === "Pending" ? "bg-warning/10 text-warning border-warning/20" :
                      "bg-destructive/10 text-destructive border-destructive/20"
                    }>{w.sponsorshipStatus}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={
                      w.risk === "Low" ? "bg-success/10 text-success border-success/20" :
                      w.risk === "Medium" ? "bg-warning/10 text-warning border-warning/20" :
                      "bg-destructive/10 text-destructive border-destructive/20"
                    }>
                      <ShieldAlert className="size-3 mr-1" />{w.risk}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Audit feed */}
      <Card className="p-6 bg-gradient-card">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold">Audit-Ready Activity Feed</h3>
            <p className="text-xs text-muted-foreground">Every compliance action, timestamped</p>
          </div>
          <Link to="/audit" className="text-xs text-primary font-medium">Full log →</Link>
        </div>
        <div className="space-y-3">
          {auditLogs.slice(0, 5).map((l) => (
            <div key={l.id} className="flex gap-3 items-start text-sm">
              <div className="text-xs text-muted-foreground w-32 shrink-0">{l.timestamp}</div>
              <div className="size-2 rounded-full mt-1.5 shrink-0 bg-primary" />
              <div className="flex-1">
                <span className="font-medium">{l.user}</span>{" "}
                <span className="text-muted-foreground">{l.action}</span>
                {l.employee && <span className="text-foreground"> — {l.employee}</span>}
              </div>
              <Badge variant="outline" className={
                l.status === "success" ? "bg-success/10 text-success border-success/20" :
                l.status === "warning" ? "bg-warning/10 text-warning border-warning/20" :
                "bg-destructive/10 text-destructive border-destructive/20"
              }>{l.status}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
