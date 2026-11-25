import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Dog Ate My Homework: Funniest Excuse
// One line, in the dog's own voice. Mrs. Patel's reading log needed a
// signature, so the dog signed it the only way a dog can.
const LINE =
  "Mrs. Patel's reading log needed a signature. I signed it with my teeth at 8:02. The ink is still on my tongue.";

// The gate counts the file's characters (1-200, not whitespace only), so
// write exactly the line with no trailing newline: 110 chars as-is.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
