import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './../Title/Title';
import TicketBackground from './tickets-background.jpg';


const TicketsWrapper = styled.section`
    padding: 0 10px 40px 10px;
    >p {
      color: white;
      font-family: "Rubik", sans-serif;
      text-align: center;
      padding: 20px 20px 20px 20px;
      position: relative;
    }
    >h2 {
      color: white;
      font-family: "Rubik", sans-serif;
      text-align: center;
      padding: 20px 20px 20px 20px;
      position: relative;
    }
`;


const TicketsListContainer = styled.div`
    display: flex;
    justify-content: space-around;
    @media (max-device-width: 1100px) {
        flex-direction: column;
    }
`;


const TicketGroup = styled.div`
    background-image: url(${TicketBackground});
    max-width: 30%;
    border-radius: 4px;
    padding: 20px;
    font-family: "Rubik", sans-serif;
    display: flex;
    flex-direction: column;
    transition: all 0.2s ease-in;
    margin-bottom: 10px;
    &:hover {
      transform: scale(1.05);
    }

    h3 {
      text-align: center;
      font-size: 2em;
      margin-bottom: 20px;
    }
    p {
      color: black;

    }
    @media (max-device-width: 1100px) {
        max-width: 100%;
    }
`;

const TicketOptions = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    table {
      width: 100%;
      tr {
        td {
          border-bottom: 1px solid black;
          padding: 10px 0 10px 0;
          &:nth-child(2)
            text-align: right;
        }
      }
    }
`;

const BuyButton = styled.a`
  display: block;
  text-align: center;
  padding: 10px;
  background-color: black;
  color: #e0c417;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 20px;
`;

export default class Tickets extends Component {
  render() {
    return (
    <TicketsWrapper>
        <Title title="Billetter til RSM 2018" />
        <p>Obs! Billetter kommer i salg veldig snart. Følg med for early bird tilbud. Våre rabbaterte barnebilletter gjelder barn under 13 år.</p>
        <h2>Billettkategorier</h2>
        <TicketsListContainer>
          <TicketGroup>
            <h3>VIP Helgepass</h3>
            <p>
              VIP-biletten gir deg tilgang til Retrospillmessen både lørdag og søndag.
              I tillegg slipper du inn en time tidligere enn andre gjester begge dagene.
              Perfekt for deg som jakter på skatter eller vil treffe VIP-gjestene våre
              før køene bygger seg opp!
            </p>
            <p>Du slipper selvsagt også å vente i den vanlige åpningskøen</p>
            <TicketOptions>
              <table>
                <tbody>
                  <tr><td>VIP Voksen</td><td>599,-</td></tr>
                  <tr><td>VIP Barn</td><td>219,-</td></tr>
                </tbody>
              </table>
              <BuyButton href="">Kjøp - Tilgjengelig snart</BuyButton>
            </TicketOptions>
          </TicketGroup>

          <TicketGroup>
            <h3>Helgepass</h3>
              <p>
                Helgepass gir deg tilgang til Retrospillmessen. Det er forskjellige program hver dag
                på Retrospillmessen, og begge dagene gir en helt forskjellig opplevelse.
                Vi anbefaler å være med på hele showet! 
              </p>
              <TicketOptions>
                <table>
                  <tbody>
                    <tr><td>Helgepass Voksen</td><td>499,-</td></tr>
                    <tr><td>Helgepass Barn</td><td>199,-</td></tr>
                  </tbody>
                </table>
                <BuyButton href="">Kjøp - Tilgjengelig snart</BuyButton>
              </TicketOptions>
          </TicketGroup>

          <TicketGroup>
            <h3>Dagspass</h3>
            <p>
              Dagspass gir deg tilgang til Retrospillmessen hele lørdagen,
              eller hele søndagen. Vi anbefaler å sjekke timeplanen vårt for å se hvilken
              dag du får mest ut av. Er du på utkikk etter en roligere dag er 
              søndagen den beste.</p>
              <p>Obs! Husk å velge billett til riktig dag
              på billettsiden vår.</p>
            <TicketOptions>
              <table>
                <tbody>
                  <tr><td>Dagspass Voksen</td><td>289,-</td></tr>
                  <tr><td>Dagspass Barn</td><td>109,-</td></tr>
                </tbody>
              </table>
              <BuyButton href="">Kjøp - Tilgjengelig snart</BuyButton>
            </TicketOptions>
          </TicketGroup>
      </TicketsListContainer>
    </TicketsWrapper>
    );
  }
}
