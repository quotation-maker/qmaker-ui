import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';
import { $breakpoints } from '@styles/utils';

const container = style({
  position: 'relative',
  ...vars.panel.L,
  ...vars.section.mobile,
  margin: '4rem auto',
  width: '90%',
  padding: '1rem 2rem 2rem',
  '@media': {
    [$breakpoints.tablet]: {
      padding: '1.5rem 2rem 3rem',
      ...vars.section.tablet,
      margin: '5rem auto',
    },
    [$breakpoints.laptop]: {
      ...vars.section.laptop,
      margin: '10rem auto',
    },
    [$breakpoints.desktop]: {
      ...vars.section.desktop,
      margin: '10rem auto',
    },
  },
});

const heading = style({
  position: 'relative',
  padding: '0 0 0.5rem',
  color: vars.color.offBlack,
  textAlign: 'center',
  ...vars.typography.heading.L,
  '@media': {
    [$breakpoints.tablet]: {
      padding: '0 0 0.75rem',
      ...vars.typography.heading.XL,
    },
    [$breakpoints.laptop]: {
      padding: '0 0 1rem',
      ...vars.typography.heading.XXL,
    },
  },
});

const cardWrapper = style({
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  rowGap: '2rem',
  borderTop: `4px solid ${vars.color.onyx}`,
  paddingTop: '2rem',
  '@media': {
    [$breakpoints.tablet]: {
      rowGap: '2.5rem',
    },
    [$breakpoints.laptop]: {
      columnGap: '2rem',
      flexDirection: 'row',
    },
    [$breakpoints.desktop]: {
      columnGap: '3rem',
    },
  },
});

const card = style({
  position: 'relative',
  padding: '1.25rem',
  margin: '0 auto',
  ...vars.panel.S,
  '@media': {
    [$breakpoints.tablet]: {
      padding: '2rem',
      height: '365px',
    },
    [$breakpoints.laptop]: {
      height: '370px',
    },
  },
});

const cardContent = style({});

const subTitle = style({
  ...vars.typography.heading.S,
  '@media': {
    [$breakpoints.tablet]: {
      ...vars.typography.heading.M,
    },
  },
});

const subContent = style({
  ...vars.typography.body.S,
  paddingTop: '0.75rem',
  '@media': {
    [$breakpoints.tablet]: {
      paddingTop: '1rem',
      ...vars.typography.body.M,
    },
  },
});

const price = style({
  ...vars.typography.heading.L,
  padding: '1.5rem 0 0.5rem',
  '@media': {
    [$breakpoints.tablet]: {
      ...vars.typography.heading.XL,
      padding: '2rem 0 0.5rem',
    },
  },
});

const benefitContent = style({
  ...vars.typography.body.S,
  '@media': {
    [$breakpoints.tablet]: {
      ...vars.typography.body.M,
    },
  },
});

const primary = style({
  background: vars.color.primary,
  color: vars.color.offWhite,
});

const secondary = style({});

const benefitList = style({
  display: 'flex',
  flexFlow: 'column nowrap',
  '@media': {
    [$breakpoints.tablet]: {
      rowGap: '0.25rem',
    },
  },
});

const benefit = style({
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
  columnGap: '0.5rem',
});

const checkIcon = style({
  width: '12px',
  height: '9px',
});

const bright = style({
  color: vars.color.secondary,
});

const labelIcon = style({
  position: 'absolute',
  zIndex: 1000,
  top: -4,
  right: 0,
  width: '72px',
  '@media': {
    [$breakpoints.tablet]: {
      width: '76px',
    },
    [$breakpoints.laptop]: {
      width: '84px',
    },
  },
});

const styles = {
  heading,
  container,
  cardWrapper,
  card,
  cardContent,
  subTitle,
  subContent,
  price,
  benefitList,
  benefit,
  checkIcon,
  benefitContent,
  primary,
  secondary,
  bright,
  labelIcon,
};

export default styles;
