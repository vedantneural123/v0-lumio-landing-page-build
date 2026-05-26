'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full mb-6"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-slate-300">
            Join creators who are growing faster
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight"
        >
          Ready to transform your content?
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-slate-350 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Start for free. No credit card required. Create your first short-form
          content in minutes.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{
              scale: 1.03,
              backgroundColor: '#4f46e5',
              boxShadow: '0 16px 40px rgba(79, 70, 229, 0.3)',
            }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-indigo-600 text-white rounded-lg font-bold text-lg flex items-center justify-center gap-3 transition-all tracking-tight"
          >
            Start Creating Now
            <ArrowRight className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.03,
              backgroundColor: 'rgba(30, 41, 59, 0.6)',
              borderColor: 'rgba(148, 163, 184, 0.5)',
            }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 border border-slate-700/40 text-white rounded-lg font-bold text-lg transition-all tracking-tight hover:bg-slate-900/40"
          >
            Schedule a Demo
          </motion.button>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-sm text-slate-400"
        >
          <p>✨ Join 5,000+ creators already creating content 10x faster</p>
        </motion.div>

        {/* Video/Product preview */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 40, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 relative"
        >
          <div className="bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-slate-950/40 border border-slate-700/30 rounded-2xl p-1 overflow-hidden">
            {/* Video placeholder with glow */}
            <div className="relative bg-slate-950 rounded-xl aspect-video flex items-center justify-center overflow-hidden group">
              <motion.div
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-cyan-600/10 to-transparent"
              />

              {/* Play button */}
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-20 h-20 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-violet-600/50 transition-all"
              >
                <div className="text-white text-2xl">▶</div>
              </motion.button>

              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(124, 58, 255, 0.4)',
                    '0 0 0 20px rgba(124, 58, 255, 0)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute w-20 h-20 rounded-full"
              />

              <p className="absolute bottom-4 left-4 text-slate-400 text-sm">
                Watch how creators use Lumio
              </p>
            </div>
          </div>

          {/* Glow effect */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-600/20 via-cyan-600/10 to-violet-600/20 rounded-2xl blur-3xl"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
