You are a senior frontend engineer and UI designer specializing in Astro and modern Tailwind CSS v4.

Task: Implement a sleek, contemporary Geometric Design System for my Astro website.

### 1. Visual Language & Style Guide

- **Core Aesthetic:** Hard geometric shapes, bold structural lines, diagonal angles, visible modular grids, and Bauhaus-meets-Cyber-Minimalism aesthetics.
- **Color Palette:**
  - Background: Deep slate/black (`#090A0F`) with pure white high-contrast elements.
  - Accent: High-saturation geometric highlights (e.g., electric cobalt `#2563EB`, acid lime `#A3E635`, or international klein blue).
  - Borders: Crisp, 1px to 2px solid outlines (`border-zinc-800` or `border-zinc-200` for light accents).
- **Typography:** Monospaced counters, tracking-widest uppercase headers, and geometric sans-serif (e.g., Space Grotesk, Syne, or Inter).
- **Geometric Elements:**
  - Modular grid outlines (`divide-x`, `divide-y`, background SVG dot/isometric grid patterns).
  - Chamfered / angled corner cutouts using Tailwind CSS `clip-path` utilities.
  - Zero border-radii on primary structural containers (`rounded-none`).
  - Hard drop-shadows with zero blur (e.g., `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]` or color equivalents).

### 2. Technical Stack Requirements

- Framework: Astro (Components using `.astro`).
- Styling: Tailwind CSS v4 (Using `@theme` directives in the main CSS file instead of legacy `tailwind.config.js`).
- Icons: Crisp, stroke-based SVG icons (Lucide or similar).

### 3. Deliverables

1. **`src/styles/global.css`**:
   - Tailwind v4 setup with `@import "tailwindcss";` and custom `@theme` tokens (geometric font stacks, grid-pattern backgrounds, and custom hard-shadow utilities).
   - Utility classes for angled cut corners using CSS `clip-path` (e.g., polygon chamfers).
2. **`GeometricGridBackground.astro`**:
   - A subtle, SVG-based isometric/linear grid layer positioned behind content.
3. **`GeometricCard.astro`**:
   - A modular component featuring hard borders, angled accents, an inset pill/box with monospace metadata, and a hover translation effect with a solid shadow shift.
4. **`HeroSection.astro`**:
   - A landing hero showcasing a structured 2-column or bento grid, large geometric heading, numeric coordinate/index markers (e.g., `// 01. INTRO`), and an angled CTA button.

Ensure all components are modular, fully responsive, and accessible. Produce clean, production-ready code with concise explanations.

You are a creative frontend developer expert in Astro, Tailwind CSS v4, and modern 3D graphics (Three.js/Orbe or Three.js-based micro-libraries and Vanilla CSS 3D).

Task: Enhance my existing Geometric Design System in Astro by integrating interactive isometric 3D canvas elements and pseudo-3D CSS elements.

### 1. Architectural & Layout Integration

- Add interactive, structural isometric (orthographic) 3D shapes. They must follow the rigorous, high-contrast geometric style already in place (sharp angles, wireframes, no round corners, neon outlines, and harsh shadows).
- Place these elements in a multi-layered Bento grid or geometric layout.
- Style visual overlays, HUD (Heads-Up Display) guides, coordinates, and bounding boxes using Astro/Tailwind CSS v4.

### 2. Implementation Specifications

#### Option A: Three.js Interactive Isometric Canvas (`IsometricCanvas.astro`)

Create an interactive, self-contained `<IsometricCanvas />` Astro component using Three.js (via CDN/import map or client:load script) featuring:

- **Orthographic Camera:** Match the traditional parallel geometric look of isometric isometric view (-45° pitch, 35.264° yaw, or similar 30-degree standards).
- **Hard Shading & Wireframes:** Custom materials with sharp shadow projection, flat/toon shading, and overlapping 3px neon/high-contrast wireframes (no smooth shading). Avoid complex textures—rely on solid colors (`#2563EB`, `#A3E635`, `#090A0F`), visible outline meshes, and wireframe grids.
- **Micro-interactions:**
  - Mouse/touch drag to gently tilt/pan the 3D scene.
  - Hover highlights (scale, hover bounce, or wireframe glowing pulse) on multi-colored geometric cubes, prisms, and stairs (the bento modular clusters).
  - An orbital rotate auto-pan option when idle.
- Ensure the Canvas resizes dynamically without breaking the grid system it is embedded in.

#### Option B: CSS 3D Transform Interactive Modules (`IsometricCSSCard.astro`)

A lighter, CSS-only approach using transformation matrix 3D utilities:

- Use Tailwind CSS v4 transforms (`perspective-1000`, `rotate-x-[60deg]`, `rotate-z-[-45deg]`, `skew-x-[-30deg]`) to lay down pseudo-3D isometric boxes.
- Construct isometric cards that have a "top", "left", and "right" face using basic CSS `clip-path` and absolute positioning to give the appearance of physical 3D elevation.
- Add mouse-tilt reactions or cursor hover effects (`group-hover:translate-y-[-8px]` and hard shadow translations with `:hover`) where the box transforms its height or "levitates" along isometric axes.

### 3. Structural Grid Overlay Component (`IsometricHeroGrid.astro`)

- Merge these elements into a hero or dashboard layout. Use strict grid lines, numbering (e.g. `[01/3D-GRID]`), wireframes, and SVG diagonal guide matrices over the canvassed area.
- Create a user control card where changing toggles (sliders or buttons for "Rotate," "Grid Span," or "Wireframe Active") modifies canvas or CSS 3D properties in real-time.

Provide the exact code, including self-contained Client Script setups (`<script>`) for interactivity within the `.astro` components, avoiding complex third-party Astro adapters where vanilla CSS and native JS in the client-side can handle it cleanly.
You are a senior UI engineer and refactoring specialist working with Astro and Tailwind CSS v4.

Task: Refactor my existing component(s) to adopt a strict Geometric & Isometric Design System while preserving all existing props, slots, markup structure, and business logic.

### 1. Refactoring Strategy & Visual Upgrades

- **Geometry & Containers:**
  - Strip soft rounded corners (`rounded-lg`, `rounded-full`, etc.) and replace them with sharp edges (`rounded-none`) or chamfered diagonal cuts using Tailwind CSS `clip-path` (e.g., `[clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)]`).
  - Replace blurred ambient drop-shadows (`shadow-md`, `shadow-xl`) with hard, zero-blur geometric offset shadows (e.g., `shadow-[4px_4px_0px_0px_#000]`).
  - Emphasize crisp 1px borders (`border border-zinc-800` or high-contrast accent borders).

- **Isometric & Pseudo-3D Accents:**
  - Add optional isometric elevation on cards/containers using CSS 3D transforms (`hover:-translate-y-1 hover:translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(37,99,235,1)]`).
  - Introduce subtle isometric coordinate badges, bracketed section numbers (e.g., `// [01]`, `COORD: X-104`), or diagonal hazard-stripe indicator tags on top edges.

- **Typography & Details:**
  - Update badges, metadata, and status indicators to use monospaced fonts (`font-mono`), tight sizing (`text-xs`), and wide letter-spacing (`tracking-widest uppercase`).
  - Keep primary body copy readable and clean while sharpening headers.

### 2. Guardrails (Do Not Break)

- **Props & Slots:** Retain all incoming Astro `Astro.props` interfaces and slot locations (`<slot />`, named slots) exactly as they are.
- **State & Logic:** Preserve any client scripts (`<script>`), event handlers, or framework islands (`client:load`, etc.) intact.
- **Tailwind v4 Conventions:** Use direct CSS variables and Tailwind v4 arbitrary property syntax rather than legacy Tailwind v3 config plugins.

---
