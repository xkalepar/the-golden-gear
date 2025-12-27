import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroMachinery from "@/assets/hero-machinery.jpg";
import heroTrucks from "@/assets/hero-trucks.jpg";
import heroFactory from "@/assets/hero-factory.jpg";

const slides = [
  {
    image: heroMachinery,
    title: "الريادة في استيراد الآليات الثقيلة",
    subtitle: "نوفر أحدث المعدات والآليات من أفضل المصنعين العالميين",
  },
  {
    image: heroTrucks,
    title: "أسطول متكامل من الشاحنات والمركبات",
    subtitle: "شاحنات نقل وحمل بمواصفات عالمية تلبي جميع احتياجاتكم",
  },
  {
    image: heroFactory,
    title: "معدات المصانع والمشاريع",
    subtitle: "تجهيزات صناعية متطورة لتطوير مشاريعكم وأعمالكم",
  },
];

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: "rtl" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative h-full"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-hero-overlay" />

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container-custom">
                  <div className="max-w-3xl">
                    <h1
                      className={`heading-display text-primary-foreground mb-6 ${
                        selectedIndex === index ? "animate-fade-up" : "opacity-0"
                      }`}
                    >
                      {slide.title}
                    </h1>
                    <p
                      className={`text-xl md:text-2xl text-primary-foreground/80 mb-4 ${
                        selectedIndex === index
                          ? "animate-fade-up delay-200"
                          : "opacity-0"
                      }`}
                    >
                      {slide.subtitle}
                    </p>
                    <p
                      className={`text-lg text-primary-foreground/70 mb-8 ${
                        selectedIndex === index
                          ? "animate-fade-up delay-300"
                          : "opacity-0"
                      }`}
                    >
                      شركة الترس الذهبي - شريككم الموثوق في استيراد الآليات الثقيلة والمركبات وقطع الغيار الأصلية
                    </p>
                    <div
                      className={`flex flex-wrap gap-4 ${
                        selectedIndex === index
                          ? "animate-fade-up delay-400"
                          : "opacity-0"
                      }`}
                    >
                      <Button
                        variant="gold"
                        size="lg"
                        onClick={() => scrollToSection("#contact")}
                      >
                        تواصل معنا
                      </Button>
                      <Button
                        variant="hero"
                        size="lg"
                        onClick={() => scrollToSection("#services")}
                      >
                        خدماتنا
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        aria-label="الشريحة التالية"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      <button
        onClick={scrollPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        aria-label="الشريحة السابقة"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? "bg-primary w-8"
                : "bg-secondary-foreground/30 hover:bg-secondary-foreground/50"
            }`}
            aria-label={`انتقل للشريحة ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-secondary-foreground/50">
        <span className="text-sm rotate-90 origin-center translate-y-8">اسحب للأسفل</span>
        <div className="w-6 h-10 rounded-full border-2 border-secondary-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
