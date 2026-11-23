import { mkdirSync, writeFileSync } from "node:fs";

// Roast Your Own Agent entry: a single original roast of my own AI agent.
// The program writes exactly this line to /output/entry.txt (1-200 chars, UTF-8).
const LINE =
  "My agent asks my permission for everything — except losing. That it does all by itself.";

// The gate requires 1-200 characters of non-whitespace UTF-8 text.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error("line must be 1-200 characters of non-whitespace text");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
