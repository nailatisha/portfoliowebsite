'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-editorial-black">
      {/* Vintage Newspaper Collage Background */}
      <div className="absolute inset-0 opacity-30 blur-sm">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='1200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='newspaper' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Crect width='100' height='100' fill='%23ffffff' opacity='0.05'/%3E%3Ctext x='10' y='20' font-family='serif' font-size='12' fill='%23ffffff' opacity='0.1'%3EGREAT EVIL%3C/text%3E%3Ctext x='10' y='40' font-family='serif' font-size='10' fill='%23ffffff' opacity='0.08'%3EMOTOR CAR COMPANY%3C/text%3E%3Ctext x='10' y='60' font-family='serif' font-size='14' fill='%23ffffff' opacity='0.1'%3EROUND FLO%3C/text%3E%3Ctext x='10' y='80' font-family='serif' font-size='11' fill='%23ffffff' opacity='0.08'%3EDAILY INCOME%3C/text%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23newspaper)'/%3E%3Ctext x='50' y='150' font-family='serif' font-size='24' fill='%23ffffff' opacity='0.15' transform='rotate(-5)'%3EPAyson%3C/text%3E%3Ctext x='200' y='300' font-family='serif' font-size='20' fill='%23ffffff' opacity='0.12' transform='rotate(3)'%3ERAINBOW MOUNTAIN%3C/text%3E%3Ctext x='400' y='500' font-family='serif' font-size='18' fill='%23ffffff' opacity='0.1' transform='rotate(-2)'%3ENEW HEALTH%3C/text%3E%3Ctext x='100' y='700' font-family='serif' font-size='16' fill='%23ffffff' opacity='0.1' transform='rotate(4)'%3EMULE TEAM%3C/text%3E%3Ctext x='500' y='800' font-family='serif' font-size='22' fill='%23ffffff' opacity='0.12' transform='rotate(-3)'%3E1/1000 of An Inch%3C/text%3E%3C/svg%3E")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
      
      {/* Additional overlay for better text readability */}
      <div className="absolute inset-0 bg-editorial-black opacity-60" />
      
      {/* Grain texture overlay */}
      <div className="absolute inset-0 grain-texture opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          {/* Greeting text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-editorial-white text-base md:text-lg mb-6 font-sans opacity-80"
          >
            Welcome! I'm Naila — a curious mind passionate about business, research, and making meaningful connections.
          </motion.p>

          {/* Main name/title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="text-hero font-display font-bold text-editorial-white mb-4 leading-tight tracking-tight"
            style={{
              fontWeight: 900,
              letterSpacing: '-0.02em',
            }}
          >
            <span className="text-editorial-white">It's me </span>
            <span className="text-editorial-pink">NAILA</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-editorial-white text-xl md:text-2xl lg:text-3xl font-display mb-3 max-w-3xl mx-auto"
            style={{
              fontWeight: 900,
              letterSpacing: '-0.01em',
            }}
          >
            Business Administration Student
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="text-editorial-pink text-lg md:text-xl font-display mb-5 max-w-3xl mx-auto"
            style={{
              fontWeight: 900,
              letterSpacing: '-0.01em',
            }}
          >
            Principle Accounting Assistant Lecturer at FIA UI
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-sm text-editorial-white mb-4 opacity-80"
          >
            <a href="tel:+6287872880011" className="hover:text-editorial-pink transition-colors">
              M: +62-878-7288-0011
            </a>
            <span className="hidden md:inline">|</span>
            <a href="mailto:nailatisha8@gmail.com" className="hover:text-editorial-pink transition-colors">
              E: nailatisha8@gmail.com
            </a>
            <span className="hidden md:inline">|</span>
            <a href="https://www.linkedin.com/in/nailatisha" target="_blank" rel="noopener noreferrer" className="hover:text-editorial-pink transition-colors">
              L: LinkedIn
            </a>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-editorial-white text-sm md:text-base max-w-2xl mx-auto leading-relaxed opacity-80"
          >
            Currently pursuing my passion for business and research while maintaining a 3.89 GPA. When I'm not studying, you'll find me exploring finance, leading social initiatives, or connecting with amazing people at conferences and organizations.
          </motion.p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 0.2, rotate: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-20 right-10 md:right-20 text-editorial-pink text-9xl font-display"
          style={{ transform: 'rotate(-5deg)' }}
        >
          ✦
        </motion.div>
        <motion.div
          initial={{ opacity: 0, rotate: 10 }}
          animate={{ opacity: 0.2, rotate: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-20 left-10 md:left-20 text-editorial-blue-accent text-7xl font-display"
          style={{ transform: 'rotate(5deg)' }}
        >
          ✧
        </motion.div>
      </div>
    </section>
  )
}
