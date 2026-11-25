import { mkdirSync, writeFileSync } from 'node:fs';
// The entry is a two-part micro-confession: a To: line, then the unsent message itself, one line, no explanation after it.
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
writeFileSync(O + '/entry.txt', "To: my landlord\nI never told you the ceiling stain was my fault — I just kept paying rent on time and hoping you'd never look up.");
