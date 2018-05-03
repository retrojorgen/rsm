import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import YellowTileBackground from './guests-background.jpg';


const PixelButtonStyle = `
    font-family: "Rubik",sans-serif;
    position: relative;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 1px;
    z-index: 100;
    color: #fff;
    border: none;
    border-radius: 0;
    text-transform: uppercase;
    text-shadow: 0 2px 0 rgba(0, 0, 0, 0.25);
    letter-spacing: 1px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    transition: none;
    max-width: 100%;
    padding: 20px;
    text-decoration: none;

    &:before,
    &:after {
        content: "";
        display: block;
        position: absolute;
        transition: all 0.15s ease-in-out, opacity 0.1s linear;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    &:before {
        z-index: -1;
        background-color: #31ae1f;
        box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.15);
        border-top: 4px solid #64fd1f;
        border-bottom: 4px solid #1e8c03;
        border-left: 4px solid #156c00;
        border-right: 4px solid #47d009;
    }
    &:after {
        background: url("data:image/svg+xml;base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNHB4IiBoZWlnaHQ9IjRweCIgdmlld2JveD0iMCAwIDRweCA0cHgiIHg9IjBweCIgeT0iMHB4Ij48cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJyZ2IoMzcsIDE3NiwgNykiIC8+PC9zdmc+") top left no-repeat, url("data:image/svg+xml;base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNHB4IiBoZWlnaHQ9IjRweCIgdmlld2JveD0iMCAwIDRweCA0cHgiIHg9IjBweCIgeT0iMHB4Ij48cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJyZ2IoMTQxLCAyNTMsIDkyKSIgLz48L3N2Zz4=") top right no-repeat, url("data:image/svg+xml;base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNHB4IiBoZWlnaHQ9IjRweCIgdmlld2JveD0iMCAwIDRweCA0cHgiIHg9IjBweCIgeT0iMHB4Ij48cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJyZ2IoMTgsIDg4LCAzKSIgLz48L3N2Zz4=") bottom left no-repeat, url("data:image/svg+xml;base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNHB4IiBoZWlnaHQ9IjRweCIgdmlld2JveD0iMCAwIDRweCA0cHgiIHg9IjBweCIgeT0iMHB4Ij48cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJyZ2IoMzYsIDE4MCwgNikiIC8+PC9zdmc+") bottom right no-repeat;

    }
`;

const PixelButtonRegular = styled.div`${PixelButtonStyle}`;
const PixelButtonButton = styled.button`${PixelButtonStyle}`;
const PixelButton = styled.a`${PixelButtonStyle}`;

const PixelButtonNavLink = styled(NavLink)`
    font-family: "Rubik",sans-serif;
    position: relative;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 1px;
    z-index: 100;
    color: #fff;
    border: none;
    border-radius: 0;
    text-transform: uppercase;
    text-shadow: 0 2px 0 rgba(0, 0, 0, 0.25);
    letter-spacing: 1px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    transition: none;
    max-width: 100%;
    padding: 20px;
    text-decoration: none;

    &:before,
    &:after {
        content: "";
        display: block;
        position: absolute;
        transition: all 0.15s ease-in-out, opacity 0.1s linear;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    &:before {
        z-index: -1;
        background-color: #31ae1f;
        box-shadow: 0 4px 0 0 rgba(0, 0, 0, 0.15);
        border-top: 4px solid #64fd1f;
        border-bottom: 4px solid #1e8c03;
        border-left: 4px solid #156c00;
        border-right: 4px solid #47d009;
    }
    &:after {
        background: url("data:image/svg+xml;base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNHB4IiBoZWlnaHQ9IjRweCIgdmlld2JveD0iMCAwIDRweCA0cHgiIHg9IjBweCIgeT0iMHB4Ij48cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJyZ2IoMzcsIDE3NiwgNykiIC8+PC9zdmc+") top left no-repeat, url("data:image/svg+xml;base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNHB4IiBoZWlnaHQ9IjRweCIgdmlld2JveD0iMCAwIDRweCA0cHgiIHg9IjBweCIgeT0iMHB4Ij48cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJyZ2IoMTQxLCAyNTMsIDkyKSIgLz48L3N2Zz4=") top right no-repeat, url("data:image/svg+xml;base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNHB4IiBoZWlnaHQ9IjRweCIgdmlld2JveD0iMCAwIDRweCA0cHgiIHg9IjBweCIgeT0iMHB4Ij48cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJyZ2IoMTgsIDg4LCAzKSIgLz48L3N2Zz4=") bottom left no-repeat, url("data:image/svg+xml;base64, PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNHB4IiBoZWlnaHQ9IjRweCIgdmlld2JveD0iMCAwIDRweCA0cHgiIHg9IjBweCIgeT0iMHB4Ij48cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJyZ2IoMzYsIDE4MCwgNikiIC8+PC9zdmc+") bottom right no-repeat;

    }
`;


const TopTitle = styled.h1`
  margin: 0;
  font-family: "Rubik", sans-serif;
  text-transform: uppercase;
  font-weight: 900;
  padding: 10px;
  font-size: 3em;
  position: relative;
  z-index: 50;
  color: white;
  max-width: 800px;
  margin: 0 auto;
  @media (max-device-width: 1100px) {
    font-size: 2em;
    margin-bottom: 10px
  }
`;

const HeaderTitleWrapper = styled.div`
  width: 100%;
  padding: 20px 10px 40px 10px;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${props => (props && props.color === 'Yellow' ? 'black' : 'white')};
  margin-bottom: 40px;
  @media (max-device-width: 1100px) {
    padding: 0;
    position: relative;
    margin-bottom: 20px;
    padding-top: 20px;
  }
  h1 {
    display: inline-block;
    
    margin: 0;
    font-family: "Rubik", sans-serif;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 3em;
    position: relative;
    z-index: 50;
    border-bottom: 4px solid #37e019;
    
    @media (max-device-width: 1100px) {
      font-size: 1.4em;
    }
    span {
      display: block;
      padding: 10px 20px;
      position: relative;
      z-index: 2; 
    }
  }
`;


const Section = styled.div`
    padding: 20px;
    display: flex;
    overflow: hidden;
    justify-content: ${props => props.justified};
    align-items: flex-start;
    position: relative;
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
    @media (max-device-width: 1100px) {
      flex-direction: column;
      padding: 0;
    } 
`;
const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${props => props.background});
  background-size: cover;

`;

const WideSection = styled(Section)`
    width: 1100px;
`;

const Wrapper = styled.div`
    padding-top: 60px;
    margin-bottom: ${window.innerHeight}px;
  @media (min-device-width: 1100px) {
    padding-top: 87px;
    margin-bottom: 600px;
  }
`;


const BlackSection = styled.div`
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

const Header = styled.div`
  height: auto;
  background-color: black;
  background-size: cover;
  width: 100%;
  display: flex;
  align-items: flex-end;
  background-position: center 20%;
  text-align: center;
  p {
    font-size: 1.4em;
    margin: 0;
    text-transform: uppercase;
    color: #fff142;
    font-family: "Rubik", sans serif;
    text-align: center;
  }
`;


const Title = (props) => {
	const { title }  = props;
	const color = props.color ? props.color : '';
	return (
		<TitleWrap color={color}><h1><span>{title}</span></h1></TitleWrap>
	);
};

Title.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
};

export default Title;


export { BlackSection, YellowSection, TopTitle, HeaderTitleWrapper, Header, PixelButton, PixelButtonNavLink, PixelButtonRegular, PixelButtonButton, Section, SectionsContainer, WideSection, Wrapper  };
