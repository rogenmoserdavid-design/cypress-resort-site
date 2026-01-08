'use client';

import { motion } from 'framer-motion';
import { useBooking } from './BookingFlow';
import { ADDONS_DATA, formatCurrency, formatDateShort } from '@/lib/booking-data';

export default function BookingSummary() {
  const { state, numberOfNights, calculatePricing, validateStep, nextStep, completeBooking } = useBooking();
  const pricing = calculatePricing();

  const selectedAddOnDetails = state.selectedAddOns.map((selected) => {
    const addon = ADDONS_DATA.find((a) => a.id === selected.id);
    return addon ? { ...addon, quantity: selected.quantity } : null;
  }).filter(Boolean);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-white rounded-sm shadow-sm border border-stone/10 overflow-hidden"
    >
      <div className="bg-forest px-6 py-4">
        <h3 className="font-heading text-cream text-xl">Your Stay</h3>
      </div>

      <div className="p-6 space-y-6">
        <div>
          <p className="font-accent text-gold text-xs tracking-[0.2em] uppercase mb-2">Dates</p>
          {state.dates.checkIn && state.dates.checkOut ? (
            <div className="flex items-center gap-3">
              <span className="font-heading text-forest text-lg">{formatDateShort(state.dates.checkIn)}</span>
              <span className="text-stone">→</span>
              <span className="font-heading text-forest text-lg">{formatDateShort(state.dates.checkOut)}</span>
              <span className="text-stone text-sm ml-auto">{numberOfNights} night{numberOfNights !== 1 ? 's' : ''}</span>
            </div>
          ) : (
            <p className="text-stone text-sm">Select your dates</p>
          )}
        </div>

        {state.villa && (
          <div>
            <p className="font-accent text-gold text-xs tracking-[0.2em] uppercase mb-2">Villa</p>
            <p className="font-heading text-forest text-lg">{state.villa.name}</p>
            <p className="text-stone text-sm">{formatCurrency(state.villa.pricePerNight)} / night</p>
          </div>
        )}

        {selectedAddOnDetails.length > 0 && (
          <div>
            <p className="font-accent text-gold text-xs tracking-[0.2em] uppercase mb-2">Enhancements</p>
            <ul className="space-y-2">
              {selectedAddOnDetails.map((addon) => addon && (
                <li key={addon.id} className="flex justify-between text-sm">
                  <span className="text-forest">{addon.name}</span>
                  <span className="text-stone">{formatCurrency(addon.price)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {pricing && (
          <div className="border-t border-stone/10 pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-stone">{formatCurrency(pricing.nightlyRate)} × {pricing.numberOfNights} nights</span>
              <span className="text-forest">{formatCurrency(pricing.accommodationTotal)}</span>
            </div>
            {pricing.addOnsTotal > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-stone">Enhancements</span>
                <span className="text-forest">{formatCurrency(pricing.addOnsTotal)}</span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span className="text-stone">Taxes & fees</span>
              <span className="text-forest">{formatCurrency(pricing.taxes)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-stone">Resort fee</span>
              <span className="text-forest">{formatCurrency(pricing.resortFee)}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-stone/10">
              <span className="font-heading text-forest text-lg">Total</span>
              <span className="font-heading text-forest text-xl">{formatCurrency(pricing.total)}</span>
            </div>
          </div>
        )}

        <button
          onClick={state.currentStep === 5 ? completeBooking : nextStep}
          disabled={!validateStep(state.currentStep) || state.isLoading}
          className={`w-full py-4 text-sm tracking-widest uppercase transition-all duration-300
            ${state.currentStep === 5 ? 'bg-gold text-forest hover:bg-gold-light' : 'bg-forest text-cream hover:bg-forest-light'}
            disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {state.isLoading ? 'Processing...' : state.currentStep === 5 ? 'Complete Reservation' : 'Continue'}
        </button>

        <p className="text-stone text-xs text-center">Secure booking • Instant confirmation</p>
      </div>
    </motion.div>
  );
}
