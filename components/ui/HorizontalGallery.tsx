"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

interface HorizontalGalleryProps {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
}

export default function HorizontalGallery({ images, title, subtitle }: HorizontalGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 bg-forest overflow-hidden">
      {/* Header */}
      {(title || subtitle) && (
        <div className="max-w-7xl mx-auto px-6 mb-12">
          {subtitle && (
            <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="font-heading text-cream text-4xl md:text-5xl">
              {title}
            </h2>
          )}
        </div>
      )}

      {/* Horizontal scroll container */}
      <motion.div
        style={{ x }}
        className="flex gap-6 pl-6"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0 w-[400px] md:w-[500px] h-[300px] md:h-[400px] group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-colors duration-300" />

              {/* Image title overlay */}
              {image.title && (
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-forest/80 to-transparent">
                  <p className="text-cream font-heading text-xl">{image.title}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <div className="flex items-center justify-center mt-12 gap-3">
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gold/60 text-sm tracking-wider uppercase flex items-center gap-2"
        >
          <span>Scroll to explore</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
