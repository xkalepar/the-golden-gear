import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#hero", label: "الرئيسية" },
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#gallery", label: "معرض الصور" },
  { href: "#why-us", label: "لماذا نحن" },
  { href: "#partners", label: "شركاؤنا" },
  { href: "#contact", label: "تواصل معنا" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/95 backdrop-blur-md shadow-elevated"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-lg  flex items-center justify-center">
              {/* <span className="text-primary-foreground font-bold text-xl">ت</span> */}
              <img
                src="/logo.jpg"
                alt="Logo"
                className="w-10 h-10 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary">
                الترس الذهبي
              </span>
              <span className="text-xs text-muted-foreground">
                للآليات والمركبات
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-secondary-foreground hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+218928180372"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span dir="ltr">+218-92-8180372</span>
            </a>
            <Button
              variant="gold"
              size="sm"
              onClick={() => scrollToSection("#contact")}
            >
              تواصل معنا
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-secondary-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all bg-secondary/80 rounded-md duration-300 ${
            isMobileMenuOpen ? "max-h-[400px] pb-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-3 text-right text-secondary-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="gold"
              className="mt-4"
              onClick={() => scrollToSection("#contact")}
            >
              تواصل معنا
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
