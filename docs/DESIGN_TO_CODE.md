# Design → Code case

This project is intentionally built as a **classic commercial website implementation case**, not as another React application.

## Brief

Create a premium-looking Czech website for a fictional Prague interior studio. The layout should feel editorial and calm while keeping a clear conversion path from portfolio browsing to an enquiry form.

## Design decisions translated into code

| Design intent | Implementation |
| --- | --- |
| Editorial large typography | Fluid `clamp()` scales and serif display headings |
| Warm, restrained palette | SCSS variables + CSS custom properties |
| Spacious desktop composition | Bootstrap grid + custom max-width container |
| Mobile clarity | Mobile-first responsive rules and full-width CTAs |
| Visual project browsing | jQuery category filtering + Bootstrap modal |
| Compact FAQ interaction | Accessible jQuery accordion with `aria-expanded` |
| Clear enquiry path | Semantic form + browser constraint validation |
| Premium motion without accessibility cost | Short transitions + `prefers-reduced-motion` support |

## Handoff mindset

The code is organised so a designer or another developer can quickly identify:

- global design tokens;
- reusable spacing and typography rules;
- Bootstrap layout responsibilities;
- custom component styling;
- behaviour implemented with jQuery;
- SEO and accessibility details in the document head and markup.

## Why this case exists in the portfolio

The rest of the portfolio already demonstrates React and TypeScript application development. This repository demonstrates that the same frontend foundation can also be applied to agency-style website work where semantic HTML, CSS quality, design fidelity, SEO, performance and small JavaScript interactions matter more than application architecture.
