import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import Homepage from './components/homepage/Homepage.js.jsx'
import About from './components/homepage/About.js.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/' component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
