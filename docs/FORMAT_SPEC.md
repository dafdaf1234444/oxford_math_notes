# Format Specification

This document defines exactly what a converted course looks like — the HTML structure, the data objects, the ID conventions, and the cross-reference system.

## Overview

Each converted course is a **single self-contained HTML file** (`index.html`) containing:

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Course Title</title>
  <script src="https://cdn.jsdelivr.net/npm/mathjax@3/..."></script>
  <style>
    /* ~500-800 lines: full CSS for three-panel layout, colors, typography */
  </style>
</head>
<body>
  <header>Course Title — Instructor — Term Year</header>

  <aside id="sidebar">
    <!-- TOC, search, type filters -->
  </aside>

  <main id="content">
    <!-- All lecture content: headings, environments, proofs -->
  </main>

  <aside id="ref-panel">
    <!-- Context panel: dependency graph, minimap/index, guide, glossary -->
  </aside>

  <script>
    /* ~800-1500 lines:
       - Data objects (ENV_NAMES, GUIDE_DESCS, GUIDE_OUTLINE, COMMENTARY)
       - Graph builder, navigation, search, UI logic
    */
  </script>
</body>
</html>
```

No external CSS or JS files. No build process. No dependencies except MathJax CDN.

---

## Content Structure

### Hierarchy

Mathematical content is organized hierarchically:

```
Course
├── Chapter (optional — B2.3 has chapters, B2.1 and A11 do not)
│   ├── Section
│   │   ├── Subsection (optional)
│   │   ├── Item (definition, theorem, lemma, ...)
│   │   │   └── Proof (optional, collapsed by default)
│   │   ├── Item
│   │   │   └── Proof
│   │   └── ...
│   ├── Section
│   └── ...
├── Chapter
└── Appendices
```

### Heading Elements

| Level | Element | Class | ID Pattern | Example |
|-------|---------|-------|------------|---------|
| Chapter | `<h2>` | `chapter-heading` | `ch0`, `ch1`, ..., `appendices` | `<h2 class="chapter-heading" id="ch1">Chapter 1. Foundations</h2>` |
| Section | `<h2>` or `<h3>` | `section-heading` | `sec1-1`, `sec2-3`, `secA-1` | `<h3 class="section-heading" id="sec1-1">1.1 Basic definitions</h3>` |
| Subsection | `<h3>` or `<h4>` | — | `sec1-1-1`, `secA-2-1` | `<h4 id="sec1-1-1">1.1.1 Examples</h4>` |

**Note on heading levels:** In courses with chapters (B2.3), chapters are `<h2>` and sections are `<h3>`. In flat courses (B2.1, A11), sections are `<h2>`. The viewer code adapts to both patterns.

### Item Environments

Every formal mathematical item (definition, theorem, lemma, proposition, corollary, example, remark, notation, warning) is a `div.env`:

```html
<div class="env definition" id="def-1.1.2">
  <div class="env-head">Definition 1.1.2 (Lie algebra).</div>
  <p>A <strong>Lie algebra</strong> over a field \(k\) is a \(k\)-vector space
  \(\mathfrak{g}\) equipped with a bilinear bracket
  \([\cdot, \cdot]: \mathfrak{g} \times \mathfrak{g} \to \mathfrak{g}\) satisfying:
  </p>
  <ol>
    <li><em>Alternating:</em> \([x,x] = 0\) for all \(x \in \mathfrak{g}\).</li>
    <li><em>Jacobi identity:</em> \([x,[y,z]] + [y,[z,x]] + [z,[x,y]] = 0\).</li>
  </ol>
</div>
```

**Structure:**
- Outer `div` has classes: `env` + type name (e.g., `definition`, `theorem`)
- `id` attribute follows the ID convention (see below)
- First child is `div.env-head` with the label text
- Content follows: `<p>`, `<ol>`, `<ul>`, display math, etc.
- MathJax delimiters: `\(` inline `\)`, `\[` display `\]`, or `$$`

### Proof Environments

```html
<div class="proof collapsed" id="proof-def-1.1.2">
  <div class="proof-head">Proof.</div>
  <div class="proof-body">
    <p>We verify the axioms directly. By
    <a class="ref" data-ref="lem-1.1.1">Lemma 1.1.1</a>, ...</p>
  </div>
  <div class="qed">□</div>
</div>
```

- Always starts collapsed (`class="proof collapsed"`)
- Click `proof-head` toggles expansion
- Non-examinable proofs: `class="proof collapsed starred"`
- `id` is `proof-{item-id}`, e.g., `proof-thm-3.4.2`

### Equation Environments (A11 only)

A11 Quantum Theory treats key equations as first-class entities:

```html
<div class="env equation" id="eq-6.9">
  <div class="env-head">Equation 6.9.</div>
  <div class="eq-wrapper">
    <div class="eq-math">\[ [X, P] = i\hbar \]</div>
    <div class="eq-number">(6.9)</div>
  </div>
</div>
```

### Cross-References

Every reference to another item is a clickable link:

```html
<a class="ref" data-ref="thm-5.3.7">Theorem 5.3.7</a>
```

On initialization, `addRefNames()` enhances these with descriptive names:

```
Theorem 5.3.7 → "Theorem 5.3.7 — Cartan semisimplicity criterion"
```

The name is appended as a `span.ref-name` in lighter color. Hovering triggers the peek popover showing the full content of the referenced item.

---

## ID Conventions

Every item, section, chapter, and proof has a unique ID. These IDs are used throughout the system — in cross-references, dependency graphs, data objects, and URLs.

### Pattern

```
{type_prefix}-{numbering}
```

| Type | Prefix | Example |
|------|--------|---------|
| Definition | `def-` | `def-1.1.2`, `def-4.3` |
| Theorem | `thm-` | `thm-5.3.7`, `thm-3.4` |
| Lemma | `lem-` | `lem-A.2.5`, `lem-1.15` |
| Proposition | `prop-` | `prop-6.1.5` |
| Corollary | `cor-` | `cor-5.4.7` |
| Example | `ex-` | `ex-1.1.5`, `ex-3.1` |
| Remark | `rmk-` | `rmk-1.1.3` |
| Notation | `not-` | `not-3.6` |
| Warning | `warn-` | `warn-1.11a` |
| Equation | `eq-` | `eq-6.9` (A11 only) |

### Numbering Schemes

- **Flat** (B2.1, A11): `{section}.{item}` — e.g., `def-1.2`, `thm-7.9`, `eq-6.9`
- **Nested** (B2.3): `{chapter}.{section}.{item}` — e.g., `def-1.1.2`, `thm-5.3.7`

### Structural IDs

| Element | Pattern | Examples |
|---------|---------|----------|
| Chapter | `ch{n}` | `ch0`, `ch1`, `ch6`, `appendices` |
| Section | `sec{n}-{m}` | `sec1-1`, `sec2-3`, `secA-1` |
| Subsection | `sec{n}-{m}-{k}` | `sec1-1-1`, `secA-2-1` |
| Proof | `proof-{item-id}` | `proof-thm-1.2.3`, `proof-lem-5.1` |

### Rules

1. Every ID is **unique** within a course
2. Every `a.ref[data-ref]` must point to an existing ID
3. Every item ID must have a corresponding `ENV_NAMES` entry (or `KNOWLEDGE_GRAPH` entry for A11)
4. Structural IDs (chapters, sections) must have `GUIDE_OUTLINE` entries

---

## Data Objects

Each course defines several JavaScript data objects that power the interactive features.

### ENV_NAMES

Maps every item ID to a short human-readable name (2-6 words). This is the most fundamental data object — it gives every mathematical result a name.

```javascript
var ENV_NAMES = {
  'def-1.1.1': 'R-algebra',
  'def-1.1.2': 'Lie algebra',
  'def-1.1.4': 'Lie algebra homomorphism',
  'thm-1.2.3': 'First isomorphism theorem',
  'thm-5.3.7': 'Cartan semisimplicity criterion',
  'lem-A.2.5': 'Tensor product universal property',
  // ... one entry per item (no exceptions)
};
```

**Guidelines for names:**
- Use the standard mathematical name when one exists (e.g., "Schur's lemma", "Maschke's theorem")
- For definitions, name the thing being defined (e.g., "Lie algebra", "Dual representation")
- For theorems without standard names, describe the result (e.g., "Dimension divides group order")
- For examples, describe what's shown (e.g., "Character table of S4")
- Keep it short: ideally 2-4 words, at most 6

### GUIDE_DESCS

Maps every item ID to a 1-3 sentence English description. Written for a math student doing revision — compact but mathematically precise.

```javascript
var GUIDE_DESCS = {
  'def-1.1.2': 'A Lie algebra is a k-algebra whose bracket is alternating and satisfies the Jacobi identity. It captures "infinitesimal symmetries" — the algebraic shadow of a Lie group.',
  'thm-5.3.7': 'A Lie algebra g over a field of characteristic 0 is semisimple if and only if its Killing form is non-degenerate. This is the main structural test: compute the Killing form, check non-degeneracy.',
  'lem-A.2.5': 'The tensor product V ⊗ W is characterized by the universal property: every bilinear map V × W → U factors uniquely through V ⊗ W. This justifies the construction.',
  // ... one entry per item (matching ENV_NAMES keys exactly)
};
```

**Guidelines for descriptions:**
- First sentence: what it says (the mathematical statement, in words)
- Second sentence (optional): why it matters, how it's used, or how it fits the course
- Use LaTeX sparingly — describe in words where possible, but include key formulas
- Assume the reader knows prerequisite material
- Keep it to 1-3 sentences. This is a revision aid, not a textbook.

### GUIDE_OUTLINE

Maps chapter and section IDs to narrative paragraphs describing the storyline.

```javascript
var GUIDE_OUTLINE = {
  'ch1': 'Chapter 1 establishes the foundations: what a Lie algebra is, the key examples (gl_n, sl_n, derivation algebras), and the basic structural tools (ideals, quotients, isomorphism theorems). This is the algebraic toolkit for everything that follows.',
  'sec1-1': 'The definition of a Lie algebra and first examples. The bracket axioms (alternating, Jacobi) are introduced, along with the key families: general linear gl_n, special linear sl_n, and derivation algebras. Homomorphisms and subalgebras are defined.',
  'sec5-3': 'The main structural results: Cartan\'s criterion gives a computable test for semisimplicity (non-degeneracy of the Killing form), and the decomposition theorem shows every semisimple Lie algebra is a direct sum of simples.',
  // ... one entry per chapter ID and section ID
};
```

**Guidelines for outlines:**
- For chapters: what the chapter achieves, why it matters, key results
- For sections: what this section covers, how it advances the chapter's story
- Write as connected prose, not bullet points
- Reference key results by name (not just number)

### COMMENTARY (optional)

Per-item commentary boxes providing pedagogical notes, exam tips, or deeper context. Toggled independently of descriptions.

```javascript
var COMMENTARY = {
  'thm-5.3.7': '<p>This is the course\'s most important structural result. In the exam, you may be asked to state it and apply it to specific Lie algebras. The key computation is always: write down the Killing form matrix, check its determinant.</p>',
};
```

### KNOWLEDGE_GRAPH (A11 architecture)

A11 uses a single unified object instead of separate ENV_NAMES/GUIDE_DESCS/GUIDE_OUTLINE. This is the newer architecture — future courses may adopt it.

```javascript
var KNOWLEDGE_GRAPH = {
  // Sections
  'sec5': {
    type: 'section',
    name: '5. The mathematical structure of quantum theory',
    desc: 'Formalizes quantum mechanics using Hilbert spaces, self-adjoint operators, and the spectral theorem. Introduces the measurement postulate and Born rule in operator language.',
    uses: [],
    usedBy: []
  },
  // Formal items
  'def-5.4': {
    type: 'definition',
    name: 'Position and momentum operators',
    desc: 'The position operator X acts by multiplication, the momentum operator P by -iℏ d/dx. Both are self-adjoint on appropriate domains.',
    uses: ['def-5.3'],
    usedBy: ['lem-5.1', 'prop-6.3']
  },
  // Equations
  'eq-6.9': {
    type: 'equation',
    name: 'Canonical commutation relation \\([X,P] = i\\hbar\\)',
    desc: 'The fundamental commutation relation between position and momentum. This is the algebraic expression of the uncertainty principle.',
    uses: ['prop-6.3'],
    usedBy: ['cor-6.6']
  }
};
```

**Key differences from separate objects:**
- `uses` and `usedBy` are explicit (not inferred from HTML cross-references)
- Sections, items, and equations are all in one object
- `name` can contain inline LaTeX
- `type` is stored explicitly

---

## Dependency Graph

The dependency graph is the core feature. It makes the DAG structure of mathematical knowledge explicit and navigable.

### How dependencies are determined

**Method 1 — From cross-references (B2.1, B2.3):**

The `buildGraph()` function scans all `a.ref[data-ref]` elements in the HTML. For each item, it collects:
- `uses`: all items referenced *within* this item's content (or its proof)
- `usedBy`: all items that reference *this* item

```javascript
// Built automatically at init:
graph['thm-5.3.7'] = {
  uses: ['def-5.2.8', 'lem-5.2.9', 'thm-5.2.14', 'lem-5.3.5', 'lem-5.3.6'],
  usedBy: ['cor-5.3.12', 'thm-5.3.13']
};
```

**Method 2 — Explicit in KNOWLEDGE_GRAPH (A11):**

Dependencies are declared directly in the data structure. This allows more precise control (e.g., an equation can depend on a proposition even without an HTML cross-reference).

### Graph visualization

When a user clicks an item heading, the dependency panel shows:

1. **SVG DAG**: Nodes color-coded by type, edges showing dependency direction. The selected item is highlighted. Multi-level BFS collects 2-3 levels of dependencies.

2. **Text summary**:
   ```
   Uses: Def 5.2.8 — Killing form, Lem 5.2.9 — Killing form restricts to ideals, ...
   Used by: Cor 5.3.12 — All derivations are inner, Thm 5.3.13 — Semisimple = direct sum of simples
   ```

3. **Expandable details**: Each prerequisite/dependent can be expanded to show its full mathematical content (with lazy MathJax typesetting).

### Cross-course dependencies (future)

The ultimate goal is to connect dependency graphs *across* courses. For example:

- B2.3 `def-2.1.1` (Representation of a Lie algebra) conceptually depends on B2.1 `def-1.2` (Representation of a group) — the Lie algebra version is modeled on the group version.
- Part B courses depend on Part A results (e.g., spectral theorem, integration theory).
- Part C courses depend on Part B results.

These cross-course edges would appear in the multi-course viewer's dependency graph, with edges crossing between iframe-embedded course viewers.

---

## Type System

Every item has a type that determines its color, icon, and filtering behavior.

| Type | CSS Class | Color | Prefix | Meaning |
|------|-----------|-------|--------|---------|
| Definition | `definition` | `#93c5fd` (blue) | `def-` | Introduces a new concept |
| Theorem | `theorem` | `#fca5a5` (red) | `thm-` | Major result with proof |
| Lemma | `lemma` | `#86efac` (green) | `lem-` | Supporting result for theorems |
| Proposition | `proposition` | `#d8b4fe` (purple) | `prop-` | Medium-weight result |
| Corollary | `corollary` | `#fdba74` (orange) | `cor-` | Direct consequence of a theorem |
| Example | `example` | `#d1d5db` (gray) | `ex-` | Illustrative example |
| Remark | `remark` | `#e5e7eb` (light gray) | `rmk-` | Clarifying note |
| Notation | `notation` | `#e5e7eb` (light gray) | `not-` | Notation convention |
| Warning | `warning` | `#fde68a` (yellow) | `warn-` | Common mistake or pitfall |
| Equation | `equation` | `#a5f3fc` (cyan) | `eq-` | Named equation (A11 only) |

---

## Multi-Course Integration

### Standalone viewer requirements

Each standalone viewer must support:

1. **Hash navigation**: On load, check `location.hash` and scroll to that item
2. **postMessage handler**: Listen for messages from the parent shell:
   - `{ action: 'scrollTo', id: '...' }` — scroll to item
   - `{ action: 'navigateTo', id: '...' }` — scroll + open dependency panel
   - `{ action: 'highlight', id: '...' }` — flash highlight an item
3. **Parent notification**: Send `{ type: 'viewer', action: 'ready' }` on init
4. **Item click notification**: Send `{ type: 'viewer', action: 'itemClicked', course: '...', id: '...' }` when user clicks an item

### Metadata file format

Each course has a metadata file at `viewer/courses/{key}.js`:

```javascript
VIEWER.registerCourse({
  key: 'b23',
  code: 'B2.3',
  title: 'Lie Algebras',
  term: 'Hilary',
  year: 2024,
  instructor: 'Kevin McGerty',
  items: 205,
  path: '../Part_B/Hilary/B2.3_Lie_Algebras/index.html',
  envNames: { /* all ENV_NAMES entries */ },
  guideDescs: { /* all GUIDE_DESCS entries */ },
  guideOutline: { /* all GUIDE_OUTLINE entries */ }
});
```

This metadata powers the combined glossary, cross-course search, and overlap detection without loading the full course viewer.

---

## Validation Checklist

Before a course is considered "fully converted":

- [ ] Every item has a unique ID following the naming convention
- [ ] Every `a.ref[data-ref]` resolves to an existing item ID
- [ ] `ENV_NAMES` has an entry for every item ID
- [ ] `GUIDE_DESCS` has an entry for every item ID
- [ ] `GUIDE_OUTLINE` has entries for every chapter and section ID
- [ ] All LaTeX renders correctly in MathJax
- [ ] Proofs are collapsible and correctly associated with their items
- [ ] The dependency graph is connected (no orphan items with zero uses and zero usedBy, unless they are truly foundational)
- [ ] The TOC sidebar correctly reflects the document hierarchy
- [ ] Hash navigation works (can link directly to any item)
- [ ] postMessage integration works with the multi-course viewer
- [ ] Metadata file created at `viewer/courses/{key}.js`
