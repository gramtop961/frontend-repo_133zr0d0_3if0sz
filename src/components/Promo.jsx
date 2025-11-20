import { motion } from 'framer-motion';

function Promo() {
  return (
    <section id="lookbook" className="relative bg-black py-24">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(900px_500px_at_50%_10%,rgba(34,211,238,0.12),transparent)]"></div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="bg-gradient-to-br from-white to-zinc-300 bg-clip-text text-3xl font-bold text-transparent">
              Noir Neon Lookbook
            </h3>
            <p className="mt-4 text-zinc-300/90">
              Clean lines, electrified accents, and a night-city silhouette. Explore the edit crafted for after-hours energy.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#shop" className="rounded-full bg-gradient-to-b from-cyan-400 via-sky-400 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_8px_30px_rgba(34,211,238,0.35)]">Shop Collection</a>
              <a href="#" className="rounded-full border border-cyan-400/40 bg-black/40 px-6 py-3 text-sm font-semibold text-cyan-200/90 backdrop-blur-md">Learn More</a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-cyan-400/20"
          >
            <img
              src="https://images.unsplash.com/photo-1520974722074-0036f2c7e6e7?q=80&w=1800&auto=format&fit=crop"
              alt="Lookbook"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
