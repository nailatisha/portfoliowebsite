# Quick Start Guide

## 🚀 Getting Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Customize Your Content

**Update Hero Section:**
- Open `components/Hero.tsx`
- Replace "YOUR NAME" on line 30 with your actual name
- Update tagline and description text

**Update About Section:**
- Open `components/About.tsx`
- Replace placeholder image (line 40) with your photo
- Update the about text (lines 60-75)
- Modify skills list (line 82)
- Add your CV to `public/cv.pdf`

**Update Certifications:**
- Open `components/Certifications.tsx`
- Update the `certificates` array (lines 15-50) with your data
- Add certificate images to `public/certificates/`

### 3. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 📝 Content Checklist

- [ ] Update name in Hero section
- [ ] Add your photo to About section
- [ ] Write your about text
- [ ] Update skills list
- [ ] Add CV PDF file (`public/cv.pdf`)
- [ ] Add certificate images
- [ ] Update certificate data

## 🎨 Design Customization

All colors are defined in `tailwind.config.js`. Feel free to adjust:
- Color palette (lines 7-15)
- Typography sizes (lines 20-23)
- Animation timings (lines 24-44)

## 📦 Project Structure

```
portfolio-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx    # Top navigation
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   └── Certifications.tsx # Certifications carousel
└── public/               # Static assets
    ├── cv.pdf            # Your CV (add this)
    └── certificates/     # Certificate images
```

## 🎯 Next Steps

After customizing your content, you can:
- Add more sections (Projects, Contact, etc.)
- Customize animations
- Add more interactive elements
- Deploy to Vercel, Netlify, or your preferred hosting

Happy building! ✨

