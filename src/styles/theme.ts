export const emotionTheme = {
  colors: {
    gray: '#808080',
    white: '#fff',
    black: '#000',
    blue: '#0040E5',
  },
  fontSizes: {
    sm: '10px',
    md: '12px',
    lg: '14px',
    xl: '18px',
    xxl: '32px',
  }
}

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      gray: string;
      white: string;
      black: string;
      blue: string;
    },
    fontSizes: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    }
  }
}