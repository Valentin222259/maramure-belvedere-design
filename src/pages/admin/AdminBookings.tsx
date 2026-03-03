import { useState } from "react";
import { bookings, BookingData } from "@/data/admin-data";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const statusColor: Record<string, string> = {
  confirmed: "bg-emerald-100 text-emerald-700",
  pending: "bg-amber-100 text-amber-700",
  cancelled: "bg-red-100 text-red-700",
};

const AdminBookings = () => {
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selected, setSelected] = useState<BookingData | null>(null);

  const filtered = bookings.filter(
    (b) => statusFilter === "all" || b.status === statusFilter
  );

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">Status:</span>
        {["all", "confirmed", "pending", "cancelled"].map((s) => (
          <button
            key={s}
            onClick={() => setStatusFilter(s)}
            className={`px-3 py-1.5 rounded-md text-xs capitalize transition-colors ${
              statusFilter === s
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50 text-left">
                <th className="p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">ID</th>
                <th className="p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">Guest</th>
                <th className="p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium hidden md:table-cell">Room</th>
                <th className="p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium hidden sm:table-cell">Check-in</th>
                <th className="p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium hidden sm:table-cell">Check-out</th>
                <th className="p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">Total</th>
                <th className="p-4 text-xs uppercase tracking-wider text-muted-foreground font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b) => (
                <tr
                  key={b.id}
                  onClick={() => setSelected(b)}
                  className="border-b border-border/50 last:border-0 hover:bg-muted/30 cursor-pointer transition-colors"
                >
                  <td className="p-4 text-muted-foreground">{b.id}</td>
                  <td className="p-4 font-medium">{b.guest}</td>
                  <td className="p-4 text-muted-foreground hidden md:table-cell">{b.room}</td>
                  <td className="p-4 text-muted-foreground hidden sm:table-cell">{b.checkIn}</td>
                  <td className="p-4 text-muted-foreground hidden sm:table-cell">{b.checkOut}</td>
                  <td className="p-4">€{b.total}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${statusColor[b.status]}`}>
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Booking Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-foreground/40" onClick={() => setSelected(null)} />
          <div className="relative bg-card border border-border rounded-lg p-6 w-full max-w-md z-50 animate-fade-in-up">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X size={18} />
            </button>
            <h3 className="font-heading text-xl mb-4">Booking {selected.id}</h3>
            <div className="space-y-3 text-sm">
              {[
                ["Guest", selected.guest],
                ["Email", selected.email],
                ["Room", selected.room],
                ["Check-in", selected.checkIn],
                ["Check-out", selected.checkOut],
                ["Total", `€${selected.total}`],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between">
                  <span className="text-muted-foreground">{label}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Status</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${statusColor[selected.status]}`}>
                  {selected.status}
                </span>
              </div>
            </div>
            <div className="flex gap-2 mt-6">
              <Button size="sm" className="flex-1">Confirm</Button>
              <Button size="sm" variant="outline" className="flex-1">Cancel Booking</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBookings;
