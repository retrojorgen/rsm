import React, { Component } from 'react';
import './SliderRsm.css';
import logo from './slider-rsm-logo.png';
import background from './slider-rsm-background.jpg';



export default class SliderRsm extends Component {
    render() {
        return (
            <div className="SliderRsm">
                <div className="SliderRsm-backdrop"></div>
                <img className="SliderRsm-logo-image" src={logo} />
            </div>
        )
    }
}