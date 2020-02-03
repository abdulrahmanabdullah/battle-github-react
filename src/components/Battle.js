import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  makeStyles,
  Grid,
  TextField,
  Button,
  Paper,
  Avatar
} from '@material-ui/core';
import { FaUserFriends, FaFighterJet, FaTrophy } from 'react-icons/fa';
import { GoX } from 'react-icons/go';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    margin: '0 auto',
    padding: 0
  },
  title: {
    margin: '0',
    padding: '0',
    textAlign: 'center'
  },
  grid: {
    maxWidth: '100%',
    margin: '25px  auto'
  },
  gridItem: {
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex: 2
  },
  gridInput: {
    margin: '0',
    padding: '15px'
  },
  avatar: {
    display: 'block',
    backgroundColor: 'rgba(0,0,0,0.08)',
    padding: '40px',
    borderRadius: '3px'
  },
  playerHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  playerInput: {
    width: '100%',
    border: 'none',
    height: 'auto'
  },
  paper: {
    padding: '15px'
  },
  paperItem: {
    flexGrow: '10',
    paddingLeft: '10px'
  }
}));

function Instructions() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h1'>
        Instructions
      </Typography>
      {/* Grid for three icons  */}
      <Grid
        className={classes.grid}
        container
        spacing={10}
        alignContent='center'
      >
        <Grid className={classes.gridItem} item xs={4}>
          <Typography variant='h6' className={classes.title}>
            Enter Two github users
          </Typography>
          <FaUserFriends size={140} className={classes.avatar} />
        </Grid>
        <Grid className={classes.gridItem} item xs={4}>
          <Typography variant='h6' className={classes.title}>
            Battle
          </Typography>
          <FaFighterJet size={140} className={classes.avatar} />
        </Grid>
        <Grid className={classes.gridItem} item xs={4}>
          <Typography variant='h6' className={classes.title}>
            See the winner
          </Typography>
          <FaTrophy size={140} className={classes.avatar} />
        </Grid>
      </Grid>
    </div>
  );
}

class PlayerInput extends React.Component {
  state = {
    username: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.username);
    this.setState({ username: event.target.value });
  };

  handleChange = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    const { username } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid container spacing={1} justify='center'>
          <Grid item xs={12} sm={12} md>
            <TextField
              variant='outlined'
              margin='none'
              fullWidth
              required
              label='github username'
              value={username}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs>
            {username ? (
              <Button type='submit' variant='contained' color='primary'>
                Submit
              </Button>
            ) : (
              <Button type='submit' color='primary' disabled>
                submit
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
    );
  }
}
function InputHeader() {
  const style = useStyles();
  return (
    <React.Fragment>
      <div className={style.playerHeader}>
        <Typography variant='h4'>Player One</Typography>
        <Typography variant='h4'>Player Two</Typography>
      </div>
    </React.Fragment>
  );
}

function PlayerPreview({ avatar, username, onReset }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Grid container alignItems='center'>
          <Grid item xs>
            <Avatar>
              <img
                src={`https://github.com/${username}.png?size=200`}
                alt={`Avatar for ${username}`}
              />
            </Avatar>
          </Grid>
          {/* Avatar  */}
          {/* Username */}
          <Grid item xs className={classes.paperItem}>
            {username}
          </Grid>
          {/* reset Icon .  */}
          <Grid item xs onClick={onReset}>
            <GoX color='red' size={22} />
          </Grid>
        </Grid>
      </Paper>
    </React.Fragment>
  );
}

PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired
};

export default class Battle extends Component {
  state = {
    playerOne: null,
    playerTwo: null,
    battle: false
  };
  onSubmit = (id, player) => {
    this.setState({
      [id]: player
    });
  };

  onReset = id => {
    this.setState({
      [id]: null
    });
  };
  render() {
    const { playerOne, playerTwo } = this.state;
    return (
      <Container>
        <Instructions />
        <Typography variant='h3' style={{ textAlign: 'center' }}>
          Players
        </Typography>
        <InputHeader />
        <Grid container spacing={2}>
          <Grid item xs>
            {playerOne === null ? (
              <PlayerInput
                onSubmit={player => this.onSubmit('playerOne', player)}
              />
            ) : (
              <PlayerPreview
                username={playerOne}
                avatar={playerOne}
                onReset={() => this.onReset('playerOne')}
              />
            )}
          </Grid>
          <Grid item xs>
            {playerTwo === null ? (
              <PlayerInput
                onSubmit={player => this.onSubmit('playerTwo', player)}
              />
            ) : (
              <PlayerPreview
                username={playerTwo}
                avatar={playerTwo}
                onReset={() => this.onReset('playerTwo')}
              />
            )}
          </Grid>
        </Grid>
        {playerOne && playerTwo && (
          <div
            style={{ marginTop: '25px', textAlign: 'center', width: '100%' }}
          >
            <Link
              to={{
                pathname: '/battle/result',
                search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
              }}
            >
              <Button variant='contained'>Battle</Button>
            </Link>
          </div>
        )}
      </Container>
    );
  }
}
