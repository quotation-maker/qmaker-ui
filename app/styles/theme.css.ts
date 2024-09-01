import { createThemeContract, createGlobalTheme } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {},
  font: {},
});

createGlobalTheme(':root', vars, {
  color: {},
  font: {},
});
