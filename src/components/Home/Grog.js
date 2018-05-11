import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../Title/Title';
import groggLogo from '../../images/grogg-logo.png';
import groggBottle from '../../images/grogg-bottle.png';
import groggBackground from '../../images/grogg-background.jpg';

const WrapperGrog = styled(Wrapper)`
  display: flex;
  background: url(${groggBackground});
  background-size: cover;
  background-position: center center;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 0;
  @media (min-device-width: 1100px) {
    height: 500px;
    flex-direction: row;
  } 
`;

const LeftCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 160px;
  }
  @media (min-device-width: 1100px) {
    img {
      max-height: 100%;
      width: auto;
    }
  }
`;

const RightCol = styled.div`
  align-items: center;
  display: none;
  img {
    max-height: 60%;
  }
  @media (min-device-width: 1100px) {
    display: flex;
  }
`;

const MiddleCol = styled.div`
  padding: 0 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 1 100%;
  @media (min-device-width: 1100px) {
    padding: 20px;
  }
  h1 {
    font-size: 1.3em;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 0;
    color: orange;
    margin-top: 0;
    @media (min-device-width: 1100px) {
      font-size: 2em;
    }
  }
  h2 {
    font-size: 4em;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 0;
    margin-top: 4px;
    border-bottom: 4px solid orange;
  }
  p {
    max-width: 500px;
    margin-bottom: 4px;
    text-align: center;
  }
  
`;

const GrogInfo = {
	no: {
		title: 'Nyhet! Prøv vår piratgodkjente Grog, direkte fra SCUMM bar i Monkey Island',
		price: 'Kun 30 kr',
		description: [
			'Grogg får du kjøpt i kantina vår!',
			' Den inneholder ikke alkohol (selvsagt) og passer til unge og gamle pirater',
		],
	},
	en: {
		title: 'Try our Pirate-approved Grog, straight from SCUMM bar in Monkey Island!',
		price: 'Just 30 kr',
		description: [
			'You can get Grog in our cafeteria. It does not contain alcohol and is safe for pirates of all ages. (contains sugar) ',
		],
	},
};

export default () => {
	const language = localStorage.language || 'no';
	const translation = GrogInfo[language];
	return (
		<WrapperGrog>
			<LeftCol>
				<img src={groggBottle} alt="Grogg bottle" />
			</LeftCol>
			<MiddleCol>
				<h1>{translation.title}</h1>
				<h2>{translation.price}</h2>
				{translation.description.map((description, d) => (
					<p key={d}>{description}</p>
				))}
			</MiddleCol>
			<RightCol>
				<img src={groggLogo} alt="grog logo" />
			</RightCol>
		</WrapperGrog>
	);
};

