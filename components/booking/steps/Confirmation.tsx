'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useBooking } from '../BookingFlow';
import { ADDONS_DATA, formatCurrency, formatDate } from '@/lib/booking-data';

export default function Confirmation() {
  const { state, numberOfNights } = useBooking();
  const { confirmation, guestDetails, dates, villa, selectedAddOns, pricing } = state;
  const addOnNames = selectedAddOns.map(s => ADDONS_DATA.find(a => a.id === s.id)?.name).filter(Boolean);

  return (
    <div className="max-w-2xl mx-auto text-center py-12">
      {/* Animated Checkmark */}
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.2 }} className="w-24 h-24 mx-auto mb-8 bg-gold rounded-full flex items-center justify-center">
        <motion.svg initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="w-12 h-12 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <motion.path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </motion.svg>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
        <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4">Reservation Confirmed</p>
        <h1 className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl mb-6">Your Escape Awaits</h1>
      </motion.div>

      {/* Confirmation Number */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="inline-block bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20 border border-gold/30 px-8 py-4 rounded-sm mb-8">
        <p className="text-stone text-sm mb-1">Confirmation Number</p>
        <p className="font-heading text-forest text-3xl tracking-wider">{confirmation?.confirmationNumber}</p>
      </motion.div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="text-stone text-lg mb-8 max-w-md mx-auto">
        We've received your reservation and sent a confirmation to <span className="text-forest font-medium">{guestDetails.email}</span>. Our concierge team will reach out within 24 hours to personalize your stay.
      </motion.p>

      {/* Stay Summary */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="bg-white p-6 rounded-sm border border-stone/10 text-left mb-8">
        <h2 className="font-heading text-forest text-xl mb-4 text-center">Stay Summary</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div><span className="text-stone">Check-in:</span><br/><span className="text-forest font-medium">{dates.checkIn ? formatDate(dates.checkIn) : '—'}</span></div>
          <div><span className="text-stone">Check-out:</span><br/><span className="text-forest font-medium">{dates.checkOut ? formatDate(dates.checkOut) : '—'}</span></div>
          <div><span className="text-stone">Villa:</span><br/><span className="text-forest font-medium">{villa?.name}</span></div>
          <div><span className="text-stone">Duration:</span><br/><span className="text-forest font-medium">{numberOfNights} night{numberOfNights !== 1 ? 's' : ''}</span></div>
        </div>
        {addOnNames.length > 0 && (
          <div className="mt-4 pt-4 border-t border-stone/10">
            <span className="text-stone text-sm">Enhancements:</span>
            <p className="text-forest font-medium text-sm">{addOnNames.join(', ')}</p>
          </div>
        )}
        {pricing && (
          <div className="mt-4 pt-4 border-t border-stone/10 text-right">
            <span className="text-stone text-sm">Total:</span>
            <p className="font-heading text-forest text-2xl">{formatCurrency(pricing.total)}</p>
          </div>
        )}
      </motion.div>

      {/* What's Next */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="bg-mist p-6 rounded-sm mb-8 text-left">
        <h3 className="font-heading text-forest text-lg mb-4 text-center">What's Next</h3>
        <ul className="space-y-3 text-sm">
          {['Check your email for confirmation details', 'Our concierge will contact you within 24 hours', 'Review our arrival guide (coming soon)', 'Start dreaming of waterfalls'].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="w-5 h-5 bg-gold/20 rounded-full flex items-center justify-center text-gold text-xs">✓</span>
              <span className="text-stone">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
        <Link href="/" className="inline-block px-12 py-4 bg-forest text-cream text-sm tracking-widest uppercase hover:bg-forest-light transition-colors">
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
}
