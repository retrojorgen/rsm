import React from 'react';
import styled, {keyframes} from 'styled-components';
import neogeologo from '../../images/neogeo-logo.png';
import neogeowlogo from '../../images/neogeo-wlogo.png';
import scanLines from '../../images/scanlines.png';
import snkFighterLeft from '../../images/snkFighterLeft.png';
import snkFighterRight from '../../images/snkFighterRight.png';

const VideoBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  
  color: blue;
  
  iframe {
    position:fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
  }
  &:after {
        content: "";
        z-index: 2;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: url(${scanLines});
    }
  display: none;
  @media (min-device-width: 1100px) {
    display: block;
  }

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
    #logo, 
    #wlogo {
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
    padding-top: 140px;
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
    background: url(${snkFighterLeft});
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
  background: url(${snkFighterRight});
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
        notActive : true
      }
    }

    componentDidMount () {
      window.setTimeout(() => {
        this.setState({
          notActive: false
        })
      }, 10);
      
    }
    render() {
        let active = this.state.notActive
        const language = localStorage.language || 'no';
        const translations = {
          no: {
            title: "Offisiell Neo Geo World tour på RSM18",
            subtitle: `Retrospillmessen er offisielt stoppested for Neo Geo World Tour fra SNK`,
            description: [
              `Er du skandinavias beste fighting-gamer? Da kan du vinne
              en reise til Hong Kong!`,
              `På lørdagen (13.05.2018) av Retrospillmessen holder SNK turneringer i både King of Fighters 98 og King of Fighters XIV! SNK trekker to vinnere som hver får
              en tur til Hong Kong for å delta i de internasjonale finalene. Alle kan delta!`,
              `Les mer på <a href=https://www.facebook.com/neogeoworldtour/>Neo Geo World Tour sin Facebookside</a> 
              og <a href=https://smash.gg/tournament/neo-geo-world-tour-norway-stop>meld deg på her for å være sikret plass!</a> Vi sees`

            ]
          },
          en: {
            title: "Official Neo Geo World tour at RSM18",
            subtitle: `Retrospillmessen 2018 is an offical leg of the Neo Geo World Tour from SNK`,

            description: [
              `Are you amazing at fighting games? Well, at Retrospillmessen 2018 you have the chance of winning a trip to Hong Kong!`,
              `On Saturday (05.13.2018) during the convention SNK wil beholding a tournament in both King of Fighters 98 and King of Fighters XIV. Winners of both tournaments
              will get a trip to Hong Kong each to compete in the finals. Everyone can participate!`,
              `Find out more on <a href=https://www.facebook.com/neogeoworldtour/>Neo Geo World Tour's Facebook page</a> 
              and <a href=https://smash.gg/tournament/neo-geo-world-tour-norway-stop>register here to secure your spot in the tournament!</a> See you there.`

            ]
          }
        }
        let translation = translations[language];              
        return (
          <NeoWrapper>
            <NeoLeft className={active ? '': 'active'}>
              
            </NeoLeft>
            <NeoBody>
            <NeoLogoHeader>
              <img id="logo" className={active ? '': 'active'} src={neogeologo} alt="King of Fighters Character" />
              <img id="wlogo" className={active ? '': 'active'} src={neogeowlogo} alt="King of Fighters Character" />
            </NeoLogoHeader>
            <VideoBackground>
              <iframe title="neo-geo-youtube-video" class="videoContainer__video" width="1920" height="1080" src="http://www.youtube.com/embed/IDmNL4c4xwE?modestbranding=1&autoplay=1&controls=0&fs=0&loop=1&rel=0&showinfo=0&disablekb=1&playlist=IDmNL4c4xwE" frameBorder="0"></iframe>
            </VideoBackground>
            <Constrainer>
              <NeoTitle>{translation.title}</NeoTitle>
              <NeoSubTitle>{translation.subtitle}</NeoSubTitle>
              {translation.description.map((description, key) => (
                <NeoParagraph key={key} dangerouslySetInnerHTML={{__html: description}} />
              ))}
            </Constrainer>
            </NeoBody>
            <NeoRight className={active ? '': 'active'}></NeoRight>
          </NeoWrapper>
        )
    }
}
