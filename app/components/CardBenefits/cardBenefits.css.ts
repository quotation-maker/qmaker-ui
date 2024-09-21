import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';
import { $breakpoints } from '@styles/utils';

const container = style({
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'space-between',
  rowGap: '1rem',
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

const item = style({
  selectors: {
    '&:nth-child(2n-1)': {
      '@media': {
        [$breakpoints.tablet]: {
          paddingLeft: '56px',
        },
        [$breakpoints.laptop]: {
          paddingLeft: 0,
        },
      },
    },
    '&:nth-child(2n)': {
      '@media': {
        [$breakpoints.laptop]: {
          paddingTop: '2rem',
        },
        [$breakpoints.desktop]: {
          paddingTop: '3rem',
        },
      },
    },
  },
});

const card = style({
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
  background: 'transparent',
  boxShadow: 'none',
  columnGap: '1rem',
  '@media': {
    [$breakpoints.tablet]: {
      columnGap: '1.5rem',
    },
    [$breakpoints.laptop]: {
      alignItems: 'flex-start',
      flexFlow: 'column nowrap',
    },
  },
});

const cardMedia = style({
  background: 'rgba(225,225,225,0.05)',
  borderRadius: 20,
  flex: '0 0 88px',
  height: '90px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media': {
    [$breakpoints.tablet]: {
      borderRadius: 25,
      flex: '0 0 104px',
      height: '107px',
    },
    [$breakpoints.laptop]: {
      width: '107px',
      flex: '0 0 104px',
    },
    [$breakpoints.desktop]: {
      borderRadius: 40,
      width: '160px',
      flex: '0 0 164px',
    },
  },
});

const cardMediaIcon = style({
  flexBasis: 32,
  '@media': {
    [$breakpoints.tablet]: {
      flexBasis: 40,
    },
    [$breakpoints.desktop]: {
      flexBasis: 64,
    },
  },
});

const cardContent = style({
  '@media': {
    [$breakpoints.laptop]: {
      marginTop: '1.5rem',
    },
    [$breakpoints.desktop]: {
      marginTop: '2rem',
    },
  },
});

const typographyTitle = style({
  color: vars.color.offWhite,
  ...vars.typography.heading.S,
  '@media': {
    [$breakpoints.tablet]: {
      ...vars.typography.heading.M,
    },
  },
});

const typographyContent = style({
  color: vars.color.lightGray,
  ...vars.typography.body.S,
  '@media': {
    [$breakpoints.tablet]: {
      ...vars.typography.body.M,
    },
    [$breakpoints.laptop]: {
      marginTop: '0.5rem',
      width: '176px',
    },
    [$breakpoints.desktop]: {
      marginTop: '0.75rem',
      width: '255px',
    },
  },
});

const styles = {
  container,
  item,
  card,
  cardMedia,
  cardMediaIcon,
  cardContent,
  typographyTitle,
  typographyContent,
};

export default styles;
