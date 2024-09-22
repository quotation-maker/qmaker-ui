import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';
import { $breakpoints } from '@styles/utils';

const formContainer = style({
  minWidth: '100%',
  minHeight: '30vh',
  padding: '2rem',
});

const section = style({
  ...vars.blurPanel,
  ...vars.section.mobile,
  marginTop: '1rem',
  '@media': {
    [$breakpoints.tablet]: {
      padding: 0,
      rowGap: '1.5rem',
      ...vars.section.tablet,
      marginTop: '2rem',
    },
    [$breakpoints.laptop]: {
      flexDirection: 'row',
      ...vars.section.laptop,
      marginTop: '4rem',
    },
    [$breakpoints.desktop]: {
      ...vars.section.desktop,
      marginTop: '4rem',
    },
  },
});

const primaryButton = style({
  backgroundColor: vars.color.primary,
  color: vars.color.pureWhite,
  padding: '0.5rem 1rem',
  marginLeft: '1rem',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: vars.color.primaryLight,
  },
});

const buttonArea = style({
  display: 'flex',
  justifyContent: 'right',
  marginTop: '1rem',
});

const textInput = style({
  ...vars.typography.body.M,
  width: '100%',
  padding: '0.5rem',
});

const styles = {
  formContainer,
  section,
  primaryButton,
  buttonArea,
  textInput,
};

export default styles;
