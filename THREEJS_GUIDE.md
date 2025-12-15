# 🌊 Three.js Dotted Surface - Integration Guide

## ✅ Installation Complete

The animated Three.js dotted surface has been successfully integrated into your TechZone Academy website!

---

## 📦 Dependencies Installed

```bash
npm install three next-themes
npm install -D @types/three
```

**Packages**:
- ✅ `three` - Three.js 3D library
- ✅ `next-themes` - Theme provider for dark/light mode
- ✅ `@types/three` - TypeScript definitions for Three.js

---

## 📁 Files Created

### 1. **dotted-surface.tsx**
Location: `components/ui/dotted-surface.tsx`

Core Three.js animated component featuring:
- 🌊 **Wave animation** - Sine wave particle motion
- 🎨 **Theme-aware colors** - Light particles in dark mode, dark in light mode
- 🧹 **Proper cleanup** - Disposes geometry, materials, and renderer
- 📱 **Responsive** - Handles window resize events
- ⚡ **Performance optimized** - Uses BufferGeometry and requestAnimationFrame

### 2. **demo-about.tsx**
Location: `components/ui/demo-about.tsx`

About section component with:
- Three.js animated background
- Centered content overlay
- TechZone Academy description
- Responsive text sizing

### 3. **layout.tsx** (Modified)
Location: `app/layout.tsx`

Added ThemeProvider wrapper:
- `next-themes` integration
- Default dark theme
- System theme detection enabled
- `suppressHydrationWarning` for SSR safety

### 4. **page.tsx** (Modified)
Location: `app/page.tsx`

Integrated About section below hero.

---

## 🎯 How It Works

### Three.js Animation

The dotted surface creates a 3D particle system with:

```
40 particles (X-axis) × 60 particles (Y-axis) = 2,400 particles
```

**Animation Logic**:
```tsx
// Each particle's Y position is animated with sine waves
positions[index + 1] = 
  Math.sin((ix + count) * 0.3) * 50 +
  Math.sin((iy + count) * 0.5) * 50;
```

This creates a flowing wave effect across the particle grid.

---

## 🎨 Theme Integration

The component uses `next-themes` to adapt particle colors:

```tsx
if (theme === 'dark') {
  colors.push(200, 200, 200); // Light gray particles
} else {
  colors.push(0, 0, 0); // Black particles
}
```

**ThemeProvider Setup** (already configured in `app/layout.tsx`):
```tsx
<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
  {children}
</ThemeProvider>
```

---

## 🚀 Usage

### Current Implementation

The About section is already integrated in `app/page.tsx`:

```tsx
import AboutSection from "@/components/ui/demo-about";

export default function Home() {
  return (
    <main>
      {/* Hero section */}
      <SplineSceneBasic />
      
      {/* About section with dotted surface */}
      <AboutSection />
    </main>
  );
}
```

### Custom Usage

You can use the `DottedSurface` component anywhere:

```tsx
import { DottedSurface } from "@/components/ui/dotted-surface";

export function CustomSection() {
  return (
    <section className="relative min-h-screen">
      <DottedSurface className="size-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1>Your Content Here</h1>
        </div>
      </DottedSurface>
    </section>
  );
}
```

---

## 🎛️ Customization

### Adjust Particle Count

Edit `components/ui/dotted-surface.tsx`:

```tsx
// Current values
const AMOUNTX = 40; // Particles on X-axis
const AMOUNTY = 60; // Particles on Y-axis

// For better performance (mobile)
const AMOUNTX = 30;
const AMOUNTY = 45;

// For more density (desktop)
const AMOUNTX = 50;
const AMOUNTY = 70;
```

**Note**: More particles = higher GPU usage

---

### Change Particle Size

```tsx
const material = new THREE.PointsMaterial({
  size: 8, // Current size
  // Change to:
  size: 12, // Larger particles
  size: 5,  // Smaller particles
});
```

---

### Adjust Animation Speed

```tsx
// In the animate function
count += 0.1; // Current speed

// Slower
count += 0.05;

// Faster
count += 0.2;
```

---

### Modify Wave Pattern

```tsx
// Current wave formula
positions[index + 1] =
  Math.sin((ix + count) * 0.3) * 50 +
  Math.sin((iy + count) * 0.5) * 50;

// Gentler waves
positions[index + 1] =
  Math.sin((ix + count) * 0.2) * 30 +
  Math.sin((iy + count) * 0.3) * 30;

// More dramatic waves
positions[index + 1] =
  Math.sin((ix + count) * 0.5) * 80 +
  Math.sin((iy + count) * 0.7) * 80;
```

---

### Change Particle Colors

```tsx
// Current (theme-aware)
if (theme === 'dark') {
  colors.push(200, 200, 200); // RGB: light gray
} else {
  colors.push(0, 0, 0); // RGB: black
}

// Custom colors (blue particles)
if (theme === 'dark') {
  colors.push(100, 150, 255); // RGB: light blue
} else {
  colors.push(0, 50, 150); // RGB: dark blue
}
```

---

## 📱 Responsive & Performance

### Mobile Optimization

For better mobile performance, reduce particle count on small screens:

```tsx
useEffect(() => {
  if (!containerRef.current) return;

  // Detect mobile
  const isMobile = window.innerWidth < 768;
  
  const SEPARATION = 150;
  const AMOUNTX = isMobile ? 25 : 40; // Fewer particles on mobile
  const AMOUNTY = isMobile ? 40 : 60;
  
  // ... rest of the code
}, [theme]);
```

---

### Disable on Low-End Devices

Add a performance check:

```tsx
useEffect(() => {
  if (!containerRef.current) return;
  
  // Check for WebGL support
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  
  if (!gl) {
    console.warn('WebGL not supported, skipping animation');
    return;
  }
  
  // ... rest of the code
}, [theme]);
```

---

### Pause Animation When Not Visible

Use Intersection Observer to pause when off-screen:

```tsx
useEffect(() => {
  // ... existing setup code
  
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animate(); // Resume
      } else {
        if (sceneRef.current) {
          cancelAnimationFrame(sceneRef.current.animationId);
        }
      }
    },
    { threshold: 0.1 }
  );
  
  if (containerRef.current) {
    observer.observe(containerRef.current);
  }
  
  return () => {
    observer.disconnect();
    // ... existing cleanup
  };
}, [theme]);
```

---

## 🐛 Troubleshooting

### Issue: Particles not visible

**Check**:
1. Theme provider is wrapped correctly
2. Background color contrasts with particle color
3. WebGL is supported in browser

**Fix**:
```tsx
// Make particles more visible
const material = new THREE.PointsMaterial({
  size: 12, // Increase size
  opacity: 1, // Full opacity
});
```

---

### Issue: Performance lag on mobile

**Fix**: Reduce particle count
```tsx
const AMOUNTX = 25; // Down from 40
const AMOUNTY = 40; // Down from 60
```

---

### Issue: Memory leak

**Check**: Cleanup function is running properly

The component already includes proper cleanup:
```tsx
return () => {
  cancelAnimationFrame(animationId);
  geometry.dispose();
  material.dispose();
  renderer.dispose();
  // ...
};
```

---

### Issue: Hydration mismatch

**Already fixed** with:
```tsx
// In layout.tsx
<html lang="en" suppressHydrationWarning>
```

---

## 🎨 Styling the About Section

### Change Background Color

Edit `demo-about.tsx`:

```tsx
<section id="about" className="relative min-h-[60vh] bg-neutral-900">
  {/* Adds a dark background behind particles */}
</section>
```

---

### Adjust Content Overlay

```tsx
<div className="absolute inset-0 flex items-center justify-center px-6 py-20">
  {/* Change padding, alignment, etc. */}
  <div className="max-w-4xl text-center">
    {/* Content */}
  </div>
</div>
```

---

### Make Text More Readable

Add a backdrop blur or background:

```tsx
<div className="max-w-4xl text-center bg-black/30 backdrop-blur-sm p-8 rounded-xl">
  <h2>Welcome to TechZone Academy</h2>
  <p>...</p>
</div>
```

---

## 🔧 Advanced Customization

### Add Mouse Interaction

Track mouse position and affect particles:

```tsx
useEffect(() => {
  // ... existing setup
  
  const handleMouseMove = (event: MouseEvent) => {
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    
    // Use mouseX, mouseY to influence particle positions
  };
  
  window.addEventListener('mousemove', handleMouseMove);
  
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    // ... existing cleanup
  };
}, [theme]);
```

---

### Change Camera Position

```tsx
// Current
camera.position.set(0, 355, 1220);

// Closer view
camera.position.set(0, 200, 800);

// Top-down view
camera.position.set(0, 1500, 0);
camera.lookAt(0, 0, 0);
```

---

### Add Color Gradient

Instead of solid colors, create a gradient:

```tsx
for (let ix = 0; ix < AMOUNTX; ix++) {
  for (let iy = 0; iy < AMOUNTY; iy++) {
    // ... position code
    
    // Gradient from blue to purple
    const r = (ix / AMOUNTX) * 255;
    const g = 100;
    const b = (iy / AMOUNTY) * 255;
    colors.push(r, g, b);
  }
}
```

---

## 🚀 Next Steps

### 1. Add More Sections

Create similar sections for:
- **Courses** - Grid of course cards
- **Contact** - Contact form
- **Footer** - Links and social media

### 2. Optimize for Production

```bash
npm run build
```

Check bundle size and optimize if needed.

### 3. Add Loading State

Show a fallback while Three.js loads:

```tsx
const [isLoaded, setIsLoaded] = useState(false);

useEffect(() => {
  // ... setup code
  setIsLoaded(true);
  // ...
}, [theme]);

return (
  <>
    {!isLoaded && <div className="loading-spinner">Loading...</div>}
    <div ref={containerRef} className={cn(/* ... */)} />
  </>
);
```

---

## 📚 Resources

- **Three.js Docs**: https://threejs.org/docs
- **next-themes**: https://github.com/pacocoursey/next-themes
- **WebGL Support**: https://get.webgl.org

---

## ✅ Summary

You now have a **stunning Three.js animated background** with:

✅ **2,400 animated particles** in a wave pattern  
✅ **Theme-aware colors** (dark/light mode)  
✅ **Proper cleanup** (no memory leaks)  
✅ **Responsive** (handles window resize)  
✅ **SSR-safe** (Next.js compatible)  
✅ **Customizable** (particles, colors, animation)  

**Live at**: http://localhost:3000

Scroll down to see the About section with the animated dotted surface! 🌊

---

**Built with ❤️ for TechZone Academy**
