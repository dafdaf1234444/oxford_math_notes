# Oxford Lecture Notes — Interactive Viewer

## Project Overview

Self-contained HTML viewers for Oxford mathematics lecture notes. Each course is a single HTML file with inline CSS + JS + MathJax, featuring interactive navigation, dependency graphs, and revision notes.

**Current courses:**
- `Part_B/Michaelmas/B2.1_Representation_Theory/index.html` (fully converted, 134 items)
- `Part_B/Hilary/B2.3_Lie_Algebras/index.html` (fully converted, 205 items)
- `Part_B/Michaelmas/B2.1_Introduction_to_Representation_Theory/index.html` (original/legacy B2.1 — simpler viewer, committed)

**Multi-course viewer:** `viewer/index.html` — iframe shell with combined glossary (see Multi-Course Viewer section below).

**B2.3 depends on B2.1** — both must be at the same feature level.

## Architecture

### File Structure
```
Part_B/
  Michaelmas/
    B2.1_Representation_Theory/index.html           (converted)
    B2.1_Introduction_to_Representation_Theory/      (legacy)
  Hilary/
    B2.3_Lie_Algebras/index.html                     (converted)
```

Each `index.html` is fully self-contained: inline `<style>`, `<main>` content, `<script>` with all JS + data.

### Three-Panel Layout (CSS Grid)
- **Left**: Collapsible sidebar with TOC (chapter > section > item), filter tabs, search
- **Center**: Lecture content (`#content`) with MathJax-rendered mathematics
- **Right**: Context panel (`#ref-panel`) with dependency graph, minimap, revision notes, glossary

### HTML Content Structure
```html
<h2 class="chapter-heading" id="ch1">Chapter 1. Title</h2>
<h3 class="section-heading" id="sec1-1">1.1 Section Title</h3>
<h4 id="sec1-1-1">1.1.1 Subsection</h4>

<div class="env definition" id="def-1.1.1">
  <div class="env-head">Definition 1.1.1.</div>
  <p>Content with <a class="ref" data-ref="thm-2.3.4">Theorem 2.3.4</a>...</p>
</div>

<div class="proof collapsed" id="proof-def-1.1.1">
  <div class="proof-head">Proof.</div>
  <div class="proof-body">...</div>
  <div class="qed">□</div>
</div>
```

### ID Conventions
- Chapters: `ch0`, `ch1`, ..., `ch6`, `appendices`
- Sections: `sec1-1`, `sec1-2`, `sec2-1`, ..., `secA-1`, `secA-2`
- Subsections: `sec1-1-1`, `secA-2-1`
- Items: `{type}-{section}.{number}` e.g., `def-1.1.1`, `thm-3.4.2`, `lem-A.2.5`
- Item types: `def`, `thm`, `lem`, `prop`, `cor`, `ex`, `rmk`, `not`, `warn`
- Proofs: `proof-{item-id}` e.g., `proof-thm-1.2.3`

### Cross-References
```html
<a class="ref" data-ref="def-1.2.1">Definition 1.2.1</a>
```
On init, `addRefNames()` enhances these with descriptive names from `ENV_NAMES`:
```
Definition 1.2.1 → "Definition 1.2.1 — Ideal"
```
The `.ref-name` span is appended in lighter color.

## JavaScript Data Structures

### Required Objects (per course)

**`ENV_NAMES`** — Maps every item ID to a short English name (2-6 words).
```javascript
var ENV_NAMES = {
  'def-1.1.1': 'R-algebra',
  'def-1.1.2': 'Lie algebra',
  'thm-5.3.7': 'Cartan semisimplicity criterion',
  // ... one entry per item
};
```

**`GUIDE_DESCS`** — Maps every item ID to a 1-3 sentence English description for the revision guide. Written for a math student — compact but mathematically precise, covering what it says, why it matters, and how it fits the course.
```javascript
var GUIDE_DESCS = {
  'def-1.1.2': 'A Lie algebra is a k-algebra whose bracket is alternating and satisfies the Jacobi identity. It captures "infinitesimal symmetries"—the algebraic shadow of a Lie group.',
  // ... one entry per item, matching ENV_NAMES keys exactly
};
```

**`GUIDE_OUTLINE`** — Maps chapter/section IDs to outline paragraphs for the revision guide. Gives the storyline: what this chapter/section achieves, why it matters, what the key results are.
```javascript
var GUIDE_OUTLINE = {
  'ch1': 'Chapter 1: Foundations. Define Lie algebras axiomatically...',
  'sec1-1': 'The definition and first examples: gl_n, sl_n, derivation algebras...',
  // ... one entry per chapter ID (ch0-ch6, appendices) and section ID (sec1-1, etc.)
};
```

**`COMMENTARY`** — Optional per-item commentary boxes (toggled independently).
```javascript
var COMMENTARY = {
  'thm-5.3.7': '<p>This is the main structural result...</p>',
};
```

**`graph`** — Built automatically by `buildGraph()` from `a.ref[data-ref]` links in content.
```javascript
graph[id] = { uses: [ids...], usedBy: [ids...] }
```

**`labelMap`** — Built automatically from `.env-head` text content.

### Key Functions
- `buildGraph()` — Scans `a.ref` elements, builds dependency graph
- `fullLabel(id)` — Returns `"Def 1.1.1 — Lie algebra"` (short label + ENV_NAMES)
- `shortLabel(id)` — Returns `"Def 1.1.1"` (abbreviated type + number)
- `addTOCNames()` — Appends descriptive names to TOC links
- `addRefNames()` — Appends descriptive names to inline cross-references
- `buildGuide()` — Builds the revision notes panel (lazy, on first open)
- `buildGlossary()` — Builds the glossary panel (lazy, on first open)
- `navigateTo(id)` — Opens dependency panel for an item
- `scrollToEnv(id)` — Scrolls content to item
- `showPeek(id, anchor)` — Shows hover preview popover
- `renderMinimap()` — Renders the overview minimap with zoom controls
- `setupScrollObserver()` — TOC auto-expand on scroll (NOT minimap — see below)

### Type Colors
```javascript
var TYPE_COLORS = {
  definition: '#93c5fd', theorem: '#fca5a5', lemma: '#86efac',
  proposition: '#d8b4fe', corollary: '#fdba74', example: '#d1d5db',
  remark: '#e5e7eb', notation: '#e5e7eb', warning: '#fde68a'
};
```

## Features

### Minimap
- Grid overview of all items by section, color-coded by type
- Hover shows `fullLabel()` in nav-label, highlights dependencies
- Click navigates to item
- Zoom controls (+/−/reset) and Ctrl+scroll
- **IMPORTANT: Minimap does NOT track scroll position.** Only shows `panel-selected` highlight when user clicks an item. Scroll-based tracking was intentionally removed because it causes distracting double-highlight squares. Do NOT re-add scroll tracking to the minimap.

### Revision Notes (Guide Panel)
- Accessed via "Guide" button in panel nav
- Hierarchical: Chapter (collapsible) > Section (with outline) > Item entries
- `GUIDE_OUTLINE` provides chapter/section storyline summaries
- `GUIDE_DESCS` provides per-item descriptions
- `ENV_NAMES` provides short descriptive names
- Search filters entries across all chapters (auto-expands when searching)
- Click on entry scrolls to item + opens dependency panel
- Click on section head scrolls to that section

### Glossary Panel
- Accessed via "Glossary" button in panel nav
- Alphabetical index of all items, grouped by first letter (A, B, C...)
- Each entry shows: type dot + term name + shortLabel reference + GUIDE_DESCS description
- Type filter tabs (All, Def, Thm, Lem, Prop, Cor, Ex, Rmk, Not, Warn) — can filter to show e.g. only definitions
- Search bar filters across term names, labels, and descriptions
- Click on entry scrolls to item + opens dependency panel
- Built lazily on first open via `buildGlossary()`
- Designed as a nomenclature reference — find any named concept quickly

### Dependency Graph Panel
- Click any `.env-head` to open the dependency graph
- BFS collects multi-level dependencies (uses + usedBy)
- SVG rendering with color-coded nodes
- Readable text summary below graph: "Uses: Def 1.1.2 — Lie algebra, ..." and "Used by: ..."
- GUIDE_DESCS shown as italic summaries under each prerequisite/reference in the detail panel
- Collapsible detail sections with lazy MathJax typesetting

### Peek Popover
- Hover over `a.ref` cross-references to preview
- Shows `fullLabel()` in header
- Resizable (drag corner), zoomable (+/−/reset)
- Auto-positions to avoid viewport edges

### Proofs
- Start with `class="proof collapsed"` (collapsed by default)
- Click `.proof-head` to toggle collapsed/expanded
- CSS hides `.proof-body` when `.proof.collapsed`
- Non-examinable proofs have `class="proof collapsed starred"`

### TOC Sidebar
- Chapter-level collapsible groups
- Section-level collapsible items
- Filter tabs by type (Def, Thm, Lem, Prop, Cor, Ex, Rmk)
- Items show `ENV_NAMES` descriptive names
- Auto-expands current section on scroll

## Course-Specific Differences

| Aspect | B2.1 Representation Theory | B2.3 Lie Algebras |
|--------|---------------------------|-------------------|
| Hierarchy | Flat: `h2.section-heading` only (7 sections) | Nested: `h2.chapter-heading` + `h3.section-heading` + `h4` subsections |
| Item IDs | `def-1.2`, `thm-3.4` (flat numbering) | `def-1.1.1`, `thm-3.4.2` (nested numbering) |
| Items | 134 | 205 |
| Sections | 7 (no chapters) | 6 chapters + background + appendices |
| Guide structure | Sections only (no chapter grouping) | Chapter > Section > Item |
| Subsection TOC | Not needed | `addSubsectionsTOC()` for h4 entries |
| Chapter TOC | Not needed | `initChapterTOC()` for collapsible chapters |

When adapting `buildGuide()` for flat-section courses (like B2.1), skip chapter grouping — sections ARE the top-level groups in the revision notes.

## What NOT to Do

1. **Do NOT add scroll tracking to the minimap.** The minimap should only highlight the panel-selected item. Scroll tracking causes double-highlight issues.
2. **Do NOT reduce information.** When improving features, keep all existing material. Add structure/presentation, don't remove content.
3. **Do NOT use separate CSS/JS files.** Each viewer is self-contained in a single HTML file (for portability).
4. **Do NOT use `git add -A`** — the repo may contain large/sensitive files.
5. **Do NOT assume B2.1 patterns apply to B2.3.** B2.3 uses `h3.section-heading` (not `h2`), has `h2.chapter-heading` for chapters, and has additional features (guide panel, commentary, ENV_NAMES, etc.).

## Adding a New Course

### Step-by-step
1. Copy the B2.3 `index.html` as template
2. Replace all lecture content in `<main>` with new course HTML
3. Use consistent ID conventions (see above)
4. Populate `ENV_NAMES` with short descriptive names for every item
5. Populate `GUIDE_DESCS` with 1-3 sentence descriptions for every item
6. Populate `GUIDE_OUTLINE` with chapter/section storyline summaries
7. Optionally add `COMMENTARY` entries
8. Cross-references in content (`a.ref[data-ref]`) will auto-build the dependency graph
9. The `addRefNames()` function will auto-enhance inline references with descriptive names

### Auto-generating Data
For new courses where we don't have hand-written descriptions:
- **ENV_NAMES**: Can be generated from `env-head` text + item content (extract the key defined term)
- **GUIDE_DESCS**: Can be AI-generated by reading each item's content and writing a compact description
- **GUIDE_OUTLINE**: Can be AI-generated from chapter/section headings + content overview
- **Cross-references**: Already exist in the LaTeX source as `\ref{}` commands; convert to `<a class="ref" data-ref="...">`

## Multi-Course Viewer (Implemented)

### Architecture: Iframe Shell + Course Metadata Files
The multi-course viewer at `viewer/index.html` is a lightweight shell (~500 lines) that:
- Loads course metadata via `<script src="courses/b21.js">` etc.
- Embeds standalone course viewers in iframes (one at a time, tabbed)
- Provides a combined glossary across all courses with search, type filters, and overlap detection
- Communicates with iframes via `postMessage` for navigation

This scales because the shell stays fixed size regardless of course count. Each course metadata file is small (~10-50KB). Only 1-2 course viewers are loaded at a time.

### File Structure
```
viewer/
  index.html              # Shell: course browser + iframe container + combined glossary
  courses/
    b21.js                # B2.1 metadata: envNames, guideDescs, guideOutline, course info
    b23.js                # B2.3 metadata: same structure
    (future: b34.js, c31.js, etc.)
```

### Course Metadata Format (`courses/b21.js`)
Each course registers itself via `VIEWER.registerCourse()`:
```javascript
VIEWER.registerCourse({
  key: 'b21',
  code: 'B2.1',
  title: 'Introduction to Representation Theory',
  term: 'Michaelmas',
  year: 2024,
  instructor: 'Konstantin Ardakov',
  items: 134,
  path: '../Part_B/Michaelmas/B2.1_Representation_Theory/index.html',
  envNames: { 'def-1.2': 'Representation and degree', ... },
  guideDescs: { 'def-1.2': 'A representation of G...', ... },
  guideOutline: { 'sec1': 'This section introduces...', ... }
});
```

### Shell-to-Iframe Communication (postMessage)
```javascript
// Shell → iframe
{ action: 'scrollTo', id: 'def-1.2' }
{ action: 'navigateTo', id: 'def-1.2' }
{ action: 'highlight', id: 'def-1.2' }

// iframe → shell (bidirectional)
{ type: 'viewer', action: 'ready', course: 'b21' }
{ type: 'viewer', action: 'itemClicked', course: 'b21', id: 'def-1.2' }
```

### Bidirectional Navigation (Smart Glossary)
- **Glossary → Content**: Click any glossary item → opens course iframe + navigates to that item
- **Content → Glossary**: When user clicks an item in the iframe viewer, it sends `itemClicked` to the parent shell, which highlights that item in the combined glossary and scrolls to it. The active item's description is always shown (regardless of view mode).
- **Auto-reveal**: If the clicked item's course isn't enabled in the glossary filter, it auto-enables it. If the item is hidden by type filter or search, it auto-clears those filters.
- Uses `_origNav = navigateTo` wrapper pattern with `_parentMsg` flag to prevent infinite message loops.

### Combined Glossary Features
- **Sorting modes**: A-Z (alphabetical by name) and By # (by definition numbering, grouped by course + section)
- **View modes**: Compact (dense, no badges), Normal (truncated names, desc on hover), Expanded (all descriptions shown)
- **Course filter chips**: Toggle courses on/off in glossary
- **Type filter tabs**: All/Def/Thm/Lem/Prop/Cor/Ex/Rmk with counts
- **Overlap detection**: Hardcoded `OVERLAPS` array identifies shared concepts across courses
- **MathJax rendering**: Descriptions rendered as raw HTML, MathJax.typesetPromise called after render

### Layout: Single-Page Morphing Design
The viewer is a **single page** that morphs between two states:
- **Browse mode** (no course open): Full-width glossary centered (max-width 820px)
- **View mode** (course chip clicked): Glossary collapses to resizable left sidebar (340px default), iframe takes the rest
- Click active course chip again to close and return to browse mode
- CSS transition (`width 0.25s ease`) provides smooth morphing

### Individual Viewer Changes
Both B2.1 and B2.3 now include (~30 lines each):
1. Hash navigation: `if (location.hash)` scrolls to that item on init
2. `navigateTo` wrapper: sends `itemClicked` to parent when user clicks (not when programmatic)
3. postMessage handler: listens for `scrollTo`, `navigateTo`, `highlight` with `_parentMsg` flag
4. Parent notification: sends `{ type: 'viewer', action: 'ready' }` on init

### Adding a New Course to the Viewer
1. Create the standalone course viewer HTML (as before)
2. Create `viewer/courses/{key}.js` with `VIEWER.registerCourse({ ... })`
3. Add `<script src="courses/{key}.js"></script>` to `viewer/index.html`
4. Add postMessage handler + hash navigation to the standalone viewer
5. Optionally add entries to `OVERLAPS` in `viewer/index.html` for shared concepts

### Known Concept Overlaps (B2.1 ↔ B2.3)

| Concept | B2.1 (Groups) | B2.3 (Lie Algebras) |
|---------|---------------|---------------------|
| Representation | `def-1.2` | `def-2.1.1` |
| Irreducible | `def-1.18` | `def-2.1.3` |
| Completely reducible | `def-1.23` | `def-2.1.3` |
| Dual representation | `def-4.3` | `def-2.2.4` |
| Tensor product | `def-4.10` | `lem-2.3.1` |
| Homomorphism | `def-1.12` | `def-1.1.4` |
| Composition series | `def-2.11` | `def-2.2.10` |
| First isomorphism theorem | `lem-1.15` | `thm-1.2.3` |
| Free vector space | `def-1.4` | `def-A.2.1` |
| Radical | `def-2.11` | `def-4.3.5` |

### Conversion Pipeline for New Courses
1. **PDF → LaTeX → HTML**: Extract content from PDF lecture notes
2. **Auto-generate ENV_NAMES**: AI reads each item, extracts the key defined term
3. **Auto-generate GUIDE_DESCS**: AI writes 1-3 sentence descriptions
4. **Auto-generate GUIDE_OUTLINE**: AI summarizes chapter/section storylines
5. **Cross-reference extraction**: Convert `\ref{}` LaTeX commands to `<a class="ref">`
6. **Template**: Copy B2.3 viewer, swap content + data objects
7. **Validation**: Check all IDs unique, all refs resolve, all ENV_NAMES populated
8. **Create metadata**: Extract envNames/guideDescs into `viewer/courses/{key}.js`

### Future Multi-Course Features
- Split view (side-by-side iframes for comparing courses)
- Cross-course dependency graph edges in SVG
- URL deep-linking (`viewer/#b21/def-1.2`)
- Content search across courses (beyond metadata search)
- Shared definition cards (same concept, different treatments side-by-side)

## Environment

- WSL2 on Windows: use `cmd.exe /c start ""` to open files in browser
- MathJax loaded from CDN with 2s init delay for safe typesetting
- All viewers work offline once loaded (MathJax cached by browser)
