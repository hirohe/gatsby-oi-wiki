import createPalette from '@material-ui/core/styles/createPalette'
import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'
import { createMuiTheme, withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const globalStyles = withStyles((theme) => ({
  '@global': {
    a: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'none',
      },
    },
    blockquote: {
      paddingLeft: '1em',
      margin: '1em 3em 1em 2em',
      borderLeft: `4px solid ${theme.palette.blockquote}`,
    },
    code: {
      padding: '2px 4px',
      'border-radius': '2px',
      'font-size': '90%',
      // color: theme.palette.inlineCode.color,
      // backgroundColor: theme.palette.inlineCode.background,
    },
    'pre code': {
      'font-size': '100%',
      padding: '0.2em 0',
      // backgroundColor: '#1E1E1E',
    },
  },
}))

function CustomCssEl () {
  return null
}

CustomCssEl.propTypes = { classes: PropTypes.object.isRequired }
export const CustomCssBaseline = globalStyles(CustomCssEl)

const lightColor = createPalette({ type: 'light' })
const darkColor = createPalette({ type: 'dark' })
const paletteKeys = [
  'primary', 'secondary', 'text', 'background', 'action',
  'error', 'warning', 'info', 'success', 'grey']

// Workaround for material-ui color.
function htr (hex) {
  let c
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = '0x' + c.join('')
    return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1'
  }
  if (hex.startsWith('rgba')) {
    return hex.slice(5, -1)
  }
  throw new Error('Bad Hex ' + hex)
}

function applyDefaults (theme, ...keys) {
  const k = {}
  function applyDefault (key) {
    for (const el of Object.keys(theme[key])) {
      if (/^(#|rgba)/.test(`${theme[key][el]}`)) {
        k[`--${key}-${el}`] = htr(theme[key][el].toString())
      }
    }
  }
  keys.forEach(applyDefault)
  return k
}

const lightCss = withStyles(() => ({
  '@global': {
    ':root': {
      '--primary-color': htr(lightColor.primary.main),
      '--footer-bg': htr(grey[200]),
      '--footer-text': htr(grey[700]),
      '--details-border': htr(blue[500]),
      '--details-main': htr(blue[50]),
      '--blockquote': '255, 255, 255, .12',
      '--inline-color': '#37474f',
      '--inline-bg-hsla': 'hsla(0,0%,85%,.5)',
      '--search-bg': htr(grey[100]),
      '--search-highlight': '#174d8c',
      '--tab-hover': htr('#000'),
      '--divider': htr(lightColor.divider),
      ...applyDefaults(lightColor, ...paletteKeys),
    },
  },
}))

const darkCss = withStyles(() => ({
  '@global': {
    ':root': {
      '--primary-color': htr(darkColor.primary.main),
      '--paper-color': htr(darkColor.background.paper),
      '--bg-color': htr(darkColor.background.default),
      '--footer-bg': htr(grey[900]),
      '--footer-text': htr(grey[300]),
      '--details-border': htr(blue[500]),
      '--details-main': htr(blue[700]),
      '--blockquote': '255, 255, 255, .12',
      '--inline-color': htr(grey[100]),
      '--inline-bg-hsla': 'hsla(0,0%,85%,.5)',
      '--search-bg': htr(grey[700]),
      '--search-highlight': '#acccf1',
      '--tab-hover': htr('#fff'),
      '--divider': htr(darkColor.divider),
      ...applyDefaults(darkColor, ...paletteKeys),
    },
  },
}))

function getThemeCssEl (style) {
  function ThemeCssEl () {
    return null
  }
  ThemeCssEl.propTypes = { classes: PropTypes.object.isRequired }
  return style(ThemeCssEl)
}

export const LightCssBaseline = getThemeCssEl(lightCss)
export const DarkCssBaseline = getThemeCssEl(darkCss)

function applyAdaptives (...keys) {
  const rst = {}
  function applyAdaptive (key) {
    const k = {}
    for (const el of Object.keys(lightColor[key])) {
      k[el] = /^(#|rgba)/.test(`${lightColor[key][el]}`)
        ? `rgba(var(--${key}-${el}))`
        : lightColor[key][el]
    }
    rst[key] = k
  }
  keys.forEach(applyAdaptive)
  return rst
}

const adaptiveTheme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(var(--primary-color))',
    },
    ...applyAdaptives(...paletteKeys),
    footer: {
      background: 'rgba(var(--footer-bg))',
      text: 'rgba(var(--footer-text))',
    },
    details: {
      border: 'rgba(var(--details-border))',
      main: 'rgba(var(--details-main))',
    },
    blockquote: 'rgba(var(--blockqoute))',
    inlineCode: {
      color: 'rgba(var(--inline-color))',
      background: 'var(--inline-bg-hsla)',
    },
    search: {
      messageBackground: 'rgba(var(--search-bg))',
      highlight: 'rgba(var(--search-highlight))',
    },
    tab: {
      colorOnHover: 'rgba(var(--tab-hover))',
    },
    divider: 'rgba(var(--divider))',
  },
})

export { adaptiveTheme }
