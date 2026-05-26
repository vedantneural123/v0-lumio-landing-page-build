'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Zap } from 'lucide-react'

export function AIAnalysis() {
  const heatmapBars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    height: Math.random() * 100,
  }))

  const detectionMarkers = [
    { label: 'Hook', time: '0:05', strength: 95, color: 'from-violet-500 to-purple-500' },
    { label: 'Peak', time: '2:15', strength: 87, color: 'from-cyan-500 to-blue-500' },
    { label: 'Viral', time: '4:30', strength: 92, color: 'from-emerald-500 to-teal-500' },
    { label: 'Call-to-action', time: '6:45', strength: 78, color: 'from-orange-500 to-pink-500' },
  ]

  return (
    <section className="relative py-24 px-6 overflow-hidden">
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
            Advanced AI Analysis
          </h2>
          <p className="text-xl text-slate-400">
            Watch how Lumio understands your content at every second
          </p>
        </motion.div>

        {/* Main Analysis Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-slate-800/40 via-slate-900/30 to-slate-950/40 border border-slate-700/30 rounded-2xl p-8 overflow-hidden">
            {/* Background animation */}
            <motion.div
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-cyan-600/5 to-transparent"
            />

            <div className="relative z-10 space-y-8">
              {/* Waveform Visualization */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  Engagement Heatmap
                </h3>
                <div className="flex items-end justify-between h-24 gap-1 p-4 bg-slate-900/50 rounded-lg">
                  {heatmapBars.map((bar) => (
                    <motion.div
                      key={bar.id}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${bar.height}%` }}
                      transition={{
                        delay: bar.id * 0.02,
                        duration: 0.6,
                      }}
                      viewport={{ once: true }}
                      animate={{
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: bar.id * 0.05,
                      }}
                      className="flex-1 bg-gradient-to-t from-violet-500 to-cyan-500 rounded-t opacity-80 hover:opacity-100 transition-opacity"
                    />
                  ))}
                </div>
              </div>

              {/* Timeline with Markers */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  Key Moments Detected
                </h3>
                <div className="relative h-12 bg-slate-900/50 rounded-lg overflow-hidden">
                  {/* Timeline background */}
                  <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-600/20 to-transparent"
                  />

                  {/* Markers */}
                  {detectionMarkers.map((marker, index) => (
                    <motion.div
                      key={marker.label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2 }}
                      className="absolute top-1/2 -translate-y-1/2 cursor-pointer group"
                      style={{ left: `${(index + 1) * 20}%` }}
                    >
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-br ${marker.color} shadow-lg`}
                      />
                      {/* Tooltip */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: -35 }}
                        className="absolute left-1/2 -translate-x-1/2 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs whitespace-nowrap pointer-events-none"
                      >
                        <p className="font-semibold text-slate-100">
                          {marker.label}
                        </p>
                        <p className="text-slate-400">{marker.time}</p>
                        <p className="text-emerald-400">
                          Strength: {marker.strength}%
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Insights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  {
                    label: 'Average Retention',
                    value: '87%',
                    icon: '📊',
                  },
                  {
                    label: 'Best Hook Time',
                    value: '0:05',
                    icon: '⏱️',
                  },
                  {
                    label: 'Clip Suggestions',
                    value: '12',
                    icon: '✂️',
                  },
                  {
                    label: 'Optimization Score',
                    value: '94/100',
                    icon: '⭐',
                  },
                ].map((insight, index) => (
                  <motion.div
                    key={insight.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">
                        {insight.label}
                      </span>
                      <span className="text-2xl">{insight.icon}</span>
                    </div>
                    <p className="text-2xl font-bold text-white mt-2">
                      {insight.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Glow effect */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-600/20 via-cyan-600/10 to-violet-600/20 rounded-2xl blur-3xl"
          />
        </motion.div>
      </div>
    </section>
  )
}
