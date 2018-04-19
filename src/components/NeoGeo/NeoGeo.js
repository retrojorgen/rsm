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
`;

const NeoSubTitle = styled.h2`
  text-transform: uppercase;
  color: #eeb528;
  font-size: 1em;
`;

const NeoParagraph = styled.p`
    text-transform: uppercase;
    color: #00acca;
    font-size: 0.8em;
    line-height: 1.5em;
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
    border-radius: 20px;
    margin-top: 20px;
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
            title: "Neo Geo World tour på RSM18",
            subtitle: `Endelig kan vi avsløre at Retrospillmessen 2018 er offisielt
            stoppested for Neo Geo World Tour`,
            description: [
              `Neo Geo er navnet på et legendarisk stykke arcade og hjemmekonsoll-hardware fra det japanske spillselskapet SNK.
              Gjennom årene har maskinen vært gjenstand for kultspill som Metal Slug, Puzzle Bobble, Samurai Showdown og ikke minst
              den langløpende fightingserien King Of Fighters`,
              `I år turnerer SNK verden rundt med Neo Geo, og kommer til Retrospillmessen for å arrangere turning i nettopp King of Fighters.
              Her blir det både innslag av King of Fighters 98 og nyere King Of Fighters XIV, så det er bare å sette i gang og øve hvis du tror du
              har en sjanse i turneringen! Fra før av har turnering vært innom  Los Angeles, Monaco og Kuwait!`,
              `Hva kan jeg vinne spør du? Vinnerene av turneringene i King Of Fighters 98 og King of Fighters XIV vinner begge en reise til Hong Kong for å delta i en internasjonal finale i King of Fighters!
              Det blir også andre fete premier å vinne`,
              `PS. Det blir også turnering i blant annet Metal Slug, Bomberman 5 og Street Fighter 2`,
              `Når skjer det? Lørdag 12. mai: Neo Geo World Tour-turnering i KoF 98, KoF XIV og Metal Slug. Søndag 13. mai: Retro Cup med Super Bomberman 5 og Street Fighter 2`

            ]
          },
          en: {
            title: "Neo Geo World tour at RSM18",
            subtitle: `Retrospillmessen 2018 is an official leg of the Neo Geo World Tour!`,
            description: [
              `Neo Geo is a legendary piece of arcade and home console hardware from the Japanese game company SNK.
              Through the years several of Neo Geos premiere games have become cult hits, like Metal Slug, Puzzle Bobble, Samurai Showdown and of the fighting game King of Fighters.`,
              `This year SNK is touring the world with Neo Geo, arranging tournaments in key locations, like Los Angeles, Monaco, Kuwait, and now Retrospillmessen 2018 in Norway!
              Are you an oldschool or new school gamer? Doesn't matter! There will be held two separate tournaments in King of Fighters 98 and King of Fighters XIV.
              Winners of both tournaments will win a trip to Hong Kong to compete in the international finals!`,
              `PS. During the convention SNK will also run other tournaments in Metal Slug, Bomberman 5 og Street Fighter 2, with prizes.`,
              `When? Saturday 12. May: Neo Geo World Tour-tournament in KoF 98, KoF XIV and a casual tournament in Metal Slug. Sunday 13. May: Retro Cup med Super Bomberman 5 og Street Fighter 2`

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
              <iframe title="neo-geo-youtube-video" class="videoContainer__video" width="1920" height="1080" src="http://www.youtube.com/embed/IDmNL4c4xwE?modestbranding=1&autoplay=1&controls=0&fs=0&loop=1&rel=0&showinfo=0&disablekb=1&playlist=IDmNL4c4xwE" frameborder="0"></iframe>
            </VideoBackground>
            <Constrainer>
              <NeoTitle>{translation.title}</NeoTitle>
              <NeoSubTitle>{translation.subtitle}</NeoSubTitle>
              {translation.description.map((description, key) => (
                <NeoParagraph key={key}>{description}</NeoParagraph>
              ))}
            </Constrainer>
            </NeoBody>
            <NeoRight className={active ? '': 'active'}></NeoRight>
          </NeoWrapper>
        )
    }
}
