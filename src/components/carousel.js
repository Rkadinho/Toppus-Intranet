import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import '../css/carousel.css'
import NewAddress from '../images/newAddress.jpg'
import BirthSec from '../images/birthSec.jpeg'
import FatherDay from '../images/fatherDay.jpg'


export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 100,
  };
  return (
    <Slider {...settings} className='carousel'>
      <div>
        <img src={BirthSec} />
      </div>
      <div>
      <img src={FatherDay} />
      </div>
      <div>
        <img src={NewAddress} />
        <h3>.</h3>    
      </div>  
    </Slider>
  );
}