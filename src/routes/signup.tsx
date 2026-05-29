import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShieldCheck, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { createUser } from "@/lib/firebase";
import { useAuth } from "@/lib/auth-context";
import { toast } from "sonner";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Sign up — CompliBridge AI" }] }),
  component: Signup,
});

function Signup() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);
  const [form, setForm] = useState({ fullName: "", companyName: "", email: "", password: "", role: "HR Manager" });

  const upd = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    try {
      const u = await createUser(form);
      const { password: _pw, ...session } = u;
      setUser(session);
      toast.success("Account created!");
      navigate({ to: "/dashboard" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Signup failed");
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="hidden md:flex bg-gradient-hero relative overflow-hidden p-12 flex-col justify-between text-primary-foreground">
        <Link to="/" className="flex items-center gap-2 relative">
          <div className="size-10 rounded-lg bg-white/15 backdrop-blur grid place-items-center"><ShieldCheck className="size-5" /></div>
          <span className="font-bold text-lg">CompliBridge AI</span>
        </Link>
        <div className="relative">
          <h2 className="text-4xl font-bold leading-tight">Start your free trial today.</h2>
          <p className="mt-4 text-primary-foreground/80">No credit card required. Set up your compliance workspace in minutes.</p>
        </div>
        <div className="relative text-sm opacity-70">© 2026 CompliBridge AI</div>
        <div className="absolute -bottom-32 -right-32 size-96 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="flex items-center justify-center p-6 bg-background">
        <Card className="w-full max-w-md p-8 shadow-soft">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-sm text-muted-foreground mt-1">Get started with CompliBridge AI</p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div><Label>Full name</Label><Input value={form.fullName} onChange={(e) => upd("fullName", e.target.value)} required /></div>
            <div><Label>Company name</Label><Input value={form.companyName} onChange={(e) => upd("companyName", e.target.value)} required /></div>
            <div><Label>Work email</Label><Input type="email" value={form.email} onChange={(e) => upd("email", e.target.value)} required /></div>
            <div>
              <Label>Password</Label>
              <div className="relative">
                <Input
                  type={showPw ? "text" : "password"}
                  minLength={6}
                  value={form.password}
                  onChange={(e) => upd("password", e.target.value)}
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((s) => !s)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
                  aria-label={showPw ? "Hide password" : "Show password"}
                >
                  {showPw ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-1">At least 6 characters.</p>
            </div>
            <div>
              <Label>Role</Label>
              <Select value={form.role} onValueChange={(v) => upd("role", v)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="HR Manager">HR Manager</SelectItem>
                  <SelectItem value="Compliance Officer">Compliance Officer</SelectItem>
                  <SelectItem value="Senior Management">Senior Management</SelectItem>
                  <SelectItem value="Auditor">Auditor</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" disabled={loading} className="w-full bg-gradient-hero shadow-soft">
              {loading ? "Creating…" : "Create account"}
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-6 text-center">
            Already have an account? <Link to="/login" className="text-primary font-medium">Sign in</Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
