import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { C as Card } from "./_ssr/card-BtiUI6Md.mjs";
import { B as Badge } from "./_ssr/badge-YM7oB01y.mjs";
import { B as Button } from "./_ssr/button-DjOZMqFS.mjs";
import { T as Table, d as TableHeader, e as TableRow, c as TableHead, a as TableBody, b as TableCell } from "./_ssr/table-CHAiceMg.mjs";
import { u as useAuth, a as useI18n } from "./_ssr/router-QpLTVvtc.mjs";
import { v as visaExpiryTrend, e as workforceStability, d as departmentBreakdown, a as alerts, w as workers, b as auditLogs } from "./_ssr/mock-data-CWbGGD-H.mjs";
import "./_libs/sonner.mjs";
import { A as Activity, $ as Users, C as Calendar, F as FileCheckCorner, Z as TriangleAlert, Y as TrendingUp, c as ArrowUpRight, V as ShieldCheck, U as ShieldAlert } from "./_libs/lucide-react.mjs";
import { e as ResponsiveContainer, a as AreaChart, X as XAxis, Y as YAxis, T as Tooltip, A as Area, d as RadialBarChart, R as RadialBar, b as BarChart, B as Bar, c as PieChart, P as Pie, C as Cell } from "./_libs/recharts.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
import "./_libs/isbot.mjs";
import "./_libs/class-variance-authority.mjs";
import "./_libs/clsx.mjs";
import "./_libs/radix-ui__react-slot.mjs";
import "./_libs/radix-ui__react-compose-refs.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/es-toolkit.mjs";
import "./_libs/reselect.mjs";
import "./_libs/react-is.mjs";
import "./_libs/tiny-invariant.mjs";
import "./_libs/d3-shape.mjs";
import "./_libs/d3-path.mjs";
import "./_libs/reduxjs__toolkit.mjs";
import "./_libs/redux.mjs";
import "./_libs/immer.mjs";
import "./_libs/redux-thunk.mjs";
import "./_libs/react-redux.mjs";
import "./_libs/use-sync-external-store.mjs";
import "./_libs/victory-vendor.mjs";
import "./_libs/d3-scale.mjs";
import "./_libs/internmap.mjs";
import "./_libs/d3-array.mjs";
import "./_libs/d3-time-format.mjs";
import "./_libs/d3-time.mjs";
import "./_libs/d3-interpolate.mjs";
import "./_libs/d3-color.mjs";
import "./_libs/d3-format.mjs";
import "./_libs/decimal.js-light.mjs";
import "./_libs/eventemitter3.mjs";
const COLORS = ["oklch(0.55 0.2 260)", "oklch(0.62 0.16 155)", "oklch(0.75 0.16 75)", "oklch(0.58 0.22 25)", "oklch(0.62 0.18 200)"];
const kpis = [{
  label: "Total Sponsored Workers",
  value: "247",
  icon: Users,
  trend: "+12 this month",
  color: "text-primary"
}, {
  label: "Expiring Visas (90d)",
  value: "18",
  icon: Calendar,
  trend: "3 critical",
  color: "text-warning"
}, {
  label: "Pending RTW Rechecks",
  value: "7",
  icon: FileCheckCorner,
  trend: "Due this week",
  color: "text-chart-5"
}, {
  label: "Compliance Alerts",
  value: "12",
  icon: TriangleAlert,
  trend: "2 high severity",
  color: "text-destructive"
}, {
  label: "Workforce Stability",
  value: "94%",
  icon: TrendingUp,
  trend: "+2% QoQ",
  color: "text-success"
}];
function Dashboard() {
  const {
    user
  } = useAuth();
  const {
    t
  } = useI18n();
  const licenceScore = 82;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl font-bold tracking-tight", children: [
          t("welcome"),
          user ? `, ${user.fullName.split(" ")[0]}` : "",
          " 👋"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Here's your compliance snapshot for today." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => {
          import("./_libs/sonner.mjs").then(({
            toast
          }) => toast.success("Downloaded compliance-report.pdf"));
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "size-4 mr-2" }),
          " Export report"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "bg-gradient-hero shadow-soft", children: "Add worker" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4", children: kpis.map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 bg-gradient-card hover:shadow-soft transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-10 rounded-lg bg-primary/10 grid place-items-center ${k.color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(k.icon, { className: "size-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4 text-muted-foreground" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: k.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: k.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-[11px] mt-2 ${k.color}`, children: k.trend })
    ] }, k.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 lg:col-span-2 bg-gradient-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Visa Expiry Trend" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Expiring vs renewed over time" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "Last 7 months" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: visaExpiryTrend, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "g1", x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.58 0.22 25)", stopOpacity: 0.4 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.58 0.22 25)", stopOpacity: 0 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "g2", x1: "0", y1: "0", x2: "0", y2: "1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.55 0.2 260)", stopOpacity: 0.4 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.55 0.2 260)", stopOpacity: 0 })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "month", stroke: "oklch(0.5 0.02 250)", fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "oklch(0.5 0.02 250)", fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            borderRadius: 8,
            border: "1px solid oklch(0.92 0.01 250)",
            background: "white"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "expiring", stroke: "oklch(0.58 0.22 25)", fill: "url(#g1)", strokeWidth: 2 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "renewed", stroke: "oklch(0.55 0.2 260)", fill: "url(#g2)", strokeWidth: 2 })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-gradient-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Sponsor Licence Health" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-2", children: "Live composite score" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RadialBarChart, { innerRadius: "70%", outerRadius: "100%", data: [{
            name: "score",
            value: licenceScore,
            fill: "oklch(0.62 0.16 155)"
          }], startAngle: 90, endAngle: -270, children: /* @__PURE__ */ jsxRuntimeExports.jsx(RadialBar, { background: true, dataKey: "value", cornerRadius: 20 }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold", children: licenceScore }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "out of 100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "mt-2 bg-success/10 text-success border-success/20", variant: "outline", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-3 mr-1" }),
              " Healthy"
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-1.5 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Reporting duties" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-success", children: "98%" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Record keeping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-success", children: "91%" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "RTW compliance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-warning", children: "76%" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-gradient-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-1", children: "Workforce Stability" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Retention by quarter" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BarChart, { data: workforceStability, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "quarter", stroke: "oklch(0.5 0.02 250)", fontSize: 12 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: "oklch(0.5 0.02 250)", fontSize: 12, domain: [80, 100] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            borderRadius: 8,
            border: "1px solid oklch(0.92 0.01 250)",
            background: "white"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "retention", fill: "oklch(0.55 0.2 260)", radius: [8, 8, 0, 0] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-gradient-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-1", children: "Department Breakdown" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Sponsored workers by team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 220, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Pie, { data: departmentBreakdown, dataKey: "value", nameKey: "name", innerRadius: 55, outerRadius: 85, paddingAngle: 2, children: departmentBreakdown.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: COLORS[i % COLORS.length] }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: {
            borderRadius: 8,
            border: "1px solid oklch(0.92 0.01 250)",
            background: "white"
          } })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-1 text-xs mt-2", children: departmentBreakdown.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-2 rounded-full", style: {
            background: COLORS[i % COLORS.length]
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: d.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto font-medium", children: d.value })
        ] }, d.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-gradient-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Recent Alerts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/alerts", className: "text-xs text-primary font-medium", children: "View all" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: alerts.slice(0, 4).map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 p-3 rounded-lg border bg-background/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-2 rounded-full mt-1.5 shrink-0 ${a.severity === "high" ? "bg-destructive" : a.severity === "medium" ? "bg-warning" : "bg-success"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium truncate", children: a.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground truncate", children: a.message }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-0.5", children: a.time })
          ] })
        ] }, a.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "bg-gradient-card overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 pb-3 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Employee Compliance Overview" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Risk-ranked sponsored workers" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/workers", className: "text-xs text-primary font-medium", children: "View all workers" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Employee" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Visa Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Expiry" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Department" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Risk" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: workers.slice(0, 6).map((w) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "hover:bg-muted/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-medium", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/workers/$id", params: {
            id: w.id
          }, className: "hover:text-primary", children: w.name }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground", children: w.visaType }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: w.visaExpiry }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground", children: w.department }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: w.sponsorshipStatus === "Active" ? "bg-success/10 text-success border-success/20" : w.sponsorshipStatus === "Pending" ? "bg-warning/10 text-warning border-warning/20" : "bg-destructive/10 text-destructive border-destructive/20", children: w.sponsorshipStatus }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: w.risk === "Low" ? "bg-success/10 text-success border-success/20" : w.risk === "Medium" ? "bg-warning/10 text-warning border-warning/20" : "bg-destructive/10 text-destructive border-destructive/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "size-3 mr-1" }),
            w.risk
          ] }) })
        ] }, w.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-gradient-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Audit-Ready Activity Feed" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Every compliance action, timestamped" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/audit", className: "text-xs text-primary font-medium", children: "Full log →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: auditLogs.slice(0, 5).map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground w-32 shrink-0", children: l.timestamp }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-2 rounded-full mt-1.5 shrink-0 bg-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: l.user }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: l.action }),
          l.employee && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
            " — ",
            l.employee
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: l.status === "success" ? "bg-success/10 text-success border-success/20" : l.status === "warning" ? "bg-warning/10 text-warning border-warning/20" : "bg-destructive/10 text-destructive border-destructive/20", children: l.status })
      ] }, l.id)) })
    ] })
  ] });
}
export {
  Dashboard as component
};
