import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderBackground from './al-lowe-background.jpg';
import LarryBackground from './al-lowe-background.jpg';
import SectionBackground from './guests-background.jpg';

import Title from '../Title/Title';


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
  bnackground-repeat: no-repeat;
  display: block;
  opacity: 0.6;
  box-shadow: 0 0 40px black inset;
  &:hover {
    opacity: 0.9;
  }
  @media (max-device-width: 1100px) {
    position: relative;
    height: 300px;
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

const Header = styled.div `
  height: 400px;
  background: url(${(props) => props.headerBackground});
  background-size: cover;
  width: 100%;
  display: flex;
  align-items: flex-end;
  background-position: center 20%;
  p {
    font-size: 1.4em;
    margin: 0;
    text-transform: uppercase;
    color: #e0c417;
  }
`;
const HeaderTitleWrapper = styled.div `
  width: 100%;
  background: linear-gradient(transparent, black);
  font-family: "Rubik", sans-serif;
  color: white;
  text-align: center;
  padding: 40px 0 60px 0;
  @media (max-device-width: 1100px) {
    padding: 40px 0 20px 0;
  }
`;

export default class GuestsList extends Component {
  
  render() {
    const language = localStorage.language || 'no';
    const translations = {
      no: {
        title: "Gjester på RSM 18",
        sections: [
          {
            backgroundImage: LarryBackground,
            imageDescription: "Al Lowe kommer til Retrospillmessen 18",
            header: "Al Lowe (Leisure Suit Larry)",
            paragraphs: [
              `Lite visste Al Lowe om at spillet han utviklet så og si alene i 1987 skulle bli et av de mest ikoniske spillene i historien!
              Eventyrspillet om den 40 år gamle taperen Larry Laffer, som forgjeves prøver å sjarmere damer, ble
              en farsott på sent 80- og tidlig 90-tallet.`,
              
              `Al Lowe var da 40 år gammel, og allerede en senior i spillbransjen. Han var egentlig musikklærer,
              Men lærte seg selv å programmere på en Apple-maskin sent på 70-tallet. Han startet med å utvikle
              lære-spill og ble etter kort tid oppdaget av spillselskapet Sierra Online med Roberta og Ken Williams bak roret.
              I starten utviklet Al spill for Sierra basert på Disney-lisenser. Disse både skrev, designet og scriptet han selv.
              Men spillet han straks skulle bli kjent for fantes faktisk allerede.`,
              
              `SoftPorn Adventures var et tekstbasert eventyrspill, utviklet og skapt av Chuck Benton, og utgikk av
              samme selskap som Al nå var ansatt i, Sierra Online. Spillet kom riktignok ut ett år før Al Lowe ble ansatt,
              og Al var storfan av det. I SoftPorn Adventures skal hovedpersonen (som ikke har navn) få tak i visse
              objekter ved å forføre en rekke damer. Høres kjent ut?`,
              
              `Al skjønte fort at SoftPorn Adventures passet perfekt til den nye spillmotoren til Sierra. Han hadde allerede jobbet
              som utvikler på Kings Quest 3 og Police Quest 1 som brukte en versjon av samme motoren.`,
              
              `I 1986 fikk han endelig overtalt Ken Williams til å satse på et nytt spill basert på SoftPorn Adventures. Al skapte
              karakteren Larry Laffer (i originalspillet hadde ikke karakteren navn) og la til noen nye vitser, men brukte historien
              og problemene slik det var i originalen. Og ikke minst den ikoniske introlåten.`,
              
              `I starten gikk det ikke så bra for spillet. Mange butikker nektet å ta det inn pga det grove temaet. I spillet må man 
              blant annet ta stilling til om man skal ha seksuell omgang med en prostituert. Et tema som var langt fra kontroversielt
              I 1987.  I starten lå spillet an til å bli den største fadesen i Sierras historie.`,
              
              `Det var derimot før jungeltelegrafen hørte om spillet. Sakte men sikkert gikk ryktet om spillet og etterspørselen økte.
              Mot slutten av samme året var spillet blitt en finansiell suksess. Det ble kåret til årets beste eventyrspill og solgte
              250 000 kopier. `,
              
              `7 spill ble gitt ut i hovedserien til Larry, og fortsatte med to spill med Larry’s sønn larry Lovage. En oppusset versjon av originalenspillet ble nylig utgitt på iOS.`,
              
              `Al pensjonerte seg offisielt fra Sierra i 1998, og bor nå i Seattle. Han kaller seg selv for verdens eldste spilldesigner. Han var tross alt på Larrys alder allerede i 1987.`,
              
              `Vi gleder oss utrolig mye til å få en av de virkelige legendene innen spillhistorien til Retrospillmessen 2018!`,
              
              `Kort oppsummert:`,
              `Al Lowe er kjent for å skape spillserien Leisure Suit Larry. Han har også jobbet på Kings Quest- og Police Quest-serien.`
            ]
          },
        ]
      },
      en: {
        title: "Gjester på RSM 18",
        sections: [
          {
            backgroundImage: LarryBackground,
            imageDescription: "Al Lowe kommer til Retrospillmessen 18",
            header: "Dette opplever du på Retrospillmessen",
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
        ]
      }
    }
    var sectionToggle = false;
    var translation = translations[language];
    let sections = translation.sections.map((a,k) => {
      var content = [];
      let flex = sectionToggle ? 'flex-start': 'flex-end';
      let imageAligment = sectionToggle ? 'right': 'left';
      sectionToggle = !sectionToggle;
      return (
        <Section justified={flex} key={k}>
          <ImageSection backgroundImage={a.backgroundImage}>
            <ImageDescription alignment={imageAligment}>{a.imageDescription}</ImageDescription>
          </ImageSection>
          <ContentSection>
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

    return (
      <div className="About">
        <Header headerBackground={HeaderBackground}>
          <HeaderTitleWrapper>
            <Title title={translation.title} />
            <p>{translation.subtitle}</p>
          </HeaderTitleWrapper>
        </Header>
        
        {sections}
      </div>
    );
  }
}
