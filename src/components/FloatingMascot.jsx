import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "../FloatingMascot.css"; // Add styles for positioning

const FloatingMascot = () => {
  return (
    <div className="floating-mascot">
      <DotLottieReact
        src="https://lottie.host/105aaff1-4907-4938-b547-930602c4355b/03DDN8fiky.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default FloatingMascot;
