import { Villa, AddOn } from './booking-types';

export const RESORT_CONFIG = {
  taxRate: 0.12,
  resortFee: 75,
  minNights: 2,
  maxNights: 14,
  advanceBookingDays: 365,
  checkInTime: '3:00 PM',
  checkOutTime: '11:00 AM',
};

export const VILLA_DATA: Villa = {
  id: 'cypress-villa',
  name: 'The Cypress Villa',
  description: 'A sanctuary of refined luxury nestled among ancient trees, where floor-to-ceiling windows frame the forest and every detail invites tranquility.',
  pricePerNight: 895,
  maxGuests: 2,
  bedrooms: 1,
  bathrooms: 1,
  sqftInterior: 890,
  sqftDeck: 800,
  image: '/images/villa-exterior.jpg',
  features: [
    { icon: 'bed', label: 'King Bed', description: 'Luxury linens & plush bedding' },
    { icon: 'window', label: '15-ft Windows', description: 'Panoramic forest views' },
    { icon: 'bath', label: 'Soaking Tub', description: 'Deep tub with rainfall shower' },
    { icon: 'hot-tub', label: 'Private Hot Tub', description: 'On your private deck' },
    { icon: 'flame', label: 'Sauna', description: 'Private in-villa sauna' },
    { icon: 'fire', label: 'Fire Pit', description: 'Wood-burning on deck' },
    { icon: 'utensils', label: 'Full Kitchen', description: 'Chef-grade appliances' },
    { icon: 'wifi', label: 'High-Speed WiFi', description: 'Seamless connectivity' },
  ],
};

export const ADDONS_DATA: AddOn[] = [
  { id: 'forest-massage', category: 'spa', name: 'Forest Renewal Massage', description: 'A deeply restorative 90-minute massage incorporating locally-sourced botanicals and warm stones.', duration: '90 min', price: 250, image: '/images/cypress-23.jpg' },
  { id: 'couples-retreat', category: 'spa', name: 'Couples Retreat', description: 'Side-by-side massage experience in your villa, followed by a private sound bath session.', duration: '120 min', price: 450, image: '/images/cypress-41.jpg' },
  { id: 'sunrise-yoga', category: 'spa', name: 'Sunrise Yoga Session', description: 'Private yoga session at dawn overlooking the forest, led by our resident instructor.', duration: '60 min', price: 75, image: '/images/cypress-42.png' },
  { id: 'private-chef', category: 'dining', name: 'Private Chef Dinner', description: 'A multi-course tasting menu prepared in your villa by our executive chef.', duration: '3 hours', price: 350, image: '/images/cypress-47.jpg' },
  { id: 'waterfall-picnic', category: 'dining', name: 'Waterfall Picnic Setup', description: 'An intimate gourmet picnic arranged at our private waterfall, complete with champagne.', price: 175, image: '/images/cypress-9.png' },
  { id: 'gourmet-provisions', category: 'dining', name: 'Gourmet Provisions Package', description: 'Your kitchen pre-stocked with local cheeses, charcuterie, fresh bread, and premium beverages.', price: 150, image: '/images/instagram-605152610.jpg' },
  { id: 'romance-setup', category: 'special', name: 'Rose Petal & Champagne', description: 'Transform your villa with rose petals, candles, and a bottle of premium champagne.', price: 125, image: '/images/instagram-590397587.jpg' },
  { id: 'photography', category: 'special', name: 'Photography Session', description: 'One-hour portrait session with our professional photographer at the waterfall.', duration: '60 min', price: 300, image: '/images/instagram-597936050.jpg' },
];

export const SPECIAL_OCCASIONS = ['Anniversary', 'Birthday', 'Honeymoon', 'Engagement', 'Babymoon', 'Proposal', 'Just Because'];
export const ARRIVAL_TIMES = ['3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];

export function calculateNights(checkIn: Date, checkOut: Date): number {
  return Math.ceil((checkOut.getTime() - checkIn.getTime()) / 86400000);
}

export function generateConfirmationNumber(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = 'CYP-';
  for (let i = 0; i < 6; i++) result += chars.charAt(Math.floor(Math.random() * chars.length));
  return result;
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }).format(date);
}

export function formatDateShort(date: Date): string {
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);
}
