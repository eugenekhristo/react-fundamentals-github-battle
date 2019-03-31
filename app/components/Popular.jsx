import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import api from '../utils/api';

const SelectLanguage = ({ selectedLanguage, onLanguageSelection }) => {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className="languages">
      {languages.map(lang => (
        <li
          key={lang}
          style={{ color: selectedLanguage === lang ? 'var(--red)' : '' }}
          onClick={() => onLanguageSelection(lang)}
        >
          {lang}
        </li>
      ))}
    </ul>
  );
};

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onLanguageSelection: PropTypes.func.isRequired
};

const ReposGrid = ({ repos }) => (
  <div className="repos-grid">
    {repos.map((repo, index) => (
      <div className="repos-grid__item" key={repo.id}>
        <span className="repos-grid__rank">#{index + 1}</span>
        <img
          src={repo.owner.avatar_url}
          alt="Avatar"
          width="150"
          className="repos-grid__avatar"
        />
        <a href={repo.html_url} target={repo.name} className="repos-grid__name">
          {repo.name}
        </a>
        <span className="repos-grid__username">@{repo.owner.login}</span>
        <span className="repos-grid__stars">{repo.stargazers_count} stars</span>
      </div>
    ))}
  </div>
);

ReposGrid.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object)
};

class Popular extends Component {
  state = { selectedLanguage: 'All', repos: null };

  handleLanguageSelection = lang => {
    this.setState({ selectedLanguage: lang, repos: null });

    api
      .fetchAllRepos(this.state.selectedLanguage)
      .then(repos => this.setState({ repos }));
  };

  componentDidMount() {
    this.handleLanguageSelection(this.state.selectedLanguage);
  }

  render() {
    const { selectedLanguage, repos } = this.state;

    return (
      <Fragment>
        <SelectLanguage
          selectedLanguage={selectedLanguage}
          onLanguageSelection={this.handleLanguageSelection}
        />
        {repos ? <ReposGrid repos={repos} /> : 'Loading...'}
      </Fragment>
    );
  }
}
export default Popular;
