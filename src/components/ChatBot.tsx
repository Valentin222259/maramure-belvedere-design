import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([
    { from: "bot", text: "Bună ziua! Sunt Ion, ghidul tău din Maramureș. Cu ce te pot ajuta?" },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { from: "user" as const, text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { from: "bot" as const, text: "Mulțumesc pentru mesaj! Un membru al echipei noastre vă va răspunde în curând." },
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center hover:bg-forest-light transition-colors"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-card rounded-lg shadow-2xl border border-border animate-fade-in-up flex flex-col max-h-[28rem]">
          <div className="bg-primary text-primary-foreground px-4 py-3 rounded-t-lg">
            <p className="font-heading text-lg">Ion</p>
            <p className="text-xs text-primary-foreground/80">Ghidul tău din Maramureș</p>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[12rem]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-lg text-sm ${
                    m.from === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-border p-3 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Scrieți un mesaj..."
              className="flex-1 bg-muted rounded-md px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-ring text-foreground"
            />
            <Button size="icon" onClick={send}>
              <Send size={16} />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
