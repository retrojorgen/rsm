import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './../Title/Title';
import sectionBack from '../../images/dark-pixel-back.jpg';
import pikachu from '../../images/pikachu.gif';
import { PixelButton } from '../Title/Title'


const TicketsListWrapper = styled.div`
  @media (max-device-width: 1100px) {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

const TicketsListContainer = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 100%;
    width: 1020px;
    margin: 0 auto;
    @media (max-device-width: 1100px) {
        flex-direction: row;
        max-width: none;
        width: ${props => (window.innerWidth-40) * props.tickets}px;
    }
`;


const SectionContainer = styled.div`
  background: url(${sectionBack});
  background-size: cover;
  padding: 80px;
  position: relative;
  @media (max-device-width: 1100px) {
    padding: 0;
  }
`;


const TicketGroup = styled.div`
    background: ${props => props.ticketBackground};
    background-size: 50%;
    max-width: 30%;
    border-radius: 0;
    padding: 20px;
    font-family: "Rubik", sans-serif;
    display: flex;
    flex-direction: column;
    transition: all 0.2s ease-in;
    color: ${(props) => props.color};
    margin-bottom: 10px;
    &:hover {
      transform: scale(1.05);
    }

    h3 {
      text-align: center;
      font-size: 2em;
      margin-bottom: 20px;
      text-transform: uppercase;
      text-shadow: 0 2px 2px rgba(0,0,0,0.6);
    }
    p {
      font-size: 14px;
      line-height: 19px;
    }
    @media (max-device-width: 1100px) {
        width: ${window.innerWidth-40}px;
        max-width: 100%;
        margin: 10px;

    }
`;

const Pikachu = styled.div`
    background: url(${pikachu});
    width: 200px;
    height: 200px;
    background-size: cover;
    position: absolute;
    left: 50%;
    transform: translateX(-500px) scaleX(-1);
    top: 60px;
`;

const TicketOptions = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    font-size: 14px;
    table {
      width: 100%;
      tr {
        td {
          border-top: 1px solid black;
          padding: 10px 0 10px 0;
          &:nth-child(2)
            text-align: right;
        }
      }
    }
`;

const BuyButton = styled(PixelButton)`
  text-align: center;
`;

export default class Tickets extends Component {
  render() {

    const language = localStorage.language || 'no';
    const translations = {
      no: {
        title: "Billetter til RSM 2018",
        ticketsHeader: "Billettkategorier",
        unnanouncedHeader: "Følg med, flere gjester annonseres snart!",
        buyButton: "Kjøp billett",
        ticketGroups: [
          {
            background: "#a22abc",
            color: 'white',
            header: "VIP Helgepass",
            paragraphs: [
              `VIP-billetter er akkurat som et vanlig helgepass, bortsett fra en viktig ting. Du slipper inn i hallen en time før alle andre på både lørdag og søndag.
              Det gir en gyllen mulighet til å møte VIP-gjester og gjøre gode handler før hallen fyller seg opp!`,
              `Du slipper selvsagt også å vente i den vanlige åpningskøen. Barn opp til 2 år slipper inn gratis.`
            ],
            ticketOptions: [
              {name: "VIP Voksen", price: 599},
              {name: "VIP barn (12 og under)", price: 249},
            ]
          },
          /**
          {
            background: TicketBackgroundYellow,
            header: "VIP Helgepass",
            color: 'black',
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
          */
          {
            background: "#eeda44",
            header: "Helgepass",
            color: 'black',
            paragraphs: [
              `Helgepass gir deg tilgang til Retrospillmessen. Det er forskjellige program hver dag
              på Retrospillmessen, og begge dagene gir en helt forskjellig opplevelse.
              Vi anbefaler å være med på hele showet! OBS. Barn opp til 2 år slipper inn gratis.`, 
            ],
            ticketOptions: [
              {name: "Helgepass Voksen", price: 499},
              {name: "Helgepass barn (12 og under)", price: 199},
            ]
          }, 
          {
            background: "#eeda44",
            header: "Dagspass",
            color: 'black',
            paragraphs: [
              `Dagspass gir deg tilgang til Retrospillmessen hele lørdagen,
              eller hele søndagen. Vi anbefaler å sjekke timeplanen vårt for å se hvilken
              dag du får mest ut av. Er du på utkikk etter en roligere dag er 
              søndagen den beste.`,
              `Obs! Husk å velge billett til riktig dag
              på billettsiden vår. Barn opp til 2 år slipper inn gratis.`, 
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
        buyButton: "Purchase ticket",
        
        ticketGroups: [
          {
            background: "#a22abc",
            color: 'white',
            header: "VIP weekend pass",
            paragraphs: [
              `The VIP-tickets are a golden opportunity to get in to the convention
              an hour earlier than everyone else on saturday and sundayt. This means you have extra time to spend with the VIP-guests, and hunt for great deals at our vendor booths. `,
              `Of course you will not have to wait in line with everyone else as well. Kids/babies up to 2 years get in for free.`
            ],
            ticketOptions: [
              {name: "VIP Voksen", price: 599},
              {name: "VIP barn (12 og under)", price: 249},
            ]
          },
          /**
          {
            background: TicketBackgroundYellow,
            header: "VIP Weekend pass",
            color: 'black',
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
          **/
          {
            background: "#eeda44",
            header: "Weekend pass",
            color: 'black',
            paragraphs: [
              `Weekend pass gives you access to the entire convention both Saturday and Sunday`,
              `Why weekend pass you ask? Well, there is a different schedule on Saturday and Sunday,
              and if you are a true retro geek you will want to experience it all! Kids/babies up to 2 years get in for free.` 
            ],
            ticketOptions: [
              {name: "Weekend pass Adult", price: 499},
              {name: "Weekend pass Kid (12 and under)", price: 199},
            ]
          },
          {
            background: "#eeda44",
            header: "Day pass",
            color: 'black',
            paragraphs: [
              `Day pass gives you access to the entire convention on Saturday or Sunday.`,
              `Planning a day out with your family? We recommend Sundays, since it is always
              a bit calmer, with more time to play the machines. Kids/babies up to 2 years get in for free.`, 
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
    <SectionContainer>
        <Title title={translation.title} />
        <p>{translation.subTitle}</p>
        <h2>{translation.ticketsHeader}</h2>
        <TicketsListWrapper>
          <Pikachu />
          <TicketsListContainer tickets={translation.ticketGroups.length}>
            {translation.ticketGroups.map((t,k) => {
              return (
                <TicketGroup key={k} color={t.color} ticketBackground={t.background}>
                  <h3>{t.header}</h3>
                  {t.paragraphs.map((p,k) => (
                    <p key={k}>{p}</p>
                  ))}
                  <TicketOptions>
                    <table>
                      <tbody>
                        {t.ticketOptions.map((o, k) => (
                          <tr key={k.toString()}><td>{o.name}</td><td>{o.price} NOK</td></tr>
                        ))}
                      </tbody>
                    </table>
                  </TicketOptions>
                  <BuyButton href="https://retrospillmessen.hoopla.no/sales/2422891309" target="new_window">{translation.buyButton}</BuyButton>  
                </TicketGroup>
              )
            })}
        </TicketsListContainer>
      </TicketsListWrapper>
    </SectionContainer>
    );
  }
}
