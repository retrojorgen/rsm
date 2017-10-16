import React, { Component } from 'react';
import './Tickets.css';
import Title from './../Title/Title';


export default class Tickets extends Component {
  render() {
    return (
    <section className="Tickets">
        <Title title="Billetter til RSM 2018" />
        <p className="section-description">Obs! Billetter kommer i salg veldig snart. Følg med for early bird tilbud. Våre rabbaterte barnebilletter gjelder barn under 13 år.</p>
        <h2>Billettkategorier</h2>
        <div className="tickets-container">
          

          <div className="ticket-group">
            <h3 clasName="ticket-title">VIP Helgepass</h3>
            <p className="ticket-description">
              VIP-biletten gir deg tilgang til Retrospillmessen både lørdag og søndag.
              I tillegg slipper du inn en time tidligere enn andre gjester begge dagene.
              Perfekt for deg som jakter på skatter eller vil treffe VIP-gjestene våre
              før køene bygger seg opp!
            </p>
            <p>Du slipper selvsagt også å vente i den vanlige åpningskøen</p>
            <div className="ticket-options">
              <table>
                <tbody>
                  <tr><td>VIP Voksen</td><td>599,-</td></tr>
                  <tr><td>VIP Barn</td><td>219,-</td></tr>
                </tbody>
              </table>
              <a className="buy-button" href="">Kjøp - Tilgjengelig snart</a>
            </div>
          </div>

          <div className="ticket-group">
            <h3 clasName="ticket-title">Helgepass</h3>
              <p className="ticket-description">
                Helgepass gir deg tilgang til Retrospillmessen. Det er forskjellige program hver dag
                på Retrospillmessen, og begge dagene gir en helt forskjellig opplevelse.
                Vi anbefaler å være med på hele showet! 
              </p>
              <div className="ticket-options">
                <table>
                  <tbody>
                    <tr><td>Helgepass Voksen</td><td>499,-</td></tr>
                    <tr><td>Helgepass Barn</td><td>199,-</td></tr>
                  </tbody>
                </table>
                <a className="buy-button" href="">Kjøp - Tilgjengelig snart</a>
              </div>
          </div>

          <div className="ticket-group">
            <h3 clasName="ticket-title">Dagspass</h3>
            <p className="ticket-description">
              Dagspass gir deg tilgang til Retrospillmessen hele lørdagen,
              eller hele søndagen. Vi anbefaler å sjekke timeplanen vårt for å se hvilken
              dag du får mest ut av. Er du på utkikk etter en roligere dag er 
              søndagen den beste.</p>
              <p>Obs! Husk å velge billett til riktig dag
              på billettsiden vår.</p>
            <div className="ticket-options">
              <table>
                <tbody>
                  <tr><td>Helgepass Voksen</td><td>499,-</td></tr>
                  <tr><td>Helgepass Barn</td><td>199,-</td></tr>
                </tbody>
              </table>
              <a className="buy-button" href="">Kjøp - Tilgjengelig snart</a>
            </div>
          </div>
        </div>
    </section>
    );
  }
}
