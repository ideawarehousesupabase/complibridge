import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { a as PublicHeader, P as PublicFooter } from "./PublicLayout-Cqu7voNg.mjs";
import { C as Card } from "./card-BtiUI6Md.mjs";
import { I as Input } from "./input-D_U8fI25.mjs";
import { B as Button, c as cn } from "./button-DjOZMqFS.mjs";
import { L as Label } from "./label-C8WJLhmR.mjs";
import { toast } from "../_libs/sonner.mjs";
import { M as Mail, Q as Phone, K as MapPin } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PublicHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-4 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold", children: "Talk to our team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Questions about your sponsor licence, pricing, or a demo? We typically respond within 1 business day." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8 max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [{
          icon: Mail,
          label: "Email",
          value: "hello@complibridge.ai"
        }, {
          icon: Phone,
          label: "Phone",
          value: "+44 20 7946 1010"
        }, {
          icon: MapPin,
          label: "Office",
          value: "1 King William Street, London EC4N 7AF"
        }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "p-5 flex items-center gap-4 bg-gradient-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-10 rounded-lg bg-primary/10 grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "size-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: c.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium", children: c.value })
          ] })
        ] }, c.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-6 bg-gradient-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-4", onSubmit: (e) => {
          e.preventDefault();
          toast.success("Thanks! We'll be in touch shortly.");
          e.target.reset();
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "First name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Last name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Work email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Company" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {})
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 5, required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full bg-gradient-hero shadow-soft", children: "Send message" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PublicFooter, {})
  ] });
}
export {
  Contact as component
};
