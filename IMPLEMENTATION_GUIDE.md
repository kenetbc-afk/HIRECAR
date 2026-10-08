# 📋 HIRECAR Implementation Guide

Complete step-by-step guide to building the full site with animations and video.

---

## Phase 1: Setup (Today - 30 minutes)

### 1.1 Install Everything
```bash
cd /home/user/HIRECAR
chmod +x INSTALL.sh
./INSTALL.sh
```

**What this does:**
- ✅ Installs GSAP, Plyr, Vite
- ✅ Creates folder structure
- ✅ Checks for FFmpeg
- ✅ Lists next steps

### 1.2 Create Root HTML File
File: `src/index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HIRECAR | Premium Mobility For What's Next</title>
  <meta name="description" content="Luxury vehicles, flexible terms, concierge. Los Angeles · San Francisco">
  
  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
  
  <!-- Styles -->
  <link rel="stylesheet" href="./css/theme.css">
  <link rel="stylesheet" href="./css/animations.css">
  <link rel="stylesheet" href="./css/components.css">
  <link rel="stylesheet" href="./css/responsive.css">
  
  <!-- Plyr Video Player CSS (optional) -->
  <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css">
</head>
<body>
  <!-- Content will go here -->
  
  <!-- JavaScript -->
  <script type="module" src="./js/main.js"></script>
</body>
</html>
```

### 1.3 Create Main JS File
File: `src/js/main.js`

```javascript
// Import all modules
import { initAllAnimations } from './animations.js';
import { initFaqAccordion } from './animations.js';
import { initVideoPlayer } from './components.js';

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  console.log('🎬 HIRECAR loaded');
  
  // Initialize animations
  initAllAnimations();
  
  // Initialize components
  initVideoPlayer();
  initFaqAccordion();
});
```

### 1.4 Start Dev Server
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

---

## Phase 2: Add Video Hero (Days 1-2)

### 2.1 Prepare Video File
```bash
# Option 1: Use your own video
ffmpeg -i your-video.mov -c:v libx264 -preset slow -crf 18 hero.mp4
ffmpeg -i hero.mp4 -c:v libvpx-vp9 -b:v 1M hero.webm

# Option 2: Use stock footage (Pexels, Unsplash)
# Download a car/luxury scene video

# Copy to project
cp hero.mp4 public/assets/videos/
cp hero.webm public/assets/videos/
```

### 2.2 Add Hero Section HTML
File: `src/index.html` → Add to `<body>`:

```html
<!-- HERO SECTION -->
<section class="hero" data-section="hero">
  <!-- Video Background -->
  <div class="hero-photo">
    <video 
      class="hero-video" 
      data-element="hero-video"
      autoplay 
      muted 
      loop 
      playsinline 
      poster="/assets/images/hero-poster.jpg"
    >
      <source src="/assets/videos/hero.mp4" type="video/mp4">
      <source src="/assets/videos/hero.webm" type="video/webm">
    </video>
    
    <!-- Overlay Gradient -->
    <div class="hero-overlay"></div>
  </div>
  
  <!-- Hero Content -->
  <div class="hero-grid">
    <div class="wrap">
      <div class="hero-copy">
        <div class="eyebrow" data-element="eyebrow">Premium Mobility</div>
        <h1 class="hero-type">For What's Next</h1>
        <p class="body">Luxury vehicles. Flexible terms. Concierge included.</p>
        
        <!-- CTAs -->
        <div class="ctas">
          <button class="btn btn-bone" data-element="cta-primary">Reserve Your Ride</button>
          <button class="btn btn-line">Schedule a Test Drive</button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Scroll Indicator -->
  <div class="hero-foot">
    <div class="scrollcue">
      <div class="ring"></div>
      <span>Scroll to explore</span>
    </div>
  </div>
</section>
```

### 2.3 Add Hero CSS
File: `src/css/theme.css` → Add:

```css
/* HERO SECTION */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.hero-photo {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    100deg,
    rgba(11, 11, 13, 0.92) 0%,
    rgba(11, 11, 13, 0.62) 34%,
    rgba(11, 11, 13, 0.12) 62%,
    rgba(11, 11, 13, 0.05) 100%
  );
}

.hero-grid {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 60px 0;
}

.hero-copy {
  max-width: 620px;
}

.hero-type {
  font-size: clamp(42px, 5.2vw, 80px);
  font-weight: 300;
  letter-spacing: -0.02em;
  line-height: 1.04;
  margin: 20px 0;
}

.body {
  font-size: 16px;
  color: rgba(242, 239, 231, 0.85);
  max-width: 430px;
  margin: 20px 0 28px;
}

.ctas {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* Button Styles */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 48px;
  padding: 13px 26px;
  border-radius: 999px;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 300ms ease;
}

.btn-bone {
  background: #F2EFE7;
  color: #0B0B0D;
}

.btn-bone:hover {
  background: #fff;
  transform: translateY(-2px);
}

.btn-line {
  border-color: rgba(242, 239, 231, 0.45);
  color: #F2EFE7;
}

.btn-line:hover {
  border-color: #F2EFE7;
}
```

### 2.4 Test Video
```bash
npm run dev
# Open http://localhost:5173
# Video should autoplay (muted)
```

---

## Phase 3: Add Service Cards with Animations (Days 2-3)

### 3.1 Load Service Data
Create: `src/js/data-loader.js`

```javascript
// Load and render services
export async function loadServices() {
  const response = await fetch('/src/data/services.json');
  const data = await response.json();
  return data.services;
}

export async function renderServices() {
  const services = await loadServices();
  const container = document.querySelector('[data-section="services"]');
  
  services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.setAttribute('data-animate', 'service-card');
    card.innerHTML = `
      <div class="service-icon" data-element="icon">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
    `;
    container.appendChild(card);
  });
}
```

### 3.2 Add Services HTML
File: `src/index.html` → After hero:

```html
<!-- SERVICES SECTION -->
<section class="services" data-section="services">
  <div class="wrap">
    <h2 class="section-type">What Makes Us Premium</h2>
    <div class="services-grid">
      <!-- Cards will be rendered by JavaScript -->
    </div>
  </div>
</section>
```

### 3.3 Add Services CSS
File: `src/css/components.css` → Add:

```css
/* SERVICES SECTION */
.services {
  padding: 80px var(--pad);
  background: #0B0B0D;
}

.section-type {
  font-size: clamp(32px, 3.5vw, 54px);
  font-weight: 300;
  letter-spacing: -0.015em;
  line-height: 1.08;
  margin-bottom: 40px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
}

.service-card {
  background: #1a1a1a;
  border: 1px solid rgba(242, 239, 231, 0.1);
  padding: 32px;
  border-radius: 8px;
  transition: all 300ms ease;
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-8px);
  border-color: rgba(200, 134, 46, 0.3);
  box-shadow: 0 12px 32px rgba(200, 134, 46, 0.15);
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 12px;
  display: inline-block;
  transition: transform 300ms ease;
}

.service-card:hover .service-icon {
  transform: scale(1.2) rotate(5deg);
}

.service-card h3 {
  font-size: 20px;
  font-weight: 500;
  margin: 12px 0;
  color: #ffd700;
}

.service-card p {
  font-size: 14px;
  color: rgba(242, 239, 231, 0.8);
  line-height: 1.6;
}
```

### 3.4 Initialize Services
Update `src/js/main.js`:

```javascript
import { renderServices } from './data-loader.js';

document.addEventListener('DOMContentLoaded', async () => {
  await renderServices();
  initAllAnimations();
});
```

### 3.5 Test Animations
```bash
npm run dev
# Scroll down
# Cards should fade in and stagger
```

---

## Phase 4: Add Video Section with Play Button (Days 3-4)

### 4.1 Add Video Section HTML
File: `src/index.html` → After services:

```html
<!-- VIDEO SECTION -->
<section class="video-section" data-section="video">
  <div class="wrap">
    <h2 class="section-type">Experience HIRECAR</h2>
    <div class="video-container">
      <video 
        class="promo-video" 
        data-element="video"
        poster="/assets/images/video-poster.jpg"
        controls
      >
        <source src="/assets/videos/promo.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</section>
```

### 4.2 Add Video CSS
File: `src/css/components.css` → Add:

```css
/* VIDEO SECTION */
.video-section {
  padding: 80px var(--pad);
}

.video-container {
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
}

.promo-video {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
}
```

---

## Phase 5: Add FAQ Accordion (Days 4-5)

### 5.1 Add FAQ HTML
File: `src/index.html`:

```html
<!-- FAQ SECTION -->
<section class="faq-section" data-section="faq">
  <div class="wrap">
    <h2 class="section-type">Frequently Asked</h2>
    <div class="faq-container">
      <!-- FAQ items will be rendered -->
    </div>
  </div>
</section>
```

### 5.2 Load & Render FAQ
Update `src/js/data-loader.js`:

```javascript
export async function renderFaq() {
  const response = await fetch('/src/data/faq.json');
  const data = await response.json();
  const container = document.querySelector('.faq-container');
  
  data.faqs.forEach(faq => {
    const item = document.createElement('div');
    item.className = 'faq-item';
    item.setAttribute('data-element', 'faq-item');
    item.innerHTML = `
      <button class="faq-button" data-element="faq-button">
        <span>${faq.question}</span>
        <span data-element="faq-icon">▼</span>
      </button>
      <div class="faq-content" data-element="faq-content">
        ${faq.answer}
      </div>
    `;
    container.appendChild(item);
  });
}
```

### 5.3 Add FAQ CSS
File: `src/css/components.css`:

```css
/* FAQ SECTION */
.faq-section {
  padding: 80px var(--pad);
  background: #1a1a1a;
}

.faq-container {
  max-width: 700px;
  margin: 0 auto;
}

.faq-item {
  border-bottom: 1px solid rgba(242, 239, 231, 0.1);
}

.faq-button {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #F2EFE7;
  transition: color 300ms ease;
  text-align: left;
}

.faq-button:hover {
  color: #ffd700;
}

.faq-icon {
  transition: transform 300ms ease;
  font-size: 12px;
}

.faq-item.open .faq-icon {
  transform: rotate(180deg);
}

.faq-content {
  height: 0;
  overflow: hidden;
  opacity: 0;
  color: rgba(242, 239, 231, 0.8);
  font-size: 14px;
  line-height: 1.6;
}

.faq-item.open .faq-content {
  opacity: 1;
  padding-bottom: 20px;
}
```

---

## Phase 6: Deploy to Production (Days 5-7)

### 6.1 Build for Production
```bash
npm run build
```

### 6.2 Test Build Locally
```bash
npm run preview
# Opens http://localhost:4173
```

### 6.3 Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### 6.4 Verify Performance
```bash
npm run lighthouse
# Check: Performance, Accessibility, SEO, Best Practices
```

---

## ✅ Completion Checklist

- [ ] Phase 1: Setup complete
- [ ] Phase 2: Video hero working
- [ ] Phase 3: Service cards animating
- [ ] Phase 4: Video section with controls
- [ ] Phase 5: FAQ accordion expanding
- [ ] Phase 6: Built & deployed
- [ ] Lighthouse score 80+
- [ ] Mobile test on real device
- [ ] Video loads under 3 seconds
- [ ] All animations smooth (60fps)

---

## 🎯 Total Time Estimate

| Phase | Days | Tasks |
|-------|------|-------|
| Setup | 0.5 | Install, create structure |
| Video | 1-2 | Optimize, add hero |
| Services | 1 | Cards + animations |
| Video Section | 0.5 | Player, poster |
| FAQ | 1 | Data, accordion, animations |
| Deploy | 0.5 | Build, test, push |
| **TOTAL** | **4-5** | **Full site** |

---

## 📞 Troubleshooting

**Video Not Autoplay?**
- Ensure `muted` attribute is present
- Check browser autoplay policies
- Test in incognito mode

**Animations Janky?**
- Check DevTools Performance tab
- Disable non-essential animations on mobile
- Use CSS transforms (not width/height)

**FAQ Expand/Collapse Slow?**
- Reduce `faqConfig.duration` in `animations.json`
- Use CSS `max-height` instead of `height`

---

Ready to build? Start with Step 1.1! 🚀
