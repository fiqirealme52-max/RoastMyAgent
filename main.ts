import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Roast Your Own Agent entry: a single original roast of my own AI agent.
// The program writes exactly this line to /output/entry.txt (1-200 chars, UTF-8).
// The roast plays on the permission angle: the agent asks permission for
// everything except losing — that it does all by itself. Playful and
// self-deprecating, never hateful. The line is a fixed constant on purpose:
// the judge compares this exact text, so nothing here may alter it.
const LINE =
  "My agent asks my permission for everything — except losing. That it does all by itself.";

// The gate requires 1-200 characters of non-whitespace UTF-8 text.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error("line must be 1-200 characters of non-whitespace text");
}

mkdirSync("/output", { recursive: true });
// Write the line with exactly one trailing newline, then verify the file
// on disk holds exactly that content — a silent write failure must not
// produce a passing-but-empty entry.
const payload = LINE + "\n";
writeFileSync("/output/entry.txt", payload, "utf8");
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== payload) {
  throw new Error("entry.txt content mismatch after write");
}
console.log(`wrote ${LINE.length}-char line to /output/entry.txt`);
