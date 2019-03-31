import React, { Component, Fragment } from 'react';

class Popular extends Component {
  state = { selectedLanguage: 'All' };

  handleLanguageSelection = lang => this.setState({selectedLanguage: lang})

  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    const {selectedLanguage} = this.state;

    return (
      <Fragment>
        <ul className='languages'>
          {languages.map(lang => (
            <li 
              key={lang}
              style={{color: selectedLanguage === lang ? 'var(--red)' : ''}}
              onClick={() => this.handleLanguageSelection(lang)}
            >
              {lang}
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

export default Popular;
