import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/lib/auth-context";
import { useI18n, type Lang } from "@/lib/i18n";
import { toast } from "sonner";

export const Route = createFileRoute("/_app/settings")({
  head: () => ({ meta: [{ title: "Settings — CompliBridge AI" }] }),
  component: SettingsPage,
});

function SettingsPage() {
  const { user } = useAuth();
  const { lang, setLang } = useI18n();
  return (
    <div className="space-y-6 max-w-3xl">
      <h1 className="text-3xl font-bold">Settings</h1>

      <Card className="p-6 bg-gradient-card">
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="size-16">
            <AvatarFallback className="bg-gradient-hero text-primary-foreground text-xl">
              {user?.fullName?.split(" ").map((n) => n[0]).join("").slice(0, 2) ?? "U"}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg">{user?.fullName}</h3>
            <p className="text-sm text-muted-foreground">{user?.role} · {user?.companyName}</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div><Label>Full name</Label><Input defaultValue={user?.fullName} /></div>
          <div><Label>Email</Label><Input defaultValue={user?.email} /></div>
          <div><Label>Company</Label><Input defaultValue={user?.companyName} /></div>
          <div><Label>Role</Label><Input defaultValue={user?.role} disabled /></div>
        </div>
        <Button className="mt-4 bg-gradient-hero shadow-soft" onClick={() => toast.success("Profile updated")}>Save changes</Button>
      </Card>

      <Card className="p-6 bg-gradient-card">
        <h3 className="font-semibold mb-4">Preferences</h3>
        <div className="space-y-4">
          <div>
            <Label>Language</Label>
            <Select value={lang} onValueChange={(v) => setLang(v as Lang)}>
              <SelectTrigger className="mt-1.5"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between border-t pt-4">
            <div><div className="font-medium text-sm">Email alerts</div><div className="text-xs text-muted-foreground">Receive compliance alerts via email</div></div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between border-t pt-4">
            <div><div className="font-medium text-sm">Weekly compliance digest</div><div className="text-xs text-muted-foreground">Monday morning summary</div></div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between border-t pt-4">
            <div><div className="font-medium text-sm">SMS critical alerts</div><div className="text-xs text-muted-foreground">High-severity events only</div></div>
            <Switch />
          </div>
        </div>
      </Card>
    </div>
  );
}
