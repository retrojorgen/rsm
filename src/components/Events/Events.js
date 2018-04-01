import React, { Component } from 'react';
import styled from 'styled-components';
import whitePixelBackground from '../../images/white-pixel-back.png';
import blackPixelBackground from '../../images/dark-pixel-back.png';
import { TopTitle, HeaderTitleWrapper, Header, WideSection, SectionsContainer,PixelButtonNavLink } from '../Title/Title';
import Guests from './../Guests/Guests';


const Day = styled.div`
  width: 50%;
  
`;

const Event = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    display: block;
    padding: 10px;
  }
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  ul {
    list-style: none;
    padding: 0;
    li {
      display: flex;
      .image-wrapper {
        height: 40px;
        width: 40px;
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
      title: {
        no: {
          title: "Program 2018",
          description: "Offiselt program for Retrospillmessen 2018"
        },
        en: {
          title: "Schedule 2018",
          description: "Official schedule for Retrospillmessen 2018"
        }
      },
      schedule: [
        {
          no : {
            day: "Lørdag 13.5",
            schedule: [
              {
                name: "Dørene åpner for VIP",
                description: "Har du VIP-billett kommer du inn en time før ordinær åpning",
                start: "11:00",
              },
              {
                name: "Dørene åpner for ordinære besøkende",
                description: "",
                start: "12:00",
              },
              {
                name: "Q&A / Panel med Ron Gilbert",
                description: "Legenden Ron Gilbert kjent for eventyrspillene Monkey Island og Maniac Mansion holdet et foredrag og spørre-runde etterpå",
                info: [
                  {
                    name: "Ron Gilbert",
                    url: "guests/ron-gilbert",
                    profile: "rongilbert.png"
                  }
                ],
                start: "12:00",
                end: "13:00",
                location: "teltet"
              },
              {
                name: "Dørene stenger i hallen",
                description: "",
                start: "18:00",
                end: ""
              },
              {
                name: "Avslutningskosert utetelt",
                description: "Kyoshu Orchestra med spesialgjester spiller opp til dans!",
                start: "18:00",
                end: "19:00",
                location: "teltet"
              },
            ]
          },
          en: {}
        }, {
        no : {
          day: "Søndag 14.5",
          schedule: [
            {
              name: "Dørene åpner for VIP",
              description: "Har du VIP-billett kommer du inn en time før ordinær åpning",
              start: "11:00",
            },
            {
              name: "Dørene åpner for ordinære besøkende",
              description: "",
              start: "12:00",
            },
            {
              name: "Eventyrpanel med Ron Gilbert og Al Lowe",
              description: "To legender åpner opp til en spørrerunde fra publikum! Var opplevelsen deres av eventyrspill annerledes? Det får vi vite her",
              info: [
                {
                  name: "Ron Gilbert",
                  url: "guests/ron-gilbert",
                  profile: "rongilbert.png"
                },
                {
                  name: "Al Lowe",
                  url: "guests/al-lowe",
                  profile: "allowe.png"
                }
              ],
              start: "12:00",
              end: "13:00",
              location: "teltet"
            },
            {
              name: "Dørene stenger i hallen",
              description: "",
              start: "18:00",
              end: ""
            },
            {
              name: "Avslutningskosert utetelt",
              description: "Kyoshu Orchestra med spesialgjester spiller opp til dans!",
              start: "18:00",
              end: "19:00",
              location: "teltet"
            },

          ]
        },
        en: {}
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

  render() {
    window.scrollTo(0, 0);
    let days = [
      this.state.schedule[0].no, 
      this.state.schedule[1].no
    ];

    let title = this.state.title.no;
    
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
          <WideSection>
          {days.map((day, d) => (
            <Day key={d}>
              <h2>{day.name}</h2>
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
                          <h4>{info.name}</h4>
                          <a>{info.name}</a>
                          <PixelButtonNavLink to={info.url}>Les mer..</PixelButtonNavLink>
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
