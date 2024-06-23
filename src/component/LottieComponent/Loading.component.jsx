import React from "react";
import Lottie from "lottie-react";
import LoadingLottie from "../../lottie/Loading.json";
const LoadingComponent = ({ loading }) => {
  return (
    <div
      className={`${
        loading ? " h-screen" : ""
      } flex justify-center items-center flex-col  `}
    >
      <Lottie
        className={`${
          loading ? "w-3/12" : "w-1/2"
        }  shadow-customBrown/50 shadow-md`}
        animationData={LoadingLottie}
        loop
        speed={0.1}
      />
      <p className={` ${!loading && "hidden"} text-3xl mt-5 font-bold`}>
        Loading...
      </p>
    </div>
  );
};

export default LoadingComponent;
