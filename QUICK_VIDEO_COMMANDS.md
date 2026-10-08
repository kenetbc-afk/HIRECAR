# Quick Video Commands - HIRECAR

Copy-paste ready FFmpeg commands for video optimization.

## 🚀 Quick Start (Automatic)
```bash
# Make script executable (one time)
chmod +x optimize-videos.sh

# Run optimization on all videos in assets/videos/
./optimize-videos.sh
```

## 📝 One-Shot Commands

### Option 1: Hero Video (High Quality, ~3-5MB)
```bash
# Step 1: Convert to MP4
ffmpeg -i your-video.mov -c:v libx264 -preset slow -crf 18 -c:a aac -b:a 192k hero.mp4

# Step 2: Create WebM
ffmpeg -i hero.mp4 -c:v libvpx-vp9 -b:v 1M -c:a libopus -b:a 128k hero.webm

# Step 3: Create poster
ffmpeg -i your-video.mov -ss 00:00:02 -vframes 1 -vf "scale=1920:1080" hero-poster.jpg
```

### Option 2: Fast Encoding (Smaller, ~1-2MB)
```bash
# Use preset=veryfast and higher CRF for smaller files
ffmpeg -i your-video.mov -c:v libx264 -preset veryfast -crf 25 -c:a aac -b:a 128k hero.mp4
ffmpeg -i hero.mp4 -c:v libvpx-vp9 -b:v 500k -c:a libopus -b:a 96k hero.webm
ffmpeg -i your-video.mov -ss 00:00:02 -vframes 1 -vf "scale=1920:1080" hero-poster.jpg
```

### Option 3: Balanced Quality (Medium, ~2-3MB)
```bash
ffmpeg -i your-video.mov -c:v libx264 -preset medium -crf 21 -c:a aac -b:a 160k hero.mp4
ffmpeg -i hero.mp4 -c:v libvpx-vp9 -b:v 800k -c:a libopus -b:a 128k hero.webm
ffmpeg -i your-video.mov -ss 00:00:02 -vframes 1 -vf "scale=1920:1080" hero-poster.jpg
```

## 🎯 CRF Quality Levels
```
CRF 18-20 = High quality, larger file (~3-5MB for 30s)
CRF 21-23 = Balanced, medium file (~1.5-2.5MB for 30s)
CRF 24-28 = Lower quality, smaller file (~0.5-1.5MB for 30s)
```

## 🎬 Preset Speed (Encoding Time vs File Size)
```
ultrafast  = Fastest encoding, largest file size
veryfast   = Very fast, good quality
fast       = Default balance
medium     = Slower, better compression
slow       = Very slow, excellent compression (recommended)
slower     = Extremely slow, best compression
```

## 📱 Mobile Video (Smaller, Faster Load)
```bash
# Fast, small video for mobile
ffmpeg -i your-video.mov \
  -c:v libx264 \
  -preset veryfast \
  -crf 26 \
  -vf "scale=1280:720" \
  -c:a aac \
  -b:a 96k \
  hero-mobile.mp4

# Tiny WebM for mobile
ffmpeg -i hero-mobile.mp4 \
  -c:v libvpx-vp9 \
  -b:v 300k \
  -c:a libopus \
  -b:a 64k \
  hero-mobile.webm
```

## 📊 Check Video Info
```bash
# Get video duration, bitrate, resolution
ffprobe -v error -show_entries format=duration,bit_rate -of default=noprint_wrappers=1:nokey=1:nokey=1 your-video.mov

# Detailed video info
ffprobe -v error -select_streams v:0 -show_entries stream=width,height,r_frame_rate -of csv=p=0 your-video.mov
```

## ⚡ Batch Rename After Optimization
```bash
# If files were created with numbers, rename them
mv public/assets/videos/hero-1.mp4 public/assets/videos/hero.mp4
mv public/assets/videos/hero-1.webm public/assets/videos/hero.webm
mv public/assets/videos/hero-1-poster.jpg public/assets/videos/hero-poster.jpg
```

## 🎯 File Size Targets
| Duration | MP4 (18) | MP4 (25) | WebM (1M) | WebM (500k) |
|----------|----------|----------|-----------|------------|
| 15s | 1.5-2MB | 0.5-1MB | 1.8-2.5MB | 0.9-1.2MB |
| 30s | 3-5MB | 1-2MB | 3.5-4MB | 1.8-2.5MB |
| 60s | 6-10MB | 2-4MB | 7-8MB | 3.5-5MB |

## 🌐 Use in HIRECAR

### Hero Video (Background)
```html
<video autoplay muted loop playsinline poster="./assets/videos/hero-poster.jpg">
  <source src="./assets/videos/hero.mp4" type="video/mp4">
  <source src="./assets/videos/hero.webm" type="video/webm">
</video>
```

### Player Video (Interactive)
```html
<video id="video-player" class="js-player" playsinline controls poster="./assets/videos/poster.jpg">
  <source src="./assets/videos/video.mp4" type="video/mp4">
  <source src="./assets/videos/video.webm" type="video/webm">
</video>
```

## ✅ Optimization Checklist
- [ ] Video is MP4 + WebM format
- [ ] Video loads in < 3 seconds
- [ ] Video size is 2-4MB for 30s
- [ ] Poster image is < 500KB
- [ ] Autoplay video is muted
- [ ] Video has playsinline attribute
- [ ] Tested on mobile device

## 💡 Pro Tips

1. **Always include poster image** - Shows while video loads
2. **Use playsinline** - Required for mobile autoplay
3. **Always mute autoplay videos** - Browser requirement
4. **Provide both MP4 + WebM** - Better compatibility + compression
5. **Test on real phone** - Autoplay behavior varies by device/OS
6. **Monitor Lighthouse** - Aim for 80+ performance score

## 🐛 Troubleshooting

**"ffmpeg: command not found"**
```bash
# Install FFmpeg
brew install ffmpeg          # macOS
sudo apt-get install ffmpeg  # Linux/Ubuntu
choco install ffmpeg         # Windows
```

**Video is too large**
```bash
# Increase CRF (lower quality)
-crf 25  # instead of 18
# Or reduce bitrate for WebM
-b:v 500k  # instead of 1M
# Or reduce resolution
-vf "scale=1280:720"
```

**Video quality is bad**
```bash
# Lower CRF (higher quality)
-crf 18  # instead of 25
# Or increase bitrate
-b:v 1.5M  # instead of 1M
```

**Encoding is too slow**
```bash
# Use faster preset
-preset veryfast  # instead of slow
# Or use higher CRF
-crf 25  # instead of 18
```

## 📚 References
- FFmpeg Manual: https://ffmpeg.org/ffmpeg.html
- VP9 Encoding: https://trac.ffmpeg.org/wiki/Encode/VP9
- H.264 Encoding: https://trac.ffmpeg.org/wiki/Encode/H.264
