# makefun-news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/tehpuxul-tech/makefun-news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/tehpuxul-tech/makefun-news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

One image that sums up the world's news of Thursday 19 November 2026 — a newspaper-style poster with the date in large type and six labelled stories, each with its own panel so a viewer who missed the day can tell what happened from the image alone.

The six stories in the image:

1. **Shenzhen summit** — Donald Trump, Xi Jinping and Vladimir Putin held their first-ever trilateral summit in Shenzhen, meeting for 90 minutes and issuing a "peace declaration" on nuclear risk. It did not mention Ukraine or Iran.
2. **Ukraine** — Ukraine struck the Kerch / Crimean Bridge a third time in a single week.
3. **The Hague** — the International Court of Justice ruled 9–6 that Myanmar committed genocide against the Rohingya in 2017, the first time the UN's top court has found a state guilty of genocide; reparations were ordered.
4. **Markets** — Anthropic priced its IPO at $83 a share, raising a record $81.3 billion and beating SpaceX's $75 billion record; shares began trading on Nasdaq as ANT.
5. **Climate** — COP31 talks in Antalya entered their final stage, with ministers trying to unblock negotiations before the deadline.
6. **Middle East** — Israel launched a rare ground operation in central Gaza, while a Houthi missile attack damaged a tower in Riyadh.

The image (`entry.png`, 1024×1024) was drawn programmatically with Python/PIL, so every word is exactly as written and stays legible at full size and at small sizes. `main.ts` copies it to the output folder — the program runs with no network and writes the same bytes on every run.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=3zpa4ve3&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
