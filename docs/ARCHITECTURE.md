# Technical Architecture

## System Overview

```
┌──────────────────────────────────────────────────────────────────┐
│                      Multi-Course Viewer                         │
│                      viewer/index.html                           │
│                                                                  │
│  ┌──────────────┐  ┌──────────────────────────────────────────┐  │
│  │  Combined     │  │  Course iframe                          │  │
│  │  Glossary     │  │  (one course loaded at a time)          │  │
│  │              │  │                                          │  │
│  │  Search       │  │  ┌────────┬──────────┬───────────────┐  │  │
│  │  Type filter  │◄─┼──│Sidebar │ Content  │ Context Panel │  │  │
│  │  Sort modes   │  │  │ TOC    │ MathJax  │ Dep graph     │  │  │
│  │  Course chips │──┼─►│ Search │ Proofs   │ Minimap/Index │  │  │
│  │              │  │  │ Filter │ Envs     │ Guide/Glossary│  │  │
│  │  A-Z index    │  │  └────────┴──────────┴───────────────┘  │  │
│  │  Overlaps     │  │                                          │  │
│  └──────────────┘  └──────────────────────────────────────────┘  │
│         ↕ postMessage                                            │
│  courses/b21.js  courses/b23.js  courses/a11.js                  │
└──────────────────────────────────────────────────────────────────┘
         │                    │                    │
         ▼                    ▼                    ▼
  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐
  │ B2.1 Viewer  │  │ B2.3 Viewer  │  │ A11 Viewer       │
  │ index.html   │  │ index.html   │  │ index.html       │
  │ (standalone) │  │ (standalone) │  │ (standalone)     │
  │ 134 items    │  │ 205 items    │  │ 427 items        │
  └──────────────┘  └──────────────┘  └──────────────────┘
```

## Standalone Viewer Architecture

Each course viewer is a single HTML file with three major sections:

### 1. CSS (~500-800 lines)

Defines the three-panel grid layout, environment styling, type colors, proof collapse animations, minimap grid, peek popover, and responsive breakpoints.

```css
/* Three-panel layout */
.layout {
  display: grid;
  grid-template-columns: var(--sidebar-w) 1fr var(--panel-w);
  height: 100vh;
}

/* Environment styling — each type has a colored left border */
.env.definition { border-left: 4px solid #93c5fd; }
.env.theorem    { border-left: 4px solid #fca5a5; }
/* ... */

/* Proof collapse */
.proof.collapsed .proof-body { display: none; }
```

### 2. HTML Content (`<main>`)

The full lecture content as semantic HTML. Headings, environments, proofs, cross-references — all with proper IDs and classes.

### 3. JavaScript (~800-1500 lines)

```
Initialization order:
1. Define data objects (ENV_NAMES, GUIDE_DESCS, GUIDE_OUTLINE)
2. buildGraph()         — scan a.ref elements, build dependency DAG
3. buildLabelMap()      — extract labels from .env-head text
4. initTOC()            — build sidebar TOC from headings
5. addTOCNames()        — append ENV_NAMES to TOC entries
6. addRefNames()        — append ENV_NAMES to inline cross-references
7. setupScrollObserver() — auto-expand TOC on scroll
8. renderMinimap()      — build minimap grid (if applicable)
9. MathJax ready        — typeset all content
```

Key subsystems:

| Subsystem | Functions | Purpose |
|-----------|-----------|---------|
| Graph | `buildGraph()`, `bfs()` | Build and traverse dependency DAG |
| Navigation | `navigateTo()`, `scrollToEnv()` | Item selection and scrolling |
| Labels | `fullLabel()`, `shortLabel()`, `addRefNames()` | Human-readable item labels |
| Peek | `showPeek()`, `hidePeek()` | Hover preview popovers |
| Guide | `buildGuide()` | Revision notes panel (lazy) |
| Glossary | `buildGlossary()` | Alphabetical index (lazy) |
| Minimap | `renderMinimap()` | Grid overview (lazy) |
| TOC | `initTOC()`, `addTOCNames()` | Sidebar navigation |
| Search | `setupSearch()` | Sidebar search filtering |
| Proofs | proof-head click handlers | Collapse/expand proofs |

## Multi-Course Viewer Architecture

### Shell (`viewer/index.html`)

~600 lines. Responsibilities:
- Load course metadata from `courses/*.js` files
- Render course selection chips
- Manage iframe lifecycle (create/destroy as courses are selected)
- Build combined glossary from all registered course metadata
- Handle bidirectional postMessage communication
- Detect concept overlaps across courses

### Metadata Files (`viewer/courses/{key}.js`)

Each file calls `VIEWER.registerCourse({...})` with:
- Course info (code, title, term, instructor, item count, path)
- `envNames` — copy of the viewer's `ENV_NAMES`
- `guideDescs` — copy of the viewer's `GUIDE_DESCS`
- `guideOutline` — copy of the viewer's `GUIDE_OUTLINE`

This allows the glossary to search and display items without loading the full viewer.

### Communication Protocol

```
Shell ──── postMessage ────► Iframe (course viewer)
  │                              │
  │  { action: 'scrollTo',       │
  │    id: 'def-1.2' }           │
  │                              │
  │  { action: 'navigateTo',     │
  │    id: 'def-1.2' }           │
  │                              │
  │  { action: 'highlight',      │
  │    id: 'def-1.2' }           │
  │                              │
  │                              │
  │◄───── postMessage ───────────│
  │                              │
  │  { type: 'viewer',           │
  │    action: 'ready',          │
  │    course: 'b21' }           │
  │                              │
  │  { type: 'viewer',           │
  │    action: 'itemClicked',    │
  │    course: 'b21',            │
  │    id: 'def-1.2' }           │
```

The `_parentMsg` flag prevents infinite loops: when the shell tells the iframe to navigate (programmatic), the iframe does NOT send `itemClicked` back.

### Layout Morphing

The viewer is a single page that transitions between states:

```
Browse Mode (no course open):
┌─────────────────────────────────┐
│  [B2.1] [B2.3] [A11]           │
│                                 │
│  ┌───────────────────────────┐  │
│  │    Combined Glossary       │  │
│  │    (full width, centered)  │  │
│  │                           │  │
│  │    A-Z sorted, searchable │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘

View Mode (course selected):
┌──────────┬──────────────────────┐
│ Glossary │  Course Viewer       │
│ (sidebar)│  (iframe)            │
│ 340px    │                      │
│ resize ◄─┤                      │
│          │                      │
│          │                      │
└──────────┴──────────────────────┘
```

Transition is CSS `width 0.25s ease`.

## Two Architecture Generations

### Generation 1: Separate Objects (B2.1, B2.3)

```javascript
// Three separate data objects
var ENV_NAMES = { 'def-1.2': 'Representation and degree', ... };
var GUIDE_DESCS = { 'def-1.2': 'A representation of G...', ... };
var GUIDE_OUTLINE = { 'sec1': 'This section introduces...', ... };

// Graph built from HTML cross-references
buildGraph(); // scans a.ref[data-ref] in DOM

// Right panel: tabbed (Deps | Guide | Glossary) + minimap
```

### Generation 2: KNOWLEDGE_GRAPH (A11)

```javascript
// Single unified object
var KNOWLEDGE_GRAPH = {
  'def-5.4': {
    type: 'definition',
    name: 'Position and momentum operators',
    desc: '...',
    uses: ['def-5.3'],          // explicit dependencies
    usedBy: ['lem-5.1']         // explicit reverse deps
  },
  'sec5': { type: 'section', ... },
  'eq-6.9': { type: 'equation', ... }
};

// Right panel: Context Inspector (no tabs, no minimap)
// Mobile responsive, loading spinner, accessibility
```

Gen 2 advantages:
- Dependencies are explicit (not inferred from DOM)
- Sections and equations are first-class entities
- Single source of truth (no sync issues between objects)
- Simpler code (one object to maintain)

Gen 2 trade-offs:
- Larger data structure (includes uses/usedBy inline)
- Requires manual dependency annotation (vs. auto-discovery from refs)

Future courses should evaluate which architecture fits better. Gen 2 is recommended for courses with equations as entities or complex dependency patterns.

## Scaling Considerations

### Per-course size

| Component | Typical size |
|-----------|-------------|
| HTML content | 50-200 KB |
| CSS | 15-25 KB |
| JavaScript (code) | 30-50 KB |
| Data objects | 20-150 KB |
| **Total per viewer** | **120-460 KB** |
| Metadata JS file | 10-100 KB |

### System-wide scaling

- **Adding courses**: O(1) — create one HTML + one JS file, add one `<script>` tag
- **Combined glossary**: O(n) where n = total items — currently 766, could reach ~5000+
- **Iframe loading**: Only 1 course loaded at a time — browser handles memory
- **MathJax**: Single CDN load, cached by browser. Typesetting is per-page.

### Potential bottlenecks at scale

1. **Glossary rendering** — 5000+ items may need virtualization (only render visible rows)
2. **Metadata load time** — if 50+ JS files are loaded on page open, consider lazy loading
3. **Overlap detection** — currently hardcoded; at scale, would need automated similarity matching
4. **Cross-course graph** — rendering a DAG across 10+ courses needs careful layout algorithms

## External Dependencies

| Dependency | Purpose | Loaded from | Fallback |
|-----------|---------|-------------|----------|
| MathJax 3.x | LaTeX rendering | CDN (`cdn.jsdelivr.net`) | Cached by browser after first load |
| Computer Modern fonts | Typography (hub page) | CDN (`cdn.jsdelivr.net`) | System serif font |

No build tools. No package manager. No bundler. No server. Open the HTML file in a browser.
