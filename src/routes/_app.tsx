import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useAuth } from "@/lib/auth-context";
import { useEffect } from "react";
import { Bell, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

function AppLayout() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      const t = setTimeout(() => {
        const raw = localStorage.getItem("complibridge_session");
        if (!raw) navigate({ to: "/login" });
      }, 100);
      return () => clearTimeout(t);
    }
  }, [user, navigate]);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted/30">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-16 border-b bg-background/80 backdrop-blur flex items-center gap-4 px-4 sticky top-0 z-30">
            <SidebarTrigger />
            <div className="hidden md:flex items-center gap-2 flex-1 max-w-md">
              <Search className="size-4 text-muted-foreground" />
              <Input placeholder="Search workers, alerts, documents…" className="border-0 bg-muted/50 focus-visible:ring-0" />
            </div>
            <div className="ml-auto flex items-center gap-3">
              <button className="relative size-9 grid place-items-center rounded-lg hover:bg-muted">
                <Bell className="size-4" />
                <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-destructive" />
              </button>
              <Avatar className="size-8">
                <AvatarFallback className="bg-gradient-hero text-primary-foreground text-xs">
                  {user?.fullName?.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase() ?? "U"}
                </AvatarFallback>
              </Avatar>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
