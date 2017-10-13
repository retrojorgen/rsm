import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainHeader from './../MainHeader/MainHeader';
import About from './../About/About';
import Home from './../Home/Home';

class App extends Component {


  render() {
    return (
      <Router>
        <div className="main-page">
          <MainHeader />
          <div className="router-view">
              <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/about" component={About} />
              </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
