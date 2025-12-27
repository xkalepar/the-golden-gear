import { useState, useEffect, useRef } from "react";

import galleryExcavator from "@/assets/gallery-excavator.jpg";
import galleryVehicles from "@/assets/gallery-vehicles.jpg";
import galleryTruck from "@/assets/gallery-truck.jpg";
import galleryMotorcycle from "@/assets/gallery-motorcycle.jpg";
import galleryLoader from "@/assets/gallery-loader.jpg";
import galleryParts from "@/assets/gallery-parts.jpg";

const galleryItems = [
  {
    image: galleryExcavator,
    title: "حفارات هيونداي",
    category: "آليات ثقيلة",
  },
  {
    image: galleryVehicles,
    title: "سيارات متنوعة",
    category: "مركبات",
  },
  {
    image: galleryTruck,
    title: "شاحنات نقل",
    category: "شاحنات",
  },
  {
    image: galleryMotorcycle,
    title: "دراجات نارية",
    category: "دراجات",
  },
  {
    image: galleryLoader,
    title: "لوادر كواشيك",
    category: "آليات ثقيلة",
  },
  {
    image: galleryParts,
    title: "قطع غيار أصلية",
    category: "قطع غيار",
  },
];

const GallerySection = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(galleryItems.length).fill(false));
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleItems((prev) => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="section-padding bg-cream">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            معرض الصور
          </span>
          <h2 className="heading-section text-secondary mb-6">
            اكتشف <span className="text-primary">منتجاتنا المتميزة</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            نعرض لكم مجموعة من أحدث الآليات والمركبات والمعدات التي نوفرها لعملائنا الكرام
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`group relative aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ${
                visibleItems[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 right-0 left-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-secondary-foreground">
                  {item.title}
                </h3>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-4 border-primary rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
