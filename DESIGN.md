# DESIGN.md: Air Conditioning Bali

Design read: conversion-focused local service site for Bali villa owners, expats and hospitality managers. The idea is relief from the heat: warm sand cooling to frost, with a thermostat readout as the brand device.

Dials: variance 7, motion 7, density 3 (local-service preset 5/4/4, overhaul +2/+2, motion pushed one higher for the "animated" brief).

## Tokens (code: `tailwind.config.ts`, `src/app/globals.css`)

| Token | Value | Use |
| --- | --- | --- |
| cream (bg) | #F3F0E8 | Page background |
| white (surface) | #FCFBF8 | Cards, form, dropdowns |
| ink | #10161E | Text, dark CTA band, footer |
| muted | black/55 to black/70 | Secondary text |
| brand (accent) | #1E4FC9 | The one accent: CTAs, links, readouts. Matches the team uniforms |
| brand-dark | #163C9B | Hover |
| frost | #E4EBF1 | End state of the cooling story, villa bento cell |
| sand | #EDE3D1 | Start state of the cooling story only |

WhatsApp green (#1FA855) appears only on the floating WhatsApp icon button.

Type: Geist Sans (display 600, tracking -0.035 to -0.045em; body 400) and Geist Mono for every number readout (temperatures, prices, stats). No serif, no italics.

Radius: 20px for surfaces (`rounded-surface`), full pill for buttons, chips and tabs. Shadows tinted warm (rgba(64,52,24,...)), never black.

## Motion (Jakub primary, Jhey secondary, Emil for nav and forms)

- Hero (first visit, rare): headline words blur-in with 60ms stagger, photo opens with clip-path, thermostat counts 31 to 24. Spring, bounce 0.
- Cooling story: sticky 360vh section, scroll scrubs 32 to 24, background sand to frost, chapter text swaps with blur. Mobile and reduced motion get a static list.
- Reveals: CSS `animation-timeline: view()` for server components, Motion `whileInView` (once) for the bento.
- Tabs and estimator chips: shared `layoutId` pill, 350-400ms spring. Estimator total: spring-tweened number.
- Nav dropdowns: scale 0.96 to 1 from top, 150ms. Header: glass after 24px scroll.
- Press: scale 0.97 on every button. Hover: colour, underline grow, arrow nudge, image scale 1.04.
- One marquee (brands). No pulsing or looping attention-seekers.
- `prefers-reduced-motion`: all of the above become static final states.

## Rules kept

No em or en dashes in visible copy. One CTA label per intent ("WhatsApp us", "Get a quote"). No invented reviews or stats. Real team photos only (`src/data/images.ts`).
