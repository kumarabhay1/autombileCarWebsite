"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, X } from "lucide-react";

interface CustomCalendarProps {
  selectedDate: string; // YYYY-MM-DD
  onSelectDate: (dateStr: string) => void;
}

/**
 * Micro-Compact & Sleek Custom Automotive Calendar Date Picker
 * Extremely compact sizing (max-w-[235px]) for 100% fit inside form inputs.
 */
export function CustomCalendar({ selectedDate, onSelectDate }: CustomCalendarProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [currentMonth, setCurrentMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  let startingDay = firstDayOfMonth.getDay() - 1;
  if (startingDay === -1) startingDay = 6;

  const prevMonthDays = startingDay;

  const prevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const handleDateClick = (dayNum: number) => {
    const d = new Date(year, month, dayNum);
    d.setHours(0, 0, 0, 0);

    if (d < today) return;

    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const formattedStr = `${yyyy}-${mm}-${dd}`;

    onSelectDate(formattedStr);
    setIsOpen(false);
  };

  const formatDisplay = (dateStr: string) => {
    if (!dateStr) return "Select Preferred Date (Optional)";
    const [y, m, d] = dateStr.split("-").map(Number);
    const dateObj = new Date(y, m - 1, d);
    return dateObj.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const setQuickDate = (daysToAdd: number) => {
    const d = new Date(today);
    d.setDate(d.getDate() + daysToAdd);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    onSelectDate(`${yyyy}-${mm}-${dd}`);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-11 px-3.5 rounded-xl border flex items-center justify-between transition-all duration-200 cursor-pointer ${
          selectedDate 
            ? "border-primary bg-primary/10 text-foreground ring-1 ring-primary/30" 
            : "border-border/80 bg-secondary/50 hover:bg-secondary/80 hover:border-primary/40 text-foreground"
        }`}
      >
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="w-6 h-6 rounded-md bg-primary/15 flex items-center justify-center shrink-0">
            <CalendarIcon className="w-3.5 h-3.5 text-primary" />
          </div>
          <span className="text-xs font-bold text-foreground truncate">
            {formatDisplay(selectedDate)}
          </span>
        </div>
        
        <span className="text-[10px] font-black text-primary uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded border border-primary/20 shrink-0 ml-2">
          {selectedDate ? "Change" : "Pick Date"}
        </span>
      </button>

      {/* Popover Calendar Dropdown - Micro Compact (max-w-[235px]) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 3, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 3, scale: 0.96 }}
            transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-12 z-[140] w-full max-w-[235px] p-2.5 rounded-xl bg-card border border-border shadow-xl shadow-primary/10 backdrop-blur-2xl text-foreground ring-1 ring-border"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-1.5 pb-1.5 border-b border-border/60">
              <span className="font-extrabold text-[11px] tracking-wide text-foreground">
                {monthNames[month]} {year}
              </span>
              
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={prevMonth}
                  className="w-5 h-5 rounded bg-secondary hover:bg-primary hover:text-white border border-border/60 flex items-center justify-center transition-all cursor-pointer text-foreground"
                >
                  <ChevronLeft className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={nextMonth}
                  className="w-5 h-5 rounded bg-secondary hover:bg-primary hover:text-white border border-border/60 flex items-center justify-center transition-all cursor-pointer text-foreground"
                >
                  <ChevronRight className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-5 h-5 rounded bg-secondary hover:bg-red-500 hover:text-white border border-border/60 flex items-center justify-center transition-all ml-0.5 cursor-pointer text-foreground"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Quick Shortcuts */}
            <div className="flex items-center gap-1 mb-1.5">
              <button
                type="button"
                onClick={() => setQuickDate(0)}
                className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-secondary hover:bg-primary hover:text-white border border-border/80 transition-all cursor-pointer text-foreground"
              >
                Today
              </button>
              <button
                type="button"
                onClick={() => setQuickDate(1)}
                className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-secondary hover:bg-primary hover:text-white border border-border/80 transition-all cursor-pointer text-foreground"
              >
                Tomorrow
              </button>
            </div>

            {/* Day Labels */}
            <div className="grid grid-cols-7 gap-0.5 text-center mb-1">
              {daysOfWeek.map((day, idx) => (
                <span key={day} className={`text-[9px] font-bold ${idx === 6 ? "text-red-500" : "text-muted-foreground"}`}>
                  {day}
                </span>
              ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-0.5">
              {/* Prev month empty slots */}
              {Array.from({ length: prevMonthDays }).map((_, i) => (
                <div key={`prev-${i}`} className="h-5.5" />
              ))}

              {/* Current month days */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const dayNum = i + 1;
                const d = new Date(year, month, dayNum);
                d.setHours(0, 0, 0, 0);

                const isPast = d < today;
                const isSunday = d.getDay() === 0;

                const yyyy = d.getFullYear();
                const mm = String(d.getMonth() + 1).padStart(2, '0');
                const dd = String(d.getDate()).padStart(2, '0');
                const dateStr = `${yyyy}-${mm}-${dd}`;

                const isSelected = selectedDate === dateStr;

                return (
                  <button
                    type="button"
                    key={dayNum}
                    disabled={isPast || isSunday}
                    onClick={() => handleDateClick(dayNum)}
                    className={`h-5.5 w-5.5 mx-auto rounded font-bold text-[10px] transition-all duration-150 flex items-center justify-center cursor-pointer ${
                      isSelected
                        ? "bg-primary text-white shadow shadow-primary/30 scale-105"
                        : isPast || isSunday
                        ? "text-muted-foreground/30 cursor-not-allowed line-through text-[9px]"
                        : "bg-secondary/40 text-foreground hover:bg-primary hover:text-white border border-border/40 hover:border-primary"
                    }`}
                  >
                    {dayNum}
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="mt-1.5 pt-1 border-t border-border/60 flex items-center justify-between text-[9px] font-semibold text-muted-foreground">
              <span className="text-red-500/80 font-bold">* Sun Closed</span>
              <button
                type="button"
                onClick={() => { onSelectDate(""); setIsOpen(false); }}
                className="text-red-500 font-bold hover:underline cursor-pointer"
              >
                Clear
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
