import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './pixel-logo.png';
import logoEn from './pixel-logo.png';
import background from './slider-rsm-background.jpg';
import sliderVideo from './slider.mp4';
import scanLines from './scanlines.png';



const ConDescription = styled.h2`
    color: white;
    letter-spacing: 3px;
    font-size: 1em;
    position: relative;
    z-index: 3;
    font-family: "Rubik";
    font-weight: 400;
    margin-bottom: 40px;
`;

const SliderRsmContainer = styled.div `
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    background-color: black;
    img {
        height: 300px;
        max-height: 50%;
        z-index: 4;
        margin-bottom: 10px;
    }
    @media (max-device-width: 1100px) {
        img {
            max-width: 100%;
        }
    }
    &:after {
        content: "";
        z-index: 2;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: url(${scanLines});
    }
    &:before {
        content: "";
        position: absolute;
        left: 10px;
        width: ${window.innerWidth-46}px;
        height: ${window.innerHeight-110}px;
        top: 10px;
        border: 3px solid rgba(255,255,255,0.9);
        z-index: 2;
        @media (max-device-width: 1100px) {
            width: ${window.innerWidth-26}px;
        }
    }
`;


const TicketButton = styled.a`
    border-radius: 4px;
    background-color: #fff142;
    padding: 16px 70px;
    color: black;
    letter-spacing: 1px;
    z-index: 3;
    font-size: 1em;
    font-family: "Rubik", Sans Serif;
    text-transform: uppercase;
    background-color: black;
    color: white;
    border: 1px solid #fff142;
    box-shadow: 0 4px 4px rgba(0,0,0,0.6);
    text-decoration: none;
`;

const Video = styled.video`
    position: absolute;
    left: -10%;
    top: -10%;
    display: none;
    width: 120%;
    height: 120%;
    @media (min-device-width: 1100px) {
        display: block;
    }
`;

const Backdrop = styled.div `
    background-size: cover;
    background-image: url(${background});
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    padding: 20px;
    @media (min-device-width: 1100px) {
        display: none;
    }
`;

export default class SliderRsm extends Component {
    render() {
        const language = localStorage.language || 'no';
        const translations = {
            no: {
              logo: logo,
              conDate: '12.-13. Mai 2018, Sandefjord',
              buyTicket: "Kjøp billetter"
            },
            en: {
              logo: logoEn,
              conDate: 'May 12-13th, 2018. Sandefjord, Norway',
              buyTicket: "Get tickets   "
            }
          }
          let translation = translations[language];  
        return (
            <SliderRsmContainer>
                <Backdrop />
                <Video autoPlay="true" loop="true">
                    <source src={sliderVideo} type="video/mp4" />
                </Video>
                <img src={translation.logo} alt="Slider" />
                <TicketButton href="https://retrospillmessen.hoopla.no/sales/2422891309">
                    {translation.buyTicket}
                </TicketButton>
                <ConDescription>{translation.conDate}</ConDescription>
            </SliderRsmContainer>
        )
    }
}