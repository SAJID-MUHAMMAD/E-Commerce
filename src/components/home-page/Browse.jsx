import React from "react";

const Browse = () => {
  return (
    <section className="py-14">
      <div className="container max-w-screen-xxl xxl:px-24">
        <div className="pb-16">
          <h2 className="title text-center">Browse The Range</h2>
          <p className="details text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="flex gap-5">
          <div className="w-1/3 ">
            <img className="w-full" src="/home-img/dinning.png" alt="dinning" />
            <p className="text-2xl text-primary font-semibold font-Poppins text-center mt-8">
              Dining
            </p>
          </div>
          <div className="w-1/3">
            <img className="w-full" src="/home-img/living.png" alt="living" />
            <p className="text-2xl text-primary font-semibold font-Poppins text-center mt-8">
              Living
            </p>
          </div>
          <div className="w-1/3">
            <img className="w-full" src="/home-img/bedroom.png" alt="bedroom" />
            <p className="text-2xl text-primary font-semibold font-Poppins text-center mt-8">
              Bedroom
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Browse;
