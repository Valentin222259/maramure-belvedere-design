import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { rooms } from "@/data/rooms";
import { toast } from "@/hooks/use-toast";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("room") || rooms[0].id;
  const room = rooms.find((r) => r.id === roomId) || rooms[0];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    requests: "",
  });

  const update = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const today = new Date().toISOString().split("T")[0];

  const dateErrors = useMemo(() => {
    const errors: { checkIn?: string; checkOut?: string } = {};
    if (form.checkIn && form.checkIn < today) {
      errors.checkIn = "Check-in date cannot be in the past.";
    }
    if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn) {
      errors.checkOut = "Check-out date must be after check-in date.";
    }
    return errors;
  }, [form.checkIn, form.checkOut, today]);

  const nights =
    form.checkIn && form.checkOut && !dateErrors.checkIn && !dateErrors.checkOut
      ? Math.max(1, Math.ceil((new Date(form.checkOut).getTime() - new Date(form.checkIn).getTime()) / 86400000))
      : 1;

  const isFormValid =
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    form.phone.trim() !== "" &&
    form.checkIn !== "" &&
    form.checkOut !== "" &&
    !dateErrors.checkIn &&
    !dateErrors.checkOut;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    toast({ title: "Booking Submitted!", description: "We'll confirm your reservation via email shortly." });
  };

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="font-heading text-4xl text-center mb-12">Complete Your Booking</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Guest Info */}
          <div className="md:col-span-2 space-y-5">
            <h2 className="font-heading text-xl mb-2">Guest Information</h2>
            {[
              { label: "Full Name", field: "name", type: "text", placeholder: "Your full name" },
              { label: "Email", field: "email", type: "email", placeholder: "you@example.com" },
              { label: "Phone", field: "phone", type: "tel", placeholder: "+40 ..." },
            ].map((f) => (
              <div key={f.field}>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1 block">{f.label}</label>
                <input
                  type={f.type}
                  required
                  value={(form as any)[f.field]}
                  onChange={(e) => update(f.field, e.target.value)}
                  placeholder={f.placeholder}
                  className="w-full bg-muted border border-border rounded-md px-4 py-2.5 text-sm text-foreground outline-none focus:ring-1 focus:ring-ring"
                />
              </div>
            ))}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1 block">Check-in</label>
                <input
                  type="date"
                  required
                  min={today}
                  value={form.checkIn}
                  onChange={(e) => update("checkIn", e.target.value)}
                  className={`w-full bg-muted border rounded-md px-4 py-2.5 text-sm text-foreground outline-none focus:ring-1 focus:ring-ring ${
                    dateErrors.checkIn ? "border-destructive" : "border-border"
                  }`}
                />
                {dateErrors.checkIn && (
                  <p className="text-xs text-destructive mt-1">{dateErrors.checkIn}</p>
                )}
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1 block">Check-out</label>
                <input
                  type="date"
                  required
                  min={form.checkIn || today}
                  value={form.checkOut}
                  onChange={(e) => update("checkOut", e.target.value)}
                  className={`w-full bg-muted border rounded-md px-4 py-2.5 text-sm text-foreground outline-none focus:ring-1 focus:ring-ring ${
                    dateErrors.checkOut ? "border-destructive" : "border-border"
                  }`}
                />
                {dateErrors.checkOut && (
                  <p className="text-xs text-destructive mt-1">{dateErrors.checkOut}</p>
                )}
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-1 block">Special Requests</label>
              <textarea
                value={form.requests}
                onChange={(e) => update("requests", e.target.value)}
                placeholder="Any special requests or preferences..."
                rows={3}
                className="w-full bg-muted border border-border rounded-md px-4 py-2.5 text-sm text-foreground outline-none focus:ring-1 focus:ring-ring resize-none"
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-card border border-border rounded-lg p-6 h-fit sticky top-24">
            <h2 className="font-heading text-lg mb-4">Order Summary</h2>
            <img src={room.image} alt={room.name} className="w-full h-32 object-cover rounded mb-4" />
            <p className="font-heading text-base mb-1">{room.name}</p>
            <p className="text-sm text-muted-foreground mb-4">
              {nights} night{nights > 1 ? "s" : ""}
            </p>
            <div className="border-t border-border pt-4 mb-6">
              <div className="flex justify-between text-sm mb-1">
                <span>€{room.price} × {nights} nights</span>
                <span>€{room.price * nights}</span>
              </div>
              <div className="flex justify-between font-heading text-lg mt-3 pt-3 border-t border-border">
                <span>Total</span>
                <span className="text-accent">€{room.price * nights}</span>
              </div>
            </div>
            <Button variant="hero" type="submit" className="w-full" disabled={!isFormValid}>
              Pay Now
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
