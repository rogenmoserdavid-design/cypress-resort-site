"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/instagram-605152610.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/waterfall-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-forest/20 to-forest/60" />
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.p
              variants={fadeInUp}
              className="font-accent text-gold text-lg md:text-xl tracking-[0.3em] uppercase mb-6"
            >
              Jasper, Georgia
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-cream text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight text-shadow-strong"
            >
              Where Luxury
              <br />
              and Nature Meet
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 text-shadow"
            >
              Escape to 48 acres of pristine forest, where private luxury villas
              await beneath ancient trees and a 50-foot waterfall whispers
              serenity.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link
                  href="/book"
                  
                  
                  className="px-10 py-4 bg-gold text-forest text-sm md:text-base tracking-widest uppercase font-medium hover:bg-gold-light transition-colors cta-breathe"
                >
                  Book Your Escape
                </Link>
              </motion.div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link
                  href="/villas"
                  className="px-10 py-4 border border-cream/50 text-cream text-sm md:text-base tracking-widest uppercase hover:bg-cream/10 transition-colors"
                >
                  Explore Villas
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-cream rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeInUp}
              className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-6"
            >
              A Thin Space
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl mb-8"
            >
              A Place to Pause,
              <br />
              Reconnect, and Restore
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-stone text-lg md:text-xl leading-relaxed"
            >
              In Celtic tradition, a "thin space" is a sacred place where the
              boundary between heaven and earth feels thinner—where you can
              sense something greater. Cypress is one of those rare places.
              Nestled in the North Georgia mountains, just 50 minutes from
              Atlanta, we've created a sanctuary where time slows, nature
              speaks, and the soul finds rest.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The Villas Section */}
      <section className="py-24 md:py-32 bg-mist">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4"
            >
              Accommodations
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl"
            >
              Private Luxury Villas
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Villa Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] md:h-[600px]"
            >
              <Image
                src="/images/instagram-590397587.jpg"
                alt="Cypress Resort luxury villa exterior"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Villa Details */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h3 className="font-heading text-forest text-3xl md:text-4xl mb-6">
                890 Square Feet of Tranquility
              </h3>
              <p className="text-stone text-lg mb-8 leading-relaxed">
                Each freestanding villa is a private retreat, designed with
                15-foot panoramic windows that frame the majesty of the North
                Georgia mountains. Wake to birdsong, soak in your private hot
                tub beneath the stars, and let the forest be your only neighbor.
              </p>

              <ul className="grid grid-cols-2 gap-4 mb-10">
                {[
                  "15-foot panoramic windows",
                  "Private hot tub & sauna",
                  "Outdoor rain shower",
                  "Wood-burning fire pit",
                  "Chef-grade kitchen",
                  "King-sized bed",
                  "Soaking tub",
                  "800 sq ft outdoor living",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-forest"
                  >
                    <span className="w-2 h-2 bg-gold rounded-full" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/villas"
                className="inline-flex items-center gap-2 text-forest font-medium hover:text-sage transition-colors group"
              >
                <span className="tracking-widest uppercase text-sm">
                  Discover the Villas
                </span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Experience Grid */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4"
            >
              The Experience
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl"
            >
              Moments to Remember
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "The Waterfall",
                description:
                  "Our signature 50-foot cascade, accessible by forest trail",
                image: "/images/cypress-41.jpg",
                href: "/experience",
              },
              {
                title: "Forest Dining",
                description: "Farm-to-table cuisine under ancient canopies",
                image: "/images/cypress-23.jpg",
                href: "/dining",
              },
              {
                title: "Wellness & Spa",
                description: "Treatments in nature, tailored to restore",
                image: "/images/instagram-605152610.jpg",
                href: "/spa",
              },
              {
                title: "Nature Trails",
                description: "4+ miles winding through pristine forest",
                image: "/images/instagram-597936050.jpg",
                href: "/experience",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={item.href} className="group block">
                  <div className="relative h-80 mb-4 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/10 transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-forest text-2xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone text-sm">{item.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Width Image Break */}
      <section className="relative h-[60vh] md:h-[80vh]">
        <Image
          src="/images/forest-fall-trail.jpg"
          alt="Fall forest trail at Cypress Resort"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-heading text-cream text-3xl md:text-5xl lg:text-6xl max-w-3xl leading-tight text-shadow-strong">
              "The land was waiting for something. We just gave it a purpose."
            </p>
            <p className="font-accent text-gold text-sm tracking-widest uppercase mt-6 text-shadow">
              — Tanner & Melissa Cummings, Founders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 md:py-32 bg-mist">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
          >
            <div>
              <motion.p
                variants={fadeInUp}
                className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4"
              >
                Gallery
              </motion.p>
              <motion.h2
                variants={fadeInUp}
                className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl"
              >
                A Glimpse of Cypress
              </motion.h2>
            </div>
            <motion.div variants={fadeInUp} className="mt-6 md:mt-0">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-forest font-medium hover:text-sage transition-colors group"
              >
                <span className="tracking-widest uppercase text-sm">
                  View Full Gallery
                </span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/images/instagram-605152610.jpg",
              "/images/cypress-41.jpg",
              "/images/instagram-590397587.jpg",
              "/images/instagram-605152610.jpg",
              "/images/instagram-587032511.jpg",
              "/images/cypress-23.jpg",
              "/images/instagram-597936050.jpg",
              "/images/instagram-587032511.jpg",
            ].map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative overflow-hidden ${
                  index === 0 || index === 5 ? "row-span-2 h-[400px]" : "h-48"
                }`}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 md:py-32 bg-forest text-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4">
                Location
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
                Close Enough to Escape,
                <br />
                Far Enough to Unwind
              </h2>
              <p className="text-cream/70 text-lg mb-8 leading-relaxed">
                Located in Jasper, Georgia, Cypress Resort sits in the heart of
                the North Georgia mountains—just 50 minutes from Atlanta. Close
                enough for a spontaneous weekend, far enough to feel worlds
                away.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>50 minutes from Atlanta</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>48 acres of pristine forest</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-gold"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span>Private 50-foot waterfall</span>
                </li>
              </ul>
              <Link
                href="/our-story"
                className="inline-flex items-center gap-2 text-gold font-medium hover:text-gold-light transition-colors group"
              >
                <span className="tracking-widest uppercase text-sm">
                  Read Our Story
                </span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/location-map.jpg"
                alt="Cypress Resort location map showing driving distances from Atlanta, Nashville, Chattanooga, and Charlotte"
                fill
                className="object-contain bg-forest"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-cream text-center">
        <div className="max-w-3xl mx-auto px-6">
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
              Begin Your Journey
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl mb-6"
            >
              Your Escape Awaits
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-stone text-lg mb-10 max-w-xl mx-auto"
            >
              Book your stay at Cypress Resort and discover the magic of the
              North Georgia mountains. Luxury, nature, and tranquility—all in
              one extraordinary place.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="/book"
                
                
                className="inline-block px-12 py-5 bg-forest text-cream text-sm md:text-base tracking-widest uppercase font-medium hover:bg-forest-light transition-colors cta-breathe"
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
