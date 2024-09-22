import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';
import { $breakpoints } from '@styles/utils';

const introduce = style({
  color: vars.color.offBlack,
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center',
  ...vars.section.mobile,
  marginTop: '5rem',
  '@media': {
    [$breakpoints.tablet]: {
      ...vars.section.tablet,
      paddingTop: '2rem',
      marginTop: '6rem',
    },
    [$breakpoints.laptop]: {
      ...vars.section.laptop,
      paddingTop: '3rem',
      marginTop: '10rem',
    },
    [$breakpoints.desktop]: {
      ...vars.section.desktop,
      marginTop: '10rem',
    },
  },
});

const heading2 = style({
  textAlign: 'center',
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
  content: '',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: -1000,
  height: '164px',
  '@media': {
    [$breakpoints.tablet]: {
      top: '1rem',
      height: '200px',
    },
    [$breakpoints.laptop]: {
      top: '1.25rem',
      height: '252px',
    },
  },
});

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
  heading2,
  drawing,
  highlightColor,
  paragraph,
};

export default styles;
