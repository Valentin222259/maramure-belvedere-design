import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { rooms } from "@/data/rooms";
import { Users } from "lucide-react";

const Rooms = () => {
  const [maxPrice, setMaxPrice] = useState(500);
  const [capacity, setCapacity] = useState(0);

  const filtered = rooms.filter(
    (r) => r.price <= maxPrice && (capacity === 0 || r.capacity >= capacity)
  );

  return (
    <div className="pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="font-heading text-4xl md:text-5xl text-center mb-4">Our Rooms</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          Find the perfect room for your mountain escape.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-6 items-end mb-12 bg-card border border-border rounded-lg p-6">
          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Max Price (€)</label>
            <input
              type="range"
              min={50}
              max={500}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-40 accent-primary"
            />
            <span className="text-sm text-foreground">Up to €{maxPrice}</span>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Min Guests</label>
            <select
              value={capacity}
              onChange={(e) => setCapacity(Number(e.target.value))}
              className="bg-muted border border-border rounded-md px-3 py-2 text-sm text-foreground"
            >
              <option value={0}>Any</option>
              <option value={1}>1+</option>
              <option value={2}>2+</option>
              <option value={3}>3+</option>
            </select>
          </div>
        </div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((room) => (
            <div key={room.id} className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
              <img src={room.image} alt={room.name} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="font-heading text-xl mb-2">{room.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{room.shortDescription}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Users size={14} />
                  <span>Up to {room.capacity} guests</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-lg text-accent">€{room.price}<span className="text-sm text-muted-foreground font-body">/night</span></span>
                  <Button size="sm" asChild>
                    <Link to={`/rooms/${room.id}`}>View Room</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground py-12">No rooms match your filters. Try adjusting your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
