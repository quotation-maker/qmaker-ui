import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';
import { $breakpoints } from '@styles/utils';

const container = style({
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-between',
  rowGap: '1rem',
  ...vars.section.mobile,
  width: '90%',
  marginTop: '1rem',
  '@media': {
    [$breakpoints.tablet]: {
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

const item = style({
  display: 'flex',
  flexFlow: 'column nowrap',
  ...vars.panel.S,
  background: vars.color.pureWhite,
});

const card = style({
  display: 'flex',
  flexFlow: 'row nowrap',
  background: 'transparent',
  boxShadow: 'none',
  alignItems: 'center',
  columnGap: '1rem',
  padding: '0 0.5rem',
  '@media': {
    [$breakpoints.tablet]: {
      padding: '0 0.75rem',
    },
    [$breakpoints.laptop]: {
      flexFlow: 'column nowrap',
    },
  },
});

const top = style({
  height: '14px',
  background: vars.color['orange-100'],
  borderBottom: `2px solid ${vars.color.onyx}`,
  position: 'relative',
  '@media': {
    [$breakpoints.tablet]: {
      height: '21px',
    },
    [$breakpoints.laptop]: {
      height: '28px',
    },
  },
});

const clip = style({
  position: 'absolute',
  top: '-6px',
  right: '6px',
  height: '14px',
  '@media': {
    [$breakpoints.tablet]: {
      top: '-8px',
      right: '8px',
      height: '21px',
    },
    [$breakpoints.laptop]: {
      top: '-10px',
      right: '10px',
      height: '28px',
    },
  },
});

const cardMedia = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '0 0 72px',
  height: '72px',
  '@media': {
    [$breakpoints.tablet]: {
      flex: '0 0 96px',
      height: '96px',
    },
    [$breakpoints.laptop]: {
      flex: '0 0 156px',
      width: '156px',
    },
    [$breakpoints.desktop]: {
      width: '220px',
      flex: '0 0 220px',
    },
  },
});

const cardContent = style({
  '@media': {
    [$breakpoints.laptop]: {
      marginTop: '1.5rem',
    },
    [$breakpoints.desktop]: {
      padding: '0 8px 4px',
      marginTop: '2rem',
    },
  },
});

const typographyTitle = style({
  color: vars.color.offBlack,
  ...vars.typography.heading.S,
  '@media': {
    [$breakpoints.tablet]: {
      ...vars.typography.heading.M,
    },
  },
});

const typographyContent = style({
  color: vars.color.offBlack,
  ...vars.typography.body.S,
  '@media': {
    [$breakpoints.tablet]: {
      ...vars.typography.body.M,
    },
    [$breakpoints.laptop]: {
      margin: '0.5rem 0',
      width: '156px',
    },
    [$breakpoints.desktop]: {
      margin: '0.75rem 0',
      width: '196px',
    },
  },
});

const styles = {
  container,
  item,
  top,
  clip,
  card,
  cardMedia,
  cardContent,
  typographyTitle,
  typographyContent,
};

export default styles;
