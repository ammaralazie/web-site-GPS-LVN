import colors from 'vuetify/lib/util/colors'

let darkMode = true
if (typeof Storage !== 'undefined') { // eslint-disable-line
  darkMode = localStorage.getItem('awroraDarkMode') || false
}

const palette = {
  mint: {
    primary: colors.lightBlue.base, // primary main
    primarylight: colors.lightBlue.lighten4, // primary light
    primarydark: colors.lightBlue.darken4, // primary dark
    secondary: colors.green.base, // secondary main
    secondarylight: colors.green.lighten4, // secondary light
    secondarydark: colors.green.darken3, // secondary dark
    accent: colors.cyan.base, // accent main
    accentlight: colors.cyan.lighten4, // accent light
    accentdark: colors.cyan.darken3, // accent dark
    anchor: colors.lightBlue.base, // link
    purple: '#b159da',
    amber: '#f2b02f'
  },
}

export const theme = {
  ...palette.mint
}


export default {
  rtl: false,
  theme: {
    dark: darkMode === 'true',
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  }
}
