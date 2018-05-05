import React from 'react';
import styled, { keyframes } from 'styled-components';
import wideLogo from '../../images/retro-cup-logo.svg';
import leftFigure from '../../images/bomberMan.png';
import rightFigure from '../../images/streetFighter.png';
import background from '../../images/retrocup-background.jpg';

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  background: url(${background});
  background-size: cover;
  background-position: top center;
  opacity: 0.4;
`;


const float = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.09);
  }

  100% {
    transform: scale(1);
  }
`;

const NeoLogoHeader = styled.div`
    display: flex;
    justify-content: center;
    background: transparent;
    align-items: center;
    position: relative;
    z-index: 100;
    overflow: hidden;
    
    @media (min-device-width: 1100px) {
      overflow: visible;
      animation: ${float} 20s linear infinite;
    }
    
    #logo {
      height: 100px;
      transform: translateX(-100px) rotate(-360deg);
      opacity: 0;
      margin-right: 20px;
      @media (min-device-width: 1100px) {
        height: 200px;
      }
    }
    #wlogo {
      height: 60px;
      transform: translateX(100px);
      opacity: 0;
      @media (min-device-width: 1100px) {
        height: 160px;
      }
    }
    #wide-logo {
      height: 80px;
      transform: translateX(100px);
      opacity: 0;
      @media (min-device-width: 1100px) {
        height: 200px;
      }
    }
    #logo, 
    #wlogo,
    #wide-logo {
      transition: all 2s ease-in-out;
      filter: blur(20px) brightness(400%);
      &.active {
        opacity: 1;
        transform: translateX(0) rotate(0deg);
        filter: blur(0px) brightness(100%);
      }
    }
`;

const NeoWrapper = styled.div`
  padding-top: 80px;
  position: relative;
  padding-bottom: 20px;
  display: flex;
  @media (min-device-width: 1100px) {
    padding-top: 90px;
  }
`;

const NeoTitle = styled.h1`
    text-transform: uppercase;
    color: #f3f07a;
    text-shadow: 4px 4px 2px rgba(0,0,0,1);
    font-size: 2.7em;
    margin-bottom: 0;
    margin-top: 0;
`;

const NeoSubTitle = styled.h2`
  text-transform: uppercase;
  color: #eeb528;
  font-size: 1.44em;
  margin-top: 4px;
  margin-bottom: 20px;
  
`;

const NeoParagraph = styled.p`
    color: #00acca;
    font-size: 1em;
    line-height: 1.5em;
    max-width: 400px;
    margin: 0 auto;
    padding-bottom: 10px;
    a {
      color: #00d4f9;
    }
    &:nth-child(odd) {
      color: #00d4f9;
    }

`;

const NeoBody = styled.div`
    width: 100%;
    @media (min-device-width: 1100px) {
      flex: 0 0 600px;
    }
`;

const NeoLeft = styled.div`
    height: 100%;
    background: url(${leftFigure});
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: right bottom;
    flex-grow: 1;
    height: ${window.innerHeight}px;
    position: relative;
    z-index: 10;
    transition: all 1s ease-in-out;
    transform: translateX(-100%);
    opacity: 0;
    &.active {
      transform: translateX(0);
      opacity: 1;
    }
    display: none;
    @media (min-device-width: 768px) {
        display: block;
    }
`;

const NeoRight = styled.div`
  height: 100%;
  background: url(${rightFigure});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: left bottom;
  flex-grow: 1;
  height: ${window.innerHeight}px;
  position: relative;
  z-index: 10;
  transition: all 1s ease-in-out; 
  transform: translateX(100%);
  opacity: 0;
  &.active {
      transform: translateX(0);
      opacity: 1;
    }
  display: none;
  @media (min-device-width: 768px) {
      display: block;
  }  
`;

const Constrainer = styled.div`
    
    position: relative;
    text-align: center;
    z-index: 20;
    background-color: rgba(0,0,0,0.4);
    padding: 20px;
`;


export default class NeoGeo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notActive: true,
		};
	}

	componentDidMount() {
		window.setTimeout(() => {
			this.setState({
				notActive: false,
			});
		}, 10);
	}
	render() {
		const active = this.state.notActive;
		const language = localStorage.language || 'no';
		const translations = {
			no: {
				title: 'Retrocup på søndag 13. mai',
				subtitle: 'Er du norges beste i Street Fighter 2 eller Super Bomberman?',
				description: [
					'På søndag kjører vi i gang to turneringer! Det blir tvekamp i både Street Fighter 2 og Super Bomberman, med noen artige premier!',
					'OBS! Husk å møte opp tidlig på søndag for å bli med i turneringene!',
					'Cupen har et eget event <a href=https://www.facebook.com/events/139807560199278/>her på facebook,</a> hvor du kan følge med på oppdateringer!',

				],
			},
			en: {
				title: 'Retrocup Sunday May 13th',
				subtitle: 'Are you the best of the land in Street Fighter 2 or Super Bomberman?',
				description: [
					'On Sunday at Retrospillmessen we are hosting two tournaments! Bring your a-game to the convention for Street Fighter 2 and SUper Bomberman. We have some cool prices for the winners!',
					'Remember to show up early on Sunday to enter the tournament!',
					'The cup has its own event <a href=https://www.facebook.com/events/139807560199278/>here on facebook,</a>! Follow it to keep up to date with news',
				],
			},
		};
		const translation = translations[language];
		return (
			<NeoWrapper>
				<NeoLeft className={active ? '': 'active'} />
				<NeoBody>
					<NeoLogoHeader>
						<img id="wide-logo" className={active ? '': 'active'} src={wideLogo} alt="Retro Cup" />
					</NeoLogoHeader>
					<Background />
					<Constrainer>
						<NeoTitle>{translation.title}</NeoTitle>
						<NeoSubTitle>{translation.subtitle}</NeoSubTitle>
						{translation.description.map((description, key) => (
							<NeoParagraph key={key} dangerouslySetInnerHTML={{ __html: description }} />
						))}
					</Constrainer>
				</NeoBody>
				<NeoRight className={active ? '': 'active'} />
			</NeoWrapper>
		);
	}
}
