import { theme as coreTheme } from '@chakra-ui/core';

export const theme = {
  ...coreTheme,
  colors: {
    ...coreTheme.colors,
    beige: '#F2F0EA',
    border: '#C6BFB9',
    heading: '#0F1112',
    body: '#0F1112',
    accent: '#277FB2',
    footer: '#282624',
  },
  fonts: {
    ...coreTheme.fonts,
    heading: 'Vollkorn, "Times New Roman"',
    body: 'Raleway, Helvetica, Arial',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '36px',
    '5xl': '48px',
    '6xl': '64px',
  },
};
