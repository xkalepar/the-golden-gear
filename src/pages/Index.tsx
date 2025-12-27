import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import WhyUsSection from "@/components/WhyUsSection";
import PartnersSection from "@/components/PartnersSection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroCarousel />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <WhyUsSection />
      <PartnersSection />
      <ContactSection />
      <MapSection />
      <Footer />
    </main>
  );
};

export default Index;
