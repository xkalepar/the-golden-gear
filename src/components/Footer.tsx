import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">
                  ت
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">
                  شركة الترس الذهبي
                </h3>
                <p className="text-sm text-muted-foreground">
                  للآليات الثقيلة والمركبات
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              شركة رائدة في استيراد الآليات الثقيلة والمركبات وقطع الغيار
              الأصلية، نلتزم بتقديم أفضل المنتجات بجودة عالمية وأسعار تنافسية.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">رقم السجل:</span>
              <span
                className="text-secondary-foreground font-semibold"
                dir="ltr"
              >
                13-94223
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-secondary-foreground mb-6">
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#hero", label: "الرئيسية" },
                { href: "#about", label: "من نحن" },
                { href: "#services", label: "خدماتنا" },
                { href: "#gallery", label: "معرض الصور" },
                { href: "#contact", label: "تواصل معنا" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-secondary-foreground mb-6">
              تواصل معنا
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  جود دائم، الزاوية، ليبيا
                </span>
              </li>
              <li>
                <a
                  href="tel:+218928180372"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <span dir="ltr">+218-92-8180372</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@alturs-aldhahabi.ly"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span dir="ltr">contact@alturs-aldhahabi.ly</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" border-border">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © {currentYear} شركة الترس الذهبي. جميع الحقوق محفوظة.
            </p>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300"
              aria-label="العودة للأعلى"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* design by */}
      <div className="text-center py-4 bg-secondary/50 border-t border-border">
        <span className="text-sm text-muted-foreground">
          تصميم وتطوير بواسطة{" "}
          <a href="https://mnfd.ly" className="text-primary">
            منفذ
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
