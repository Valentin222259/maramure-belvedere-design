import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Mountain, TreePine, Landmark, Users } from "lucide-react";
import heroImage from "@/assets/hero-mountains.jpg";
import { rooms } from "@/data/rooms";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const reviews = [
  { name: "Sophie & Marc", country: "France", rating: 5, text: "An unforgettable experience. The views, the hospitality, the food — everything was perfect." },
  { name: "Andrei R.", country: "Romania", rating: 5, text: "Cel mai frumos loc din Maramureș. Ne-am simțit ca acasă, dar într-un vis." },
  { name: "Julia W.", country: "Austria", rating: 5, text: "Reminds me of our best Alpine lodges, but with a unique Romanian soul. Truly special." },
];

const activities = [
  {
    icon: Mountain,
    title: "Hiking Trails",
    desc: "Explore pristine mountain paths through ancient forests and alpine meadows.",
    gradient: "from-[hsl(152,35%,25%)] to-[hsl(152,25%,40%)]",
  },
  {
    icon: TreePine,
    title: "Forest Walks",
    desc: "Gentle walks through centuries-old beech and fir forests.",
    gradient: "from-[hsl(30,40%,35%)] to-[hsl(30,30%,50%)]",
  },
  {
    icon: Landmark,
    title: "Wooden Churches",
    desc: "Visit UNESCO-listed traditional wooden churches unique to Maramureș.",
    gradient: "from-[hsl(38,60%,40%)] to-[hsl(38,50%,55%)]",
  },
  {
    icon: Users,
    title: "Local Traditions",
    desc: "Experience authentic village life, crafts, and traditional Romanian cuisine.",
    gradient: "from-[hsl(150,20%,25%)] to-[hsl(33,30%,40%)]",
  },
];

const Index = () => {
  const roomsRef = useScrollReveal();
  const storyRef = useScrollReveal();
  const reviewsRef = useScrollReveal();
  const activitiesRef = useScrollReveal();

  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Maramureș mountains at sunrise with traditional guesthouse"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-background font-semibold mb-4 tracking-wide">
            Maramureș Belvedere
          </h1>
          <p className="font-body text-lg md:text-xl text-background/90 mb-8 max-w-xl mx-auto">
            A boutique mountain retreat where tradition meets timeless comfort
          </p>
          <Button variant="hero" asChild>
            <Link to="/booking">Book Now</Link>
          </Button>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 px-4" ref={roomsRef}>
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-4">Our Rooms</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
            Each room is designed to blend rustic Maramureș charm with modern comfort.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div key={room.id} className="bg-card rounded-lg overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow">
                <img src={room.image} alt={room.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="font-heading text-xl mb-2">{room.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{room.shortDescription}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-lg text-accent">€{room.price}<span className="text-sm text-muted-foreground font-body">/night</span></span>
                    <Button size="sm" asChild>
                      <Link to={`/rooms/${room.id}`}>View Room</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story — Two-column editorial layout */}
      <section className="py-20 px-4 bg-muted" ref={storyRef}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nestled in the rolling hills of Maramureș — one of Europe's last truly unspoiled regions — Belvedere was born from a love for this land and its timeless traditions. Our guesthouse stands where shepherds once watched over their flocks, offering uninterrupted views of forested mountains and quiet valleys.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every detail, from the hand-carved wooden balconies to the locally sourced breakfast, reflects the soul of Maramureș. Whether you come for the hiking, the UNESCO wooden churches, or simply to slow down, you'll leave feeling deeply renewed.
              </p>
              <Button variant="outline" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Maramureș Belvedere guesthouse surrounded by mountains"
                className="w-full h-[28rem] lg:h-[32rem] object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-foreground/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4" ref={reviewsRef}>
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-12">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic mb-4">"{r.text}"</p>
                <p className="font-heading text-sm">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Maramureș — Rich activity cards */}
      <section className="py-20 px-4 bg-muted" ref={activitiesRef}>
        <div className="container mx-auto max-w-5xl">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-12">Explore Maramureș</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((a, i) => (
              <div
                key={i}
                className={`relative rounded-lg overflow-hidden bg-gradient-to-br ${a.gradient} p-6 pt-10 pb-8 text-background shadow-md hover:shadow-lg transition-shadow`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-background/10 -translate-y-8 translate-x-8" />
                <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full bg-background/5 translate-y-6 -translate-x-4" />
                <div className="relative z-10">
                  <a.icon size={28} className="mb-4 text-background/90" />
                  <h3 className="font-heading text-lg mb-2">{a.title}</h3>
                  <p className="text-background/80 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
