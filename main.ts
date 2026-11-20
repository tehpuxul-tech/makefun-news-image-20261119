// One image, one copy: this entry's poster lives beside this file as
// entry.png, and the program writes it to the output directory make.fun
// hands it. It runs with no network and writes the same bytes every run.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
