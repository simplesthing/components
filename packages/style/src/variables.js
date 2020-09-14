import { rgba, modularScale, rem, stripUnit, darken } from 'polished'

// COLORS
export const base = "#313131"
export const accent1 = "#ff3305" //orange
export const accent2 = "#92D985" //green
export const accent3 = "#6B4A5C" //mauve
export const neutral = "#d8c9c5"


export const brandPrimary            = accent1  // default button and UI accent color
export const brandWarning            = '#ffbb00' //yellow
export const brandError              = darken(.05, '#f03') //red
export const brandSuccess            = accent2

export const bodyBg                  = neutral
export const bodyBgInverted          = base

export const textColor               = base
export const textColorMuted          = rgba(base, 0.5)
export const textColorInverted       = neutral
export const textColorInvertedMuted  = rgba(neutral, 0.45)


export const linkColor         = brandPrimary
export const linkHoverColor = darken(.15, brandPrimary)


//FONTS
/* Google font embed 
  <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Open+Sans:ital,wght@0,300;0,400;1,700&display=swap" rel="stylesheet"> 
*/

export const Bree   = "'Bree Serif', serif"
export const OpenSans = "'Open Sans', sans-serif"

export const fontSizeBase = '16px'

// Font ratio: perfect forth (1.333)
export const h1Size = `${ stripUnit(modularScale(5)) }rem`
export const h2Size = `${ stripUnit(modularScale(4)) }rem`
export const h3Size = `${ stripUnit(modularScale(3)) }rem`
export const h4Size = `${ stripUnit(modularScale(2)) }rem`
export const h5Size = `${ stripUnit(modularScale(1)) }rem`
export const h6Size = `${ stripUnit(modularScale(0)) }rem`

export const fontSizeXs = rem('13px')
export const fontSizeSm = rem('14px')
export const fontSizeLg = rem('18px')
export const fontSizeXl = rem('22px')

export const lineHeight = '1.75'
export const titleLineHeight = '1.1'

export const marginBase     = '16px' // Greatest common divisor of X and Y 
export const wideMarginBase = '24px'
export const marginX        = '32px'
export const halfMarginX    = '16px'
export const marginY        = '48px'
export const halfMarginY    = '24px'

export const borderColor              =  darken(.2, base)
export const borderColorInverted      =  accent3
export const borderRadiusBase         = '4px'
export const inputBorderRadius        = '2px'
export const inputBorderColor         = borderColor
export const inputBorderColorInverted = borderColorInverted
export const placeholderColor         = rgba('#000', 0.35)
export const inputSizeSm              = '32px'
export const inputSizeMd              = '42px'
export const inputSizelg              = '52px'
export const inputBg                  = '#fff'
export const searchInputBg            = '#eee'

export const popupOverlayBg = rgba('#000', 0.5)
export const popupBg = '#fff'


export const XLargeBreak = '1440px'
export const LargeBreak = '1200px'
export const MediumBreak = '1024px'
export const SmallBreak = '800px'
export const XSmallBreak = '375px'

export const maxWidthXLarge = '1440px' // 1920 and above
export const maxWidthLarge = '1140px' // 1200 - 1440
export const maxWidthMedium = '960px' // 1024 - 1200
export const maxWidthSmall = '760px' // 800 - 1024
export const maxWidthXSmall = "300px" // below 375 
