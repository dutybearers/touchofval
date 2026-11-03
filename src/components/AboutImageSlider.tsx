import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    src: '/images/WhatsApp_Image_2026-10-30_at_2.03.52_PM.jpeg',
    alt: 'Portrait of a TOV Homes representative',
  },
  {
    src: '/images/WhatsApp_Image_2026-11-01_at_22.22.02.jpeg',
    alt: 'TOV Homes CEO/MD walking on stage with an award',
  },
  {
    src: '/images/WhatsApp_Image_2026-11-01_at_22.22.04.jpeg',
    alt: 'TOV Homes CEO/MD holding an award trophy',
  },
];

export default function AboutImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [activeIndex]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-tov-950 shadow-xl">
      {slides.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${
            index === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={index !== activeIndex}
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      ))}

      <button
        type="button"
        onClick={showPrevious}
        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-tov-950 shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-gold-400"
        aria-label="Show previous image"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={showNext}
        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-tov-950 shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-gold-400"
        aria-label="Show next image"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-1.5">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full shadow transition-all focus:outline-none focus:ring-2 focus:ring-white ${
              index === activeIndex ? 'w-7 bg-gold-400' : 'w-2 bg-white/70 hover:bg-white'
            }`}
            aria-label={`Show image ${index + 1}`}
            aria-current={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}
