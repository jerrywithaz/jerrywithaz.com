import { Theme } from "./theme.types";
import { token } from 'styled-theme-tokens';

const theme: Theme = {
  colors: {
    primary: {
      default: token('mode', {
        dark: '#231716',
        light: '',
      }),
    },
    secondary: {
      default: token('mode', {
        dark: '#231716',
        light: '',
      }),
    },
    tertiary: {
      default: token('mode', {
        dark: '#231716',
        light: '',
      }),
    },
    quaternary: {
      default: token('mode', {
        dark: '#231716',
        light: '',
      }),
    },
    quinary: {
      default: token('mode', {
        dark: '#231716',
        light: '',
      }),
    }
  }
}

export default theme;