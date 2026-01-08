'use client';

import { motion } from 'framer-motion';
import { useBooking } from './BookingFlow';
import { BOOKING_STEPS } from '@/lib/booking-types';

export default function BookingProgress() {
  const { state, validateStep, goToStep } = useBooking();
  const currentStep = state.currentStep;

  return (
    <div className="w-full py-2">
      {/* Desktop Progress */}
      <div className="hidden md:flex items-center justify-center gap-0">
        {BOOKING_STEPS.slice(0, 5).map((step, index) => {
          const isActive = currentStep === step.number;
          const isCompleted = currentStep > step.number;
          const isClickable = isCompleted || (step.number <= currentStep && validateStep(step.number - 1));

          return (
            <div key={step.number} className="flex items-center">
              {/* Step Circle + Label */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => isClickable && goToStep(step.number as 1 | 2 | 3 | 4 | 5 | 6)}
                  disabled={!isClickable}
                  className={`
                    relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 border-2
                    ${isActive ? 'bg-gold border-gold text-forest scale-110 shadow-lg shadow-gold/30' : ''}
                    ${isCompleted ? 'bg-gold border-gold text-forest' : ''}
                    ${!isActive && !isCompleted ? 'bg-cream border-stone/30 text-stone' : ''}
                    ${isClickable ? 'cursor-pointer hover:scale-105' : 'cursor-default'}
                  `}
                >
                  {isCompleted ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <span className="font-heading text-lg">{step.number}</span>
                  )}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-gold"
                      initial={{ scale: 1, opacity: 0.8 }}
                      animate={{ scale: 1.4, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </button>
                <p className={`mt-2 text-xs tracking-wide uppercase transition-colors ${isActive ? 'text-forest font-medium' : isCompleted ? 'text-forest' : 'text-stone'}`}>
                  {step.shortTitle}
                </p>
              </div>

              {/* Connector Line */}
              {index < 4 && (
                <div className="w-16 lg:w-24 h-0.5 mx-2 bg-stone/20 relative -mt-6">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gold"
                    initial={{ width: 0 }}
                    animate={{ width: isCompleted ? '100%' : '0%' }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Progress */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-3">
          <p className="text-stone text-sm">Step {currentStep} of 5</p>
          <p className="font-heading text-forest text-lg">{BOOKING_STEPS[currentStep - 1]?.title}</p>
        </div>
        <div className="h-1.5 bg-stone/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gold rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / 5) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}
