'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export function ProductStory() {
  const steps = [
    { icon: '📤', label: 'Upload', color: 'from-violet-500 to-purple-500' },
    { icon: '🔍', label: 'Analyze', color: 'from-indigo-500 to-violet-500' },
    { icon: '✨', label: 'Generate', color: 'from-cyan-500 to-blue-500' },
    { icon: '📊', label: 'Optimize', color: 'from-emerald-500 to-cyan-500' },
    { icon: '📦', label: 'Export', color: 'from-violet-500 to-cyan-500' },
  ]

  const benefits = [
    'Transform hours of editing into minutes',
    'Get platform-optimized content automatically',
    'Maintain consistent posting schedule',
    'Leverage AI-detected viral moments',
    'Scale your content creation',
  ]

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Your content, <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              reimagined
            </span>
          </h2>
          <p className="text-xl text-slate-350 max-w-2xl mx-auto leading-relaxed">
            Watch as Lumio transforms your long-form content into a complete
            content ecosystem
          </p>
        </motion.div>

        {/* Workflow Pipeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {steps.map((step, index) => (
              <motion.div key={step.label} className="flex items-center gap-4 w-full lg:w-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-3xl flex-shrink-0`}
                >
                  {step.icon}
                </motion.div>
                <div className="flex-1">
                  <p className="font-semibold text-slate-200">{step.label}</p>
                  <p className="text-xs text-slate-500">Step {index + 1}</p>
                </div>
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="hidden lg:block h-1 flex-1 bg-gradient-to-r from-slate-700/50 to-transparent origin-left"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                The AI that gets your content
              </h3>
              <p className="text-lg text-slate-400 leading-relaxed">
                Lumio&apos;s advanced AI doesn&apos;t just cut clips—it understands
                the narrative, identifies hook moments, and optimizes every frame
                for maximum engagement across all platforms.
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <Check className="w-4 h-4 text-slate-950" />
                  </motion.div>
                  <span className="text-slate-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-slate-950/40 border border-slate-700/30 rounded-2xl p-8 aspect-square flex items-center justify-center overflow-hidden">
              {/* Animated grid background */}
              <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-grid-pattern opacity-10"
              />

              {/* Cards animation */}
              <div className="relative w-full h-full">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    animate={{
                      y: [-20, 20, -20],
                      rotate: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 4 + index * 0.5,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="absolute w-32 h-40 bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-slate-600/50 rounded-xl p-3 flex items-center justify-center"
                    style={{
                      left: `${20 + index * 30}%`,
                      top: `${30 + index * 15}%`,
                      zIndex: 3 - index,
                    }}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2">
                        {['📹', '🎯', '⚡'][index]}
                      </div>
                      <p className="text-xs text-slate-300 font-medium">
                        {['Clip', 'Hook', 'Caption'][index]}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
