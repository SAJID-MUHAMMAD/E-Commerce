import React from "react";

const ProductItems = () => {
  return (
    <div className="relative group">
      <img className="w-full" src="/home-img/product1.png" alt="" />
      <div className="bg-[#F4F5F7] px-5 pt-4 pb-7">
        <h3 className="font-Poppins font-semibold text-2xl text-primary">
          Syltherine
        </h3>
        <p className="font-Poppins text-base font-medium text-secondary py-2">
          Stylish cafe chair
        </p>
        <div className="flex justify-between">
          <p className="font-Poppins text-xl font-semibold text-primary">
            Rp 2.500.000
          </p>
          <p className="font-Poppins text-base font-normal text-secondary line-through">
            Rp 3.500.000
          </p>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(58,58,58,0.6)] flex items-center justify-center flex-col scale-0 group-hover:scale-100 transition-all">
        <button className="text-brand text-base font-Poppins font-semibold py-3 px-[52px] bg-white inline-block">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItems;
