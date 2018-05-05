import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import back from '../../images/white-pixel-back.png';
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


const HeaderWrapper = styled.div`
    position: relative;
    text-align: center;
    background: black;
    h1 {
        color: white;
        font-family: "Rubik", sans-serif;
        padding: 20px 20px 10px 20px;
        font-size: 1.4em;
        margin: 0 0 0 0;
        text-decoration: none;
    }
    p {
        color: white;
        font-family: "Rubik", sans-serif;
        padding: 0 20px 20px 20px;
        font-size: 1em;
        margin: 0;
        text-decoration: none;
    }
    
`;


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
	const { title, description } = heading.title[language];

	return (
		<GuestsWrapper>
			<Title title={title} color="Yellow" />
			<EventList minified />
		</GuestsWrapper>
	);
};
