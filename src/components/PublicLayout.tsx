import { Link } from "@tanstack/react-router";
import { ShieldCheck, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function PublicHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 glass">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-9 rounded-lg bg-gradient-hero grid place-items-center shadow-glow">
            <ShieldCheck className="size-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-foreground">CompliBridge AI</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Immigration · Compliance</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition">Home</Link>
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition">Platform</Link>
          <Link to="/contact" className="text-muted-foreground hover:text-foreground transition">Contact</Link>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Link to="/login"><Button variant="ghost">Sign in</Button></Link>
          <Link to="/signup"><Button className="bg-gradient-hero hover:opacity-90 shadow-soft">Get started</Button></Link>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu className="size-5" />
        </Button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-background px-4 py-3 flex flex-col gap-2">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>Platform</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/login"><Button variant="outline" className="w-full">Sign in</Button></Link>
          <Link to="/signup"><Button className="w-full bg-gradient-hero">Get started</Button></Link>
        </div>
      )}
    </header>
  );
}

export function PublicFooter() {
  return (
    <footer className="border-t bg-card mt-20">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="size-8 rounded-lg bg-gradient-hero grid place-items-center">
              <ShieldCheck className="size-4 text-primary-foreground" />
            </div>
            <span className="font-bold">CompliBridge AI</span>
          </div>
          <p className="text-sm text-muted-foreground">AI-powered immigration compliance for UK sponsors.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Platform</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about">Features</Link></li>
            <li><Link to="/about">Dashboard</Link></li>
            <li><Link to="/about">Compliance</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Privacy</li>
            <li>Terms</li>
            <li>GDPR</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © 2026 CompliBridge AI. All rights reserved.
      </div>
    </footer>
  );
}
