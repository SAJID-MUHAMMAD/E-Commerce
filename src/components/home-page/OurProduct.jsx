import React from "react";
import ProductItems from "./ProductItems";

const OurProduct = () => {
  return (
    <section className="pb-16">
      <div className="container max-w-screen-xxl xxl:px-24">
        <h2 className="title text-center">Our Products</h2>
        <div className="grid grid-cols-4 gap-8">
          <ProductItems />
          <ProductItems />
          <ProductItems />
          <ProductItems />
        </div>
      </div>
    </section>
  );
};

export default OurProduct;
