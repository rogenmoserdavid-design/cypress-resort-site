'use client';

import { motion } from 'framer-motion';
import { useBooking } from '../BookingFlow';
import { ARRIVAL_TIMES, SPECIAL_OCCASIONS } from '@/lib/booking-data';

const Input = ({ label, required, ...props }: { label: string; required?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div>
    <label className="block text-forest text-sm font-medium mb-2">{label}{required && <span className="text-gold ml-1">*</span>}</label>
    <input {...props} className="w-full px-4 py-3 border border-stone/30 bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all" />
  </div>
);

const Select = ({ label, required, options, ...props }: { label: string; required?: boolean; options: string[] } & React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <div>
    <label className="block text-forest text-sm font-medium mb-2">{label}{required && <span className="text-gold ml-1">*</span>}</label>
    <select {...props} className="w-full px-4 py-3 border border-stone/30 bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all">
      <option value="">Select...</option>
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  </div>
);

export default function GuestDetails() {
  const { state, updateGuestDetails, validateStep, nextStep, prevStep } = useBooking();
  const g = state.guestDetails;
  const isValid = validateStep(4);

  const toggleOccasion = (occ: string) => {
    const current = g.specialOccasions || [];
    const updated = current.includes(occ) ? current.filter(o => o !== occ) : [...current, occ];
    updateGuestDetails({ specialOccasions: updated });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <p className="font-accent text-gold text-sm tracking-[0.3em] uppercase mb-4">Almost There</p>
        <h1 className="font-heading text-forest text-4xl md:text-5xl lg:text-6xl mb-4">Guest Details</h1>
        <p className="text-stone text-lg">Tell us about yourself so we can personalize your stay.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-6 md:p-8 rounded-sm border border-stone/10 mb-6">
        <h2 className="font-heading text-forest text-xl mb-6">Contact Information</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Input label="First Name" required value={g.firstName} onChange={e => updateGuestDetails({ firstName: e.target.value })} />
          <Input label="Last Name" required value={g.lastName} onChange={e => updateGuestDetails({ lastName: e.target.value })} />
          <Input label="Email" required type="email" value={g.email} onChange={e => updateGuestDetails({ email: e.target.value })} />
          <Input label="Phone" required type="tel" value={g.phone} onChange={e => updateGuestDetails({ phone: e.target.value })} />
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white p-6 md:p-8 rounded-sm border border-stone/10 mb-6">
        <h2 className="font-heading text-forest text-xl mb-6">Stay Preferences</h2>
        <div className="space-y-4">
          <Select label="Estimated Arrival Time" options={ARRIVAL_TIMES} value={g.arrivalTime || ''} onChange={e => updateGuestDetails({ arrivalTime: e.target.value })} />

          <div>
            <label className="block text-forest text-sm font-medium mb-3">Celebrating a Special Occasion?</label>
            <div className="flex flex-wrap gap-2">
              {SPECIAL_OCCASIONS.map(occ => (
                <button key={occ} type="button" onClick={() => toggleOccasion(occ)}
                  className={`px-4 py-2 text-sm border transition-all ${g.specialOccasions?.includes(occ) ? 'bg-gold border-gold text-forest' : 'border-stone/30 text-stone hover:border-gold'}`}>
                  {occ}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-forest text-sm font-medium mb-2">Dietary Restrictions</label>
            <textarea value={g.dietaryRestrictions || ''} onChange={e => updateGuestDetails({ dietaryRestrictions: e.target.value })}
              className="w-full px-4 py-3 border border-stone/30 bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none" rows={2} placeholder="Allergies, preferences, etc." />
          </div>

          <div>
            <label className="block text-forest text-sm font-medium mb-2">Special Requests</label>
            <textarea value={g.specialRequests || ''} onChange={e => updateGuestDetails({ specialRequests: e.target.value })}
              className="w-full px-4 py-3 border border-stone/30 bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none" rows={3} placeholder="Anything else we should know?" />
          </div>
        </div>
      </motion.div>

      <div className="flex gap-4 justify-center">
        <button onClick={prevStep} className="px-8 py-4 border border-forest text-forest text-sm tracking-widest uppercase hover:bg-forest hover:text-cream transition-colors">Back</button>
        <button onClick={nextStep} disabled={!isValid}
          className={`px-8 py-4 text-sm tracking-widest uppercase transition-colors ${isValid ? 'bg-forest text-cream hover:bg-forest-light' : 'bg-stone/20 text-stone cursor-not-allowed'}`}>
          Review Booking
        </button>
      </div>
    </div>
  );
}
