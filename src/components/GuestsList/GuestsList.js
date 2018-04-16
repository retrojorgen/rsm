import React, { Component } from 'react';
import styled from 'styled-components';

import whitePixelBackground from '../../images/white-pixel-back.jpg';
import blackPixelBackground from '../../images/dark-pixel-back.jpg';
import { guests } from '../../data/guests';

import { TopTitle, HeaderTitleWrapper, Header, Wrapper } from '../Title/Title';


const Section = styled.div`
    padding: 20px;
    display: flex;
    overflow: hidden;
    justify-content: ${props => props.justified};
    align-items: flex-start;
    position: relative;
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
    @media (max-device-width: 1100px) {
      flex-direction: column;
      padding: 0;
    } 
`;
const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${(props) => props.background});
  background-size: cover;

`;
const ContentSection = styled.div `
  position: relative;
  display: block;
  padding: 20px 0 0 20px;
  overflow: hidden;
  border-radius: 8px;
  @media (max-device-width: 1100px) {
    width: 100%;
    border-radius: 0;
  } 
`;

const ImageSection = styled.div `
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  img {
    max-width: 300px;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.6);
  }
  @media (max-device-width: 1100px) {
    padding-top: 0;
    justify-content: center;
    img {
      max-width: 100%;
    }
  }
`;


const ContentSectionHeader = styled.h2 `
  font-family: "Rubik", sans-serif;
  font-size: 2em;
  color: ${(props) => props.color};
  position: relative;
  font-weight: bold;
`;

const ContentSectionParagraph = styled.p `
  font-family: "Rubik", sans-serif;
  font-size: 1em;
  line-height: 1.6em;
  color: ${(props) => props.color};
  position: relative;
  a {
    color: ${(props) => props.color};
  }
`;

export default class GuestsList extends Component {
  
  componentDidMount () {
    window.scrollTo(0, 0);
  }

  render() {
    window.scrollTo(0, 0);
    const language = localStorage.language || 'no';
    var sectionToggle = true;
    console.log(guests);
    var translation = guests[language];
    let sections = translation.sections.map((a,k) => {
      let background = sectionToggle ? blackPixelBackground: whitePixelBackground;
      let color = sectionToggle ? 'white': 'black';
      sectionToggle = !sectionToggle;
      return (
        <SectionsContainer background={background} key={k}>
          <Section>
            <ImageSection>
              <img src={require('../../images/' + a.personImage)} alt={a.personImage} />
            </ImageSection>
            <ContentSection>
              <ContentSectionHeader color={color}>{a.header}</ContentSectionHeader>
              {a.paragraphs.map((c, ck) => (
                <ContentSectionParagraph key={ck} dangerouslySetInnerHTML={{__html: c}} color={color}>
                </ContentSectionParagraph>
              ))}
            </ContentSection>
          </Section>
        </SectionsContainer>
      );
    });

    return (
      <Wrapper>
        <Header>
          <HeaderTitleWrapper>
            <TopTitle>
              {translation.title}
            </TopTitle>
            <p>{translation.subtitle}</p>
          </HeaderTitleWrapper>
        </Header>
        
          {sections}
        
      </Wrapper>
    );
  }
}
