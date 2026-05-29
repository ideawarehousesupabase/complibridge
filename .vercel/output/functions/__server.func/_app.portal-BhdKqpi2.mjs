import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { C as Card } from "./_ssr/card-BtiUI6Md.mjs";
import { B as Badge } from "./_ssr/badge-YM7oB01y.mjs";
import { B as Button } from "./_ssr/button-DjOZMqFS.mjs";
import { A as Avatar, a as AvatarFallback } from "./_ssr/avatar-JBcQ2LmX.mjs";
import { u as useAuth } from "./_ssr/router-QpLTVvtc.mjs";
import { p as portalModules, a as alerts } from "./_ssr/mock-data-CWbGGD-H.mjs";
import { toast } from "./_libs/sonner.mjs";
import { C as Calendar, F as FileCheckCorner, o as CircleCheck, p as CirclePlay, Z as TriangleAlert, r as Clock } from "./_libs/lucide-react.mjs";
import "./_libs/class-variance-authority.mjs";
import "./_libs/clsx.mjs";
import "./_libs/radix-ui__react-slot.mjs";
import "./_libs/radix-ui__react-compose-refs.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/radix-ui__react-avatar.mjs";
import "./_libs/radix-ui__react-context.mjs";
import "./_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "./_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "./_libs/radix-ui__react-primitive.mjs";
import "./_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
import "./_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "./_libs/use-sync-external-store.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/tanstack__react-router.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/isbot.mjs";
function PortalPage() {
  const {
    user
  } = useAuth();
  const [modules, setModules] = reactExports.useState(portalModules);
  function handleModule(id) {
    setModules((prev) => prev.map((m) => {
      if (m.id !== id) return m;
      if (m.progress === 100) {
        toast.success(`Reviewing: ${m.title}`);
        return m;
      }
      const next = Math.min(100, m.progress + (m.progress === 0 ? 25 : 25));
      toast.success(next === 100 ? `Completed: ${m.title}` : `Progress saved: ${m.title} (${next}%)`);
      return {
        ...m,
        progress: next
      };
    }));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-gradient-hero text-primary-foreground shadow-glow overflow-hidden relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -right-20 size-64 rounded-full bg-white/10 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "size-16 ring-2 ring-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-white/20 text-primary-foreground text-xl", children: user?.fullName?.[0] ?? "W" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-80", children: "Welcome to your worker portal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold", children: user?.fullName ?? "Sponsored Worker" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 bg-gradient-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "size-5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-success/10 text-success border-success/20", variant: "outline", children: "Active" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Visa expiry" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold mt-1", children: "2026-03-14" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "9 months remaining" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 bg-gradient-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileCheckCorner, { className: "size-5 text-chart-5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "Scheduled" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Next RTW recheck" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold mt-1", children: "2025-08-15" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "in 12 weeks" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 bg-gradient-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-5 text-success" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-success/10 text-success border-success/20", children: "On track" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Onboarding" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold mt-1", children: "76%" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "3 of 5 modules done" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-gradient-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-4", children: "Your Onboarding Modules" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: modules.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 p-3 rounded-lg border bg-background/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-10 rounded-lg grid place-items-center shrink-0 ${m.progress === 100 ? "bg-success/15 text-success" : m.progress > 0 ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`, children: m.progress === 100 ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "size-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm", children: m.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 rounded-full bg-muted mt-2 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-hero", style: {
            width: `${m.progress}%`
          } }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", onClick: () => handleModule(m.id), children: m.progress === 100 ? "Review" : m.progress > 0 ? "Continue" : "Start" })
      ] }, m.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-6 bg-gradient-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold mb-4 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "size-4 text-warning" }),
        " Compliance Reminders"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: alerts.slice(0, 3).map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start text-sm py-2 border-b last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-4 text-muted-foreground mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: a.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: a.message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: a.time })
      ] }, a.id)) })
    ] })
  ] });
}
export {
  PortalPage as component
};
