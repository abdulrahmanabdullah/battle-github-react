import React from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  Grid,
  makeStyles,
  ButtonBase,
  Typography
} from '@material-ui/core';
import 'typeface-roboto';

const styles = makeStyles(theme => ({
  root: {
    margin: '5px',
    padding: '10px'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '300px'
  },
  img: {
    width: 128,
    height: 128
  },
  avatar: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  icons: {
    marginRight: '5px'
  }
}));
export default function Card({ header, subheader, name, avatar, href }) {
  const classes = styles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Paper className={classes.paper}>
            {/* avatar here */}
            <Grid container spacing={2}>
              <Grid item xs>
                <ButtonBase className={classes.img}>
                  <a href={href}>
                    <img
                      className={classes.avatar}
                      alt={`Avatar for ${name}`}
                      src={avatar}
                    />
                  </a>
                </ButtonBase>
              </Grid>
              {/* info  */}
              <Grid item xs container direction='column' spacing={2}>
                <Grid item xs>
                  {/* username */}
                  <Typography variant='body1'>
                    {/* <FaUser
                      className={classes.icons}
                      size={22}
                      color='rgb(255,191,116)'
                    /> */}
                    {name}
                  </Typography>
                  {/* subheader */}
                  {subheader && (
                    <Typography variant='body1'>
                      {/* <FaStar
                      className={classes.icons}
                      size={22}
                      color='rgb(255,215,0)'
                    /> */}
                      {subheader}
                    </Typography>
                  )}

                  {/* name */}
                  <Typography variant='body1'>
                    {/* <FaExclamationTriangle
                      className={classes.icons}
                      size={22}
                      color='rgb(249,138,147)'
                    /> */}
                  </Typography>
                  {/* forks */}
                  <Typography variant='body1'>
                    {/* <FaCodeBranch
                      className={classes.icons}
                      size={22}
                      color='rgb(129,195,245)'
                    /> */}
                  </Typography>
                </Grid>
                {/* Go to repo page */}
                <Grid item>
                  <button>Details</button>
                </Grid>
              </Grid>
              {/* hash */}
              <Grid item>
                <h1>{header}</h1>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </div>
    </React.Fragment>
  );
}
Card.propTypes = {
  header: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  subheader: PropTypes.string
};
