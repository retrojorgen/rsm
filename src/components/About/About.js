import React, { Component } from 'react';
import './About.css';
import styled from 'styled-components';
import SectionBackground from './guests-background.jpg';
import Section1Background from './retrospillmessen-people.jpg';
import Section2Background from './retrospillmessen-cool.jpg';
import Section3Background from './retrospillmessen-market.jpg';
import Section4Background from './retrospillmessen-kids.jpg';
import Section5Background from './retrospillmessen-lecture.jpg';
import Section6Background from './retrospillmessen-indiegames.jpg';
import Section7Background from './retrospillmessen-mop.jpg';

import HeaderBackground from './welcome-to-retrospillmessen.jpg';

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

const VideoSection = styled.div`
  padding: 40px;
  p {
    color: white;
    font-family: "Rubik", sans-serif;
    text-align: center;
    padding: 20px;
  }
  @media (max-device-width: 1100px) {
      padding: 10px;
      padding-bottom: 40px;
      margin-bottom: 40px;
  } 
`;

const VideosWrapper = styled.div`
  display: block;
  text-align: center;
`;

const Video = styled.div`
  @media (max-device-width: 1100px) {
      max-width: 100%;
      margin-bottom: 20px;
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

const ImageDescriptionRight = styled.span `
  font-family: "Rubik", sans-serif;
  position: absolute;
  text-transform: uppercase;
  font-size: 0.8em;
  right: 40px;
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
const ImageDescriptionLeft = styled.span `
  font-family: "Rubik", sans-serif;
  position: absolute;
  text-transform: uppercase;
  font-size: 0.8em;
  left: 40px;
  top: 40px;
  display: inline-block;
  padding: 20px;
  background-color: rgba(0,0,0,0.5);
  border-radius: 20px;
  color: white;
  @media (max-device-width: 1100px) {
    position: relative;
    opacity: 1;
    top: auto;
    left: auto;
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
`;

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <Header headerBackground={HeaderBackground}>
          <HeaderTitleWrapper>
            <Title title="Velkommen til Retrospillmessen" />
            <p>festivalen for retrofans!</p>
          </HeaderTitleWrapper>
        </Header>
        <Section justified="flex-end">
          <ImageSection backgroundImage={Section1Background}>
            <ImageDescriptionLeft>Retrospillmessen er full av liv</ImageDescriptionLeft>
          </ImageSection>

          <ContentSection>
            <ContentSectionHeader>Dette opplever du på Retrospillmessen</ContentSectionHeader>
            <ContentSectionParagraph>
              Retrospillmessen er nordens største retroevent. 
              Hvert år strømmer over 5000 mennesker til en hall 
              i Sandefjord for å oppleve en bit av den høyst levende retrokulturen!
            </ContentSectionParagraph>
            <ContentSectionParagraph>
              På Retrospillmessen kan du være deg selv, og vite at du er med folk som er like engasjerte
              og interesserte som deg! Vi er en koselig og laidback messe av nerder, for nerder, og det er vi veldig stolte av!
            </ContentSectionParagraph>  
            <ContentSectionParagraph>
              Hos oss finner du spill fra alle tiår, tegneserier, merch, de beste gjestene fra youtube
              og spillbransjen, retroleker og mye mer!
            </ContentSectionParagraph>
          </ContentSection>
        </Section>


        <Section justified="flex-start">
          <ImageSection backgroundImage={Section2Background}>
            <ImageDescriptionRight>Bilde fra vår Retrodatamaskin-utstilling</ImageDescriptionRight>
          </ImageSection>
          <ContentSection>
            <ContentSectionHeader>En reise i retrohistorien</ContentSectionHeader>
            <ContentSectionParagraph>
              På Retrospillmessen kan du ta en reise i tv-spillenes 
              historie! Vi setter opp nesten 100 forskjellige fullt spillbare maskiner, 
              helt tilbake til midten av 70-tallet.
            </ContentSectionParagraph>
            <ContentSectionParagraph>  
              Hva med å teste legendariske E.T til Atari 2600? Eller mimre tilbake til 
              Giana Sisters på Commodore 64? Både retro-datamaskiner og tv-konsoller 
              er godt representert i dette området av messen. I tillegg har vi både 
              butikk-stands, håndholdte maskiner slik som Virtual Boy og til og 
              med dansemaskin!
            </ContentSectionParagraph>
            <ContentSectionParagraph> 
              Morsomt for de minste og de eldste :)
            </ContentSectionParagraph>
          </ContentSection>

        </Section>

        <Section justified="flex-end">
        <ImageSection backgroundImage={Section3Background}>
            <ImageDescriptionLeft>En av våre mange retro-salgsboder</ImageDescriptionLeft>
          </ImageSection>
          <ContentSection>
            <ContentSectionHeader>Retromarked</ContentSectionHeader>
            <ContentSectionParagraph>
            Lyst til å kjøpe gamle tv-spill? Spar pengene dine til Retrospillmessen!
            </ContentSectionParagraph>
            <ContentSectionParagraph>  
            Her finner du hauger av boder med retrospill og konsoller. 
            Til oss kommer selgere fra hele Norge og Sverige,
             derfor er Retrospillmessen stedet du gjøre de unike kuppene som 
             kanskje aldri dukker opp på FINN.no
            </ContentSectionParagraph>
          </ContentSection>

        </Section>

        <Section justified="flex-start">
        <ImageSection backgroundImage={Section4Background}>
            <ImageDescriptionRight>Vi har eget område for barneaktiviteter</ImageDescriptionRight>
          </ImageSection>
          <ContentSection>
            <ContentSectionHeader>Et eldorado for barnefamilier</ContentSectionHeader>
            <ContentSectionParagraph>
              På Retrospillmessen har vi full fokus på barnefamilier. 
              Vi er en trygg og åpen messe, hvor man får god oversikt over hele hallen uansett hvor man er. Vårt hardtarbeidende crew på
              Over 80 gutter og jenter i vårt crew passer på at alt går rolig for seg.
            </ContentSectionParagraph>
            <ContentSectionParagraph>  
              Barn kjeder seg ikke på Retrospillmessen heller. De fleste unger elsker å prøve maskinene vi har utstilt. I tillegg har vi
              egne aktiviteter for barn, som perling og ansiktsmaling (PS. det er lov for voksne å være med også).
            </ContentSectionParagraph>
          </ContentSection>

        </Section>


        <Section justified="flex-end">
          <ImageSection backgroundImage={Section5Background}>
            <ImageDescriptionLeft>Rob Hubbard (Monty on The Run, C64) og Matt Grey (Last Ninja 2, C64) holder Q&A</ImageDescriptionLeft>
          </ImageSection>
          <ContentSection>
            <ContentSectionHeader>VIP Gjester holder foredrag og Q&A</ContentSectionHeader>
            <ContentSectionParagraph>
            En viktig det av Retrospillmessen er Q&A med våre fantastiske gjester.
            Hvert år inviterer vi kjente youtubere og bransjelegender til å holde foredrag og/eller spørsmålsrunder. 
            </ContentSectionParagraph>
            <ContentSectionParagraph>  
              Programmet er fullstappet med foredrag og Q&A gjennom hele åpningstiden. I tillegg er programmet forskjellig
              på lørdag og søndag, så det lønner seg å delta på begge dagene!
            </ContentSectionParagraph>
          </ContentSection>

        </Section>

        <Section justified="flex-start">
          <ImageSection backgroundImage={Section6Background}>
            <ImageDescriptionRight>Agens VS Villain er et norsk party-spill</ImageDescriptionRight>
          </ImageSection>
          <ContentSection>
            <ContentSectionHeader>Indiegames</ContentSectionHeader>
            <ContentSectionParagraph>
            Nysgjerrig på hva som skjer på den norske indiespil-scenen? På Retrospillmessen tester du de nyeste indie-spillene,
             som kanskje ikke har kommet ut ennå engang. 
            </ContentSectionParagraph>
          </ContentSection>

        </Section>

        <Section justified="flex-end">
          <ImageSection backgroundImage={Section7Background}>
            <ImageDescriptionRight>Master Of Pixels er vår storturnering</ImageDescriptionRight>
          </ImageSection>
          <ContentSection>
            <ContentSectionHeader>Master Of Pixels</ContentSectionHeader>
            <ContentSectionParagraph>
              Er du Norges beste retrogamer? Både lørdag og søndag kårer vi en pikselsmester på
              Retrospillmessen. Spillene du skal konkurrere i avsløres nærmere messen. 
            </ContentSectionParagraph>
            <ContentSectionParagraph>
              Gjennom neste hele åpningstiden vil du kunne kvalifisere deg til finalen i Master Of Pixels.
              Det gjør du vet å få gode poengsummer i et uvalg av spill. Finalen foregår på hovedscenen.
            </ContentSectionParagraph>
            <ContentSectionParagraph>
              Og det blir fete premier og pokal begge dagene!
            </ContentSectionParagraph>
          </ContentSection>

        </Section>

        <VideoSection>
        <Title title="Se videoer fra Retrospillmessen" />
        <p>Du finner flere videoer på vår facebookside</p>
          <VideosWrapper>
            <Video>
              <div 
                class="fb-video" 
                data-href="https://www.facebook.com/retrospillmessen/videos/1491159684284607/" 
                data-width="500" 
                data-show-text="false"
              >
                <blockquote cite="https://www.facebook.com/retrospillmessen/videos/1491159684284607/" 
                class="fb-xfbml-parse-ignore">
                  <a href="https://www.facebook.com/retrospillmessen/videos/1491159684284607/">
                    Retrospillmessen - Dag 1
                  </a>
                  <p>
                    For de som ikke hadde anledning å komme til Runarhallen i 
                    dag har vi nå på kveldingen raskt klippet sammen en liten 
                    teaser på hva dere har gått glipp av og hva som kan forventes av morgendagen!
                    Håper vi ser nye og kjente fjes, og konkret DEG!
                    - By the power of the Pixels!</p>
                  Posted by 
                  <a href="https://www.facebook.com/retrospillmessen/">
                    Retrospillmessen
                  </a> 
                  on Saturday, May 20, 2017
                </blockquote>
              </div>
            </Video>

            <Video>
              <div class="fb-video" data-href="https://www.facebook.com/retrospillmessen/videos/1493671560700086/" data-width="500" data-show-text="false"><blockquote cite="https://www.facebook.com/retrospillmessen/videos/1493671560700086/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/retrospillmessen/videos/1493671560700086/"></a><p>Lørdagens konsert fra Retrospillmessen 2017 har allerede blitt legendarisk! 
              Her er klippet alle vil se hvor David Wise spiller sin egen låt fra Donkey Kong Country, sammen med Kyoshu Orchestra. Gåsehud!</p>Posted by <a href="https://www.facebook.com/retrospillmessen/">Retrospillmessen</a> on Tuesday, May 23, 2017</blockquote></div>
            </Video>
          </VideosWrapper>
        </VideoSection>



      </div>
    );
  }
}
