import React from "react";
import { Link } from "react-router-dom";
import { TbUserExclamation } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="py-7">
      <div className="container max-w-screen-xxl xxl:px-24 flex justify-between items-center">
        <div>
          <img src="/Logo.png" alt="Logo.png" />
        </div>
        <ul className="flex items-center gap-[75px] font-Poppins  text-lg font-medium text-black">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
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
      </div>
    </nav>
  );
};

export default Navbar;
