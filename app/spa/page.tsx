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

const treatments = [
  {
    name: "Forest Renewal Massage",
    duration: "90 min",
    description:
      "A signature full-body massage incorporating warm stones and locally-sourced botanical oils.",
  },
  {
    name: "Mountain Air Facial",
    duration: "60 min",
    description:
      "Revitalizing facial using organic products and techniques to restore your natural glow.",
  },
  {
    name: "Couples Retreat",
    duration: "120 min",
    description:
      "Side-by-side treatments in your villa, followed by a private hot tub experience.",
  },
  {
    name: "Sunrise Yoga",
    duration: "60 min",
    description:
      "Private or small group session in a forest clearing as the morning light filters through.",
  },
  {
    name: "Sound Bath Meditation",
    duration: "45 min",
    description:
      "Guided meditation with crystal singing bowls in our glass chapel or waterfall setting.",
  },
  {
    name: "Deep Tissue Recovery",
    duration: "90 min",
    description:
      "Therapeutic massage targeting muscle tension and promoting deep relaxation.",
  },
];

export default function SpaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/instagram-587032511.jpg"
            alt="Cascading water - stillness and wellness"
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
              Wellness
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-cream text-5xl md:text-7xl mb-6 text-shadow-strong"
            >
              Spa & Wellness
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto text-shadow"
            >
              Restore body and mind in our forest sanctuary. Every treatment is
              designed to harmonize with nature and leave you renewed.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
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
              Our Philosophy
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl mb-8"
            >
              Wellness in the Wild
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-stone text-lg leading-relaxed"
            >
              At Cypress, we believe true wellness happens when you're
              surrounded by nature. That's why we bring the spa to you—in your
              villa, by the waterfall, or in a quiet forest clearing. Our
              therapists use organic, locally-sourced products and techniques
              that honor the healing power of the natural world.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Villa Wellness */}
      <section className="py-24 md:py-32 bg-mist">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4">
                In Your Villa
              </p>
              <h2 className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl mb-6">
                Private Wellness
              </h2>
              <p className="text-stone text-lg leading-relaxed mb-6">
                Every villa at Cypress is its own wellness retreat. Your private
                hot tub sits on the deck, surrounded by forest. A personal sauna
                awaits after a hike. The outdoor rain shower connects you to the
                elements.
              </p>
              <p className="text-stone text-lg leading-relaxed mb-8">
                Arrange an in-villa massage, and our therapist will arrive with
                everything needed to transform your space into a private spa.
                There's no need to go anywhere—restoration comes to you.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {[
                  "Private hot tub",
                  "Personal sauna",
                  "Outdoor rain shower",
                  "Soaking tub",
                  "In-villa treatments",
                  "Wellness amenities",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-forest">
                    <span className="w-2 h-2 bg-gold rounded-full" />
                    <span className="text-sm">{item}</span>
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
                src="/images/instagram-587032511.jpg"
                alt="Creek with flowers - natural clarity and wellness"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatments */}
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
              Treatments
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl"
            >
              Signature Experiences
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-mist p-8"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading text-forest text-2xl">
                    {treatment.name}
                  </h3>
                  <span className="text-gold text-sm font-medium">
                    {treatment.duration}
                  </span>
                </div>
                <p className="text-stone text-sm leading-relaxed">
                  {treatment.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Ready to Restore?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-cream/70 text-lg mb-10 max-w-xl mx-auto"
            >
              Book your villa and let our wellness team know your preferences.
              We'll craft a personalized wellness experience just for you.
            </motion.p>
            <motion.div variants={fadeInUp} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://app.mews.com/distributor/731c8c9f-31b9-403c-8806-b2f700cc24f5"
                target="_blank"
                rel="noopener noreferrer"
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
