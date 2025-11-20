import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Luxury glow and gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      <div className="pointer-events-none absolute -inset-x-10 -inset-y-10 opacity-40 [background:radial-gradient(1000px_600px_at_50%_10%,rgba(234,179,8,0.25),transparent)]"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-20 text-center sm:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center rounded-full border border-yellow-500/30 bg-black/30 px-4 py-2 text-xs font-medium text-yellow-200/90 backdrop-blur-md"
        >
          Crafted for creators • Premium AI experience
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="mt-6 bg-gradient-to-br from-yellow-200 via-yellow-400 to-amber-200 bg-clip-text text-5xl font-extrabold leading-[1.1] tracking-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Flames Blue
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mx-auto mt-5 max-w-2xl text-lg text-zinc-200/90 sm:text-xl"
        >
          Design, build, and iterate on fully working apps—guided by conversation. A refined, modern canvas for your ideas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#get-started"
            className="group inline-flex items-center justify-center rounded-full bg-gradient-to-b from-yellow-400 via-amber-400 to-yellow-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_8px_30px_rgba(234,179,8,0.35)] transition-transform hover:scale-[1.02] focus:outline-none"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-full border border-yellow-500/40 bg-black/40 px-6 py-3 text-sm font-semibold text-yellow-200/90 backdrop-blur-md hover:border-yellow-400/60"
          >
            Explore Features
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
