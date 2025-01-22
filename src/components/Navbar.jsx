import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbUserExclamation } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="py-7 relative">
      <div className="container  max-w-screen-xxl xxl:px-24 flex justify-between items-center">
        <div>
          <Link to="/">
            <img src="/Logo.png" alt="Logo.png" />
          </Link>
        </div>
        <ul
          className={`w-1/2 lg:w-auto flex flex-col ${
            show ? "-translate-x-full" : "translate-x-0"
          } transition-all lg:flex-row items-center gap-[75px] font-Poppins  text-lg font-medium text-black absolute lg:static top-full left-0 ${
            show ? "" : "bg-white"
          } h-screen lg:h-auto `}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div>
          <ul className="flex items-center gap-11 text-xl">
            <li>
              <Link to="">
                <TbUserExclamation />
              </Link>
            </li>
            <li>
              <Link to="">
                <CiSearch />
              </Link>
            </li>
            <li>
              <Link to="">
                <CiHeart />
              </Link>
            </li>
            <li>
              <Link to="">
                <MdOutlineShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
        <button className="block lg:hidden" onClick={() => setShow(!show)}>
          <CiMenuFries />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
