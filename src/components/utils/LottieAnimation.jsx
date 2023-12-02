import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/json/lottie.json"; // Replace with the actual path to your Lottie animation JSON file

const MyLottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div style={{ width: "500px", height: "500px" ,background:"red"}}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default MyLottieAnimation;
