'use client';

import { motion } from 'framer-motion';
import { useBooking } from '../BookingFlow';
import BookingCalendar from '../ui/BookingCalendar';
import { RESORT_CONFIG } from '@/lib/booking-data';

export default function DateSelection() {
  const { state, dispatch, numberOfNights, validateStep, nextStep } = useBooking();
  const isValid = validateStep(1);

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
        <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4">Begin Your Journey</p>
        <h1 className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl mb-4">When Will You Arrive?</h1>
        <p className="text-stone text-lg max-w-xl mx-auto">Select your check-in and check-out dates to start planning your escape.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white rounded-sm shadow-sm border border-stone/10 p-6 md:p-10">
        <BookingCalendar
          checkIn={state.dates.checkIn}
          checkOut={state.dates.checkOut}
          onDateSelect={(checkIn, checkOut) => dispatch({ type: 'SET_DATES', payload: { checkIn, checkOut } })}
          minNights={RESORT_CONFIG.minNights}
        />
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-stone">
        <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-gold/20 border border-gold" /><span>Selected</span></div>
        <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-stone/20" /><span>Unavailable</span></div>
        <div className="flex items-center gap-2"><span className="text-gold">ℹ</span><span>{RESORT_CONFIG.minNights}-night minimum</span></div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-12 text-center hidden lg:block">
        <button onClick={nextStep} disabled={!isValid}
          className={`inline-flex items-center gap-3 px-12 py-4 text-sm tracking-widest uppercase transition-all duration-300
            ${isValid ? 'bg-forest text-cream hover:bg-forest-light' : 'bg-stone/20 text-stone cursor-not-allowed'}`}>
          {isValid ? <>Continue to Villa <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></> : `Select ${RESORT_CONFIG.minNights}+ nights`}
        </button>
      </motion.div>
    </div>
  );
}
