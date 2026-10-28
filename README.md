# Shirenos.github.io

Personal card website of [Shiren](https://github.com/Shirenos), published with GitHub Pages at
**https://shirenos.github.io/**.

> The site's user interface is in Russian.

## What's on the page

- Intro with a typing effect ("Hi, I'm Shiren") and an animated aurora background
- About me, projects (a Telegram habit tracker bot, the interactive 3D [Universe](https://shirenos.github.io/universe/) site and [ml-from-scratch](https://github.com/Shirenos/ml-from-scratch), classic ML algorithms in plain NumPy), skills and contacts
- Glassmorphism cards, scroll-reveal animations, keyboard-friendly navigation
- Respects `prefers-reduced-motion`

## Tech

Plain HTML, CSS and a small dependency-free JavaScript file — no build step. The `.nojekyll` file
tells GitHub Pages to serve the files as they are.

## Run locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000/
```
