import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Waves, Bike, CircleDot, Snowflake, Flame, Car, Baby, Facebook, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const facilities = [
    { icon: Waves, label: t("footer.jacuzzi") },
    { icon: Bike, label: t("footer.bikes") },
    { icon: CircleDot, label: t("footer.pingPong") },
    { icon: Snowflake, label: t("footer.sleds") },
    { icon: Flame, label: t("footer.grill") },
    { icon: Car, label: t("footer.parking") },
    { icon: Baby, label: t("footer.playground") },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-10 md:py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-heading text-2xl mb-4">Maramureș Belvedere</h3>
          <p className="text-primary-foreground/80 text-sm leading-relaxed">{t("footer.tagline")}</p>
        </div>
        <div>
          <h4 className="font-heading text-lg mb-4">{t("footer.quickLinks")}</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">{t("nav.home")}</Link>
            <Link to="/rooms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">{t("nav.rooms")}</Link>
            <Link to="/booking" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">{t("nav.bookNow")}</Link>
            <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">{t("nav.contact")}</Link>
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg mb-4">{t("footer.facilities")}</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/80">
            {facilities.map((f, i) => (
              <div key={i} className="flex items-center gap-2">
                <f.icon size={14} />
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading text-lg mb-4">{t("footer.contactUs")}</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/80">
            <div className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /><span>Str. Hera, Nr. 2, Petrova, Maramureș, România</span></div>
            <div className="flex items-center gap-2"><Phone size={16} /><span>+40 262 330 123</span></div>
            <div className="flex items-center gap-2"><Mail size={16} /><span>contact@maramures-belvedere.ro</span></div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 px-4 container mx-auto">
        <span className="text-xs text-primary-foreground/60">
          {t("footer.rights", { year: new Date().getFullYear() })}
        </span>
        <div className="flex items-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"><Facebook size={18} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"><Instagram size={18} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
