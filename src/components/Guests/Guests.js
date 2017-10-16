import React, { Component } from 'react';
import './Guests.css';
import larryBack from './larry-rsm-video-background.mp4';
import alLowe from './allowe.png';
import lefdalLogo from './lefdal-logo.png';
import Title from './../Title/Title';


class HeaderContainer extends Component {
    render() {
      let guestName = this.props.guestName;
      let guestDescription = this.props.guestDescription;
        return (
            <div className="HeaderContainer">
                <h1><span>{guestName}</span></h1>
                <p>{guestDescription}</p>
                <div className="sponsor-row">I samarbeid med <img className="lefdal-logo" src={lefdalLogo} /></div>
            </div>
        )
    }
}

export default class Guests extends Component {
  render() {
    return (
    <section className="Guests">
        <Title title="Gjester 2018" />
        <p className="section-description">Vi annonserer gjester fortløpende. Følg med her og på vår <a href="http://www.facebook.com/retrospillmessen">facebook</a></p>
        <div className="guests-container">
            <div className="guest">
                <video className="guest-backdrop" autoPlay="true" loop="true">
                    <source src={larryBack} type="video/mp4" />
                </video>
                <div className="guest-profile">
                    <img src={alLowe} />
                </div>
                <HeaderContainer guestName="Al Lowe" guestDescription="Skaperen av Leisure Suit Larry-serien" />
            </div>

            <div className="guest unannounced">
                <div className="unnanounced-container">
                    <h1>?</h1>
                    <p>Følg med på Facebook og nettsiden. Gjester annonseres fortløpende</p>
                </div>
            </div>
            
            <div className="guest unannounced">
                <div className="unnanounced-container">
                    <h1>?</h1>
                    <p>Følg med på Facebook og nettsiden. Gjester annonseres fortløpende</p>
                </div>
            </div>
        </div>
    </section>
    );
  }
}
