import { motion } from 'framer-motion';
import { Star, Flame, Sparkles, Shield } from 'lucide-react';

const items = [
  {
    title: 'Halo Puffer',
    price: '$189',
    tag: 'New',
    img: 'https://images.unsplash.com/photo-1548883354-94bcfe321e2f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Chain Crewneck',
    price: '$89',
    tag: 'Bestseller',
    img: 'https://images.unsplash.com/photo-1520975922284-95dd8a04a2be?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Midnight Cargo',
    price: '$129',
    tag: 'Limited',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Monolith Hoodie',
    price: '$99',
    tag: 'Drop',
    img: 'https://images.unsplash.com/photo-1520975657282-4f4e82bdb4f7?q=80&w=1600&auto=format&fit=crop',
  },
];

function Collection() {
  return (
    <section id="shop" className="relative bg-black py-20">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(800px_500px_at_10%_10%,rgba(234,179,8,0.12),transparent),radial-gradient(600px_400px_at_90%_20%,rgba(234,179,8,0.08),transparent)]"></div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-white to-zinc-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
          >
            Cloestic Collection
          </motion.h2>
          <div className="hidden gap-2 sm:flex">
            {[Star, Flame, Sparkles, Shield].map((Icon, idx) => (
              <div key={idx} className="rounded-full border border-yellow-500/20 bg-zinc-900/50 p-2 text-yellow-300">
                <Icon className="h-4 w-4" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group overflow-hidden rounded-2xl border border-yellow-500/20 bg-zinc-900/40 backdrop-blur-sm"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
                <div className="absolute left-3 top-3 rounded-full border border-yellow-500/30 bg-black/50 px-3 py-1 text-xs text-yellow-200/90 backdrop-blur">
                  {item.tag}
                </div>
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-zinc-400">Premium Essentials</p>
                </div>
                <div className="text-sm font-bold text-yellow-300">{item.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collection;
