import { Menu, Search, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-yellow-500/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-extrabold tracking-tight"
        >
          <span className="bg-gradient-to-br from-yellow-200 via-yellow-400 to-amber-300 bg-clip-text text-transparent">Cloestic</span>
        </motion.a>

        {/* Nav */}
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <a href="#new" className="hover:text-yellow-300">New</a>
          <a href="#men" className="hover:text-yellow-300">Men</a>
          <a href="#women" className="hover:text-yellow-300">Women</a>
          <a href="#accessories" className="hover:text-yellow-300">Accessories</a>
          <a href="#about" className="hover:text-yellow-300">About</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button aria-label="Search" className="rounded-full border border-yellow-500/20 bg-zinc-900/60 p-2 text-zinc-300 hover:text-yellow-300">
            <Search className="h-5 w-5" />
          </button>
          <button aria-label="Cart" className="rounded-full border border-yellow-500/20 bg-zinc-900/60 p-2 text-zinc-300 hover:text-yellow-300">
            <ShoppingBag className="h-5 w-5" />
          </button>
          <button aria-label="Menu" className="md:hidden rounded-full border border-yellow-500/20 bg-zinc-900/60 p-2 text-zinc-300 hover:text-yellow-300">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
