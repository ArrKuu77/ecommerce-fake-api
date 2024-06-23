import React from "react";

const ItemDetailSpan = ({ Name, Text, NameSize, TextSize }) => {
  return (
    <div className=" w-full flex   justify-between text-customBrown my-5 items-center">
      <span
        className={`${NameSize} font-bold w-[40%] flex justify-evenly items-center`}
      >
        <span className=" w-[80%]">{Name}</span>
        <span>:</span>{" "}
      </span>{" "}
      <h1 className={`${TextSize} w-[60%]`}> {Text}</h1>
    </div>
  );
};

export default ItemDetailSpan;
