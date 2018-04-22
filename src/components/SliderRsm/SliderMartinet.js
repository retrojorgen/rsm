import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../images/pixel-logo.png';
import logoEn from '../../images/pixel-logo.png';
import background from '../../images/martinet-background.jpg';
import martinetLarge from '../../images/charles-martinet-big.png';
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
    >img {
        height: 300px;
        max-height: 50%;
        z-index: 4;
        margin-bottom: 10px;
    }
    @media (max-device-width: 1100px) {
        >img {
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
    }
`;

const FixedLeftLarge = styled.div `
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: right;
    img {
      height: 100%;
      position: relative;
      max-height: 100%;
      transform: scaleX(-1) translateX(-80px);
      max-width: none;
      z-index: 4;
    }
    @media (min-width: 768px) {
      img {
        transform: scaleX(-1) translateX(-250px);
      }
    }
    @media (min-width: 1100px) {
      left: 0;
      text-align: left;
      img {
        transform: translateX(-50px) scaleX(1);
      }
    }
`;

const ConInfo = styled.div `
    max-width: 400px;
    margin: 0 auto;
    padding: 10px;
    position: relative;
    z-index: 6;
    @media (min-device-width: 1100px) {
        padding-left: 20px;
        text-align: left;
        margin: 0;
        margin-bottom: 2em;
    }
`;

const Sponsors = styled.div `

`;

const SliderContainer = styled.div`
    max-width: 1000px;
    width: 100%;
    position: relative;
    z-index: 6;
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


const ConTitle = styled.div`
    position: relative;
    max-width: 300px;
    text-align: right;
    padding-right: 20px;
    padding-left: 20px;
    h1 {
      position: relative;
      font-size: 3em;
      text-transform: uppercase;
      color: white;
      text-shadow: 0 2px 2px rgba(0,0,0,0.4);
    }
    h2 {
      position: relative;
      color: #fff142;
      text-transform: uppercase;
      text-shadow: 0 2px 2px rgba(0,0,0,0.4);
    }
`;

export default class SliderMartinet extends Component {
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
              buyTicket: "Kjøp billetter",
              title: "Møt Charles Martinet",
              titleSub: "Stemmen til Mario, Luigi, Wario, Waluigi og mer"
            },
            en: {
              logo: logoEn,
              conDate: 'May 12-13th, 2018. Runarhallen, Sandefjord, Norway',
              buyTicket: "Get tickets",
              title: "Meet Charles Martinet",
              titleSub: "The voice of Mario, Luigi, Wario, Waluigi and more"
            }
          }
          let translation = translations[language];  
        return (
            <SliderRsmContainer innerWidth={innerWidth} innerHeight={innerHeight}>
                
                <Backdrop />
                <FixedLeftLarge>
                  <img  src={martinetLarge}  alt="Charles Martinet" />
                </FixedLeftLarge>
                <SliderContainer>
                    <SliderInfo>

                        <ConTitle>
                          <h1>{translation.title}</h1>
                          <h2>{translation.titleSub}</h2>
                        </ConTitle>
                        
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