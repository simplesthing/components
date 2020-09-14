import { oneLine } from 'common-tags'
import {
  bodyBg,
  borderRadiusBase,
  OpenSans,
  fontSizeBase,
  h1Size,
  h2Size,
  h3Size,
  h4Size,
  h5Size,
  h6Size,
  lineHeight,
  linkColor,
  linkHoverColor,
  SmallBreak,
  XSmallBreak,
  textColor,
  textColorMuted,
  titleLineHeight
} from './variables'

const base = oneLine`
  /* http://meyerweb.com/eric/tools/css/reset/ 
     v2.0 | 20110126
     License: none (public domain)
  */
  
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
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
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
  
  /* Basscss Basic */
  
  img {
    max-width: 100%;
    height: auto;
  }

  svg {
    max-height: 100%;
  }
  
  code,
  pre,
  samp {
  font-family:
    'Roboto Mono',
    'Source Code Pro',
    Menlo,
    Consolas,
    'Liberation Mono',
    monospace;
  }
  
  code, samp {
    font-size: 87.5%;
    padding: .125em;
  }
  
  pre {
    font-size: 87.5%;
    overflow: scroll;
  }
    
  /* Sansar */
  
  #app {
    width: 100%;
    height: 100%;
  }
  
  * {
    box-sizing: border-box;
    outline-color: transparent;
    outline-width: 0px;
  }
  
  html, button, input {
    font-family: ${ OpenSans };
  }
  
  html, body {
    font-size: ${ fontSizeBase };
    height: 100%;
  }
  
  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background: ${ bodyBg };
    color: ${ textColor };
    font-family: ${ OpenSans };
    height: 100%;
    left: 0;
    line-height: ${ lineHeight };
    margin: 0;
    overflow-x: hidden;
    position: relative;
  }
  
  div {
    vertical-align: middle;
  }
  
  a {
    color: ${ linkColor };
    text-decoration: none;
    cursor: pointer;
  }
  
  a:hover, a:focus {
    color: ${ linkHoverColor };
  }
  
  h1 { font-size: ${ h1Size }; }
  h2 { font-size: ${ h2Size }; }
  h3 { font-size: ${ h3Size }; }
  h4 { font-size: ${ h4Size }; }
  h5 { font-size: ${ h5Size }; }
  h6 { font-size: ${ h6Size }; }
  
  h1,h2,h3,h4,h5,h6 {
    margin-bottom: 1rem;
    line-height: ${ titleLineHeight };
    font-weight: 700;
  }
  
  p { margin: 0 0 1rem; }
  
  strong { font-weight: bold; }

  em { font-style: italic; }
  
  tt, code, kbd, samp {
    font-family: monospace;
  }
  
  hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0;
  }
  
  input::-ms-clear {
      display: none;
  }
  
  .clearfix:before, .clearfix:after {
    content: "";
    display: table;
  }

  .clearfix:after {
    clear: both;
  }
  
  /**
  * A class for providing accessibility readers what they need to read hidden elements
  * https://developer.yahoo.com/blogs/ydn/clip-hidden-content-better-accessibility-53456.html
  */
  .visuallyHidden {
    position: absolute !important;
    clip: rect(1px, 1px, 1px, 1px);
    padding:0 !important;
    border:0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden;
  }
  
  body:hover .visuallyHidden a, body:hover .visuallyHidden input,
  body:hover .visuallyHidden button {
    display: none !important;
  }
  
  .nowrap { white-space: nowrap; }
  
  .desktop-only, .desktop-navbar {
    display: block;
  }

  .mobile-only, .mobile-navbar {
    display: none;
  }

  .truncate {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .muted {
    color: ${ textColorMuted };
  }
  
  .modalOverlay {
    background:  rgba(0, 0, 0, 0.5);
    bottom: 0px;
    height: 100%;
    left: 0px;
    position: fixed;
    right: 0px;
    text-align: center;
    top: 0px;
    width: 100%;
    z-index: 99999;
  }
  
  .modalOverlay:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
  
  .modal {
    background: rgb(255, 255, 255);
    border-radius: ${ borderRadiusBase };
    border: 1px solid rgb(204, 204, 204);
    box-shadow: 1px 0 30px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    display: inline-block;
    left: 50%;
    max-width: 600px;
    outline: 0;
    overflow: auto;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) !important;
    vertical-align: middle;
    width: 100%;
  }
  
  @media screen and (max-width: ${ SmallBreak }) {
    .desktop-only {
      display: none;
    }

    .mobile-only {
      display: block;
    }
  }

  
  @media screen and (max-width: ${ SmallBreak }) {
    h1 { font-size: ${ h2Size }; }
    h2 { font-size: ${ h3Size }; }
    h3 { font-size: ${ h4Size }; }
    h4 { font-size: ${ h5Size }; }
    h5 { font-size: ${ h6Size }; }
  }

  @media screen and (max-width: ${ XSmallBreak }) {
    h1 { font-size: ${ h3Size }; }
    h2 { font-size: ${ h4Size }; }
    h3 { font-size: ${ h5Size }; }
  }
  
`

export default base
