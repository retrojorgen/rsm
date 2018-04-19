import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainHeader from './../MainHeader/MainHeader';
import About from './../About/About';
import Rent from './../Rent/Rent';
import Home from './../Home/Home';
import Footer from './../Footer/Footer';
import Events from './../Events/Events';
import GuestsList from './../GuestsList/GuestsList';
import NeoGeo from './../NeoGeo/NeoGeo';
import GuestListing from './../GuestsList/GuestListing';

const MainPageInner = styled.div`
  position: relative;
  z-index: 10;
  background-color: black;
  box-shadow: 0 0 40px rgba(0,0,0,0.6);
  * {
    font-family: "Rubik",sans-serif;
  }
`;

class App extends Component {


  render() {
    return (
      <Router>
        <div className="main-page">
          <MainPageInner>
            <MainHeader />
            <div className="router-view">
                <Switch>
                  <Route path="/" component={Home} exact={true} />
                  <Route path="/about" component={About} exact={true} />
                  <Route path="/program" component={Events} />
                  <Route path="/rent" component={Rent} />
                  <Route path="/guests" component={GuestsList} exact={true} />
                  <Route path="/neo-geo-world-tour" component={NeoGeo} exact={true} />
                  <Route path="/guests/:guestUrl" component={GuestListing} />
                </Switch>
            </div>
          </MainPageInner>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
