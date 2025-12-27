import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    label: "العنوان",
    value: "جود دعم، الزاوية، ليبيا",
    subValue: "رقم السجل: 13-94223",
  },
  {
    icon: Phone,
    label: "الهاتف",
    value: "+218-91-8170378",
    href: "tel:+218918170378",
  },
  {
    icon: MessageCircle,
    label: "واتساب",
    value: "+218-94-4041633",
    href: "https://wa.me/218944041633",
    isWhatsapp: true,
  },
  {
    icon: Mail,
    label: "البريد الإلكتروني",
    value: "Nabeil96@yahoo.com",
    href: "mailto:Nabeil96@yahoo.com",
  },
];

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast({
        title: "خطأ",
        description: "يرجى ملء جميع الحقول المطلوبة",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "تم الإرسال بنجاح",
      description: "سنتواصل معك في أقرب وقت ممكن",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
            تواصل معنا
          </span>
          <h2 className="heading-section text-secondary-foreground mb-6">
            نحن هنا <span className="text-primary">لخدمتكم</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            لا تتردد في التواصل معنا للاستفسار عن منتجاتنا أو طلب عرض أسعار
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-charcoal-light rounded-2xl p-8">
            <h3 className="text-xl font-bold text-secondary-foreground mb-6">
              أرسل لنا رسالة
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h4 className="text-xl font-bold text-secondary-foreground mb-2">
                  تم إرسال رسالتك بنجاح
                </h4>
                <p className="text-muted-foreground">
                  سنتواصل معك في أقرب وقت ممكن
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-foreground mb-2">
                    الاسم الكامل
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="أدخل اسمك الكامل"
                    className="bg-secondary border-border text-secondary-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-foreground mb-2">
                    رقم الهاتف
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="أدخل رقم هاتفك"
                    dir="ltr"
                    className="bg-secondary border-border text-secondary-foreground placeholder:text-muted-foreground text-left"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-foreground mb-2">
                    الرسالة
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="اكتب رسالتك هنا..."
                    rows={5}
                    className="bg-secondary border-border text-secondary-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      جاري الإرسال...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      إرسال الرسالة
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-secondary-foreground mb-6">
              معلومات التواصل
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href || "#"}
                  target={info.href?.startsWith("http") ? "_blank" : undefined}
                  rel={info.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 ${
                    info.href
                      ? "bg-charcoal-light hover:bg-primary group cursor-pointer"
                      : "bg-charcoal-light"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      info.isWhatsapp
                        ? "bg-green-500/20 text-green-500 group-hover:bg-primary-foreground/20 group-hover:text-primary-foreground"
                        : "bg-primary/20 text-primary group-hover:bg-primary-foreground/20 group-hover:text-primary-foreground"
                    } transition-colors`}
                  >
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">
                      {info.label}
                    </p>
                    <p
                      className="text-lg font-semibold text-secondary-foreground group-hover:text-primary-foreground transition-colors"
                      dir={info.label === "العنوان" ? "rtl" : "ltr"}
                    >
                      {info.value}
                    </p>
                    {info.subValue && (
                      <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70 mt-1 transition-colors">
                        {info.subValue}
                      </p>
                    )}
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/218944041633"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 hover:bg-green-600 text-primary-foreground font-semibold rounded-xl transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
              تواصل معنا عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
