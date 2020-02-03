const id = 'c3e5586e80700304c7ff';
const secret = 'a6473f631dc126db53fbed59aee3bd11f5f49458';
const param = `?client_id=${id}?client_secret=${secret}`;

// show me the type's of error when user send his name
function getErrorMessage(message, username) {
  if (message === 'NOT FOUND') {
    return ` ${username} doesn't exist`;
  }
  return message;
}

// get main details of user like name, stars , followers , url
// This func return Promise
function getProfile(username) {
  return fetch(`https://api.github.com/users/${username}${param}`)
    .then(res => res.json())
    .then(profile => {
      if (profile.message) {
        throw new Error(getErrorMessage(profile.message, username));
      }
      return profile;
    });
}

// Get 100 repo , also this return Promise
function getRepos(username) {
  return fetch(
    `https://api.github.com/users/${username}/repos${param}&per_page=100`
  )
    .then(res => res.json())
    .then(repos => {
      if (repos.message) {
        throw new Error(getErrorMessage(repos.message, username));
      }
      return repos;
    });
}

// go through into each repo and count the stargazers of this repo
function getStarsCount(repo) {
  return repo.reduce(
    (count, { stargazers_count }) => count + stargazers_count,
    0
  );
}
function calculateScore(followers, repo) {
  return followers * 3 + getStarsCount(repo);
}
// This func merge two functions data then return profile and score for each username
function getUserData(username) {
  return Promise.all([getProfile(username), getRepos(username)]).then(
    ([profile, repo]) => ({
      profile,
      score: calculateScore(profile.followers, repo)
    })
  );
}

function sortPlayer(players) {
  return players.sort((a, b) => b.score - a.score);
}

export function battle(players) {
  return Promise.all([
    getUserData(players[0]),
    getUserData(players[1])
  ]).then(results => sortPlayer(results));
}

export function fetchPopularRepo(language) {
  const endpoint = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );

  return fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      if (!data.items) {
        throw new Error(data.message);
      }
      return data.items;
    });
}
