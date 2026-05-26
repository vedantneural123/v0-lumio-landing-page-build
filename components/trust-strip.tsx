'use client'

import { motion } from 'framer-motion'

export function TrustStrip() {
  const creators = [
    'MrBeast',
    'Tana Mongeau',
    'Zach King',
    'Addison Rae',
    'James Charles',
    'Pokimane',
  ]

  return (
    <section className="relative py-16 px-6 border-y border-slate-800/30">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <p className="text-center text-slate-400 text-sm font-medium mb-8">
          Trusted by creators across platforms
        </p>

        {/* Logo Carousel */}
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: [-100, 0] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex gap-12 min-w-max"
          >
            {[...creators, ...creators].map((creator, index) => (
              <motion.div
                key={`${creator}-${index}`}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-6 py-3 bg-slate-800/20 border border-slate-700/30 rounded-lg whitespace-nowrap hover:border-slate-700/50 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full" />
                <span className="text-slate-300 text-sm font-medium">
                  {creator}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
