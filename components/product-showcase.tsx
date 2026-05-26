'use client'

import { motion } from 'framer-motion'
import { BarChart3, Type, Image as ImageIcon, Settings } from 'lucide-react'

export function ProductShowcase() {
  const showcaseItems = [
    {
      icon: BarChart3,
      title: 'Short-Form Editor',
      subtitle: 'Platform-Optimized Clips',
      description:
        'Automatically crops, transitions, and optimizes for YouTube Shorts, TikTok, Instagram Reels, and more.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Type,
      title: 'Captions Studio',
      subtitle: 'Dynamic Text Overlays',
      description:
        'Styled captions with custom fonts, colors, and animations that match your brand identity.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: ImageIcon,
      title: 'Thumbnail Generator',
      subtitle: 'Click-Worthy Visuals',
      description:
        'AI-powered thumbnail generation with text, faces, and custom designs optimized for CTR.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Settings,
      title: 'Creator Analytics',
      subtitle: 'Performance Insights',
      description:
        'Track which shorts perform best, identify patterns, and optimize your content strategy.',
      gradient: 'from-orange-500 to-pink-500',
    },
  ]

  return (
    <section id="showcase" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            See Lumio in action
          </h2>
          <p className="text-xl text-slate-350 leading-relaxed">
            Everything you need in one creative suite
          </p>
        </motion.div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {showcaseItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-slate-800/50 via-slate-900/30 to-slate-950/50 border border-slate-700/30 rounded-2xl p-8 overflow-hidden transition-all hover:border-slate-600/50">
                  {/* Background gradient */}
                  <motion.div
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-5`}
                  />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-400 font-medium mb-4 tracking-tight">
                        {item.subtitle}
                      </p>
                      <p className="text-slate-400 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>

                    {/* Mock preview area */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="mt-8 pt-8 border-t border-slate-700/30"
                    >
                      <div className="aspect-video bg-slate-900/50 rounded-lg border border-slate-700/30 flex items-center justify-center overflow-hidden relative">
                        {/* Animated preview element */}
                        <motion.div
                          animate={{
                            y: [-5, 5, -5],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                          className={`w-3/4 h-3/4 bg-gradient-to-br ${item.gradient} rounded opacity-40`}
                        />
                        <div className="absolute text-sm text-slate-500">
                          Live Preview
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Hover glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl -z-10 transition-opacity`}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
