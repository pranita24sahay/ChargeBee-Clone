import { Carousel } from 'react-bootstrap';
import React from 'react';
import {Button, CarouselItem} from 'react-bootstrap';
import image1 from './Images/animated-image.PNG';

function MainContent() {
    return (
        <div className="container">
            <div className="row main-content-1">
                <div className="col-sm-12 title">
                    <span className="purple1stline">Subscription Billing & Revenue Operations</span>
                    <br class="visible-md visible-lg" />
                    <span className="black2ndline"> for Fast-growth B2B SaaS</span>
                </div>
            </div>
            <div className="row main-content-2">
                Get the operational sophistication to achieve, sustain,
                    <br class="visible-md visible-lg" />
                and scale recurring revenue.         
            </div>
            <div className="row  main-content-3">
                <div className="col-sm-8">
                <Button className="button-purple">Schedule A Demo</Button>
                <Button className="button-trans">Sign up for free</Button>
                </div>
            </div>
            <img src={image1} className="image1" width="900px"/>
            <div className="row">
                Thousands of Scaling SaaS Business Love Us
                <Carousel>
                    
                </Carousel>
                
            </div>
        </div>
    );
}

export default MainContent;