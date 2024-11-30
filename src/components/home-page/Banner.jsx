import React from "react";
import Button from "../Button";

const Banner = () => {
  return (
    <section className="py-[150px] bg-[url('/home-img/banner.png')] bg-cover bg-no-repeat bg-center">
      <div className="container max-w-screen-xxl xxl:px-24">
        <div className="w-1/2 bg-[#FFF3E3] ml-auto pt-14 pb-9 px-10 rounded-xl">
          <h2 className="font-Poppins font-semibold text-base text-primary">
            New Arrival
          </h2>
          <h1 className="text-[52px] text-brand font-Poppins font-bold leading-[65px] w-[420px] pt-1 pb-4">
            Discover Our New Collection
          </h1>
          <p className="text-lg font-Poppins text-primary font-medium pb-11">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Button title="BUY Now" path="/shop" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
