'use client';

import { useReducer, createContext, useContext, useCallback, useMemo, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BookingState,
  BookingAction,
  initialBookingState,
  PricingBreakdown,
  GuestDetails,
  BOOKING_STEPS,
} from '@/lib/booking-types';
import {
  VILLA_DATA,
  ADDONS_DATA,
  RESORT_CONFIG,
  calculateNights,
  generateConfirmationNumber,
} from '@/lib/booking-data';

import BookingProgress from './BookingProgress';
import BookingSummary from './BookingSummary';
import DateSelection from './steps/DateSelection';
import VillaSelection from './steps/VillaSelection';
import EnhanceStay from './steps/EnhanceStay';
import GuestDetailsStep from './steps/GuestDetails';
import ReviewPay from './steps/ReviewPay';
import Confirmation from './steps/Confirmation';

// Reducer
function bookingReducer(state: BookingState, action: BookingAction): BookingState {
  switch (action.type) {
    case 'SET_DATES':
      return { ...state, dates: action.payload };
    case 'SELECT_VILLA':
      return { ...state, villa: action.payload };
    case 'TOGGLE_ADDON': {
      const exists = state.selectedAddOns.find((a) => a.id === action.payload);
      if (exists) {
        return {
          ...state,
          selectedAddOns: state.selectedAddOns.filter((a) => a.id !== action.payload),
        };
      }
      return {
        ...state,
        selectedAddOns: [...state.selectedAddOns, { id: action.payload, quantity: 1 }],
      };
    }
    case 'SET_ADDON_QUANTITY':
      return {
        ...state,
        selectedAddOns: state.selectedAddOns.map((a) =>
          a.id === action.payload.id ? { ...a, quantity: action.payload.quantity } : a
        ),
      };
    case 'UPDATE_GUEST_DETAILS':
      return {
        ...state,
        guestDetails: { ...state.guestDetails, ...action.payload },
      };
    case 'SET_PRICING':
      return { ...state, pricing: action.payload };
    case 'NEXT_STEP':
      return {
        ...state,
        currentStep: Math.min(state.currentStep + 1, 6) as BookingState['currentStep'],
      };
    case 'PREV_STEP':
      return {
        ...state,
        currentStep: Math.max(state.currentStep - 1, 1) as BookingState['currentStep'],
      };
    case 'GO_TO_STEP':
      return { ...state, currentStep: action.payload };
    case 'SET_ERROR':
      return {
        ...state,
        errors: { ...state.errors, [action.payload.field]: action.payload.message },
      };
    case 'CLEAR_ERROR': {
      const { [action.payload]: _, ...rest } = state.errors;
      return { ...state, errors: rest };
    }
    case 'CLEAR_ALL_ERRORS':
      return { ...state, errors: {} };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_CONFIRMATION':
      return { ...state, confirmation: action.payload };
    case 'RESET':
      return initialBookingState;
    default:
      return state;
  }
}

// Context
interface BookingContextValue {
  state: BookingState;
  dispatch: React.Dispatch<BookingAction>;
  villa: typeof VILLA_DATA;
  addOns: typeof ADDONS_DATA;
  numberOfNights: number;
  calculatePricing: () => PricingBreakdown | null;
  validateStep: (step: number) => boolean;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: 1 | 2 | 3 | 4 | 5 | 6) => void;
  updateGuestDetails: (details: Partial<GuestDetails>) => void;
  completeBooking: () => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider');
  }
  return context;
}

// Animation variants
const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  }),
};

// Main Component
export default function BookingFlow() {
  const [state, dispatch] = useReducer(bookingReducer, {
    ...initialBookingState,
    villa: VILLA_DATA, // Auto-select villa since there's only one
  });

  // Calculate number of nights
  const numberOfNights = useMemo(() => {
    if (state.dates.checkIn && state.dates.checkOut) {
      return calculateNights(state.dates.checkIn, state.dates.checkOut);
    }
    return 0;
  }, [state.dates]);

  // Calculate pricing
  const calculatePricing = useCallback((): PricingBreakdown | null => {
    if (!state.villa || numberOfNights === 0) return null;

    const accommodationTotal = state.villa.pricePerNight * numberOfNights;

    const addOnsTotal = state.selectedAddOns.reduce((total, selected) => {
      const addon = ADDONS_DATA.find((a) => a.id === selected.id);
      return total + (addon ? addon.price * selected.quantity : 0);
    }, 0);

    const subtotal = accommodationTotal + addOnsTotal;
    const taxes = subtotal * RESORT_CONFIG.taxRate;
    const total = subtotal + taxes + RESORT_CONFIG.resortFee;

    return {
      nightlyRate: state.villa.pricePerNight,
      numberOfNights,
      accommodationTotal,
      addOnsTotal,
      subtotal,
      taxRate: RESORT_CONFIG.taxRate,
      taxes,
      resortFee: RESORT_CONFIG.resortFee,
      total,
    };
  }, [state.villa, state.selectedAddOns, numberOfNights]);

  // Validate step
  const validateStep = useCallback(
    (step: number): boolean => {
      switch (step) {
        case 1:
          return !!(state.dates.checkIn && state.dates.checkOut && numberOfNights >= RESORT_CONFIG.minNights);
        case 2:
          return !!state.villa;
        case 3:
          return true; // Add-ons are optional
        case 4: {
          const { firstName, lastName, email, phone } = state.guestDetails;
          return !!(firstName && lastName && email && phone);
        }
        case 5:
          return validateStep(1) && validateStep(2) && validateStep(4);
        default:
          return true;
      }
    },
    [state.dates, state.villa, state.guestDetails, numberOfNights]
  );

  // Navigation
  const nextStep = useCallback(() => {
    if (validateStep(state.currentStep)) {
      dispatch({ type: 'NEXT_STEP' });
    }
  }, [state.currentStep, validateStep]);

  const prevStep = useCallback(() => {
    dispatch({ type: 'PREV_STEP' });
  }, []);

  const goToStep = useCallback((step: 1 | 2 | 3 | 4 | 5 | 6) => {
    dispatch({ type: 'GO_TO_STEP', payload: step });
  }, []);

  // Update guest details
  const updateGuestDetails = useCallback((details: Partial<GuestDetails>) => {
    dispatch({ type: 'UPDATE_GUEST_DETAILS', payload: details });
  }, []);

  // Complete booking
  const completeBooking = useCallback(() => {
    dispatch({ type: 'SET_LOADING', payload: true });

    // Simulate API call
    setTimeout(() => {
      const pricing = calculatePricing();
      if (pricing) {
        dispatch({ type: 'SET_PRICING', payload: pricing });
      }

      dispatch({
        type: 'SET_CONFIRMATION',
        payload: {
          confirmationNumber: generateConfirmationNumber(),
          createdAt: new Date(),
        },
      });

      dispatch({ type: 'SET_LOADING', payload: false });
      dispatch({ type: 'GO_TO_STEP', payload: 6 });
    }, 1500);
  }, [calculatePricing]);

  // Context value
  const contextValue: BookingContextValue = {
    state,
    dispatch,
    villa: VILLA_DATA,
    addOns: ADDONS_DATA,
    numberOfNights,
    calculatePricing,
    validateStep,
    nextStep,
    prevStep,
    goToStep,
    updateGuestDetails,
    completeBooking,
  };

  // Track direction for animations
  const direction = 1; // Always forward for simplicity

  // Render current step
  const renderStep = () => {
    switch (state.currentStep) {
      case 1:
        return <DateSelection key="dates" />;
      case 2:
        return <VillaSelection key="villa" />;
      case 3:
        return <EnhanceStay key="addons" />;
      case 4:
        return <GuestDetailsStep key="guest" />;
      case 5:
        return <ReviewPay key="review" />;
      case 6:
        return <Confirmation key="confirmation" />;
      default:
        return null;
    }
  };

  // Don't show progress/summary on confirmation step
  const showSidebar = state.currentStep < 6;

  return (
    <BookingContext.Provider value={contextValue}>
      <div className="min-h-screen bg-cream">
        {/* Progress Header */}
        {showSidebar && (
          <div className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-stone/10">
            <div className="max-w-7xl mx-auto px-6 py-4">
              <BookingProgress />
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-8 lg:py-12">
          <div className={showSidebar ? 'lg:grid lg:grid-cols-[1fr_380px] lg:gap-12' : ''}>
            {/* Step Content */}
            <main className="min-h-[60vh]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={state.currentStep}
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>
            </main>

            {/* Sidebar Summary */}
            {showSidebar && (
              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  <BookingSummary />
                </div>
              </aside>
            )}
          </div>
        </div>

        {/* Mobile Bottom Bar */}
        {showSidebar && state.currentStep > 1 && (
          <div className="fixed bottom-0 left-0 right-0 bg-cream border-t border-stone/20 p-4 lg:hidden z-50">
            <div className="flex items-center justify-between max-w-lg mx-auto">
              <div>
                <p className="text-stone text-xs uppercase tracking-wide">
                  {numberOfNights > 0 ? `${numberOfNights} night${numberOfNights > 1 ? 's' : ''}` : 'Select dates'}
                </p>
                <p className="font-heading text-forest text-xl">
                  {calculatePricing()
                    ? `$${Math.round(calculatePricing()!.total).toLocaleString()}`
                    : '—'}
                </p>
              </div>
              <button
                onClick={state.currentStep === 5 ? completeBooking : nextStep}
                disabled={!validateStep(state.currentStep) || state.isLoading}
                className="px-8 py-3 bg-forest text-cream text-sm tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              >
                {state.isLoading ? 'Processing...' : state.currentStep === 5 ? 'Complete' : 'Continue'}
              </button>
            </div>
          </div>
        )}
      </div>
    </BookingContext.Provider>
  );
}
