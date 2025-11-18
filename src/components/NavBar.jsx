import { Menu, Ticket, Search } from 'lucide-react';

function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-3">
            <Ticket className="h-6 w-6 text-white" />
            <span className="font-semibold text-white">HoloTickets</span>
          </div>
          <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a className="hover:text-white" href="#events">Events</a>
            <a className="hover:text-white" href="#how">How it works</a>
            <a className="hover:text-white" href="#faq">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden items-center gap-2 rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-white/80 backdrop-blur md:flex">
              <Search className="h-4 w-4" />
              Search
            </button>
            <button className="rounded-lg bg-white px-3 py-2 text-sm font-medium text-black">Sign in</button>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
