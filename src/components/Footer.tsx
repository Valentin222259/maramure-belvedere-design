import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 className="font-heading text-2xl mb-4">Maramureș Belvedere</h3>
        <p className="text-primary-foreground/80 text-sm leading-relaxed">
          A boutique mountain retreat nestled in the heart of Maramureș, where tradition meets modern comfort.
        </p>
      </div>
      <div>
        <h4 className="font-heading text-lg mb-4">Quick Links</h4>
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</Link>
          <Link to="/rooms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Rooms</Link>
          <Link to="/booking" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Book Now</Link>
          <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</Link>
        </div>
      </div>
      <div>
        <h4 className="font-heading text-lg mb-4">Contact Us</h4>
        <div className="flex flex-col gap-3 text-sm text-primary-foreground/80">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>Sat Vadu Izei, Maramureș, Romania</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+40 262 330 123</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>contact@maramures-belvedere.ro</span>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/20 py-6 text-center text-xs text-primary-foreground/60">
      © {new Date().getFullYear()} Maramureș Belvedere. All rights reserved.
    </div>
  </footer>
);

export default Footer;
