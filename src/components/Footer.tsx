import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
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
          <h4 className="font-heading text-lg mb-4">{t("footer.contactUs")}</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2"><MapPin size={16} /><span>Sat Vadu Izei, Maramureș, Romania</span></div>
            <div className="flex items-center gap-2"><Phone size={16} /><span>+40 262 330 123</span></div>
            <div className="flex items-center gap-2"><Mail size={16} /><span>contact@maramures-belvedere.ro</span></div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 py-6 text-center text-xs text-primary-foreground/60">
        {t("footer.rights", { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
};

export default Footer;
