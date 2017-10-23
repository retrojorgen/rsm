import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import RSMLogo from './rsm-logo.png';
import MenuBackgroundMobile from './menu-background-mobile.jpg';
import MediaQuery from 'react-responsive';

const MainHeaderWrapper = styled.nav`
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: black;
    align-items: center;
    z-index: 3;
    justify-content: space-between;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    @media (max-device-width: 1100px) {
        background: url(${MenuBackgroundMobile});
        background-position: top center;
        background-size: auto 100%;
    }
    >h1 {
      font-family: "Rubik", sans-serif;
      font-weight: bold;
      color: white;
      font-size: 1em;
      padding: 0;
      background-image: url(${RSMLogo});
      background-size: cover;
      background-repeat: no-repeat;
      width: 85px;
      height: 59px;
      margin: 0;
      text-indent: -99999999999999px;
      overflow: hidden;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: flex-end;
      position: relative;
      li {
        font-family: "Rubik", sans-serif;
        font-size: 0.8em;
        @media (max-device-width: 1100px) {
          font-size: 1.1em;
          text-align: center;
          width: 100%;
        }
        a {
          display: inline-block;
          padding: 20px;
          color: white;
          text-decoration: none;

          font-weight: lighter;
          position: relative;
          transition: all 0.1s ease-in;
          @media (max-device-width: 1100px) {
            border-bottom: 1px solid #e0c417;
          }
          &:hover {
            color: #e0c417;
            transform: translateY(-2px);
            &:before {
              height: 4px;
            }
          }
          &:before {
              content: '';
              position: absolute;
              left: 0;
              bottom: 0;
              height: 0;
              width: 100%;
              background: #e0c417;
              transition: all 0.1s ease-in;
          }
        }
      }
      @media (max-device-width: 1100px) {
        position: absolute;
        top: 59px;
        flex-direction: column;
        background: black;
        width: 100%;
        display: ${(props) => props.state ? 'flex': 'none'};
        padding: 20px 0 20px 0;
        
      }
    }
`;

const MobileButton = styled.button`
  width: 59px;
  height: 59px;
  display: inline-block;
  position: relative;
  background-color: ${(props) => props.state ? 'black': 'transparent'};
  border: 0;
  outline: none;
  span {
    position: absolute;
    border-radius: 2px;
    background-color: ${(props) => props.state ? 'transparent': 'black'};
    height: 4px;
    top: 50%;
    width: 50%;
    left: 25%;
    &:before,
    &:after {
      content: "";
      position: absolute;
      left: 0;
      height: 4px;
      width: 100%;
      border-radius: 2px;
      background-color: ${(props) => props.state ? '#e0c417': 'black'};
      
    }
    &:before {
      transform: ${(props) => props.state ? 'rotate(-45deg)': 'translateY(-8px)'};
    }
    &:after {
      transform: ${(props) => props.state ? 'rotate(45deg)': 'translateY(8px)'};
    }
  }
`;

export default class MainHeader extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      mobileButton: false,
    }

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  toggleMobileMenu () {
    this.setState({mobileButton: !this.state.mobileButton})
  }

  render() {
    console.log(this.state.mobileButton);
    return (
      <MainHeaderWrapper state={this.state.mobileButton}>
          <h1>RSM 18</h1>
          <MediaQuery query="(max-device-width: 1224px)">
            <MobileButton onClick={this.toggleMobileMenu} state={this.state.mobileButton}>
              <span></span>
            </MobileButton>
          </MediaQuery>
          <ul>
              <li><NavLink to="/" onClick={this.toggleMobileMenu} activeClassName="active" exact={ true }>Forside</NavLink></li>
              <li><NavLink to="/about" onClick={this.toggleMobileMenu} activeClassName="active">Om Retrospillmessen</NavLink></li>
              <li><NavLink to="/rent" onClick={this.toggleMobileMenu} activeClassName="active">Leie stand</NavLink></li>
              <li><NavLink to="/rent" onClick={this.toggleMobileMenu} activeClassName="active">VIP Gjester</NavLink></li>
              <li><NavLink to="/rent" onClick={this.toggleMobileMenu} activeClassName="active">Timeplan</NavLink></li>
              <li><NavLink to="/rent" onClick={this.toggleMobileMenu} activeClassName="active">Praktisk info</NavLink></li>
              <li><NavLink to="/rent" onClick={this.toggleMobileMenu} activeClassName="active">Billetter</NavLink></li>
          </ul>
      </MainHeaderWrapper>
    );
  }
}
