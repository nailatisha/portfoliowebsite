/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Editorial/Magazine palette
        'editorial-pink': '#FF69B4',
        'editorial-pink-dark': '#FF1493',
        'editorial-blue': '#1a1a2e',
        'editorial-blue-light': '#16213e',
        'editorial-navy': '#0f3460',
        'editorial-black': '#0a0a0a',
        'editorial-gray': '#1a1a1a',
        'editorial-white': '#FFFFFF',
        'editorial-blue-accent': '#4169E1',
        'editorial-blue-bright': '#1E90FF',
        
        // Neutrals
        'cream': '#FAF8F5',
        'beige': '#F5F1EB',
        'warm-white': '#FFFBF7',
        'soft-gray': '#E8E6E1',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Bebas Neue', 'Arial Black', 'Impact', 'sans-serif'],
        'script': ['Dancing Script', 'Brush Script MT', 'cursive'],
      },
      fontWeight: {
        'display': '900',
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '1.1' }],
        'display': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.2' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

