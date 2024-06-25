import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useGetItemDetailQuery } from "../store/service/endPointService/endPoint.Service";
import { useCustomHook } from "../context/StateContext";
import ItemDetailSpan from "../component/ItemDetailSpan";
import { FaStar, FaRegStar } from "react-icons/fa6";
import Card from "../component/Card";
import Swal from "sweetalert2";
import { TiShoppingCart } from "react-icons/ti";
import LoadingComponent from "../component/LottieComponent/Loading.component";

const ItemDetail = () => {
  const { id } = useParams();
  const { data, isError, isLoading, isSuccess } = useGetItemDetailQuery(id);
  const {
    state: { products, cart },
    dispatch,
  } = useCustomHook();
  let array = Array.from({ length: 5 }, (_, index) => index + 1);
  useEffect(() => {
    dispatch({ type: "Nav_Search_Disable" });
    if (scrollY > 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [data]);
  console.log(id, isLoading);
  const AddtoCartFunction = (currentid) => {
    let currentItem = cart.find((item) => {
      console.log(item.id, currentid);
      console.log(cart);
      return item.id == currentid;
    });
    console.log(currentItem);
    if (cart.length == 0) {
      dispatch({ type: "Add_To_Cart", payload: data });
    } else if (currentItem == undefined) {
      dispatch({ type: "Add_To_Cart", payload: data });
    } else {
      Swal.fire({
        title: "This item have a Cart!",
        text: "You can choise another item",
        icon: "warning",
      });
      return;
    }
  };

  // console.log(products);
  const [CategoryFilter, setCategoryFilter] = useState([]);
  const CategoryFilterFun = () => {
    setCategoryFilter(
      products.filter((product) => {
        return product.category == data?.category;
      })
    );
  };

  useEffect(() => {
    CategoryFilterFun();
  }, [data?.category]);
  console.log(data?.id, id);
  return isLoading || data?.id !== parseInt(id) ? (
    <LoadingComponent loading={true} />
  ) : (
    <div className=" w-4/5 m-auto my-5">
      <div className=" text-xl flex justify-end ">
        <span>Item Number :</span>
        <span>{id}</span>
      </div>
      <div className=" gap-3 flex justify-center p-3 text-2xl font-bold mb-5 ">
        <span>Category :</span> <h2 className="uppercase">{data?.category}</h2>
      </div>
      <div className=" w-1/2 m-auto border rounded-xl bg-white/95 relative">
        <div className=" text-xl  bg-navBg shadow-customBrown shadow-md rounded-xl p-1 absolute flex justify-between items-center top-[-5%] left-[-5%]">
          <p>$</p>
          <h1>{data?.price}</h1>
        </div>

        <img
          className=" h-[350px] w-full object-contain"
          src={data?.image}
          alt=""
        />
      </div>
      <div className=" flex justify-center items-center  mt-3 ">
        <button
          onClick={() => AddtoCartFunction(id)}
          className=" bg-navBg/50 border-2  flex justify-center items-center gap-3 border-forestGreen rounded w-[25%] p-2"
        >
          <span>Add Cart</span>
          <TiShoppingCart className=" text-xl" />
        </button>
      </div>
      <div className=" mt-3 flex justify-center items-center flex-col mx-auto w-[70%]">
        <div>
          <div className=" my-5 flex justify-center gap-1 items-center text-lg">
            <p>Rate -</p>
            <p> {data?.rating?.rate}</p>
          </div>
          <div className=" flex justify-center items-center gap-3 text-2xl shadow-customBrown shadow-md p-2 ">
            {array.map((arrNum) => {
              return arrNum <= data?.rating?.rate?.toFixed() ? (
                <FaStar key={arrNum} />
              ) : (
                <FaRegStar key={arrNum} />
              );
            })}
          </div>
        </div>

        <ItemDetailSpan
          Name={"Name"}
          Text={data?.title}
          NameSize={"text-lg"}
          TextSize={"text-lg"}
        />
        <ItemDetailSpan
          Name={"Description"}
          Text={data?.description}
          NameSize={"text-lg"}
          TextSize={"text-sm"}
        />
      </div>
      <div className=" gap-3 flex  bg-navBg p-3 text-2xl font-bold mb-5 ">
        <span>Category :</span> <h2 className="uppercase">{data?.category}</h2>
      </div>
      <div className=" flex flex-wrap  justify-evenly gap-5">
        {CategoryFilter.length > 0 &&
          CategoryFilter.map((product) => {
            return (
              product.id !== parseInt(id) && (
                <Card key={product.id} product={product} />
              )
            );
          })}
      </div>
    </div>
  );
};

export default ItemDetail;
