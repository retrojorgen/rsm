import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './../Title/Title';
import TicketBackground from './tickets-background.jpg';
import TicketBackgroundYellow from './tickets-background-yellow.png';
import TicketBackgroundOrange from './tickets-background-orange.png';


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
    background-image: url(${(props) => props.ticketBackground});
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

    const language = localStorage.language || 'no';
    const translations = {
      no: {
        title: "Billetter til RSM 2018",
        subTitle: "Obs! Billetter kommer i salg veldig snart. Følg med for early bird tilbud. Våre rabbaterte barnebilletter gjelder barn under 13 år.",
        ticketsHeader: "Billettkategorier",
        unnanouncedHeader: "Følg med, flere gjester annonseres snart!",
        buyButton: "Kjøp - Tilgjengelig snart",
        ticketGroups: [
          {
            background: TicketBackgroundYellow,
            header: "VIP Helgepass",
            paragraphs: [
              `VIP-biletten gir deg tilgang til Retrospillmessen både lørdag og søndag.
              I tillegg slipper du inn en time tidligere enn andre gjester begge dagene.
              Perfekt for deg som jakter på skatter eller vil treffe VIP-gjestene våre
              før køene bygger seg opp!`,
              `Du slipper selvsagt også å vente i den vanlige åpningskøen`
            ],
            ticketOptions: [
              {name: "VIP Voksen", price: 599},
              {name: "VIP barn (12 og under)", price: 219},
            ]
          },
          {
            background: TicketBackground,
            header: "Helgepass",
            paragraphs: [
              `Helgepass gir deg tilgang til Retrospillmessen. Det er forskjellige program hver dag
              på Retrospillmessen, og begge dagene gir en helt forskjellig opplevelse.
              Vi anbefaler å være med på hele showet!`, 
            ],
            ticketOptions: [
              {name: "Helgepass Voksen", price: 499},
              {name: "Helgepass barn (12 og under)", price: 199},
            ]
          },
          {
            background: TicketBackgroundOrange,
            header: "Dagspass",
            
            paragraphs: [
              `Dagspass gir deg tilgang til Retrospillmessen hele lørdagen,
              eller hele søndagen. Vi anbefaler å sjekke timeplanen vårt for å se hvilken
              dag du får mest ut av. Er du på utkikk etter en roligere dag er 
              søndagen den beste.`,
              `Obs! Husk å velge billett til riktig dag
              på billettsiden vår.`, 
            ],
            ticketOptions: [
              {name: "Dagspass Voksen", price: 279},
              {name: "Dagspass barn (12 og under)", price: 106},
            ]
          }
        ]
      },
      en: {
        title: "Tickets for RSM 2018",
        subTitle: "Attention! Tickets will be available shortly. Follow us here or on facebook for early bird discounts!",
        ticketsHeader: "Ticket categories",
        buyButton: "Purchase - available soon",
        ticketGroups: [
          {
            background: TicketBackgroundYellow,
            header: "VIP Weekend pass",
            paragraphs: [
              `VIP Weekend pass tickets give you access to everything at Retrospillmessen both Saturday and Sunday`,
              `You also get to enter the convention an hour earlier than everyone else on both days.
              A great advantage if you are searching for rare items, or looking to get some extra
              time with your favourite VIP-guest.`,
            ],
            ticketOptions: [
              {name: "VIP Adult", price: 599},
              {name: "VIP Kid (12 and under)", price: 219},
            ]
          },
          {
            background: TicketBackground,
            header: "Weekend pass",
            paragraphs: [
              `Weekend pass gives you access to the entire convention both Saturday and Sunday`,
              `Why weekend pass you ask? Well, there is a different schedule on Saturday and Sunday,
              and if you are a true retro geek you will want to experience it all!` 
            ],
            ticketOptions: [
              {name: "Weekend pass Adult", price: 499},
              {name: "Weekend pass Kid (12 and under)", price: 199},
            ]
          },
          {
            background: TicketBackgroundOrange,
            header: "Day pass",
            paragraphs: [
              `Day pass gives you access to the entire convention on Saturday or Sunday.`,
              `Planning a day out with your family? We recommend Sundays, since it is always
              a bit calmer, with more time to play the machines.`, 
            ],
            ticketOptions: [
              {name: "Day pass Adult", price: 279},
              {name: "Day pass Kid (12 and under)", price: 106},
            ]
          }
        ]
      },
    }
    let translation = translations[language];

    return (
    <TicketsWrapper>
        <Title title={translation.title} />
        <p>{translation.subTitle}</p>
        <h2>{translation.ticketsHeader}</h2>
        <TicketsListContainer>
          {translation.ticketGroups.map((t,k) => {
            return (
              <TicketGroup key={k} ticketBackground={t.background}>
                <h3>{t.header}</h3>
                {t.paragraphs.map((p,k) => (
                  <p key={k}>{p}</p>
                ))}
                <TicketOptions>
                  <table>
                    <tbody>
                      {t.ticketOptions.map((o, k) => (
                        <tr><td>{o.name}</td><td>{o.price} NOK</td></tr>
                      ))}
                    </tbody>
                  </table>
                </TicketOptions>
                <BuyButton href="">{translation.buyButton}</BuyButton>  
              </TicketGroup>
            )
          })}
      </TicketsListContainer>
    </TicketsWrapper>
    );
  }
}
