#!/bin/bash

# ============================================
# HIRECAR Video Optimization Script
# ============================================
# This script optimizes video files for web delivery
# Usage: ./optimize-videos.sh

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
QUALITY="slow"  # Options: ultrafast, veryfast, fast, medium, slow, slower
CRF="18"        # Quality (0-51, lower is better, 18-28 is typical)
BITRATE_MP4="1.5M"  # MP4 bitrate
BITRATE_WEBM="1M"   # WebM bitrate
INPUT_DIR="assets/videos"
OUTPUT_DIR="public/assets/videos"

echo -e "${YELLOW}=== HIRECAR Video Optimizer ===${NC}\n"

# Check if FFmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
  echo -e "${RED}✗ FFmpeg not found${NC}"
  echo "Install with: brew install ffmpeg (macOS)"
  echo "            sudo apt-get install ffmpeg (Linux)"
  exit 1
fi

echo -e "${GREEN}✓ FFmpeg found$(ffmpeg -version | head -1 | cut -d' ' -f3)${NC}\n"

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Check if input directory exists
if [ ! -d "$INPUT_DIR" ]; then
  echo -e "${RED}✗ Input directory not found: $INPUT_DIR${NC}"
  echo "Create it and add .mov or .mp4 files there."
  exit 1
fi

# Check if there are any video files
VIDEO_COUNT=$(find "$INPUT_DIR" -maxdepth 1 \( -name "*.mov" -o -name "*.avi" -o -name "*.mkv" \) | wc -l)

if [ $VIDEO_COUNT -eq 0 ]; then
  echo -e "${YELLOW}⚠ No source videos found in $INPUT_DIR${NC}"
  echo "Add .mov, .avi, or .mkv files to optimize."
  exit 0
fi

echo "Found $VIDEO_COUNT video(s) to optimize\n"

# Process each video file
for video in "$INPUT_DIR"/*.{mov,avi,mkv}; do
  [ -e "$video" ] || continue

  base=$(basename "$video" | sed 's/\.[^.]*$//')

  echo -e "${YELLOW}Processing: $base${NC}"

  # ============================================
  # 1. Create MP4 (Primary format)
  # ============================================
  echo "  → MP4 (H.264, CRF=$CRF, preset=$QUALITY)"

  ffmpeg \
    -i "$video" \
    -c:v libx264 \
    -preset "$QUALITY" \
    -crf "$CRF" \
    -c:a aac \
    -b:a 192k \
    -movflags +faststart \
    "$OUTPUT_DIR/${base}.mp4" \
    -y -loglevel warning

  MP4_SIZE=$(du -h "$OUTPUT_DIR/${base}.mp4" | cut -f1)
  echo -e "    ${GREEN}✓ MP4 created ($MP4_SIZE)${NC}"

  # ============================================
  # 2. Create WebM (Alternative format)
  # ============================================
  echo "  → WebM (VP9, bitrate=$BITRATE_WEBM)"

  ffmpeg \
    -i "$OUTPUT_DIR/${base}.mp4" \
    -c:v libvpx-vp9 \
    -b:v "$BITRATE_WEBM" \
    -c:a libopus \
    -b:a 128k \
    "$OUTPUT_DIR/${base}.webm" \
    -y -loglevel warning

  WEBM_SIZE=$(du -h "$OUTPUT_DIR/${base}.webm" | cut -f1)
  echo -e "    ${GREEN}✓ WebM created ($WEBM_SIZE)${NC}"

  # ============================================
  # 3. Create Poster Image (Thumbnail)
  # ============================================
  echo "  → Poster image (2s frame)"

  ffmpeg \
    -i "$video" \
    -ss 00:00:02 \
    -vframes 1 \
    -vf "scale=1920:1080" \
    "$OUTPUT_DIR/${base}-poster.jpg" \
    -y -loglevel warning

  POSTER_SIZE=$(du -h "$OUTPUT_DIR/${base}-poster.jpg" | cut -f1)
  echo -e "    ${GREEN}✓ Poster created ($POSTER_SIZE)${NC}"

  # ============================================
  # 4. Summary
  # ============================================
  echo -e "  ${GREEN}✓ Done: ${base}${NC}\n"

done

echo -e "${GREEN}=== All videos optimized ===${NC}"
echo ""
echo "Output directory: $OUTPUT_DIR"
echo ""
echo "Next steps:"
echo "1. Update src/index.html with new video paths"
echo "2. Use .mp4 as primary source, .webm as fallback"
echo "3. Always include poster image"
echo "4. Test with: npm run dev"
echo ""
echo "Example HTML:"
echo "  <video poster=\"./assets/videos/hero-poster.jpg\">"
echo "    <source src=\"./assets/videos/hero.mp4\" type=\"video/mp4\">"
echo "    <source src=\"./assets/videos/hero.webm\" type=\"video/webm\">"
echo "  </video>"
