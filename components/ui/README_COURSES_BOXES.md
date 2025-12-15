# README: Courses Cards UI with Animated Boxes Background

## Files Created
- `/components/ui/courses-with-boxes.tsx`
- `/components/ui/demo-courses-with-boxes.tsx`
- `/components/ui/README_COURSES_BOXES.md` (this file)

---

## Dependencies

Run:
```bash
npm install framer-motion lucide-react
```

---

## Prerequisites

1. **Ensure `/components/ui/grid-feature-cards.tsx` exists** and exports `FeatureCard`. The new component uses it unchanged.

2. **Ensure `/components/ui/background-boxes.tsx` exists** (Boxes export). If not present, create it with the animated boxes background component.

3. **Ensure `/lib/utils.ts` exists** with the `cn()` utility function for className merging.

---

## Integration

Import the demo component into your homepage **after the About section**:

```tsx
import AboutSection from "@/components/ui/demo-about";
import CoursesSection from "@/components/ui/demo-courses-with-boxes";

export default function HomePage() {
  return (
    <main>
      <AboutSection />
      <CoursesSection />
      {/* next sections */}
    </main>
  );
}
```

---

## Features

### Reduced Motion Support
- Respects user `prefers-reduced-motion` setting
- Disables Boxes animation and card entrance animations for users who prefer reduced motion
- Shows static gradient background instead

### Responsive Grid
- **Mobile:** 1 column
- **Tablet:** 2 columns  
- **Desktop:** 3 columns

### Animations
- Staggered card entrance animations (0.06s delay between each)
- Smooth fade-in and slide-up effect
- Boxes background animation (when motion is enabled)

---

## Customization

### Replace Icons with Images

Edit the `COURSES` array in `courses-with-boxes.tsx` and add `imgUrl` values:

```tsx
{
  title: "Data Analytics with Gen AI",
  icon: BookOpen,
  imgUrl: "/images/courses/data-analytics.jpg", // Add this
  description: "...",
}
```

Then update `FeatureCard` component to render an `<img>` if `feature.imageUrl` exists.

### Adjust Styling

**Background opacity:**
```tsx
<Boxes className="opacity-40" /> // Change opacity value
```

**Card backgrounds:**
```tsx
<FeatureCard className="bg-card/6 rounded-2xl shadow-lg" /> // Adjust bg opacity
```

**Section colors:**
Edit the text colors in the heading and description sections.

---

## Troubleshooting

### Animations Not Working
- Ensure `framer-motion` is installed
- Restart dev server after installing dependencies
- Check browser console for errors

### Colors Clash with Theme
- Adjust text colors in the component
- Change background opacity values
- Modify the static gradient background for reduced-motion users

### Boxes Component Missing
- Create `/components/ui/background-boxes.tsx` with the animated boxes component
- Or disable the Boxes background and use a static gradient instead

---

## Course Data

The component includes 8 TechZone Academy courses:
1. Data Analytics with Gen AI
2. Data Science with Gen AI
3. AI/ML with Gen AI
4. Python Developer (Django & Web)
5. Gen AI Engineer
6. Cloud & Data Engineer
7. AI Essentials
8. Models Development & Maintenance

Each course includes:
- Title
- Description
- Lucide icon
- `imageHint` for future image replacement

---

## Notes

- Section has `id="courses"` for anchor linking
- Component is fully typed with TypeScript
- Accessible with proper ARIA attributes
- Mobile-friendly and responsive
- Production-ready code
