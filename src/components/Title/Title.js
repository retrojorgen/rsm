import React, { Component } from 'react';
import styled from 'styled-components';

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  h1 {
    display: inline-block;
    color: white;
    margin: 0;
    font-family: "Rubik", sans-serif;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 2em;
    position: relative;
    @media (max-device-width: 1100px) {
      font-size: 1.4em;
    }
    span {
      display: block;
      padding: 10px 20px;
      background-color: black; 
      position: relative;
      z-index: 2; 
    }
    &:before {  
      content: ""; 
      position: absolute;
      left: 10px;
      top: 0;
      width: 40%;
      height: 5px;
      background-color: #e0c417;
      transform: rotate(-2deg);
      z-index: 1;
    }

    &:after {  
      content: ""; 
      position: absolute;
      right: 10px;
      bottom: 0;
      width: 40%;
      height: 5px;
      background-color: #e0c417;
      transform: rotate(-2deg);
      z-index: 1;
    }
`;

export default class Title extends Component {
    
  render() {
    let title = this.props.title;
    return (
        <TitleWrap><h1><span>{title}</span></h1></TitleWrap>
    );
  }
}
