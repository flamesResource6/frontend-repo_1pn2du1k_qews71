import { useEffect, useState } from 'react';
import EventCard from './EventCard';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

function EventsGrid({ onBuy }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_BASE}/api/events`);
        const data = await res.json();
        setEvents(data.events || []);
      } catch (e) {
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <section id="events" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-64 animate-pulse rounded-2xl bg-white/5" />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Featured Events</h2>
          <p className="text-sm text-white/70">Carefully curated for the perfect night out.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map(e => (
          <EventCard key={e._id} event={e} onBuy={onBuy} />)
        )}
      </div>
    </section>
  );
}

export default EventsGrid;
