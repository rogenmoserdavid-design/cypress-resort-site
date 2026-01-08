'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useBooking } from '../BookingFlow';
import { formatCurrency } from '@/lib/booking-data';

const features = [
  { icon: '🛏️', label: 'King Bed', desc: 'Luxury linens' },
  { icon: '🪟', label: '15-ft Windows', desc: 'Forest views' },
  { icon: '🛁', label: 'Soaking Tub', desc: 'Rainfall shower' },
  { icon: '♨️', label: 'Private Hot Tub', desc: 'On your deck' },
  { icon: '🧖', label: 'Sauna', desc: 'In-villa' },
  { icon: '🔥', label: 'Fire Pit', desc: 'Wood-burning' },
  { icon: '👨‍🍳', label: 'Full Kitchen', desc: 'Chef-grade' },
  { icon: '📶', label: 'High-Speed WiFi', desc: 'Smart home' },
];

export default function VillaSelection() {
  const { villa, numberOfNights, nextStep, prevStep } = useBooking();

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
        <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4">Your Accommodation</p>
        <h1 className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl">{villa.name}</h1>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="relative aspect-[16/9] mb-8 overflow-hidden rounded-sm">
        <Image src={villa.image} alt={villa.name} fill className="object-cover" />
        <div className="absolute top-4 right-4 bg-gold text-forest px-4 py-2 text-sm font-medium">Selected</div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-6 md:p-8 rounded-sm border border-stone/10 mb-8">
        <p className="text-stone text-lg mb-6 leading-relaxed">{villa.description}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-center">
          <div className="bg-mist p-4"><p className="font-heading text-forest text-2xl">{villa.bedrooms}</p><p className="text-stone text-sm">Bedroom</p></div>
          <div className="bg-mist p-4"><p className="font-heading text-forest text-2xl">{villa.bathrooms}</p><p className="text-stone text-sm">Bathroom</p></div>
          <div className="bg-mist p-4"><p className="font-heading text-forest text-2xl">{villa.sqftInterior}</p><p className="text-stone text-sm">Sq Ft Interior</p></div>
          <div className="bg-mist p-4"><p className="font-heading text-forest text-2xl">{villa.sqftDeck}</p><p className="text-stone text-sm">Sq Ft Deck</p></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div key={f.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.05 }} className="text-center p-3">
              <span className="text-2xl mb-2 block">{f.icon}</span>
              <p className="font-medium text-forest text-sm">{f.label}</p>
              <p className="text-stone text-xs">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="bg-forest text-cream p-6 rounded-sm flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div>
          <p className="text-cream/70 text-sm">Nightly Rate</p>
          <p className="font-heading text-3xl">{formatCurrency(villa.pricePerNight)}</p>
        </div>
        {numberOfNights > 0 && (
          <div className="text-center md:text-right">
            <p className="text-cream/70 text-sm">{numberOfNights} nights</p>
            <p className="font-heading text-2xl">{formatCurrency(villa.pricePerNight * numberOfNights)}</p>
          </div>
        )}
      </motion.div>

      <div className="flex gap-4 justify-center">
        <button onClick={prevStep} className="px-8 py-4 border border-forest text-forest text-sm tracking-widest uppercase hover:bg-forest hover:text-cream transition-colors">Back</button>
        <button onClick={nextStep} className="px-8 py-4 bg-forest text-cream text-sm tracking-widest uppercase hover:bg-forest-light transition-colors">Continue</button>
      </div>
    </div>
  );
}
