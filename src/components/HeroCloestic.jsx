import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function HeroCloestic() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      <div className="pointer-events-none absolute -inset-x-10 -inset-y-10 opacity-40 [background:radial-gradient(900px_500px_at_50%_10%,rgba(234,179,8,0.2),transparent)]"></div>

      {/* content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-black/40 px-4 py-1.5 text-xs text-yellow-200/90 backdrop-blur"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
          Gen Z Luxury Streetwear
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.8 }}
          className="mt-6 bg-gradient-to-br from-white via-yellow-200 to-amber-200 bg-clip-text text-5xl font-extrabold leading-[1.05] tracking-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Cloestic
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mx-auto mt-5 max-w-2xl text-base text-zinc-200/90 sm:text-lg"
        >
          A premium-ready wardrobe for the bold generation. Minimal silhouettes, metallic accents, and elevated comfort.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#shop"
            className="group inline-flex items-center justify-center rounded-full bg-gradient-to-b from-yellow-400 via-amber-400 to-yellow-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_8px_30px_rgba(234,179,8,0.35)] transition-transform hover:scale-[1.02]"
          >
            Shop New Arrivals
          </a>
          <a
            href="#lookbook"
            className="inline-flex items-center justify-center rounded-full border border-yellow-500/40 bg-black/40 px-6 py-3 text-sm font-semibold text-yellow-200/90 backdrop-blur-md hover:border-yellow-400/60"
          >
            View Lookbook
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroCloestic;
