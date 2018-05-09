import React from 'react';
import styled from 'styled-components';
import guestsBack from '../../images/white-pixel-back.png';
import Title, { SubTitle } from './../Title/Title';
import animatedClown from '../../images/vomit_ransome_a.gif';
import { youtubeGuests } from '../../data/guests';


const VomitClown = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin-left: 140px;
    width: 222px;
    height:321px;
    background: url(${animatedClown});
    @media (max-device-width: 1100px) {
        right: auto;
        left: -126px;
        transform: rotate(16deg);
        margin-left: 0;
    }
`;
const HeaderWrapper = styled.div`
    position: relative;
    text-align: center;
    background: black;
    h1 {
        color: white;
        font-family: "Rubik", sans-serif;
        padding: 20px 20px 10px 20px;
        font-size: 0.8em;
        margin: 0 0 0 0;
        text-decoration: none;
    }
    p {
        color: white;
        font-family: "Rubik", sans-serif;
        padding: 0 20px 20px 20px;
        font-size: 0.8em;
        margin: 0;
        text-decoration: none;
    }
    
`;

const GuestsContainerWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-device-width: 1100px) {
        flex-direction: row;
    }
`;

const GuestsContainer = styled.div`
    position: relative;
    height: 100%;    
    text-align: center;
    width: 100%;
    flex: 0 0 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    h2 {
        width: 100%;
        flex: 0 0 100%;
        text-align: center; 
    }
    @media (min-device-width: 1100px) {
        width: 50%;
        flex: 0 0 50%;
    }
    .slick-next, .slick-prev {
        &:before {
            color: #222;
            font-size: 40px;
        }
    }
`;

const GuestsWrapper = styled.div`
    padding: 40px 60px 40px 60px;
    background-color: #c3c3c3;
    background: url(${guestsBack});
    background-size: cover;
    position: relative;
    @media (max-device-width: 1100px) {
        padding: 0;
    }
`;

const Guest = styled.div`
    display: inline-block;
    width: 140px;
    box-shadow: 0 10px 40px 0 rgba(0,0,0,0.3);
    overflow: hidden;
    transition: all 0.1s ease-in;
    position: relative;
    text-decoration: none;
    margin:10px;
    display: flex;
    flex-direction: column;
    &:hover {
        transform: translateY(-4px);
    }
    @media (max-device-width: 1100px) {
        width: calc(50% - 20px);
        margin: 10px;
        margin-bottom: 20px;
    }
`;

const GuestsContainerTitle = styled.h2`
`;

const GuestProfile = styled.div`
    position: relative;
    width: 100%;
    flex: 1 1 100px;
    background-image: url(${props => (props.profileImage ? props.profileImage: '')});
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export default () => {
	const language = localStorage.language || 'no';
	const translation = youtubeGuests[language];
	if (language === 'no') {
		return (
			<GuestsWrapper>
				<Title title={translation.title} color="Yellow" />
				<SubTitle>{translation.subTitle}</SubTitle>
				<VomitClown />
				<GuestsContainerWrapper>
					{['saturday', 'sunday'].map((day, d) => (
						<GuestsContainer guests={translation[day].length}>
							<GuestsContainerTitle>{translation[`${day}Title`]}</GuestsContainerTitle>
							{translation[day].map((g, k) => {
								const profilePic = require(`../../images/${g.profile}.jpg`);
								return (
									<Guest key={k}>
										<GuestProfile profileImage={profilePic} />
										<HeaderWrapper>
											<a href={g.url}>
												<h1>
													{g.name}
												</h1>
											</a>
										</HeaderWrapper>
									</Guest>
								);
							})}
						</GuestsContainer>

					))}
				</GuestsContainerWrapper>
			</GuestsWrapper>

		);
	}
	return (<div />);
};
