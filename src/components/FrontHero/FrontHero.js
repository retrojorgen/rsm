import React, { Component } from 'react';
import Slider from 'react-slick';
import './FrontHero.css';

import SliderRsm from './../SliderRsm/SliderRsm';

export default class FrontHero extends Component {
    render() {
        let sliderHeight = window.innerHeight-87;
        return (
            <div  className="FrontHero-wrapper" style={{'height': sliderHeight + 'px'}}>
                <Slider className="FrontHero-slider">
                    <div><SliderRsm /></div>
                </Slider>
            </div>
        )
    }
}