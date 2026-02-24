# Vision: A Connected Mathematical Knowledge Base

## The Problem

Oxford mathematics lecture notes are PDFs — linear, isolated, and opaque. A theorem in B2.3 Lie Algebras references "Definition 2.1.1 (Representation)" without telling you what it says, why it matters, or that B2.1 Representation Theory defines the same concept differently. A proof invokes a lemma from three sections ago, but you have to scroll back to find it, losing your place. Equations appear without names or context. Cross-references are bare numbers.

Every mathematics student has experienced the pain of tracing a proof back through its dependencies — flipping between pages, losing the thread, wondering "what was Definition 4.3 again?" — and eventually giving up. The structure of mathematical knowledge is a directed acyclic graph, but we present it as a flat stream of text.

## The Goal

**Transform every Oxford lecture course into a self-contained, interactive, richly connected knowledge base where any result can be traced back to first principles in a single click chain.**

Concretely: you should be able to click on Theorem 5.3.7 (Cartan's semisimplicity criterion) in B2.3 Lie Algebras, see its full dependency graph, click on any prerequisite — say Lemma 5.2.7 (trace form from composition factors) — see *its* dependencies, and keep clicking until you reach Definition 1.1.2 (Lie algebra) at the very foundation. At every step, you see:

1. **What it says** — the full mathematical content, with MathJax rendering
2. **What it's called** — a human-readable name (not just "Lemma 5.2.7")
3. **Why it matters** — a 1-3 sentence description placing it in context
4. **What it needs** — every definition, theorem, and equation it depends on
5. **What needs it** — every result that builds on it
6. **How it connects across courses** — the same concept treated in different courses

The extreme case: click on a theorem in Part C, trace through its proof's dependencies across Part B and Part A courses, all the way down to Prelims axioms. A single connected graph spanning the entire Oxford mathematics curriculum.

## What "Better Format" Means

### 1. Every item is named and described

In the PDF: `Definition 2.2.4.` followed by raw mathematics.

In the viewer:
- **ID**: `def-2.2.4` (machine-readable, stable)
- **Name**: "Dual representation" (human-readable, 2-6 words)
- **Label**: "Def 2.2.4 — Dual representation" (displayed in TOC, cross-references, graphs)
- **Description**: "Given a representation V, the dual V* carries a natural g-action via (x.f)(v) = -f(x.v). This construction is functorial and preserves irreducibility." (1-3 sentences for revision)
- **Content**: Full mathematical definition with MathJax (the original material, cleaned up)
- **Type**: Definition (color-coded blue throughout the UI)
- **Dependencies**: Uses def-2.1.1 (Representation), uses def-2.2.2 (Dual space). Used by lem-2.2.5, rmk-2.2.6.

### 2. Every cross-reference is a live link with context

In the PDF: "By Theorem 2.3.4, we have..."

In the viewer:
- The reference is a clickable link
- Hovering shows a **peek popover** with the full content of Theorem 2.3.4
- The reference text is enriched: "Theorem 2.3.4 — *Lie's theorem*" (name appended)
- Clicking opens the dependency graph for that item

### 3. Every proof is traceable

In the PDF: "Proof. By Lemma 3.2 and Definition 1.4, using the result of Proposition 2.7..."

In the viewer:
- The proof is collapsible (collapsed by default to reduce noise)
- Every reference inside the proof is a live link with peek-on-hover
- The dependency graph for the theorem shows *exactly* which results the proof uses
- You can expand any prerequisite inline to read its statement without leaving the page

### 4. Courses are interconnected

Many concepts appear across multiple courses:
- "Representation" is defined in B2.1 (for groups) and B2.3 (for Lie algebras)
- "Tensor product" appears in B2.1, B2.3, and the Prelims linear algebra
- "Eigenvalue" appears in virtually every course

The multi-course viewer detects these overlaps and lets you compare treatments side-by-side. The combined glossary shows where the same concept lives in different courses.

The ultimate goal: **cross-course dependency edges**. A theorem in B2.3 might depend on a result from B2.1. The dependency graph should show this, with the edge crossing between courses.

## The End State

When fully realized, this system provides:

### For Revision
- **Revision guide**: Every chapter and section has a storyline summary. Every item has a description. Search across everything.
- **Glossary**: Find any named concept instantly, alphabetically or by type.
- **Dependency graphs**: Understand what a result *actually* needs, not just what the proof mentions.
- **Context panel**: See where you are in the course structure at all times.

### For Understanding
- **Peek popovers**: Never lose your place — hover to check a definition, then keep reading.
- **Named references**: "By Theorem 2.3.4 — *Lie's theorem*" tells you what it is without clicking.
- **Collapsible proofs**: Focus on statements first, expand proofs when ready.
- **Descriptions**: Quick English summaries of what each result says and why it matters.

### For Navigation
- **Minimap / Course Index**: See the entire course structure at a glance, color-coded by type.
- **TOC sidebar**: Hierarchical navigation with search and type filters.
- **Dependency graph**: Visual DAG showing how results connect.
- **Cross-course viewer**: Jump between courses, compare treatments of shared concepts.

### For the Full Curriculum
- **97 courses** across Prelims, Part A, Part B, Part C — all in the same format
- **Cross-course dependency graph**: Trace any result back to first principles
- **Combined glossary**: Every named concept across every course, searchable
- **Prerequisite chains**: "To understand Theorem X in Part C, you need these results from Part B, which in turn need these from Part A..."

## Scope

The repository already contains 674 PDF lecture notes across 97 courses. Three courses are fully converted (766 items total). The format, tooling, and architecture are proven. What remains is:

1. **Convert more courses** — each conversion is ~3-5 hours of AI-assisted work
2. **Add cross-course dependency edges** — requires analyzing which results from prerequisite courses are used
3. **Build the full curriculum graph** — connecting Prelims → Part A → Part B → Part C

The format is designed to scale: each course is a self-contained HTML file (no build process, no server), the multi-course viewer is a lightweight iframe shell, and adding a new course is a matter of creating one HTML file and one JS metadata file.

## Design Principles

1. **No information loss.** Every definition, theorem, lemma, proof, example, remark, and equation from the original notes is preserved. We add structure and metadata; we never remove content.

2. **Self-contained.** Each viewer is a single HTML file with inline CSS + JS. No build step, no bundler, no server. Open the file in a browser and it works. The only external dependency is MathJax (CDN, cached after first load).

3. **Mathematically precise.** Names, descriptions, and outlines are written for mathematics students. Compact but correct. No dumbing down.

4. **Dependency-first.** The core innovation is the dependency graph — making the DAG structure of mathematical knowledge explicit and navigable. Everything else (names, descriptions, UI) serves this.

5. **Incremental.** Each course stands alone. You don't need the full curriculum to benefit. But as more courses are converted, the cross-course connections become increasingly powerful.
