import React from "react";
import Button from "../Button";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
const Explore = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <section className="mb-16 py-11 bg-[#FCF8F3]">
      <div className="container max-w-screen-xxl xxl:px-24 flex gap-10">
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
            <div>
              <img src="/home-img/slide.png" className="w-full" alt="" />
            </div>
            <div>
              <img src="/home-img/slide.png" className="w-full" alt="" />
            </div>
            <div>
              <img src="/home-img/slide.png" className="w-full" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Explore;
