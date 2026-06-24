# SoS2LearnDBS — Web prototype

A minimalistic, static HTML/CSS/JS prototype of the **SoS2LearnDBS** digital platform
(community-led restoration of the Danube basin and the Black Sea).

## How to open

Just double-click `index.html`. Everything is local — no server or build step required.
Modern Chrome, Firefox, Edge or Safari recommended.

> Tip: if Google Fonts do not load (offline), the design still works with the
> system font stack.

## File map

```
SOS2LearnDBS/
├── index.html              # Home
├── learn.html              # Learn (tabs: modules/quizzes/games/simulations/tutorials)
├── module-detail.html      # Module detail + inline quiz
├── resources.html          # Open resource library
├── resource-detail.html    # Single resource view
├── community.html          # Campaigns, news, events, announcements, feedback
├── campaign-detail.html    # Campaign page with Join CTA
├── dashboard.html          # Public dashboard (KPIs, map, charts)
├── login.html              # Authentication
├── register.html           # Sign up
├── my-space.html           # User dashboard (auth area)
├── badges.html             # Badges + leaderboard
├── admin.html              # Admin overview
├── admin-content.html      # Admin content manager (table + filters)
├── admin-analytics.html    # Admin analytics
└── assets/
    ├── css/styles.css      # Full design system
    ├── js/main.js          # Tabs, quiz engine, mobile menu, counters
    └── img/logos/Logo.png   # Brand mark
```

## Design direction

- **Palette:** Danube blue (#123b64), Azure (#72cef7), Earth (#b96e3b),
  Sand (#d8c5a7), Stone (#f4ede2).
- **Typography:** Ubuntu on the web, with Calibri-aligned fallback support.
- **Components:** cards, chips, tabs, progress bars, KPI tiles, badges,
  admin table, charts, map placeholder.
- **Accessibility:** skip link, visible focus ring, keyboard-friendly tabs,
  semantic landmarks, `prefers-reduced-motion` respected.
- **Responsive:** works down to ~360 px. Navigation collapses to a hamburger menu.

## Suggested demo flow

1. `index.html` → click **Start learning**
2. `learn.html` → click any module card
3. `module-detail.html` → scroll to the quiz, answer the 3 questions
4. `index.html` → click **Join the community** → `community.html` → open a campaign
5. `dashboard.html` → see the public indicators
6. `register.html` → fake sign up → `my-space.html`
7. `admin.html` → navigate to **Resources & Modules** and **Analytics**

## Notes

- This is a **design prototype**. Forms do not submit, search does not query,
  and data is illustrative. All interactive behaviour is client-side only.
- Ready to be ported to a Next.js / Tailwind implementation following the
  specification in `SoS2LearnDBS_Design_Proposal.pdf`.


