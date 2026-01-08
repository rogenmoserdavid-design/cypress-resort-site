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

export default function OurStoryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/villa-exterior.jpg"
            alt="Cypress Resort"
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
              About Us
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-cream text-5xl md:text-7xl mb-6 text-shadow-strong"
            >
              Our Story
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-cream/80 text-lg md:text-xl max-w-2xl mx-auto text-shadow"
            >
              How a hidden waterfall became a sanctuary for restoration.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The Beginning */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-6"
            >
              The Beginning
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl mb-8"
            >
              A Thin Space
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-stone text-lg leading-relaxed mb-6"
            >
              In Celtic tradition, a "thin space" is a place where the boundary
              between heaven and earth feels thinner—where you can sense
              something greater than yourself. When Melissa first walked through
              these 48 acres and discovered the hidden 50-foot waterfall, she
              knew she had found one.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-stone text-lg leading-relaxed"
            >
              Together with her husband Tanner, they saw not just beautiful
              land, but an opportunity to create something meaningful—a place
              where others could experience the same sense of wonder, peace, and
              connection that they felt standing at the base of that waterfall.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quote Break */}
      <section className="py-24 md:py-32 bg-forest text-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-heading text-3xl md:text-5xl leading-tight mb-6">
              "The land was waiting for something. We just gave it a purpose."
            </p>
            <p className="font-accent text-gold text-sm tracking-widest uppercase">
              — Tanner & Melissa Cummings, Founders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet the Founders */}
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
                src="/images/cypress-47.jpg"
                alt="Tanner and Melissa Cummings, founders of Cypress Resort"
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
                Meet the Founders
              </p>
              <h2 className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl mb-6">
                Tanner & Melissa
                <br />
                Cummings
              </h2>
              <p className="text-stone text-lg leading-relaxed mb-6">
                What started as a family dream has become a labor of love that
                spans five years of planning, building, and refining. Tanner
                and Melissa didn't just build a resort—they poured their hearts
                into creating a place that reflects their deepest values.
              </p>
              <p className="text-stone text-lg leading-relaxed">
                From the first walk through the property to the final touches
                on each villa, they've been hands-on in every detail, ensuring
                that Cypress Resort feels less like a hotel and more like a
                home you never knew you needed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A Family Journey */}
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
                Built with Love
              </p>
              <h2 className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl mb-6">
                A Family
                <br />
                Journey
              </h2>
              <p className="text-stone text-lg leading-relaxed mb-6">
                Building Cypress wasn't just a business venture—it was a family
                adventure. Tanner and Melissa's children grew up on this land,
                watching trees become trails, and blueprints become buildings.
              </p>
              <p className="text-stone text-lg leading-relaxed">
                They learned the value of patience, the importance of stewarding
                creation well, and that the best things in life are worth
                building slowly. That spirit—of care, intentionality, and
                love—is woven into every corner of this place.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px]"
            >
              <Image
                src="/images/cypress-42.png"
                alt="The Cummings family during resort construction"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Vision */}
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
                The Vision
              </p>
              <h2 className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl mb-6">
                Luxury That
                <br />
                Honors Nature
              </h2>
              <p className="text-stone text-lg leading-relaxed mb-6">
                We didn't want to build a traditional resort. Instead of one
                large building, we designed freestanding villas dispersed
                throughout the forest, connected by winding trails. Every
                amenity is its own structure, discovered as you explore.
              </p>
              <p className="text-stone text-lg leading-relaxed">
                This "deconstructed resort" approach means you're always
                immersed in nature. The forest isn't the backdrop—it's the main
                attraction. We built around the trees, not in spite of them.
              </p>
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
                alt="Villa nestled in forest"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Video */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/vision.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-forest/40" />
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl px-6"
          >
            <p className="font-heading text-cream text-3xl md:text-5xl leading-tight mb-6">
              "What began as a vision is now becoming reality"
            </p>
            <p className="font-accent text-gold text-sm tracking-widest uppercase">
              Opening January 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4"
            >
              What We Believe
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl"
            >
              Our Values
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Restoration Over Distraction",
                description:
                  "We're not about entertainment—we're about helping you find peace. No TVs in the villas. No crowded pools. Just space to breathe and be.",
              },
              {
                title: "Nature as Partner",
                description:
                  "We built around the trees, not through them. Sustainability isn't a marketing word for us—it's how we ensure this land remains a thin space for generations.",
              },
              {
                title: "Service with Soul",
                description:
                  "Our team learns your name, your preferences, your story. We believe hospitality is an art form, and every interaction should feel personal.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-heading text-forest text-2xl mb-4">
                  {value.title}
                </h3>
                <p className="text-stone leading-relaxed">{value.description}</p>
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
              Experience It Yourself
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-cream/70 text-lg mb-10 max-w-xl mx-auto"
            >
              Words can only capture so much. Come see what makes Cypress
              special—and discover your own thin space.
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
