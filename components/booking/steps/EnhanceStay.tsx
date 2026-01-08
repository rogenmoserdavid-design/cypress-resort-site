'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useBooking } from '../BookingFlow';
import { formatCurrency } from '@/lib/booking-data';

export default function EnhanceStay() {
  const { state, dispatch, addOns, nextStep, prevStep } = useBooking();
  const selectedIds = state.selectedAddOns.map(s => s.id);

  const categories = [
    { key: 'spa', label: 'Spa & Wellness' },
    { key: 'dining', label: 'Dining Experiences' },
    { key: 'special', label: 'Special Occasions' },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4">Personalize Your Experience</p>
        <h1 className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl mb-4">Enhance Your Stay</h1>
        <p className="text-stone text-lg">Add spa treatments, dining experiences, or special touches to make your visit unforgettable.</p>
      </motion.div>

      {categories.map((cat, catIdx) => (
        <motion.div key={cat.key} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: catIdx * 0.1 }} className="mb-12">
          <h2 className="font-heading text-forest text-2xl mb-6">{cat.label}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.filter(a => a.category === cat.key).map((addon, i) => {
              const isSelected = selectedIds.includes(addon.id);
              return (
                <motion.button
                  key={addon.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIdx * 0.1 + i * 0.05 }}
                  onClick={() => dispatch({ type: 'TOGGLE_ADDON', payload: addon.id })}
                  className={`text-left bg-white rounded-sm overflow-hidden border-2 transition-all duration-300 hover:shadow-md
                    ${isSelected ? 'border-gold shadow-md' : 'border-transparent'}`}
                >
                  <div className="relative aspect-[3/2]">
                    <Image src={addon.image} alt={addon.name} fill className="object-cover" />
                    {isSelected && (
                      <div className="absolute top-3 right-3 w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-heading text-forest text-lg">{addon.name}</h3>
                      <span className="text-gold font-medium">{formatCurrency(addon.price)}</span>
                    </div>
                    {addon.duration && <p className="text-stone text-sm mb-2">{addon.duration}</p>}
                    <p className="text-stone text-sm line-clamp-2">{addon.description}</p>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      ))}

      {selectedIds.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-mist p-4 rounded-sm mb-8 text-center">
          <span className="text-forest font-medium">{selectedIds.length} enhancement{selectedIds.length > 1 ? 's' : ''} selected</span>
        </motion.div>
      )}

      <div className="flex gap-4 justify-center">
        <button onClick={prevStep} className="px-8 py-4 border border-forest text-forest text-sm tracking-widest uppercase hover:bg-forest hover:text-cream transition-colors">Back</button>
        <button onClick={nextStep} className="px-8 py-4 bg-forest text-cream text-sm tracking-widest uppercase hover:bg-forest-light transition-colors">
          {selectedIds.length > 0 ? 'Continue' : 'Skip for Now'}
        </button>
      </div>
    </div>
  );
}
