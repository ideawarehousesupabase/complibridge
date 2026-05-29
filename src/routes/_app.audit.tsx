import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { auditLogs } from "@/lib/mock-data";
import { Download, Search } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";


export const Route = createFileRoute("/_app/audit")({
  head: () => ({ meta: [{ title: "Audit Logs — CompliBridge AI" }] }),
  component: AuditPage,
});

function AuditPage() {
  const [q, setQ] = useState("");
  const filtered = auditLogs.filter((l) =>
    !q || l.user.toLowerCase().includes(q.toLowerCase()) || l.action.toLowerCase().includes(q.toLowerCase()) || l.employee?.toLowerCase().includes(q.toLowerCase())
  );

  function handleExport() {

    const headers = ["Timestamp", "User", "Action", "Employee", "Status"];
    const rows = filtered.map((l) => [l.timestamp, l.user, l.action, l.employee ?? "", l.status]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "audit-logs.csv"; a.click();
    URL.revokeObjectURL(url);
    toast.success("Downloaded audit-logs.csv");
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Audit Logs</h1>
          <p className="text-muted-foreground mt-1">Tamper-evident record of every compliance action.</p>
        </div>
        <Button variant="outline" size="sm" onClick={handleExport}><Download className="size-4 mr-2" /> Export</Button>
      </div>


      <Card className="p-4 bg-gradient-card">
        <div className="flex items-center gap-2">
          <Search className="size-4 text-muted-foreground" />
          <Input placeholder="Search logs…" value={q} onChange={(e) => setQ(e.target.value)} className="border-0 bg-muted/50" />
        </div>
      </Card>

      <Card className="bg-gradient-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Timestamp</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Employee</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((l) => (
              <TableRow key={l.id} className="hover:bg-muted/50">
                <TableCell className="font-mono text-xs">{l.timestamp}</TableCell>
                <TableCell>{l.user}</TableCell>
                <TableCell>{l.action}</TableCell>
                <TableCell className="text-muted-foreground">{l.employee ?? "—"}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={
                    l.status === "success" ? "bg-success/10 text-success border-success/20" :
                    l.status === "warning" ? "bg-warning/10 text-warning border-warning/20" :
                    "bg-destructive/10 text-destructive border-destructive/20"
                  }>{l.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
