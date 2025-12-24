'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-editorial-black/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl md:text-2xl font-display font-bold text-editorial-white"
          >
            Portfolio
          </motion.button>

          <div className="hidden md:flex items-center gap-8">
            {['about', 'certifications'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-editorial-white opacity-80 hover:text-editorial-pink transition-colors duration-300 font-bold capitalize font-display"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

