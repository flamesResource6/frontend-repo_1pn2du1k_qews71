import { useState } from 'react';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import EventsGrid from './components/EventsGrid';
import CheckoutModal from './components/CheckoutModal';

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <Hero />
      <EventsGrid onBuy={setSelected} />
      <section id="how" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">How it works</h3>
          <ol className="mt-4 grid gap-3 text-white/80 sm:grid-cols-3">
            <li className="rounded-xl border border-white/10 bg-black/30 p-4">1. Pick your event</li>
            <li className="rounded-xl border border-white/10 bg-black/30 p-4">2. Checkout in seconds</li>
            <li className="rounded-xl border border-white/10 bg-black/30 p-4">3. Get a holographic e-ticket</li>
          </ol>
        </div>
      </section>
      <section id="faq" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="font-semibold">Is this a real checkout?</h4>
            <p className="mt-2 text-white/70">This is a demo experience. Payments are simulated and no real charges occur.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="font-semibold">Do tickets persist?</h4>
            <p className="mt-2 text-white/70">If a database is configured, orders are stored there. Otherwise we still show a smooth flow.</p>
          </div>
        </div>
      </section>

      <CheckoutModal open={!!selected} event={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

export default App;
