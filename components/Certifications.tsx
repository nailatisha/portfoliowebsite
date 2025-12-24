'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

interface Certificate {
  id: number
  title: string
  issuer: string
  year?: string
  image: string
  fullImage?: string
}

// Certifications data
const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Brevet A/B',
    issuer: 'Ikatan Akuntansi Indonesia',
    year: '2025',
    image: 'certificates/Screenshot 2025-12-24 181847 (1).png',
    fullImage: 'certificates/Screenshot 2025-12-24 181910 (1).png',
  },
  {
    id: 2,
    title: 'Artificial Intelligence',
    issuer: 'Sanbercode Academy with ITB\'s Directorate of Continuing Professional Education',
    year: '2025',
    image: 'certificates/Screenshot 2025-12-24 181601.png',
    fullImage: 'certificates/Screenshot 2025-12-24 181601.png',
  },
  {
    id: 3,
    title: 'Responsive Web Design',
    issuer: 'FreeCodeCamp',
    year: '2025',
    image: '/certificates/Screenshot 2025-12-24 174940.png',
    fullImage: '/certificates/Screenshot 2025-12-24 174940.png',
  },
]

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      setScrollPosition(container.scrollLeft)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = 400
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  const openModal = (cert: Certificate) => {
    setSelectedCert(cert)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedCert(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <section id="certifications" className="relative py-20 md:py-32 bg-editorial-blue overflow-hidden grain-texture">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-editorial-pink opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-editorial-blue-accent opacity-20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-display font-display font-bold text-editorial-white mb-4">
              Certifications
            </h2>
            <p className="text-editorial-white text-lg max-w-2xl mx-auto opacity-90">
              Professional credentials and continuous learning achievements
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Scroll buttons */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-editorial-pink text-editorial-black rounded-full flex items-center justify-center shadow-lg hover:bg-editorial-white transition-all duration-300 hover:scale-110 font-bold border-2 border-editorial-white"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 bg-editorial-pink text-editorial-black rounded-full flex items-center justify-center shadow-lg hover:bg-editorial-white transition-all duration-300 hover:scale-110 font-bold border-2 border-editorial-white"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-6 px-2"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="flex-shrink-0 w-80 md:w-96 cursor-pointer"
                  onClick={() => openModal(cert)}
                >
                  <div className="bg-editorial-white rounded-lg shadow-lg overflow-hidden border-4 border-editorial-black hover:border-editorial-pink transition-all duration-300 h-full">
                    {/* Certificate Image */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-editorial-blue via-editorial-navy to-editorial-black relative overflow-hidden">
                      {cert.image ? (
                        <img 
                          src={encodeURI(cert.image)} 
                          alt={cert.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            console.error('Image failed to load:', cert.image);
                            e.currentTarget.style.display = 'none';
                          }}
                          onLoad={() => console.log('Image loaded:', cert.image)}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <p className="text-editorial-white text-sm font-display">No Image</p>
                        </div>
                      )}
                      {/* Grain overlay */}
                      <div className="absolute inset-0 grain-texture opacity-20 pointer-events-none" />
                    </div>

                    {/* Certificate Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-display font-bold text-editorial-black mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-editorial-gray mb-1">
                        {cert.issuer}
                      </p>
                      {cert.year && (
                        <p className="text-editorial-pink text-sm font-bold">
                          {cert.year}
                        </p>
                      )}
                      <div className="mt-4 pt-4 border-t-2 border-editorial-black">
                        <p className="text-editorial-pink text-sm font-bold hover:underline">
                          Click to view full certificate →
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal/Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-cream rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl relative"
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-editorial-pink text-editorial-black rounded-full flex items-center justify-center hover:bg-editorial-white transition-all duration-300 hover:scale-110 font-bold border-2 border-editorial-black"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Certificate Image */}
                <div className="p-8">
                  <div className="aspect-[4/3] bg-gradient-to-br from-editorial-blue via-editorial-navy to-editorial-black rounded-lg mb-6 relative overflow-hidden">
                    {(selectedCert.fullImage || selectedCert.image) ? (
                      <img 
                        src={encodeURI(selectedCert.fullImage || selectedCert.image)} 
                        alt={selectedCert.title}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          console.error('Modal image failed to load:', selectedCert.fullImage || selectedCert.image);
                          e.currentTarget.style.display = 'none';
                        }}
                        onLoad={() => console.log('Modal image loaded:', selectedCert.fullImage || selectedCert.image)}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="text-editorial-white text-lg font-display">No Image Available</p>
                      </div>
                    )}
                    {/* Grain overlay */}
                    <div className="absolute inset-0 grain-texture opacity-20 pointer-events-none" />
                  </div>

                  {/* Certificate Details */}
                  <div className="text-center">
                    <h3 className="text-3xl font-display font-bold text-editorial-black mb-3">
                      {selectedCert.title}
                    </h3>
                    <p className="text-xl text-editorial-gray mb-2">
                      {selectedCert.issuer}
                    </p>
                    {selectedCert.year && (
                      <p className="text-editorial-pink font-bold">
                        {selectedCert.year}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  )
}

