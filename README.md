# 🎓 TechZone Academy - Hero Section

**Tagline:** *Empowering Careers Through Industry-Driven Tech Skills*

## 📋 Project Overview

This is a Next.js project featuring a stunning hero section for TechZone Academy's website, built with:

- ⚛️ **React 18** with TypeScript
- 🎨 **Tailwind CSS** for styling
- 🎭 **shadcn/ui** component structure
- 🌌 **Spline 3D** interactive scenes
- ✨ **Framer Motion** for animations
- 🎯 **Aceternity UI** spotlight effects

## 🗂️ File Structure

```
Website TechZone/
├── app/
│   ├── globals.css          # Global styles with Tailwind & theme variables
│   ├── layout.tsx            # Root layout with SEO metadata
│   └── page.tsx              # Homepage with hero section
├── components/
│   └── ui/
│       ├── card.tsx          # shadcn/ui Card component
│       ├── demo.tsx          # Hero Section Component (SplineSceneBasic)
│       ├── splite.tsx        # Spline Scene wrapper with lazy loading
│       └── spotlight.tsx     # Aceternity Spotlight effect
├── lib/
│   └── utils.ts              # Utility functions (cn for class merging)
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🚀 Installation Instructions

### Step 1: Install Dependencies

```bash
npm install
```

This will install:
- `@splinetool/react-spline` - Spline 3D scene integration
- `@splinetool/runtime` - Spline runtime
- `framer-motion` - Animation library
- `tailwindcss-animate` - Tailwind animation plugin
- All Next.js, React, and TypeScript dependencies

### Step 2: Run Development Server

```bash
npm run dev
```

The application will start at `http://localhost:3000`

### Step 3: Build for Production (Optional)

```bash
npm run build
npm start
```

## 🎨 Component Analysis

### 1. **SplineScene Component** (`splite.tsx`)

**Purpose:** Wrapper for Spline 3D scenes with lazy loading

**Props:**
- `scene: string` - URL to Spline scene
- `className?: string` - Optional CSS classes

**Features:**
- Lazy loading with React.Suspense
- Loading fallback with spinner animation
- Optimized for performance

### 2. **Hero Section Component** (`demo.tsx`)

**Component Name:** `SplineSceneBasic`

**Structure:**
- **Left Panel:** Title and tagline with gradient text effect
- **Right Panel:** Interactive 3D Spline scene
- **Background:** Dark theme with spotlight effect

**Responsive Behavior:**
- Mobile: Stacked layout (flex-col on small screens)
- Desktop: Side-by-side layout (flex-row)
- Adaptive text sizes (text-4xl → md:text-5xl)

**Dependencies:**
- `SplineScene` - 3D scene renderer
- `Card` - Container component
- `Spotlight` - Dramatic lighting effect

### 3. **Spotlight Component** (`spotlight.tsx`)

**Purpose:** Animated SVG spotlight effect

**Props:**
- `className?: string` - Positioning classes
- `fill?: string` - Spotlight color (default: white)

**Animation:** Fades in with transform animation (defined in Tailwind config)

### 4. **Card Component** (`card.tsx`)

**shadcn/ui standard Card component with subcomponents:**
- `Card` - Main container
- `CardHeader` - Header section
- `CardTitle` - Title text
- `CardDescription` - Description text
- `CardContent` - Main content area
- `CardFooter` - Footer section

## 📦 Required Assets

✅ **No external assets required!**

The Spline scene is loaded from CDN:
```
https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode
```

## 🎯 How to Use the Hero Section

### Import into Homepage

The hero section is already integrated in `app/page.tsx`:

```tsx
import { SplineSceneBasic } from "@/components/ui/demo";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 p-8">
      <div className="max-w-7xl mx-auto">
        <SplineSceneBasic />
      </div>
    </main>
  );
}
```

### Customize the Hero Section

Edit `components/ui/demo.tsx` to:

1. **Change the title:**
```tsx
<h1 className="...">Your Custom Title</h1>
```

2. **Update the tagline:**
```tsx
<p className="...">Your Custom Tagline</p>
```

3. **Replace Spline scene:**
```tsx
<SplineScene 
  scene="YOUR_SPLINE_URL_HERE"
  className="w-full h-full"
/>
```

4. **Adjust height:**
```tsx
<Card className="w-full h-[800px] ...">
```

## 🎨 Theme Customization

The project uses shadcn/ui theming. Modify colors in `tailwind.config.ts`:

```ts
theme: {
  extend: {
    colors: {
      primary: "hsl(var(--primary))",
      // Add custom colors here
    }
  }
}
```

Update CSS variables in `app/globals.css`:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  /* Add custom variables */
}
```

## 🔮 Next Sections to Build

### Suggested Components:

1. **Navbar**
   - Logo
   - Navigation links (Home, Courses, About, Contact)
   - CTA button (Enroll Now)
   - Mobile menu

2. **Courses Section**
   - Course cards with icons
   - Data Analytics
   - Data Science
   - AI/ML with Gen AI
   - Prompt Engineering
   - Hover effects and animations

3. **About Section**
   - Mission statement
   - Why choose TechZone
   - Statistics/achievements
   - Team showcase

4. **Features/Benefits**
   - Industry-driven curriculum
   - Expert instructors
   - Hands-on projects
   - Career support

5. **Testimonials**
   - Student success stories
   - Carousel/slider
   - Star ratings

6. **Contact Section**
   - Contact form
   - Location map
   - Social media links

7. **Footer**
   - Quick links
   - Social media
   - Copyright
   - Newsletter signup

## 🛠️ Troubleshooting

### Issue: Spline scene not loading

**Solution:** Check internet connection. The Spline scene loads from CDN.

### Issue: Tailwind classes not working

**Solution:** Ensure `globals.css` is imported in `layout.tsx`

### Issue: TypeScript errors

**Solution:** Run `npm install` to ensure all type definitions are installed

### Issue: Build errors

**Solution:** Clear Next.js cache:
```bash
rm -rf .next
npm run dev
```

## 📱 Responsive Design

The hero section is fully responsive:

- **Mobile (< 768px):** Stacked layout, smaller text
- **Tablet (768px - 1024px):** Balanced layout
- **Desktop (> 1024px):** Full side-by-side layout

## 🎭 Animation Details

1. **Spotlight Animation:**
   - Duration: 2s
   - Delay: 0.75s
   - Easing: ease
   - Effect: Fade in with scale and transform

2. **Loader Animation:**
   - Infinite rotation
   - 1s duration
   - Linear easing

## 📄 License

This project is for TechZone Academy.

## 🤝 Support

For issues or questions, contact the development team.

---

**Built with ❤️ for TechZone Academy**
