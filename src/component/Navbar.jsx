import React, { useEffect, useState } from "react";
import { useCustomHook } from "../context/StateContext";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { FaShopify } from "react-icons/fa6";

const Navbar = () => {
  const {
    state: { cart, navSearch },
    search,
    setsearch,
  } = useCustomHook();

  const [show, setShow] = useState(true);

  const updateScrollPosition = () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop < 150) {
      setShow(true);
    } else {
      setShow(false);
      // console.log(show);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);
  });

  return (
    <div
      className={`w-full  z-30 flex justify-around   p-5 sticky top-0   duration-700
        // ${show ? " bg-navBg" : "backdrop-blur-sm  bg-navBg/70"}
         `}
    >
      <Link to={"/"}>
        <div className=" shadow-customBrown/50 shadow-md flex justify-center items-center gap-3 ">
          <FaShopify className="text-2xl" />
          <h1 className=" text-md">ArrKuuShopping</h1>
        </div>
      </Link>

      <div className=" w-[60%] flex items-center justify-evenly">
        <div className="relative w-[40%]">
          <div className="absolute pointer-events-auto ">
            <svg
              className="absolute text-slate-400 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                // fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                // clip-rule="evenodd"
              />
            </svg>
          </div>

          <input
            disabled={navSearch}
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            type="text"
            placeholder="Search"
            className=" ps-5 w-full"
          />
        </div>

        <Link to={"/AddtoCart"}>
          <div className=" relative ">
            <TiShoppingCart className=" text-2xl text-customBrown shadow-customBrown/50 shadow-md" />
            {cart.length > 0 && (
              <span className=" absolute top-[-10px] right-[-5px] shadow-customBrown/50 shadow-md">
                {cart.length}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
