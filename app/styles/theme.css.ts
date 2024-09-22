import { createThemeContract, createGlobalTheme } from '@vanilla-extract/css';

export const vars = createThemeContract({
  typography: {
    heading: {
      XXL: {
        fontSize: null,
        fontWeight: null,
        lineHeight: null,
        letterSpacing: null,
      },
      XL: {
        fontSize: null,
        fontWeight: null,
        lineHeight: null,
        letterSpacing: null,
      },
      L: {
        fontSize: null,
        fontWeight: null,
        lineHeight: null,
        letterSpacing: null,
      },
      M: {
        fontSize: null,
        fontWeight: null,
        lineHeight: null,
        letterSpacing: null,
      },
      S: {
        fontSize: null,
        fontWeight: null,
        lineHeight: null,
        letterSpacing: null,
      },
    },
    body: {
      M: {
        fontSize: null,
        fontWeight: null,
        lineHeight: null,
        letterSpacing: null,
      },
      S: {
        fontSize: null,
        fontWeight: null,
        lineHeight: null,
        letterSpacing: null,
      },
    },
  },
  color: {
    primary: null,
    secondary: null,
    primaryLight: null,
    gray: null,
    black: null,
    pureWhite: null,
    error: null,
    offWhite: null,
    lightGray: null,
    smokeyGray: null,
    offBlack: null,
    background: null,
  },
  blurPanel: {
    borderRadius: null,
    border: null,
    background: null,
    backdropFilter: null,
  },
  section: {
    mobile: {
      width: null,
      padding: null,
      margin: null,
    },
    tablet: {
      width: null,
      margin: null,
    },
    laptop: {
      width: null,
      margin: null,
    },
    desktop: {
      width: null,
      margin: null,
    },
  },
});

createGlobalTheme(':root', vars, {
  typography: {
    heading: {
      XXL: {
        fontSize: '48px',
        fontWeight: '800',
        lineHeight: '65px',
        letterSpacing: '-0.3px',
      },
      XL: {
        fontSize: '40px',
        fontWeight: '800',
        lineHeight: '55px',
        letterSpacing: '-0.3px',
      },
      L: {
        fontSize: '32px',
        fontWeight: '800',
        lineHeight: '44px',
        letterSpacing: '-0.2px',
      },
      M: {
        fontSize: '18px',
        fontWeight: '800',
        lineHeight: '25px',
        letterSpacing: '-0.2px',
      },
      S: {
        fontSize: '15px',
        fontWeight: '800',
        lineHeight: '20px',
        letterSpacing: '-0.1px',
      },
    },
    body: {
      M: {
        fontSize: '15px',
        fontWeight: '400',
        lineHeight: '25px',
        letterSpacing: '-0.2px',
      },
      S: {
        fontSize: '13px',
        fontWeight: '400',
        lineHeight: '25px',
        letterSpacing: '-0.2px',
      },
    },
  },
  color: {
    primary: '#854DFF',
    primaryLight: '#A78BFA',
    secondary: '#CDF348',
    error: '#FF5757',
    gray: '#777F98',
    black: '#12303F',
    pureWhite: '#FFFFFF',
    offWhite: '#F0F0F0',
    lightGray: '#DBDBDB',
    smokeyGray: '#716F6F',
    offBlack: '#141414',
    background: '#FFFFFF',
  },
  blurPanel: {
    borderRadius: '20px',
    border: '3px solid rgba(0,0,0,0.1)',
    background: 'rgba(0,0,0,0.1)',
    backdropFilter: 'blur(10px)',
  },
  section: {
    mobile: {
      margin: '0 auto',
      padding: '1rem',
      width: '100%',
    },
    tablet: {
      margin: '0 auto',
      width: '500px',
    },
    laptop: {
      margin: '0 auto',
      width: '800px',
    },
    desktop: {
      margin: '0 auto',
      width: '1100px',
    },
  },
});
