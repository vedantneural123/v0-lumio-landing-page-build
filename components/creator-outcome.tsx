'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Zap, Clock } from 'lucide-react'

export function CreatorOutcome() {
  const metrics = [
    {
      icon: TrendingUp,
      value: '3x',
      label: 'Content Output',
      description: 'Create more in less time',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Users,
      value: '5x',
      label: 'Audience Growth',
      description: 'More consistent posting = more reach',
      color: 'from-violet-500 to-purple-600',
    },
    {
      icon: Clock,
      value: '10hrs',
      label: 'Saved Weekly',
      description: 'No more manual editing',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      icon: Zap,
      value: '94%',
      label: 'Faster To Publish',
      description: 'From upload to posting',
      color: 'from-orange-500 to-pink-600',
    },
  ]

  const testimonials = [
    {
      quote:
        'Lumio reduced my editing time from 6 hours to 30 minutes. I can now post daily.',
      author: 'Sarah Chen',
      role: 'YouTube Creator',
      avatar: '👩‍💼',
    },
    {
      quote:
        'The AI hooks are insanely good. My click-through rate went up 40% in the first month.',
      author: 'Marcus Johnson',
      role: 'Content Creator',
      avatar: '👨‍💼',
    },
    {
      quote:
        'Finally, a tool built by creators for creators. This is game-changing.',
      author: 'Emma Rodriguez',
      role: 'Digital Storyteller',
      avatar: '👩‍🎨',
    },
  ]

  return (
    <section className="relative py-24 px-6">
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
            Less friction. More output.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Faster growth.
            </span>
          </h2>
          <p className="text-xl text-slate-400">
            Creators using Lumio see measurable results
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`group relative bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-slate-950/40 border border-slate-700/30 rounded-2xl p-8 overflow-hidden transition-all hover:border-slate-600/50`}
              >
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
                  className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-5`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <div className="mb-3">
                    <p className="text-4xl font-bold text-white">
                      {metric.value}
                    </p>
                    <p className="text-sm text-slate-400 font-medium">
                      {metric.label}
                    </p>
                  </div>

                  <p className="text-slate-400 text-sm">
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-800/30 via-slate-900/20 to-slate-950/30 border border-slate-700/30 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            What creators are saying
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 border border-slate-700/30 rounded-xl p-6"
              >
                {/* Quote */}
                <p className="text-slate-300 italic mb-6 text-lg leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ⭐
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
