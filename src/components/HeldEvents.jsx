import React from "react";
import Toys from "../assets/images/AstroToys.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
const HeldEvents = () => {
  return (
    <div
      name="gallery"
      className="w-full h-screen  flex flex-col items-center justify-start pt-4 text-gray-300">
      <h2 className="md:text-lg font-bold tracking-widest mt-16 text-center md:text-left">
        “Astronomy compels the soul to look upwards and leads us from this world
        to another”
      </h2>
      <div className="w-full h-full flex flex-col items-center justify-center gap-4 md:gap-20">
        <h1 className="text-2xl md:text-5xl">EVENTS WE HELD</h1>
        <div className="md:h-80  w-[90%] md:w-[70%]  flex flex-wrap md:flex-col md:overflow-hidden items-center justify-center gap-2 md:gap-2 h-max bg-white rounded-lg">
          <div className="rounded-md bg-white bg-opacity-20 p-1">
            <img
              src={Toys}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="rounded-md bg-white bg-opacity-20 p-1">
            <img
              src={Toys}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="rounded-md bg-white bg-opacity-20 p-1">
            <img
              src={Toys}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="rounded-md bg-white bg-opacity-20 p-1">
            <img
              src={Toys}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeldEvents;
