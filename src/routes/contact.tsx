import { createFileRoute } from "@tanstack/react-router";
import { PublicHeader, PublicFooter } from "@/components/PublicLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — CompliBridge AI" },
    { name: "description", content: "Get in touch with the CompliBridge AI team." },
  ]}),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h1 className="text-4xl md:text-5xl font-bold">Talk to our team</h1>
          <p className="mt-4 text-muted-foreground">Questions about your sponsor licence, pricing, or a demo? We typically respond within 1 business day.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "hello@complibridge.ai" },
              { icon: Phone, label: "Phone", value: "+44 20 7946 1010" },
              { icon: MapPin, label: "Office", value: "1 King William Street, London EC4N 7AF" },
            ].map((c) => (
              <Card key={c.label} className="p-5 flex items-center gap-4 bg-gradient-card">
                <div className="size-10 rounded-lg bg-primary/10 grid place-items-center">
                  <c.icon className="size-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="font-medium">{c.value}</div>
                </div>
              </Card>
            ))}
          </div>
          <Card className="p-6 bg-gradient-card">
            <form
              className="space-y-4"
              onSubmit={(e) => { e.preventDefault(); toast.success("Thanks! We'll be in touch shortly."); (e.target as HTMLFormElement).reset(); }}
            >
              <div className="grid grid-cols-2 gap-3">
                <div><Label>First name</Label><Input required /></div>
                <div><Label>Last name</Label><Input required /></div>
              </div>
              <div><Label>Work email</Label><Input type="email" required /></div>
              <div><Label>Company</Label><Input /></div>
              <div><Label>Message</Label><Textarea rows={5} required /></div>
              <Button type="submit" className="w-full bg-gradient-hero shadow-soft">Send message</Button>
            </form>
          </Card>
        </div>
      </section>
      <PublicFooter />
    </div>
  );
}
