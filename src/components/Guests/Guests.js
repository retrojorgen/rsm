import React, { Component } from 'react';
import styled from 'styled-components';
import larryBack from './larry-rsm-video-background.mp4';
import alLowe from './allowe.png';
import lefdalLogo from './lefdal-logo.png';
import { NavLink } from 'react-router-dom';
import Title from './../Title/Title';
import GuestsBackground from './guests-background.jpg';

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
        margin: 0 0 14px 0;
        span {
            background-color: black;
            padding: 4px 6px 4px 6px;
            box-shadow: 4px 4px 0 0 #e0c417;
        }
    }
    p {
        color: #e0c417;
        font-family: "Rubik", sans-serif;
        padding: 0 44px 0 40px;
        font-size: 1.4em;
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

const SectionWrapper = styled.section`
    padding-top: 40px;
    padding-bottom: 40px;
    min-height: 800px;
    position: relative;
    width: 100%;
    &:before {
        content: "";
        position: absolute;
        left: -6%;
        width: 116%;
        height: 100%;
        background-image: url(${GuestsBackground});
        background-size: 50%;
        transform: rotate(-2deg);
        @media (max-device-width: 1100px) {
            background-size: 20%;
        }
    }
`;

const GuestsContainer = styled.div`
    display: flex;
    justify-content: space-between;
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
    border-radius: 4px;
    box-shadow: 0 10px 40px 0 rgba(0,0,0,0.3);
    height: 500px;
    overflow: hidden;
    border: 6px solid purple;
    transition: all 0.1s ease-in;
    cursor: pointer;
    position: relative;
    video {
        min-height: 100%;
        transform: translateX(-20%);
        opacity: 0.8;
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
    left: -200px;
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
        color: #e0c417;
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
        title: "VIP-gjester Retrospillmessen 2018",
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
                type: "unannounced",
                message: "Følg oss her og på facebook. Flere gjester annonseres snart!"
            },
            {
                type: "unannounced",
                message: "Følg oss her og på facebook. Flere gjester annonseres snart!"
            },
        ],
      },
      en: {
        title: "VIP Guests Retrospillmessen 2018",
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
                type: "unannounced",
                p: "hest",
                message: "Follow us here and on facebook. More guests will be announced soon!"
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
    <SectionWrapper>
        <Title title={translation.title} />
        <SectionDescription dangerouslySetInnerHTML={{__html: translation.subTitle}}></SectionDescription>
        <GuestsContainer>
            {translation.guests.map((g, k) => {
                if(g.type == 'announced') {
                    return (
                        <Guest to="/guests" key={k}>
                            <video autoPlay="true" loop="true">
                                <source src={g.video} type="video/mp4" />
                            </video>
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
    </SectionWrapper>
    );
  }
}
