import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import SliderRsm from './../SliderRsm/SliderRsm';
import SliderMartinet from './../SliderRsm/SliderMartinet';
import SliderDeLancie from './../SliderRsm/SliderDeLancie';

const SliderWrap = styled.div`
    height: ${window.innerHeight-87}px;
    
`;




const SlickWrap = styled.div`
    .slick-arrow {
        z-index: 10;
        &:before {
            font-size: 40px;
        }
        cursor: pointer;
    }
    .slick-prev {
        left: 20px;   
    }
    .slick-next {
        right: 40px;
    }
    .slick-slide {
        img {
            display: inline-block;
        }
    }
`;

export default class FrontHero extends Component {
    render() {
        let sliderHeight = window.innerHeight-87;
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: true,
            adaptiveHeight: true
          };
        return (
            <SlickWrap style={{'height': sliderHeight + 'px'}}>
                <Slider  className="FrontHero-wrapper" {...settings}>
                    <SliderWrap>
                        <SliderDeLancie />
                    </SliderWrap>
                    <SliderWrap>
                        <SliderMartinet />
                    </SliderWrap>
                    <SliderWrap>
                        <SliderRsm />
                    </SliderWrap>
                    
                </Slider>
            </SlickWrap>
        )
    }
}