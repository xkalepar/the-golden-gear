import { Globe, Award, Briefcase, Headphones, BadgeCheck, Handshake } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "أفضل الموردين العالميين",
    description: "نعتمد على شبكة واسعة من أفضل الموردين والمصنعين حول العالم",
  },
  {
    icon: Award,
    title: "منتجات أصلية ومعتمدة",
    description: "جميع منتجاتنا أصلية ١٠٠٪ ومعتمدة من الشركات المصنعة",
  },
  {
    icon: Briefcase,
    title: "خبرة قوية",
    description: "نمتلك خبرة طويلة وقوية في مجال النقل والاستيراد",
  },
  {
    icon: Headphones,
    title: "خدمات ما قبل وبعد البيع",
    description: "نقدم خدمات احترافية شاملة قبل وبعد عملية البيع",
  },
  {
    icon: BadgeCheck,
    title: "الجودة والثقة والسعر المناسب",
    description: "نمنح العميل أفضل جودة مع ثقة تامة وأسعار تنافسية",
  },
  {
    icon: Handshake,
    title: "شفافية والتزام",
    description: "نتعامل بشفافية كاملة والتزام دائم بجميع تعهداتنا",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            لماذا نحن
          </span>
          <h2 className="heading-section text-secondary mb-6">
            لماذا <span className="text-primary">شركة الترس الذهبي؟</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            نتميز عن غيرنا بالتزامنا الكامل بتقديم أفضل المنتجات والخدمات لعملائنا
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <reason.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              {index < reasons.length - 1 && (
                <div className="hidden lg:block absolute -bottom-4 right-7 w-px h-8 bg-border" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-primary/5 border border-primary/20 rounded-2xl px-8 py-6">
            <div className="text-right">
              <p className="text-lg font-bold text-secondary">هل أنت مستعد للتعامل معنا؟</p>
              <p className="text-muted-foreground">تواصل معنا اليوم واحصل على أفضل العروض</p>
            </div>
            <a
              href="#contact"
              className="btn-gold"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              تواصل الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
