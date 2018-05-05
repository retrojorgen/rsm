import React from 'react';
import styled from 'styled-components';
import Title from './../Title/Title';
import EventList from './EventList';

const heading = {
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

const GuestsWrapper = styled.div`
    padding: 40px 60px 40px 60px;
    background-color: #fff142;
    background-size: 100% auto;
    position: relative;
    @media (max-device-width: 1100px) {
        padding: 20px 0 20px 0;
    }
`;


export default () => {
	const language = localStorage.language || 'no';
	const { title } = heading.title[language];

	return (
		<GuestsWrapper>
			<Title title={title} color="Yellow" />
			<EventList minified />
		</GuestsWrapper>
	);
};
