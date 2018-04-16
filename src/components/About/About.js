import React, { Component } from 'react';
import './About.css';
import styled from 'styled-components';
import Section1Background from './retrospillmessen-people.jpg';
import Section2Background from './retrospillmessen-cool.jpg';
import Section3Background from './retrospillmessen-market.jpg';
import Section4Background from './retrospillmessen-kids.jpg';
import Section5Background from './retrospillmessen-lecture.jpg';
import Section6Background from './retrospillmessen-indiegames.jpg';
import Section7Background from './retrospillmessen-mop.jpg';

import HeaderBackground from './welcome-to-retrospillmessen.jpg';

import {TopTitle, HeaderTitleWrapper, Header, Wrapper} from '../Title/Title';


const Section = styled.div`
    padding: 0;
    display: flex;
    justify-content: ${props => props.justified};
    align-items: stretch;
    position: relative;
    min-height: 600px;
    background-color: black;
    @media (max-device-width: 1100px) {
      flex-direction: column;
      padding: 0;
    } 
`;

const ContentSection = styled.div `
  position: relative;
  display: block;
  width: 40%;
  min-height: 100%;
  padding: 40px;
  text-align: center;
  background: linear-gradient(${(props) => props.alignment === "left" ? "-90deg": "90deg"}, black 80%, transparent);

  @media (max-device-width: 1100px) {
    width: 100%;
    border-radius: 0;
    padding: 20px;
    background: black;
  } 

`;

const ImageSection = styled.div `
  position: absolute;
  left: 0;
  top: 0;
  width: 104%;
  height: 100%;
  display: block;
  opacity: 1;
  overflow: hidden;
  border: 0 solid black;
  box-shadow: 0 0 20px rgba(0,0,0,0.4);
  &:after {
    content: "";
    position: absolute;
    left: ${(props) => props.alignment === 'right' ? 'auto': '0'};
    right: ${(props) => props.alignment === 'right' ? '0': 'auto'};
    top: 0;
    width: 100%;
    height: 110%;
    background: url(${props => props.backgroundImage});
    background-size: cover;  
    background-position:center ${(props) => props.alignment === 'right' ? 'right': 'left'};
    background-repeat: no-repeat;
  }
  @media (max-device-width: 1100px) {
    position: relative;
    height: 300px;
    width: 100%;
   
    opacity: 1;
    text-align: center;
    &:after {
      width: 100%;
      left: 0;
      right: auto;
      top: 0;
      height: 100%;

    }
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
    text-align: center;
  } 
`;


const ContentSectionHeader = styled.h2 `
  font-family: "Rubik", sans-serif;
  font-size: 2em;
  color: #fff142;
  position: relative;
  font-weight: bold;
`;

const ContentSectionParagraph = styled.p `
  font-family: "Rubik", sans-serif;
  font-size: 1em;
  line-height: 1.6em;
  color: white;
  position: relative;
  
`;


export default class About extends Component {
  
  componentDidMount () {
    window.scrollTo(0, 0);
  }
  
  render() {
    const language = localStorage.language || 'no';
    const translations = {
      no: {
        title: "Velkommen til Retrospillmessen",
        subtitle: "festivalen for retrofans!",
        videotitle: "Videos from Retrospillmessen",
        videosubtitle: "Videos on our facebook page",
        sections: [
          {
            backgroundImage: Section1Background,
            imageDescription: "Retrospillmessen er full av liv",
            header: "Dette opplever du på RSM18",
            paragraphs: [
              `Retrospillmessen er nordens største retroevent. 
              Hvert år strømmer over 5000 mennesker til en hall 
              i Sandefjord for å oppleve en bit av den høyst levende retrokulturen!`,
              `På Retrospillmessen kan du være deg selv, og vite at du er med folk som er like engasjerte
              og interesserte som deg! Vi er en koselig og laidback messe av nerder, for nerder, og det er vi veldig stolte av!`,
              `Hos oss finner du spill fra alle tiår, tegneserier, merch, de beste gjestene fra youtube
              og spillbransjen, retroleker og mye mer!`,
            ]
          },
          {
            backgroundImage: Section2Background,
            imageDescription: "Bilde fra vår Retrodatamaskin-utstilling",
            header: "En reise i retrohistorien",
            paragraphs: [
              `På Retrospillmessen kan du ta en reise i tv-spillenes 
              historie! Vi setter opp nesten 100 forskjellige fullt spillbare maskiner, 
              helt tilbake til midten av 70-tallet.`,
              `Hva med å teste legendariske E.T til Atari 2600? Eller mimre tilbake til 
              Giana Sisters på Commodore 64? Både retro-datamaskiner og tv-konsoller 
              er godt representert i dette området av messen. I tillegg har vi både 
              butikk-stands, håndholdte maskiner slik som Virtual Boy og til og 
              med dansemaskin!`,
              `Morsomt for de minste og de eldste :)`,
            ]
          },
          {
            backgroundImage: Section3Background,
            imageDescription: "En av våre mange retro-salgsboder",
            header: "Retromarked",
            paragraphs: [
              `Lyst til å kjøpe gamle tv-spill? Spar pengene dine til Retrospillmessen!`,
              `Her finner du hauger av boder med retrospill og konsoller. 
              Til oss kommer selgere fra hele Norge og Sverige,
               derfor er Retrospillmessen stedet du gjøre de unike kuppene som 
               kanskje aldri dukker opp på FINN.no`,
            ]
          },
          {
            backgroundImage: Section4Background,
            imageDescription: "Vi har eget område for barneaktiviteter",
            header: "Et eldorado for barnefamilier",
            paragraphs: [
              `På Retrospillmessen har vi full fokus på barnefamilier. 
              Vi er en trygg og åpen messe, hvor man får god oversikt over hele hallen uansett hvor man er. Vårt hardtarbeidende crew på
              Over 80 gutter og jenter i vårt crew passer på at alt går rolig for seg.`,
              `Barn kjeder seg ikke på Retrospillmessen heller. De fleste unger elsker å prøve maskinene vi har utstilt. I tillegg har vi
              egne aktiviteter for barn, som perling og ansiktsmaling (PS. det er lov for voksne å være med også).`,
            ]
          },
          {
            backgroundImage: Section5Background,
            imageDescription: "Rob Hubbard (Monty on The Run, C64) og Matt Grey (Last Ninja 2, C64) holder Q&A",
            header: "VIP Gjester holder foredrag og Q&A",
            paragraphs: [
              `En viktig det av Retrospillmessen er Q&A med våre fantastiske gjester.
              Hvert år inviterer vi kjente youtubere og bransjelegender til å holde foredrag og/eller spørsmålsrunder.`,
              `Programmet er fullstappet med foredrag og Q&A gjennom hele åpningstiden. I tillegg er programmet forskjellig
              på lørdag og søndag, så det lønner seg å delta på begge dagene!`,
            ]
          },
          {
            backgroundImage: Section6Background,
            imageDescription: "Agens VS Villain er et norsk party-spill",
            header: "Indiegames",
            paragraphs: [
              `Nysgjerrig på hva som skjer på den norske indiespil-scenen? På Retrospillmessen tester du de nyeste indie-spillene,
              som kanskje ikke har kommet ut ennå engang. `,
            ]
          },
          {
            backgroundImage: Section7Background,
            imageDescription: "Master Of Pixels er vår storturnering",
            header: "Master Of Pixels",
            paragraphs: [
              `Er du Norges beste retrogamer? Både lørdag og søndag kårer vi en pikselsmester på
              Retrospillmessen. Spillene du skal konkurrere i avsløres nærmere messen.`,
              `Gjennom neste hele åpningstiden vil du kunne kvalifisere deg til finalen i Master Of Pixels.
              Det gjør du vet å få gode poengsummer i et uvalg av spill. Finalen foregår på hovedscenen.`,
              `Og det blir fete premier og pokal begge dagene!`,
            ]
          },
        ]
      },
      en: {
        title: "Welcome to Retrospillmessen",
        subtitle: "Norwegian festival for retrofans!",
        videotitle: "Videos from the convention",
        videosubtitle: "There are plenty more videos on our facebook page",
        sections: [
          {
            backgroundImage: Section1Background,
            imageDescription: "A living convention",
            header: "This is RSM!",
            paragraphs: [
              `Retrospillmessen is Scandinavias biggest retro gaming event. 
              Every year 5000 people gather in an indoor Handball-arena
              in the historic town of Sandefjord, to experience a thriving retro culture!`,
              `At Retrospillmessen you can be yourself, and know that you are amoungst like minded individuals who
              are just as geeky as you! We are a quaint and laid back convention , by nerds, for nerds, something which we are quite proud of!`,
              `Here you will find playable and purchaseable video games from every decade, comics, merchandize, the best video game legends and youtube-celebs, and even retro toys!`,
            ]
          },
          {
            backgroundImage: Section2Background,
            imageDescription: "From our retro-computer section",
            header: "Take a journey in retro-history",
            paragraphs: [
              `Take a journey through video game history at Retrospillmessen. We hook up almost 100
              playable consoles from every decade of video gaming. All the way back to the 70s!`,
              `How about trying the legendary E.T for Atari 2600, or Giana Sisters on the Commodore 64. Both retro consoles
              and computer are represented at the convention. We also showcase
              shop-stands, handhelds and even the failed Virtual Boy.
              Oh, and you can also enjoy our fantastic dance dance revolution machines.`,
              `Fun for all ages!`
            ]
          },
          {
            backgroundImage: Section3Background,
            imageDescription: "One of many retro market booths",
            header: "Retro market",
            paragraphs: [
              `Looking to buy vintage games? Save your money for Retrospillmessen 2018!`,
              `Vendors rent space at our convention to sell their vintage games. Usually there will be 
              games available for all major historic consoles, even Sega Master System.`,
               `Retrospillmessen is the place to find that special gem you have been looking for.`,
            ]
          },
          {
            backgroundImage: Section4Background,
            imageDescription: "Part of our kids area",
            header: "A great place for kids!",
            paragraphs: [
              `At Retrospillmessen we focus on being family friendly! 
              We are a safe convention, and whereveer you are inside the convention venue you will be able to have a full overview of the room. 
              Our hardworking crew of 80 people make sure everyone feels welcome and safe.`,
              `We assure you kids will not be bored at the convention. Most kids love playing on our vintage video games. 
              We also have a dedicated area for kids with face painting and beading.`,
            ]
          },
          {
            backgroundImage: Section5Background,
            imageDescription: "Rob Hubbard (Monty on The Run, C64) and Matt Grey (Last Ninja 2, C64) doing a Q&A",
            header: "VIP Guests, lectures and Q&A",
            paragraphs: [
              `A vital part of our convention is the many lectures and Q&A sessions throughout the day.
              Every year we invite well known youtubers and video gaming legends to come talk to our visitors.`,
              `Our convention schedule is usually filled to the brim with amazing sessions, divided up in two days.
              Follow us here our on facebook to stay up to date with what is going on!`,
            ]
          },
          {
            backgroundImage: Section6Background,
            imageDescription: "Agens VS Villain is a Norwegian party game",
            header: "Indie games",
            paragraphs: [
              `Curious about the Norwegian indie game scene? Each year we invite several Norwegian indie game companies to come
              and showcase their games. Usually there will even be unreleased playable games!`,
            ]
          },
          {
            backgroundImage: Section7Background,
            imageDescription: "Master Of Pixels is our grand tournament",
            header: "Master Of Pixels",
            paragraphs: [
              `Are you the best retro gamer in all the land? On Saturday and Sunday we host individual tournaments to choose the
              Master of Pixels!`,
              `Through most of the day you can qualify for the daily finale, held at the end of each day. To qualify you must be the best at 
              an array of games we have selected. For more info on the games, keep following this page and our facebook page.`,
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
      return (
        <Section justified={flex} key={k}>
          
          <ImageSection backgroundImage={a.backgroundImage} alignment={imageAligment}>
          </ImageSection>
          <ImageDescription alignment={imageAligment}>{a.imageDescription}</ImageDescription>
          <ContentSection alignment={imageAligment}>
            <ContentSectionHeader>{a.header}</ContentSectionHeader>
            {a.paragraphs.map((c, ck) => (
              <ContentSectionParagraph key={ck}>
                {c}
              </ContentSectionParagraph>
            ))}
          </ContentSection>
        </Section>
      );
    });
''
    return (
      <Wrapper>
        <Header headerBackground={HeaderBackground}>
          <HeaderTitleWrapper>
            <TopTitle>{translation.title}</TopTitle>
            <p>{translation.subtitle}</p>
          </HeaderTitleWrapper>
        </Header>
        
        {sections}
      </Wrapper>
    );
  }
}
