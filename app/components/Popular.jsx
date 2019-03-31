import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

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

class Popular extends Component {
  state = { selectedLanguage: 'All' };

  handleLanguageSelection = lang => this.setState({ selectedLanguage: lang });

  render() {
    const { selectedLanguage } = this.state;

    return (
      <Fragment>
        <SelectLanguage
          selectedLanguage={selectedLanguage}
          onLanguageSelection={this.handleLanguageSelection}
        />
      </Fragment>
    );
  }
}

export default Popular;
