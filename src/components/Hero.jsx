import React from "react";
import HeroAstro from "../assets/images/heroAstronaunt.png";

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen repeating-bg">
      {/* Container */}
      <div className=" px-10 md:px-0 w-full h-full flex items-center justify-center">
        <div className="relative">
          {" "}
          <img src={HeroAstro} alt="" className="h-80 md:h-full" />
          <div className="absolute bottom-4 left-2 max-w-[400px] md:max-w-[1000px] text-white">
            <span className=" text-3xl md:text-[70px] font-bold  uppercase">
              Our Stargazers Spectacle
            </span>
            <span className="-pb-4 text-sm md:text-[35px] tracking-widest ">
              A Journey through the Cosmos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
