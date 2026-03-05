import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/contact", label: "Contact" },
  { to: "/login", label: "Login" },
];

const isActive = (pathname: string, to: string) => {
  if (to === "/") return pathname === "/";
  return pathname.startsWith(to);
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-heading text-xl font-semibold tracking-wide text-foreground">
          Maramureș Belvedere
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative text-sm tracking-wide uppercase transition-colors hover:text-primary pb-1 ${
                isActive(location.pathname, l.to)
                  ? "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                  : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Button variant="hero" size="sm" asChild>
            <Link to="/booking">Book Now</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`text-sm tracking-wide uppercase py-1 border-l-2 pl-3 transition-colors ${
                  isActive(location.pathname, l.to)
                    ? "text-primary font-semibold border-primary"
                    : "text-muted-foreground border-transparent"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Button variant="hero" size="sm" asChild>
              <Link to="/booking" onClick={() => setOpen(false)}>Book Now</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
