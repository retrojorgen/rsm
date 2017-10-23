import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './slider-rsm-logo.png';
import background from './slider-rsm-background.jpg';

const SliderRsmContainer = styled.div `
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: black;
    padding: 20px;
    img {
        max-height: 80%;
        z-index: 2;
    }
    @media (max-device-width: 1100px) {
        img {
            max-width: 100%;
        }
    }
`;

const Backdrop = styled.div `
    background-size: cover;
    background-image: url(${background});
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    padding: 20px;
`;

export default class SliderRsm extends Component {
    render() {
        return (
            <SliderRsmContainer>
                <Backdrop />
                <img src={logo} alt="Slider" />
            </SliderRsmContainer>
        )
    }
}