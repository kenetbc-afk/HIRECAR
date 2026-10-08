# Video Optimization Guide for HIRECAR

This guide covers how to prepare, optimize, and use videos in the HIRECAR project.

## 📹 Video Sources

You can use videos from:
- **Stock footage**: Pexels, Unsplash, Pixabay
- **Your own content**: Screen recordings, interviews, car footage
- **Placeholder**: Using the demo video (Plyr CDN) for testing

## 🎬 Video Formats & Codecs

The site supports:
- **Primary**: MP4 (H.264 codec) - universally supported
- **Alternative**: WebM (VP9 codec) - better compression, modern browsers
- **Fallback**: Unsplash image placeholder

## 🔧 FFmpeg Commands

### 1. Optimize MP4 (from any source)
```bash
# Fast conversion (good for web, balance quality/size)
ffmpeg -i input-video.mov \
  -c:v libx264 \
  -preset veryfast \
  -crf 23 \
  -c:a aac \
  -b:a 128k \
  output.mp4

# High quality (slower encoding, ~3-5MB for 30s)
ffmpeg -i input-video.mov \
  -c:v libx264 \
  -preset slow \
  -crf 18 \
  -c:a aac \
  -b:a 192k \
  output.mp4

# Fast (quick encoding, ~1-2MB for 30s)
ffmpeg -i input-video.mov \
  -c:v libx264 \
  -preset ultrafast \
  -crf 28 \
  -c:a aac \
  -b:a 128k \
  output.mp4
```

### 2. Create WebM (VP9, for modern browsers)
```bash
# High quality WebM
ffmpeg -i output.mp4 \
  -c:v libvpx-vp9 \
  -b:v 1M \
  -c:a libopus \
  -b:a 128k \
  output.webm

# Balanced WebM
ffmpeg -i output.mp4 \
  -c:v libvpx-vp9 \
  -b:v 500k \
  -c:a libopus \
  -b:a 96k \
  output.webm
```

### 3. Create Thumbnail/Poster Image
```bash
# Extract frame at 2 seconds as poster
ffmpeg -i input-video.mov \
  -ss 00:00:02 \
  -vframes 1 \
  -vf "scale=1920:1080" \
  poster.jpg

# Create multiple poster images (for fallback)
ffmpeg -i input-video.mov \
  -vf "fps=1/5,scale=1920:1080" \
  poster-%03d.jpg
```

### 4. Batch Optimization Script
Save as `optimize-videos.sh`:

```bash
#!/bin/bash

# Check if FFmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
  echo "FFmpeg is not installed. Install it with: brew install ffmpeg"
  exit 1
fi

# Create output directory
mkdir -p assets/videos

# Optimize each .mov file
for video in assets/videos/*.mov; do
  if [ -f "$video" ]; then
    base=$(basename "$video" .mov)
    echo "Optimizing $video..."
    
    # Create MP4
    ffmpeg -i "$video" \
      -c:v libx264 \
      -preset slow \
      -crf 18 \
      -c:a aac \
      -b:a 192k \
      "assets/videos/${base}.mp4"
    
    # Create WebM
    ffmpeg -i "assets/videos/${base}.mp4" \
      -c:v libvpx-vp9 \
      -b:v 1M \
      -c:a libopus \
      -b:a 128k \
      "assets/videos/${base}.webm"
    
    # Create poster
    ffmpeg -i "$video" \
      -ss 00:00:02 \
      -vframes 1 \
      -vf "scale=1920:1080" \
      "assets/videos/${base}-poster.jpg"
    
    echo "✓ Done: ${base}"
  fi
done

echo "All videos optimized!"
```

Run it:
```bash
chmod +x optimize-videos.sh
./optimize-videos.sh
```

## 📊 Video Size Guidelines

| Format | Duration | Size | Use Case |
|--------|----------|------|----------|
| MP4 (CRF 18) | 30s | 3-5 MB | Hero video, high quality |
| MP4 (CRF 23) | 30s | 1.5-2 MB | Standard web video |
| WebM (1Mbps) | 30s | 3.5-4 MB | Modern browser, alternative |
| WebM (500kbps) | 30s | 1.8-2.5 MB | Smaller, lower quality |

**Goal**: Load hero video in < 3 seconds (optimize for ~2MB)

## 🎯 Using Videos in HIRECAR

### Hero Video (Background, Autoplay, Muted)

In `src/index.html`, uncomment the video section:

```html
<video 
  class="hero-video" 
  data-element="hero-video"
  autoplay 
  muted 
  loop 
  playsinline 
  poster="./assets/videos/hero-poster.jpg"
>
  <source src="./assets/videos/hero.mp4" type="video/mp4">
  <source src="./assets/videos/hero.webm" type="video/webm">
</video>
```

### Video Player Section (Interactive, with Controls)

Already integrated with Plyr:

```html
<video 
  id="video-player"
  class="js-player" 
  playsinline 
  controls
  poster="./assets/videos/promo-poster.jpg"
>
  <source src="./assets/videos/promo.mp4" type="video/mp4">
  <source src="./assets/videos/promo.webm" type="video/webm">
</video>
```

## 🚀 Steps to Add Your Own Video

1. **Prepare your source video** (MOV, AVI, MP4, etc.)

2. **Optimize to MP4** using FFmpeg:
   ```bash
   ffmpeg -i your-video.mov -c:v libx264 -preset slow -crf 18 hero.mp4
   ```

3. **Create poster image** (1920x1080):
   ```bash
   ffmpeg -i your-video.mov -ss 00:00:02 -vframes 1 -vf "scale=1920:1080" hero-poster.jpg
   ```

4. **Place files** in `public/assets/videos/`:
   ```
   public/assets/videos/
   ├── hero.mp4 (optimized video)
   ├── hero.webm (optional, modern browsers)
   └── hero-poster.jpg (fallback image)
   ```

5. **Update HTML** to use your video (uncomment and update paths)

6. **Test**:
   ```bash
   npm run dev
   ```

## 📱 Mobile Optimization Tips

- Use **lower bitrate** for mobile (500kbps instead of 1Mbps)
- Use **shorter duration** (15-30 seconds max)
- Always include **muted autoplay** for phone viewers
- Always include **poster/placeholder image**
- Use **playsinline** attribute for inline playback

Example for mobile:
```html
<video 
  autoplay 
  muted 
  loop 
  playsinline
  poster="./assets/videos/hero-poster.jpg"
>
  <source src="./assets/videos/hero-mobile.mp4" type="video/mp4">
</video>
```

## ✅ Performance Checklist

- [ ] Video loads in < 3 seconds
- [ ] Video size is 2-4 MB (MP4) or 1.5-2.5 MB (WebM)
- [ ] Poster image is optimized (< 500 KB)
- [ ] Multiple formats provided (MP4 + WebM)
- [ ] Autoplay video is muted
- [ ] Video has playsinline attribute
- [ ] Fallback image provided
- [ ] Lighthouse performance score 80+

## 🔗 Resources

- **FFmpeg Docs**: https://ffmpeg.org/documentation.html
- **VP9 Quality Guide**: https://trac.ffmpeg.org/wiki/Encode/VP9
- **H.264 CRF Guide**: https://trac.ffmpeg.org/wiki/Encode/H.264
- **Plyr Player**: https://plyr.io/
- **Video Best Practices**: https://web.dev/optimize-video-performance/

## 💬 Common Questions

**Q: My video is too large**
A: Use higher CRF (e.g., 25-28 instead of 18) or lower bitrate for WebM (500k instead of 1M)

**Q: Video won't autoplay**
A: Ensure it has `muted` attribute (browsers require this for autoplay without user interaction)

**Q: Quality is too low**
A: Use lower CRF (e.g., 18-20 instead of 23-25)

**Q: WebM is larger than MP4**
A: That's unexpected. Try lower bitrate (500k) or re-encode the MP4 first (ensure it's well-compressed)

**Q: How do I test on mobile?**
A: Use `npm run dev` and scan QR code or access `http://[your-ip]:5173` from phone
