import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as PublicHeader, P as PublicFooter } from "./PublicLayout-Cqu7voNg.mjs";
import { C as Card } from "./card-BtiUI6Md.mjs";
import { B as Badge } from "./badge-YM7oB01y.mjs";
import { V as ShieldCheck, d as Bot, s as Cloud, D as Database, a0 as Workflow, B as Bell, F as FileCheckCorner, g as ChartColumn, $ as Users } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
import "../_libs/isbot.mjs";
import "./button-DjOZMqFS.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PublicHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "mb-4", children: "About the platform" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold", children: "Built for UK sponsor licence holders" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: "CompliBridge AI brings together immigration compliance, workforce management, and onboarding into a single intelligent platform. Designed alongside HR leaders, compliance officers, and immigration solicitors." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6 mt-16", children: [{
        icon: ShieldCheck,
        t: "Compliance First",
        d: "Engineered to match Home Office sponsor licence guidance and RTW requirements."
      }, {
        icon: Bot,
        t: "AI-Augmented",
        d: "Smart triage of alerts, conversational onboarding, and predictive risk scoring."
      }, {
        icon: Cloud,
        t: "Cloud Native",
        d: "Enterprise-grade security, GDPR-compliant, hosted in UK data centres."
      }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-gradient-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "size-8 text-primary mb-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-lg", children: b.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: b.d })
      ] }, b.t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold text-center mb-10", children: "How it works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 gap-6", children: [{
          icon: Database,
          t: "1. Import workers",
          d: "CSV upload or HRIS sync."
        }, {
          icon: Workflow,
          t: "2. Auto-monitor",
          d: "Visa, RTW, and document checks."
        }, {
          icon: Bell,
          t: "3. Get alerts",
          d: "Severity-ranked notifications."
        }, {
          icon: FileCheckCorner,
          t: "4. Stay audit-ready",
          d: "Export reports anytime."
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 mx-auto rounded-2xl bg-gradient-hero grid place-items-center shadow-soft mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "size-6 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: s.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: s.d })
        ] }, s.t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 grid md:grid-cols-2 gap-10 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold", children: "Features at a glance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-3", children: "A complete toolkit for HR Managers, Compliance Officers, Senior Management, and Auditors." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3", children: [
          ["Real-time sponsor licence health scoring", "Worker visa expiry & renewal tracking", "Right-to-Work recheck scheduling", "AI onboarding coach for new joiners", "Audit-ready timestamped activity logs", "Multilingual worker self-service portal", "Role-based dashboards & analytics"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "size-4 text-primary mt-1" }),
            " ",
            f
          ] }, f)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-4 text-primary mt-1" }),
            " Designed for 10–10,000 sponsored workers"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PublicFooter, {})
  ] });
}
export {
  About as component
};
