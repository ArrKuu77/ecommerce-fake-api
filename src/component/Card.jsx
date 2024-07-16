import React, { useRef, useState } from "react";
import { useCustomHook } from "../context/StateContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const Card = ({ product }) => {
  const { image, title, price, id } = product;
  const {
    state: { cart, navPosition },
    dispatch,
  } = useCustomHook();
  const [ScaleAndZ, setScaleAndZ] = useState(false);
  const MoveImg = useRef();
  const [swipImg, setSwipImg] = useState(false);
  const AddtoCartFunction = (currentid) => {
    const reactImg = MoveImg.current.getBoundingClientRect();
    console.log(reactImg, navPosition);
    const topper = reactImg.top - navPosition.top + 80;
    const righter = navPosition.left - reactImg.left - 120;
    console.log(righter, topper);
    setSwipImg(!swipImg);
    MoveImg.current.style.transform = ` translate(${righter}px, -${topper}px) rotate(360deg)`;
    setScaleAndZ(true);
    setTimeout(() => {
      MoveImg.current.style.display = `none`;
    }, 1600);
    let currentItem = cart.find((item) => {
      // console.log(item.id, currentid);
      // console.log(cart);
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
    <div className="  relative border-2 border-customBrown/70 w-72 h-96 shadow-blue-500/50 shadow-md p-3 flex flex-col justify-between  ">
      <div>
        <img
          className=" h-[200px] w-[200px] mx-auto object-cover"
          src={image}
          alt=""
        />
      </div>
      <div
        ref={MoveImg}
        className={` ${
          ScaleAndZ && "z-50 "
        } transition-all duration-1000  absolute w-[90%]`}
      >
        <img
          className={`${
            ScaleAndZ && "scale-[0.15] "
          } h-[200px] w-[200px] mx-auto rotate-0 object-cover`}
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
