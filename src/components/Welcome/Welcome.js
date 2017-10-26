import React from 'react';
import styled from 'styled-components';
import WelcomeImage from './welcome-image.jpg';
import Title from './../Title/Title';
import { NavLink } from 'react-router-dom';


const Section = styled.div `
    display: block;
    margin-bottom: 20px;
    margin-top: 80px;
    @media (max-device-width: 1100px) {
        margin-top: 20px;
    }
`;

const ContentSections = styled.div `
    display: flex;
    font-family: "Rubik", sans-serif;
    @media (max-device-width: 1100px) {
      display: block;
      padding: 0;
    }
`;

const LeftContent = styled.div `
    width: 50%;
    padding: 20px;
    background-image: url(${WelcomeImage});
    background-size: cover;
    @media (max-device-width: 1100px) {
        width: 100%;
        height: 200px;
        display: block;
        padding: 0;
    }
`;

const RightContent = styled.div `
    width: 50%;
    padding: 80px;
    h2 {
        font-weight: bold;
        font-size: 2em;
        color: #e0c417;
        margin-top: 0;
        max-width: 600px;
    }
    p {
        font-size: 1.1em;
        line-height: 1.4em;
        color: white;
        max-width: 600px;
    }
    a {
        color: white
    }
    @media (max-device-width: 1100px) {
        width: 90%;
        margin: -20px auto 0 auto;
        display: block;
        padding: 20px;
        background-color: black;
    }
`;

export default class Welcome extends React.Component {
    render() {
        const language = localStorage.language || 'no';
        const translations = {
          no: {
            title: "Retrospillmessen 2018",
            subTitle: "Endelig kan vi begynne å glede oss til årets største Retrospillmesse!",
            content: `Retrospillmessen er messa som samler gamere i alle aldre
            en helg i Sandefjord. Messen hvor vi møter gamle kjente (du skjønner hva vi mener? :), skaper nye minner, og ikke minst har det skikkelig moro!
            Lurer du på hva som skjer på Retrospillmessen?`,
            readmore: 'Lurer du på hva som foregår på Retrospillmessen? Mere her..',
          },
          en: {
            title: "Retrospillmessen 2018",
            subTitle: "Finally! We can start looking forward to Retrospillmessen 2018, the biggest retro convention in the Nordics!",
            content: `Welcome to the convention where retro gamers from all over gather for a weekend to enjoy each others company, great games,
            amazing speakers and VIP guests, cool tournaments and have fun!`,
            readmore: 'Curios about what goes on at the convention? More here..',  
          }
        }
        let translation = translations[language];              
        return (
            <Section>
                <Title title={translation.title} />
                <ContentSections>
                    <LeftContent />
                    <RightContent>
                        <h2>{translation.subTitle}</h2>
                        <p>{translation.content}</p>
                        <NavLink to="/about">{translation.readmore}</NavLink>
                    </RightContent>
                </ContentSections>
          </Section>
        )
    }
}
