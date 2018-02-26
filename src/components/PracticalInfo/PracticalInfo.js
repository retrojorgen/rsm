import React from 'react';
import styled from 'styled-components';
import infoBackground from '../../images/white-pixel-back.png';
import {PixelButton} from '../Title/Title';
import hotel from '../../images/super-mario-bros-2-mario_sleep.gif';
import outrun from '../../images/outrun.gif';
import paperboy from '../../images/paperboy.gif';
import Title from './../Title/Title';

const InfoContainer = styled.footer`
  background-image: url(${infoBackground});
  background-size: cover;
  background-position: center center;
  
  font-family: "Rubik", sans-serif;
  padding: 80px;

  @media (max-device-width: 1100px) {
      position: relative;
      display: block;
      height: auto;
      padding: 20px;
    }
`;

const InfoSectionsContainer = styled.div`
  display: flex;
  align-items: space-around;
  justify-content: space-around;
  @media (max-device-width: 1100px) {
    flex-direction: column;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 120px;
  width: 30%;
  @media (max-device-width: 1100px) {
    width: 100%;
    margin-bottom: 40px;
  }
  h2 {
    border-bottom: 4px solid #000052;
    text-transform: uppercase;
    font-size: 20px;
    text-align: center;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    padding-left: 4px;
    padding-top: 10px;
    font-size: 11px;
    margin-bottom: 20px;
  }
  .pixel-button {
    padding: 16px 20px;
    font-size: 11px;
    text-align: center;
  }
`;


const SectionHolder = styled.div`
  width: 100px;
  height: 100px;
  display: block;
  position: absolute;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.4);
  background: url(${props => props.background});
  background-size: cover;
  left: 0;
  top: 40px;

`;



export default class PracticalInfo extends React.Component {
    render() {
        const language = localStorage.language || 'no';
        const translations = {
          no: {
            title: "Praktisk info",
            overnatting: 'Hotell',
            overnattingDescription: `<strong>Scandic Park Sandefjord</strong><br><strong>
            Rabattkode</strong>: BRSM110518<br>Book online 
            <a href="https://www.scandichotels.no/">her</a>
            `,
            prices: ["Enkeltrom 864 kr", "Dobbeltrom 1015 kr", "Trippelrom 1217 kr", "Firemannsrom 1419 kr", "* Døgnpriser, inkludert frokost"],
            bookHotel: "Book her",
            billetter: 'Billetter',
            buyTickets: "Kjøp billetter",
            billetterDescription: `Vi tilbyr både <strong>dagspass</strong>, <strong>helgepass</strong>, og reduserte priser til barn opp til 12 år. 
            
            `,
            ticketPrices: [
              "Helgepass VIP Voksen - 599kr", 
              "* VIP-pass gir tilgang til messa en time før ordinær åpningstid hver dag", 
              "Helgepass VIP Barn - 249kr", 
              "Helgepass Voksen - 499kr", 
              "Helgepass Barn - 199kr", 
              "Dagspass Voksen - 289kr", 
              "Dagspass Barn - 106kr",
              "** Barn opp til 2 år slipper inn gratis", 
            ],
            address: "Adresse/praktisk",
            addressDescription: `<strong>Retrospillmessen 2018</strong><br>Runarhallen, <br>Klavenesveien 20,<br> 3220 Sandefjord<br><br>
            * <a href="https://www.google.no/maps/place/Runarhallen/@59.1486775,10.1854385,17z/data=!3m1!4b1!4m5!3m4!1s0x4646c0d946585e91:0x44ab2add79b2fdf9!8m2!3d59.1486775!4d10.1854386?hl=no" target="new_window">Runarhallen kan søkes opp i google maps</a>`
          ,
          },
          en: {
            title: "Info",
            overnatting: 'Hotel',
            overnattingDescription: `<strong>Scandic Park Sandefjord</strong><br><strong>
            Rabattkode</strong>: BRSM110518<br>Book online 
            <a href="https://www.scandichotels.no/">her</a>
            `,
            prices: ["Single 864 kr", "Double 1015 kr", "Triple 1217 kr", "Four 1419 kr", "* Day rates, breakfast included"],
            billetter: 'Tickets',
            bookHotel: "Book here",
            buyTickets: "Buy tickets",
            billetterDescription: `We offer  <strong>day passes</strong>, <strong>weekend passes</strong>, and discounts for children up to 12 years. 
            
            `,
            ticketPrices: [
              "Weekend pass VIP Adult - 599kr", 
              "* VIP gives you access to the convention an hour before regular opening hours, all days", 
              "Weekend pass VIP Child - 249kr", 
              "Weekend pass Adult - 499kr", 
              "Weekend pass Child - 199kr", 
              "Day pass Adult - 289kr", 
              "Day pass Child - 106kr", 
              "** Kids/Babies up to 2 years get in for free", 
            ],
            address: "Address/info",
            addressDescription: `<strong>Retrospillmessen 2018</strong><br>Runarhallen, <br>Klavenesveien 20,<br> 3220 Sandefjord<br><br>
            * <a href="https://www.google.no/maps/place/Runarhallen/@59.1486775,10.1854385,17z/data=!3m1!4b1!4m5!3m4!1s0x4646c0d946585e91:0x44ab2add79b2fdf9!8m2!3d59.1486775!4d10.1854386?hl=no" target="new_window">Runarhallen is searchable in google maps</a>`
          ,
          }
        }
        let translation = translations[language];              
        return (
            <InfoContainer>
                <Title title={translation.title} color="Yellow" />
                <InfoSectionsContainer>
                  <InfoSection>
                    <SectionHolder background={hotel} />
                    <h2>{translation.overnatting}</h2>
                    <div dangerouslySetInnerHTML={{__html: translation.overnattingDescription}}></div>
                    <ul>
                      {translation.prices.map((price, k) => (
                        <li key={k.toString()}>{price}</li>
                      ))}
                    </ul>
                    <PixelButton className="pixel-button" href="https://www.scandichotels.no/">{translation.bookHotel}</PixelButton>
                  </InfoSection>
                  <InfoSection>
                    <SectionHolder background={paperboy} />
                    <h2>{translation.billetter}</h2>
                    <div dangerouslySetInnerHTML={{__html: translation.billetterDescription}}></div>
                    <ul>
                      {translation.ticketPrices.map((price, k) => (
                        <li key={k.toString()}>{price}</li>
                      ))}
                    </ul>
                    <PixelButton className="pixel-button" href="https://retrospillmessen.hoopla.no/sales/2422891309">{translation.buyTickets}</PixelButton>
                  </InfoSection>
                  <InfoSection>
                    <SectionHolder background={outrun} />
                    <h2>{translation.address}</h2>
                    <div dangerouslySetInnerHTML={{__html: translation.addressDescription}}></div>
                  </InfoSection>
                </InfoSectionsContainer>
          </InfoContainer>
        )
    }
}
