import { Theme } from "./theme.types";
import { token } from 'styled-theme-tokens';

const theme: Theme = {
  colors: {
    primary: {
      default: token('mode', {
        dark: '#502E2D',
        light: '',
      }),
    },
    secondary: {
      default: token('mode', {
        dark: '#EEAD53',
        light: '',
      }),
    },
    tertiary: {
      default: token('mode', {
        dark: '#EE5243',
        light: '',
      }),
    },
    quaternary: {
      default: token('mode', {
        dark: '#8CCAC1',
        light: '',
      }),
    },
    quinary: {
      default: token('mode', {
        dark: '#F4E6CC',
        light: '',
      }),
    },
    white: {
      default: token('mode', {
        dark: '#F4E6CC',
        light: '#F4E6CC',
      })
    }
  }
}

export default theme;