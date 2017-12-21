import React from 'react';
import styled from 'styled-components';
import FooterBackground from './tickets-background-yellow.png';


const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-image: url(${FooterBackground});
  background-size: 20%;
  display: flex;
  align-items: space-around;
  justify-content: space-around;
  font-family: "Rubik", sans-serif;
  @media (max-device-width: 1100px) {
      position: relative;
      display: block;
      height: auto;
      background-size: 50%;
    }
`;

const Section = styled.div`
  width: 33%;
  padding: 80px 20px 80px 20px;
  color: #e3eefb;
  a {
    color: #e3eefb; 
  }
  &:nth-child(2) {
    border-left: 1px solid rgba(0,0,0,0.2);
    border-right: 1px solid rgba(0,0,0,0.2);
  }
  @media (max-device-width: 1100px) {
      width: 100%;
      border-left: 0;
      border-right: 0;
      border-bottom:1px solid rgba(0,0,0,0.2);
      border-top: 1px solid rgba(0,0,0,0.2);
    }
`;

export default class Footer extends React.Component {
    render() {
        const language = localStorage.language || 'no';
        const translations = {
          no: {
            aboutus: `
              <h3>Om Retrospillmessen</h3>
              <p>Retrospillmessen er en fire år gammel retrofestival, drevet av et knippe retro-entusiaster!</p>
              <p>Vi har rundt 5000 besøkende hvert år, som spiller, handler og opplever retrokultur i vår store hall</p>
              <p>Messa foregår over en helg, som regel i mai hvert år.</p>
            `,
            contactus: `
              <h3>Kontakt oss</h3>
              <p>Trenger du å kontakte oss for noe?</p>
              <p>Retrospillmessen drives av organisasjonen Spillmuseet, orgnr 913109139.</p>
              <p>Ledere for messen er:</p>
              <p>Jan Olav Hegvik - <a href="mailto:leder@spillmuseet.no">leder@spillmuseet.no</a></p>
              <p>Jørgen Jacobsen - <a href="mailto:messe@spillmuseet.no">messe@spillmuseet.no</a></p>
              <p>For andre forespørseler</p>
              <p>Stand/leie - <a href="mailto:stand@retrospillmessen.no">stand@retrospillmessen.no</a></p>
              <p>Presse - <a href="mailto:mail@retrospillmessen.no">mail@retrospillmessen.no</a></p>
              <p>Andre spørsmål - <a href="mailto:mail@retrospillmessen.no">mail@retrospillmessen.no</a></p>
            `,
            questions: `
            <h3>Har du spørsmål?</h3>
            <p>Du når oss alltid på mail@retrospillmessen.no</p>
          `,
          },
          en: {
            aboutus: `
              <h3>About Retrospillmessen</h3>
              <p>Retrospillmessen is a four year old convention/festival, held by a bunch of Norwegian retro geeks!</p>
              <p>Every year 5000 people come to our venue to play games and have fun!</p>
              <p>The convention is held during a week end, usually in May</p>
            `,
            contactus: `
              <h3>Contact us</h3>
              <p>Need to contact us?</p>
              <p>Retrospillmessen is run by the organization Spillmuseet, orgnr 913109139.</p>
              <p>Responsible for the convention:</p>
              <p>Jan Olav Hegvik - <a href="mailto:leder@spillmuseet.no">leder@spillmuseet.no</a></p>
              <p>Jørgen Jacobsen - <a href="mailto:messe@spillmuseet.no">messe@spillmuseet.no</a></p>
              <p>For other questions</p>
              <p>Booth/rental - <a href="mailto:stand@retrospillmessen.no">stand@retrospillmessen.no</a></p>
              <p>Press - <a href="mailto:mail@retrospillmessen.no">mail@retrospillmessen.no</a></p>
              <p>Other questions - <a href="mailto:mail@retrospillmessen.no">mail@retrospillmessen.no</a></p>
            `,
            questions: `
              <h3''>Have a general question?</h3>
              <p>You can always reach us at mail@retrospillmessen.no</p>
            `,
          }
        }
        let translation = translations[language];              
        return (
            <FooterContainer>
                <Section dangerouslySetInnerHTML={{__html: translation.aboutus}}></Section>
                <Section dangerouslySetInnerHTML={{__html: translation.contactus}}></Section>
                <Section dangerouslySetInnerHTML={{__html: translation.questions}}></Section>
          </FooterContainer>
        )
    }
}
