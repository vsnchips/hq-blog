# Adding Neuropol Font to Favicon Generator

The favicon generator now supports Neuropol font! Here's how to add it:

## Step 1: Obtain Neuropol Font Files

Neuropol is a commercial font. You need to:
1. Purchase or obtain a licensed copy of Neuropol
2. Get the font files in one of these formats:
   - `.ttf` (TrueType Font)
   - `.otf` (OpenType Font)
   - `.woff` or `.woff2` (Web Font formats - preferred for browsers)

## Step 2: Add Font Files to Project

Place your Neuropol font file(s) in:
```
/public/fonts/
```

Supported filenames (any of these):
- `Neuropol.ttf`
- `Neuropol.otf`
- `Neuropol.woff`
- `Neuropol.woff2`

You can add multiple formats for better compatibility.

## Step 3: Generate Favicons

1. Open `generate-favicon.html` in your browser
2. The page will show:
   - ✓ Green message if Neuropol is loaded
   - ⚠ Orange warning if falling back to Orbitron
3. Download your favicons with the correct font!

## Alternative: Free Similar Fonts

If you can't obtain Neuropol, these free alternatives have a similar futuristic style:
- **Audiowide** (Google Fonts)
- **Orbitron** (currently used as fallback)
- **Exo 2** (Google Fonts)

## File Structure
```
hq-blog/
├── public/
│   └── fonts/
│       └── Neuropol.woff2  ← Add your font here
├── generate-favicon.html
└── NEUROPOL_FONT_SETUP.md
```
