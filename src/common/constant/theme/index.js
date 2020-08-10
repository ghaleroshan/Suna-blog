import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { COLORS } from '../colors';

export const THEME = {
  font: {
    defaultColor: COLORS.black,
    defaultLineHeight: '1.5',
    defaultFontSize: '14px',
    fontFamily: "'Lato', sans-serif",
    headingFontFamily: "'Lato', sans-serif",
    weight: {
      thin: 100,
      normal: 300,
      bold: 400,
      extraBold: 700,
    },
  },
};

export const BREAKPOINTS = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xlg: '1200px',
};

export const CONTAINER_WIDTH = {
  sm: '540px',
  md: '720px',
  lg: '960px',
  xlg: '1200px',
};

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap'); 
  body {
    padding: 0;
    margin: 0;
  }
`;
