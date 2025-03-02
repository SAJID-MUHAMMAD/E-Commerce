import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import ProductItems from "../home-page/ProductItems";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}
const Products = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <section className="py-11 ">
        <div className="container">
          <div className="grid grid-cols-4 gap-8 pt-8">
            {currentItems &&
              currentItems.map((item, i) => <ProductItems key={i} />)}
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next "
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            className="flex justify-center mt-10 gap-9 pagination-product"
          />
        </div>
      </section>
    </>
  );
};

export default Products;
