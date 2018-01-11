import React from 'react';
import styled from 'styled-components';
import WelcomeImage from './welcome-back.png';
import Title, { BlackSection } from './../Title/Title';
import { NavLink } from 'react-router-dom';


const ContentSections = styled.div `
    display: flex;
    font-family: "Rubik", sans-serif;
    text-align: left;
    justify-content: center;
    align-items: center;
    background: url(${WelcomeImage});
    background-size: cover;
    padding: 60px;
    @media (max-device-width: 1100px) {
      display: block;
      padding: 0;
      margin-top: 0;
      padding: 10px;
    }
`;
const Content = styled.div `
    width: 100%;
    max-width: 600px;
    padding: 20px;
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
        padding: 20px;
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
            readmore: 'Lurer du på hva som foregår på Retrospillmessen? Mere her..',
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
            <BlackSection>
                <ContentSections>
                    <Content>
                        <h2>{translation.subTitle}</h2>
                        <p>{translation.content}</p>
                        <NavLink to="/about">{translation.readmore}</NavLink>
                    </Content>
                </ContentSections>
          </BlackSection>
        )
    }
}
