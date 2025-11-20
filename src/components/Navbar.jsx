import { Menu, Search, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-extrabold tracking-tight"
        >
          <span className="bg-gradient-to-br from-cyan-300 via-sky-400 to-fuchsia-500 bg-clip-text text-transparent">Cloestic</span>
        </motion.a>

        {/* Nav */}
        <nav className="relative hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {[
            { href: '#new', label: 'New' },
            { href: '#men', label: 'Men' },
            { href: '#women', label: 'Women' },
            { href: '#accessories', label: 'Accessories' },
            { href: '#about', label: 'About' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative pb-1 transition-colors hover:text-cyan-300"
            >
              {item.label}
              <span className="pointer-events-none absolute -bottom-[2px] left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500 transition-all duration-300 group-hover:w-full md:hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button aria-label="Search" className="rounded-full border border-cyan-400/20 bg-zinc-900/60 p-2 text-zinc-300 shadow-[0_0_20px_rgba(34,211,238,0.12)] transition-colors hover:text-cyan-300">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Cart" className="rounded-full border border-cyan-400/20 bg-zinc-900/60 p-2 text-zinc-300 shadow-[0_0_20px_rgba(34,211,238,0.12)] transition-colors hover:text-cyan-300">
            <ShoppingBag className="h-5 w-5" />
          </button>
          <button aria-label="Menu" className="md:hidden rounded-full border border-cyan-400/20 bg-zinc-900/60 p-2 text-zinc-300 shadow-[0_0_20px_rgba(34,211,238,0.12)] transition-colors hover:text-cyan-300">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
      {/* subtle neon line */}
      <div className="pointer-events-none h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
    </header>
  );
}

export default Navbar;
