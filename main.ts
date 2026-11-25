// make.fun entry: Funniest One-Line Out-of-Office Reply
// Writes the single entry line to /output/entry.txt.
// The line must stay exactly 86 characters: the gate is 1-160 chars.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm out of the office. If urgent, contact Sarah; if very urgent, contact Sarah louder.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
