import { style } from '@vanilla-extract/css';
import { vars } from '@/app/styles/theme.css';

const logo = style({
  position: 'absolute',
});

const logoWrapper = style({
  width: '100px',
  height: '100px',
  position: 'relative',
});

const logoText = style({
  position: 'absolute',
  ...vars.typography.heading.M,
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
});

export const styles = {
  logo,
  logoWrapper,
  logoText,
};
