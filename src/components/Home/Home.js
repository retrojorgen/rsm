import React, { Component } from 'react';
import FrontHero from './../FrontHero/FrontHero';
import Guests from './../Guests/Guests';
import Tickets from './../Tickets/Tickets';
import Title from './../Title/Title';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
    <div className="Home">
        <FrontHero />
        <section className="section welcome">
          <Title title="Retrospilmessen 2018" />
          <div className="welcome two-col">
            <div className="left-col"></div>
            <div className="right-col">
              <h2>Endelig kan vi begynne å glede oss til neste års Retrospillmesse! </h2>
              <p>Retrospillmessen er messa som samler gamere i alle aldre
en helg i Sandefjord. Messen hvor vi møter gamle kjente, skaper nye minner, og ikke minst har det skikkelig moro!
Lurer du på hva som skjer på Retrospillmessen? Les mer her..</p>
            </div>

          </div>
        </section>
        <Guests />
        <Tickets />
    </div>
    );
  }
}
