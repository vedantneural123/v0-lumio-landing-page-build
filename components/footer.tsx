'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Instagram, Github } from 'lucide-react'

export function Footer() {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'How It Works', 'Security'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Resources: ['Docs', 'API', 'Community', 'Status'],
    Legal: ['Privacy', 'Terms', 'Cookies', 'GDPR'],
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ]

  return (
    <footer className="relative border-t border-slate-800/30 bg-gradient-to-b from-slate-950/50 to-slate-950 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">L</span>
              </div>
              <span className="text-lg font-bold text-white">Lumio</span>
            </div>
            <p className="text-sm text-slate-400">
              Transform one video into a complete creator growth system.
            </p>
          </motion.div>

          {/* Links Grid */}
          {Object.entries(footerLinks).map((group, groupIndex) => (
            <motion.div
              key={group[0]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-white mb-4">{group[0]}</h4>
              <ul className="space-y-2">
                {group[1].map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 2, color: '#e0e7ff' }}
                      className="text-sm text-slate-400 hover:text-indigo-300 transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-slate-800/30 via-slate-700/30 to-slate-800/30 my-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <p className="text-sm text-slate-400">
            © 2024 Lumio. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/30 flex items-center justify-center text-slate-400 hover:text-indigo-300 hover:border-indigo-500/30 transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
