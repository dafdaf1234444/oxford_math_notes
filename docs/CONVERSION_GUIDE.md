# Course Conversion Guide

How to convert an Oxford lecture course from PDF to the interactive viewer format.

## Overview

```
PDF lecture notes
    ↓  (extract/OCR)
LaTeX source (or manual transcription)
    ↓  (structure)
HTML content with IDs, cross-references, MathJax
    ↓  (metadata)
ENV_NAMES + GUIDE_DESCS + GUIDE_OUTLINE
    ↓  (template)
Self-contained index.html viewer
    ↓  (integrate)
Metadata JS file for multi-course viewer
```

Typical effort per course: 3-5 hours of AI-assisted work for a course with ~100-200 items.

---

## Step 1: Analyze the Source Material

Before starting conversion, understand the course structure:

1. **Read the PDF** — identify chapters, sections, subsections
2. **Count items** — how many definitions, theorems, lemmas, etc.?
3. **Identify the numbering scheme** — flat (e.g., "Definition 3.4") or nested (e.g., "Definition 3.4.2")?
4. **Check for chapters** — does the course have chapter divisions, or is it flat sections?
5. **Note cross-references** — how does the PDF reference other results? (`\ref{...}`, by name, by number?)
6. **Identify special content** — equations as entities? non-examinable material? appendices?

### Choosing the template

| Course structure | Template | Example |
|-----------------|----------|---------|
| Flat sections, no chapters | B2.1 | Most Part A courses |
| Nested chapters + sections | B2.3 | Most Part B/C courses |
| Equations as entities | A11 | Physics-heavy courses |

---

## Step 2: Create the HTML Content

### 2a. Set up the document structure

Copy the appropriate template (`Part_B/Hilary/B2.3_Lie_Algebras/index.html` is the most feature-complete) and clear the content inside `<main id="content">`.

### 2b. Convert headings

```html
<!-- Chapter (if applicable) -->
<h2 class="chapter-heading" id="ch1">Chapter 1. Foundations</h2>

<!-- Section -->
<h3 class="section-heading" id="sec1-1">1.1 Basic definitions</h3>

<!-- Subsection (if applicable) -->
<h4 id="sec1-1-1">1.1.1 Examples</h4>
```

**ID rules:**
- Chapters: `ch0`, `ch1`, ..., `ch6`, `appendices`
- Sections: `sec{chapter}-{section}` — e.g., `sec1-1`, `sec3-2`, `secA-1`
- Subsections: `sec{chapter}-{section}-{sub}` — e.g., `sec1-1-1`
- For flat courses (no chapters): `sec1`, `sec2`, ..., `secA`, `secB`

### 2c. Convert mathematical environments

For each definition, theorem, lemma, etc.:

```html
<div class="env definition" id="def-1.1.2">
  <div class="env-head">Definition 1.1.2 (Lie algebra).</div>
  <p>A <strong>Lie algebra</strong> over a field \(k\) is...</p>
</div>
```

**Environment class names:** `definition`, `theorem`, `lemma`, `proposition`, `corollary`, `example`, `remark`, `notation`, `warning`

**ID format:** `{prefix}-{numbering}` where prefix matches the type.

### 2d. Convert proofs

```html
<div class="proof collapsed" id="proof-thm-1.2.3">
  <div class="proof-head">Proof.</div>
  <div class="proof-body">
    <p>By <a class="ref" data-ref="lem-1.1.4">Lemma 1.1.4</a>, ...</p>
  </div>
  <div class="qed">□</div>
</div>
```

- Always use `class="proof collapsed"` (collapsed by default)
- ID is `proof-{item-id}`
- Non-examinable proofs: add `starred` class

### 2e. Convert cross-references

Every reference to another item becomes a live link:

```html
<!-- In the PDF: "by Theorem 1.2.3" -->
<a class="ref" data-ref="thm-1.2.3">Theorem 1.2.3</a>
```

The `data-ref` attribute must match the target item's `id` exactly.

### 2f. Convert mathematics

Use MathJax delimiters:
- Inline: `\( ... \)` or `$ ... $`
- Display: `\[ ... \]` or `$$ ... $$`

Common LaTeX conversions:
- `\mathfrak{g}` → renders as gothic g (Lie algebras)
- `\otimes` → tensor product
- `\oplus` → direct sum
- `\cong` → isomorphism
- Standard theorem environments don't need `\begin{theorem}` — they're HTML `div.env`

---

## Step 3: Populate the Data Objects

### 3a. ENV_NAMES

For every item, write a short name (2-6 words):

```javascript
var ENV_NAMES = {
  'def-1.1.2': 'Lie algebra',
  'thm-5.3.7': 'Cartan semisimplicity criterion',
  // ...
};
```

**How to choose names:**
- Definitions: name the thing being defined
- Named theorems: use the standard name ("Maschke's theorem", "Schur's lemma")
- Unnamed theorems: describe the result ("Dimension divides group order")
- Examples: describe what's shown ("Character table of S4")
- Lemmas: describe what they establish ("Weight space invariance")

### 3b. GUIDE_DESCS

For every item, write 1-3 sentences:

```javascript
var GUIDE_DESCS = {
  'def-1.1.2': 'A Lie algebra is a k-algebra whose bracket is alternating and satisfies the Jacobi identity. It captures "infinitesimal symmetries" — the algebraic shadow of a Lie group.',
  // ...
};
```

**How to write descriptions:**
1. First sentence: what it says (the statement, in words)
2. Second sentence: why it matters or how it's used
3. Optional third sentence: how it fits the course narrative

### 3c. GUIDE_OUTLINE

For every chapter and section, write a narrative paragraph:

```javascript
var GUIDE_OUTLINE = {
  'ch1': 'Chapter 1 establishes the foundations...',
  'sec1-1': 'The definition of a Lie algebra and first examples...',
  // ...
};
```

### 3d. COMMENTARY (optional)

Pedagogical notes, exam tips, or deeper context:

```javascript
var COMMENTARY = {
  'thm-5.3.7': '<p>This is the most important structural result in the course...</p>',
};
```

---

## Step 4: Build the TOC Sidebar

The sidebar TOC is generated from the heading structure. The template code scans for `h2.chapter-heading`, `h3.section-heading`, and items within each section.

For most courses, the existing template code handles this automatically. You may need to adjust:
- `initChapterTOC()` — for courses with chapters
- `initSectionTOC()` — for flat-section courses
- `addSubsectionsTOC()` — if the course has subsections

---

## Step 5: Test and Validate

### Content checks
- [ ] All headings render correctly
- [ ] All mathematical environments have correct types and IDs
- [ ] All proofs are collapsible
- [ ] All cross-references are clickable and resolve
- [ ] MathJax renders all formulas correctly

### Data checks
- [ ] Every item ID has an ENV_NAMES entry
- [ ] Every item ID has a GUIDE_DESCS entry
- [ ] Every chapter/section ID has a GUIDE_OUTLINE entry
- [ ] No duplicate IDs
- [ ] No dangling references (data-ref pointing to non-existent IDs)

### Feature checks
- [ ] Dependency graph shows correct uses/usedBy for sample items
- [ ] TOC sidebar navigates correctly
- [ ] Search works in sidebar
- [ ] Type filters work
- [ ] Revision guide displays correctly
- [ ] Glossary displays correctly
- [ ] Minimap renders (if applicable)
- [ ] Peek popover works on hover

### Integration checks
- [ ] Hash navigation works (`index.html#def-1.2` scrolls to that item)
- [ ] postMessage handler responds to parent commands
- [ ] Item clicks send notifications to parent

---

## Step 6: Create the Metadata File

Extract the metadata into `viewer/courses/{key}.js`:

```javascript
VIEWER.registerCourse({
  key: 'b34',
  code: 'B3.4',
  title: 'Algebraic Number Theory',
  term: 'Hilary',
  year: 2024,
  instructor: 'Lecturer Name',
  items: 150,
  path: '../Part_B/Hilary/B3.4_Algebraic_Number_Theory/index.html',
  envNames: { /* copy of ENV_NAMES */ },
  guideDescs: { /* copy of GUIDE_DESCS */ },
  guideOutline: { /* copy of GUIDE_OUTLINE */ }
});
```

Then add the script tag to `viewer/index.html`:
```html
<script src="courses/b34.js"></script>
```

---

## Step 7: Register Overlaps (optional)

If the new course shares concepts with existing courses, add entries to the `OVERLAPS` array in `viewer/index.html`:

```javascript
OVERLAPS.push(
  { concept: 'Galois group', items: { b34: 'def-2.1', b31: 'def-1.5' } }
);
```

---

## AI-Assisted Conversion

The conversion process is well-suited for AI assistance:

### What AI does well
- **Transcribing PDF content to HTML** — reading mathematical notation and producing MathJax
- **Generating ENV_NAMES** — identifying the key term defined by each item
- **Generating GUIDE_DESCS** — writing concise descriptions of mathematical results
- **Generating GUIDE_OUTLINE** — summarizing chapter/section storylines
- **Identifying cross-references** — finding where results reference each other
- **Assigning IDs** — following the naming convention consistently

### What requires human review
- **Mathematical correctness** — AI can mis-transcribe formulas, especially complex ones
- **Cross-reference accuracy** — AI may miss implicit references or create false ones
- **Name quality** — standard names for well-known results
- **Description quality** — ensuring descriptions are mathematically precise
- **Completeness** — ensuring nothing was missed from the PDF

### Recommended workflow

1. **Feed the PDF to AI** — ask it to convert each section to HTML, following the format spec
2. **Review and fix** — check every formula, every cross-reference, every ID
3. **Generate metadata** — ask AI to create ENV_NAMES, GUIDE_DESCS, GUIDE_OUTLINE
4. **Review metadata** — check names and descriptions for accuracy and clarity
5. **Assemble** — paste content into the template, add data objects
6. **Test** — open in browser, check every feature
7. **Iterate** — fix issues, re-test

---

## Course Difficulty Estimates

| Course type | Items | Cross-refs | Effort |
|-------------|-------|------------|--------|
| Small Part A (A0-A2) | 50-80 | Few | 2-3 hours |
| Medium Part A/B | 100-200 | Moderate | 3-5 hours |
| Large Part B (B2.3) | 200+ | Dense | 5-8 hours |
| Physics (equations as entities) | 300-400+ | Very dense | 6-10 hours |
| Part C (advanced) | 150-300 | Dense, cross-course | 5-10 hours |
