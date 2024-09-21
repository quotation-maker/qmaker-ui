import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  fontSize: '16px',
  padding: 0,
  margin: 0,
});

globalStyle('html', {
  margin: 0,
  width: '100%',
  height: '100%',
  minHeight: '100dvh',
});

globalStyle('body', {
  top: 0,
  height: '100%',
  minHeight: '100dvh',
  background: vars.color.background,
  overflowX: 'hidden',
  position: 'relative',
});

globalStyle('body::before', {
  position: 'absolute',
  content: '',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1000,
  background: 'url("/images/background.jpg") no-repeat center / 100% 100%',
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
