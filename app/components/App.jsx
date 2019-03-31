import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import Popular from './Popular';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/battle" exact component={Battle} />
            <Route path="/popular" component={Popular} />
            <Route
              render={() => (
                <p
                  style={{
                    color: 'var(--red)',
                    fontSize: '30px',
                    textAlign: 'center',
                    fontWeight: 'bold'
                  }}
                >
                  Page Not Found!
                </p>
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
