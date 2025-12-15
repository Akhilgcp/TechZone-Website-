# 🚀 TechZone Academy - Setup & Installation Guide

## ✅ Project Status: COMPLETE

All files have been generated and dependencies installed successfully!

---

## 📁 File Tree Confirmation

```
Website TechZone/
├── 📂 app/
│   ├── globals.css          ✅ Global styles with Tailwind & theme
│   ├── layout.tsx            ✅ Root layout with SEO metadata
│   └── page.tsx              ✅ Homepage with hero section
│
├── 📂 components/
│   └── 📂 ui/
│       ├── card.tsx          ✅ shadcn/ui Card component
│       ├── demo.tsx          ✅ Hero Section (SplineSceneBasic)
│       ├── splite.tsx        ✅ Spline Scene wrapper
│       └── spotlight.tsx     ✅ Aceternity Spotlight effect
│
├── 📂 lib/
│   └── utils.ts              ✅ Utility functions (cn)
│
├── 📂 node_modules/          ✅ Dependencies installed
│
├── .gitignore                ✅ Git ignore file
├── next.config.js            ✅ Next.js configuration
├── package.json              ✅ Dependencies manifest
├── package-lock.json         ✅ Dependency lock file
├── postcss.config.js         ✅ PostCSS configuration
├── tailwind.config.ts        ✅ Tailwind configuration
├── tsconfig.json             ✅ TypeScript configuration
└── README.md                 ✅ Documentation

```

---

## 🎯 Quick Start

### 1️⃣ Start Development Server

```bash
npm run dev
```

**Expected Output:**
```
- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- event compiled client and server successfully
```

### 2️⃣ Open in Browser

Navigate to: **http://localhost:3000**

You should see the TechZone Academy hero section with:
- ✨ Animated spotlight effect
- 🌌 Interactive 3D Spline scene
- 📱 Responsive layout
- 🎨 Gradient text effects

---

## 📦 Installed Dependencies

### Core Framework
- ✅ `next@14.0.4` - React framework
- ✅ `react@18.2.0` - React library
- ✅ `react-dom@18.2.0` - React DOM
- ✅ `typescript@5.x` - TypeScript

### Styling
- ✅ `tailwindcss@3.3.0` - Utility-first CSS
- ✅ `tailwindcss-animate` - Animation plugin
- ✅ `autoprefixer@10.x` - CSS vendor prefixes
- ✅ `postcss@8.x` - CSS processor

### UI Components
- ✅ `class-variance-authority` - Component variants
- ✅ `clsx` - Class name utility
- ✅ `tailwind-merge` - Tailwind class merger

### 3D & Animation
- ✅ `@splinetool/react-spline@2.2.6` - Spline React integration
- ✅ `@splinetool/runtime@1.0.0` - Spline runtime
- ✅ `framer-motion@10.16.16` - Animation library

### TypeScript Types
- ✅ `@types/node`
- ✅ `@types/react`
- ✅ `@types/react-dom`

---

## 🎨 Component Usage

### Import Hero Section into Any Page

```tsx
import { SplineSceneBasic } from "@/components/ui/demo";

export default function YourPage() {
  return (
    <div>
      <SplineSceneBasic />
    </div>
  );
}
```

### Customize the Hero Section

**File:** `components/ui/demo.tsx`

```tsx
'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[600px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            TechZone Academy
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Empowering Careers Through Industry-Driven Tech Skills
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
```

---

## 🎭 Component Breakdown

### 1. **SplineScene** (`splite.tsx`)

**Purpose:** Lazy-loaded 3D scene wrapper

**Props:**
- `scene: string` - Spline scene URL
- `className?: string` - CSS classes

**Features:**
- React.Suspense for lazy loading
- Loading spinner fallback
- Performance optimized

---

### 2. **SplineSceneBasic** (`demo.tsx`)

**Purpose:** Main hero section component

**Structure:**
- **Container:** Card with dark background
- **Spotlight:** Animated SVG effect
- **Left Panel:** Title + tagline
- **Right Panel:** 3D Spline scene

**Responsive:**
- Mobile: Stacked layout
- Desktop: Side-by-side

---

### 3. **Spotlight** (`spotlight.tsx`)

**Purpose:** Dramatic lighting effect

**Props:**
- `className?: string` - Positioning
- `fill?: string` - Color (default: white)

**Animation:** 2s fade-in with transform

---

### 4. **Card** (`card.tsx`)

**Purpose:** shadcn/ui container component

**Subcomponents:**
- `Card` - Main container
- `CardHeader` - Header section
- `CardTitle` - Title
- `CardDescription` - Description
- `CardContent` - Content area
- `CardFooter` - Footer

---

## 🔧 Customization Guide

### Change Hero Height

```tsx
<Card className="w-full h-[800px] ...">
```

### Update Title & Tagline

```tsx
<h1>Your Custom Title</h1>
<p>Your Custom Tagline</p>
```

### Replace Spline Scene

```tsx
<SplineScene 
  scene="YOUR_SPLINE_URL"
  className="w-full h-full"
/>
```

### Adjust Spotlight Position

```tsx
<Spotlight
  className="-top-20 left-40"
  fill="blue"
/>
```

### Change Background Color

```tsx
<Card className="... bg-gradient-to-br from-blue-950 to-black">
```

---

## 🎨 Theme Colors

**Current Palette:**
- Background: `bg-black/[0.96]` (96% black)
- Title: Gradient from `neutral-50` to `neutral-400`
- Tagline: `neutral-300`
- Spotlight: White with 21% opacity

**To Customize:**

Edit `tailwind.config.ts`:
```ts
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#004AAD',
        secondary: '#2B2B2B',
      }
    }
  }
}
```

---

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

**Responsive Classes Used:**
- `md:text-5xl` - Larger text on medium screens
- `md:left-60` - Adjusted spotlight position
- `md:-top-20` - Adjusted spotlight top position

---

## 🚀 Next Steps: Build Additional Sections

### 1. **Navbar Component**

Create `components/ui/navbar.tsx`:

```tsx
'use client'

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          TechZone Academy
        </div>
        <div className="flex gap-8">
          <a href="#home" className="text-neutral-300 hover:text-white">Home</a>
          <a href="#courses" className="text-neutral-300 hover:text-white">Courses</a>
          <a href="#about" className="text-neutral-300 hover:text-white">About</a>
          <a href="#contact" className="text-neutral-300 hover:text-white">Contact</a>
        </div>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Enroll Now
        </button>
      </div>
    </nav>
  )
}
```

---

### 2. **Courses Section**

Create `components/ui/courses.tsx`:

```tsx
'use client'

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const courses = [
  {
    title: "Data Analytics",
    description: "Master data visualization and business intelligence",
    icon: "📊"
  },
  {
    title: "Data Science",
    description: "Learn statistical modeling and machine learning",
    icon: "🔬"
  },
  {
    title: "AI/ML with Gen AI",
    description: "Explore artificial intelligence and generative models",
    icon: "🤖"
  },
  {
    title: "Prompt Engineering",
    description: "Craft effective prompts for AI systems",
    icon: "✍️"
  }
]

export function Courses() {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Our Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card key={index} className="bg-neutral-800 border-neutral-700 hover:border-blue-500 transition-all">
              <CardHeader>
                <div className="text-4xl mb-4">{course.icon}</div>
                <CardTitle className="text-white">{course.title}</CardTitle>
                <CardDescription className="text-neutral-400">
                  {course.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

### 3. **About Section**

Create `components/ui/about.tsx`:

```tsx
'use client'

export function About() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose TechZone Academy?
            </h2>
            <p className="text-neutral-300 mb-4">
              We provide industry-driven tech training that empowers careers and transforms lives.
            </p>
            <ul className="space-y-3 text-neutral-300">
              <li>✅ Expert instructors with industry experience</li>
              <li>✅ Hands-on projects and real-world applications</li>
              <li>✅ Career support and placement assistance</li>
              <li>✅ Flexible learning schedules</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-neutral-900 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-500">500+</div>
              <div className="text-neutral-400 mt-2">Students Trained</div>
            </div>
            <div className="bg-neutral-900 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-500">95%</div>
              <div className="text-neutral-400 mt-2">Placement Rate</div>
            </div>
            <div className="bg-neutral-900 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-500">50+</div>
              <div className="text-neutral-400 mt-2">Partner Companies</div>
            </div>
            <div className="bg-neutral-900 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-500">4.8/5</div>
              <div className="text-neutral-400 mt-2">Student Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

### 4. **Contact Section**

Create `components/ui/contact.tsx`:

```tsx
'use client'

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function Contact() {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Get In Touch
        </h2>
        <Card className="bg-neutral-800 border-neutral-700">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-neutral-300 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-neutral-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-neutral-300 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                  placeholder="Your message"
                />
              </div>
              <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
```

---

### 5. **Footer Component**

Create `components/ui/footer.tsx`:

```tsx
'use client'

export function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">TechZone Academy</h3>
            <p className="text-neutral-400 text-sm">
              Empowering Careers Through Industry-Driven Tech Skills
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Courses</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Courses</h4>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li><a href="#" className="hover:text-white">Data Analytics</a></li>
              <li><a href="#" className="hover:text-white">Data Science</a></li>
              <li><a href="#" className="hover:text-white">AI/ML</a></li>
              <li><a href="#" className="hover:text-white">Prompt Engineering</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-neutral-400 text-sm">
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8 text-center text-neutral-400 text-sm">
          <p>© 2024 TechZone Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
```

---

## 🎯 Integration Example

Update `app/page.tsx` to include all sections:

```tsx
import { SplineSceneBasic } from "@/components/ui/demo";
import { Navbar } from "@/components/ui/navbar";
import { Courses } from "@/components/ui/courses";
import { About } from "@/components/ui/about";
import { Contact } from "@/components/ui/contact";
import { Footer } from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-950">
        <div className="pt-20"> {/* Offset for fixed navbar */}
          <div className="max-w-7xl mx-auto p-8">
            <SplineSceneBasic />
          </div>
          <Courses />
          <About />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
```

---

## 🐛 Troubleshooting

### Issue: Port 3000 already in use

```bash
# Kill the process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Issue: Spline scene not loading

- Check internet connection
- Verify Spline URL is correct
- Check browser console for errors

### Issue: Tailwind classes not applying

- Ensure `globals.css` is imported in `layout.tsx`
- Clear Next.js cache: `rm -rf .next`
- Restart dev server

### Issue: TypeScript errors

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Additional Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **shadcn/ui:** https://ui.shadcn.com
- **Spline:** https://spline.design
- **Framer Motion:** https://www.framer.com/motion

---

## ✅ Checklist

- [x] React + TypeScript setup
- [x] Tailwind CSS configured
- [x] shadcn/ui structure implemented
- [x] Component folder at `/components/ui`
- [x] Spline integration
- [x] Spotlight effect
- [x] Hero section complete
- [x] Dependencies installed
- [x] README documentation
- [ ] Navbar component
- [ ] Courses section
- [ ] About section
- [ ] Contact section
- [ ] Footer component

---

**🎉 Your TechZone Academy hero section is ready to launch!**

Run `npm run dev` and visit http://localhost:3000 to see it in action.
