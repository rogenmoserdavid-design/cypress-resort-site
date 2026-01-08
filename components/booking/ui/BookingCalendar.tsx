'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BookingCalendarProps {
  checkIn: Date | null;
  checkOut: Date | null;
  onDateSelect: (checkIn: Date | null, checkOut: Date | null) => void;
  minNights?: number;
  blockedDates?: Date[];
}

export default function BookingCalendar({
  checkIn,
  checkOut,
  onDateSelect,
  minNights = 2,
  blockedDates = [],
}: BookingCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectionMode, setSelectionMode] = useState<'check-in' | 'check-out'>('check-in');

  // Get days for a given month
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (Date | null)[] = [];

    // Add empty slots for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add all days in month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  // Get next month
  const getNextMonth = (date: Date) => {
    const next = new Date(date);
    next.setMonth(next.getMonth() + 1);
    return next;
  };

  // Check if date is in the past
  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  // Check if date is blocked
  const isBlockedDate = (date: Date) => {
    return blockedDates.some(
      (blocked) =>
        blocked.getFullYear() === date.getFullYear() &&
        blocked.getMonth() === date.getMonth() &&
        blocked.getDate() === date.getDate()
    );
  };

  // Check if date is in selected range
  const isInRange = (date: Date) => {
    if (!checkIn || !checkOut) return false;
    return date > checkIn && date < checkOut;
  };

  // Check if date is check-in or check-out
  const isCheckIn = (date: Date) => {
    if (!checkIn) return false;
    return (
      date.getFullYear() === checkIn.getFullYear() &&
      date.getMonth() === checkIn.getMonth() &&
      date.getDate() === checkIn.getDate()
    );
  };

  const isCheckOut = (date: Date) => {
    if (!checkOut) return false;
    return (
      date.getFullYear() === checkOut.getFullYear() &&
      date.getMonth() === checkOut.getMonth() &&
      date.getDate() === checkOut.getDate()
    );
  };

  // Handle date click
  const handleDateClick = (date: Date) => {
    if (isPastDate(date) || isBlockedDate(date)) return;

    if (selectionMode === 'check-in') {
      // Set check-in and prepare for check-out selection
      onDateSelect(date, null);
      setSelectionMode('check-out');
    } else {
      // Set check-out if it's after check-in
      if (checkIn && date > checkIn) {
        // Check if minimum nights requirement is met
        const nights = Math.ceil((date.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
        if (nights >= minNights) {
          onDateSelect(checkIn, date);
          setSelectionMode('check-in');
        }
      } else {
        // Reset and start over with new check-in
        onDateSelect(date, null);
        setSelectionMode('check-out');
      }
    }
  };

  // Navigate months
  const goToPrevMonth = () => {
    const prev = new Date(currentMonth);
    prev.setMonth(prev.getMonth() - 1);
    setCurrentMonth(prev);
  };

  const goToNextMonth = () => {
    const next = new Date(currentMonth);
    next.setMonth(next.getMonth() + 1);
    setCurrentMonth(next);
  };

  // Format month/year header
  const formatMonthYear = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  // Get calendar data
  const currentMonthDays = useMemo(() => getDaysInMonth(currentMonth), [currentMonth]);
  const nextMonthDays = useMemo(() => getDaysInMonth(getNextMonth(currentMonth)), [currentMonth]);

  const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  // Determine if previous month button should be disabled
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isPrevMonthDisabled = currentMonth <= today;

  // Day cell component
  const DayCell = ({ date, onClick }: { date: Date | null; onClick?: () => void }) => {
    if (!date) {
      return <div className="aspect-square" />;
    }

    const isPast = isPastDate(date);
    const isBlocked = isBlockedDate(date);
    const isDisabled = isPast || isBlocked;
    const inRange = isInRange(date);
    const isStart = isCheckIn(date);
    const isEnd = isCheckOut(date);
    const isToday =
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate();

    return (
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={`
          aspect-square w-full rounded-lg transition-all relative
          ${isDisabled ? 'text-stone/30 cursor-not-allowed' : 'hover:bg-gold/10 cursor-pointer'}
          ${inRange ? 'bg-gold/5' : ''}
          ${isStart || isEnd ? 'bg-gold text-cream font-medium' : 'text-forest'}
          ${isToday && !isStart && !isEnd ? 'ring-1 ring-gold/40' : ''}
        `}
      >
        <span className="text-sm">{date.getDate()}</span>
      </button>
    );
  };

  // Calendar grid component
  const CalendarGrid = ({ days, monthDate }: { days: (Date | null)[]; monthDate: Date }) => (
    <div className="space-y-3">
      {/* Month header */}
      <div className="text-center">
        <h3 className="font-heading text-xl text-forest">{formatMonthYear(monthDate)}</h3>
      </div>

      {/* Week day headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-xs font-medium text-stone uppercase tracking-wide">
            {day}
          </div>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((date, index) => (
          <DayCell key={index} date={date} onClick={date ? () => handleDateClick(date) : undefined} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg border border-stone/10 p-6">
      {/* Header with navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={goToPrevMonth}
          disabled={isPrevMonthDisabled}
          className="p-2 hover:bg-mist rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-5 h-5 text-forest" />
        </button>

        <div className="text-center">
          <p className="text-xs uppercase tracking-wide text-stone mb-1">
            {selectionMode === 'check-in' ? 'Select Check-In' : 'Select Check-Out'}
          </p>
          {checkIn && !checkOut && (
            <p className="text-xs text-gold">Minimum {minNights} night stay</p>
          )}
        </div>

        <button
          onClick={goToNextMonth}
          className="p-2 hover:bg-mist rounded-lg transition-colors"
          aria-label="Next month"
        >
          <ChevronRight className="w-5 h-5 text-forest" />
        </button>
      </div>

      {/* Calendar grids */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Current month */}
        <CalendarGrid days={currentMonthDays} monthDate={currentMonth} />

        {/* Next month - hidden on mobile */}
        <div className="hidden md:block">
          <CalendarGrid days={nextMonthDays} monthDate={getNextMonth(currentMonth)} />
        </div>
      </div>

      {/* Footer with selected dates */}
      {checkIn && (
        <div className="mt-6 pt-6 border-t border-stone/10">
          <div className="flex items-center justify-between text-sm">
            <div>
              <p className="text-xs uppercase tracking-wide text-stone mb-1">Check-In</p>
              <p className="font-medium text-forest">
                {checkIn.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
            {checkOut && (
              <>
                <div className="h-px bg-stone/20 flex-1 mx-4" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-stone mb-1">Check-Out</p>
                  <p className="font-medium text-forest">
                    {checkOut.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
