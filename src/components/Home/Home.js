import React, { Component } from 'react';
import FrontHero from './../FrontHero/FrontHero';
import Guests from './../Guests/Guests';
import Tickets from './../Tickets/Tickets';
import Welcome from './../Welcome/Welcome';
import './Home.css';
import PracticalInfo from './../PracticalInfo/PracticalInfo'

export default class Home extends Component {
  render() {
    return (
    <div className="Home">
        <FrontHero />
        <PracticalInfo />
        <Welcome />
        <Guests />
        <Tickets />
    </div>
    );
  }
}

