import React, { Component } from 'react';
import styled from 'styled-components';

import { TopTitle, HeaderTitleWrapper, Header, SectionsContainer } from '../Title/Title';
import Guests from './../Guests/Guests';
import EventList from './EventList';

import whitePixelBackground from '../../images/white-pixel-back.jpg';

export default class Events extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: {
				no: {
					title: 'Program 2018',
					description: 'Offiselt program for Retrospillmessen 2018',
				},
				en: {
					title: 'Schedule 2018',
					description: 'Official schedule for Retrospillmessen 2018',
				},
			},

		};
	}

	componentWillMount() {
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}


	componentWillReceiveProps(nextProps) {

	}


	render() {
		window.scrollTo(0, 0);
		const language = localStorage.language || 'no';


		const title = this.state.title[language];


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
					<EventList minified />
				</SectionsContainer>
				<Guests />
			</div>
		);
	}
}
