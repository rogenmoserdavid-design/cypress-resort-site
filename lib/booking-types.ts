// Booking Flow Types

export interface Villa {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  sqftInterior: number;
  sqftDeck: number;
  image: string;
  features: VillaFeature[];
}

export interface VillaFeature {
  icon: string;
  label: string;
  description?: string;
}

export interface AddOn {
  id: string;
  category: 'spa' | 'dining' | 'special';
  name: string;
  description: string;
  duration?: string;
  price: number;
  image: string;
}

export interface GuestDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country: string;
  arrivalTime?: string;
  specialOccasions: string[];
  dietaryRestrictions?: string;
  specialRequests?: string;
}

export interface BookingDates {
  checkIn: Date | null;
  checkOut: Date | null;
}

export interface SelectedAddOn {
  id: string;
  quantity: number;
}

export interface PricingBreakdown {
  nightlyRate: number;
  numberOfNights: number;
  accommodationTotal: number;
  addOnsTotal: number;
  subtotal: number;
  taxRate: number;
  taxes: number;
  resortFee: number;
  total: number;
}

export interface BookingConfirmation {
  confirmationNumber: string;
  createdAt: Date;
}

// Main Booking State
export interface BookingState {
  currentStep: 1 | 2 | 3 | 4 | 5 | 6;
  dates: BookingDates;
  villa: Villa | null;
  selectedAddOns: SelectedAddOn[];
  guestDetails: GuestDetails;
  pricing: PricingBreakdown | null;
  confirmation: BookingConfirmation | null;
  errors: Record<string, string>;
  isLoading: boolean;
}

// Action Types
export type BookingAction =
  | { type: 'SET_DATES'; payload: BookingDates }
  | { type: 'SELECT_VILLA'; payload: Villa }
  | { type: 'TOGGLE_ADDON'; payload: string }
  | { type: 'SET_ADDON_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'UPDATE_GUEST_DETAILS'; payload: Partial<GuestDetails> }
  | { type: 'SET_PRICING'; payload: PricingBreakdown }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'GO_TO_STEP'; payload: 1 | 2 | 3 | 4 | 5 | 6 }
  | { type: 'SET_ERROR'; payload: { field: string; message: string } }
  | { type: 'CLEAR_ERROR'; payload: string }
  | { type: 'CLEAR_ALL_ERRORS' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_CONFIRMATION'; payload: BookingConfirmation }
  | { type: 'RESET' };

// Step Configuration
export interface StepConfig {
  number: 1 | 2 | 3 | 4 | 5 | 6;
  title: string;
  shortTitle: string;
}

export const BOOKING_STEPS: StepConfig[] = [
  { number: 1, title: 'Select Your Dates', shortTitle: 'Dates' },
  { number: 2, title: 'Your Villa', shortTitle: 'Villa' },
  { number: 3, title: 'Enhance Your Stay', shortTitle: 'Extras' },
  { number: 4, title: 'Guest Details', shortTitle: 'Details' },
  { number: 5, title: 'Review & Pay', shortTitle: 'Review' },
  { number: 6, title: 'Confirmation', shortTitle: 'Confirmed' },
];

// Initial State
export const initialBookingState: BookingState = {
  currentStep: 1,
  dates: {
    checkIn: null,
    checkOut: null,
  },
  villa: null,
  selectedAddOns: [],
  guestDetails: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: 'United States',
    specialOccasions: [],
  },
  pricing: null,
  confirmation: null,
  errors: {},
  isLoading: false,
};
