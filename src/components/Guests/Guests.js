import React, { Component } from 'react';
import styled from 'styled-components';
import larryBack from './larry-rsm-video-background.mp4';
import etBack from './etBack.jpg';
import hWarshaw from './hwarshaw.png';
import alLowe from './allowe.png';
import theCompletionist from '../../images/thecompletionist.png';
import ronGilbert from './rongilbert.png';
import elkjopLogo from '../../images/elkjop_logo_blue.png';
import guestsBack from './guests-back.png';
import { NavLink } from 'react-router-dom';
import Title, {YellowSection, PixelButtonNavLink} from './../Title/Title';
import animatedClown from '../../images/vomit_ransome_a.gif';


const VomitClown = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: 140px;
    width: 222px;
    height:321px;
    background: url(${animatedClown});
    @media (max-device-width: 1100px) {
        left: -126px;
        transform: rotate(16deg);
        margin-left: 0;
    }
`;
const HeaderWrapper = styled.div`
    position: relative;
    text-align: center;
    background: black;
    h1 {
        color: white;
        font-family: "Rubik", sans-serif;
        padding: 20px 20px 10px 20px;
        font-size: 1.4em;
        margin: 0 0 0 0;
        text-decoration: none;
    }
    p {
        color: white;
        font-family: "Rubik", sans-serif;
        padding: 0 20px 20px 20px;
        font-size: 1em;
        margin: 0;
        text-decoration: none;
    }
    
`;

const SponsorRow = styled.div`
    color: #000052;
    text-transform: uppercase;
    font-size: 0.8em;
    font-family: "Rubik", sans-serif;
    padding: 40px 40px 10px 40px;
    letter-spacing: 1px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 100px;
        margin-left: 14px;
    }
    @media (max-device-width: 1100px) {
        padding: 0 20px 20px 20px;
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
            </HeaderWrapper>
        )
    }
}

const GuestsContainer = styled.div`
    justify-content: center;
    position: relative;
    height: 100%;
    margin: 0 auto;
    max-width: 1020px;
    text-align: center;
    @media (max-device-width: 1100px) {
        flex-direction: column;
    }
`;

const GuestsWrapper = styled.div`
    padding: 40px 60px 40px 60px;
    background-color: #c3c3c3;
    background: url(${guestsBack});
    background-size: cover;
    position: relative;
    @media (max-device-width: 1100px) {
        padding: 20px;
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
    display: inline-block;
    width: 300px;
    margin: 20px;
    box-shadow: 0 10px 40px 0 rgba(0,0,0,0.3);
    overflow: hidden;
    transition: all 0.1s ease-in;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    transform: scale(1);
    &:hover {
        transform: scale(1.05);
    }
    @media (max-device-width: 1100px) {
        width: 100%;
        margin: 0;
        margin-bottom: 20px;
    }
`;

const GuestProfile = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    background-image: url(${(props) => props.profileImage ? props.profileImage: ''});
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const Unnanounced = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: black;
    padding: 20px;
    max-width: 20%;
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
                type: "announced",
                background: etBack,
                profile: ronGilbert,
                name: "Ron Gilbert",
                description: "Skaperen av Maniac Mansion, Monkey Island, Thimbleweed Park og mye mer!",
                alt: "Ron Gilbert kommer til RSM 18"

            },
            {
                type: "announced",
                background: etBack,
                profile: theCompletionist,
                name: "The Completionist",
                description: "Jirard Khalil er The Completionist, som fullfører et spill 100%. Hver uke på hans ekstremt populære youtube-kanal.",
                alt: "The Completionist kommer til RSM 18"
            },
            
        ],
      },
      en: {
        title: "Guests",
        subTitle: `More guests will be announced soon! Follow us here and on our <a href="http://www.facebook.com/retrospillmessen">facebook</a>`,
        guests: [
            {
                type: "announced",
                profile: alLowe,
                name: "Al Lowe",
                description: "The creator of Leisure Suit Larry!",
                alt: "Al Lowe is coming to RSM 2018"

            },
            {
                type: "announced",
                profile: hWarshaw,
                name: "Howard Scott Warshaw",
                description: "The creator of the infamous E.T on atari 2600",
                alt: "Howard Scott Warshaw is coming to RSM 18"

            },
            {
                type: "announced",
                background: etBack,
                profile: ronGilbert,
                name: "Ron Gilbert",
                description: "Creator of Maniac Mansion, Monkey Island, Thimbleweed Park an lots more!",
                alt: "Ron Gilbert is coming to RSM 18"

            },
            {
                type: "announced",
                background: etBack,
                profile: theCompletionist,
                name: "The Completionist",
                description: "Jirard Khalil is The Completionist. Every week he completes a game 100% on his youtube-channel",
                alt: "The Completionist is coming to RSM 18"

            },
        ],
      }
    }
    let translation = translations[language];
    return (
    <GuestsWrapper>
        <Title title={translation.title} color="Yellow" />
        <SponsorRow>I samarbeid med <img src={elkjopLogo} alt="elkjøp logo" /></SponsorRow>
        <VomitClown />
        <GuestsContainer>
            {translation.guests.map((g, k) => {
                if(g.type === 'announced') {
                    return (
                        <Guest to="/guests" key={k} background={g.background}>
                            <GuestProfile profileImage={g.profile}></GuestProfile>
                            <HeaderContainer guestName={g.name} guestDescription={g.description} />
                            <PixelButtonNavLink style={{width: '100%', 'text-align': 'center', display: 'block'}} to="/guests">Les mer</PixelButtonNavLink>
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
    </GuestsWrapper>
    );
  }
}
