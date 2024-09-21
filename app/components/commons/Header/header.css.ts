import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';
import { $breakpoints } from '@styles/utils';

const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 5000,
  padding: '1rem',
  color: vars.color.offWhite,
  background: 'rgba(225,225,225,0.1)',
  backdropFilter: 'blur(10px)',
  '@media': {
    [$breakpoints.tablet]: {},
    [$breakpoints.laptop]: {},
  },
});

const styles = {
  header,
};

export default styles;
