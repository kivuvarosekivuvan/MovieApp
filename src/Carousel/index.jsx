import React, { Component } from 'react';  
import ReactDOM from 'react-dom';  
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';  
   
class DemoCarousel extends Component {  
    render() {  
        return (  
            <Carousel>  
                
            </Carousel>  
        );  
    }  
};  
   
ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));  