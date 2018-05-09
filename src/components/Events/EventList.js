import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { EventData, DayPick, EventAttributes }  from './EventData';
import { WideSection } from '../Title/Title';


const WideSectionModified = styled(WideSection)`
  height: 400px;
  position: relative;
  
  @media (min-width: 1100px) {
      height: 500px;
  }
  .day {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(180deg, transparent, #000);
    } 
  }
  &.expanded {
    height: auto;
    .day {
      &:after {
        display: none;
      }
    }
    
  }
`;

const Day = styled.div`
  width: calc(100% - 20px);
  border: 4px solid black;
  margin: 10px;
  display: none;
  max-height: 100%;
  overflow: hidden;
  position: relative;

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
    border: 4px solid black;
    font-size: 20px;
    border-radius: 0;
  }
  @media (min-width: 1100px) {
      display: none;
  }
`;
const Event = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  border-bottom: 2px solid black;
  &.allDay {
    .time {
      background-color: #e11111;
    }
  }
`;

const Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: black;
  color: white;
  flex: 0 0 80px;
  font-size: 0.9em;
  @media (min-width: 1100px) {
    padding-top: 10px;
  }
  .time-box {
    display: block;
    padding: 10px;
    text-align: left;
    span {
      display: block;
    }
    .smallcap {
      font-size: 0.7em;
      margin-bottom: 4px;
      text-transform: uppercase;
      color: #999;
    }
  }
  @media (min-width: 1100px) {
    flex: 0 0 100px;
    font-size: 1em;
    .time-box {
      padding: 10px 20px;
    }
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 20px 10px;
  width: 100%;
  background-color: #EEE;
  @media (min-width: 1100px) {
    padding: 20px;
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

const ExpandButton = styled.button`
    text-transform: uppercase;
    padding: 10px;
    border: 4px solid black;
    font-size: 20px;
    border-radius: 0;
    background-color: white;
    width: calc(100% - 20px);
    margin: 0 auto 0 auto;
`;

const language = localStorage.language || 'no';
const days = [
	EventData[0][language],
	EventData[1][language],
];
const selectedTitle = DayPick.selectTitle[language];
const { selectDays } = DayPick;
const from = EventAttributes.from[language];
const to = EventAttributes.to[language];

export default class EventList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			expanded: !props.minified,
			activeTile: 0,
		};

		this.toggleExpand = this.toggleExpand.bind(this);
	}


	componentWillReceiveProps(nextProps) {
		if (nextProps.minified) {
			this.setState({ expanded: false });
		}
	}

	toggleExpand() {
		this.setState({ expanded: !this.state.expanded });
	}

	changeDay(event) {
		this.setState({
			activeTile: parseInt(event.target.value, 10),
		});
	}

	render() {
		const { activeTile, expanded } = this.state;
		return (
			<div>
				<DayPicker>
					<p>{selectedTitle}</p>
					<select value={activeTile} onChange={event => this.changeDay(event)}>
						{selectDays.map((day, d) => (
							<option key={d} value={parseInt(d, 10)}>{day[language]}</option>
						))}
					</select>
				</DayPicker>
				<WideSectionModified className={expanded ? 'expanded': ''}>
					{days.map((day, d) => (
						<Day key={d} className={`day ${activeTile === parseInt(d, 10) ? 'active': ''}`}>
							<h2>{day.day}</h2>
							{day.schedule.map((event, e) => (
								<Event key={e} className={event.type ? event.type : ''}>
									<Time className="time">
										{event.type && event.typedesc && (
											<div className="time-box"><span>{event.typedesc}</span></div>
										)}
										{!event.typedesc && event.start && (
											<div className="time-box">
												<span className="smallcap">{from}</span>
												<span>{event.start}</span>
											</div>
										)}
										{!event.typedesc && event.end && (
											<div className="time-box">
												<span className="smallcap">{to}</span>
												<span>{event.end}</span>
											</div>
										)}

									</Time>
									<Description className="description">
										<h3>{event.name}</h3>
										<p dangerouslySetInnerHTML={{ __html: event.description }} />
										<ul>
											{event.info && event.info.map((info, i) => {
												const profileImage = require(`../../images/${info.profile}`);
												return (
													<li key={i}>
														<div className="image-wrapper"><img src={profileImage} alt={info.name} /></div>
														<span>{info.name}</span>
													</li>
												);
											})
											}
										</ul>
									</Description>
								</Event>
							))}
						</Day>
					))}
				</WideSectionModified>

				{!expanded && (
					<WideSection>
						<ExpandButton onClick={this.toggleExpand}>
              + Vis alt
						</ExpandButton>
					</WideSection>
				)}
			</div>
		);
	}
}

EventList.propTypes = {
	minified: PropTypes.bool.isRequired,
};
