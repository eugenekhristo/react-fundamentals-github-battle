import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <h1 className="home__heading">Github Battle: Battle your friends... and stuff.</h1>
        <Link className="button" to="/battle">
          Battle
        </Link>
      </div>
    );
  }
}

export default Home;
