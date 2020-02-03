import React from 'react';
import { TConsumer } from '../context/theme';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles
} from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  battle: {
    flexGrow: 2,
    textDecoration: 'none',
    color: '#fff'
  },
  tabs: {
    height: '70px'
  },
  item: {
    marginLeft: '5px',
    textDecoration: 'none',
    color: 'rgba(249, 246, 246, 0.27);'
  }
}));

const activeStyle = {
  color: '#fff',
  fontSize: '20px'
};
export default function Nav() {
  const classes = useStyle();
  return (
    <TConsumer>
      {({ theme, toggleDarkTheme }) => (
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6'>
              <NavLink
                exact
                to='/'
                className={classes.item}
                activeStyle={activeStyle}
                color='inherit'
              >
                Popular Repository
              </NavLink>
            </Typography>
            <Typography className={classes.battle} variant='h6'>
              <NavLink
                className={classes.item}
                exact
                to='/battle'
                activeStyle={activeStyle}
                color='inherit'
              >
                Battle
              </NavLink>
            </Typography>
            <Button style={{ fontSize: '30px' }} onClick={toggleDarkTheme}>
              {theme ? '☀️ ' : '💡'}
            </Button>
          </Toolbar>
        </AppBar>
      )}
    </TConsumer>
  );
}
