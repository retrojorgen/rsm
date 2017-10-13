import React, { Component } from 'react';
import Slider from 'react-slick';
import './FrontHero.css';

export default class FrontHero extends Component {
    render() {
        return (
            <div>
                <Slider className="FrontHero-slider">
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                    <div><h3>5</h3></div>
                    <div><h3>6</h3></div>
                </Slider>
            </div>
        )
    }
}