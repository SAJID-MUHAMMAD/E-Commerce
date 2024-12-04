import React from "react";
import Button from "../Button";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
const Explore = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <span></span>,
  };

  return (
    <section className="mb-16 py-11 bg-[#FCF8F3] explore">
      <div className="container max-w-screen-xxl xxl:px-24 flex gap-10 items-center">
        <div className="w-1/3">
          <h2 className="title">50+ Beautiful rooms inspiration</h2>
          <p className="details pt-2 pb-6">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <Button path="/shop" title="Explore More" />
        </div>
        <div className="w-2/3">
          <Slider {...settings}>
            <div className="slide_items">
              <img src="/home-img/slide.png" className="w-full h-full" alt="" />
            </div>
            <div className="slide_items">
              <img
                src="/home-img/slide2.png"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="slide_items">
              <img
                src="/home-img/slide3.png"
                className="w-full h-full"
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Explore;
