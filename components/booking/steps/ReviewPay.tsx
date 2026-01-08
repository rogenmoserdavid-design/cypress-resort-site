'use client';

import { motion } from 'framer-motion';
import { useBooking } from '../BookingFlow';
import { ADDONS_DATA, RESORT_CONFIG, formatCurrency, formatDate } from '@/lib/booking-data';

export default function ReviewPay() {
  const { state, numberOfNights, calculatePricing, goToStep, completeBooking, prevStep } = useBooking();
  const pricing = calculatePricing();
  const selectedAddOns = state.selectedAddOns.map(s => ADDONS_DATA.find(a => a.id === s.id)).filter(Boolean);

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4">Final Step</p>
        <h1 className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl mb-4">Review Your Booking</h1>
        <p className="text-stone text-lg">Please review your reservation details before confirming.</p>
      </motion.div>

      {/* Your Stay */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-sm border border-stone/10 mb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-heading text-forest text-xl">Your Stay</h2>
          <button onClick={() => goToStep(1)} className="text-gold text-sm hover:underline">Edit</button>
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div><span className="text-stone">Check-in:</span> <span className="text-forest font-medium">{state.dates.checkIn ? formatDate(state.dates.checkIn) : '—'}</span></div>
          <div><span className="text-stone">Check-out:</span> <span className="text-forest font-medium">{state.dates.checkOut ? formatDate(state.dates.checkOut) : '—'}</span></div>
          <div><span className="text-stone">Duration:</span> <span className="text-forest font-medium">{numberOfNights} night{numberOfNights !== 1 ? 's' : ''}</span></div>
          <div><span className="text-stone">Guests:</span> <span className="text-forest font-medium">Up to {state.villa?.maxGuests}</span></div>
        </div>
      </motion.div>

      {/* Villa */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="bg-white p-6 rounded-sm border border-stone/10 mb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-heading text-forest text-xl">Your Villa</h2>
          <button onClick={() => goToStep(2)} className="text-gold text-sm hover:underline">Edit</button>
        </div>
        <p className="text-forest font-medium">{state.villa?.name}</p>
        <p className="text-stone text-sm">{formatCurrency(state.villa?.pricePerNight || 0)} per night</p>
      </motion.div>

      {/* Enhancements */}
      {selectedAddOns.length > 0 && (
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-sm border border-stone/10 mb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-heading text-forest text-xl">Enhancements</h2>
            <button onClick={() => goToStep(3)} className="text-gold text-sm hover:underline">Edit</button>
          </div>
          <ul className="space-y-2">
            {selectedAddOns.map(addon => addon && (
              <li key={addon.id} className="flex justify-between text-sm">
                <span className="text-forest">{addon.name}</span>
                <span className="text-stone">{formatCurrency(addon.price)}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Guest Info */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="bg-white p-6 rounded-sm border border-stone/10 mb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-heading text-forest text-xl">Guest Information</h2>
          <button onClick={() => goToStep(4)} className="text-gold text-sm hover:underline">Edit</button>
        </div>
        <div className="text-sm space-y-1">
          <p className="text-forest font-medium">{state.guestDetails.firstName} {state.guestDetails.lastName}</p>
          <p className="text-stone">{state.guestDetails.email}</p>
          <p className="text-stone">{state.guestDetails.phone}</p>
        </div>
      </motion.div>

      {/* Price Breakdown */}
      {pricing && (
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-mist p-6 rounded-sm mb-4">
          <h2 className="font-heading text-forest text-xl mb-4">Price Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-stone">{formatCurrency(pricing.nightlyRate)} × {pricing.numberOfNights} nights</span><span className="text-forest">{formatCurrency(pricing.accommodationTotal)}</span></div>
            {pricing.addOnsTotal > 0 && <div className="flex justify-between"><span className="text-stone">Enhancements</span><span className="text-forest">{formatCurrency(pricing.addOnsTotal)}</span></div>}
            <div className="flex justify-between"><span className="text-stone">Taxes ({Math.round(pricing.taxRate * 100)}%)</span><span className="text-forest">{formatCurrency(pricing.taxes)}</span></div>
            <div className="flex justify-between"><span className="text-stone">Resort fee</span><span className="text-forest">{formatCurrency(pricing.resortFee)}</span></div>
            <div className="flex justify-between pt-2 border-t border-stone/20 text-lg">
              <span className="font-heading text-forest">Total</span>
              <span className="font-heading text-forest">{formatCurrency(pricing.total)}</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Policies */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="bg-white p-6 rounded-sm border border-stone/10 mb-8">
        <h2 className="font-heading text-forest text-xl mb-4">Policies</h2>
        <ul className="text-sm text-stone space-y-2">
          <li><span className="text-forest">Check-in:</span> {RESORT_CONFIG.checkInTime}</li>
          <li><span className="text-forest">Check-out:</span> {RESORT_CONFIG.checkOutTime}</li>
          <li><span className="text-forest">Cancellation:</span> Free cancellation up to 14 days before arrival</li>
        </ul>
      </motion.div>

      {/* Payment Notice */}
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-gold/10 border border-gold/30 p-4 rounded-sm mb-8 text-center">
        <p className="text-forest text-sm">Payment processing coming soon. Click below to complete your mock reservation.</p>
      </motion.div>

      <div className="flex gap-4 justify-center">
        <button onClick={prevStep} className="px-8 py-4 border border-forest text-forest text-sm tracking-widest uppercase hover:bg-forest hover:text-cream transition-colors">Back</button>
        <button onClick={completeBooking} disabled={state.isLoading}
          className="px-8 py-4 bg-gold text-forest text-sm tracking-widest uppercase hover:bg-gold-light transition-colors disabled:opacity-50">
          {state.isLoading ? 'Processing...' : 'Complete Reservation'}
        </button>
      </div>
    </div>
  );
}
