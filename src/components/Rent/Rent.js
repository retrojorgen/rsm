import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderBackground from './retrospillmessen-market.jpg';
import Title from '../Title/Title';
import yellowBackground from './guests-background.jpg';


const Section = styled.div`
    padding: 60px 80px 60px 80px;
    align-items: center;
    position: relative;
    color: ${(props) => props.background === 'yellow' ? 'black' : 'white'};
    background: url(${(props) => props.background === 'yellow' ? yellowBackground : ''});
    a {
      color: ${(props) => props.background === 'yellow' ? 'black' : 'white'};
    }
    max-width: 60em;
    margin: 0 auto;
    @media (max-device-width: 1100px) {
        max-width: 100%;
        padding: 20px;
        max-width: 100%;
    }
`;


const SectionHeader = styled.h2 `
  font-family: "Rubik", sans-serif;
  font-size: 2em;
  position: relative;
  font-weight: bold;
`;

const SectionParagraph = styled.p `
  font-family: "Rubik", sans-serif;
  font-size: 1em;
  line-height: 1.6em;
  
  position: relative;
  margin: 0 0 10px 0;
  
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


const Footer = styled.div `
  border-top: 2px solid #e0c417;
  border-radius: 4px;
`;

export default class About extends Component {
  render() {
    const language = localStorage.language || 'no';
    const translations = {
      no: {
        headerBackground: HeaderBackground,
        title: "Leie plass på RSM",
        footerHeader: "Har du andre spørsmål?",
        footerParagraph: `Henvend deg til <a href="mailto:stand@retrospillmessen.no">stand@retrospillmessen.no</a>. Som regel vil du få svar innen 1-2 dager :) Får du ikke svar ber vi deg henvende deg til vår facebook-side
        <a href="http://facebook.com/retrospillmessen"> http://facebook.com/retrospillmessen </a>`,
        sections: [
          {
            background: "black",
            header: "",
            paragraphs: [
              `Lurer du på å leie stand på Retrospillmessen?`,
              `Hvert år leier folk stand på Retrospillmessen, enten for å stille 
              ut noe de har laget, selge varer eller reklamere for sin bedrift.`,
              `Retrospillmessen er et fantastisk sted å treffe spill-entusiaster i alle aldre. 
              Vil du nå ut til lokal-samfunnet i Sandefjord og samtidig reisende 
              fra hele Norge og Skandinavia? Da er Retrospillmessen stedet for deg.
              Følg vår enkle guide under for å finne priser og informasjon.`,
            ],
            bottomHeader: "Jeg kommer til RSM for å :"
          },{
            background: "yellow",
            header: "1. Selge varer eller promotere min bedrift",
            paragraphs: [
              `Perfekt! Retrospillmessen har noen av de beste prisene på standleie i bransjen.`,
              `Pris pr m2: 500 kr. Stand må minimum være 2x2m, med andre ord vil minstepris være 2000kr.`,
              `Du velger selv om du vil ta med bord selv eller leie fra oss.
              Leiepris er 150 kr pr. bord (75x180cm).
              Inkludert med stand er gratis WiFi og strøm. 
              For booking ta kontakt med oss på <a href="mailto:stand@retrospillmessen.no">stand@retrospillmessen.no</a>`,
            ]
          },{
            background: "black",
            header: "2. Promotere youtube-kanalen min",
            paragraphs: [
              `Vi har i utgangspunktet ikke egne standpriser for Youtubere, men vi
              starter gjerne en dialog med deg hvis du kan vise til en kanal med 
              10 000 eller flere abonnenter. Ta kontakt med oss på <a href="mailto:stand@retrospillmessen.no">stand@retrospillmessen.no</a>`,
            ]
          },{
            background: "yellow",
            header: "3. Selge smykker / bilder / sysaker jeg har laget selv",
            paragraphs: [
              `Fantastisk! På Retrospillmessen ønsker vi å støtte art-scenen i Norge.
              Ta kontakt med oss på <a href="mailto:stand@retrospillmessen.no">stand@retrospillmessen.no</a> for å avtale nærmere.`,
            ]
          },{
            background: "black",
            header: "4. Vise frem mitt indiespill",
            paragraphs: [
              `Vi tilbyr gratis standplass til indieutviklere, basert på førstemann til mølla-prinsippet. `,
              `Ta derfor kontakt med oss snarest på <a href="mailto:stand@retrospillmessen.no">stand@retrospillmessen.no</a>
              for å avtale stand!`,
            ]
          }
          

        ]
      },
      en: {
        headerBackground: HeaderBackground,
        title: "Rent booth space at RSM 18",
        footerHeader: "Got other questions?",
        footerParagraph: `Send an e-mail to <a href="mailto:stand@retrospillmessen.no">stand@retrospillmessen.no</a>. You should get a reply within 1-2 days. If you still have not gotten a reply please send a message through our
        facebook page at <a href="http://facebook.com/retrospillmessen"> http://facebook.com/retrospillmessen </a>`,
        sections: [
          {
            background: "black",
            header: "",
            paragraphs: [
              `Considering renting booth space at Retrospillmessen 2018?`,
              `Booths are a vital part of Retrospillmessen. Every year around 70 exhibitors rent booths
              at Retrospillmessen for selling goods or merchandise, exhibiting their games, promoting their business etc..`,
              `Retrospillmessen is a great place to be at if you want to reach out to gamers of all ages.
              Follow our simple guide to fit your needs`
            ],
            bottomHeader: "I'm coming to RSM 18 to :"
          },{
            background: "yellow",
            header: "1. Sell goods or promote my business",
            paragraphs: [
              `Great! Retrospillmessen has some of the best prices in the business`,
              `Price pr square meter: 500 NOK. Minimum allowed size of a stand is 2x2 meters. Which means minimum price for renting boot is 2000 NOK.`,
              `You can also rent tables from us if you want.
              Rent is 150 NOK per. table (75x180cm).
              WiFi and power is included with every booth.
              For booking contact us at <a href="mailto:stand@retrospillmessen.no">stand@retrospillmessen.no</a>`,
            ]
          },{
            background: "black",
            header: "2. Promoto my youtube-channel / podcast",
            paragraphs: [
              `We do not offer special prices for youtubers / podcasters on a general basis. However, if you are running a channel
              or media outlet with 10 000 or more subscribers, please contact us at for free booth space <a href="mailto:stand@retrospillmessen.no">stand@retrospillmessen.no</a>.`
            ]
          },{
            background: "yellow",
            header: "3. Sell home made jewelery, art or other crafts",
            paragraphs: [
              `Awesome! Here at Retrospillmessen we wan't to support the art scene with free booth space
              Contact us at <a href="mailto:stand@retrospillmessen.no">stand@retrospillmessen.no</a>.`,
            ]
          },{
            background: "black",
            header: "4. Showcase my indiegame",
            paragraphs: [
              `We offer free indie-stands on a first come first serve basis.`,
              `Contact us asap to reserve a booth <a href="mailto:stand@retrospillmessen.no">stand@retrospillmessen.no</a>`,
            ]
          }
          

        ]
      }
    };
    var translation = translations[language];

    var sectionToggle = false;
    let sections = translation.sections.map((a, k) => {
      let sectionBackground = sectionToggle ? 'yellow': 'black';
      sectionToggle = !sectionToggle;
      return (
        <Section key={k} background={sectionBackground}>
          {a.header && a.header !== '' &&
            <SectionHeader>{a.header}</SectionHeader>
          }
          {a.paragraphs && a.paragraphs.map((c, ck) => (
              <SectionParagraph key={ck} dangerouslySetInnerHTML={{__html: c}} />
          ))}
          {a.bottomHeader && a.bottomHeader !== '' &&
            <SectionHeader>{a.bottomHeader}</SectionHeader>
          }
        </Section>
      )
    });

    return (
      <div className="About">
        <Header headerBackground={HeaderBackground}>
          <HeaderTitleWrapper>
            <Title title={translation.title} />
          </HeaderTitleWrapper>
        </Header>
        {sections}
        <Footer>
          <Section background="">
            <SectionHeader>
              {translation.footerHeader}
            </SectionHeader>
            <SectionParagraph dangerouslySetInnerHTML={{__html: translation.footerParagraph}} />  
          </Section>
        </Footer>

      </div>
    );
  }
}
