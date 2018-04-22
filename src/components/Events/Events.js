import React, { Component } from 'react';
import styled from 'styled-components';
import whitePixelBackground from '../../images/white-pixel-back.jpg';
import { TopTitle, HeaderTitleWrapper, Header, WideSection, SectionsContainer } from '../Title/Title';
import Guests from './../Guests/Guests';


const Day = styled.div`
  width: calc(100% - 20px);
  border: 4px solid black;
  margin: 10px;
  display: none;
  h2 {
    text-align: center;
    padding: 10px;
    text-transform: uppercase;
    background-color: #fff142;
    color: black;
    margin: 0;
    border-bottom: 4px solid black;
    font-size: 1.2em;
    @media (min-width: 1100px) {
      padding: 20px;
      font-size: 1.5em;
    }
  }
  
  &.active {
    display: block;
    
  }
  @media (min-width: 1100px) {
      display: block;
      width: 50%;
      margin: 20px;
  }
`;
const DayPicker = styled.div`
  display: block;
  text-align: center;
  padding: 10px;
  select {
    text-transform: uppercase;
    padding: 10px;
    border: 2px solid black;
  }
  @media (min-width: 1100px) {
      display: none;
  }
`;
const Event = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`;

const Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: black;
  color: white;
  flex: 0 0 80px;
  font-size: 0.9em;

  span {
    display: block;
    padding: 10px;
    text-align: center;
  }
  @media (min-width: 1100px) {
    flex: 0 0 100px;
    font-size: 1em;
    span {
      padding: 20px;
    }
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-bottom: 2px solid black;
  margin-bottom: 10px;
  width: 100%;
  @media (min-width: 1100px) {
    padding: 20px;
    margin-bottom: 20px;
  }
  h3 {
    margin: 0;
    font-size: 1em;
    @media (min-width: 1100px) {
      font-size: 1.17em;
    }
  }
  p {
    margin-top: 4px;
    margin-bottom: 4px;
    font-size: 0.9em;
    @media (min-width: 1100px) {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 1em;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: inline-block;
    li {
      display: flex;
      align-items: center;
      background-color: black;
      color: white;
      border-radius: 20px;
      margin-bottom: 10px;
      .image-wrapper {
        height: 40px;
        width: 40px;
        margin-right: 10px;
        
        display: inline-block;
        overflow: hidden;
        border-radius: 50%;
        img {
          width: 100%;
        }
      }
    }
  }
`;




export default class Events extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      activeTile: 0,
      title: {
        no: {
          title: "Program 2018",
          description: "Offiselt program for Retrospillmessen 2018",
          dayPick: "Velg dag"
        },
        en: {
          title: "Schedule 2018",
          description: "Official schedule for Retrospillmessen 2018",
          dayPick: "Select day"
        }
      },
      schedule: [
        {
          no : {
            day: "Lørdag 12.05.2018",
            schedule: [
              {
                name: "Dørene åpner for VIP",
                description: "Har du VIP-billett kommer du inn en time før ordinær åpning",
                start: "10:00",
              },
              {
                name: "Dørene åpner for alle!",
                description: "",
                start: "11:00",
              },
              {
                name: "Hvordan slå seg opp som Youtuber i Skandinavia (panelet foregår på engelsk)",
                description: "Profilene bak kanalene CommonWealth Realm (136 000 subs) og Dex The Swede (61 000 subs) forteller om sine kanaler og hvordan det er å være youtuber i Skandinavia",
                info: [
                  {
                    name: "CommonWealth Realm",
                    url: "guests/commonwealth-realm",
                    profile: "commonwealth.jpg"
                  },
                  {
                    name: "Dex The Swede",
                    url: "guests/dex-the-swede",
                    profile: "dextheswede.jpg"
                  },
                ],
                start: "12:00",
                end: "12:30",
                location: "panelrommet"
              },
              {
                name: "Ron Gilbert Q&A",
                description: "Møt mannen bak det legendariske eventyrspillet Monkey Island. Den selvtitulerte grumpy gamer svarer på dine spørsmål",
                info: [
                  {
                    name: "Ron Gilbert",
                    url: "guests/ron-gilbert",
                    profile: "rongilbert.jpg"
                  }
                ],
                start: "12:20",
                end: "13:20",
                location: "panelrommet"
              },
              {
                name: "??????? Q&A",
                description: "Annonseres snart!",
                info: [
                ],
                start: "13:40",
                end: "14:40",
                location: "panelrommet"
              },
              {
                name: "Al Lowe Q&A",
                description: "Den legendariske eventyrspill-skaperen svarer på spørsmål og forteller om sin karriere",
                info: [
                  {
                    name: "Al Lowe",
                    url: "guests/al-lowe",
                    profile: "allowe.jpg"
                  }
                ],
                start: "15:00",
                end: "16:00",
                location: "panelrommet"
              },
              {
                name: "??????? Q&A",
                description: "Annonseres snart!",
                info: [
                ],
                start: "16:20",
                end: "17:20",
                location: "panelrommet"
              },
              /**
              {
                name: " Rare / Sea of Thieves Q&A med Chris Marlow og David Doak",
                description: "To veteraner fra Rare (Vi snakker Golden Eye og Conker!) snakker om Rares historie, nåtid og fremtid",
                info: [
                  {
                    name: "Al Lowe",
                    url: "guests/al-lowe",
                    profile: "allowe.jpg"
                  }
                ],
                start: "12:20",
                end: "13:20",
                location: "panelrommet"
              },
               */
              {
                name: "Completionist / ???? Q&A",
                description: "The Completionist tar med seg et par gjester og holder Q&A for tredje året på rad. Alltid populært!",
                info: [
                  {
                    name: "The Completionist",
                    url: "guests/the-completionist",
                    profile: "thecompletionist.jpg"
                  }
                ],
                start: "17:40",
                end: "18:40",
                location: "panelrommet"
              },
              {
                name: "Avslutningskosert: ????",
                description: "Vi avslutter kvelden med en konsert med spesiell gjester. Dette vil du ikke gå glipp av!",

                start: "19:00",
                end: "20:00",
                location: "scenen"
              },
              {
                name: "Dørene stenger i hallen",
                description: "",
                start: "20:00",
                end: ""
              }
            ]
          },
          en: {
            day: "Saturday 05.12.2018",
            schedule: [
                {
                  name: "Doors open for VIP ticket holders",
                  description: "If you have VIP ticket you may enter one hour before regular opening",
                  start: "10:00",
                },
                {
                  name: "Doors open for all guests!",
                  description: "",
                  start: "11:00",
                },
                {
                  name: "how to be a scandinavian youtuber (english spoken panel)",
                  description: "The guys behind the Youtube-channels CommonWealth Realm (136 000 subs) and Dex The Swede (61 000 subs) talk about running scandinavian youtube-channels with english language",
                  info: [
                    {
                      name: "CommonWealth Realm",
                      url: "guests/commonwealth-realm",
                      profile: "commonwealth.jpg"
                    },
                    {
                      name: "Dex The Swede",
                      url: "guests/dex-the-swede",
                      profile: "dextheswede.jpg"
                    }
                  ],
                  start: "12:00",
                  end: "12:30",
                  location: "panel room"
                },
                {
                  name: "Ron Gilbert Q&A",
                  description: "Meet the creator of the legendary Monkey Island adventure games",
                  info: [
                    {
                      name: "Ron Gilbert",
                      url: "guests/ron-gilbert",
                      profile: "rongilbert.jpg"
                    }
                  ],
                  start: "12:20",
                  end: "13:20",
                  location: "panel room"
                },
                {
                  name: "??????? Q&A",
                  description: "Announced soon!",
                  info: [
                  ],
                  start: "13:40",
                  end: "14:40",
                  location: "panel room"
                },
                {
                  name: "Al Lowe Q&A",
                  description: "The creator of cult game Leisure Suit Larry talks about the game and answers your questions",
                  info: [
                    {
                      name: "Al Lowe",
                      url: "guests/al-lowe",
                      profile: "allowe.jpg"
                    }
                  ],
                  start: "15:00",
                  end: "16:00",
                  location: "panel room"
                },
                {
                  name: "??????? Q&A",
                  description: "Announced soon",
                  info: [
                  ],
                  start: "16:20",
                  end: "17:20",
                  location: "panel room"
                },
                /**
                {
                  name: " Rare / Sea of Thieves Q&A med Chris Marlow og David Doak",
                  description: "To veteraner fra Rare (Vi snakker Golden Eye og Conker!) snakker om Rares historie, nåtid og fremtid",
                  info: [
                    {
                      name: "Al Lowe",
                      url: "guests/al-lowe",
                      profile: "allowe.jpg"
                    }
                  ],
                  start: "12:20",
                  end: "13:20",
                  location: "panel room"
                },
                */
                {
                  name: "Completionist / ???? Q&A",
                  description: "For the third year in a row American Youtuber The Completionst takes the stage to answer questions from fans. Rumours are he might bring some guests along?",
                  info: [
                    {
                      name: "The Completionist",
                      url: "guests/the-completionist",
                      profile: "thecompletionist.jpg"
                    }
                  ],
                  start: "17:40",
                  end: "18:40",
                  location: "panel room"
                },
                {
                  name: "Concert: ????",
                  description: "We finish the main day of Retrospillmessen of with a concert with special guests. Follow this page and our facebook page facebook.com/retrospillmessen for more information",
                  start: "19:00",
                  end: "20:00",
                  location: "main stage"
                },
                {
                  name: "Doors close",
                  description: "",
                  start: "20:00",
                  end: ""
                }
            ]
          }
        }, {
        no : {
          day: "Søndag 13.05.2018",
          schedule: [
            {
              name: "Dørene åpner for VIP",
              description: "Har du VIP-billett kommer du inn en time før ordinær åpning",
              start: "10:00",
            },
            {
              name: "Dørene åpner for alle!",
              description: "",
              start: "11:00",
            },
            {
              name: "Charles Martinet Q&A",
              description: "Mannen bak Mario svarer på spørsmål fra salen!",
              info: [
                {
                  name: "Charles Martinet",
                  url: "guests/charles-martinet",
                  profile: "charlesmartinet.jpg"
                }
              ],
              start: "11:15",
              end: "12:15",
              location: "panelrommet"
            },
            {
              name: "Al Lowe og Ron Gilbert eventyrpanel Q&A",
              description: "To ytterpunkter fra eventyrsjangeren, sammen for første gang?",
              info: [
                {
                  name: "Al Lowe",
                  url: "guests/al-lowe",
                  profile: "allowe.jpg"
                },
                {
                  name: "Ron Gilbert",
                  url: "guests/ron-gilbert",
                  profile: "rongilbert.jpg"
                }
              ],
              start: "12:45",
              end: "13:45",
              location: "panelrommet"
            },
            {
              name: "John De Lancie Q&A",
              description: "Mannen bak Q på Star Trek, Discord fra My little Pony etc.. svarer på dine spørsmål",
              info: [
                {
                  name: "John De Lancie",
                  url: "guests/john-de-lancie",
                  profile: "johndelancie.jpg"
                },
              ],
              start: "14:00",
              end: "15:00",
              location: "panelrommet"
            },
            {
              name: "Nintendo Play Station prototype Q&A",
              description: "Terry og Dan Diebold, eierne av den unike prototypen forteller og svarer på spørsmål fra salen",
              info: [
                {
                  name: "Nintendo Playstation Prototype",
                  url: "guests/playstation-prototype",
                  profile: "prototype.jpg"
                },
              ],
              start: "15:20",
              end: "16:20",
              location: "panelrommet"
            },
            {
              name: "??????? Q&A",
              description: "annonseres snart!",
              info: [
              ],
              start: "15:20",
              end: "16:20",
              location: "panelrommet"
            },
            {
              name: "Dørene stenger",
              description: "",
              start: "18:00",
            },
          ]
        },
        en: {
          day: "Sunday 05.13.2018",
          schedule: [
            {
              name: "Doors open for VIP ticket holders",
              description: "If you have VIP ticket you may enter one hour before regular opening",
              start: "10:00",
            },
            {
              name: "Doors open for all guests!",
              description: "",
              start: "11:00",
            },
            {
              name: "Charles Martinet Q&A",
              description: "The voice of Super Mario answers questions from the crowd!",
              info: [
                {
                  name: "Charles Martinet",
                  url: "guests/charles-martinet",
                  profile: "charlesmartinet.jpg"
                }
              ],
              start: "11:15",
              end: "12:15",
              location: "panel room"
            },
            {
              name: "Al Lowe and Ron Gilbert adventure game Q&A",
              description: "Two legends, together for the first time?",
              info: [
                {
                  name: "Al Lowe",
                  url: "guests/al-lowe",
                  profile: "allowe.jpg"
                },
                {
                  name: "Ron Gilbert",
                  url: "guests/ron-gilbert",
                  profile: "rongilbert.jpg"
                }
              ],
              start: "12:45",
              end: "13:45",
              location: "panel room"
            },
            {
              name: "John De Lancie Q&A",
              description: "The actor behind Q from Star Trek and Discord from My little Pony is ready to answer your questions",
              info: [
                {
                  name: "John De Lancie",
                  url: "guests/john-de-lancie",
                  profile: "johndelancie.jpg"
                },
              ],
              start: "14:00",
              end: "15:00",
              location: "panel room"
            },
            {
              name: "Nintendo Play Station prototype Q&A",
              description: "Terry and Dan Diebold, the owners of the one of a kind Nintendo Playstation Prototype talk about the console and answer your questions!",
              info: [
                {
                  name: "Nintendo Playstation Prototype",
                  url: "guests/playstation-prototype",
                  profile: "prototype.jpg"
                },
              ],
              start: "15:20",
              end: "16:20",
              location: "panel room"
            },
            {
              name: "??????? Q&A",
              description: "announced soon!",
              info: [
              ],
              start: "15:20",
              end: "16:20",
              location: "panel room"
            },
            {
              name: "Doors close",
              description: "",
              start: "18:00",
            },
          ]
        }
      },
      ]

    };
  }

  componentWillMount() {
  }

  componentDidMount () {
    window.scrollTo(0, 0);
  }

  componentDidUpdate () {
  }

  componentWillReceiveProps (nextProps) {
  
  }

  changeDay (event) {
    this.setState({
      activeTile: parseInt(event.target.value, 10)
    });
  }

  render() {
    window.scrollTo(0, 0);
    const language = localStorage.language || 'no';
    console.log('schedule', this.state.schedule[0]);
    let days = [
      this.state.schedule[0][language], 
      this.state.schedule[1][language]
    ];

    let activeTile = this.state.activeTile;

    let title = this.state.title[language];
    let dayPick = this.state.title[language].dayPick;
    
    return (
      <div className="">
         <Header>
          <HeaderTitleWrapper>
            <TopTitle>
              {title.title}
            </TopTitle>
            <p>{title.description}</p>
          </HeaderTitleWrapper>
        </Header>
        
        <SectionsContainer background={whitePixelBackground}>
        <DayPicker>
          <p>{dayPick}</p>
          <select value={activeTile} onChange={(event) => this.changeDay(event)}>
            {this.state.schedule.map((day, d) => (
              <option value={parseInt(d, 10)}>{day[language].day}</option>
            ))}
          </select>
        </DayPicker>
          <WideSection>
          {days.map((day, d) => (
            <Day key={d} className={activeTile === parseInt(d, 10) ? "active": ""}>
              <h2>{day.day}</h2>
              {day.schedule.map((event, e) => (
                <Event>
                  <Time>
                    {event.start && (
                      <span>{event.start}</span>
                    )}
                    {event.end && (
                      <span>{event.end}</span>
                    )}
                  </Time>
                  <Description>
                    <h3>{event.name}</h3>
                    <p>{event.description}</p>
                    <ul>
                      {event.info && event.info.map((info, i) => (
                        <li>
                          <div className="image-wrapper"><img src={require('../../images/' + info.profile)} alt={info.name} /></div>
                          <a>{info.name}</a>
                        </li>
                      ))}
                    </ul>
                  </Description>
                </Event>
              ))}
            </Day>
          ))}
          </WideSection>
        </SectionsContainer>
        <Guests />
      </div>
    );
  }
}
