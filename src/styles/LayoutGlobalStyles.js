import { createGlobalStyle, css } from 'styled-components'
import { mobile as m, desktop as d, UNIT } from './spacing'

/** Fragmentos reutilizáveis em styled-components locais */
export const mobileSection = css`
  @media (max-width: ${m.breakpoint}) {
    padding-top: ${m.sectionY}px;
    padding-bottom: ${m.sectionY}px;
  }
`

export const mobileContainer = css`
  @media (max-width: ${m.breakpoint}) {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: ${m.containerX}px;
    padding-right: ${m.containerX}px;
    width: 100%;
    box-sizing: border-box;
  }
`

export const mobileBlock = css`
  @media (max-width: ${m.breakpoint}) {
    padding: ${m.blockPad}px;
    border-radius: ${m.blockRadius}px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    width: 100%;
  }
`

export const LayoutGlobalStyles = createGlobalStyle`
  /* ─── MOBILE (≤767px) ─── */
  @media (max-width: ${m.breakpoint}) {
    :root {
      --u: ${UNIT}px;
      --section-y: ${m.sectionY}px;
      --section-y-first: ${m.sectionYFirst}px;
      --container-x: ${m.containerX}px;
      --block-pad: ${m.blockPad}px;
      --block-radius: ${m.blockRadius}px;
      --title-mb: ${m.titleMb}px;
      --subtitle-mb: ${m.subtitleMb}px;
      --stack-gap: ${m.stackGap}px;
      --item-gap: ${m.itemGap}px;
      --row-gap: ${m.rowGap}px;
    }

    main[role="main"] > * {
      padding-top: var(--section-y) !important;
      padding-bottom: var(--section-y) !important;
      box-sizing: border-box;
    }

    main[role="main"] > *:first-child {
      padding-top: var(--section-y-first) !important;
    }

    main[role="main"] .container {
      max-width: 1200px !important;
      margin-left: auto !important;
      margin-right: auto !important;
      padding-left: var(--container-x) !important;
      padding-right: var(--container-x) !important;
      width: 100% !important;
      box-sizing: border-box !important;
    }

    main[role="main"] .blockblack {
      background: rgba(0, 0, 0, 0.8);
      border-radius: var(--block-radius);
      padding: var(--block-pad);
      border: 1px solid rgba(255, 255, 255, 0.1);
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      box-sizing: border-box;
    }

    main[role="main"] .blockblack .container {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    main[role="main"] h2,
    main[role="main"] h3,
    main[role="main"] h6 {
      margin-left: 0 !important;
      margin-top: 0 !important;
      margin-bottom: var(--title-mb) !important;
      text-align: center;
      font-size: clamp(18px, 4.8vw, 22px);
      line-height: 1.35;
    }

    main[role="main"] h5 {
      margin-top: 0 !important;
      margin-bottom: var(--item-gap) !important;
      text-align: center;
      font-size: 15px;
      line-height: 1.55;
      padding: 0 var(--item-gap);
    }

    main[role="main"] .events .download-info h5,
    main[role="main"] .events .download-action {
      margin-bottom: 0 !important;
      padding: 0 !important;
      text-align: left !important;
    }

    main[role="main"] .row {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

    main[role="main"] .row > [class*='col-'] {
      padding-left: 0 !important;
      padding-right: 0 !important;
      flex: 0 0 100%;
      max-width: 100%;
      margin-bottom: var(--stack-gap);
    }

    main[role="main"] .row > [class*='col-']:last-child {
      margin-bottom: 0;
    }

    main[role="main"] .img-responsive {
      display: block;
      max-width: 100%;
      height: auto;
      margin-top: 0 !important;
      margin-left: auto;
      margin-right: auto;
    }

    main[role="main"] iframe {
      max-width: 100%;
      border-radius: calc(var(--u) * 1);
    }

    main[role="main"] .fronttext {
      margin-bottom: var(--row-gap);
    }

    main[role="main"] .fronttext p {
      margin-top: 0;
      margin-bottom: var(--item-gap);
      line-height: 1.6;
    }

    main[role="main"] .fronttext p:last-child {
      margin-bottom: 0;
    }

    main[role="main"] .testimonials-grid,
    main[role="main"] .blog-list {
      gap: var(--stack-gap);
    }

    main[role="main"] .blog-item {
      margin-bottom: var(--stack-gap);
    }

    main[role="main"] .blog-item:last-child {
      margin-bottom: 0;
    }

    main[role="main"] .events ul li {
      margin-bottom: var(--item-gap);
    }

    main[role="main"] .faq-content {
      margin-top: 0 !important;
      width: 100%;
    }

    main[role="main"] .slick-slider {
      margin-bottom: var(--item-gap);
    }

    footer {
      margin-top: var(--section-y) !important;
    }
  }

  /* ─── DESKTOP (≥768px) ─── */
  @media (min-width: ${d.breakpoint}) {
    :root {
      --u: ${UNIT}px;
      --section-y: ${d.sectionY}px;
      --section-y-first: ${d.sectionYFirst}px;
      --container-x: ${d.containerX}px;
      --block-pad-y: ${d.blockPadY}px;
      --block-pad-x: ${d.blockPadX}px;
      --block-radius: ${d.blockRadius}px;
      --title-mb: ${d.titleMb}px;
      --subtitle-mb: ${d.subtitleMb}px;
      --stack-gap: ${d.stackGap}px;
      --item-gap: ${d.itemGap}px;
      --row-gap: ${d.rowGap}px;
      --grid-gap: ${d.gridGap}px;
    }

    main[role="main"] > * {
      padding-top: var(--section-y) !important;
      padding-bottom: var(--section-y) !important;
      box-sizing: border-box;
    }

    main[role="main"] > *:first-child {
      padding-top: var(--section-y-first) !important;
    }

    main[role="main"] .container {
      max-width: 1200px !important;
      margin-left: auto !important;
      margin-right: auto !important;
      padding-left: var(--container-x) !important;
      padding-right: var(--container-x) !important;
      width: 100% !important;
      box-sizing: border-box !important;
    }

    main[role="main"] .blockblack {
      background: rgba(0, 0, 0, 0.8);
      border-radius: var(--block-radius);
      padding: var(--block-pad-y) var(--block-pad-x);
      border: 1px solid rgba(255, 255, 255, 0.1);
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      box-sizing: border-box;
    }

    main[role="main"] .blockblack .container {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    main[role="main"] h2,
    main[role="main"] h6 {
      margin-top: 0;
      margin-bottom: var(--title-mb);
    }

    main[role="main"] h3 {
      margin-top: 0;
      margin-bottom: var(--title-mb);
    }

    main[role="main"] .testimonials-grid {
      gap: var(--grid-gap);
    }

    main[role="main"] .blog-list {
      gap: var(--stack-gap);
    }

    main[role="main"] .blog-item {
      margin-bottom: var(--stack-gap);
    }

    main[role="main"] .blog-item:last-child {
      margin-bottom: 0;
    }

    main[role="main"] .fronttext p {
      margin-bottom: var(--item-gap);
      line-height: 1.65;
    }

    main[role="main"] .fronttext p:last-child {
      margin-bottom: 0;
    }

    main[role="main"] .faq-content {
      margin-top: 0 !important;
    }

    footer {
      margin-top: var(--section-y) !important;
    }
  }
`
