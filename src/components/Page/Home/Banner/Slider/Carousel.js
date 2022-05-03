import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

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
    <div className="my-16">
      <Slider {...settings}>
        <div>
          <img
            className="w-11/12 slide-img sm:h-48 lg:h-[65vh] mx-auto"
            src="https://i.ibb.co/QQ9drsT/slide-img-6.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-11/12 slide-img  sm:h-48 lg:h-[65vh] mx-auto"
            src="https://i.ibb.co/XyCksDw/slide-img-7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-11/12 slide-img  sm:h-48 lg:h-[65vh]  mx-auto"
            src="https://i.ibb.co/Y7FhJ60/slide-img-9.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-11/12 slide-img  sm:h-48 lg:h-[65vh] mx-auto"
            src="https://i.ibb.co/P6rgWkR/slide-img-10.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="w-11/12 slide-img  sm:h-48 lg:h-[65vh] mx-auto"
            src="https://i.ibb.co/RHFTprW/slide-img-11.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
