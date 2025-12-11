# Theme Switching Guide

This project has two color themes:

## Current Theme: Cyan (default)
- **File**: `src/style.css`
- **Colors**: White on black with cyan accents and haze
- **Buttons**: Subtle orangey-brown (#2a2624)

## Alternative Theme: Orange
- **File**: `src/style-orange.css`
- **Colors**: Warm beige on dark grey with orange accents
- **Buttons**: Orange highlights

## How to Switch Themes

### Method 1: Edit main.ts (Recommended)
In `src/main.ts`, change the import at the top:

**For Cyan theme (current):**
```typescript
import './style.css';
```

**For Orange theme:**
```typescript
import './style-orange.css';
```

### Method 2: Rename files
```bash
# Switch to orange theme
mv src/style.css src/style-cyan.css
mv src/style-orange.css src/style.css

# Switch back to cyan theme
mv src/style.css src/style-orange.css
mv src/style-cyan.css src/style.css
```

### Method 3: Dynamic switching (Advanced)
You could add a theme toggle button that dynamically switches between stylesheets at runtime.

## Quick Test
To preview the orange theme without committing:
```bash
# In src/main.ts, temporarily change:
import './style-orange.css';

# Then run:
npm run dev
```

Don't forget to change it back to `./style.css` when done!
