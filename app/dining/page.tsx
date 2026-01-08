"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function DiningPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/instagram-605152610.jpg"
            alt="Fine dining"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/50 via-forest/30 to-forest/70" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.p
              variants={fadeInUp}
              className="font-accent text-gold text-lg tracking-[0.3em] uppercase mb-4"
            >
              Culinary
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-cream text-5xl md:text-7xl mb-6 text-shadow-strong"
            >
              Dining
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto text-shadow"
            >
              From farm-to-table restaurant experiences to private dining under
              the stars, every meal at Cypress is crafted with intention.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4">
                The Restaurant
              </p>
              <h2 className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl mb-6">
                Farm to Forest
              </h2>
              <p className="text-stone text-lg leading-relaxed mb-6">
                Our restaurant celebrates the bounty of North Georgia. Working
                with local farmers, foragers, and artisans, our culinary team
                creates menus that change with the seasons and honor the land.
              </p>
              <p className="text-stone text-lg leading-relaxed mb-8">
                Large windows frame forest views, creating an atmosphere where
                fine dining feels as natural as the surroundings. Whether you're
                enjoying breakfast as morning mist rises or dinner as the sun
                sets through the trees, every meal becomes a moment.
              </p>
              <ul className="space-y-3">
                {[
                  "Seasonal menus featuring local ingredients",
                  "Curated wine selection",
                  "Craft cocktails with house-made botanicals",
                  "Dietary accommodations honored",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-forest">
                    <span className="w-2 h-2 bg-gold rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px]"
            >
              <Image
                src="/images/instagram-590397587.jpg"
                alt="Restaurant interior"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Private Dining */}
      <section className="py-24 md:py-32 bg-mist">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] lg:order-1"
            >
              <Image
                src="/images/cypress-23.jpg"
                alt="Private dining under the stars"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:order-2"
            >
              <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4">
                Exclusive Experience
              </p>
              <h2 className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl mb-6">
                Private Dining
                <br />
                Under the Stars
              </h2>
              <p className="text-stone text-lg leading-relaxed mb-6">
                For the most memorable evenings, arrange a private dinner in one
                of our curated forest settings. Our chef will design a
                personalized menu, and our team will handle every detail.
              </p>
              <p className="text-stone text-lg leading-relaxed mb-8">
                Dine by candlelight in a clearing, at the base of the waterfall,
                or on your private villa deck. These bespoke experiences are
                crafted around your preferences and the magic of the moment.
              </p>
              <p className="text-forest font-medium">
                Contact our concierge to arrange your private dining experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* In-Villa Dining */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p
              variants={fadeInUp}
              className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4"
            >
              Villa Service
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl mb-6"
            >
              In-Villa Dining
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-stone text-lg leading-relaxed mb-8"
            >
              Prefer to dine in the comfort of your villa? Our chef-grade
              kitchens come pre-stocked with local provisions, or our team can
              deliver restaurant meals directly to your door. For the ultimate
              experience, book a private chef to prepare a multi-course meal in
              your villa's kitchen.
            </motion.p>
            <motion.div variants={fadeInUp} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://app.mews.com/distributor/731c8c9f-31b9-403c-8806-b2f700cc24f5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-forest text-cream text-sm md:text-base tracking-widest uppercase font-medium hover:bg-forest-light transition-colors cta-breathe"
              >
                Book Your Stay
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
