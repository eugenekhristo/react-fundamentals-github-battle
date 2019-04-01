import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class BattleInput extends Component {
  state = {
    username: ''
  };

  handleChange = e =>
    this.setState({ username: e.target.value.trim().toLowerCase() });

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit, id } = this.props;
    const { username } = this.state;

    onSubmit(id, username);
  };

  render() {
    const { username } = this.state;
    const { label, id } = this.props;

    return (
      <form className="column battle-input" onSubmit={this.handleSubmit}>
        <label className="battle-input__label" htmlFor={id}>
          {label}
        </label>
        <input
          type="text"
          id={id}
          placeholder="github username"
          autoComplete="off"
          className="battle-input__input"
          value={username}
          onChange={this.handleChange}
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    );
  }
}

BattleInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

const PlayerPreview = ({ imageUrl, username, id, onReset }) => {
  return (
    <div className="player-preview column">
      <img src={imageUrl} alt="Avatar" className="player-preview__img" />
      <h2 className="player-preview__username">@{username}</h2>
      <button className="player-preview__reset" onClick={() => onReset(id)}>
        Reset
      </button>
    </div>
  );
};

PlayerPreview.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired
};

class Battle extends Component {
  state = {
    playerOneName: '',
    playerTwoName: '',
    playerOneImage: null,
    playerTwoImage: null
  };

  handleSubmit = (id, username) => {
    const newState = {};
    newState[`${id}Name`] = username;
    newState[`${id}Image`] = `https://github.com/${username}.png?size=200`;

    this.setState(newState);
  };

  handleReset = id => {
    const newState = {};
    newState[`${id}Name`] = '';
    newState[`${id}Image`] = null;

    this.setState(newState);
  };

  render() {
    const {
      playerOneImage,
      playerOneName,
      playerTwoImage,
      playerTwoName
    } = this.state;

    return (
      <Fragment>
        <div className="row">
          {!playerOneName && (
            <BattleInput
              label="Player One"
              id="playerOne"
              onSubmit={this.handleSubmit}
            />
          )}

          {playerOneImage !== null && (
            <PlayerPreview
              id="playerOne"
              username={playerOneName}
              imageUrl={playerOneImage}
              onReset={this.handleReset}
            />
          )}

          {!playerTwoName && (
            <BattleInput
              label="Player Two"
              id="playerTwo"
              onSubmit={this.handleSubmit}
            />
          )}

          {playerTwoImage !== null && (
            <PlayerPreview
              id="playerTwo"
              username={playerTwoName}
              imageUrl={playerTwoImage}
              onReset={this.handleReset}
            />
          )}
        </div>
        {playerOneName && playerTwoName && (
          <Link
            className="button"
            style={{ cursor: 'pointer' }}
            to={{
              pathname: `${this.props.match.url}/results`,
              search: `playerOneName=${playerOneName}$playerTwoName=${playerTwoName}`
            }}
          >
            Battle
          </Link>
        )}
      </Fragment>
    );
  }
}

export default Battle;
