'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { AddOn } from '@/lib/booking-types';
import { formatCurrency } from '@/lib/booking-data';

interface AddOnCardProps {
  addon: AddOn;
  isSelected: boolean;
  onToggle: () => void;
}

export default function AddOnCard({ addon, isSelected, onToggle }: AddOnCardProps) {
  return (
    <motion.button
      onClick={onToggle}
      className={`group relative overflow-hidden bg-white text-left transition-all ${
        isSelected ? 'ring-2 ring-gold' : 'ring-1 ring-stone/10 hover:ring-stone/30'
      }`}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={addon.image}
          alt={addon.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Checkbox indicator */}
        <div className="absolute top-3 right-3 z-10">
          <div
            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
              isSelected
                ? 'bg-gold border-gold'
                : 'bg-white/90 border-white backdrop-blur-sm'
            }`}
          >
            {isSelected && (
              <svg
                className="w-4 h-4 text-forest"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-forest/90 backdrop-blur-sm">
          <span className="text-cream text-xs uppercase tracking-widest">
            {addon.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-heading text-forest text-lg leading-tight">
            {addon.name}
          </h3>
          {addon.duration && (
            <span className="text-stone text-xs uppercase tracking-wider whitespace-nowrap mt-1">
              {addon.duration}
            </span>
          )}
        </div>

        <p className="text-stone text-sm leading-relaxed mb-4 line-clamp-2">
          {addon.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="font-accent text-forest text-xl">
            {formatCurrency(addon.price)}
          </span>

          <span className={`text-xs uppercase tracking-widest transition-colors ${
            isSelected ? 'text-gold' : 'text-stone group-hover:text-forest'
          }`}>
            {isSelected ? 'Added' : 'Add to stay'}
          </span>
        </div>
      </div>
    </motion.button>
  );
}
