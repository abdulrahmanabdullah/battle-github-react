import React, { Component } from 'react';
import Loading from './Loading';
import PropTypes from 'prop-types';
import { TConsumer } from '../context/theme';
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Tabs,
  Tab,
  Paper,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Badge
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import {
  FaJs,
  FaPython,
  FaReact,
  FaStar,
  FaCodeBranch,
  FaExclamationTriangle,
  FaEye
} from 'react-icons/fa';
import { DiRuby } from 'react-icons/di';
import { fetchPopularRepo } from '../utlis/api';

function LanguageNav({ selectedLang, onUpdateLang }) {
  const languages = ['All', 'js', 'Python', 'ruby', 'react'];
  const languageIcon = [
    'all',
    <FaJs size={25} />,
    <FaPython size={25} />,
    <DiRuby size={25} />,
    <FaReact size={25} />
  ];
  return (
    <TConsumer>
      {({ theme }) => (
        <Paper square elevation={1}>
          <Tabs
            centered
            variant='fullWidth'
            value={languages.indexOf(selectedLang)}
            indicatorColor='primary'
            textColor='primary'
            style={{
              height: '70px'
            }}
            onChange={() => onUpdateLang(selectedLang)}
          >
            {languages.map((lang, index) => (
              <Tab
                icon={index === 0 ? null : languageIcon[index]}
                label={lang}
                key={index}
                onClick={() => onUpdateLang(lang)}
              />
            ))}
          </Tabs>
        </Paper>
      )}
    </TConsumer>
  );
}

LanguageNav.propTypes = {
  selectedLang: PropTypes.string.isRequired,
  onUpdateLang: PropTypes.func.isRequired
};
export default class Popular extends Component {
  state = {
    selectLanguage: 'All',
    repo: {},
    error: null
  };

  componentDidMount() {
    this.onUpdateLang(this.state.selectLanguage);
  }
  onUpdateLang = selectLanguage => {
    this.setState({ selectLanguage });
    if (!this.state.repo[selectLanguage]) {
      fetchPopularRepo(selectLanguage)
        .then(data => {
          this.setState(({ repo }) => ({
            repo: {
              ...repo,
              [selectLanguage]: data
            }
          }));
        })
        .catch(err => {
          console.warn(err);
          this.setState({ error: err });
        });
    }
  };
  isLoading = () => {
    const { selectLanguage, repo, error } = this.state;
    return !repo[selectLanguage] && error === null;
  };
  render() {
    const { selectLanguage, repo } = this.state;
    return (
      <React.Fragment>
        <LanguageNav
          selectedLang={selectLanguage}
          onUpdateLang={this.onUpdateLang}
        />
        {this.isLoading() && <Loading />}
        {repo[selectLanguage] && <RepoCard repo={repo[selectLanguage]} />}
      </React.Fragment>
    );
  }
}
const useStyle = makeStyles(theme => ({
  grid: {
    margin: '0 auto',
    padding: theme.spacing(1)
  },
  card: {
    maxWidth: 300
  },
  hash: {
    backgroundColor: red[500]
  },
  media: {
    heigh: 0,
    width: 100,
    margin: '0 auto',
    padding: '52.5%'
  },
  title: {
    fontSize: 14
  },
  cardContent: {
    margin: 0,
    padding: '10px'
  },
  listRoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  listIconStyle: {
    display: 'flex',
    margin: 0,
    padding: 0
  }
}));

function RepoCard({ repo }) {
  const style = useStyle();
  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      spacing={4}
      className={style.grid}
    >
      {repo.map((item, index) => {
        const {
          name,
          stargazers_count,
          watchers_count,
          owner,
          html_url,
          description,
          open_issues,
          forks
        } = item;
        const { avatar_url } = owner;
        return (
          <Grid item xs sm md key={index} className={style.subGrid}>
            <Card className={style.card}>
              {/* Card header */}
              <CardHeader
                avatar={<Avatar className={style.hash}> {index + 1} </Avatar>}
                title={name}
              />
              {/* Card media like img */}
              <a href={html_url}>
                <CardMedia
                  title='avatar'
                  component='image'
                  image={avatar_url}
                  className={style.media}
                />
              </a>
              {/* Content */}
              <CardContent>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  component='p'
                  gutterBottom
                  noWrap
                >
                  {description}
                </Typography>
              </CardContent>
              {/* Icons  */}
              <CardContent className={style.cardContent}>
                {
                  <ListIcons
                    watchers_count={watchers_count}
                    stargazers_count={stargazers_count}
                    open_issues={open_issues}
                    forks={forks}
                  />
                }
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
function ListIcons({ stargazers_count, watchers_count, open_issues, forks }) {
  const style = useStyle();
  return (
    <div className={style.listRoot}>
      {/* Watchers  */}
      <Badge
        badgeContent={watchers_count}
        color='primary'
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <FaEye size={29} color='rgb(255,191,116)' />
      </Badge>

      {/* Stars */}
      <Badge
        badgeContent={stargazers_count.toLocaleString()}
        color='primary'
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <FaStar size={29} color='rgb(255,215,0)' />
      </Badge>

      {/* Forks */}
      <Badge
        badgeContent={forks}
        color='primary'
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <FaCodeBranch size={29} color='rgb(129,195,245)' />
      </Badge>

      {/* Issues */}
      <Badge
        badgeContent={open_issues.toLocaleString()}
        color='secondary'
        overlap='rectangle'
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <FaExclamationTriangle size={29} color='rgb(249,138,147)' />
      </Badge>
    </div>
  );
}
