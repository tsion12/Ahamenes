import React from "react";
import AtronauntSpace from "../assets/images/AtronauntSpace.png";
import BlueStars from "../assets/images/BlueStars.png";
import MoonBlood from "../assets/images/moonBlood.png";
import Floating from "../assets/images/FloatingAsto.png";
import Toys from "../assets/images/AstroToys.png";
import PurpleStars from "../assets/images/purpleStars.png";
const Atronaunts = () => {
  return (
    <div
      name="about"
      className="w-full h-screen  flex flex-col items-center justify-start pt-4 text-gray-300">
      {" "}
      <div className=" w-full h-full flex items-center justify-center">
        {" "}
        <div className="relative">
          {" "}
          <img
            src={AtronauntSpace}
            alt=""
            className="hidden md:block w-[700px]"
          />
          <div className="md:absolute md:bottom-10  md:-left-60 bg-[#BBB6B6BF] text-white flex flex-col  space-y-2 p-5 rounded-sm w-[400px] md:w-[450px] h-max">
            <p>18/06/2023</p>
            <h3 className="text-3xl font-bold">Astronauts we know</h3>
            <p className="py-4 text-white font-bold">
              Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar
              duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit
              amet consectetur. Augue duis etiam pulvinar duis interdum accumsan
              tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue
              duis etiam pulvinar duis interdum accumsan tempor bibendum amet.
            </p>
            <div className="bg-white flex items-center justify-center px-2 py-1 text-black w-24 rounded-sm my-4 text-sm">
              Learn More
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <img src={BlueStars} alt="" className="w-full h-auto" />
        <img src={MoonBlood} alt="" className="w-full h-auto" />
        <img src={Floating} alt="" className="w-full h-auto" />
        <img src={PurpleStars} alt="" className="w-full h-auto" />
        <img src={Toys} alt="" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Atronaunts;
