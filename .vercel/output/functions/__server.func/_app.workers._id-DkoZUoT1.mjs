import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { d as useParams, L as Link } from "./_libs/tanstack__react-router.mjs";
import { C as Card } from "./_ssr/card-BtiUI6Md.mjs";
import { B as Badge } from "./_ssr/badge-YM7oB01y.mjs";
import { B as Button } from "./_ssr/button-DjOZMqFS.mjs";
import { A as Avatar, a as AvatarFallback } from "./_ssr/avatar-JBcQ2LmX.mjs";
import { T as Tabs, b as TabsList, c as TabsTrigger, a as TabsContent } from "./_ssr/tabs-QL-0JTj_.mjs";
import { w as workers, b as auditLogs } from "./_ssr/mock-data-CWbGGD-H.mjs";
import { toast } from "./_libs/sonner.mjs";
import { a as ArrowLeft, M as Mail, K as MapPin, C as Calendar, e as Briefcase, o as CircleCheck, r as Clock, w as FileText, t as Download } from "./_libs/lucide-react.mjs";
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
import "./_libs/radix-ui__react-avatar.mjs";
import "./_libs/radix-ui__react-context.mjs";
import "./_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "./_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "./_libs/radix-ui__react-primitive.mjs";
import "./_libs/@radix-ui/react-use-is-hydrated+[...].mjs";
import "./_libs/use-sync-external-store.mjs";
import "./_libs/radix-ui__react-tabs.mjs";
import "./_libs/radix-ui__primitive.mjs";
import "./_libs/radix-ui__react-roving-focus.mjs";
import "./_libs/radix-ui__react-collection.mjs";
import "./_libs/radix-ui__react-id.mjs";
import "./_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "./_libs/radix-ui__react-direction.mjs";
import "./_libs/radix-ui__react-presence.mjs";
function WorkerProfile() {
  const {
    id
  } = useParams({
    from: "/_app/workers/$id"
  });
  const w = workers.find((x) => x.id === id);
  if (!w) return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Worker not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/workers", className: "text-primary mt-3 inline-block", children: "← Back to workers" })
  ] });
  const docs = [{
    name: "Passport.pdf",
    uploaded: "2024-01-12",
    status: "Verified"
  }, {
    name: "Visa-BRP.pdf",
    uploaded: "2024-01-12",
    status: "Verified"
  }, {
    name: "Right-to-Work-Evidence.pdf",
    uploaded: "2024-01-14",
    status: "Verified"
  }, {
    name: "Contract-of-Employment.pdf",
    uploaded: "2024-01-15",
    status: "Verified"
  }, {
    name: "Qualifications.pdf",
    uploaded: "2024-01-20",
    status: "Pending"
  }];
  const timeline = [{
    date: "2024-01-10",
    event: "Sponsorship application submitted",
    status: "complete"
  }, {
    date: "2024-01-15",
    event: "CoS issued",
    status: "complete"
  }, {
    date: "2024-01-28",
    event: "Visa granted",
    status: "complete"
  }, {
    date: "2024-02-05",
    event: "Started employment",
    status: "complete"
  }, {
    date: "2024-08-05",
    event: "6-month RTW recheck",
    status: "complete"
  }, {
    date: "2025-02-05",
    event: "Annual review",
    status: "complete"
  }, {
    date: "2025-07-01",
    event: "Visa renewal window",
    status: "pending"
  }];
  const employeeLogs = auditLogs.filter((l) => l.employee === w.name);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/workers", className: "inline-flex items-center text-sm text-muted-foreground hover:text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4 mr-1" }),
      " Back to workers"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-gradient-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-6 items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "size-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: "bg-gradient-hero text-primary-foreground text-2xl", children: w.name.split(" ").map((n) => n[0]).join("") }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: w.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
            w.role,
            " · ",
            w.department
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2 mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "bg-success/10 text-success border-success/20", children: w.sponsorshipStatus }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: w.risk === "Low" ? "bg-success/10 text-success border-success/20" : w.risk === "Medium" ? "bg-warning/10 text-warning border-warning/20" : "bg-destructive/10 text-destructive border-destructive/20", children: [
              w.risk,
              " risk"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: w.visaType })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: () => toast.success(`Message sent to ${w.name}`), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4 mr-2" }),
          " Message"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "bg-gradient-hero shadow-soft", onClick: () => toast.success("Edit profile (demo)"), children: "Edit profile" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "overview", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "overview", children: "Overview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "timeline", children: "Compliance Timeline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "documents", children: "Documents" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "activity", children: "Activity" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsContent, { value: "overview", className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 bg-gradient-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4" }),
              " Personal"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "text-sm space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground text-xs", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: w.email })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground text-xs", children: "Nationality" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: w.nationality })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground text-xs", children: "Date of Birth" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: "1990-05-22" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 bg-gradient-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "size-4" }),
              " Visa"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "text-sm space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground text-xs", children: "Type" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: w.visaType })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground text-xs", children: "Expiry" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-medium", children: w.visaExpiry })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground text-xs", children: "CoS Number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("dd", { children: [
                  "C2",
                  w.id.slice(1),
                  "E9F4A"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 bg-gradient-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "size-4" }),
              " Employment"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "text-sm space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground text-xs", children: "Role" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: w.role })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground text-xs", children: "Department" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: w.department })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground text-xs", children: "Start Date" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: w.startDate })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 bg-gradient-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-3", children: "Onboarding Progress" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-hero", style: {
            width: `${w.onboarding}%`
          } }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-2", children: [
            w.onboarding,
            "% complete"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "timeline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-gradient-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: timeline.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-8 rounded-full grid place-items-center shrink-0 ${t.status === "complete" ? "bg-success/15 text-success" : "bg-warning/15 text-warning"}`, children: t.status === "complete" ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "size-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 pb-4 border-b last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm", children: t.event }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.date })
        ] })
      ] }, i)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "documents", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-gradient-card overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y", children: docs.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-lg bg-primary/10 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-5 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium text-sm", children: d.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
            "Uploaded ",
            d.uploaded
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: d.status === "Verified" ? "bg-success/10 text-success border-success/20" : "bg-warning/10 text-warning border-warning/20", children: d.status }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "sm", onClick: () => toast.success(`Downloaded ${d.name}`), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4" }) })
      ] }, d.name)) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "activity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-gradient-card", children: employeeLogs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "No activity yet for this worker." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: employeeLogs.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm py-2 border-b last:border-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: l.action }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
            l.user,
            " · ",
            l.timestamp
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: l.status })
      ] }, l.id)) }) }) })
    ] })
  ] });
}
export {
  WorkerProfile as component
};
