import React from 'react';
import styled from 'styled-components';


const UnselectedButton = styled.button`
  font-family: "Rubik", sans-serif;
  background-color: #e0c417;
  border: 0;
  padding: 6px;
  text-transform: uppercase;
  color: black;
  font-size: 0.9em;
  outline: none;
  @media (min-device-width: 1100px) {
    background-color: transparent;
    color: white;
  }
`;

const SelectedButton = styled.button`
  background-color: transparent;
  font-family: "Rubik", sans-serif;
  border: 0;
  padding: 6px;
  text-transform: uppercase;
  color: black;
  font-size: 0.9em;
  outline: none;
  box-shadow: 0 0 2px rgba(0,0,0,0.8);
  @media (min-device-width: 1100px) {
    background-color: #e0c417;
    color: black;
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
  }
`;

export default class MainHeader extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      language: localStorage.language || 'no',
    }

    this.toggleLanguage = this.toggleLanguage.bind(this);
  }

  toggleLanguage (language) {
    
    this.setState({'language': language});
    localStorage.language = language;
    window.location.reload();
  }

  render() {
    const languages = ['no', 'en'];
    let selectedLanguage = this.state.language

    let languageItems = languages.map((a, key) => {
      console.log(a, selectedLanguage);
      if(a === selectedLanguage)
        return (<SelectedButton key={key} onClick={() => this.toggleLanguage(a)}>{a}</SelectedButton>)
      else
        return (<UnselectedButton key={key} onClick={() => this.toggleLanguage(a)}>{a}</UnselectedButton>)  
  });

    return (
      <SelectLanguageWrapper>
        {languageItems}
      </SelectLanguageWrapper>
    );
  }
}
