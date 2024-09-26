import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';
import { $breakpoints } from '@styles/utils';

const introduce = style({
  position: 'relative',
  color: vars.color.onyx,
  ...vars.panel.L,
  margin: '0 auto',
  padding: '1rem',
  width: '90%',
  marginTop: '6rem',
  '@media': {
    [$breakpoints.tablet]: {
      margin: '6rem auto 0',
      padding: '1rem 2rem',
      width: '444px',
      '::before': {
        position: 'absolute',
        content: '',
        top: '30px',
        left: '-120px',
        width: '100px',
        height: '100%',
        zIndex: -1000,
        background: 'url("/icons/arrow.svg") no-repeat center / 100% 100%',
        transform: 'scaleX(-1)',
      },
    },
    [$breakpoints.laptop]: {
      margin: '10rem auto 0',
      padding: '1rem 2rem',
      width: '576px',
      '::before': {
        left: '-180px',
        width: '150px',
      },
    },
  },
});

const rightNow = style({
  position: 'absolute',
  content: '',
  top: '-30px',
  left: '9px',
  ...vars.panel.S,
  background: vars.color['yellow-100'],
  padding: '6px 12px',
  ...vars.typography.heading.M,
  '@media': {
    [$breakpoints.tablet]: {
      padding: '8px 18px',
      top: '-50px',
      left: '20px',
      ...vars.typography.heading.L,
    },
  },
});

const heading2 = style({
  position: 'relative',
  whiteSpace: 'pre-wrap',
  ...vars.typography.heading.L,
  '@media': {
    [$breakpoints.tablet]: {
      ...vars.typography.heading.XL,
    },
    [$breakpoints.laptop]: {
      ...vars.typography.heading.XXL,
    },
  },
});

const drawing = style({
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: '80px',
  '@media': {
    [$breakpoints.tablet]: {
      width: '100px',
    },
    [$breakpoints.laptop]: {
      width: '120px',
    },
  },
});

const arrowDrawing = style({});

const highlightColor = style({
  ...vars.typography.heading.L,
  color: vars.color.primary,
  '@media': {
    [$breakpoints.tablet]: {
      ...vars.typography.heading.XL,
    },
    [$breakpoints.laptop]: {
      ...vars.typography.heading.XXL,
    },
  },
});

const paragraph = style({
  marginTop: '2rem',
  textAlign: 'center',
  color: vars.color.gray,
  whiteSpace: 'pre-wrap',
  ...vars.typography.body.S,
  '@media': {
    [$breakpoints.tablet]: {
      ...vars.typography.body.M,
    },
  },
});

const styles = {
  introduce,
  rightNow,
  heading2,
  drawing,
  arrowDrawing,
  highlightColor,
  paragraph,
};

export default styles;
