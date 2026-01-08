"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

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

const faqs = [
  {
    question: "How far is Cypress Resort from Atlanta?",
    answer:
      "Cypress Resort is located in Jasper, Georgia—approximately 1 hour and 15 minutes north of Atlanta. The scenic drive takes you through the foothills of the Blue Ridge Mountains.",
  },
  {
    question: "Are pets allowed at the resort?",
    answer:
      "We love pets! Dogs are welcome in select villas for an additional fee. Please let us know when booking so we can prepare your villa with pet amenities.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Reservations cancelled 14+ days before arrival receive a full refund. Cancellations 7-13 days out receive a 50% refund. Within 7 days, no refund is issued, but we're happy to help reschedule based on availability.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring comfortable hiking clothes, layers for cooler evenings, and a sense of adventure. Each villa is fully stocked with towels, linens, toiletries, and kitchen essentials. We'll send a detailed packing list before your arrival.",
  },
  {
    question: "Is there cell service and WiFi?",
    answer:
      "Yes! Each villa has high-speed WiFi and smart home features. Cell service varies by carrier but is generally good. We encourage unplugging, but we understand the need to stay connected.",
  },
  {
    question: "What's the check-in/check-out time?",
    answer:
      "Check-in is at 4:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request—just ask our concierge team.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-sage/30 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex justify-between items-center text-left"
      >
        <span className="font-heading text-forest text-lg pr-4">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-gold text-2xl flex-shrink-0"
        >
          +
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-stone pb-5 leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
}

export default function BookPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeInUp}
              className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4"
            >
              Reservations
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-heading text-forest text-5xl md:text-7xl mb-6"
            >
              Book Your Stay
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-stone text-lg md:text-xl max-w-2xl mx-auto"
            >
              Your escape to the North Georgia mountains begins here.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="pb-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-mist p-8 md:p-12 text-center"
          >
            <h2 className="font-heading text-forest text-3xl md:text-4xl lg:text-5xl mb-6">
              Reserve Your Villa
            </h2>
            <p className="text-stone text-lg mb-8 max-w-xl mx-auto">
              Click below to view availability and secure your dates at Cypress
              Resort. Our booking system will guide you through selecting your
              perfect villa and any add-on experiences.
            </p>
            <motion.div whileTap={{ scale: 0.95 }}>
              <Link
                href="https://app.mews.com/distributor/731c8c9f-31b9-403c-8806-b2f700cc24f5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-5 bg-forest text-cream text-sm md:text-base tracking-widest uppercase font-medium hover:bg-forest-light transition-colors cta-breathe"
              >
                Check Availability
              </Link>
            </motion.div>
          </motion.div>

          {/* Contact Info with Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 grid md:grid-cols-2 gap-8"
          >
            <div className="bg-forest text-cream p-8">
              <h3 className="font-heading text-2xl mb-4">Contact Our Concierge</h3>
              <p className="text-cream/70 mb-6">
                Our concierge team is here to help you plan the perfect stay.
                Reach out with any questions about accommodations, experiences,
                or special requests.
              </p>
              <div className="space-y-3 text-cream/80">
                <p className="flex items-center gap-2">
                  <span className="text-gold">Phone:</span>
                  <a
                    href="tel:+17065551234"
                    className="hover:text-cream transition-colors"
                  >
                    (706) 555-1234
                  </a>
                </p>
                <p>
                  <span className="text-gold">Email:</span>{" "}
                  <a
                    href="mailto:concierge@cypressresort.com"
                    className="hover:text-cream transition-colors"
                  >
                    concierge@cypressresort.com
                  </a>
                </p>
                <p>
                  <span className="text-gold">Hours:</span> 8am – 8pm EST, Daily
                </p>
                <p>
                  <span className="text-gold">Location:</span> Jasper, Georgia
                </p>
              </div>
            </div>

            <div className="bg-forest text-cream p-8">
              <h3 className="font-heading text-2xl mb-4">Special Occasions</h3>
              <p className="text-cream/70 mb-6">
                Planning a proposal, anniversary, or celebration? Let us know
                and we'll help create unforgettable moments—from private dining
                by the waterfall to personalized in-villa experiences.
              </p>
              <p className="text-cream/80">
                <span className="text-gold">Inquire:</span>{" "}
                <a
                  href="mailto:events@cypressresort.com"
                  className="hover:text-cream transition-colors"
                >
                  events@cypressresort.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included - Expanded */}
      <section className="py-16 md:py-24 bg-mist">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4">
              All-Inclusive Experience
            </p>
            <h2 className="font-heading text-forest text-3xl md:text-4xl lg:text-5xl">
              Every Stay Includes
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Your Villa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-cream p-8"
            >
              <h3 className="font-heading text-forest text-xl mb-4">Your Private Villa</h3>
              <ul className="space-y-3 text-stone">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>1,200 sq ft freestanding villa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>King bed with luxury linens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Full kitchen (stocked for arrival)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Private deck with forest views</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Smart home + high-speed WiFi</span>
                </li>
              </ul>
            </motion.div>

            {/* Wellness */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-cream p-8"
            >
              <h3 className="font-heading text-forest text-xl mb-4">Wellness & Relaxation</h3>
              <ul className="space-y-3 text-stone">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Private hot tub (each villa)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>In-villa Finnish sauna</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Outdoor fire pit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Curated bath amenities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Plush robes & slippers</span>
                </li>
              </ul>
            </motion.div>

            {/* Experiences */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-cream p-8"
            >
              <h3 className="font-heading text-forest text-xl mb-4">Property & Experiences</h3>
              <ul className="space-y-3 text-stone">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>4+ miles of private trails</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>50-foot waterfall access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>On-property restaurant</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>24/7 concierge service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">•</span>
                  <span>Complimentary parking</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Our Promise
            </p>
            <h2 className="font-heading text-forest text-3xl md:text-4xl lg:text-5xl mb-6">
              Book with Confidence
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold text-xl">✓</span>
              </div>
              <h3 className="font-heading text-forest text-xl mb-2">
                Owner-Operated
              </h3>
              <p className="text-stone text-sm">
                Founded by Tanner & Melissa Cummings, who personally oversee
                every detail of your experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold text-xl">✓</span>
              </div>
              <h3 className="font-heading text-forest text-xl mb-2">
                5 Years in the Making
              </h3>
              <p className="text-stone text-sm">
                Every villa, trail, and experience has been thoughtfully crafted
                over years of planning and building.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold text-xl">✓</span>
              </div>
              <h3 className="font-heading text-forest text-xl mb-2">
                Secure Booking
              </h3>
              <p className="text-stone text-sm">
                Book directly through our secure platform with instant
                confirmation and flexible cancellation options.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-mist">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Have Questions?
            </p>
            <h2 className="font-heading text-forest text-3xl md:text-4xl lg:text-5xl">
              Frequently Asked
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-cream p-8 md:p-10"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-8"
          >
            <p className="text-stone">
              Still have questions?{" "}
              <a
                href="mailto:concierge@cypressresort.com"
                className="text-gold hover:text-gold-light transition-colors"
              >
                Contact our concierge team
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-forest text-cream text-center">
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
              Ready to Escape?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-cream/70 text-lg mb-10 max-w-xl mx-auto"
            >
              Opening January 2026. Secure your dates and be among the first to
              experience Cypress Resort.
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
