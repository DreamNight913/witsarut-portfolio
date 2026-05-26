---
version: "alpha"
name: "Employment-first UX/UI Portfolio"
description: "A Thai UX/UI designer portfolio identity built for full-time hiring decisions while remaining ready for freelance project inquiries."
colors:
  ink: "#111110"
  text: "#F7F7F2"
  muted: "#B8B3AA"
  accent: "#D86645"
  accent-dark: "#B84F34"
  warm-surface: "#F3EFE7"
  warm-surface-strong: "#E7DDCF"
typography:
  h1:
    fontFamily: "Kanit"
    fontSize: "4.55rem"
    fontWeight: 600
    lineHeight: 1.22
    letterSpacing: "0"
  h2:
    fontFamily: "Kanit"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0"
  body:
    fontFamily: "Kanit"
    fontSize: "1rem"
    fontWeight: 300
    lineHeight: 1.75
    letterSpacing: "0"
  label:
    fontFamily: "Kanit"
    fontSize: "0.84rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0"
rounded:
  sm: "4px"
  md: "8px"
spacing:
  base: "8px"
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  wide-gap: "88px"
  section: "96px"
  page-x: "clamp(24px, 5vw, 96px)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    height: "56px"
    padding: "16px 24px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    height: "56px"
    padding: "16px 24px"
  project-card:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  featured-case:
    backgroundColor: "rgba(255,255,255,0.54)"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    layout: "editorial split"
  case-detail:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.text}"
    layout: "narrow narrative with timeline blocks"
  hero-image:
    backgroundColor: "#C9A47C"
    rounded: "0"
  preview-tile:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    size: "56px desktop / 48px mobile rail"
---

## Overview

Employment-first, freelance-ready portfolio. The identity should help recruiters and hiring managers understand role fit quickly, then give freelance clients a secondary but clear path for project inquiries. The main proof points are three project showcases: MeVote Government Voting System, Hospital Patient WebView & Queue Kiosk, and Singer Membership CRM. Together they demonstrate requirement analysis, workflow thinking, UX/UI structure, graphic judgment, and developer handoff.

## Colors

The palette uses a near-black stage with warm white typography, then clay orange as the only strong interaction color. Warm surfaces appear after the hero to make project content easier to scan and to keep the page from becoming a one-note dark portfolio.

## Typography

Use Kanit for every visible text element. Headlines are large and confident but should avoid excessive weight; use 600-700 for headings, 500-700 for controls and metadata, and 300-400 for body copy. Letter spacing stays at 0 so Thai glyphs remain natural and polished.

## 8-Point Grid

Use an 8px base unit for layout decisions. Spacing, gaps, card padding, section rhythm, mockup insets, button padding, and fixed navigation sizing should resolve to 8px increments: 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 96, and 128. Use 4px only for optical details such as small radius and focus offset.

The page rhythm is: compact controls at 8-16px, content groups at 24-32px, section transitions at 72-96px, and large editorial breathing room at 96px. Typography can use responsive type scales, but the space around typography must stay on-grid.

UX/UI writing follows the same rhythm. Keep each section headline short, put the clarifying subcopy directly under the headline, then use structured labels for scan points. Avoid repeating the same idea across sections; each block should answer one hiring/client question.

## Layout

The hero follows a three-part composition: role-focused copy, a large portrait, and a vertical rail of capability tiles. Desktop should feel editorial and spacious. Mobile should stack content in reading order: role, headline, value line, CTAs, portrait, then capability tiles.

Below the hero, the page should prioritize hiring comprehension: snapshot, three project showcase sections, How I Work, Capabilities, and final contact. Section 2 is MeVote Government Voting System, Section 3 is Hospital Patient WebView & Queue Kiosk, and Section 4 is Singer Membership CRM. Each project uses the same showcase system but different narrative emphasis and mock image placement so the work feels consistent without becoming repetitive.

The MeVote detail page should use a focused narrative layout with overview, challenge, process timeline, handoff deliverables, reflection, and contact.

## Shapes

Buttons, project cards, and preview tiles use an 8px maximum radius. The portrait stays square-edged to match the reference image and keep the composition more gallery-like than app-like.

## Components

Primary buttons use clay orange with white text. Secondary buttons are outlined on dark backgrounds. Project showcase modules are summary-first, with context, challenge, role, process, outcome, deliverables, tags, and a mock image area visible for quick scanning. The case detail page uses timeline blocks to show how a brief becomes workflow, screen flow, UX/UI, and handoff. The fixed preview rail anchors navigation: Home, MeVote, Hospital, Singer, Process, Skills, and Contact.

## Motion

Motion should feel smooth and editorial: short rise/fade entrances, gentle hover lift, and soft image scale. Keep easing natural and respect `prefers-reduced-motion`.

## Do's and Don'ts

Do keep contrast high, copy direct, and layouts stable across desktop and mobile. Do use the 8-point grid, warm photography, practical role labels, recruiter-friendly metadata, and concise outcomes. Do place supporting text under its headline when the section is project-led. Do not add off-grid spacing, gradient blobs, purple-blue palettes, decorative SVG hero art, oversized rounded cards, or vague self-promotional copy.
