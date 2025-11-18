import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Ticket */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-white/70 backdrop-blur">
          Futuristic Events Marketplace
        </span>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">
          Get Your Ticket to Tomorrow
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Discover immersive shows, neon nightlife, and holographic experiences. Book in seconds and step into the future.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#events" className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90">
            Browse Events
          </a>
          <a href="#how" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white/90 transition hover:border-white/40">
            How it works
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
