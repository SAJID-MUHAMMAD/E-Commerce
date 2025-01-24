import React from "react";
import Banner from "../components/shop-page/Banner";
import Filter from "../components/shop-page/Filter";
import Products from "../components/shop-page/Products";

const Shop = () => {
  return (
    <>
      <Banner />
      <Filter />
      <Products itemsPerPage={16} />
    </>
  );
};

export default Shop;
