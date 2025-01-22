import React from "react";
import BreadCrumb from "../BreadCrumb";

const Banner = () => {
  return (
    <section className="bg-[url('/shop-img/banner.png')] pt-[120px] pb-24">
      <div className="container">
        <h2 className="font-Poppins text-5xl font-medium text-black text-center">
          Shop
        </h2>
        <BreadCrumb />
      </div>
    </section>
  );
};

export default Banner;
