import React from 'react';
import styled, {keyframes} from 'styled-components';
import WelcomeImage from '../../images/welcome-back.png';
import { PixelButtonNavLink } from './../Title/Title';
import welcomeLeft from '../../images/welcome-left.png';
import welcomeRight from '../../images/welcome-right.png';
import flyingBird from '../../images/flying-bird.png';


const ContentSections = styled.div `
    display: flex;
    font-family: "Rubik", sans-serif;
    text-align: left;
    justify-content: center;
    align-items: flex-end;
    background: url(${WelcomeImage});
    background-size: cover;
    position: relative;
    @media (max-device-width: 1100px) {
      display: block;
      padding: 0;
      margin-top: 0;
      padding: 0;
    }
`;

const upDown = keyframes`
  0% {
    transform: translateY(-10px)
  }
  50% {
    transform: translateY(10px)
  }
`;

const FlyingBird = styled.div`
    width: 200px;
    height: 152px;
    display: inline-block;
    position: absolute;
    right: 40px;
    top: 20px;
    background: url(${flyingBird});
    background-size: contain;
    background-repeat: no-repeat;
    transform: translateY(-10px);
    animation: 1s ${upDown} ease-in-out infinite;
    z-index: 3;
    @media (max-device-width: 1100px) {
        right: auto;
        left: 50%;
        margin-left: -100px;
    }
`;

const LeftSection = styled.div`
    width: 100%;
    display: block;
    background: url(${welcomeLeft});
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 700px auto;
    height: 500px;
    @media (max-device-width: 1100px) {
        display: none;
    }
`;

const RightSection = styled.div`
    width: 100%;
    display: block;
    background: url(${welcomeRight});
    background-position: bottom left;
    background-size: 700px auto;
    background-repeat: no-repeat;
    height: 500px;
    @media (max-device-width: 1100px) {
        height: 260px;
        background-size: auto 260px;
        background-position: bottom right;
    }
`;

const Content = styled.div `
    width: 100%;
    max-width: 600px;
    padding: 80px 60px 80px 60px;
    position: relative;
    h2 {
        font-weight: bold;
        font-size: 2em;
        color: white;
        margin-top: 0;
        max-width: 600px;
        text-align: center;
        text-shadow: 0 4px 4px rgba(0,0,0,0.4);
    }
    p {
        font-size: 1.1em;
        line-height: 1.6em;
        color: white;
        max-width: 600px;
        text-align: center;
    }
    a {
        color: white;
        text-align: center;
        display: block;
    }
    @media (max-device-width: 1100px) {
        width: 90%;
        margin: -20px auto 0 auto;
        display: block;
        padding: 160px 20px 20px 20px;
        background-color: black;
        h2 {
            font-size: 2em;
        }
    }
`;

export default class Welcome extends React.Component {
    render() {
        const language = localStorage.language || 'no';
        const translations = {
          no: {
            title: "Retrospillmessen 2018",
            subTitle: "Velkommen til årets største nordiske retrospillmesse!",
            content: `For fjerde år på rad arrangerer vi Retrospillmessen i Runarhallen i Sandefjord. Med rundt 100 spillbare retrokonsoller og maskiner, fantastiske gjester og et stort marked med retrospill og merch
            er Retrospillmessen et av årets største happenings for gamere i alle aldre!`,
            readmore: 'Lurer du på hva som foregår på Retrospillmessen? Les her..',
          },
          en: {
            title: "Retrospillmessen 2018",
            subTitle: "Welcome to the biggest nordic retro gaming convention of 2018!",
            content: `For the fourth year in a row, Retrospillmessen is back in Sandefjord, Norway. Featuring around 100 playable retro-systems, amazing guests, a huge retro gaming and merch-market and so much more!`,
            readmore: 'Curios about what goes on at the convention? More here..',  
          }
        }
        let translation = translations[language];              
        return (
            <ContentSections>
                <FlyingBird />
                <LeftSection />
                <Content>
                    <h2>{translation.subTitle}</h2>
                    <p>{translation.content}</p>
                    <PixelButtonNavLink to="/about">{translation.readmore}</PixelButtonNavLink>
                </Content>
                <RightSection />
            </ContentSections>
        )
    }
}
