# Nature Haven Landing Page Components

## Components Created

### 1. Header Component (`src/components/Header.jsx`)
- **Location**: Fixed at the top of the page
- **Features**:
  - Responsive navigation
  - Mobile menu toggle
  - Smooth transitions and hover effects
  
**Image Placeholders**:
- Logo area: Replace the "NH" placeholder with your actual logo
  - Current: Green gradient box with "NH" text
  - Location: Line 14-16 in Header.jsx
  - Recommended: Add your logo image in the `public` folder and update the src

### 2. Hero Section Component (`src/components/HeroSection.jsx`)
- **Location**: Main landing section below header
- **Features**:
  - Animated floating coins
  - Responsive image grid
  - Call-to-action buttons
  - Mobile-optimized layout

**Image Placeholders**:
The hero section has 4 image placeholders for photos:

1. **Family Photo** (Top right)
   - Location: Line 84-89
   - Aspect ratio: 4:3
   - Shows family with laptop

2. **Elderly Photo** (Right side)
   - Location: Line 92-97
   - Aspect ratio: Square (1:1)
   - Shows elderly person

3. **Teen Photo** (Bottom left)
   - Location: Line 104-109
   - Aspect ratio: 4:3
   - Shows teenager studying

4. **Child Photo** (Center)
   - Location: Line 114-119
   - Aspect ratio: Square (1:1)
   - Shows child with phone/device

## How to Add Your Images

### Option 1: Using the public folder
1. Add your images to the `public` folder (e.g., `public/images/`)
2. Update the placeholder divs with `<img>` tags:

```jsx
// Replace this:
<div className="w-full h-full bg-[#C4B4A4] flex items-center justify-center">
  <span className="text-[#0F3D2C]/30 text-sm font-medium">Family Photo</span>
</div>

// With this:
<img 
  src="/images/family-photo.jpg" 
  alt="Family learning together"
  className="w-full h-full object-cover"
/>
```

### Option 2: Using imports
1. Add images to `src/assets/images/`
2. Import at the top of HeroSection.jsx:
```jsx
import familyPhoto from '../assets/images/family-photo.jpg';
```
3. Use in the component:
```jsx
<img 
  src={familyPhoto} 
  alt="Family learning together"
  className="w-full h-full object-cover"
/>
```

## Color Scheme
- **Primary Background**: `#F5EDE4` (Warm beige)
- **Primary Green**: `#22C55E` (Bright green)
- **Dark Green**: `#0F3D2C` (Deep forest green)
- **Accent Green**: `#16A34A` (Medium green)
- **Light Green**: `#86EFAC`, `#BBF7D0`, `#D9F99D` (Coin gradients)

## Animations
Custom animations are defined in `src/index.css`:
- `animate-float`: Gentle floating motion (6s)
- `animate-float-delayed`: Delayed floating (7s)
- `animate-float-slow`: Slow floating with scale (8s)
- `animate-fadeIn`: Fade in animation (0.3s)

## Running the Project
```bash
npm run dev
```

## Next Steps
1. Add your actual images to replace the placeholders
2. Customize the text content as needed
3. Add more sections below the hero
4. Update the navigation links in the header
