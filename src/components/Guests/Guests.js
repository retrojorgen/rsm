import React, { Component } from 'react';
import styled from 'styled-components';
import larryBack from './larry-rsm-video-background.mp4';
import etBack from './etBack.jpg';
import hWarshaw from './hwarshaw.png';
import alLowe from './allowe.png';
import lefdalLogo from './lefdal-logo.png';
import { NavLink } from 'react-router-dom';
import Title, {YellowSection} from './../Title/Title';


const HeaderWrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    text-align: center;
    background: linear-gradient(transparent, black);
    h1 {
        color: white;
        font-family: "Rubik", sans-serif;
        padding: 0 40px 0 40px;
        font-size: 2em;
        margin: 0 0 0 0;
    }
    p {
        color: white;
        font-family: "Rubik", sans-serif;
        padding: 0 44px 0 40px;
        font-size: 1.1em;
        margin: 0;
    }
    
`;

const SponsorRow = styled.div`
    color: white;
    text-transform: uppercase;
    font-size: 0.8em;
    font-family: "Rubik", sans-serif;
    padding: 40px 40px 10px 40px;
    letter-spacing: 1px;
    text-align: center;
    img {
        width: 40px;
        margin-left: 4px;
    }
`;


class HeaderContainer extends Component {
    render() {
      let guestName = this.props.guestName;
      let guestDescription = this.props.guestDescription;
        return (
            <HeaderWrapper>
                <h1><span>{guestName}</span></h1>
                <p>{guestDescription}</p>
                <SponsorRow>I samarbeid med <img src={lefdalLogo} alt="Lefdal logo" /></SponsorRow>
            </HeaderWrapper>
        )
    }
}

const GuestsContainer = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    margin: 0 20px 0 20px;
    height: 100%;
    @media (max-device-width: 1100px) {
        flex-direction: column;
    }
`;

const SectionDescription = styled.p`
    color: black;
    font-family: "Rubik", sans-serif;
    text-align: center;
    padding: 0 20px 20px 20px;
    position: relative;
`;

const Guest = styled(NavLink)`
    display: block;
    width: 30%;
    
    background-color:black;
    background-image: url(${(props) => props.background ? props.background: ''});
    background-size: auto 100%;

    box-shadow: 0 10px 40px 0 rgba(0,0,0,0.3);
    height: 500px;
    overflow: hidden;
    border: 6px solid white;
    transition: all 0.1s ease-in;
    cursor: pointer;
    position: relative;
    transform: scale(1.02);
    video {
        min-height: 100%;
        transform: translateX(-20%);
        position:absolute;
        left: 0;
        top: 0;
    }
    &:hover {
        transform: scale(1.05);
    }
    @media (max-device-width: 1100px) {
        width: 100%;
    }
`;

const GuestProfile = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    img {
        max-height: 100%;
    }
`;

const Unnanounced = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: black;
    border-radius: 4px;
    padding: 20px;
    max-width: 30%;
    font-family: "Rubik", sans-serif;
    text-align: center;
    h1 {
        font-size: 2em;
        margin-bottom: 0;
        color: #fff142;
    }
    p {
        font-size: 1em;
        color: white;
    }
    @media (max-device-width: 1100px) {
        margin-top: 20px;
        max-width: 100%;
    }
    
`;

export default class Guests extends Component {
  render() {
    const language = localStorage.language || 'no';
    const translations = {
      no: {
        title: "VIP-gjester",
        subTitle: `Vi annonserer gjester fortløpende. Følg med her og på vår <a href="http://www.facebook.com/retrospillmessen">facebook</a>`,
        guests: [
            {
                type: "announced",
                video: larryBack,
                profile: alLowe,
                name: "Al Lowe",
                description: "Skaperen av Leisure Suit Larry-serien",
                alt: "Al Lowe kommer til RSM 2018"

            },
            {
                type: "announced",
                background: etBack,
                profile: hWarshaw,
                name: "Howard Scott Warshaw",
                description: "Skaperen av \"verdens verste spill\" E.T, til Atari 2600",
                alt: "Howard Scott Warshaw kommer til RSM 18"

            },
            {
                type: "unannounced",
                message: "Følg oss her og på facebook. Flere gjester annonseres snart!"
            },
        ],
      },
      en: {
        title: "Guests",
        subTitle: `More guests will be announced soon! Follow us here and on our <a href="http://www.facebook.com/retrospillmessen">facebook</a>`,
        guests: [
            {
                type: "announced",
                video: larryBack,
                profile: alLowe,
                name: "Al Lowe",
                description: "The creator of Leisure Suit Larry!",
                alt: "Al Lowe is coming to RSM 2018"

            },
            {
                type: "announced",
                video: etBack,
                profile: hWarshaw,
                name: "Howard Scott Warshaw",
                description: "The creator of the infamous E.T on atari 2600",
                alt: "Howard Scott Warshaw is coming to RSM 18"

            },
            {
                type: "unannounced",
                s: "hest",
                message: "Follow us here and on facebook. More guests will be announced soon!"
            }
        ],
      }
    }
    let translation = translations[language];
    return (
    <YellowSection>
        <Title title={translation.title} color="Yellow" />
        <SectionDescription dangerouslySetInnerHTML={{__html: translation.subTitle}}></SectionDescription>
        <GuestsContainer>
            {translation.guests.map((g, k) => {
                if(g.type === 'announced') {
                    return (
                        <Guest to="/guests" key={k} background={g.background}>
                            {g.video && (
                                <video autoPlay="true" loop="true">
                                    <source src={g.video} type="video/mp4" />
                                </video>
                            )}
                            <GuestProfile>
                                <img src={g.profile} alt={g.alt} />
                            </GuestProfile>
                            <HeaderContainer guestName={g.name} guestDescription={g.description} />
                        </Guest>
                    )
                } else {
                    return (
                        <Unnanounced key={k}>
                            <h1>?</h1>
                            <p>{g.message}</p>
                        </Unnanounced>
                    )
                }
            })}
        </GuestsContainer>
    </YellowSection>
    );
  }
}
