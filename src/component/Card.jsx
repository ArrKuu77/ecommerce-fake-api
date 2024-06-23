import React from "react";
import { useCustomHook } from "../context/StateContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const Card = ({ product }) => {
  const { image, title, price, id } = product;
  const {
    state: { cart },
    dispatch,
  } = useCustomHook();
  // console.log(cart);
  const AddtoCartFunction = (currentid) => {
    let currentItem = cart.find((item) => {
      console.log(item.id, currentid);
      console.log(cart);
      return item.id == currentid;
    });
    console.log(currentItem);
    if (cart.length == 0) {
      dispatch({ type: "Add_To_Cart", payload: product });
    } else if (currentItem == undefined) {
      dispatch({ type: "Add_To_Cart", payload: product });
    } else {
      Swal.fire({
        title: "This item have a Cart!",
        text: "You can choise another item",
        icon: "warning",
      });
      return;
    }
  };
  return (
    <div className=" relative border-2 border-customBrown/70 w-72 h-96 shadow-blue-500/50 shadow-md p-3 flex flex-col justify-between  ">
      <div>
        <img
          className=" h-[200px] w-[200px] mx-auto object-cover"
          src={image}
          alt=""
        />
      </div>

      <p>{title.slice(0, 15)}....</p>
      <div className=" text-xl  w-[30%] shadow-customBrown shadow-md rounded-xl p-1  flex justify-between items-center ">
        <p>$</p>
        <h1>{price}</h1>
      </div>
      <div className=" flex justify-between items-center">
        <button
          onClick={() => AddtoCartFunction(id)}
          className=" bg-darkGray border-2  border-forestGreen rounded p-2"
        >
          AddCard
        </button>
        <Link to={`/ItemDetail/${id}`}>
          <button className=" bg-darkGray border-2 border-darkNavy rounded p-2 ">
            Detail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
