import React from 'react';
import styled from 'styled-components';
import FooterBackground from '../../images/white-pixel-back.png';
import {PixelButton} from '../Title/Title';


const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-image: url(${FooterBackground});
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: space-around;
  font-family: "Rubik", sans-serif;
  padding: 80px;
  @media (max-device-width: 1100px) {
    padding: 20px;
  }
  a {
      width: 100%;
      text-align: center;
      display: block;
    }
  h1 {
    color: black;
    font-size: 2em;
    border-bottom: 
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 4px solid #37e019;
    text-align: center;
    @media (max-device-width: 1100px) {
      margin-bottom: 20px;
    }
  }
  h2 {
    font-size: 16px;
    display: inline-block;
    text-align: center;
    @media (max-device-width: 1100px) {
      padding: 0;
      width: 100%;
    }
  }
  @media (max-device-width: 1100px) {
      position: relative;
      display: block;
      height: auto;
      background-position: left top;
    }
`;



export default class Footer extends React.Component {
    render() {
        const language = localStorage.language || 'no';
        const translations = {
          no: {
            visit: "For oppdatering, besøk oss på facebook!",
            remember: `Husk, du når oss alltid på 
            <a href=\"mailto:mail@retrospillmessen.no\">mail@retrospillmessen.no</a>, 
            <a href=\"mailto:stand@retrospillmessen.no\">stand@retrospillmessen.no</a>,
             eller telefon <a href=\"tel:+4797750047\">+47 977 50 047</a>
            <br/><br/>Ønsker du å søke pressepass til Retrospillmessen? Kontakt oss på <a href=\"mailto:presse@retrospillmessen.no\">presse@retrospillmessen.no</a>.
            Vi ber om at du/dere søker pressepass innen utgangen av april.`
          ,
          },
          en: {
            visit: "For updates, visit us on facebook",
            remember: `You can always reach us at 
            <a href=\"mailto:mail@retrospillmessen.no\">mail@retrospillmessen.no</a>, 
            <a href=\"mailto:stand@retrospillmessen.no\">stand@retrospillmessen.no</a>,
             or by phone <a href=\"tel:+4797750047\">+47 977 50 047</a>
             <br/><br/>Want to apply for press pass to Retrospillmessen? Contact us at <a href=\"mailto:presse@retrospillmessen.no\">presse@retrospillmessen.no</a>.
            We as that you apply for a pass at latest within the month of April.`
            ,
          }
        }
        let translation = translations[language];              
        return (
            <FooterContainer>
                
                <h1>{translation.visit}</h1>
                <PixelButton href="https://www.facebook.com/retrospillmessen/">Gå til facebook</PixelButton>
                <h2 dangerouslySetInnerHTML={{__html: translation.remember}} />
          </FooterContainer>
        )
    }
}
