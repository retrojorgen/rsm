import React from 'react';
import FrontHero from './../FrontHero/FrontHero';
import Guests from './../Guests/Guests';
import Tickets from './../Tickets/Tickets';
import Welcome from './../Welcome/Welcome';
import EventFront from './../Events/EventFront';
import { Wrapper } from '../Title/Title';
import PracticalInfo from './../PracticalInfo/PracticalInfo';

export default () => (
	<Wrapper>
		<FrontHero />
		<PracticalInfo />
		<Welcome />
		<EventFront />
		<Guests />
		<Tickets />
	</Wrapper>
);

