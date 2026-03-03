import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Save } from "lucide-react";

const AdminSettings = () => {
  const [guesthouse, setGuesthouse] = useState({
    name: "Maramureș Belvedere",
    address: "Sat Vadu Izei, Nr. 42, Maramureș 437365, Romania",
    phone: "+40 262 330 123",
    email: "contact@maramures-belvedere.ro",
  });

  const [notifications, setNotifications] = useState({
    newBooking: true,
    cancellation: true,
    review: false,
    dailySummary: true,
  });

  const [chatbotKB, setChatbotKB] = useState(
    `Maramureș Belvedere is a boutique mountain guesthouse located in Vadu Izei, Maramureș, Romania.\n\nWe have 3 rooms: Deluxe Mountain View (€180/night), Fireplace Suite (€280/night), Classic Comfort (€120/night).\n\nCheck-in: 15:00, Check-out: 11:00.\nBreakfast included. Free parking. Free Wi-Fi.\n\nNearby attractions: UNESCO wooden churches, hiking trails, Merry Cemetery (Săpânța), traditional village tours.`
  );

  const save = () => toast({ title: "Settings saved successfully" });

  const inputCls =
    "w-full bg-muted border border-border rounded-md px-4 py-2.5 text-sm text-foreground outline-none focus:ring-1 focus:ring-ring";

  return (
    <div className="space-y-10 max-w-2xl">
      {/* Guesthouse Info */}
      <section>
        <h2 className="font-heading text-xl mb-4">Guesthouse Information</h2>
        <div className="space-y-4">
          {(["name", "address", "phone", "email"] as const).map((field) => (
            <div key={field}>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1 block capitalize">
                {field}
              </label>
              <input
                value={guesthouse[field]}
                onChange={(e) => setGuesthouse({ ...guesthouse, [field]: e.target.value })}
                className={inputCls}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Notifications */}
      <section>
        <h2 className="font-heading text-xl mb-4">Email Notifications</h2>
        <div className="space-y-3">
          {[
            { key: "newBooking" as const, label: "New booking received" },
            { key: "cancellation" as const, label: "Booking cancellation" },
            { key: "review" as const, label: "New guest review" },
            { key: "dailySummary" as const, label: "Daily summary report" },
          ].map((n) => (
            <label key={n.key} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={notifications[n.key]}
                onChange={(e) =>
                  setNotifications({ ...notifications, [n.key]: e.target.checked })
                }
                className="w-4 h-4 accent-primary rounded"
              />
              <span className="text-sm">{n.label}</span>
            </label>
          ))}
        </div>
      </section>

      {/* Chatbot KB */}
      <section>
        <h2 className="font-heading text-xl mb-2">Chatbot Knowledge Base</h2>
        <p className="text-xs text-muted-foreground mb-4">
          Update the information that Ion (the AI chatbot) knows about your property.
        </p>
        <textarea
          value={chatbotKB}
          onChange={(e) => setChatbotKB(e.target.value)}
          rows={8}
          className={`${inputCls} resize-y`}
        />
      </section>

      <Button onClick={save}>
        <Save size={16} />
        Save Settings
      </Button>
    </div>
  );
};

export default AdminSettings;
