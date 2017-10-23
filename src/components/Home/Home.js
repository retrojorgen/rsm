import React, { Component } from 'react';
import FrontHero from './../FrontHero/FrontHero';
import Guests from './../Guests/Guests';
import Tickets from './../Tickets/Tickets';
import Welcome from './../Welcome/Welcome';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
    <div className="Home">
        <FrontHero />
        <Welcome />
        <Guests />
        <Tickets />
    </div>
    );
  }
}

