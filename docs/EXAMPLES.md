# Concrete Examples

This document shows exactly what the conversion looks like, with before/after examples and dependency tracing walkthroughs.

---

## Example 1: A Single Definition (Before/After)

### Before (PDF)

> **Definition 1.1.2.** A *Lie algebra* over a field $k$ is a $k$-vector space $\mathfrak{g}$ equipped with a bilinear map $[\cdot,\cdot]: \mathfrak{g} \times \mathfrak{g} \to \mathfrak{g}$ (the *bracket* or *commutator*) satisfying:
> (i) $[x, x] = 0$ for all $x \in \mathfrak{g}$ (alternating);
> (ii) $[x, [y, z]] + [y, [z, x]] + [z, [x, y]] = 0$ for all $x, y, z \in \mathfrak{g}$ (Jacobi identity).

That's it. No name beyond "Definition 1.1.2". No description. No context. No link to what uses it.

### After (Interactive Viewer)

**HTML:**
```html
<div class="env definition" id="def-1.1.2">
  <div class="env-head">Definition 1.1.2 (Lie algebra).</div>
  <p>A <strong>Lie algebra</strong> over a field \(k\) is a \(k\)-vector space
  \(\mathfrak{g}\) equipped with a bilinear map
  \([\cdot,\cdot]: \mathfrak{g} \times \mathfrak{g} \to \mathfrak{g}\)
  (the <em>bracket</em> or <em>commutator</em>) satisfying:</p>
  <ol>
    <li>\([x, x] = 0\) for all \(x \in \mathfrak{g}\) (alternating);</li>
    <li>\([x, [y, z]] + [y, [z, x]] + [z, [x, y]] = 0\) for all
    \(x, y, z \in \mathfrak{g}\) (Jacobi identity).</li>
  </ol>
</div>
```

**Data objects:**
```javascript
ENV_NAMES['def-1.1.2'] = 'Lie algebra';

GUIDE_DESCS['def-1.1.2'] = 'A Lie algebra is a k-algebra whose bracket is alternating and satisfies the Jacobi identity. It captures "infinitesimal symmetries" — the algebraic shadow of a Lie group.';

GUIDE_OUTLINE['sec1-1'] = 'The definition of a Lie algebra and first examples: gl_n, sl_n, derivation algebras. The bracket axioms are introduced alongside key structural examples.';
```

**What the user sees:**
- In the TOC: "Def 1.1.2 — Lie algebra"
- In cross-references: "Definition 1.1.2 — *Lie algebra*"
- In the revision guide: Name + description + section storyline
- In the glossary: Alphabetically under "L", with type dot and description
- In the dependency graph: Foundation node, used by 20+ items downstream
- On hover (peek popover): Full mathematical content in a floating preview

---

## Example 2: Tracing a Theorem's Dependencies

### The question

"What do I need to understand to prove Theorem 5.3.7 (Cartan's semisimplicity criterion) in B2.3 Lie Algebras?"

### The answer (via dependency graph)

Click on `thm-5.3.7` in the viewer. The dependency panel shows:

```
Theorem 5.3.7 — Cartan semisimplicity criterion

"A Lie algebra g over a field of characteristic 0 is semisimple
if and only if its Killing form is non-degenerate."

USES (prerequisites):
├── Def 5.2.8 — Killing form
│   ├── Def 5.2.6 — Trace form of representation
│   │   └── Def 2.1.1 — Representation
│   │       └── Def 1.1.2 — Lie algebra              ← FOUNDATION
│   └── Lem 5.2.4 — Trace form properties
├── Lem 5.3.5 — Semisimple iff no abelian ideals
│   ├── Def 5.3.1 — Solvable radical & semisimple
│   │   ├── Def 4.3.5 — Radical of Lie algebra
│   │   │   └── Def 4.1.1 — Solvable Lie algebra
│   │   │       └── Def 1.2.1 — Ideal               ← FOUNDATION
│   │   └── Lem 5.3.2 — g/rad(g) is semisimple
│   └── Def 1.2.7 — Simple Lie algebra
├── Lem 5.3.6 — Abelian ideal in Killing radical
│   └── Thm 5.2.14 — Cartan's solvability criterion
│       └── Lem 5.2.7 — Trace form from composition factors
└── Lem 5.2.9 — Killing form restricts to ideals

USED BY (what depends on this):
├── Cor 5.3.12 — All derivations are inner
├── Thm 5.3.13 — Semisimple = direct sum of simples
│   └── Prop 5.3.11 — Ideal complement via Killing form
└── Prop 6.1.1 — Cartan decomposition properties
```

**Total dependency chain:** 15+ items, going back to `def-1.1.2` (Lie algebra) and `def-1.2.1` (Ideal) at the very foundation of the course.

Every node in this tree is clickable. Every node has a name, a description, and its own dependency graph. You can trace all the way down to first principles without leaving the page.

---

## Example 3: Cross-Course Concept Tracing

### The question

"How does 'representation' differ between B2.1 (groups) and B2.3 (Lie algebras)?"

### In the multi-course viewer

The combined glossary shows under "R":

```
R
──
Radical
  ├── B2.1 Def 2.11 — "The radical is the largest solvable normal subgroup..."
  └── B2.3 Def 4.3.5 — "The radical rad(g) is the largest solvable ideal..."
  [SHARED] ← overlap badge

Representation
  ├── B2.1 Def 1.2 — "A representation of G is a homomorphism ρ: G → GL(V)..."
  └── B2.3 Def 2.1.1 — "A representation of g is a Lie algebra homomorphism ρ: g → gl(V)..."
  [SHARED] ← overlap badge
```

Clicking "B2.1 Def 1.2" opens the B2.1 viewer iframe and navigates to that definition. Clicking "B2.3 Def 2.1.1" switches to the B2.3 viewer. You can compare the two treatments side by side (future: split view).

### The full overlap map (B2.1 ↔ B2.3)

| Concept | B2.1 (Groups) | B2.3 (Lie Algebras) |
|---------|---------------|---------------------|
| Representation | def-1.2 | def-2.1.1 |
| Irreducible | def-1.18 | def-2.1.3 |
| Completely reducible | def-1.23 | def-2.1.3 |
| Dual representation | def-4.3 | def-2.2.4 |
| Tensor product | def-4.10 | lem-2.3.1 |
| Homomorphism | def-1.12 | def-1.1.4 |
| Composition series | def-2.11 | def-2.2.10 |
| First isomorphism theorem | lem-1.15 | thm-1.2.3 |
| Free vector space | def-1.4 | def-A.2.1 |
| Radical | def-2.11 | def-4.3.5 |

These overlaps are the seeds of the cross-course dependency graph.

---

## Example 4: The Extreme Case (Cross-Part Tracing)

### The dream

A student is reading Part C's "C2.3 Representation Theory of Semisimple Lie Algebras". They encounter:

> **Theorem 3.2.** (Weyl's character formula) Let V(λ) be the irreducible highest-weight module...

They click on it. The dependency graph shows:

```
Thm 3.2 — Weyl's character formula (C2.3)
│
├── Uses from C2.3:
│   ├── Def 2.1 — Highest weight module
│   ├── Thm 2.5 — Complete reducibility
│   └── Prop 1.3 — Root space decomposition
│
├── Uses from B2.3 (Lie Algebras):
│   ├── Thm 5.3.7 — Cartan semisimplicity criterion
│   ├── Prop 6.1.5 — Root spaces are 1-dim
│   └── Thm 5.4.8 — sl(2) complete reducibility
│
├── Uses from B2.1 (Representation Theory):
│   ├── Thm 1.21 — Maschke's theorem (motivation)
│   └── Def 5.1 — Character of a representation
│
└── Uses from A3 (Rings and Modules):
    └── Def 2.4 — Module over a ring
```

**Four courses deep.** One click chain from a Part C theorem to a Part A definition. The entire dependency structure of Oxford mathematics, made navigable.

This is the end state. We're not there yet — it requires converting the intermediate courses and adding cross-course dependency edges. But the architecture supports it today. Each course is independently useful, and the cross-course connections grow more powerful with every course added.

---

## Example 5: What a Section Looks Like

### In the revision guide

```
Section 5.3: Semisimplicity
────────────────────────────

"The main structural results: Cartan's criterion gives a computable
test for semisimplicity (non-degeneracy of the Killing form), and
the decomposition theorem shows every semisimple Lie algebra is a
direct sum of simples."

  Def 5.3.1 — Solvable radical & semisimple
  "The radical rad(g) is the unique largest solvable ideal. A Lie
  algebra is semisimple if rad(g) = 0."

  Lem 5.3.2 — g/rad(g) is semisimple
  "The quotient by the radical is always semisimple — this is the
  'semisimple part' of any Lie algebra."

  Ex 5.3.3 — Levi decomposition example
  "gl_n decomposes as sl_n ⊕ k·I, where sl_n is semisimple and
  k·I is the radical (1-dimensional abelian ideal)."

  Thm 5.3.4 — Levi's theorem
  "Every finite-dimensional Lie algebra is a semidirect product of
  its radical and a semisimple subalgebra (the Levi factor)."

  ...

  Thm 5.3.7 — Cartan semisimplicity criterion  ★
  "A Lie algebra g over char 0 is semisimple iff its Killing form
  is non-degenerate. THE main structural test."

  ...

  Thm 5.3.13 — Semisimple = direct sum of simples
  "Every semisimple Lie algebra decomposes uniquely as a direct sum
  of simple ideals. This reduces classification to the simple case."
```

Every entry is clickable (scrolls to item + opens dependency graph). The section outline at the top provides the storyline. The ★ marks the key result.
