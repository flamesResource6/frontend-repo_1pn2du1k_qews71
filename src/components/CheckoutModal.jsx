import { useState } from 'react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

function CheckoutModal({ open, onClose, event }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  if (!open || !event) return null;

  const total = (event.price || 0) * qty;

  async function submit() {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event_id: event._id, name, email, quantity: qty })
      });
      const data = await res.json();
      setResult(data);
    } catch (e) {
      setResult({ error: 'Something went wrong' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 backdrop-blur sm:items-center">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black p-6 text-white shadow-2xl">
        {result ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold">Order {result.status === 'confirmed' ? 'Confirmed' : 'Received'}</h3>
            <p className="mt-2 text-white/70">Total paid: ${Number(result.total_amount || total).toFixed(2)}</p>
            <button onClick={onClose} className="mt-6 rounded-lg bg-white px-4 py-2 text-black">Close</button>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Checkout</h3>
              <p className="text-sm text-white/70">{event.title}</p>
            </div>
            <div className="space-y-3">
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40" />
              <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none placeholder:text-white/40" />
              <div className="flex items-center justify-between">
                <label className="text-white/80">Quantity</label>
                <input type="number" min={1} value={qty} onChange={e => setQty(Number(e.target.value))} className="w-24 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-right outline-none" />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-white/80">Total</div>
              <div className="text-lg font-semibold">${total.toFixed(2)}</div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-3">
              <button onClick={onClose} className="rounded-lg border border-white/10 px-4 py-2">Cancel</button>
              <button onClick={submit} disabled={loading} className="rounded-lg bg-white px-4 py-2 text-black disabled:opacity-50">{loading ? 'Processing...' : 'Pay now'}</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CheckoutModal;
