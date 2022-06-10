import React from "react";

import Slider from "react-slick";

import "./testimonialSlider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          ipsum tempora voluptatum odit quidem voluptate numquam, aliquam,
          sapiente quae explicabo cum. Quae commodi tenetur saepe, odit eveniet
          quidem corrupti harum."
        </p>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
