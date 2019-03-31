import axios from 'axios';

function fetchAllRepos(language) {
  const encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

  return axios.get(encodedURI).then(res => res.data.items);
}

export default {
  fetchAllRepos
}