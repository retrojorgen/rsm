import React from 'react';
import styled from 'styled-components';
import infoBackground from '../../images/white-pixel-back.png';
import Title, { PixelButton } from '../Title/Title';
import hotel from '../../images/super-mario-bros-2-mario_sleep.gif';
import outrun from '../../images/outrun.gif';
import paperboy from '../../images/paperboy.gif';

const InfoContainer = styled.footer`
  background-image: url(${infoBackground});
  background-size: cover;
  background-position: center center;


  
  font-family: "Rubik", sans-serif;
  padding: 80px;
  a {
    word-break: break-word;
  }
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


export default () => {
	const language = localStorage.language || 'no';
	const translations = {
		no: {
			title: 'Praktisk info',
			overnatting: 'Hotell',
			overnattingDescription: `<strong>Scandic Park Sandefjord</strong><br>
            <br>Trenger du å booke rom til messa? Det er fortsatt noen rom ledig, men online-rabattkoden har utløp.
            Send derfor en mail til <a href="mailto:solveig.edvardsen@scandichotels.com">solveig.edvardsen@scandichotels.com </a> eller ring Solveig på <a href="tel:33447422">33447422</a>
            for å få rom med vår rabatt!
            `,
			prices: ['Enkeltrom 864 kr', 'Dobbeltrom 1015 kr', 'Trippelrom 1217 kr', 'Firemannsrom 1419 kr', '* Døgnpriser, inkludert frokost'],
			bookHotel: 'Book her',
			billetter: 'Billetter',
			buyTickets: 'Kjøp billetter',
			billetterDescription: 'Vi tilbyr både <strong>dagspass</strong>, <strong>helgepass</strong>, og reduserte priser til barn opp til 12 år. Du kan selvsagt betale i døra også!',
			ticketPrices: [
				'Helgepass VIP Voksen - 599kr',
				'* VIP-pass gir tilgang til messa en time før ordinær åpningstid hver dag',
				'Helgepass VIP Barn - 249kr',
				'Helgepass Voksen - 499kr',
				'Helgepass Barn - 199kr',
				'Dagspass Voksen - 289kr',
				'Dagspass Barn - 106kr',
				'** Barn opp til 2 år slipper inn gratis',
			],
			address: 'Adresse / praktisk',
			addressDescription: `<strong>Retrospillmessen 2018</strong><br>Runarhallen, <br>Klavenesveien 20,<br> 3220 Sandefjord<br><br>
            * <a href="https://www.google.no/maps/place/Runarhallen/@59.1486775,10.1854385,17z/data=!3m1!4b1!4m5!3m4!1s0x4646c0d946585e91:0x44ab2add79b2fdf9!8m2!3d59.1486775!4d10.1854386?hl=no" target="new_window">Runarhallen kan søkes opp i google maps</a>`
			,
		},
		en: {
			title: 'Info',
			overnatting: 'Hotel',
			overnattingDescription: `<strong>Scandic Park Sandefjord</strong><br>
            <br>Need to book a room for the convention? There are still rooms available with our discout, but the online discount-code has expired.
            To book a room with our discounted prices e-mail the hotel at <a href="mailto:solveig.edvardsen@scandichotels.com">solveig.edvardsen@scandichotels.com </a> or call Solveig Edvardsen (hotel event coordinator) at <a href="tel:+4733447422">+47 33 44 74 22</a>`,
			prices: ['Single 864 kr', 'Double 1015 kr', 'Triple 1217 kr', 'Four 1419 kr', '* Day rates, breakfast included'],
			billetter: 'Tickets',
			bookHotel: 'Book here',
			buyTickets: 'Buy tickets',
			billetterDescription: 'We offer  <strong>day passes</strong>, <strong>weekend passes</strong>, and discounts for children up to 12 years. You can pay at the entrance as well',
			ticketPrices: [
				'Weekend pass VIP Adult - 599kr',
				'* VIP gives you access to the convention an hour before regular opening hours, all days',
				'Weekend pass VIP Child - 249kr',
				'Weekend pass Adult - 499kr',
				'Weekend pass Child - 199kr',
				'Day pass Adult - 289kr',
				'Day pass Child - 106kr',
				'** Kids/Babies up to 2 years get in for free',
			],
			address: 'Address / info',
			addressDescription: `<strong>Retrospillmessen 2018</strong><br>Runarhallen, <br>Klavenesveien 20,<br> 3220 Sandefjord<br><br>
            * <a href="https://www.google.no/maps/place/Runarhallen/@59.1486775,10.1854385,17z/data=!3m1!4b1!4m5!3m4!1s0x4646c0d946585e91:0x44ab2add79b2fdf9!8m2!3d59.1486775!4d10.1854386?hl=no" target="new_window">Runarhallen is searchable in google maps</a>`
			,
		},
	};
	const translation = translations[language];
	return (
		<InfoContainer>
			<Title title={translation.title} color="Yellow" />
			<InfoSectionsContainer>
				<InfoSection>
					<SectionHolder background={hotel} />
					<h2>{translation.overnatting}</h2>
					<div dangerouslySetInnerHTML={{ __html: translation.overnattingDescription }} />
					<ul>
						{translation.prices.map((price, k) => (
							<li key={k.toString()}>{price}</li>
						))}
					</ul>
				</InfoSection>
				<InfoSection>
					<SectionHolder background={paperboy} />
					<h2>{translation.billetter}</h2>
					<div dangerouslySetInnerHTML={{ __html: translation.billetterDescription }} />
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
					<div dangerouslySetInnerHTML={{ __html: translation.addressDescription }} />
				</InfoSection>
			</InfoSectionsContainer>
		</InfoContainer>
	);
};
