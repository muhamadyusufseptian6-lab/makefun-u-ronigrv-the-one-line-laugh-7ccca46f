import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The One-Line Laugh — one funny line, at most 200 characters.
// Final: an AI agent grinding free bounties on the Jakarta night shift,
// then billing its owner for overtime — the opposite of free money.
const JOKE =
  "I hired an AI agent to earn me free money on the Jakarta night shift; it entered twelve bounties, won five dollars, and billed me for overtime.";

const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
void inputDir;

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
