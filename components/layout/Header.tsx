"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Villas", href: "/villas" },
  { name: "Experience", href: "/experience" },
  { name: "Dining", href: "/dining" },
  { name: "Spa", href: "/spa" },
  { name: "Gallery", href: "/gallery" },
  { name: "Our Story", href: "/our-story" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-3">
            <Image
              src="/images/logo-small.jpg"
              alt="Cypress Resort"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span
              className={`font-heading text-xl md:text-2xl font-medium tracking-wider transition-colors duration-300 ${
                isScrolled ? "text-forest" : "text-cream"
              }`}
            >
              CYPRESS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:opacity-70 ${
                  isScrolled ? "text-forest" : "text-cream"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Book Now Button */}
          <div className="hidden lg:block">
            <Link
              href="/book"
              className={`px-6 py-3 text-sm tracking-widest uppercase transition-all duration-300 ${
                isScrolled
                  ? "bg-forest text-cream hover:bg-forest-light"
                  : "bg-cream/20 text-cream backdrop-blur-sm hover:bg-cream/30 border border-cream/30"
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-2 bg-forest"
                    : isScrolled
                      ? "bg-forest"
                      : "bg-cream"
                }`}
              />
              <span
                className={`h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "opacity-0"
                    : isScrolled
                      ? "bg-forest"
                      : "bg-cream"
                }`}
              />
              <span
                className={`h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-2 bg-forest"
                    : isScrolled
                      ? "bg-forest"
                      : "bg-cream"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-heading text-3xl text-forest hover:text-sage transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="/book"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-8 py-4 bg-forest text-cream text-sm tracking-widest uppercase hover:bg-forest-light transition-colors"
                >
                  Book Now
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
