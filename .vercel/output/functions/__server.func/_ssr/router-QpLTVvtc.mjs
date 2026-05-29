import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, e as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { Toaster as Toaster$1 } from "../_libs/sonner.mjs";
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
const appCss = "/assets/styles-wr0deZkx.css";
const Ctx$1 = reactExports.createContext({ user: null, setUser: () => {
}, logout: () => {
} });
const SESSION_KEY = "complibridge_session";
function AuthProvider({ children }) {
  const [user, setUserState] = reactExports.useState(null);
  reactExports.useEffect(() => {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      if (raw) setUserState(JSON.parse(raw));
    } catch {
    }
  }, []);
  const setUser = (u) => {
    setUserState(u);
    if (u) localStorage.setItem(SESSION_KEY, JSON.stringify(u));
    else localStorage.removeItem(SESSION_KEY);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ctx$1.Provider, { value: { user, setUser, logout: () => setUser(null) }, children });
}
const useAuth = () => reactExports.useContext(Ctx$1);
const dict = {
  en: {
    dashboard: "Dashboard",
    workers: "Sponsored Workers",
    alerts: "Alerts",
    audit: "Audit Logs",
    coach: "AI Onboarding Coach",
    portal: "Worker Portal",
    settings: "Settings",
    logout: "Logout",
    welcome: "Welcome back",
    onboarding_intro: "Hello! I'm your onboarding coach. Ask me anything about UK workplace culture, your visa, or your rights."
  }
};
const Ctx = reactExports.createContext({ lang: "en", setLang: () => {
}, t: (k) => k });
function I18nProvider({ children }) {
  const [lang, setLangState] = reactExports.useState("en");
  reactExports.useEffect(() => {
    const stored = localStorage.getItem("complibridge_lang");
    if (stored && dict[stored]) setLangState(stored);
  }, []);
  const setLang = (l) => {
    setLangState(l);
    localStorage.setItem("complibridge_lang", l);
  };
  const t = (k) => dict[lang][k] ?? dict.en[k] ?? k;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Ctx.Provider, { value: { lang, setLang, t }, children });
}
const useI18n = () => reactExports.useContext(Ctx);
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90", children: "Go home" })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Try refreshing the page." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        router2.invalidate();
        reset();
      }, className: "rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground", children: "Try again" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-md border px-4 py-2 text-sm", children: "Go home" })
    ] })
  ] }) });
}
const Route$e = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "CompliBridge AI — UK Immigration Compliance Platform" },
      { name: "description", content: "AI-powered immigration compliance & sponsored worker management for UK employers." },
      { property: "og:title", content: "CompliBridge AI" },
      { property: "og:description", content: "AI-powered immigration compliance for UK sponsors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@CompliBridgeAI" }
    ],
    links: [{ rel: "stylesheet", href: appCss }]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$e.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AuthProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(I18nProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] }) }) });
}
const $$splitComponentImporter$d = () => import("./signup-K_CIzx3A.mjs");
const Route$d = createFileRoute("/signup")({
  head: () => ({
    meta: [{
      title: "Sign up — CompliBridge AI"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./login-BceX7MsL.mjs");
const Route$c = createFileRoute("/login")({
  head: () => ({
    meta: [{
      title: "Sign in — CompliBridge AI"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./contact-Cg3ByjNh.mjs");
const Route$b = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — CompliBridge AI"
    }, {
      name: "description",
      content: "Get in touch with the CompliBridge AI team."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./about-Y_8jwUQj.mjs");
const Route$a = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "Platform — CompliBridge AI"
    }, {
      name: "description",
      content: "How CompliBridge AI helps UK sponsors automate immigration compliance."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("../_app-CvANetfy.mjs");
const Route$9 = createFileRoute("/_app")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./index-rDJtWVJ8.mjs");
const Route$8 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "CompliBridge AI — UK Immigration Compliance Platform"
    }, {
      name: "description",
      content: "Automate sponsor licence compliance, visa monitoring, and Right-to-Work checks for UK employers."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("../_app.workers-BKFvpwwd.mjs");
const Route$7 = createFileRoute("/_app/workers")({
  head: () => ({
    meta: [{
      title: "Sponsored Workers — CompliBridge AI"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("../_app.settings-BZYbq6uv.mjs");
const Route$6 = createFileRoute("/_app/settings")({
  head: () => ({
    meta: [{
      title: "Settings — CompliBridge AI"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("../_app.portal-BhdKqpi2.mjs");
const Route$5 = createFileRoute("/_app/portal")({
  head: () => ({
    meta: [{
      title: "Worker Portal — CompliBridge AI"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("../_app.dashboard-BZdy6-sq.mjs");
const Route$4 = createFileRoute("/_app/dashboard")({
  head: () => ({
    meta: [{
      title: "Dashboard — CompliBridge AI"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("../_app.coach-DGKp6gMb.mjs");
const Route$3 = createFileRoute("/_app/coach")({
  head: () => ({
    meta: [{
      title: "AI Onboarding Coach — CompliBridge AI"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("../_app.audit-BQU6W6gv.mjs");
const Route$2 = createFileRoute("/_app/audit")({
  head: () => ({
    meta: [{
      title: "Audit Logs — CompliBridge AI"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("../_app.alerts-CcRxS72E.mjs");
const Route$1 = createFileRoute("/_app/alerts")({
  head: () => ({
    meta: [{
      title: "Alerts — CompliBridge AI"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("../_app.workers._id-DkoZUoT1.mjs");
const Route = createFileRoute("/_app/workers/$id")({
  head: () => ({
    meta: [{
      title: "Worker Profile — CompliBridge AI"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SignupRoute = Route$d.update({
  id: "/signup",
  path: "/signup",
  getParentRoute: () => Route$e
});
const LoginRoute = Route$c.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => Route$e
});
const ContactRoute = Route$b.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$e
});
const AboutRoute = Route$a.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$e
});
const AppRoute = Route$9.update({
  id: "/_app",
  getParentRoute: () => Route$e
});
const IndexRoute = Route$8.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$e
});
const AppWorkersRoute = Route$7.update({
  id: "/workers",
  path: "/workers",
  getParentRoute: () => AppRoute
});
const AppSettingsRoute = Route$6.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => AppRoute
});
const AppPortalRoute = Route$5.update({
  id: "/portal",
  path: "/portal",
  getParentRoute: () => AppRoute
});
const AppDashboardRoute = Route$4.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => AppRoute
});
const AppCoachRoute = Route$3.update({
  id: "/coach",
  path: "/coach",
  getParentRoute: () => AppRoute
});
const AppAuditRoute = Route$2.update({
  id: "/audit",
  path: "/audit",
  getParentRoute: () => AppRoute
});
const AppAlertsRoute = Route$1.update({
  id: "/alerts",
  path: "/alerts",
  getParentRoute: () => AppRoute
});
const AppWorkersIdRoute = Route.update({
  id: "/$id",
  path: "/$id",
  getParentRoute: () => AppWorkersRoute
});
const AppWorkersRouteChildren = {
  AppWorkersIdRoute
};
const AppWorkersRouteWithChildren = AppWorkersRoute._addFileChildren(
  AppWorkersRouteChildren
);
const AppRouteChildren = {
  AppAlertsRoute,
  AppAuditRoute,
  AppCoachRoute,
  AppDashboardRoute,
  AppPortalRoute,
  AppSettingsRoute,
  AppWorkersRoute: AppWorkersRouteWithChildren
};
const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AppRoute: AppRouteWithChildren,
  AboutRoute,
  ContactRoute,
  LoginRoute,
  SignupRoute
};
const routeTree = Route$e._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  useI18n as a,
  router as r,
  useAuth as u
};
