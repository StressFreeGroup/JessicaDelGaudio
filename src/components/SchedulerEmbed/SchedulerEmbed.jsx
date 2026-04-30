import { useEffect, useMemo, useState } from 'react';
import { scheduler, contact } from '../../config/booking.js';
import s from './SchedulerEmbed.module.css';

/**
 * SchedulerEmbed — single component, three modes:
 *   mode === 'mock'      → in-house availability grid (preview while Workspace pending)
 *   mode === 'calendly'  → Calendly inline iframe
 *   mode === 'google'    → Google Appointment Scheduling iframe
 *
 * Switch via src/config/booking.js → scheduler.mode.
 */

const SESSION_TYPES = [
  { id: 'consult', label: 'Free 15-min consultation', duration: 15, free: true },
  { id: 'session', label: '60-min therapy session', duration: 60, free: false }
];

const TIME_SLOTS_WEEKDAY = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];
const TIME_SLOTS_WEEKEND = ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM'];

// Deterministic mock availability — looks real, predictable for demo
function getAvailability(date) {
  if (!date) return null;
  const day = date.getDay();
  if (day === 0) return null; // Sundays closed
  // Past dates are unavailable
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (date < today) return null;
  // Weekend (Saturday)
  if (day === 6) return TIME_SLOTS_WEEKEND;
  // Some weekdays partially booked using a deterministic hash
  const seed = (date.getDate() + date.getMonth()) % 5;
  if (seed === 0) return TIME_SLOTS_WEEKDAY.filter((_, i) => i % 2 === 0);
  if (seed === 1) return TIME_SLOTS_WEEKDAY.slice(0, 4);
  return TIME_SLOTS_WEEKDAY;
}

function buildMonthGrid(year, month) {
  const first = new Date(year, month, 1);
  const startWeekday = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  // Leading blanks
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  // Days
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  // Trailing blanks to complete weeks
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const WEEKDAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export default function SchedulerEmbed() {
  const mode = scheduler.mode || 'mock';
  if (mode === 'calendly') return <CalendlyEmbed />;
  if (mode === 'google')   return <GoogleEmbed />;
  return <MockGrid />;
}

function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { try { document.body.removeChild(script); } catch (_) {} };
  }, []);
  return (
    <div className={s.iframeWrap}>
      <div
        className="calendly-inline-widget"
        data-url={scheduler.calendlyUrl}
        style={{ minWidth: '320px', height: '720px' }}
      />
    </div>
  );
}

function GoogleEmbed() {
  return (
    <div className={s.iframeWrap}>
      <iframe
        src={scheduler.googleUrl}
        title="Book an appointment"
        style={{ border: 0, width: '100%', minHeight: '720px' }}
      />
    </div>
  );
}

function MockGrid() {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [sessionType, setSessionType] = useState(SESSION_TYPES[0].id);
  const [submitted, setSubmitted] = useState(false);

  const cells = useMemo(() => buildMonthGrid(viewYear, viewMonth), [viewYear, viewMonth]);
  const timesForSelected = useMemo(() => getAvailability(selectedDate), [selectedDate]);

  const canGoPrev = !(viewYear === today.getFullYear() && viewMonth === today.getMonth());

  function prevMonth() {
    if (!canGoPrev) return;
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
    setSelectedDate(null);
    setSelectedTime(null);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
    setSelectedDate(null);
    setSelectedTime(null);
  }
  function selectDate(date) {
    if (!date) return;
    const avail = getAvailability(date);
    if (!avail) return;
    setSelectedDate(date);
    setSelectedTime(null);
  }
  function confirmBooking() {
    if (!selectedDate || !selectedTime) return;
    const dateStr = selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    const type = SESSION_TYPES.find(t => t.id === sessionType);
    const subject = `Booking request — ${type.label}`;
    const body = `Hi Jessica,

I'd like to request the following appointment:

  Type:  ${type.label}
  Date:  ${dateStr}
  Time:  ${selectedTime}

Please confirm or suggest an alternative.

Thank you,
[Your name]
[Your phone]`;
    const mailto = `mailto:${contact.personalEmail || contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  const monthLabel = `${MONTH_NAMES[viewMonth]} ${viewYear}`;

  return (
    <div className={s.grid}>
      {/* LEFT — calendar */}
      <div className={s.calCol}>
        <div className={s.calHead}>
          <button
            className={s.navBtn}
            onClick={prevMonth}
            disabled={!canGoPrev}
            aria-label="Previous month"
          >
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
              <path d="M10 3l-5 5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className={s.monthLabel}>{monthLabel}</span>
          <button className={s.navBtn} onClick={nextMonth} aria-label="Next month">
            <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className={s.weekdays}>
          {WEEKDAY_LABELS.map((w, i) => (
            <span key={i} className={s.weekday}>{w}</span>
          ))}
        </div>
        <div className={s.daysGrid}>
          {cells.map((cell, i) => {
            if (!cell) return <span key={i} className={s.dayEmpty} />;
            const avail = getAvailability(cell);
            const isAvail = !!avail;
            const isSelected = selectedDate && cell.getTime() === selectedDate.getTime();
            const isToday = cell.getTime() === today.getTime();
            return (
              <button
                key={i}
                className={`${s.day} ${!isAvail ? s.dayDisabled : ''} ${isSelected ? s.daySelected : ''} ${isToday ? s.dayToday : ''}`}
                onClick={() => selectDate(cell)}
                disabled={!isAvail}
                aria-label={cell.toDateString()}
              >
                {cell.getDate()}
              </button>
            );
          })}
        </div>
        <div className={s.legend}>
          <span><i className={s.legendAvail} />Available</span>
          <span><i className={s.legendUnavail} />Unavailable</span>
        </div>
      </div>

      {/* RIGHT — time slots & confirmation */}
      <div className={s.timeCol}>
        {!selectedDate && (
          <div className={s.empty}>
            <h4>Select a date</h4>
            <p>Choose an available date on the left to see open times.</p>
          </div>
        )}

        {selectedDate && !submitted && (
          <>
            <div className={s.dateHead}>
              <span className={s.dateEyebrow}>Selected date</span>
              <h4 className={s.dateTitle}>
                {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
              </h4>
            </div>

            <div className={s.typeSelect}>
              <span className={s.typeLabel}>Session type</span>
              <div className={s.typeOptions}>
                {SESSION_TYPES.map(t => (
                  <button
                    key={t.id}
                    className={`${s.typeOption} ${sessionType === t.id ? s.typeOptionActive : ''}`}
                    onClick={() => setSessionType(t.id)}
                    type="button"
                  >
                    <span className={s.typeOptionLabel}>{t.label}</span>
                    <span className={s.typeOptionDuration}>{t.free ? 'Free' : `${t.duration} min`}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={s.times}>
              <span className={s.timesLabel}>Available times ({timesForSelected.length})</span>
              <div className={s.timesGrid}>
                {timesForSelected.map(t => (
                  <button
                    key={t}
                    className={`${s.timeBtn} ${selectedTime === t ? s.timeBtnActive : ''}`}
                    onClick={() => setSelectedTime(t)}
                    type="button"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <button
              className={s.confirmBtn}
              onClick={confirmBooking}
              disabled={!selectedTime}
              type="button"
            >
              {selectedTime ? `Request ${selectedTime}` : 'Pick a time to continue'}
            </button>
          </>
        )}

        {submitted && (
          <div className={s.success}>
            <svg viewBox="0 0 24 24" width="36" height="36" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
              <path d="M7 12l3.5 3.5L17 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h4>Request sent</h4>
            <p>An email draft opened with your appointment details. Send it to Jessica and she&rsquo;ll confirm within one business day.</p>
            <button className={s.resetBtn} onClick={() => { setSubmitted(false); setSelectedDate(null); setSelectedTime(null); }} type="button">
              Book another time
            </button>
          </div>
        )}
      </div>

      {/* Preview tag */}
      <div className={s.previewTag} aria-hidden="true">
        <span className={s.previewDot} />
        Preview &mdash; live calendar activates with Google Workspace
      </div>
    </div>
  );
}
