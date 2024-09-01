import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  fontSize: '16px',
  padding: 0,
  margin: 0,
});

globalStyle('html', {
  margin: 0,
  width: '100%',
  minHeight: '100dvh',
});

globalStyle('body', {
  minHeight: '100dvh',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('li', {
  listStyle: 'none',
});

globalStyle('button', {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
});

globalStyle('p, h1, h2, h3, h4, h5', {
  margin: 0,
});
