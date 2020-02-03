import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import { deepPurple } from '@material-ui/core/colors';

const { Consumer, Provider } = React.createContext();

export const TProvider = Provider;
export const TConsumer = Consumer;

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: deepPurple,
    background: {
      paper: '#fff'
    },
    text: {
      primary: '#000',
      secondary: '#5D5D5D'
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(',')
    }
  }
});
// responsive for Typography
lightTheme.typography.h1 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem'
  },
  [lightTheme.breakpoints.up('md')]: {
    fontSize: '5rem'
  }
};
lightTheme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem'
  },
  [lightTheme.breakpoints.up('md')]: {
    fontSize: '2.4rem'
  }
};

lightTheme.typography.h4 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem'
  },
  [lightTheme.breakpoints.up('md')]: {
    fontSize: '2.4rem'
  }
};

lightTheme.typography.h6 = {
  fontSize: '1.2rem',
  fontWeight: 'normal',
  '@media (min-width:600px)': {
    fontSize: '1.2rem'
  },
  [lightTheme.breakpoints.up('md')]: {
    fontSize: '1.2rem'
  }
};
export const nightTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

// responsive for Typography
nightTheme.typography.h1 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem'
  },
  [nightTheme.breakpoints.up('md')]: {
    fontSize: '5rem'
  }
};
nightTheme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem'
  },
  [nightTheme.breakpoints.up('md')]: {
    fontSize: '2.4rem'
  }
};

nightTheme.typography.h4 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem'
  },
  [nightTheme.breakpoints.up('md')]: {
    fontSize: '2.4rem'
  }
};

lightTheme.typography.h6 = {
  fontSize: '1.2rem',
  fontWeight: 'normal',
  '@media (min-width:600px)': {
    fontSize: '1.2rem'
  },
  [lightTheme.breakpoints.up('md')]: {
    fontSize: '1.2rem'
  }
};
