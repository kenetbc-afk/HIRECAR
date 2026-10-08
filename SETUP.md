# 🚀 HIRECAR Setup & Installation Guide

## Quick Start (5 minutes)

### 1. Install Dependencies
```bash
cd /home/user/HIRECAR
npm install
```

This installs:
- **GSAP 3.12** — Professional animation library (36 KB)
- **Plyr 3.7** — Video player controls (46 KB)
- **Vite** — Modern dev server (dev only)

### 2. Start Development Server
```bash
npm run dev
```
Opens at `http://localhost:5173` with hot reload.

### 3. Build for Production
```bash
npm run build
```
Outputs optimized files to `dist/` folder.

---

## 📁 Project Structure

```
/home/user/HIRECAR/
├── index.html                 # Main HTML file
├── package.json              # Dependencies & scripts
├── vite.config.js            # Vite configuration
├── SETUP.md                  # This file
│
├── src/
│   ├── index.html            # Entry point
│   ├── js/
│   │   ├── animations.js     # ALL animation logic (GSAP + Intersection Observer)
│   │   ├── components.js     # Reusable components (FAQ, video player, etc.)
│   │   └── utils.js          # Helper functions
│   │
│   ├── css/
│   │   ├── animations.css    # Animation keyframes & transitions
│   │   ├── components.css    # Component styles
│   │   ├── theme.css         # Design tokens (colors, spacing)
│   │   └── responsive.css    # Media queries
│   │
│   └── data/
│       ├── animations.json   # Animation config (timings, easing, etc.)
│       ├── services.json     # Services (S1-S4) data
│       ├── faq.json          # FAQ items
│       ├── news.json         # News/blog feed items
│       └── config.json       # Global config
│
├── public/
│   ├── assets/
│   │   ├── videos/           # Video files (MP4, WebM)
│   │   │   └── hero.mp4      # Main hero video
│   │   ├── images/           # JPG/PNG/WebP images
│   │   └── fonts/            # Custom fonts (if any)
│   │
│   └── og-image.png          # Social media preview
│
└── dist/                     # Production build (generated)
```

---

## 🎬 Video Setup

### Step 1: Prepare Your Video
1. Record or source a 15-30 second video of your hero moment
2. Export as MOV or MP4 (1920x1080, 30fps)

### Step 2: Optimize with FFmpeg
```bash
# Install FFmpeg (macOS)
brew install ffmpeg

# Compress MP4 (target: 2-3 MB)
ffmpeg -i video.mov -c:v libx264 -preset slow -crf 18 hero.mp4

# Create WebM backup (40% smaller, modern browsers only)
ffmpeg -i hero.mp4 -c:v libvpx-vp9 -b:v 1M hero.webm

# Resize for mobile
ffmpeg -i hero.mp4 -vf scale=1280:720 hero-mobile.mp4
```

### Step 3: Store Video Files
```bash
# Copy optimized videos to public folder
cp hero.mp4 /home/user/HIRECAR/public/assets/videos/
cp hero.webm /home/user/HIRECAR/public/assets/videos/
```

### Step 4: Update HTML
```html
<video autoplay muted loop playsinline poster="thumbnail.jpg">
  <source src="/assets/videos/hero.mp4" type="video/mp4">
  <source src="/assets/videos/hero.webm" type="video/webm">
  Your browser doesn't support HTML5 videos
</video>
```

---

## ✨ Animation Logic Explained

### How It Works

1. **HTML Attributes** — Mark elements with `data-*` attributes:
   ```html
   <div data-animate="service-card">Card 1</div>
   <div data-animate="service-card">Card 2</div>
   ```

2. **JSON Config** — Define animation behavior in `animations.json`:
   ```json
   {
     "animations": {
       "serviceCards": {
         "duration": 0.6,
         "staggerDelay": 0.1,
         "easing": "back.out"
       }
     }
   }
   ```

3. **JavaScript** — `animations.js` reads config and applies animations:
   ```javascript
   import animationConfig from '../data/animations.json';
   
   gsap.fromTo(cards, { opacity: 0 }, {
     opacity: 1,
     stagger: animationConfig.animations.serviceCards.staggerDelay
   });
   ```

4. **CSS** — Fallback styles if JS fails:
   ```css
   [data-animate-scroll] {
     opacity: 0;
     transition: opacity 600ms ease;
   }
   [data-animate-scroll].animate-in {
     opacity: 1;
   }
   ```

### Animation Types

| Type | Use Case | Example |
|------|----------|---------|
| **Fade-in** | Text, images | Hero title appears |
| **Slide-up** | Cards, sections | Service cards reveal from bottom |
| **Stagger** | Multiple elements | Each card delays 100ms |
| **Parallax** | Background depth | Background moves slower than scroll |
| **Scale** | Hover effects | Button grows on hover |
| **Counter** | Numbers | 0 → 1000+ animates |
| **Pulse** | CTAs | Button glow repeats |

---

## 🎨 Customizing Animations

### Change Animation Speed
Edit `src/data/animations.json`:
```json
{
  "serviceCards": {
    "duration": 0.6,  // ← Change from 600ms to 400ms for faster
    "staggerDelay": 0.1
  }
}
```

### Change Easing Curve
```json
{
  "easing": "back.out"  // ← Try: power2.out, elastic.out, bounce.out
}
```

### Disable Animations for Low-End Devices
Edit `src/js/animations.js`:
```javascript
// Check for prefers-reduced-motion
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

if (prefersReducedMotion) {
  console.log('Animations disabled');
  return;
}
```

---

## 📊 Performance Checklist

- [ ] Video compressed to <3 MB (MP4) + <2 MB (WebM)
- [ ] Video poster image (JPG, ~200 KB)
- [ ] GSAP loaded only if needed (lazy-load)
- [ ] No animations on `prefers-reduced-motion`
- [ ] CSS transforms used (no animating width/height)
- [ ] Intersection Observer for scroll triggers
- [ ] Mobile devices test on 4G throttle
- [ ] Lighthouse score: 80+ (performance)

### Run Performance Audit
```bash
npm run lighthouse
```

---

## 🎯 JSON Data Files Explained

### `services.json`
Data for S1-S4 service cards. Edit to change:
- Title, description
- Icons (emoji or icon name)
- Animation delays
- Link URLs

```json
{
  "services": [
    {
      "id": "s1",
      "title": "Luxury Fleet",
      "description": "Hand-curated collection...",
      "icon": "🏎️",
      "animationDelay": 0
    }
  ]
}
```

### `faq.json`
Questions & answers. Used to generate accordions.

```json
{
  "faqs": [
    {
      "id": "faq1",
      "question": "How does the daily rate work?",
      "answer": "Our daily rates start at...",
      "category": "Rental & Pricing"
    }
  ]
}
```

### `news.json`
Blog posts, updates, testimonials. Used for news carousel.

```json
{
  "news": [
    {
      "id": "news1",
      "title": "New Mercedes-AMG G63 Added to Fleet",
      "excerpt": "Experience the pinnacle...",
      "date": "2026-10-05",
      "category": "fleet"
    }
  ]
}
```

### `animations.json`
Master config for all animations. Define:
- Duration (milliseconds)
- Easing curves
- Stagger delays
- Trigger points (scroll, click, etc.)

---

## 💾 Deploying to Production

### Build Locally
```bash
npm run build
```

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
# Connect to netlify.com → drag & drop dist/ folder
```

### Deploy to GitHub Pages
```bash
# Add to package.json:
"deploy": "npm run build && echo 'hirecar.com' > dist/CNAME && git push origin main"
```

---

## 🔧 Troubleshooting

### Video Not Playing
- Check file format (MP4 or WebM)
- Verify `autoplay muted` attributes
- Check browser console for errors
- Test in Chrome first (best support)

### Animations Not Working
- Check browser console for errors
- Verify GSAP is imported: `import gsap from 'gsap'`
- Check `data-*` attributes match CSS selectors
- Run `npm run dev` to rebuild

### Slow Load Time
- Compress video with FFmpeg
- Use WebP for images
- Lazy-load GSAP only if needed
- Enable gzip compression on server

### Mobile Animations Janky
- Reduce `will-change` usage
- Use CSS transforms only (scale, translate, rotate)
- Test on real device (not just Chrome DevTools)
- Check `prefers-reduced-motion` setting

---

## 📚 References & Tools

### Video Optimization
- **FFmpeg Guide:** https://ffmpeg.org/documentation.html
- **HandBrake (GUI):** https://handbrake.fr/
- **Video Specs:** 1080p, H.264 codec, 24-30fps

### Animation Libraries
- **GSAP Docs:** https://gsap.com/docs/v3
- **GSAP Easing:** https://gsap.com/docs/v3/Eases
- **Intersection Observer:** https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

### Performance
- **Lighthouse:** https://developers.google.com/web/tools/lighthouse
- **WebPageTest:** https://www.webpagetest.org/
- **Can I Use:** https://caniuse.com/ (browser support)

### Video Players
- **Plyr:** https://plyr.io/ (recommended)
- **HTML5 Video API:** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video

---

## 🚀 Next Steps

1. **Install:** `npm install`
2. **Add video:** Copy optimized video to `public/assets/videos/`
3. **Run dev:** `npm run dev`
4. **Edit HTML:** Add `data-*` attributes to elements
5. **Customize:** Edit JSON files for content/animations
6. **Test:** Check in Chrome, Firefox, Safari, mobile
7. **Deploy:** `npm run build` → push to hosting

---

## 📞 Support

- **GSAP Help:** Visit gsap.com/forums
- **Animation Debugging:** Check Chrome DevTools → Performance tab
- **Video Issues:** Test in multiple browsers

---

Generated: October 8, 2026  
Version: 1.0.0
