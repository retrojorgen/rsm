import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import RSMLogo from '../../images/rsm-pixel-animation.gif';
import MenuBackgroundMobile from '../../images/menu-background-mobile.jpg';
import MediaQuery from 'react-responsive';
import LanguageSelect from '../LanguageSelect/LanguageSelect';


const MeanHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 100%;
`;

const MainHeaderWrapper = styled.nav`
    display: flex;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: black;
    z-index: 170;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    
    @media (max-device-width: 1100px) {
        border-bottom: 2px solid #fff142;
        background-position: top center;
        background-size: auto 100%;
    }
    h1 {
      font-family: "Rubik", sans-serif;
      font-weight: bold;
      color: white;
      font-size: 1em;
      padding: 0;
      background-image: url(${RSMLogo});
      background-size: cover;
      background-repeat: no-repeat;
      width: 65px;
      height: 65px;
      margin: 0;
      text-indent: -99999999999999px;
      overflow: hidden;
      border-radius: 4px;
      @media (max-device-width: 1100px) {
        width: 40px;
        height: 40px;
        margin-left: 10px;
      }
    }
    .sub-menu {
      position: absolute;
      left: 50%;
      top: 60px;
      width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      visibility: hidden;
      transition: all 0.1s ease-in-out;
      opacity: 0;
      transform: translateX(-100px) translateY(-10px);

      
      
      @media (max-device-width: 1100px) {
        opacity: 1;
        position: relative;
        left: auto;
        top: auto;
        width: 80%;
        margin: 0 auto;
        
        margin-top: -20px;
        visibility: visible;
        transform: translateX(0) translateY(0);
      }

      &:before {
        content: "";
        position: absolute;
        top: 0;
        z-index: 40;
        left: 50%;
        transform: translateX(-15px) translateY(6px);
        width: 0; 
        height: 0; 
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        
        border-bottom: 15px solid #fff142;
        @media (min-device-width: 1100px) {
          transform: translateX(-5px) translateY(-5px);
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-bottom: 5px solid #fff142;
        }
      }
      li {
        width: 100%;
        text-align: center;
        background-color: #fff142;
        border-bottom: 1px solid black;
        position: relative;
        .pixel-left,
        .pixel-right {
          transition: all 0.25s ease-in-out;
          position: absolute;
          top: 0;
          height: 100%;
          width: 4px;
          background-color: #f1c44c;
          &:before {
            transition: all 0.25s ease-in-out;
            content: "";
            position: absolute;
            top:0;
            height: 100%;
            width: 4px;
            transform: translateX(4px);
            background-color: #ffd35d;
          }
        }
        .pixel-left {
          left: 0;
          &:before {
            left: 0;
          }
        }
        .pixel-right {
          right: 0;
          &:before {
            right: 0;
            transform: translateX(-4px);
          }
        }
        &:hover {
          .pixel-left,
          .pixel-right {
            width: 10px;
            &:before {
              width: 10px;
            }
          }
          .pixel-left:before {
            transform: translateX(10px);
          }
          .pixel-right:before {
            transform: translateX(-10px);
          }
        }
      }
      a {
        padding: 15px 15px;
        text-align: center;
        color: black;
        transition: transform 0.25s ease-in-out;
        display: block;
        &.active {
          color: black;
          text-decoration: underline;
        }
        &:hover {
          color: black;
          transform: translateX(4px);
        }

      }
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: flex-end;
      
      li {
        font-family: "Rubik", sans-serif;
        font-size: 0.9em;
        letter-spacing: 1px;
        text-transform: uppercase;
        cursor: pointer;
        position: relative;
        &:hover {
          @media (min-device-width: 1100px) {
            
            .sub-menu {
              opacity: 1;
              transform: translateX(-100px) translateY(00px);
              visibility: visible;
            }
          }
          
        }
        
        @media (max-device-width: 1100px) {
          font-size: 1.1em;
          text-align: center;
          width: 100%;
          
        }
        a {
          display: inline-block;
          padding: 35px 35px;
          color: white;
          text-decoration: none;

          font-weight: lighter;
          position: relative;
          transition: all 0.1s ease-in;
          @media (max-device-width: 1100px) {
            border-bottom: 1px solid #fff142;
          }
          &:hover {
            color: #fff142;
            transform: translateY(-2px);
            &:before {
              height: 4px;
            }
          }
          &.active {
            color: #fff142;
          }
        }
      }
      @media (max-device-width: 1100px) {
        position: fixed;
        top: 60px;
        flex-direction: column;
        background: black;
        width: 100%;
        height: calc(100% - 60px);
        overflow: auto;
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
  border: 0;
  outline: none;
  background-color: transparent;
  span {
    position: absolute;
    border-radius: 2px;
    background-color: ${(props) => props.state ? 'transparent': '#fff142'};
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
      background-color: #fff142;
      
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
    const language = localStorage.language || 'no';
    
    const translation = {
      buyTickets: {
        no: "Billetter",
        en: "Tickets"
      },
      menuItems: {
        no: [
          {
            url: "/",
            title: "Forside",
            exact: true
          },
          {
            url: "/about",
            title: "Om Retrospillmessen"
          },
          {
            url: "/rent",
            title: "Leie stand"
          },
          {
            url: "/guests",
            title: "VIP Gjester",
            subMenu: [
              {
                url: "/guests/charles-martinet",
                title: "Charles Martinet"
              },
              {
                url: "/guests/playstation-prototype",
                title: "Playstation Prototype"
              },
              {
                url: "/guests/ron-gilbert",
                title: "Ron Gilbert"
              },
              {
                url: "/guests/howard-scott-warshaw",
                title: "Howard Scott Warshaw"
              },
              {
                url: "/guests/al-lowe",
                title: "Al Lowe"
              },
              {
                url: "/guests/the-completionist",
                title: "The Completionist"
              }
            ]
          }
        ],  
        en: [
          {
            url: "/",
            title: "Frontpage",
            exact: true
          },
          {
            url: "/about",
            title: "About the convention"
          },
          {
            url: "/rent",
            title: "For vendors"
          },
          {
            url: "/guests",
            title: "VIP Guests",
            subMenu: [
              {
                url: "/guests/charles-martinet",
                title: "Charles Martinet"
              },
              {
                url: "/guests/playstation-prototype",
                title: "Playstation Prototype"
              },
              {
                url: "/guests/ron-gilbert",
                title: "Ron Gilbert"
              },
              {
                url: "/guests/howard-scott-warshaw",
                title: "Howard Scott Warshaw"
              },
              {
                url: "/guests/al-lowe",
                title: "Al Lowe"
              },
              {
                url: "/guests/the-completionist",
                title: "The Completionist"
              }
            ]
          },
        ],
      }
    }

    let buyTickets = translation.buyTickets[language];
    let menuItems = translation.menuItems[language].map((a, key) => (
      <li key={key}>
        <NavLink to={a.url} onClick={this.toggleMobileMenu} activeClassName="active" exact={ a.exact }>{a.title}</NavLink>
        {a.subMenu && (
          <ul className="sub-menu">
            {a.subMenu.map((s, sk) => (
              <li key={sk}>
                <span class="pixel-right" />
                <span class="pixel-left" />
                <NavLink to={s.url} onClick={this.toggleMobileMenu} activeClassName="active" exact={true}>
                  
                  {s.title}
                  
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </li>      
    ));


    return (
      <MainHeaderWrapper state={this.state.mobileButton}>
        <MeanHeaderContainer>
          <h1>RSM 18</h1>
          <MediaQuery query="(max-device-width: 1224px)">
            <MobileButton onClick={this.toggleMobileMenu} state={this.state.mobileButton}>
              <span></span>
            </MobileButton>
          </MediaQuery>
          <ul>
            {menuItems}
            <li>
              <a href="https://retrospillmessen.hoopla.no/sales/2422891309">{buyTickets}</a>
            </li>
          </ul>
          <LanguageSelect />
        </MeanHeaderContainer>
      </MainHeaderWrapper>
    );
  }
}
