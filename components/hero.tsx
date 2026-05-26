'use client'

import { motion } from 'framer-motion'
import { Play, Zap, ArrowRight } from 'lucide-react'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient orbs */}
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-slate-300">
              Powered by advanced AI analysis
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div variants={itemVariants} className="text-center mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
              Turn one video into
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              a complete creator growth system
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Lumio helps creators transform long-form content into viral shorts,
            captions, hooks, titles, thumbnails, and publishing-ready content
            packs—powered by AI that understands what makes content tick.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#4f46e5' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 bg-indigo-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-indigo-600/20"
          >
            Start Creating
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(15, 23, 42, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 border border-slate-600/50 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:border-slate-500/50 transition-all"
          >
            <Play className="w-5 h-5" />
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Hero Visualization */}
        <motion.div
          variants={itemVariants}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-slate-800/30 via-slate-900/20 to-slate-950/30 border border-slate-700/30 rounded-2xl p-8 backdrop-blur-sm overflow-hidden">
            {/* Animated background elements */}
            <motion.div
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-transparent to-cyan-600/20"
            />

            {/* Content Grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Main Upload Area */}
              <motion.div
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                className="md:col-span-2 bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 flex items-center justify-center min-h-64"
              >
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center"
                  >
                    <span className="text-white font-bold text-xl">▶</span>
                  </motion.div>
                  <p className="text-slate-300 font-medium mb-1">
                    Long-form video
                  </p>
                  <p className="text-sm text-slate-400">
                    YouTube, Vimeo, MP4...
                  </p>
                </div>
              </motion.div>

              {/* Output Cards */}
              <motion.div
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                className="space-y-3"
              >
                {[
                  { label: 'Shorts', emoji: '📱' },
                  { label: 'Captions', emoji: '📝' },
                  { label: 'Thumbnails', emoji: '🎬' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-slate-900/50 border border-slate-700/30 rounded-lg p-4 text-center hover:border-slate-600/50 transition-all"
                  >
                    <div className="text-2xl mb-2">{item.emoji}</div>
                    <p className="text-sm text-slate-300 font-medium">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Workflow Indicators */}
            <div className="flex items-center justify-between text-xs text-slate-400 px-4">
              <span>Upload</span>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-700/50 to-transparent mx-2" />
              <span>Analyze</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-violet-600/30 to-transparent mx-2" />
              <span>Generate</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-slate-700/50 mx-2" />
              <span>Export</span>
            </div>
          </div>

          {/* Glow Effect */}
          <motion.div
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-600/20 via-cyan-600/10 to-violet-600/20 rounded-2xl blur-3xl"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
