function EventCard({ event, onBuy }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 transition hover:border-white/20">
      <div className="relative h-48 w-full overflow-hidden rounded-xl">
        <img src={event.image} alt={event.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-3 left-3 rounded-md bg-black/60 px-2 py-1 text-xs text-white/80 backdrop-blur">
          {new Date(event.date).toLocaleDateString()}
        </div>
      </div>
      <div className="mt-3">
        <h3 className="line-clamp-1 text-white">{event.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-white/70">{event.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-white">${event.price.toFixed(2)}</span>
          <button onClick={() => onBuy(event)} className="rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-black">Buy</button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
