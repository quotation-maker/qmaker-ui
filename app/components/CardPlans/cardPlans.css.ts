import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';
import { $breakpoints } from '@styles/utils';

const container = style({
  position: 'relative',
  ...vars.blurPanel,
  ...vars.section.mobile,
  margin: '4rem auto',
  width: '90%',
  padding: '1rem 2rem 2rem',
  '::before': {
    position: 'absolute',
    content: '',
    bottom: -50,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '90%',
    height: '96px',
    background: `url("/icons/bg-footer-squiggle.svg") no-repeat center / 100% 100%`,
  },
  '@media': {
    [$breakpoints.tablet]: {
      padding: '1.5rem 0 3rem',
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
  padding: '0 0 1.5rem',
  color: vars.color.offWhite,
  textAlign: 'center',
  ...vars.typography.heading.L,
  '@media': {
    [$breakpoints.tablet]: {
      padding: '0 0 2rem',
      ...vars.typography.heading.XL,
    },
    [$breakpoints.laptop]: {
      padding: '0 0 3rem',
      ...vars.typography.heading.XXL,
    },
  },
});

const cardWrapper = style({
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  rowGap: '2rem',
  '@media': {
    [$breakpoints.tablet]: {
      rowGap: '2.5rem',
    },
    [$breakpoints.laptop]: {
      flexDirection: 'row',
    },
  },
});

const card = style({
  borderRadius: 20,
  padding: '1.25rem',
  boxShadow: 'none',
  margin: '0 auto',
  '@media': {
    [$breakpoints.tablet]: {
      padding: '2rem',
      width: '90%',
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

const secondary = style({
  background: vars.color.offWhite,
});

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
};

export default styles;
