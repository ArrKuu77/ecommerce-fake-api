import React, { useEffect, useState } from "react";
import { useCustomHook } from "../context/StateContext";
import CartItem from "../component/CartItem";
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import LoadingComponent from "../component/LottieComponent/Loading.component";
import { TiShoppingCart } from "react-icons/ti";

const AddtoCart = () => {
  const {
    state: { cart },
    dispatch,
  } = useCustomHook();

  const [mainTotal, setmainTotal] = useState(1);

  useEffect(() => {
    setmainTotal(total);
  }, []);
  const increaseTotal = (price) => {
    setmainTotal(mainTotal + price);
  };
  const decreaseTotal = (price) => {
    setmainTotal(mainTotal - price);
  };
  const clearCart = () => {
    dispatch({ type: "Clear_Cart" });
    setmainTotal(0);
  };
  const total = cart.reduce((pv, cv) => pv + cv.price, 0);
  return (
    <div className=" container mx-auto">
      {cart.length > 0 && (
        <div className=" flex justify-end my-4">
          <button
            onClick={clearCart}
            className="bg-red-700 p-2 border-2 rounded-md text-white flex items-center gap-3 shadow-lg "
          >
            <p>Clear Cart</p>
            <FaTrashCanArrowUp />
          </button>
        </div>
      )}
      {cart?.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            increaseTotal={increaseTotal}
            decreaseTotal={decreaseTotal}
          />
        );
      })}
      {cart.length > 0 ? (
        <div>
          <hr className=" p-1 bg-slate-800" />
          <div className=" flex p-5  justify-between items-center">
            <p>Total</p>
            <p>${mainTotal.toFixed(2)}</p>
          </div>
        </div>
      ) : (
        <Link to={"/"}>
          <div>
            <div className=" bg-navBg  w-1/2 p-10 border-3 rounded-xl cursor-pointer shadow-lg shadow-customBrown/30  my-4 mx-auto">
              <p className=" text-center font-bold text-customBrown  text-2xl flex justify-center items-center gap-5">
                {" "}
                Go to Shoping <TiShoppingCart className=" text-4xl" />
              </p>
            </div>
            <LoadingComponent loading={false} />
          </div>
        </Link>
      )}
    </div>
  );
};

export default AddtoCart;
