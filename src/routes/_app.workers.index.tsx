import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { workers as initialWorkers, type Worker, type RiskLevel } from "@/lib/mock-data";
import { Search, Filter, Download, Eye, ShieldAlert, MoreHorizontal, Pencil, Mail, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/_app/workers/")({
  head: () => ({ meta: [{ title: "Sponsored Workers — CompliBridge AI" }] }),
  component: WorkersPage,
});

function WorkersPage() {
  const [list, setList] = useState<Worker[]>(initialWorkers);
  const [search, setSearch] = useState("");
  const [risk, setRisk] = useState("all");
  const [dept, setDept] = useState("all");
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", visaType: "Skilled Worker", visaExpiry: "",
    department: "Engineering", role: "", nationality: "", risk: "Low" as RiskLevel,
  });

  const filtered = list.filter((w) => {
    if (search && !w.name.toLowerCase().includes(search.toLowerCase()) && !w.email.toLowerCase().includes(search.toLowerCase())) return false;
    if (risk !== "all" && w.risk !== risk) return false;
    if (dept !== "all" && w.department !== dept) return false;
    return true;
  });

  const depts = Array.from(new Set(list.map((w) => w.department)));

  function handleExport() {
    const headers = ["Name", "Email", "Visa Type", "Expiry", "Department", "Status", "Risk"];
    const rows = filtered.map((w) => [w.name, w.email, w.visaType, w.visaExpiry, w.department, w.sponsorshipStatus, w.risk]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = "workers.csv"; a.click();
    URL.revokeObjectURL(url);
    toast.success("Downloaded workers.csv");
  }

  function handleAdd() {
    if (!form.name || !form.email) { toast.error("Name and email are required"); return; }
    const newWorker: Worker = {
      id: `w${Date.now()}`,
      name: form.name,
      email: form.email,
      visaType: form.visaType,
      visaExpiry: form.visaExpiry || "2026-12-31",
      department: form.department,
      role: form.role || "—",
      sponsorshipStatus: "Pending",
      risk: form.risk,
      onboarding: 0,
      nationality: form.nationality || "—",
      startDate: new Date().toISOString().slice(0, 10),
    };
    setList((prev) => [newWorker, ...prev]);
    setOpen(false);
    setForm({ name: "", email: "", visaType: "Skilled Worker", visaExpiry: "", department: "Engineering", role: "", nationality: "", risk: "Low" });
    toast.success(`${newWorker.name} added to sponsored workers`);
  }

  function handleAction(action: string, name: string) {
    if (action === "delete") {
      setList((prev) => prev.filter((w) => w.name !== name));
      toast.success(`${name} removed`);
    } else {
      toast.success(`${action} — ${name}`);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Sponsored Workers</h1>
          <p className="text-muted-foreground mt-1">Manage your sponsored workforce and compliance status.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleExport}><Download className="size-4 mr-2" /> Export CSV</Button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-gradient-hero shadow-soft">Add worker</Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>Add sponsored worker</DialogTitle>
                <DialogDescription>Add a new worker to your sponsorship register.</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <Label>Full name</Label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="col-span-2">
                  <Label>Email</Label>
                  <Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <Label>Visa type</Label>
                  <Select value={form.visaType} onValueChange={(v) => setForm({ ...form, visaType: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Skilled Worker">Skilled Worker</SelectItem>
                      <SelectItem value="Health & Care">Health & Care</SelectItem>
                      <SelectItem value="Global Talent">Global Talent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Visa expiry</Label>
                  <Input type="date" value={form.visaExpiry} onChange={(e) => setForm({ ...form, visaExpiry: e.target.value })} />
                </div>
                <div>
                  <Label>Department</Label>
                  <Input value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} />
                </div>
                <div>
                  <Label>Role</Label>
                  <Input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} />
                </div>
                <div>
                  <Label>Nationality</Label>
                  <Input value={form.nationality} onChange={(e) => setForm({ ...form, nationality: e.target.value })} />
                </div>
                <div>
                  <Label>Risk</Label>
                  <Select value={form.risk} onValueChange={(v) => setForm({ ...form, risk: v as RiskLevel })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Low">Low</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={handleAdd} className="bg-gradient-hero shadow-soft">Add worker</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card className="p-4 bg-gradient-card">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 flex-1 min-w-[220px]">
            <Search className="size-4 text-muted-foreground" />
            <Input placeholder="Search name or email…" value={search} onChange={(e) => setSearch(e.target.value)} className="border-0 bg-muted/50" />
          </div>
          <Select value={risk} onValueChange={setRisk}>
            <SelectTrigger className="w-[160px]"><Filter className="size-4 mr-1" /><SelectValue placeholder="Risk" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All risk levels</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="High">High</SelectItem>
            </SelectContent>
          </Select>
          <Select value={dept} onValueChange={setDept}>
            <SelectTrigger className="w-[180px]"><SelectValue placeholder="Department" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All departments</SelectItem>
              {depts.map((d) => <SelectItem key={d} value={d}>{d}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </Card>

      <Card className="bg-gradient-card overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee</TableHead>
                <TableHead>Visa Type</TableHead>
                <TableHead>Expiry</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Risk</TableHead>
                <TableHead>Onboarding</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((w) => (
                <TableRow key={w.id} className="hover:bg-muted/50">
                  <TableCell>
                    <div className="font-medium">{w.name}</div>
                    <div className="text-xs text-muted-foreground">{w.email}</div>
                  </TableCell>
                  <TableCell>{w.visaType}</TableCell>
                  <TableCell>{w.visaExpiry}</TableCell>
                  <TableCell className="text-muted-foreground">{w.department}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={
                      w.sponsorshipStatus === "Active" ? "bg-success/10 text-success border-success/20" :
                      w.sponsorshipStatus === "Pending" ? "bg-warning/10 text-warning border-warning/20" :
                      "bg-destructive/10 text-destructive border-destructive/20"
                    }>{w.sponsorshipStatus}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={
                      w.risk === "Low" ? "bg-success/10 text-success border-success/20" :
                      w.risk === "Medium" ? "bg-warning/10 text-warning border-warning/20" :
                      "bg-destructive/10 text-destructive border-destructive/20"
                    }><ShieldAlert className="size-3 mr-1" />{w.risk}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-20 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-gradient-hero" style={{ width: `${w.onboarding}%` }} />
                      </div>
                      <span className="text-xs text-muted-foreground">{w.onboarding}%</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="sm" asChild>
                        <Link to="/workers/$id" params={{ id: w.id }}><Eye className="size-4" /></Link>
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm"><MoreHorizontal className="size-4" /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleAction("Edit profile", w.name)}>
                            <Pencil className="size-4 mr-2" /> Edit profile
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleAction("Message sent", w.name)}>
                            <Mail className="size-4 mr-2" /> Send message
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleAction("RTW recheck scheduled", w.name)}>
                            <ShieldAlert className="size-4 mr-2" /> Schedule RTW recheck
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => handleAction("delete", w.name)} className="text-destructive">
                            <Trash2 className="size-4 mr-2" /> Remove worker
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow><TableCell colSpan={8} className="text-center text-muted-foreground py-12">No workers match your filters.</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
