import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { listFeaturedEvents } from '../features/our-work/api';
import { contentTypeLabel, selectFeaturedEvent } from '../features/our-work/helpers';

export default function FeaturedEventAnnouncement() {
  const [event, setEvent] = useState(null);
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (sessionStorage.getItem('nurture-haven:event-dismissed') === '1') return;
    listFeaturedEvents().then((events) => setEvent(selectFeaturedEvent(events))).catch(() => setEvent(null));
  }, []);

  useEffect(() => {
    const close = (nativeEvent) => {
      if (nativeEvent.key === 'Escape') setOpen(false);
      if (nativeEvent.type === 'mousedown' && !containerRef.current?.contains(nativeEvent.target)) setOpen(false);
    };
    document.addEventListener('keydown', close);
    document.addEventListener('mousedown', close);
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('mousedown', close); };
  }, []);

  if (!event) return null;
  const startsAt = new Intl.DateTimeFormat('en-NG', { dateStyle: 'medium', timeStyle: 'short', timeZone: event.eventTimezone || 'Africa/Lagos' }).format(new Date(event.eventStartsAt));

  return (
    <div ref={containerRef} className="relative border-b border-white/10 bg-[#052F1B] text-white" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={(focusEvent) => { if (!focusEvent.currentTarget.contains(focusEvent.relatedTarget)) setOpen(false); }}>
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-10 py-2 text-center text-xs sm:text-sm">
        <button type="button" className="font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#75E29A]" aria-expanded={open} aria-controls="featured-event-popover" onClick={() => setOpen((value) => !value)}><span className="mr-2 rounded-full bg-[#26D367] px-2 py-0.5 text-[10px] font-bold uppercase text-[#052F1B]">Upcoming</span>{event.title}</button>
        <button type="button" aria-label="Dismiss event announcement for this session" className="absolute right-3 text-lg text-white/70 hover:text-white" onClick={() => { sessionStorage.setItem('nurture-haven:event-dismissed', '1'); setEvent(null); }}>×</button>
      </div>
      {open && <div id="featured-event-popover" role="dialog" aria-label="Upcoming event" className="absolute left-1/2 top-full z-[110] w-[min(92vw,420px)] -translate-x-1/2 rounded-b-2xl bg-[#052F1B] p-6 shadow-xl"><p className="text-xs font-semibold uppercase tracking-widest text-[#75E29A]">{contentTypeLabel(event.contentType)}</p><h2 className="mt-2 text-xl font-semibold">{event.title}</h2>{event.excerpt && <p className="mt-2 text-sm leading-6 text-white/75">{event.excerpt}</p>}<p className="mt-4 text-sm font-medium">{startsAt} {event.eventTimezone && `(${event.eventTimezone})`}</p><div className="mt-5 flex flex-wrap gap-3">{(event.registrationUrl || event.meetingUrl) && <a href={event.registrationUrl || event.meetingUrl} target="_blank" rel="noreferrer" className="rounded-full bg-[#26D367] px-4 py-2 text-sm font-semibold text-[#052F1B]">Join or register</a>}<Link to={`/our-work/${event.slug}`} className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold" onClick={() => setOpen(false)}>View details</Link></div></div>}
    </div>
  );
}
