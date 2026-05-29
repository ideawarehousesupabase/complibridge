import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { C as Card } from "./_ssr/card-BtiUI6Md.mjs";
import { B as Badge } from "./_ssr/badge-YM7oB01y.mjs";
import { B as Button } from "./_ssr/button-DjOZMqFS.mjs";
import { I as Input } from "./_ssr/input-D_U8fI25.mjs";
import { T as Table, d as TableHeader, e as TableRow, c as TableHead, a as TableBody, b as TableCell } from "./_ssr/table-CHAiceMg.mjs";
import { b as auditLogs } from "./_ssr/mock-data-CWbGGD-H.mjs";
import { toast } from "./_libs/sonner.mjs";
import { t as Download, S as Search } from "./_libs/lucide-react.mjs";
import "./_libs/class-variance-authority.mjs";
import "./_libs/clsx.mjs";
import "./_libs/radix-ui__react-slot.mjs";
import "./_libs/radix-ui__react-compose-refs.mjs";
import "./_libs/tailwind-merge.mjs";
import "./_libs/react-dom.mjs";
import "async_hooks";
import "stream";
import "util";
import "crypto";
function AuditPage() {
  const [q, setQ] = reactExports.useState("");
  const filtered = auditLogs.filter((l) => !q || l.user.toLowerCase().includes(q.toLowerCase()) || l.action.toLowerCase().includes(q.toLowerCase()) || l.employee?.toLowerCase().includes(q.toLowerCase()));
  function handleExport() {
    const headers = ["Timestamp", "User", "Action", "Employee", "Status"];
    const rows = filtered.map((l) => [l.timestamp, l.user, l.action, l.employee ?? "", l.status]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], {
      type: "text/csv"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "audit-logs.csv";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Downloaded audit-logs.csv");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold", children: "Audit Logs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Tamper-evident record of every compliance action." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: handleExport, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4 mr-2" }),
        " Export"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "p-4 bg-gradient-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "size-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Search logs…", value: q, onChange: (e) => setQ(e.target.value), className: "border-0 bg-muted/50" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "bg-gradient-card overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Timestamp" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "User" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Action" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Employee" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: "Status" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filtered.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { className: "hover:bg-muted/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "font-mono text-xs", children: l.timestamp }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: l.user }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: l.action }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-muted-foreground", children: l.employee ?? "—" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: l.status === "success" ? "bg-success/10 text-success border-success/20" : l.status === "warning" ? "bg-warning/10 text-warning border-warning/20" : "bg-destructive/10 text-destructive border-destructive/20", children: l.status }) })
      ] }, l.id)) })
    ] }) })
  ] });
}
export {
  AuditPage as component
};
