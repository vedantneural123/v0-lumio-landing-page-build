'use client'

import { motion } from 'framer-motion'
import { ArrowDown, CheckCircle2 } from 'lucide-react'

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Upload Your Long-Form Content',
      description:
        'Share your YouTube video, podcast, or any long-form content. Lumio accepts MP4, MOV, and direct links.',
      icon: '📤',
    },
    {
      number: '02',
      title: 'AI Analyzes Viral Moments',
      description:
        'Our AI engine identifies hook moments, engagement peaks, and high-retention segments automatically.',
      icon: '🧠',
    },
    {
      number: '03',
      title: 'Generate Optimized Clips',
      description:
        'Get platform-specific shorts, reels, and TikToks with perfect pacing, transitions, and aspect ratios.',
      icon: '✂️',
    },
    {
      number: '04',
      title: 'Add Captions & Text',
      description:
        'Captions are automatically added and timed. Customize colors, fonts, and animations to match your brand.',
      icon: '📝',
    },
    {
      number: '05',
      title: 'Generate Titles & Hooks',
      description:
        'Get A/B tested headline suggestions and hook variations that maximize click-through rates.',
      icon: '🎯',
    },
    {
      number: '06',
      title: 'Download & Publish',
      description:
        'Export ready-to-publish content packs with thumbnails, metadata, and scheduled posting recommendations.',
      icon: '🚀',
    },
  ]

  return (
    <section id="how-it-works" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How it works
          </h2>
          <p className="text-xl text-slate-400">
            From video to publishable content in minutes
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-600/50 via-cyan-600/30 to-transparent origin-top hidden lg:block"
          />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left side (alternating) */}
                  {index % 2 === 0 ? (
                    <>
                      <motion.div
                        whileHover={{ x: -10 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                            {step.number}
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-slate-400 text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                        className="hidden lg:flex items-center justify-center"
                      >
                        <div className="text-6xl">{step.icon}</div>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                        className="hidden lg:flex items-center justify-center"
                      >
                        <div className="text-6xl">{step.icon}</div>
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 10 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                            {step.number}
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-slate-400 text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </>
                  )}
                </div>

                {/* Timeline dot */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                  className="absolute left-1/2 top-12 lg:top-8 w-4 h-4 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full -translate-x-1/2 hidden lg:block"
                />

                {/* Mobile indicator */}
                <div className="lg:hidden flex items-center justify-center mt-6">
                  {index < steps.length - 1 && (
                    <motion.div
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ArrowDown className="w-6 h-6 text-violet-500" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 flex items-center justify-center gap-3 px-6 py-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl mx-auto w-fit"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span className="text-emerald-300">
            Ready to publish in minutes, not hours
          </span>
        </motion.div>
      </div>
    </section>
  )
}
