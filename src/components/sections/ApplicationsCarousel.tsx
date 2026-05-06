import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  base?: string;
}

export default function ApplicationsCarousel({ base = '' }: Props) {
  const images = [
    { src: `${base}/images/applications/application-1.png`, alt: 'Industrial Control Applications - Shenzhen Qiyang Electronics' },
    { src: `${base}/images/applications/application-2.png`, alt: 'Aerospace Applications - Shenzhen Qiyang Electronics' },
    { src: `${base}/images/applications/application-3.png`, alt: 'Communication Equipment Applications - Shenzhen Qiyang Electronics' },
    { src: `${base}/images/applications/application-4.png`, alt: 'Automotive Electronics Applications - Shenzhen Qiyang Electronics' },
    { src: `${base}/images/applications/application-5.jpg`, alt: 'Medical Equipment Applications - Shenzhen Qiyang Electronics' },
  ];

  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] overflow-hidden rounded-lg bg-gray-100">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current].src}
          alt={images[current].alt}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow" aria-label="Previous">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow" aria-label="Next">
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/50'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
