'use client'

import { motion } from 'framer-motion'
import { Sparkles, Zap, Target, Wand2 } from 'lucide-react'

export function FeatureEcosystem() {
  const features = [
    {
      icon: Sparkles,
      title: 'AI Content Repurposing',
      description:
        'Intelligently transform long-form videos into optimized short-form content for every platform with one click.',
      gradient: 'from-violet-500 to-purple-600',
      accent: 'bg-violet-500/10 border-violet-500/20',
    },
    {
      icon: Target,
      title: 'Hook Optimization',
      description:
        'Get AI-powered suggestions for the most engaging hooks and opening moments that stop scrollers in their tracks.',
      gradient: 'from-cyan-500 to-blue-600',
      accent: 'bg-cyan-500/10 border-cyan-500/20',
    },
    {
      icon: Wand2,
      title: 'Titles + Captions',
      description:
        'Generate SEO-optimized titles and engaging captions that boost discoverability and viewer retention.',
      gradient: 'from-emerald-500 to-teal-600',
      accent: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: Zap,
      title: 'Post Pack Generation',
      description:
        'Export complete content packs ready to publish—shorts, captions, thumbnails, and metadata included.',
      gradient: 'from-orange-500 to-pink-600',
      accent: 'bg-orange-500/10 border-orange-500/20',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="features" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your complete creator toolkit
          </h2>
          <p className="text-xl text-slate-400">
            Everything you need to grow faster
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0, 0, 0, 0.3)' }}
                className={`group relative ${feature.accent} border rounded-2xl p-8 overflow-hidden transition-all hover:border-slate-600/50`}
              >
                {/* Background gradient */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  {/* Arrow indicator */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="mt-6 inline-flex items-center text-sm font-semibold bg-gradient-to-r from-slate-400 to-slate-300 bg-clip-text text-transparent"
                  >
                    Learn more →
                  </motion.div>
                </div>

                {/* Hover glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 -z-10 rounded-2xl transition-opacity`}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
