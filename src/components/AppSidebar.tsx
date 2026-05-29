import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import {
  LayoutDashboard, Users, Bell, FileText, Bot, UserCircle, Settings, LogOut, ShieldCheck,
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter, useSidebar,
} from "@/components/ui/sidebar";
import { useAuth } from "@/lib/auth-context";
import { useI18n } from "@/lib/i18n";

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const { user, logout } = useAuth();
  const { t } = useI18n();
  const navigate = useNavigate();

  const items = [
    { to: "/dashboard", label: t("dashboard"), icon: LayoutDashboard },
    { to: "/workers", label: t("workers"), icon: Users },
    { to: "/alerts", label: t("alerts"), icon: Bell },
    { to: "/audit", label: t("audit"), icon: FileText },
    { to: "/coach", label: t("coach"), icon: Bot },
    { to: "/portal", label: t("portal"), icon: UserCircle },
    { to: "/settings", label: t("settings"), icon: Settings },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <Link to="/dashboard" className="flex items-center gap-2 text-sidebar-foreground">
          <div className="size-9 rounded-lg bg-gradient-hero grid place-items-center shadow-glow">
            <ShieldCheck className="size-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <div className="font-bold leading-tight">CompliBridge</div>
              <div className="text-[10px] uppercase tracking-wider opacity-70">AI Compliance</div>
            </div>
          )}
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton asChild isActive={pathname === item.to || pathname.startsWith(item.to + "/")}>
                    <Link to={item.to} className="flex items-center gap-2">
                      <item.icon className="size-4" />
                      {!collapsed && <span>{item.label}</span>}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-3 space-y-3">

        {user && !collapsed && (
          <div className="rounded-lg bg-sidebar-accent/50 p-2 text-sidebar-foreground">
            <div className="text-xs font-medium truncate">{user.fullName}</div>
            <div className="text-[10px] opacity-70 truncate">{user.role}</div>
          </div>
        )}
        <SidebarMenuButton onClick={() => { logout(); navigate({ to: "/" }); }} className="text-sidebar-foreground">
          <LogOut className="size-4" />
          {!collapsed && <span>{t("logout")}</span>}
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
