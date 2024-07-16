import React, { useEffect } from "react";
import { useCustomHook } from "../context/StateContext";
import Card from "../component/Card";
import LoadingComponent from "../component/LottieComponent/Loading.component";

const ProductLists = () => {
  const {
    state: { products, navSearch },
    dispatch,
  } = useCustomHook();
  // console.log(products.length);
  useEffect(() => {
    dispatch({ type: "Nav_Search_Nodisable" });
  }, [navSearch]);
  return (
    <div>
      {products.length > 0 ? (
        <div className="  p-3 flex flex-wrap gap-5 mt-3 justify-center items-center">
          {products?.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </div>
      ) : (
        <LoadingComponent loading={true} />
      )}
    </div>
  );
};

export default ProductLists;
