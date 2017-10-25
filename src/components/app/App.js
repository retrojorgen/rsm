import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainHeader from './../MainHeader/MainHeader';
import About from './../About/About';
import Rent from './../Rent/Rent';
import Home from './../Home/Home';
import GuestsList from './../GuestsList/GuestsList';

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
                <Route path="/rent" component={Rent} />
                <Route path="/guests" component={GuestsList} />
              </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
