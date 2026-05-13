# SoS2LearnDBS â€” Web prototype

A minimalistic, static HTML/CSS/JS prototype of the **SoS2LearnDBS** digital platform
(community-led restoration of the Danube basin and the Black Sea).

## How to open

Just double-click `index.html`. Everything is local â€” no server or build step required.
Modern Chrome, Firefox, Edge or Safari recommended.

> Tip: if Google Fonts do not load (offline), the design still works with the
> system font stack.

## File map

```
SOS2LearnDBS/
â”œâ”€â”€ index.html              # Home
â”œâ”€â”€ learn.html              # Learn (tabs: modules/quizzes/games/simulations/tutorials)
â”œâ”€â”€ module-detail.html      # Module detail + inline quiz
â”œâ”€â”€ resources.html          # Open resource library
â”œâ”€â”€ resource-detail.html    # Single resource view
â”œâ”€â”€ community.html          # Campaigns, news, events, announcements, feedback
â”œâ”€â”€ campaign-detail.html    # Campaign page with Join CTA
â”œâ”€â”€ dashboard.html          # Public dashboard (KPIs, map, charts)
â”œâ”€â”€ login.html              # Authentication
â”œâ”€â”€ register.html           # Sign up
â”œâ”€â”€ my-space.html           # User dashboard (auth area)
â”œâ”€â”€ badges.html             # Badges + leaderboard
â”œâ”€â”€ admin.html              # Admin overview
â”œâ”€â”€ admin-content.html      # Admin content manager (table + filters)
â”œâ”€â”€ admin-analytics.html    # Admin analytics
â””â”€â”€ assets/
    â”œâ”€â”€ css/styles.css      # Full design system
    â”œâ”€â”€ js/main.js          # Tabs, quiz engine, mobile menu, counters
    â””â”€â”€ img/logos/Logo.jpeg  # Brand mark
```

## Design direction

- **Palette:** Danube blue (#0E4C7A), Azure (#2B8FCB), Teal (#2AA39A),
  Sand (#E8D9B6), Stone (#F4F1EA).
- **Typography:** Inter, weights 400â€“700.
- **Components:** cards, chips, tabs, progress bars, KPI tiles, badges,
  admin table, charts, map placeholder.
- **Accessibility:** skip link, visible focus ring, keyboard-friendly tabs,
  semantic landmarks, `prefers-reduced-motion` respected.
- **Responsive:** works down to ~360 px. Navigation collapses to a hamburger menu.

## Suggested demo flow

1. `index.html` â†’ click **Start learning**
2. `learn.html` â†’ click any module card
3. `module-detail.html` â†’ scroll to the quiz, answer the 3 questions
4. `index.html` â†’ click **Join the community** â†’ `community.html` â†’ open a campaign
5. `dashboard.html` â†’ see the public indicators
6. `register.html` â†’ fake sign up â†’ `my-space.html`
7. `admin.html` â†’ navigate to **Resources & Modules** and **Analytics**

## Notes

- This is a **design prototype**. Forms do not submit, search does not query,
  and data is illustrative. All interactive behaviour is client-side only.
- Ready to be ported to a Next.js / Tailwind implementation following the
  specification in `SoS2LearnDBS_Design_Proposal.pdf`.


