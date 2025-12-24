# AI-Powered Personal Portfolio Website

A visually striking, editorial-style personal portfolio website built with Next.js, React, Tailwind CSS, and Framer Motion. Features a feminine, creative aesthetic with smooth animations and a modern, professional feel.

## Features

- ✨ **Editorial/Magazine-style Layout** - Inspired by creative portfolios and graphic designer websites
- 🎨 **Feminine & Soft Aesthetics** - Soft pinks, dusty rose, beige, and burgundy color palette
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎭 **Smooth Animations** - Powered by Framer Motion for elegant transitions
- 📄 **CV Download** - One-click PDF download functionality
- 🏆 **Certifications Carousel** - Interactive slider with modal lightbox for viewing full certificates

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Fonts:** Playfair Display (serif), Inter (sans-serif)

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Updating Content

1. **Hero Section** (`components/Hero.tsx`):
   - Replace "YOUR NAME" with your actual name
   - Update the tagline and description text

2. **About Section** (`components/About.tsx`):
   - Replace the placeholder image with your photo
   - Update the about text and skills list
   - Add your CV file to `public/cv.pdf` for the download button

3. **Certifications** (`components/Certifications.tsx`):
   - Update the `certificates` array with your actual certifications
   - Add certificate images to `public/certificates/` directory
   - Update image paths in the certificates data

### Color Palette

The color palette is defined in `tailwind.config.js`. Current colors:
- Soft Pink: `#F5D7DA`
- Dusty Rose: `#E8B4B8`
- Beige: `#F5F1EB`
- Cream: `#FAF8F3`
- Burgundy: `#722F37`
- Wine Red: `#8B3E4A`
- Dark Brown: `#3D2B1F`
- Muted Black: `#2C2C2C`

### Typography

- **Headings:** Playfair Display (elegant serif)
- **Body Text:** Inter (modern sans-serif)

## Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About me section
│   └── Certifications.tsx  # Certifications carousel
├── public/
│   ├── cv.pdf              # Your CV file (add this)
│   └── certificates/       # Certificate images (add these)
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Adding Your CV

1. Place your CV PDF file in the `public` directory as `cv.pdf`
2. The download button in the About section will automatically work

## Adding Certificates

1. Create a `certificates` folder in the `public` directory
2. Add your certificate images (thumbnails and full-size versions)
3. Update the `certificates` array in `components/Certifications.tsx` with:
   - Certificate title
   - Issuer name
   - Year (optional)
   - Image paths

Example:
```typescript
{
  id: 1,
  title: 'Your Certificate Title',
  issuer: 'Issuer Name',
  year: '2024',
  image: '/certificates/cert-1-thumb.jpg',
  fullImage: '/certificates/cert-1-full.jpg',
}
```

## Future Enhancements

The codebase is structured to easily add new sections:
- Projects/Portfolio showcase
- Experience/Timeline
- Contact form
- Blog section
- Testimonials

## License

This project is open source and available for personal use.

