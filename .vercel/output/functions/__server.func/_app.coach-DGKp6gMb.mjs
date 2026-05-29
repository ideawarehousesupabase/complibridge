import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { C as Card } from "./_ssr/card-BtiUI6Md.mjs";
import { B as Button } from "./_ssr/button-DjOZMqFS.mjs";
import { I as Input } from "./_ssr/input-D_U8fI25.mjs";
import { A as Avatar, a as AvatarFallback } from "./_ssr/avatar-JBcQ2LmX.mjs";
import { c as coachScript } from "./_ssr/mock-data-CWbGGD-H.mjs";
import { a as useI18n } from "./_ssr/router-QpLTVvtc.mjs";
import "./_libs/sonner.mjs";
import { d as Bot, W as Sparkles, _ as User, R as Send } from "./_libs/lucide-react.mjs";
import "./_libs/radix-ui__react-slot.mjs";
import "./_libs/radix-ui__react-compose-refs.mjs";
import "./_libs/class-variance-authority.mjs";
import "./_libs/clsx.mjs";
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
function answer(input) {
  const lower = input.toLowerCase();
  const match = coachScript.find((s) => lower.includes(s.q.split(" ")[0]) || lower.includes(s.q));
  if (match) return match.a;
  return "Great question! I can help with UK workplace culture, employment rights, visa conditions, workplace expectations, reporting concerns, or performance management. Try asking about one of these topics.";
}
function CoachPage() {
  const {
    t
  } = useI18n();
  const [messages, setMessages] = reactExports.useState([{
    role: "bot",
    text: t("onboarding_intro")
  }]);
  const [input, setInput] = reactExports.useState("");
  const scrollRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [messages]);
  const send = (text) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, {
      role: "user",
      text
    }]);
    setInput("");
    setTimeout(() => setMessages((m) => [...m, {
      role: "bot",
      text: answer(text)
    }]), 600);
  };
  const suggestions = ["Tell me about UK workplace culture", "What are my employment rights?", "Visa conditions explained", "How do I report concerns?"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 h-[calc(100vh-9rem)] flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-xl bg-gradient-hero grid place-items-center shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "size-6 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold", children: "AI Onboarding Coach" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Conversational guidance for sponsored workers" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-auto text-xs flex items-center gap-1 text-success", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-3" }),
        " Online"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "flex-1 flex flex-col bg-gradient-card overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollRef, className: "flex-1 overflow-y-auto p-6 space-y-4", children: messages.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { className: "size-8 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { className: m.role === "bot" ? "bg-gradient-hero text-primary-foreground" : "bg-muted", children: m.role === "bot" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${m.role === "bot" ? "bg-background border" : "bg-primary text-primary-foreground"}`, children: m.text })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t p-4 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: suggestions.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", className: "text-xs", onClick: () => send(s), children: s }, s)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          send(input);
        }, className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: input, onChange: (e) => setInput(e.target.value), placeholder: "Ask your onboarding coach anything…", className: "bg-background" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "bg-gradient-hero shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-4" }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  CoachPage as component
};
