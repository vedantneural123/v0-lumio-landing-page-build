'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  isScrolled: boolean
}

export function Navbar({ isScrolled }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Pricing', href: '#' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/40'
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
            <span className="text-xl font-bold text-white hidden sm:inline">
              Lumio
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-slate-400 hover:text-slate-100 transition-colors text-sm font-medium tracking-tight"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-5 py-2.5 text-slate-300 hover:text-slate-100 text-sm font-medium transition-colors tracking-tight"
            >
              Sign In
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: '#4f46e5', boxShadow: '0 8px 24px rgba(79, 70, 229, 0.25)' }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg font-medium text-sm transition-all tracking-tight"
            >
              Start Creating
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-slate-800/50 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-slate-300" />
            ) : (
              <Menu className="w-6 h-6 text-slate-300" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-800/30 py-4 space-y-3"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800/30 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <button className="flex-1 px-4 py-2 text-slate-300 hover:text-white transition-colors">
                Sign In
              </button>
              <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition-colors">
                Start Creating
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
