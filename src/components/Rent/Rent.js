import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderBackground from './retrospillmessen-market.jpg';
import Title from '../Title/Title';
import yellowBackground from './guests-background.jpg';


const Section = styled.div`
    padding: 20px 40px 20px 40px;
    align-items: center;
    position: relative;
    color: ${(props) => props.background === 'yellow' ? 'black' : 'white'};
    background: url(${(props) => props.background === 'yellow' ? yellowBackground : ''});
    a {
      color: ${(props) => props.background === 'yellow' ? 'black' : 'white'};
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
`;


const Footer = styled.div `
  border-top: 2px solid #e0c417;
  border-radius: 4px;
`;

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <Header headerBackground={HeaderBackground}>
          <HeaderTitleWrapper>
            <Title title="Leie plass på RSM" />
          </HeaderTitleWrapper>
        </Header>
        <Section background="black">
          <SectionParagraph>
          Lurer du på å leie stand på Retrospillmessen?
          </SectionParagraph>
          <SectionParagraph>
            Hvert år leier folk stand på Retrospillmessen, enten for å stille 
            ut noe de har laget, selge varer eller reklamere for sin bedrift.
          </SectionParagraph>
          <SectionParagraph>
            Retrospillmessen er et fantastisk sted å treffe spill-entusiaster i alle aldre. 
            Vil du nå ut til lokal-samfunnet i Sandefjord og samtidig reisende 
            fra hele Norge og Skandinavia? Da er Retrospillmessen stedet for deg.
            Følg vår enkle guide under for å finne priser og informasjon.
          </SectionParagraph>
          <SectionHeader>
            Jeg kommer til RSM for å :
          </SectionHeader>
        </Section>

        <Section background="yellow">
          <SectionHeader>
            1. Selge varer eller promotere min bedrift
          </SectionHeader>
          <SectionParagraph>
            Perfekt! Retrospillmessen har noen av de beste prisene på standleie i bransjen.
          </SectionParagraph>
          <SectionParagraph>
            Pris pr m2: 500 kr. Stand må minimum være 2x2m, med andre ord vil minstepris være 2000kr.
          </SectionParagraph>
          <SectionParagraph>
            Du velger selv om du vil ta med bord selv eller leie fra oss.
            Leiepris er 150 kr pr. bord (75x180cm).
            Inkludert med stand er gratis WiFi og strøm. 
            For booking ta kontakt med oss på <a href="mailto:stand@retrospillmessen.no">stand@retrospillmessen.no</a>
          </SectionParagraph>
          
        </Section>

        <Section background="">
          <SectionHeader>
            2. Promotere youtube-kanalen min
          </SectionHeader>
          <SectionParagraph>
          Vi har i utgangspunktet ikke egne standpriser for Youtubere, men vi
              starter gjerne en dialog med deg hvis du kan vise til en kanal med 
              10 000 eller flere abonnenter. Ta kontakt med oss på <a href="mailto:stand@retrospillmessen.no">stand@retrospillmessen.no</a>
          </SectionParagraph>   
        </Section>

        <Section background="yellow">
          <SectionHeader>
            3. Selge smykker / bilder / sysaker jeg har laget selv
          </SectionHeader>
          <SectionParagraph>
            Fantastisk! På Retrospillmessen ønsker vi å støtte art-scenen i Norge.
            Ta kontakt med oss på <a href="mailto:stand@retrospillmessen.no">stand@retrospillmessen.no</a> for å avtale nærmere.
          </SectionParagraph>   
        </Section>

        <Section background="">
          <SectionHeader>
            4. Vise frem mitt indiespill
          </SectionHeader>
          <SectionParagraph>
              Vi tilbyr gratis standplass til indieutviklere, basert på førstemann til mølla-prinsippet. 
              Ta derfor kontakt med oss snarest på <a href="mailto:stand@retrospillmessen.no">stand@retrospillmessen.no</a>
              for å avtale stand!
          </SectionParagraph>   
        </Section>


        <Footer>
          <Section background="">
            <SectionHeader>
              Har du andre spørsmål?
            </SectionHeader>
            <SectionParagraph>
              Henvend deg til <a href="mailto:stand@retrospillmessen.no">stand@retrospillmessen.no</a>. Som regel vil du få svar innen 1-2 dager :) Får du ikke svar ber vi deg henvende deg til vår facebook-side
              <a href="http://facebook.com/retrospillmessen"> http://facebook.com/retrospillmessen </a>
            </SectionParagraph>  
          </Section>
        </Footer>

      </div>
    );
  }
}
