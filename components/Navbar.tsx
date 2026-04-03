'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/#sobre-mi', label: 'Sobre Mí' },
  { href: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-crema/95 backdrop-blur-md shadow-sm border-b border-terracota/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <motion.span
              whileHover={{ scale: 1.02 }}
              className="font-display text-2xl font-bold text-terracota tracking-tight"
            >
              ArteterapiaFlow
            </motion.span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-negro/80 hover:text-terracota transition-colors duration-200 text-sm font-medium tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracota transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
            <Link
              href="/contacto"
              className="font-body text-sm font-semibold bg-terracota text-crema px-6 py-2.5 rounded-full hover:bg-terracota/90 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Reservá tu sesión
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-terracota/10 transition-colors"
            aria-label="Abrir menú"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-negro rounded-full"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-negro rounded-full"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-0.5 bg-negro rounded-full"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-crema/98 backdrop-blur-md border-t border-terracota/10"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-body text-negro/80 hover:text-terracota transition-colors text-lg font-medium block py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.3 }}
                className="pt-2"
              >
                <Link
                  href="/contacto"
                  onClick={() => setMenuOpen(false)}
                  className="font-body font-semibold bg-terracota text-crema px-8 py-3 rounded-full inline-block hover:bg-terracota/90 transition-colors"
                >
                  Reservá tu sesión
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
