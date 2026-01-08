'use client';

import { motion } from 'framer-motion';
import { useBooking } from './BookingFlow';
import { BOOKING_STEPS } from '@/lib/booking-types';

export default function BookingProgress() {
  const { state, validateStep, goToStep } = useBooking();
  const currentStep = state.currentStep;

  return (
    <div className="w-full">
      {/* Desktop Progress */}
      <div className="hidden md:flex items-center justify-between">
        {BOOKING_STEPS.slice(0, 5).map((step, index) => {
          const isActive = currentStep === step.number;
          const isCompleted = currentStep > step.number;
          const isClickable = isCompleted || (step.number <= currentStep && validateStep(step.number - 1));

          return (
            <div key={step.number} className="flex items-center flex-1">
              <button
                onClick={() => isClickable && goToStep(step.number as 1 | 2 | 3 | 4 | 5 | 6)}
                disabled={!isClickable}
                className={`
                  relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300
                  ${isActive ? 'bg-gold text-forest scale-110' : ''}
                  ${isCompleted ? 'bg-forest text-cream' : ''}
                  ${!isActive && !isCompleted ? 'bg-stone/20 text-stone' : ''}
                  ${isClickable ? 'cursor-pointer hover:scale-105' : 'cursor-default'}
                `}
              >
                {isCompleted ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="font-heading text-lg">{step.number}</span>
                )}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gold"
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </button>

              <div className="ml-3 hidden lg:block">
                <p className={`text-sm font-medium transition-colors ${isActive || isCompleted ? 'text-forest' : 'text-stone'}`}>
                  {step.shortTitle}
                </p>
              </div>

              {index < 4 && (
                <div className="flex-1 mx-4 h-px bg-stone/20 relative">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-forest"
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
        <div className="flex items-center justify-between mb-2">
          <p className="text-stone text-sm">Step {currentStep} of 5</p>
          <p className="font-heading text-forest text-lg">{BOOKING_STEPS[currentStep - 1]?.title}</p>
        </div>
        <div className="h-1 bg-stone/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gold"
            initial={{ width: 0 }}
            animate={{ width: `${(currentStep / 5) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}
