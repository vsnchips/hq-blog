# How to Add Your Own Background Image

## Option 1: Use a local image file

1. Place your high-res booth photo in the `/public` folder (e.g., `/public/booth-background.jpg`)
2. In `src/style.css`, find the line:
   ```css
   background-image: url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=2000&q=80');
   ```
3. Replace it with:
   ```css
   background-image: url('/booth-background.jpg');
   ```

## Option 2: Use a URL

Simply replace the URL in the same line with your preferred image URL.

## Recommended Image Specs

- **Resolution**: At least 2000px wide for high-res displays
- **Format**: JPG or WebP for best performance
- **Aspect Ratio**: Landscape (16:9 or wider)
- **File Size**: Optimize to under 500KB if possible
- **Subject**: Something that looks good slightly dimmed (opacity: 0.3)

## Adjusting Background Opacity

In `src/style.css`, find:
```css
body::before {
  ...
  opacity: 0.3;
  ...
}
```

Adjust the `opacity` value between 0.1 (very faint) and 0.5 (more visible).
