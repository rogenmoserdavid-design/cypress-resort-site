'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingCalendarProps {
  checkIn: Date | null;
  checkOut: Date | null;
  onDateSelect: (checkIn: Date | null, checkOut: Date | null) => void;
  minNights?: number;
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function isSameDay(d1: Date, d2: Date): boolean {
  return d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}

function isInRange(date: Date, start: Date | null, end: Date | null): boolean {
  if (!start || !end) return false;
  return date > start && date < end;
}

export default function BookingCalendar({ checkIn, checkOut, onDateSelect, minNights = 2 }: BookingCalendarProps) {
  const today = useMemo(() => { const d = new Date(); d.setHours(0,0,0,0); return d; }, []);
  const [currentMonth, setCurrentMonth] = useState(() => ({ month: today.getMonth(), year: today.getFullYear() }));
  const [selectingCheckOut, setSelectingCheckOut] = useState(false);
  const [direction, setDirection] = useState(0);

  const generateDays = (month: number, year: number) => {
    const first = new Date(year, month, 1);
    const last = new Date(year, month + 1, 0);
    const days: (Date | null)[] = [];
    for (let i = 0; i < first.getDay(); i++) days.push(null);
    for (let i = 1; i <= last.getDate(); i++) days.push(new Date(year, month, i));
    return days;
  };

  const month1Days = generateDays(currentMonth.month, currentMonth.year);
  const nextMonth = new Date(currentMonth.year, currentMonth.month + 1, 1);
  const month2Days = generateDays(nextMonth.getMonth(), nextMonth.getFullYear());

  const navigate = (delta: number) => {
    setDirection(delta);
    setCurrentMonth(prev => {
      const d = new Date(prev.year, prev.month + delta, 1);
      return { month: d.getMonth(), year: d.getFullYear() };
    });
  };

  const handleClick = (date: Date) => {
    if (date < today) return;
    if (!selectingCheckOut) {
      onDateSelect(date, null);
      setSelectingCheckOut(true);
    } else {
      if (checkIn && date > checkIn) {
        const nights = Math.ceil((date.getTime() - checkIn.getTime()) / 86400000);
        if (nights >= minNights) {
          onDateSelect(checkIn, date);
          setSelectingCheckOut(false);
        }
      } else {
        onDateSelect(date, null);
      }
    }
  };

  const renderDay = (date: Date | null, key: string) => {
    if (!date) return <div key={key} className="w-12 h-12" />;
    const isPast = date < today;
    const isCheckIn = checkIn && isSameDay(date, checkIn);
    const isCheckOut = checkOut && isSameDay(date, checkOut);
    const inRange = isInRange(date, checkIn, checkOut);
    const isToday = isSameDay(date, today);

    return (
      <button
        key={key}
        onClick={() => !isPast && handleClick(date)}
        disabled={isPast}
        className={`relative w-12 h-12 flex items-center justify-center text-sm transition-all duration-200
          ${isPast ? 'text-stone/30 cursor-not-allowed' : 'cursor-pointer hover:bg-mist'}
          ${isCheckIn || isCheckOut ? 'bg-gold text-forest font-medium z-10' : ''}
          ${inRange ? 'bg-gold/20 text-forest' : ''}
          ${isCheckIn ? 'rounded-l-full' : ''} ${isCheckOut ? 'rounded-r-full' : ''}
          ${!isCheckIn && !isCheckOut && !inRange && !isPast ? 'text-forest' : ''}`}
      >
        {date.getDate()}
        {isToday && !isCheckIn && !isCheckOut && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full" />}
      </button>
    );
  };

  const renderMonth = (days: (Date | null)[], month: number, year: number) => (
    <div>
      <h4 className="font-heading text-forest text-xl text-center mb-4">{MONTHS[month]} {year}</h4>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAYS.map(d => <div key={d} className="w-12 h-8 flex items-center justify-center text-xs text-stone uppercase tracking-wide">{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((date, i) => renderDay(date, `${month}-${year}-${i}`))}
      </div>
    </div>
  );

  return (
    <div className="select-none">
      <div className="flex items-center justify-between mb-6">
        <button onClick={() => navigate(-1)} disabled={currentMonth.month === today.getMonth() && currentMonth.year === today.getFullYear()} className="p-2 text-forest hover:text-gold transition-colors disabled:opacity-30">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <p className="text-stone text-sm">{selectingCheckOut ? 'Select check-out date' : 'Select check-in date'}</p>
        <button onClick={() => navigate(1)} className="p-2 text-forest hover:text-gold transition-colors">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div key={`${currentMonth.month}-${currentMonth.year}`} custom={direction}
          initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12"
        >
          {renderMonth(month1Days, currentMonth.month, currentMonth.year)}
          <div className="hidden md:block">{renderMonth(month2Days, nextMonth.getMonth(), nextMonth.getFullYear())}</div>
        </motion.div>
      </AnimatePresence>

      {(checkIn || checkOut) && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 pt-6 border-t border-stone/10 flex items-center justify-center gap-6">
          <div className="text-center">
            <p className="text-stone text-xs uppercase tracking-wide mb-1">Check-in</p>
            <p className="font-heading text-forest text-lg">{checkIn ? checkIn.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '—'}</p>
          </div>
          <div className="w-8 h-px bg-gold" />
          <div className="text-center">
            <p className="text-stone text-xs uppercase tracking-wide mb-1">Check-out</p>
            <p className="font-heading text-forest text-lg">{checkOut ? checkOut.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '—'}</p>
          </div>
        </motion.div>
      )}

      {checkIn && (
        <div className="mt-4 text-center">
          <button onClick={() => { onDateSelect(null, null); setSelectingCheckOut(false); }} className="text-stone text-sm hover:text-forest transition-colors">Clear dates</button>
        </div>
      )}
    </div>
  );
}
