import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderBackground from './top-background2.jpg';
import LarryBackground from './al-lowe-background.jpg';
import EtBackground from './etBack.jpg';
import SectionBackground from './guests-background.jpg';
import Allowe from './allowe.png';
import HowardWarshaw from './hwarshaw.png';

import { BlackSection, TopTitle, HeaderTitleWrapper, Header } from '../Title/Title';


const Section = styled.div`
    padding: 40px 40px 40px 40px;
    display: flex;
    overflow: hidden;
    justify-content: ${props => props.justified};
    align-items: center;
    position: relative;
    @media (max-device-width: 1100px) {
      flex-direction: column;
      padding: 0;
    } 
`;

const ContentSection = styled.div `
  position: relative;
  display: block;
  padding: 40px;
  overflow: hidden;
  width: 40%;
  border-radius: 8px;
  &:before {
    content: '';
    background: url(${SectionBackground});
    background-size: 50%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  @media (max-device-width: 1100px) {
    width: 100%;
    border-radius: 0;
  } 
`;

const ImageSection = styled.div `
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url(${props => props.backgroundImage});
  background-size: cover;  
  background-position:center center;
  background-repeat: no-repeat;
  display: block;
  opacity: 0.6;
  box-shadow: 0 0 40px black inset;
  background-attachment: fixed;
  &:hover {
    opacity: 0.9;
  }
  @media (max-device-width: 1100px) {
    position: relative;
    background-size: auto 100%;
    height: 300px;
    opacity: 1;
    text-align: center;
  } 
`;

const ProfileSection = styled.div `
  position: absolute;
  ${(props) => props.alignment == 'left' ? 'left: -300px': 'right: 0px'};
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.backgroundImage});
  background-size: 70%;  
  background-position:${(props) => props.alignment} bottom;
  background-repeat: no-repeat;
  display: block;
  opacity: 1;
  box-shadow: 0 0 40px black inset;
  &:hover {
    opacity: 1;
  }
  @media (max-device-width: 1100px) {
    position: absolute;
    background-size: 80%;
    background-position:center bottom;  
    height: 300px;
    left: 0;
    opacity: 1;
    text-align: center;
  } 
`;

const ImageDescription = styled.span `
  font-family: "Rubik", sans-serif;
  position: absolute;
  text-transform: uppercase;
  font-size: 0.8em;
  right: ${(props) => props.alignment === 'right' ? '40px': 'auto'};
  left: ${(props) => props.alignment === 'left' ? '40px': 'auto'};
  top: 40px;
  display: inline-block;
  padding: 20px;
  background-color: rgba(0,0,0,0.5);
  border-radius: 20px;
  color: white;
  @media (max-device-width: 1100px) {
    position: relative;
    opacity: 1;
    right: auto;
    left: auto;
    top: auto;
    margin-top: 10px;
    padding: 10px;
  } 
`;


const ContentSectionHeader = styled.h2 `
  font-family: "Rubik", sans-serif;
  font-size: 2em;
  color: black;
  position: relative;
  font-weight: bold;
`;

const ContentSectionParagraph = styled.p `
  font-family: "Rubik", sans-serif;
  font-size: 1em;
  line-height: 1.6em;
  color: black;
  position: relative;
  
`;

export default class GuestsList extends Component {
  

  render() {
    window.scrollTo(0, 0);
    const language = localStorage.language || 'no';
    const translations = {
      no: {
        title: "Gjester på RSM 18",
        subtitle: "De beste fra bransjen og youtube!",
        unnanouncedHeader: "Følg med, flere gjester annonseres snart!",
        sections: [
          {
            personImage: Allowe,
            backgroundImage: LarryBackground,
            imageDescription: "Al Lowe kommer til Retrospillmessen 18",
            header: "Al Lowe (Leisure Suit Larry)",
            
            paragraphs: [
              `Al Lowe er en av de virkelig store legendene i spillbransjen!`,
              `Han er kjent for å ha skapt spillserien Leisure Suit Larry, ofte hyllet som et av de mest unike eventyrspillene i historien!`,
              `Han jobbet for spillselskapet Sierra (tidligere Sierra On Line) store deler av karrieren, først som utvikler av lærespill på lisens fra Disney.`,
              `Senere som utvikler på Kings Quest og Police Quest serien, før han bega seg ut på Larry-serien`,
              `Al pensjonerte seg offisielt fra Sierra i 1998, men engasjementet for spill og humor (og elektriske togbaner) har han aldri lagt på hylla.
              Al er i dag 71 år gammel og kaller seg for "The oldest video game developer alive". Vi gleder oss utrolig til å treffe han på RSM 18 hvor han kommer
              både for å holde foredrag og gjøre Q&A`,

            ]
          },{
            backgroundImage: EtBackground,
            personImage: HowardWarshaw,
            imageDescription: "Howard Scott Warshaw kommer til Retrospillmessen 2018",
            header: "Howard Scott Warshaw (E.T., Atari 2600)",
            
            paragraphs: [
              `Howard Scott Warshaw er en tidligere amerikansk spilldesigner, som er verdenskjent for å ha skapt det legendariske spillet E.T. til spillkonsollen Atari 2600. Spillet fikk mye av skylden for at spillindustrien i nord-amerika kollapset fullstendig tidlig på 80-tallet.`,
              `Warshaw ble selv håndplukket til E.T-prosjektet, og hevder selv at spillet ble utviklet på 5 og en halv uke. Det var fordi spillet måtte bli ferdig til julehandelen i 1982. Spillet solgte faktisk forbausende godt, men etter jul rant returene inn i butikkene som hadde solgt spillet.`,
              `Det gikk lenge rykter om at Atari i ren frustrasjon hadde begravd de gjenværende E.T kassetene på en hemmelig plass i ørkene i New Mexico.`,
              `Et tema som ble dekket i dokumentaren <a href=“https://en.wikipedia.org/wiki/Atari:_Game_Over”> Game: Over</a> og <a href=“https://en.wikipedia.org/wiki/Angry_Video_Game_Nerd:_The_Movie”> Angry Video Game Nerd: The Movie</a>.  Warshaw medvirker i begge filmene.`,
              `Warshaw utviklet faktisk gode spill også, slik som det annerkjente Yar’s Revenge og Indiana Jones-spillet Raiders of The Lost Ark. Warshaw forlot Atari ikke lenge etter E.T fadesen. Senere i livet tok han master-grad i psykologi og livnærer seg i dag som psychoterapeut i Silicon Valley.`,
              `Warshaw er fortsatt en lidenskapelig fyr, og han gleder seg til å komme til Norge for å snakke om spillene han skapte, og historien rundt dem!`
            ]
          },
        ]
      },
      en: {
        title: "Guests at RSM18",
        subtitle: "The best of the biz",
        unnanouncedHeader: "More guests will be announced shortly!",
        sections: [
          {
            backgroundImage: LarryBackground,
            personImage: Allowe,
            imageDescription: "Al Lowe is visiting Retrospillmessen 2018",
            header: "Al Lowe (Leisure Suit Larry-series)",
            
            paragraphs: [
              `Al Lowe is one of the true legends of the video game business.`,
              `Lowe got the worlds (of video gamers) attention with his ground breaking computer game Leisure Suit Larry. Which is still regarded as one of the most unique adventures games ever created.`,
              `For most of his career he worked for the gaming company Sierra (formerly Sierra On Line). First as a developer of educational games with a Disney license,
              later as developer on the Kings Quest and Police Quest series, before devoting his time to the Leisure Suit Larry series.`,            
              `Al officially retired from Sierra in 1998, but he never retired from being a funny, creative and unique individual. He even released a joke-app on the App store!`,
              `Today, Al is 71 years young, and refers to himself at The oldest video game developer alive. We simply can't wait to meet and listen to Al at Retrospillmessen 2018!`
            ]
          },
          {
            backgroundImage: EtBackground,
            personImage: HowardWarshaw,
            imageDescription: "Howard Scott Warshaw is visiting Retrospillmessen 2018",
            header: "Howard Scott Warshaw (E.T. for Atari 2600)",
            
            paragraphs: [
              `Howard Scott Warshaw is a former American game designer, famous / infamous for creating the legendary game E.T for the Atari 2600.`,
              `The game was largely blamed starting the North-American video game crash of the early 80s.`,
              `Warshaw was actually hand-picket to do the E.T project, and claims to have created the game in only 5 and a half weeks. The game needed to be finished before the Christmas sale of 1982. The game actually sold well initially, however after Christmas many kids returned their games to the stores.`,
              `For long there were rumours that Atari buried the remaining games in an unspecified lot in New Mexico. The subject was covered in the documentary <a href=“https://en.wikipedia.org/wiki/Atari:_Game_Over”> Game: Over</a>, and the movie <a href=“https://en.wikipedia.org/wiki/Angry_Video_Game_Nerd:_The_Movie”> Angry Video Game Nerd: The Movie</a>. Warshaw appears in both movies.`,
              `Warshaw actually developed several good games as well, including the acclaimed Yar’s Revenge, and the Indiana Jones-based game Raiders of The Lost Ark.`,
              `Warsaw left Atari shortly after E.T., and later in life received a degree in Psychology. His current occupation is as a Psychotherapist in Silicon Valley.`
            ]
          },
        ]
      }
    }
    var sectionToggle = false;
    var translation = translations[language];
    let sections = translation.sections.map((a,k) => {
      let flex = sectionToggle ? 'flex-start': 'flex-end';
      let imageAligment = sectionToggle ? 'right': 'left';
      sectionToggle = !sectionToggle;
      console.log(a);
      return (
        <Section justified={flex} key={k}>
          <ImageSection backgroundImage={a.backgroundImage}>
            <ImageDescription alignment={imageAligment}>{a.imageDescription}</ImageDescription>
          </ImageSection>
          {a.personImage && 
            <ProfileSection alignment={imageAligment} backgroundImage={a.personImage}/>
          }
          <ContentSection>
            <ContentSectionHeader>{a.header}</ContentSectionHeader>
            {a.paragraphs.map((c, ck) => (
              <ContentSectionParagraph key={ck} dangerouslySetInnerHTML={{__html: c}}>
              </ContentSectionParagraph>
            ))}
          </ContentSection>
        </Section>
        
      );
    });

    return (
      <div className="About">
        <Header headerBackground={HeaderBackground}>
          <HeaderTitleWrapper>
            <TopTitle>
              {translation.title}
            </TopTitle>
            <p>{translation.subtitle}</p>
          </HeaderTitleWrapper>
        </Header>
        
        {sections}
        <BlackSection>{translation.unnanouncedHeader}</BlackSection>
      </div>
    );
  }
}
