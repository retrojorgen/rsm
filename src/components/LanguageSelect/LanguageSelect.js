import React from 'react';
import styled from 'styled-components';
import { PixelButtonButton } from './../Title/Title';


const UnselectedButton = styled.button`
  font-family: "Rubik", sans-serif;
  background-color: black;
  border: 0;
  padding: 14px;
  text-transform: uppercase;
  color: white;
  border-radius: 0px;
  font-size: 0.9em;
  outline: none;
  @media (min-device-width: 1100px) {
    background-color: transparent;
    color: white;
    padding: 6px;
  }
`;

const SelectedButton = styled(PixelButtonButton)`
  background-color: #fff142;
  font-family: "Rubik", sans-serif;
  border: 0;
  padding: 14px;
  border-radius: 0px;
  text-transform: uppercase;
  color: black;
  font-size: 0.9em;
  outline: none;
  box-shadow: 0 0 2px rgba(0,0,0,0.8);
  @media (min-device-width: 1100px) {
    background-color: #fff142;
    color: black;
    padding: 6px;
  }
  
`;


const SelectLanguageWrapper = styled.div`
  font-family: "Rubik", sans-serif;
  background-color: rgba(255,255,255,0.1);
  padding: 0;
  border-radius: 8px;
  overflow: hidden;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin-right: 10px;
  span {
    margin-right: 10px;
    font-size: 0.9em;
  }
  @media (max-device-width: 1100px) {
    background-color: rgba(255,255,255,0.4);
    box-shadow: 0 0 4px rgba(0,0,0,0.2);
    border-radius: 0;
    margin-right: 10px;
  }
`;

export default class MainHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			language: localStorage.language || 'no',
		};

		this.toggleLanguage = this.toggleLanguage.bind(this);
	}

	toggleLanguage(language) {
		this.setState({ language });
		localStorage.language = language;
		window.location.reload();
	}

	render() {
		const languages = ['no', 'en'];
		const selectedLanguage = this.state.language;

		const languageItems = languages.map((a, key) => {
			console.log(a, selectedLanguage);
			if (a === selectedLanguage) { return (<SelectedButton key={key} onClick={() => this.toggleLanguage(a)}>{a}</SelectedButton>); }
			return (<UnselectedButton key={key} onClick={() => this.toggleLanguage(a)}>{a}</UnselectedButton>);
		});

		return (
			<SelectLanguageWrapper>
				{languageItems}
			</SelectLanguageWrapper>
		);
	}
}
