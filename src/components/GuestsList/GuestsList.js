import React, { Component } from 'react';
import styled from 'styled-components';

import whitePixelBackground from '../../images/white-pixel-back.png';
import blackPixelBackground from '../../images/dark-pixel-back.png';
import Allowe from '../../images/allowe.png';
import HowardWarshaw from '../../images/hwarshaw.png';
import RonGilbert from '../../images/rongilbert.png';
import TheCompletionist from '../../images/thecompletionist.png';

import { TopTitle, HeaderTitleWrapper, Header } from '../Title/Title';


const Section = styled.div`
    padding: 20px;
    display: flex;
    overflow: hidden;
    justify-content: ${props => props.justified};
    align-items: flex-start;
    position: relative;
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
    @media (max-device-width: 1100px) {
      flex-direction: column;
      padding: 0;
    } 
`;
const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${(props) => props.background});
  background-size: cover;

`;
const ContentSection = styled.div `
  position: relative;
  display: block;
  padding: 20px 0 0 20px;
  overflow: hidden;
  border-radius: 8px;
  @media (max-device-width: 1100px) {
    width: 100%;
    border-radius: 0;
  } 
`;

const ImageSection = styled.div `
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  img {
    max-width: 300px;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.6);
  }
  @media (max-device-width: 1100px) {
    padding-top: 0;
    justify-content: center;
    img {
      max-width: 100%;
    }
  }
`;

const ProfileSection = styled.div `
`;

const ContentSectionHeader = styled.h2 `
  font-family: "Rubik", sans-serif;
  font-size: 2em;
  color: ${(props) => props.color};
  position: relative;
  font-weight: bold;
`;

const ContentSectionParagraph = styled.p `
  font-family: "Rubik", sans-serif;
  font-size: 1em;
  line-height: 1.6em;
  color: ${(props) => props.color};
  position: relative;
  a {
    color: ${(props) => props.color};
  }
`;

export default class GuestsList extends Component {
  
  componentDidMount () {
    window.scrollTo(0, 0);
  }

  render() {
    window.scrollTo(0, 0);
    const language = localStorage.language || 'no';
    const translations = {
      no: {
        title: "Gjester på RSM 18",
        subtitle: "De beste fra bransjen og youtube!",
        unnanouncedHeader: "Følg med, flere gjester annonseres snart!",
        sections: [
          {
            personImage: RonGilbert,
            header: "Ron Gilbert (Maniac Mansion, Monkey Island etc..)",
            
            paragraphs: [
              `Ron Gilbert er en amerikansk designer, programmerer og produsent av videospill. Han er mest kjent for sitt arbeid hos LucasArts, hvor han blant annet var med på å lage Maniac Mansion og de to første Monkey Island-spillene.`,
              `I 1985 fikk han sjansen til å lage sitt eget spill for LucasArts om en mørk, viktoriansk herregård hvor en gal forsker bodde sammen med sine noe tilbakestående avkom og utenomjordiske skapninger. Ron Gilbert og Gary Winnick fikk idéen i løpet av flere samtaler og de mente at tiden var inne for å presentere det til ledelsen.`,
              `Gilbert og Arick Wilmunder programmerte et script-språk som ble kalt opp etter prosjektet: Script Creation Utility for Maniac Mansion, bedre kjent som SCUMM.`,
              `Maniac Mansion ble gitt ut i 1987 og det ble en stor suksess. SCUMM viste seg å være det perfekte språket for å lage eventyrspill og Gilbert brukte det senere til å lage flere suksessrike spill, slik som The Secret of Monkey Island. Han forlot LucasArts etter Monkey Island 2 for å stifte Humongous Entertainment med Shelley Day.`,
              `Senere ga Gilbert ut kritikerroste spill som Death Spank og The Cave, og nå nylig spillet ThimbleWeed Park.
              Vi gleder oss til å få en sann eventyr-legende til messen!`
            ]
          },
          {
            personImage: Allowe,
            imageDescription: "Al Lowe kommer til Retrospillmessen 18",
            header: "Al Lowe (Leisure Suit Larry)",
            
            paragraphs: [
              `Al Lowe er en av de virkelig store legendene i spillbransjen!`,
              `Han er kjent for å ha skapt spillserien Leisure Suit Larry, ofte hyllet som et av de mest unike eventyrspillene i historien!`,
              `Han jobbet for spillselskapet Sierra (tidligere Sierra On Line) store deler av karrieren, først som utvikler av lærespill på lisens fra Disney.`,
              `Senere som utvikler på Kings Quest og Police Quest serien, før han bega seg ut på Larry-serien`,
              `Al pensjonerte seg offisielt fra Sierra i 1998, men engasjementet for spill og humor (og elektriske togbaner) har han aldri lagt på hylla.
              Al er i dag 71 år gammel og kaller seg for "The oldest video game developer alive". Vi gleder oss utrolig til å treffe han på RSM 18 hvor han kommer
              både for å holde foredrag og gjøre Q&A`,

            ]
          },{
            personImage: HowardWarshaw,
            imageDescription: "Howard Scott Warshaw kommer til Retrospillmessen 2018",
            header: "Howard Scott Warshaw (E.T., Atari 2600)",
            
            paragraphs: [
              `Howard Scott Warshaw er en tidligere amerikansk spilldesigner, som er verdenskjent for å ha skapt det legendariske spillet E.T. til spillkonsollen Atari 2600. Spillet fikk mye av skylden for at spillindustrien i nord-amerika kollapset fullstendig tidlig på 80-tallet.`,
              `Warshaw ble selv håndplukket til E.T-prosjektet, og hevder selv at spillet ble utviklet på 5 og en halv uke. Det var fordi spillet måtte bli ferdig til julehandelen i 1982. Spillet solgte faktisk forbausende godt, men etter jul rant returene inn i butikkene som hadde solgt spillet.`,
              `Det gikk lenge rykter om at Atari i ren frustrasjon hadde begravd de gjenværende E.T kassetene på en hemmelig plass i ørkene i New Mexico.`,
              `Et tema som ble dekket i dokumentaren <a href=“https://en.wikipedia.org/wiki/Atari:_Game_Over”> Game: Over</a> og <a href=“https://en.wikipedia.org/wiki/Angry_Video_Game_Nerd:_The_Movie”> Angry Video Game Nerd: The Movie</a>.  Warshaw medvirker i begge filmene.`,
              `Warshaw utviklet faktisk gode spill også, slik som det annerkjente Yar’s Revenge og Indiana Jones-spillet Raiders of The Lost Ark. Warshaw forlot Atari ikke lenge etter E.T fadesen. Senere i livet tok han master-grad i psykologi og livnærer seg i dag som psychoterapeut i Silicon Valley.`,
              `Warshaw er fortsatt en lidenskapelig fyr, og han gleder seg til å komme til Norge for å snakke om spillene han skapte, og historien rundt dem!`
            ]
          },
          {
            personImage: TheCompletionist,
            imageDescription: "The Completionist kommer til Retrospillmessen 2018",
            header: "The Completionist (Youtube, 839 999 subs)",
            
            paragraphs: [
              `Ikke gå glipp av en av de kuleste youtuberne på Retrospillmessen 2018, Jirard Khalil aka The Completionist.`,
              `I en årrekke har Jirard rundet et spill 100% nesten hver uke på youtube. Derfor kaller han seg for the
              Completionist!`,
              `Jirard har gjestet Retrospillmessen i flere år allerede og drar alltid fulle hus på panelene sine. Han er en
              trivelig og jordnær fyr som gjerne setter seg ned for en prat om ditt favorittspill.
              Vi gleder oss til å treffe The Completionist igjen på Retrospillmessen 2018.`,
              `Og PS, ta en titt på youtube-kanalen hans her <a href=“https://www.youtube.com/user/ThatOneVideoGamer”>https://www.youtube.com/user/ThatOneVideoGamer</a>`
            ]
          },
          
        ]
      },
      en: {
        title: "Guests at RSM18",
        subtitle: "The best of the biz",
        unnanouncedHeader: "More guests will be announced shortly!",
        sections: [
          {
            personImage: Allowe,
            imageDescription: "Al Lowe is visiting Retrospillmessen 2018",
            header: "Al Lowe (Leisure Suit Larry-series)",
            
            paragraphs: [
              `Al Lowe is one of the true legends of the video game business.`,
              `Lowe got the worlds (of video gamers) attention with his ground breaking computer game Leisure Suit Larry. Which is still regarded as one of the most unique adventures games ever created.`,
              `For most of his career he worked for the gaming company Sierra (formerly Sierra On Line). First as a developer of educational games with a Disney license,
              later as developer on the Kings Quest and Police Quest series, before devoting his time to the Leisure Suit Larry series.`,            
              `Al officially retired from Sierra in 1998, but he never retired from being a funny, creative and unique individual. He even released a joke-app on the App store!`,
              `Today, Al is 71 years young, and refers to himself at The oldest video game developer alive. We simply can't wait to meet and listen to Al at Retrospillmessen 2018!`
            ]
          },
          {
            personImage: HowardWarshaw,
            imageDescription: "Howard Scott Warshaw is visiting Retrospillmessen 2018",
            header: "Howard Scott Warshaw (E.T. for Atari 2600)",
            
            paragraphs: [
              `Howard Scott Warshaw is a former American game designer, famous / infamous for creating the legendary game E.T for the Atari 2600.`,
              `The game was largely blamed starting the North-American video game crash of the early 80s.`,
              `Warshaw was actually hand-picket to do the E.T project, and claims to have created the game in only 5 and a half weeks. The game needed to be finished before the Christmas sale of 1982. The game actually sold well initially, however after Christmas many kids returned their games to the stores.`,
              `For long there were rumours that Atari buried the remaining games in an unspecified lot in New Mexico. The subject was covered in the documentary <a href=“https://en.wikipedia.org/wiki/Atari:_Game_Over”> Game: Over</a>, and the movie <a href=“https://en.wikipedia.org/wiki/Angry_Video_Game_Nerd:_The_Movie”> Angry Video Game Nerd: The Movie</a>. Warshaw appears in both movies.`,
              `Warshaw actually developed several good games as well, including the acclaimed Yar’s Revenge, and the Indiana Jones-based game Raiders of The Lost Ark.`,
              `Warsaw left Atari shortly after E.T., and later in life received a degree in Psychology. His current occupation is as a Psychotherapist in Silicon Valley.`
            ]
          },
          {
            personImage: RonGilbert,
            header: "Ron Gilbert (Maniac Mansion, Monkey Island etc..)",
            
            paragraphs: [
              `Ron Gilbert is an American video-game designer, programmer, and producer. His games are generally focused on interactive story-telling, and he is arguably best known for his work on several classic LucasArts adventure games, including Maniac Mansion and the first two Monkey Island games.`,
              `While a student in 1983, he co-wrote Graphics Basic and he then worked on action games for HESware, which went out of business. He afterwards joined Lucasfilm Games (LucasArts), and was given the opportunity to develop his own games. He became particularly known for inventing SCUMM, a technology used in many subsequent games. After leaving LucasArts, Gilbert co-founded the children’s gaming company Humongous Entertainment in 1992 and its sister company Cavedog Entertainment in 1995, where he produced games such as Total Annihilation for adults.`,
              `Later on he developed acclaimed games DeathSpank and The Cave, before releasing his newest game Thimbleweed Park last year.`,
              `We simply can not wait to meet Ron and hear all the stories of the self proclaimed grumpy gamer`
            ]
          },
          {
            personImage: TheCompletionist,
            imageDescription: "The Completionist kommer til Retrospillmessen 2018",
            header: "The Completionist (Youtube, 839 999 subs)",
            
            paragraphs: [
              `Don’t miss the chance to meet one of the coolest current Youtubers at Retrospillmessen 2018!`,
              `Jirard Khalil AKA The Completionist has been completing games 100% almost every week on youtube for years. Thats
              Why he calls himself the Completionist!`,

              `Jirard is coming back for his third visit to Retrospillmessen. Always a crowd pleaser, Jirard is a nice
              and down to earth guy that spends the entire con talking to fans either at his both or at his annual panel / Q&A.`,

              `We can’t wait to get The Completionist back to Norway for Retrospillmessen 2018.
              Oh if you have not been there already, please have a look at his youtube channel here <a href=“https://www.youtube.com/user/ThatOneVideoGamer”>https://www.youtube.com/user/ThatOneVideoGamer</a>`
            ]
          }
        ]
      }
    }
    var sectionToggle = true;
    var translation = translations[language];
    let sections = translation.sections.map((a,k) => {
      let flex = sectionToggle ? 'flex-start': 'flex-end';
      let imageAligment = sectionToggle ? 'right': 'left';
      let background = sectionToggle ? blackPixelBackground: whitePixelBackground;
      let color = sectionToggle ? 'white': 'black';
      sectionToggle = !sectionToggle;
      return (
        <SectionsContainer background={background}>
          <Section key={k}>
            <ImageSection>
              <img src={a.personImage} />
            </ImageSection>
            <ContentSection>
              <ContentSectionHeader color={color}>{a.header}</ContentSectionHeader>
              {a.paragraphs.map((c, ck) => (
                <ContentSectionParagraph key={ck} dangerouslySetInnerHTML={{__html: c}} color={color}>
                </ContentSectionParagraph>
              ))}
            </ContentSection>
          </Section>
        </SectionsContainer>
      );
    });

    return (
      <div className="About">
        <Header>
          <HeaderTitleWrapper>
            <TopTitle>
              {translation.title}
            </TopTitle>
            <p>{translation.subtitle}</p>
          </HeaderTitleWrapper>
        </Header>
        
          {sections}
        
      </div>
    );
  }
}
