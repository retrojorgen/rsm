import React, { Component } from 'react';
import styled from 'styled-components';

import blackPixelBackground from '../../images/dark-pixel-back.png';

import { TopTitle, HeaderTitleWrapper, Header } from '../Title/Title';
import { getGuestInfoFromUrl } from '../../data/guests';
import Guests from './../Guests/Guests';


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
    padding: 20px 20px;
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
  
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.setState(
      {
        guestInfo: getGuestInfoFromUrl(this.props.match.params.guestUrl, localStorage.language || 'no'),
        url: this.props.match.params.guestUrl
      }
    );
  }

  componentDidMount () {
    window.scrollTo(0, 0);
  }

  componentDidUpdate () {
  }

  componentWillReceiveProps (nextProps) {
    if(nextProps.match.params.guestUrl !== this.state.url) {
      this.setState(
        {
          guestInfo: getGuestInfoFromUrl(nextProps.match.params.guestUrl, localStorage.language || 'no'),
          url: nextProps.match.params.guestUrl
        }
      );
    }
  }

  render() {
    window.scrollTo(0, 0);

    var guestInfo = this.state.guestInfo;

    return (
      <div className="About">
        <Header>
          <HeaderTitleWrapper>
            <TopTitle>
              {guestInfo.header}
            </TopTitle>
          </HeaderTitleWrapper>
        </Header>
        
        <SectionsContainer background={blackPixelBackground}>
          <Section>
            <ImageSection>
              <img src={require('../../images/' + guestInfo.personImage)} alt={guestInfo.personImage} />
            </ImageSection>
            <ContentSection>
              {guestInfo.paragraphs.map((c, ck) => (
                <ContentSectionParagraph key={ck} dangerouslySetInnerHTML={{__html: c}} color="white"/>
              ))}
            </ContentSection>
          </Section>
        </SectionsContainer>
        <Guests />
      </div>
    );
  }
}
