# Infinit Lighting Website

A modern, premium website for Infinit Lighting - a street/urban LED lighting company.

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Modern CSS framework
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## 🎨 Design Features

- Dark, futuristic aesthetic with lime green accents
- Fully responsive design (mobile, tablet, desktop)
- Premium industrial/technology feeling
- Modern animations and micro-interactions
- SEO-optimized structure
- Component-based architecture

## 📁 Project Structure

```
infinit-lighting/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and theme
│   ├── layout.tsx         # Root layout with SEO
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── HeroSection.tsx    # Hero section
│   ├── ProductHighlight.tsx # Product showcase
│   ├── BenefitsSection.tsx # Benefits grid
│   ├── ProjectsSection.tsx # Projects gallery
│   ├── StatisticsSection.tsx # Stats bar
│   └── Footer.tsx         # Footer with newsletter
├── data/                  # Static data
│   ├── projects.ts        # Project data
│   ├── benefits.ts        # Benefits data
│   ├── stats.ts           # Statistics data
│   └── navLinks.ts        # Navigation links
└── public/images/         # Static images
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
cd infinit-lighting
npm install framer-motion lucide-react
```

### 2. Add Images

Place the required images in `public/images/`:

- `hero-road.jpg` - Hero background
- `led-product.png` - Product image
- `project-1.jpg` through `project-4.jpg` - Project photos
- `footer-city.jpg` - Footer background

See `public/images/README.md` for detailed requirements.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### 4. Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Features

### Header & Navigation

- Transparent header with backdrop blur
- Mobile-responsive hamburger menu
- Lime green accent for active states
- "Kërko Ofertë" CTA button

### Hero Section

- Full-screen highway lighting background
- Bold headlines with lime green highlights
- Feature cards on the right side
- Dual CTA buttons

### Product Showcase

- Large dark card with product image
- Premium product presentation
- Hover effects and animations

### Benefits Grid

- 4-column responsive layout
- Icon-based feature presentation
- Hover animations

### Projects Gallery

- Grid of project cards
- Image overlays with content
- View all projects CTA

### Statistics Bar

- Bordered dark section
- Large lime green numbers
- 4 key metrics

### Footer

- City night background
- Newsletter subscription
- Social media links
- Contact information

## 🎨 Color Scheme

- **Background**: `#050a14` (Very dark navy)
- **Foreground**: `#ededed` (White text)
- **Lime Green**: `#c0f94a` (Primary accent)
- **Lime Dark**: `#a8d940` (Hover state)
- **Dark Navy**: `#0a1020` (Card backgrounds)
- **Dark Border**: `#1a2540` (Borders)
- **Gray Text**: `#8a94a6` (Secondary text)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance Features

- Next.js Image optimization
- Framer Motion animations
- Lazy loading for images
- Component-based architecture
- TypeScript for type safety

## 📄 License

© 2024 Infinit Lighting. All rights reserved.

---

**Note**: Replace the placeholder images with actual project photos for best results.
