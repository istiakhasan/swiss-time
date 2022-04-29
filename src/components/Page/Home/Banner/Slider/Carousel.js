import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'
import Slide1 from '../../../../../images/SliderImage/slide-img-1.jpg'
import Slide2 from '../../../../../images/SliderImage/Slide-img-2.jpg'
import Slide3 from '../../../../../images/SliderImage/slide-img-3.jpg'
import Slide4 from '../../../../../images/SliderImage/Slide-img-4.jpg'
import Slide5 from '../../../../../images/SliderImage/Slide-img-5.jpg'

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        slidesToShow: 3,
        slidesToScroll: 1,
      };
    return (
        <div>
      
        <Slider {...settings}>
          <div>
           <img  className='w-11/12 slide-img sm:h-48 lg:h-96 mx-auto' src={Slide1} alt="" />
          </div>
          <div>
           <img className='w-11/12 slide-img  sm:h-48 lg:h-96 mx-auto' src={Slide2} alt="" />
          </div>
          <div>
           <img className='w-11/12 slide-img  sm:h-48 lg:h-96  mx-auto' src={Slide3} alt="" />
          </div>
          <div>
           <img className='w-11/12 slide-img  sm:h-48 lg:h-96 mx-auto' src={Slide4} alt="" />
          </div>
          <div>
           <img className='w-11/12 slide-img  sm:h-48 lg:h-96 mx-auto' src={Slide5} alt="" />
          </div>
          
         
          
          
         
        
        </Slider>
      </div>
    );
};

export default Carousel;