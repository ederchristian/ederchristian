import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */
  html, body {
    font-size: 62.5%;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
    color: var(--postColor);
    border-left: 0.4rem solid var(--highlight);
    margin: 3rem auto;
    padding: 0 1.875rem;
    font-size: 1.4rem;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    background: var(--background);
    line-height: 1.4;
    --fontInter: 'Inter', sans-serif;
    font-family: var(--fontInter);

    & .mainText {
      fill: #30284f;
    }

    &.dark .mainText {
      fill: #fff;
    }
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }

  body.light {
    --borders: #dedede;
    --postColor: #111;
    --texts: #555555;
    --highlight: #00d59f;
    --mediumBackground: #f0f0f3;
    --background: #fff;
    --white: #fff;
    --black: #222;
    --shadow: 85, 85, 85;
  }
  body.dark {
    --borders: #38444d;
    --postColor: #f9f9f9;
    --texts: #fff;
    --highlight: #00d59f;
    --mediumBackground: #161c23;
    --background: #0e1218;
    --white: #fff;
    --black: #222;
    --shadow: 255, 255, 255;
  }
`

export default GlobalStyles
