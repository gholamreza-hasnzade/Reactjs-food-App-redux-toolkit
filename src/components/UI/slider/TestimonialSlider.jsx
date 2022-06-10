import React from "react";

import Slider from "react-slick";
import { IMAGES } from "../../../constants/content";

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
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={IMAGES.AVA__01} alt="avatar" className=" rounded" />
          <h6>Jhon Don</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          ipsum tempora voluptatum odit quidem voluptate numquam, aliquam,
          sapiente quae explicabo cum. Quae commodi tenetur saepe, odit eveniet
          quidem corrupti harum."
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={IMAGES.AVA__02} alt="avatar" className=" rounded" />
          <h6>Mitchell Marsh</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          ipsum tempora voluptatum odit quidem voluptate numquam, aliquam,
          sapiente quae explicabo cum. Quae commodi tenetur saepe, odit eveniet
          quidem corrupti harum."
        </p>
        <div className="slider__content d-flex align-items-center gap-3">
          <img src={IMAGES.AVA__03} alt="avatar" className="rounded"/>
          <h6>Steven Crock</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
