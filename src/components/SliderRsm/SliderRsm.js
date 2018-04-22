import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../images/pixel-logo.png';
import logoEn from '../../images/pixel-logo.png';
import background from '../../images/slider-rsm-background.jpg';
import scanLines from '../../images/scanlines.png';
import { PixelButton } from '../Title/Title';

import LogoRow from './LogoRow';


const ConDescription = styled.h2`
    color: white;
    letter-spacing: 3px;
    font-size: 1em;
    position: relative;
    z-index: 3;
    font-family: "Rubik";
    font-weight: 400;
    margin-bottom: 3em;
    text-align: center;
    @media (min-device-width: 1100px) {
        font-size: 2em;
        text-align: left;
        margin-bottom: 1em;
    }
`;

const SliderRsmContainer = styled.div `
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    background-color: black;
    overflow: hidden;
    
`;

const TicketButton = styled(PixelButton)`
  
`;


const Video = styled.iframe`
    position: absolute;
    left: -10%;
    top: -10%;
    display: none;
    width: 120%;
    height: 130%;
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

const ConInfo = styled.div `
    max-width: 400px;
    margin: 0 auto;
    padding: 10px;
    @media (min-device-width: 1100px) {
        padding-left: 20px;
        text-align: left;
        margin: 0;
    }
`;


const SliderContainer = styled.div`
    max-width: 1000px;
    width: 100%;
`;

const SliderInfo = styled.div`
    text-align: center;
    margin-top: 20px;
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
    img {
        position: relative;
    }
    @media (min-device-width: 1100px) {
        margin-top: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;

export default class SliderRsm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight
        };
        this.listenToResize();
    }

    listenToResize () {
        window.addEventListener('resize', () => {
            this.setState(
                {
                    innerWidth: window.innerWidth,
                    innerHeight: window.innerHeight
                }
            )
        });
    }

    render() {
        const { innerWidth, innerHeight } = this.state;
        const language = localStorage.language || 'no';
        const translations = {
            no: {
              logo: logo,
              conDate: '12.-13. Mai 2018, Runarhallen, Sandefjord',
              buyTicket: "Kjøp billetter"
            },
            en: {
              logo: logoEn,
              conDate: 'May 12-13th, 2018. Runarhallen, Sandefjord, Norway',
              buyTicket: "Get tickets   "
            }
          }
          let translation = translations[language];  
        return (
            <SliderRsmContainer innerWidth={innerWidth} innerHeight={innerHeight}>
                
                <Backdrop />
                <Video title="rsm-youtube-video" class="videoContainer__video" width="1920" height="1080" src="http://www.youtube.com/embed/r8aGjuYCTr0?modestbranding=1&autoplay=1&controls=0&fs=0&loop=1&rel=0&showinfo=0&disablekb=1&playlist=r8aGjuYCTr0" frameborder="0"></Video>
                <SliderContainer>
                    <SliderInfo>
                        <img src={translation.logo} alt="Slider" />
                        <ConInfo>
                            <ConDescription>{translation.conDate}</ConDescription>
                            <TicketButton href="https://retrospillmessen.hoopla.no/sales/2422891309">
                                {translation.buyTicket}
                            </TicketButton>
                            
                        </ConInfo>
                    </SliderInfo>
                    <LogoRow />
                </SliderContainer>
            </SliderRsmContainer>
        )
    }
}