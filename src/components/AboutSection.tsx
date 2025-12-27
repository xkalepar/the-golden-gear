import { Building2, Globe, Target, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "شركة رائدة",
    description: "من أبرز الموردين في السوق الليبي للآليات الثقيلة والمركبات",
  },
  {
    icon: Globe,
    title: "جودة عالمية",
    description: "منتجات مستوردة من أفضل المصنعين العالميين بمعايير دولية",
  },
  {
    icon: TrendingUp,
    title: "مركبات حديثة",
    description:
      "تشكيلة واسعة من المركبات الحديثة ومعدات النقل متعددة الاستخدامات",
  },
  {
    icon: Target,
    title: "رؤية طموحة",
    description: "الارتقاء بقطاع النقل في ليبيا وتقديم حلول متطورة",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            من نحن
          </span>
          <h2 className="heading-section text-secondary mb-6">
            <span className="text-primary">الترس الذهبي</span> - شريككم الموثوق
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            شركة الترس الذهبي هي واحدة من أبرز الشركات الرائدة في استيراد
            الآليات الثقيلة، المركبات، وقطع الغيار الأصلية، بالإضافة إلى تجهيزات
            المصانع والمشاريع الكبرى في ليبيا.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-industrial group text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-secondary mb-6">
              نلتزم بتقديم أفضل الحلول للأفراد والشركات والمؤسسات
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                نحرص في شركة الترس الذهبي على توفير منتجات عالية الجودة تلبي
                المعايير الدولية، بدءاً من المركبات الحديثة وصولاً إلى معدات
                النقل متعددة الاستخدامات.
              </p>
              <p>
                رؤيتنا تتمحور حول الارتقاء بمستوى قطاع النقل والآليات في ليبيا،
                من خلال تقديم حلول متطورة ومبتكرة تواكب التطورات العالمية.
              </p>
              <p>
                نسعى دائماً لخدمة الأفراد والشركات والمؤسسات بأعلى معايير الجودة
                والالتزام، مع ضمان الشفافية الكاملة في جميع تعاملاتنا.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="card-industrial text-center p-8">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  +15
                </div>
                <div className="text-muted-foreground">سنة خبرة</div>
              </div>
              <div className="card-industrial text-center p-8">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  +500
                </div>
                <div className="text-muted-foreground">عميل راضٍ</div>
              </div>
              <div className="card-industrial text-center p-8">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  +1000
                </div>
                <div className="text-muted-foreground">منتج</div>
              </div>
              <div className="card-industrial text-center p-8">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  +20
                </div>
                <div className="text-muted-foreground">شريك عالمي</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
