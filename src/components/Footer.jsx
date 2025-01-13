import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-12 pb-9 border-t">
      <div className="container ">
        <div className=" flex justify-between ">
          <div>
            <Link to="/">
              <img src="/Logo.png" alt="" />
            </Link>
            <p className="details w-72 text-ellipsis pt-12">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <div>
            <p className="details pb-12">Links</p>
            <ul className="flex flex-col gap-11">
              <li>
                <Link
                  to="/"
                  className="text-primary font-Poppins taxt-base font-bold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-primary font-Poppins taxt-base font-bold"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary font-Poppins taxt-base font-bold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary font-Poppins taxt-base font-bold"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="details pb-12">Help</p>
            <ul className="flex flex-col gap-11">
              <li>
                <Link
                  to="/"
                  className="text-primary font-Poppins taxt-base font-bold"
                >
                  Payment Options
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-primary font-Poppins taxt-base font-bold"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary font-Poppins taxt-base font-bold"
                >
                  Privacy Policies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="details pb-12">Newsletter</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Email Address"
              className="border-b border-b-black"
            />
            <button className="border-b border-black ml-2 mr-4">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <p className="text-primary font-Poppins taxt-base font-bold border-t pt-9 mt-12">
          2023 furino. All rights reverved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
