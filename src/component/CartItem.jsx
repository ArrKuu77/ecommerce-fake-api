import React, { useState } from "react";
import { useCustomHook } from "../context/StateContext";

const CartItem = ({ item, increaseTotal, decreaseTotal }) => {
  const { title, image, price } = item;
  const { dispatch } = useCustomHook();
  const [itemQty, setitemQty] = useState(1);
  const RemoveCart = () => {
    dispatch({ type: "Remove_Cart", payload: item.id });
    decreaseTotal(oneItemPrice);
  };
  const QuantityFunction = (increase) => {
    if (increase == "increase") {
      setitemQty(itemQty + 1);
      increaseTotal(price);
    } else {
      if (itemQty > 1) {
        setitemQty(itemQty - 1);
        decreaseTotal(price);
      }
    }
  };
  const oneItemPrice = itemQty * price;
  return (
    <div>
      <div className=" m-5 border-3 shadow-md  p-5 flex  justify-between items-center">
        <img
          className=" h-[200px] w-[200px]  object-cover"
          src={image}
          alt=""
        />
        <div className=" w-2/5">
          <p>{title}</p>
          <p>${oneItemPrice.toFixed(2)}</p>
          <p onClick={RemoveCart} className="  text-red-700 cursor-pointer">
            RemoveCart
          </p>
        </div>
        <div className=" flex justify-between items-center p-3  bg-slate-950 border-3 rounded-md text-white">
          <button
            onClick={QuantityFunction.bind(null, "increase")}
            className=" bg-slate-800  m-1 py-1 px-2 rounded"
          >
            +
          </button>
          <p>{itemQty}</p>
          <button
            onClick={QuantityFunction.bind(null, "decrease")}
            className=" bg-slate-800  m-1 py-1 px-2  rounded"
          >
            {" "}
            -{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
