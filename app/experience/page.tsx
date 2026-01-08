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

const experiences = [
  {
    title: "The Waterfall",
    subtitle: "Our Signature Attraction",
    description:
      "A private 50-foot cascade, accessible only to Cypress guests. Follow the forest trail through ancient trees until the sound of rushing water announces your arrival. Morning mist rises from the pool below, creating an ethereal atmosphere that feels like stepping into another world.",
    image:
      "/images/instagram-587032511.jpg",
  },
  {
    title: "Forest Trails",
    subtitle: "4+ Miles of Discovery",
    description:
      "Winding paths connect every villa and amenity, inviting you to discover hidden clearings, mountain vistas, and quiet spots for reflection. Whether you seek a morning jog or a contemplative stroll, the forest awaits.",
    image:
      "/images/instagram-597936050.jpg",
  },
  {
    title: "The Glass Chapel",
    subtitle: "A Sacred Space",
    description:
      "Nestled among the trees, our glass chapel offers a unique venue for intimate ceremonies or quiet meditation. Floor-to-ceiling windows dissolve the boundary between sacred space and natural wonder.",
    image:
      "/images/instagram-605152610.jpg",
  },
  {
    title: "The Library",
    subtitle: "Quiet Contemplation",
    description:
      "A curated collection awaits in our forest library. Large windows frame the trees outside, making this the perfect retreat for a rainy afternoon or a quiet morning with coffee.",
    image:
      "/images/instagram-590397587.jpg",
  },
  {
    title: "Fitness Center",
    subtitle: "Movement & Wellness",
    description:
      "State-of-the-art equipment meets inspiring views in our high-end fitness center. Train with the forest as your backdrop, then recover in the connected sauna and steam facilities.",
    image:
      "/images/instagram-590397587.jpg",
  },
  {
    title: "Stargazing",
    subtitle: "Night Sky Wonder",
    description:
      "Far from city lights, the North Georgia sky reveals its full splendor. Step outside your villa and look up—the Milky Way stretches overhead, and countless constellations await discovery.",
    image:
      "/images/instagram-587032511.jpg",
  },
];

export default function ExperiencePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/instagram-587032511.jpg"
            alt="Cascading waterfall at Cypress Resort"
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
              Discover
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-cream text-5xl md:text-7xl mb-6 text-shadow-strong"
            >
              The Experience
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto text-shadow"
            >
              Beyond your villa, 48 acres of wonder await. From our signature
              waterfall to hidden forest trails, every moment at Cypress is an
              invitation to discover.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Experiences */}
      <section className="bg-cream">
        {experiences.slice(0, 2).map((experience, index) => (
          <div
            key={experience.title}
            className={`py-24 md:py-32 ${index % 2 === 1 ? "bg-mist" : "bg-cream"}`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={index % 2 === 1 ? "lg:col-start-2" : ""}
                >
                  <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4">
                    {experience.subtitle}
                  </p>
                  <h2 className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl mb-6">
                    {experience.title}
                  </h2>
                  <p className="text-stone text-lg leading-relaxed">
                    {experience.description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`relative h-[400px] md:h-[500px] ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Video Break - Concierge Building */}
      <section className="relative h-[50vh] w-full overflow-hidden bg-forest">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        >
          <source src="/videos/concierge-upper.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-forest/60 to-transparent" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4">
                The Concierge
              </p>
              <h2 className="font-heading text-cream text-3xl md:text-4xl max-w-md">
                Where Every Detail is Considered
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Remaining Experiences */}
      <section className="bg-cream">
        {experiences.slice(2).map((experience, index) => (
          <div
            key={experience.title}
            className={`py-24 md:py-32 ${index % 2 === 1 ? "bg-mist" : "bg-cream"}`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={index % 2 === 1 ? "lg:col-start-2" : ""}
                >
                  <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4">
                    {experience.subtitle}
                  </p>
                  <h2 className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl mb-6">
                    {experience.title}
                  </h2>
                  <p className="text-stone text-lg leading-relaxed">
                    {experience.description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`relative h-[400px] md:h-[500px] ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-forest text-cream text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6"
            >
              Begin Your Journey
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-cream/70 text-lg mb-10 max-w-xl mx-auto"
            >
              Every experience at Cypress is included with your stay. Book your
              villa and discover all that awaits in our forest sanctuary.
            </motion.p>
            <motion.div variants={fadeInUp} whileTap={{ scale: 0.95 }}>
              <Link
                href="/book"
                
                
                className="inline-block px-12 py-5 bg-gold text-forest text-sm md:text-base tracking-widest uppercase font-medium hover:bg-gold-light transition-colors cta-breathe"
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
