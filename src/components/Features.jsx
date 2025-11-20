import { motion } from 'framer-motion';
import { Shield, Crown, Sparkles, Zap } from 'lucide-react';

const features = [
  {
    icon: Crown,
    title: 'Premium Aesthetic',
    desc: 'A refined visual language with gold accents, deep blacks, and cinematic depth.'
  },
  {
    icon: Shield,
    title: 'Secure by Design',
    desc: 'Modern architecture with sensible defaults for privacy and reliability.'
  },
  {
    icon: Sparkles,
    title: 'AI-Native',
    desc: 'Conversational building blocks designed for rapid iteration and polish.'
  },
  {
    icon: Zap,
    title: 'Performance First',
    desc: 'Smooth animations, optimized assets, and responsive interactions.'
  }
];

function Features() {
  return (
    <section id="features" className="relative bg-black py-20">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(800px_500px_at_20%_10%,rgba(234,179,8,0.15),transparent),radial-gradient(600px_400px_at_80%_20%,rgba(234,179,8,0.1),transparent)]"></div>
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-white to-zinc-300 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl"
        >
          A royal experience, inside and out
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-zinc-900/40 p-5 backdrop-blur-sm"
            >
              <div className="mb-4 inline-flex rounded-xl border border-yellow-500/30 bg-black/40 p-2 text-yellow-300">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-300/90">{f.desc}</p>
              <div className="pointer-events-none absolute -bottom-20 right-0 h-40 w-40 rounded-full bg-gradient-to-br from-yellow-300/20 to-amber-500/10 blur-2xl transition-all duration-300 group-hover:translate-y-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
