import React, { Component } from 'react';
import styled from 'styled-components';
import elkjopLogo from '../../images/elkjop_logo_blue.png';
import guestsBack from '../../images/white-pixel-back.png';
import { NavLink } from 'react-router-dom';
import Title, {PixelButtonNavLink} from './../Title/Title';
import animatedClown from '../../images/vomit_ransome_a.gif';
import { guestList } from '../../data/guests';

import Slider from 'react-slick';


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

const GuestWrapper = styled.div`
    width: 300px;
    display: inline-block;
    padding: 10px;
    @media (max-device-width: 1100px) {
        width: ${window.innerWidth-40}px;
        
        
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

const GuestsContainerWrapper = styled.div`
    width: 100%;
    overflow-y: hidden;
    overflow-x: auto;
`;

const GuestsContainer = styled.div`
    position: relative;
    height: 100%;    
    text-align: center;
    width: 100%;
    @media (max-device-width: 1100px) {
        width: ${props => (window.innerWidth-40) * props.guests}px;
        text-align: left;
        display: flex;
    }
    .slick-next, .slick-prev {
        &:before {
            color: #222;
            font-size: 40px;
        }
    }
`;

const GuestsWrapper = styled.div`
    padding: 40px 60px 40px 60px;
    background-color: #c3c3c3;
    background: url(${guestsBack});
    background-size: cover;
    position: relative;
    @media (max-device-width: 1100px) {
        padding: 0;
    }
`;

const Guest = styled.div`
    display: inline-block;
    width: 100%;
    margin: 20px;
    box-shadow: 0 10px 40px 0 rgba(0,0,0,0.3);
    overflow: hidden;
    transition: all 0.1s ease-in;
    position: relative;
    text-decoration: none;
    &:hover {
    }
    @media (max-device-width: 1100px) {
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
    
    let translation = guestList[language];
    return (
    <GuestsWrapper>
        <Title title={translation.title} color="Yellow" />
        <SponsorRow>I samarbeid med <img src={elkjopLogo} alt="elkjøp logo" /></SponsorRow>
        <VomitClown />
        <GuestsContainerWrapper>
            <GuestsContainer guests={translation.guests.length}>
                    {translation.guests.map((g, k) => {
                        if(g.type === 'announced') {
                            return (
                                <GuestWrapper key={k}>
                                    <Guest>
                                        
                                            <GuestProfile profileImage={require('../../images/' + g.profile)}></GuestProfile>
                                            <HeaderContainer guestName={g.name} guestDescription={g.description} />
                                            <PixelButtonNavLink to={'/guests/' + g.url} style={{width: '100%', 'textAlign': 'center', display: 'block'}}>Les mer</PixelButtonNavLink>
                                    </Guest>
                                </GuestWrapper>
                            )
                        } else {
                            return (
                                <div>
                                    <Unnanounced key={k}>
                                        <h1>?</h1>
                                        <p>{g.message}</p>
                                    </Unnanounced>
                                </div>
                            )
                        }
                    })}
            </GuestsContainer>
        </GuestsContainerWrapper>
    </GuestsWrapper>
    );
  }
}
