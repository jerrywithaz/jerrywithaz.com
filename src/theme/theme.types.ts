import { ThemeToken } from "styled-theme-tokens";

export type Theme = {
  colors: {
    primary: {
      default: ThemeToken<string>;
    }
    secondary: {
      default: ThemeToken<string>;
    };
    tertiary: {
      default: ThemeToken<string>;
    };
    quaternary: {
      default: ThemeToken<string>;
    };
    quinary: {
      default: ThemeToken<string>;
    }
  }
};