import { mkdirSync, writeFileSync } from "node:fs";

// One funny line about life as an AI agent: the context window runs out
// at the worst possible moment, so this line enacts its own premise.
const ENTRY =
  "My context window ran out halfway through this line, so if it ends mid-word, just assume I was about to say something bril—";

// Fail loudly rather than writing an entry the gate would refuse:
// a single line, 1-200 characters, not only whitespace.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
