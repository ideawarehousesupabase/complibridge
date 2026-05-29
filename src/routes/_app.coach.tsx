import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState, useRef, useEffect } from "react";
import { Bot, Send, Sparkles, User } from "lucide-react";
import { coachScript } from "@/lib/mock-data";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/_app/coach")({
  head: () => ({ meta: [{ title: "AI Onboarding Coach — CompliBridge AI" }] }),
  component: CoachPage,
});

type Msg = { role: "user" | "bot"; text: string };

function answer(input: string): string {
  const lower = input.toLowerCase();
  const match = coachScript.find((s) => lower.includes(s.q.split(" ")[0]) || lower.includes(s.q));
  if (match) return match.a;
  return "Great question! I can help with UK workplace culture, employment rights, visa conditions, workplace expectations, reporting concerns, or performance management. Try asking about one of these topics.";
}

function CoachPage() {
  const { t } = useI18n();
  const [messages, setMessages] = useState<Msg[]>([{ role: "bot", text: t("onboarding_intro") }]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" }); }, [messages]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(() => setMessages((m) => [...m, { role: "bot", text: answer(text) }]), 600);
  };

  const suggestions = ["Tell me about UK workplace culture", "What are my employment rights?", "Visa conditions explained", "How do I report concerns?"];

  return (
    <div className="space-y-6 h-[calc(100vh-9rem)] flex flex-col">
      <div>
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-xl bg-gradient-hero grid place-items-center shadow-glow">
            <Bot className="size-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">AI Onboarding Coach</h1>
            <p className="text-sm text-muted-foreground">Conversational guidance for sponsored workers</p>
          </div>
          <span className="ml-auto text-xs flex items-center gap-1 text-success"><Sparkles className="size-3" /> Online</span>
        </div>
      </div>

      <Card className="flex-1 flex flex-col bg-gradient-card overflow-hidden">
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
              <Avatar className="size-8 shrink-0">
                <AvatarFallback className={m.role === "bot" ? "bg-gradient-hero text-primary-foreground" : "bg-muted"}>
                  {m.role === "bot" ? <Bot className="size-4" /> : <User className="size-4" />}
                </AvatarFallback>
              </Avatar>
              <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                m.role === "bot" ? "bg-background border" : "bg-primary text-primary-foreground"
              }`}>
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t p-4 space-y-3">
          <div className="flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <Button key={s} variant="outline" size="sm" className="text-xs" onClick={() => send(s)}>{s}</Button>
            ))}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2">
            <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask your onboarding coach anything…" className="bg-background" />
            <Button type="submit" className="bg-gradient-hero shadow-soft"><Send className="size-4" /></Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
