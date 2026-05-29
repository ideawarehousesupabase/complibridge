import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { C as Card } from "./_ssr/card-BtiUI6Md.mjs";
import { B as Badge } from "./_ssr/badge-YM7oB01y.mjs";
import { B as Button } from "./_ssr/button-DjOZMqFS.mjs";
import { T as Tabs, b as TabsList, c as TabsTrigger, a as TabsContent } from "./_ssr/tabs-QL-0JTj_.mjs";
import { a as alerts } from "./_ssr/mock-data-CWbGGD-H.mjs";
import { toast } from "./_libs/sonner.mjs";
import { i as CheckCheck, I as Info, Z as TriangleAlert, n as CircleAlert, o as CircleCheck } from "./_libs/lucide-react.mjs";
import "./_libs/class-variance-authority.mjs";
import "./_libs/clsx.mjs";
import "./_libs/radix-ui__react-slot.mjs";
import "./_libs/radix-ui__react-compose-refs.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/radix-ui__react-tabs.mjs";
import "./_libs/radix-ui__primitive.mjs";
import "./_libs/radix-ui__react-context.mjs";
import "./_libs/radix-ui__react-roving-focus.mjs";
import "./_libs/radix-ui__react-collection.mjs";
import "./_libs/radix-ui__react-id.mjs";
import "./_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "./_libs/radix-ui__react-primitive.mjs";
import "./_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
import "./_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "./_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "./_libs/radix-ui__react-direction.mjs";
import "./_libs/radix-ui__react-presence.mjs";
const sevConfig = {
  high: {
    icon: CircleAlert,
    color: "bg-destructive/10 text-destructive border-destructive/20",
    dot: "bg-destructive"
  },
  medium: {
    icon: TriangleAlert,
    color: "bg-warning/10 text-warning border-warning/20",
    dot: "bg-warning"
  },
  low: {
    icon: Info,
    color: "bg-success/10 text-success border-success/20",
    dot: "bg-success"
  }
};
function AlertsPage() {
  const [resolved, setResolved] = reactExports.useState(/* @__PURE__ */ new Set());
  const sevCount = {
    high: alerts.filter((a) => a.severity === "high" && !resolved.has(a.id)).length,
    medium: alerts.filter((a) => a.severity === "medium" && !resolved.has(a.id)).length,
    low: alerts.filter((a) => a.severity === "low" && !resolved.has(a.id)).length
  };
  function resolveOne(id, title) {
    setResolved((prev) => new Set(prev).add(id));
    toast.success(`Resolved: ${title}`);
  }
  function resolveAll() {
    setResolved(new Set(alerts.map((a) => a.id)));
    toast.success("All alerts marked as resolved");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold", children: "Alerts & Notifications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Stay on top of every compliance event." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: resolveAll, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CheckCheck, { className: "size-4 mr-2" }),
        " Mark all read"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-4", children: ["high", "medium", "low"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-5 bg-gradient-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase text-muted-foreground tracking-wide", children: [
          s,
          " severity"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold mt-1", children: sevCount[s] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-3 rounded-full ${sevConfig[s].dot}` })
    ] }) }, s)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsTrigger, { value: "all", children: [
          "All (",
          alerts.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "visa", children: "Visa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "rtw", children: "RTW" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "doc", children: "Documents" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "compliance", children: "Compliance" })
      ] }),
      ["all", "visa", "rtw", "doc", "compliance"].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: tab, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-gradient-card divide-y overflow-hidden", children: alerts.filter((a) => tab === "all" || a.type === tab || tab === "compliance" && a.type === "renewal").map((a) => {
        const cfg = sevConfig[a.severity];
        const Icon = cfg.icon;
        const isResolved = resolved.has(a.id);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 flex gap-4 items-start hover:bg-muted/30 transition ${isResolved ? "opacity-60" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-10 rounded-lg grid place-items-center shrink-0 ${cfg.color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-medium ${isResolved ? "line-through" : ""}`, children: a.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: cfg.color, children: a.severity }),
              a.worker && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: a.worker }),
              isResolved && /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "bg-success/10 text-success border-success/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-3 mr-1" }),
                "Resolved"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: a.message }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: a.time })
          ] }),
          isResolved ? /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", disabled: true, children: "Resolved" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => resolveOne(a.id, a.title), children: "Resolve" })
        ] }, a.id);
      }) }) }, tab))
    ] })
  ] });
}
export {
  AlertsPage as component
};
