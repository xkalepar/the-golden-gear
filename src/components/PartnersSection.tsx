const partners = [
  {
    name: "Al Rafiah Al Alamiyah LEASTRAD",
    nameAr: "الرافعة العالمية للاستيراد",
  },
  {
    name: "ALALAT ALTAQEELA",
    nameAr: "الآلات الثقيلة",
  },
  {
    name: "Hyundai Excavators",
    nameAr: "حفارات هيونداي",
  },
  {
    name: "LG Kawasaki",
    nameAr: "كواشيك LG",
  },
  {
    name: "Lovol Kawasaki",
    nameAr: "كواشيك Lovol",
  },
  {
    name: "Spare Parts",
    nameAr: "قطع غيار حفارات هيونداي وكواشيك",
  },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            شركاؤنا
          </span>
          <h2 className="heading-section text-secondary mb-6">
            <span className="text-primary">شراكات عالمية</span> موثوقة
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            نتعاون مع أفضل العلامات التجارية والموردين العالميين لتوفير منتجات عالية الجودة
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-background border border-border rounded-xl p-8 text-center hover:border-primary hover:shadow-gold transition-all duration-300"
            >
              {/* Logo Placeholder */}
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                <span className="text-2xl font-bold text-primary group-hover:text-primary-foreground transition-colors">
                  {partner.nameAr.charAt(0)}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-secondary mb-1 group-hover:text-primary transition-colors">
                {partner.nameAr}
              </h3>
              <p className="text-sm text-muted-foreground" dir="ltr">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
