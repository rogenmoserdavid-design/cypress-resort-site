"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/ui/Lightbox";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const images = [
  { src: "/images/villa-exterior.jpg", alt: "Cypress Resort villa exterior at dusk", span: "col-span-2 md:col-span-2 md:row-span-2", featured: true },
  { src: "/images/waterfall-fall.jpg", alt: "50-foot waterfall in autumn", span: "", featured: false },
  { src: "/images/forest-fall-trail.jpg", alt: "Forest trail through fall foliage", span: "", featured: false },
  { src: "/images/instagram-590397587.jpg", alt: "Villa nestled in the trees", span: "", featured: false },
  { src: "/images/instagram-605152610.jpg", alt: "Modern villa architecture", span: "", featured: false },
  { src: "/images/cypress-41.jpg", alt: "Waterfall cascading over rocks", span: "", featured: false },
  { src: "/images/maple-leaf-detail.jpg", alt: "Autumn maple leaves", span: "col-span-2", featured: false },
  { src: "/images/cypress-23.jpg", alt: "Creek winding through property", span: "", featured: false },
  { src: "/images/villa-renders-1.png", alt: "Villa interior living space", span: "", featured: false },
  { src: "/images/villa-renders-2.png", alt: "Villa bedroom with forest view", span: "col-span-2 md:col-span-2 md:row-span-2", featured: true },
  { src: "/images/instagram-597936050.jpg", alt: "Sunlit forest path", span: "", featured: false },
  { src: "/images/cypress-47.jpg", alt: "Founders Tanner and Melissa on deck", span: "", featured: false },
];

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Visual Journey
            </p>
            <h1 className="font-heading text-forest text-5xl md:text-7xl mb-6">
              Gallery
            </h1>
            <p className="text-stone text-lg md:text-xl max-w-2xl mx-auto">
              A glimpse into the beauty that awaits at Cypress Resort.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 md:pb-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`relative overflow-hidden group cursor-pointer ${image.span} ${
                  image.featured ? "h-64 md:h-[500px]" : "h-48 md:h-60"
                }`}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/20 transition-colors duration-300" />

                {/* Zoom icon on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-cream/90 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-forest"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hint text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-stone/60 mt-8 text-sm"
          >
            Click any image to view full size
          </motion.p>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={images}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </>
  );
}
