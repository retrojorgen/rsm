import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderBackground from './top-background.jpg';
import LarryBackground from './al-lowe-background.jpg';
import SectionBackground from './guests-background.jpg';
import Allowe from './allowe.png';

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
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.backgroundImage});
  background-size: 50%;  
  background-position:left bottom;
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
            personImage: Allowe,
            backgroundImage: LarryBackground,
            imageDescription: "Al Lowe kommer til Retrospillmessen 18",
            header: "Al Lowe (Leisure Suit Larry)",
            paragraphs: [
              `Al Lowe er en av de virkelig store legendene i spillbransjen!`,
              `Han er kjent for å ha skapt spillserien Leisure Suit Larry, ofte hyllet som et av de mest unike eventyrspillene i historien!`,
              `Han jobbet for Sierra (tidligere Sierra On Line) store deler av karrieren, først som utvikler av lærespill på lisens fra Disney.`,
              `Senere som utvikler på Kings Quest og Police Quest serien, før han bega seg ut på Larry-serien`,
              `Al pensjonerte seg offisielt fra Sierra i 1998, men engasjementet for spill og humor (og elektriske togbaner) har han aldri lagt på hylla.
              Al er i dag 71 år gammel og kaller seg for "The oldest video game developer alive". Vi gleder oss utrolig til å treffe han på RSM 18 hvor han kommer
              både for å holde foredrag og gjøre Q&A`,

            ]
          },
        ]
      },
      en: {
        title: "Gjester på RSM 18",
        sections: [
          {
            backgroundImage: LarryBackground,
            personImage: Allowe,
            imageDescription: "Al Lowe kommer til Retrospillmessen 18",
            header: "Al Lowe (Leisure Suit Larry)",
            paragraphs: [
              `71 år gamle Al Lowe er en av de virkelig store legendene i spillbransjen.`,
              `Han er kjent for å ha skapt spillserien Leisure Suit Larry, ofte hyllet som et av de mest unike eventyrspillene i historien!`,
              `Han jobbet for Sierra (tidligere Sierra On Line) store deler av karrieren, først som utvikler av lærespill på lisens fra Disney.`,
              `Senere som utvikler på Kings Quest og Police Quest serien, før han bega seg ut på Larry-serien`,
              `Al pensjonerte seg offisielt fra Sierra i 1998, men engasjementet for spill og humor (og elektriske togbaner) har han aldri lagt på hylla.
              Al er i dag 71 år gammel og kaller seg for "The oldest video game developer alive". Vi gleder oss utrolig til å treffe han på RSM 18 hvor han kommer
              både for å holde foredrag og gjøre Q&A`,
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
      console.log(a);
      return (
        <Section justified={flex} key={k}>
          <ImageSection backgroundImage={a.backgroundImage}>
            <ImageDescription alignment={imageAligment}>{a.imageDescription}</ImageDescription>
          </ImageSection>
          {a.personImage && 
            <ProfileSection backgroundImage={a.personImage}/>
          }
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
