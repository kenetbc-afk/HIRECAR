#!/bin/bash

# ============================================
# HIRECAR Installation Script
# ============================================

echo "🚀 HIRECAR Setup Script"
echo "========================"

# Step 1: Check Node.js
echo ""
echo "✓ Checking Node.js..."
if ! command -v node &> /dev/null; then
  echo "❌ Node.js not installed. Install from https://nodejs.org/"
  exit 1
fi
echo "✓ Node.js $(node --version) installed"

# Step 2: Install npm dependencies
echo ""
echo "✓ Installing npm dependencies..."
npm install

if [ $? -ne 0 ]; then
  echo "❌ npm install failed"
  exit 1
fi

# Step 3: Create directories
echo ""
echo "✓ Creating directories..."
mkdir -p public/assets/videos
mkdir -p public/assets/images
mkdir -p src/js
mkdir -p src/css
mkdir -p src/data

# Step 4: Check FFmpeg (optional)
echo ""
echo "✓ Checking FFmpeg (for video optimization)..."
if ! command -v ffmpeg &> /dev/null; then
  echo "⚠️  FFmpeg not found. Install for video compression:"
  echo "   macOS: brew install ffmpeg"
  echo "   Ubuntu: sudo apt-get install ffmpeg"
  echo "   Windows: https://ffmpeg.org/download.html"
else
  echo "✓ FFmpeg $(ffmpeg -version | head -1) installed"
fi

# Step 5: Summary
echo ""
echo "✅ Installation Complete!"
echo ""
echo "Next steps:"
echo "1. Add your video: cp your-video.mp4 public/assets/videos/hero.mp4"
echo "2. Start dev server: npm run dev"
echo "3. Open browser: http://localhost:5173"
echo ""
echo "Documentation: See SETUP.md"
echo ""
