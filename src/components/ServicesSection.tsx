import { Car, Truck, Bike, Cog, Wrench, CircleDot, Battery, Droplets } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "سيارات",
    description: "سيارات بمختلف الأنواع والموديلات من أفضل الشركات العالمية",
  },
  {
    icon: Truck,
    title: "شاحنات",
    description: "شاحنات نقل وحمل بمواصفات عالية الجودة للمشاريع الكبرى",
  },
  {
    icon: Bike,
    title: "دراجات",
    description: "دراجات نارية وهوائية بتصاميم حديثة وأداء متميز",
  },
  {
    icon: Cog,
    title: "آليات ثقيلة",
    description: "معدات ثقيلة ومعدات مشاريع للبناء والإنشاءات",
  },
  {
    icon: Wrench,
    title: "قطع غيار",
    description: "قطع غيار أصلية ومعتمدة لجميع أنواع المركبات والآليات",
  },
  {
    icon: CircleDot,
    title: "إطارات",
    description: "إطارات عالية الجودة لجميع أنواع المركبات والشاحنات",
  },
  {
    icon: Battery,
    title: "بطاريات",
    description: "بطاريات موثوقة ومعمرة لضمان أداء متواصل",
  },
  {
    icon: Droplets,
    title: "زيوت وفلاتر",
    description: "زيوت وفلاتر أصلية للحفاظ على أداء المحركات",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
            منتجاتنا وخدماتنا
          </span>
          <h2 className="heading-section text-secondary-foreground mb-6">
            تشكيلة شاملة من <span className="text-primary">المنتجات والخدمات</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            نوفر لكم مجموعة متكاملة من المنتجات المستوردة من أفضل المصنعين العالميين،
            والتي تخضع لفحص دقيق قبل الشحن وبعد الوصول لضمان الجودة والمطابقة للمعايير
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-charcoal-light rounded-xl p-6 hover:bg-primary transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 left-0 w-full h-full opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="absolute top-4 left-4 w-32 h-32 border border-current rounded-full" />
                <div className="absolute bottom-4 right-4 w-24 h-24 border border-current rounded-full" />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-primary/20 group-hover:bg-primary-foreground/20 flex items-center justify-center mb-4 transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-secondary-foreground group-hover:text-primary-foreground mb-2 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            جميع منتجاتنا مستوردة من كبرى الشركات العالمية وتخضع لفحص صارم لضمان الجودة
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
