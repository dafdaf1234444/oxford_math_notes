# Documentation

This folder describes the vision, architecture, and conversion process for the Oxford Mathematics Lecture Notes project.

## Contents

| Document | What it covers |
|----------|---------------|
| [VISION.md](VISION.md) | **Start here.** What we're building, why, and what the end state looks like. The core idea: transform 97 PDF lecture courses into an interconnected, navigable knowledge base where any theorem can be traced back to first principles in a single click chain. |
| [FORMAT_SPEC.md](FORMAT_SPEC.md) | Precise specification of the HTML format, ID conventions, data objects (ENV_NAMES, GUIDE_DESCS, GUIDE_OUTLINE, KNOWLEDGE_GRAPH), cross-reference system, type system, and validation checklist. |
| [CONVERSION_GUIDE.md](CONVERSION_GUIDE.md) | Step-by-step guide for converting a PDF course to the interactive format. Includes template selection, HTML structure, data population, testing, and AI-assisted workflow. |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Technical architecture: standalone viewers, multi-course shell, iframe communication, two architecture generations (Gen 1 vs KNOWLEDGE_GRAPH), and scaling considerations. |
| [STATUS.md](STATUS.md) | Current state: 3 of 97 courses converted, 766 items total. Full inventory of remaining courses with priority rankings. Suggested conversion order. Future feature roadmap. |
| [EXAMPLES.md](EXAMPLES.md) | Concrete before/after examples showing what conversion looks like. Dependency tracing walkthroughs. Cross-course concept comparison. The "extreme case" of tracing a Part C theorem to Prelims axioms. |

## For AI Assistants

If you're an AI helping with this project, read these documents in order:

1. **VISION.md** — understand the goal
2. **FORMAT_SPEC.md** — understand the format
3. **CONVERSION_GUIDE.md** — understand how to convert a course
4. **ARCHITECTURE.md** — understand the technical implementation

Then check **STATUS.md** for what's been done and what needs doing.

The project root also has:
- `CLAUDE.md` — operational instructions for AI-assisted development (rules, conventions, what not to do)
- `README.md` — public-facing project overview
