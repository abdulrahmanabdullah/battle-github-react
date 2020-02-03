import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import {
  Grid,
  Container,
  Paper,
  Typography,
  Divider,
  makeStyles,
  Button
} from '@material-ui/core';
import {
  FaUsers,
  FaUser,
  FaCompass,
  FaBriefcase,
  FaUserFriends
} from 'react-icons/fa';
import { battle } from '../utlis/api';

export default class Results extends Component {
  state = {
    loading: true,
    winner: null,
    loser: null,
    error: null
  };

  componentDidMount() {
    const { playerOne, playerTwo } = queryString.parse(
      this.props.location.search
    );
    battle([playerOne, playerTwo])
      .then(result => {
        this.setState({
          winner: result[0],
          loser: result[1],
          error: null,
          loading: false
        });
      })
      .catch(({ message }) => {
        this.setState({
          error: message,
          loading: false
        });
      });
  }

  render() {
    const { loading, error } = this.state;
    if (loading === true) {
      return <div>Loading ... </div>;
    }
    if (error) {
      return <p>{` Some error occurred -> ${error}`}</p>;
    }
    return (
      <React.Fragment>
        <ResultContainer state={this.state} />
        <div className='onResetBtnContainerStyle'>
          <Link to='/battle'>
            <Button variant='contained' color='primary'>
              Reset
            </Button>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
const useStyles = makeStyles(theme => ({
  root: {
    margin: '30px auto',
    padding: '10px',
    width: '100%',
    height: 'auto',
    textAlign: 'center'
  },
  paper: {
    padding: theme.spacing(2),
    height: 'auto'
  },
  imgContainer: {
    margin: '0 auto'
  },
  img: {
    width: '70%',
    margin: '0 auto',
    borderRadius: '50px'
  },
  list: {
    padding: '0'
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    margin: '10px',
    listStyle: 'none'
  },
  listAvatar: {
    margin: '10px'
  }
}));

// Divide Card to two cards with Grid then pass state .
function ResultContainer({ state }) {
  const classes = useStyles();
  const { winner, loser } = state;
  return (
    <Container className={classes.root}>
      {/* set layout like two cards set beside others. */}
      <Grid container alignItems='center' spacing={3}>
        <Grid item xs>
          {/* Winner */}
          <PlayerListView
            player={winner}
            header={winner.score === loser.score ? 'Tie' : 'Winner'}
          />
        </Grid>
        <Grid item xs>
          {/* Loser */}
          <PlayerListView
            player={loser}
            header={winner.score === loser.score ? 'Tie' : 'Loser'}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
ResultContainer.propTypes = {
  state: PropTypes.object.isRequired
};

// Paper contain header card and ListOfDetails Component
function PlayerListView({ player, header }) {
  const classes = useStyles();
  const { profile, score } = player;
  console.log(profile);
  return (
    <Paper className={classes.paper}>
      <Grid container direction='column' spacing={2}>
        {/* Winner Or loser area  */}
        <Grid item xs>
          <Typography variant='h6'>{header}</Typography>
        </Grid>
        {/* User Avatar */}
        <Grid item xs className={classes.imgContainer}>
          <img
            className={classes.img}
            src={`${profile.avatar_url}`}
            alt={`Avatar for ${profile.name}`}
          />
        </Grid>
        {/* username */}
        <Grid item xs>
          <Typography variant='body1'>{profile.name}</Typography>
        </Grid>
        {/* Score   */}
        <Grid item xs>
          <Typography variant='body1'>{`score: ${score}`}</Typography>
        </Grid>
      </Grid>
      <Divider />
      <ListOfDetails profile={profile} />
    </Paper>
  );
}
PlayerListView.propTypes = {
  player: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired
};

// list of icons with name,followers,following and company.
function ListOfDetails({ profile }) {
  const classes = useStyles();
  const { login, location, company, followers, following } = profile;
  return (
    <ul className={classes.list}>
      <li className={classes.listItem}>
        <FaUser
          size={22}
          color='rgb(239,115,115)'
          className={classes.listAvatar}
        />
        {login}
      </li>
      {location && (
        <li className={classes.listItem}>
          <FaCompass
            size={22}
            color='rgb(144,115,255)'
            className={classes.listAvatar}
          />
          {location}
        </li>
      )}
      {company && (
        <li className={classes.listItem}>
          <FaBriefcase
            size={22}
            color='#795548'
            className={classes.listAvatar}
          />
          {company}
        </li>
      )}
      <li className={classes.listItem}>
        <FaUsers
          size={22}
          color='rgb(129,195,245)'
          className={classes.listAvatar}
        />
        {followers} followers
      </li>
      <li className={classes.listItem}>
        <FaUserFriends
          size={22}
          color='rgb(64,183,95)'
          className={classes.listAvatar}
        />
        {following} following
      </li>
    </ul>
  );
}

ListOfDetails.propTypes = {
  profile: PropTypes.object.isRequired
};
