'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function About() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadCV = () => {
    setIsDownloading(true)
    // Create a simple PDF download simulation
    // In production, replace this with actual PDF file path
    const link = document.createElement('a')
    link.href = '/cv.pdf' // Replace with your actual CV file path
    link.download = 'CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    setTimeout(() => {
      setIsDownloading(false)
    }, 1000)
  }

  return (
    <section id="about" className="relative py-20 md:py-32 bg-editorial-pink overflow-hidden grain-texture">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-editorial-white opacity-10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-editorial-blue-accent opacity-10 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-2 md:gap-4 items-start">
          {/* Left column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex justify-start"
          >
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl border-4 border-editorial-white w-full max-w-[320px]">
              <img 
                src="images/yourphoto.png" 
                alt="Naila Latisha Putri Noegraha" 
                className="w-full h-full object-cover" 
              />
              {/* Grain overlay */}
              <div className="absolute inset-0 grain-texture opacity-20" />
            </div>
            {/* Decorative corner element */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-editorial-blue-accent opacity-30 rotate-12" />
          </motion.div>

          {/* Right column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="space-y-5 -ml-1 md:-ml-4 lg:-ml-6"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-editorial-white mb-4"
            >
              About Me
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            className="space-y-4 text-editorial-white text-sm md:text-base"
            style={{ lineHeight: '1.75', maxWidth: '100%' }}
            >
              <p>
                Currently maintaining a <span className="font-bold text-editorial-blue-accent">3.89 GPA</span>, I believe in learning beyond the classroom. That's why I've earned certifications in Brevet A & B (tax) and Responsive Web Design, because I love staying ahead and building skills that matter.
              </p>
              <p>
                What drives me? <span className="font-bold">Research and finance</span>. I find them fascinating and full of possibilities. But I'm not just about academics. I'm actively involved in social initiatives because I believe in making a real impact, and I love connecting with people through conferences, organizations, and committee work.
              </p>
              <p>
                I'm also bilingual (Bahasa Indonesia & English - TOEFL ITP: 577, EPT UI: 607).
              </p>
            </motion.div>

            {/* Skills tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 md:gap-3 pt-3"
            >
              {['Business', 'Finance', 'Management', 'Research', 'Marketing', 'Microsoft Office'].map((skill, index) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 md:px-4 md:py-2 bg-editorial-white text-editorial-black rounded-full text-xs md:text-sm font-bold font-display hover:bg-editorial-blue-accent hover:text-editorial-white transition-colors"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* Download CV Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className="mt-6 px-6 py-3 md:px-8 md:py-4 bg-editorial-black text-editorial-white rounded-full font-bold text-base md:text-lg font-display shadow-lg hover:bg-editorial-blue-accent transition-all duration-300 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed border-2 border-editorial-white"
            >
              {isDownloading ? 'Downloading...' : 'Download CV'}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

