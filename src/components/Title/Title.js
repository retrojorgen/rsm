import React, { Component } from 'react';
import styled from 'styled-components';
import YellowTileBackground from './guests-background.jpg';


const TopTitle = styled.h1`
  margin: 0;
  font-family: "Rubik", sans-serif;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 3em;
  position: relative;
  z-index: 50;
  color: white;
  @media (max-device-width: 1100px) {
    font-size: 2em;
    margin-bottom: 10px
  }
`;

const HeaderTitleWrapper = styled.div `
  width: 100%;
  background: linear-gradient(transparent, black);
  font-family: "Rubik", sans-serif;
  color: white;
  text-align: center;
  padding: 40px 0 60px 0;
  @media (max-device-width: 1100px) {
    padding: 40px 10px 40px 10px;
    background: black;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px 0 20px;
  position: absolute;
  width: 100%;
  color: ${(props) => props && props.color === 'Yellow' ? 'black' : 'white'};
  @media (max-device-width: 1100px) {
    padding: 0;
    position: relative;
  }
  h1 {
    display: inline-block;
    
    margin: 0;
    font-family: "Rubik", sans-serif;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 3em;
    position: relative;
    transform: skew(-6deg) rotate(-1deg);
    z-index: 50;
    @media (max-device-width: 1100px) {
      font-size: 1.4em;
      transform: skew(-6deg) rotate(-1deg);
    }
    span {
      display: block;
      padding: 10px 20px;
      background-color: ${(props) => props && props.color === 'Yellow' ? 'white ' : 'black'}; 
      position: relative;
      z-index: 2; 
    }
    &:after {  
      content: ""; 
      position: absolute;
      right: 1px;
      bottom: -3px;
      width: 40%;
      height: 29px;
      background-color: ${(props) => props && props.color === 'Yellow' ? 'black ' : '#fff142'}; 
      transform: rotate(-2deg);
      z-index: 1;
    }
  }
`;


const BlackSection = styled.div `
    display: block;
    position: relative;
    color: white;
    text-align: center;
    font-family: "Rubik", sans serif;
    @media (max-device-width: 1100px) {
        margin-top: 20px;
        padding: 30px 20px 50px 20px;
    }
`;

const YellowSection = styled.section`
    position: relative;
    background-image: url(${YellowTileBackground});
    background-size: 25%;
    width: 100%;
    @media (max-device-width: 1100px) {
      padding-top: 50px;
      padding-bottom: 60px;
    }
    h1 {
      
    }
`;

const Header = styled.div `
  height: ${() => window.innerHeight-87}px;
  background: url(${(props) => props.headerBackground});
  background-size: cover;
  width: 100%;
  display: flex;
  align-items: flex-end;
  background-position: center 20%;
  p {
    font-size: 1.4em;
    margin: 0;
    text-transform: uppercase;
    color: #fff142;
  }
`;



class Title extends Component {
    
  render() {
    let title = this.props.title;
    let color = this.props.color ? this.props.color : '';
    return (
        <TitleWrap color={color}><h1><span>{title}</span></h1></TitleWrap>
    );
  }
}

export default Title;
export { 
  BlackSection, YellowSection, TopTitle, HeaderTitleWrapper, Header
};
