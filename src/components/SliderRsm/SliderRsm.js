import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './pixel-logo.png';
import logoEn from './pixel-logo.png';
import background from './slider-rsm-background.jpg';
import sliderVideo from './slider.mp4';
import scanLines from './scanlines.png';
import { PixelButton } from '../Title/Title';
import neoTokyoLogo from '../../images/neo-tokyo-white.png';
import elkjopLogo from '../../images/elkjop_logo_white.png';
import nerdeportalenLogo from '../../images/nerdeportalen-logo.png';
import legoLogo from '../../images/lego-logo.png';
import capcomLogo from '../../images/capcom-logo.png';


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
`;

const TicketButton = styled(PixelButton)`
  
`;

const SponsorRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 40px;
    position: relative;
    z-index: 3;
    
    a {
        display: inline-block;
        &:hover {
            img {
                opacity: 1;
            }
        }
    }
    img {
        max-height: 20px;
        width: auto;
        margin: 0 20px 0 20px;
        opacity: 0.6;
        @media (min-device-width: 1100px) {
            max-height: 48px;
        }
    }
    @media (max-device-width: 1100px) {
        img {
            opacity: 1;
            margin-top: 20px;
        }
    }

`;

const SmallSponsorRow = styled(SponsorRow)`
    margin-top: -20px;
    img {
        max-height: 37px;
    }
`;


const Video = styled.video`
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

const Sponsors = styled.div `

`;

const SliderContainer = styled.div`
    max-width: 1000px;
    width: 100%;
`;

const SliderInfo = styled.div`
    text-align: center;
    img {
        position: relative;
    }
    @media (min-device-width: 1100px) {
        display: flex;
        flex-direction: column ;
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
                <Video autoPlay="true" loop="true">
                    <source src={sliderVideo} type="video/mp4" />
                </Video>
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
                    <Sponsors>
                        <SponsorRow>
                            <a href="http://www.elkjop.no" target="new_window"><img src={elkjopLogo} alt={elkjopLogo}/></a>
                            <a href="http://www.neotokyo.no" target="new_window"><img src={neoTokyoLogo} alt={neoTokyoLogo}/></a>
                            <a href="http://www.nerdeportalen.no" target="new_window"><img src={nerdeportalenLogo} alt={nerdeportalenLogo}/></a>
                            <a href="http://www.lego.no" target="new_window"><img src={legoLogo} alt={legoLogo}/></a>
                            <a href="http://www.lego.no" target="new_window"><img src={capcomLogo} alt={capcomLogo}/></a>
                        </SponsorRow>
                        <SmallSponsorRow>
                            
                        </SmallSponsorRow>
                    </Sponsors>
                </SliderContainer>
            </SliderRsmContainer>
        )
    }
}