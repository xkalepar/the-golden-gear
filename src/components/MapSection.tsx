const MapSection = () => {
  return (
    <section id="map" className="relative h-[400px] md:h-[500px]">
      {/* Map Overlay Info */}
      <div className="absolute top-6 right-6 z-10 bg-secondary/95 backdrop-blur-sm rounded-xl p-6 shadow-elevated max-w-sm">
        <h3 className="text-lg font-bold text-secondary-foreground mb-2">
          موقعنا
        </h3>
        <p className="text-muted-foreground mb-1">جوددائم، الزاوية، ليبيا</p>
      </div>

      {/* Google Map Embed */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3354.176951271781!2d12.797112875663107!3d32.7875670736593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDQ3JzE1LjIiTiAxMsKwNDcnNTguOSJF!5e0!3m2!1sen!2sly!4v1766861911784!5m2!1sen!2sly"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="موقع شركة الترس الذهبي"
        className="grayscale hover:grayscale-0 transition-all duration-500"
      />
    </section>
  );
};

export default MapSection;
