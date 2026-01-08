"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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

const villaFeatures = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    ),
    title: "890 Sq Ft Interior",
    description:
      "Thoughtfully designed living space with soaring ceilings and natural light",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: "800+ Sq Ft Outdoor",
    description:
      "Expansive deck with hot tub, fire pit, and forest views",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    title: "15-Foot Windows",
    description: "Floor-to-ceiling glass frames panoramic mountain views",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
      </svg>
    ),
    title: "Private Fire Pit",
    description: "Gather under the stars around your personal fire pit",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
        />
      </svg>
    ),
    title: "Chef-Grade Kitchen",
    description: "Fully equipped with premium appliances and cookware",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Private Hot Tub & Sauna",
    description: "Unwind in your personal wellness sanctuary",
  },
];

const villaAmenities = [
  "King-sized luxury bed",
  "Premium linens & towels",
  "Rainfall outdoor shower",
  "Deep soaking tub",
  "Smart home controls",
  "High-speed WiFi",
  "Bluetooth speakers",
  "French press & tea service",
  "Local artisan toiletries",
  "Plush robes & slippers",
  "In-villa dining option",
  "24/7 concierge service",
];

export default function VillasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/villa-exterior.jpg"
            alt="Luxury villa exterior"
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
              Accommodations
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-cream text-5xl md:text-7xl mb-6 text-shadow-strong"
            >
              The Villas
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto text-shadow"
            >
              Freestanding luxury retreats, each a private sanctuary designed to
              immerse you in the majesty of the North Georgia mountains.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Video Walkthrough */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/concierge-outside.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-forest/30" />
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Take a Tour
            </p>
            <h2 className="font-heading text-cream text-4xl md:text-5xl">
              Experience the Space
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Villa Overview */}
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
                Your Private Retreat
              </p>
              <h2 className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl mb-6">
                Where Every Detail
                <br />
                Speaks of Care
              </h2>
              <p className="text-stone text-lg leading-relaxed mb-6">
                Each villa at Cypress is a complete world unto itself—a
                thoughtfully designed 1-bedroom, 1-bathroom retreat where modern
                luxury meets the timeless beauty of nature.
              </p>
              <p className="text-stone text-lg leading-relaxed mb-8">
                Step through your door and into a world of 15-foot windows that
                dissolve the boundary between inside and out. Your private deck
                awaits with a bubbling hot tub, crackling fire pit, and the
                symphony of the forest as your soundtrack.
              </p>
              <motion.div whileTap={{ scale: 0.95 }} className="inline-block">
                <Link
                  href="https://app.mews.com/distributor/731c8c9f-31b9-403c-8806-b2f700cc24f5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-4 bg-forest text-cream text-sm md:text-base tracking-widest uppercase font-medium hover:bg-forest-light transition-colors"
                >
                  Check Availability
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px]">
                <Image
                  src="/images/instagram-590397587.jpg"
                  alt="Villa interior with mountain views"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-forest text-cream p-8 max-w-xs">
                <p className="font-heading text-3xl mb-2">890 sq ft</p>
                <p className="text-cream/70 text-sm">
                  Of thoughtfully designed interior space
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
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
              Villa Features
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl"
            >
              Designed for Restoration
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {villaFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-cream p-8 group hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center text-forest mb-6 group-hover:bg-gold/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-forest text-2xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-stone">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] md:h-[600px]"
            >
              <Image
                src="/images/instagram-605152610.jpg"
                alt="Villa living space"
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="grid grid-rows-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative h-[190px] md:h-auto"
              >
                <Image
                  src="/images/cypress-23.jpg"
                  alt="Outdoor hot tub"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[190px] md:h-auto"
              >
                <Image
                  src="/images/villa-exterior.jpg"
                  alt="Villa bedroom"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities List */}
      <section className="py-24 md:py-32 bg-forest text-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4">
                In Every Villa
              </p>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
                Thoughtful Amenities
              </h2>
              <p className="text-cream/70 text-lg leading-relaxed">
                Every villa comes equipped with carefully curated amenities
                designed to make your stay effortless and memorable. From the
                moment you arrive, everything you need is already waiting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ul className="grid grid-cols-2 gap-4">
                {villaAmenities.map((amenity) => (
                  <li key={amenity} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full" />
                    <span className="text-cream/80">{amenity}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-cream text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl mb-6"
            >
              Ready to Experience Cypress?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-stone text-lg mb-10 max-w-xl mx-auto"
            >
              Each villa offers a unique perspective of our 48-acre forest
              sanctuary. Book your private retreat and discover a new way to
              rest.
            </motion.p>
            <motion.div variants={fadeInUp} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://app.mews.com/distributor/731c8c9f-31b9-403c-8806-b2f700cc24f5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-5 bg-forest text-cream text-sm md:text-base tracking-widest uppercase font-medium hover:bg-forest-light transition-colors cta-breathe"
              >
                Book Your Villa
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
