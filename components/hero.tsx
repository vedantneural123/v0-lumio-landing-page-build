'use client'

import { motion } from 'framer-motion'
import { Play, Zap, ArrowRight } from 'lucide-react'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        bounce: 0.3,
        type: 'spring',
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
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
    <section className="relative min-h-screen pt-36 pb-24 px-6 overflow-hidden flex items-center bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      {/* FAANG-style animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            opacity: [0.36, 0.6, 0.36],
            scale: [1, 1.12, 1],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-10 left-5 w-[480px] h-[460px] bg-gradient-to-tr from-violet-500/35 via-cyan-500/25 to-emerald-400/20 blur-2xl rounded-full"
        />
        <motion.div
          animate={{
            opacity: [0.25, 0.5, 0.25],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[430px] h-[430px] bg-gradient-to-br from-emerald-400/30 via-cyan-500/15 to-violet-500/20 blur-3xl rounded-full"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto w-full"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 shadow-backdrop rounded-xl backdrop-blur-sm">
            <Zap className="w-4 h-4 text-cyan-400 animate-spin-slow" />
            <span className="text-sm font-medium text-slate-100 tracking-wider drop-shadow-glow">
              Powered by advanced AI analysis
            </span>
          </div>
        </motion.div>

        {/* Ultra modern Headline */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tight leading-tight drop-shadow-xl">
            <span className="block bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
              Turn one video into
            </span>
            <br className="hidden sm:block" />
            <span className="block bg-gradient-to-r from-violet-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent animate-gradient-x">
              a complete creator growth system
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300/90 max-w-2xl mx-auto leading-relaxed tracking-tight font-medium shadow-blackA5">
            Lumio empowers creators to transform long-form content into viral shorts, catchy captions, hooks, titles, thumbnails & more using next-generation AI that truly understands what makes content tick.
          </p>
        </motion.div>

        {/* Refined CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: '#6d28d9', boxShadow: '0 16px 48px rgba(109,40,217,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="px-10 py-4 bg-indigo-600 bg-opacity-90 text-white font-semibold text-lg rounded-2xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-indigo-900/25 focus:ring-4 focus:ring-indigo-400/20 backdrop-blur-md hover:-translate-y-1 hover:scale-105 hover:bg-gradient-to-br from-[#7c3aed] via-[#22d3ee]/80 to-[#22d3ee]/60"
          >
            Start Creating
            <ArrowRight className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(39,49,62,0.65)', borderColor: '#d4d4d4' }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 border border-slate-400/25 bg-white bg-opacity-5 text-white font-semibold text-lg rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg hover:bg-white/10 hover:border-violet-300"
          >
            <Play className="w-6 h-6" />
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Hero Visualization */}
        <motion.div
          variants={itemVariants}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-slate-800/45 via-slate-900/25 to-slate-950/45 border border-slate-700/30 rounded-3xl p-12 backdrop-blur-xl overflow-hidden shadow-2xl">
            {/* Animated divider bar */}
            <motion.div
              animate={{
                opacity: [0.14, 0.3, 0.14],
              }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-transparent to-cyan-500/20"
            />

            {/* Content Grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Main Upload Area */}
              <motion.div
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                className="md:col-span-2 bg-gradient-to-br from-white/5 via-violet-950/20 to-cyan-950/5 border border-slate-600/40 rounded-2xl p-8 flex items-center justify-center min-h-64 shadow-inner">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: [1, 1.09, 1] }}
                    transition={{ duration: 2.7, repeat: Infinity }}
                    className="w-20 h-20 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-3xl"
                  >
                    <span className="text-white font-bold text-2xl">▶</span>
                  </motion.div>
                  <p className="text-slate-300 font-semibold mb-1 text-lg">Long-form video</p>
                  <p className="text-base text-slate-400">YouTube, Vimeo, MP4...</p>
                </div>
              </motion.div>

              {/* Output Cards */}
              <motion.div
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                className="space-y-5"
              >
                {[
                  { label: 'Shorts', emoji: '📱' },
                  { label: 'Captions', emoji: '📝' },
                  { label: 'Thumbnails', emoji: '🎬' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.12 }}
                    className="bg-gradient-to-r from-slate-900/70 to-slate-800/60 border border-slate-700/40 rounded-lg p-5 text-center hover:border-violet-400 transition-all shadow backdrop-blur hover:scale-[1.02]"
                  >
                    <div className="text-2xl mb-2">{item.emoji}</div>
                    <p className="text-base text-slate-300 font-semibold">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Workflow Indicators */}
            <div className="flex items-center justify-between text-xs md:text-sm text-slate-400 px-6 mt-4 font-medium">
              <span>Upload</span>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-700/60 to-transparent mx-2" />
              <span>Analyze</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-violet-600/40 to-transparent mx-3" />
              <span>Generate</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-slate-700/60 mx-2" />
              <span>Export</span>
            </div>
          </div>

          {/* Glow Effect */}
          <motion.div
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute inset-0 -z-10 bg-gradient-to-r from-violet-400/15 via-cyan-400/15 to-violet-400/15 rounded-3xl blur-2xl"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
