import React from "react";
import { Carousel } from "react-responsive-carousel";
import Toys from "../assets/images/AstroToys.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
const HeldEvents = () => {
  return (
    <div
      name="gallery"
      className="w-full h-screen repeating-bg flex flex-col items-center justify-start pt-4 text-gray-300">
      <h2 className="text-lg font-bold tracking-widest mt-16">
        “Astronomy compels the soul to look upwards and leads us from this world
        to another”
      </h2>
      <div className=" w-full h-full flex flex-col items-center justify-center gap-20">
        <h1 className="text-[70px]">EVENTS WE HELD</h1>
        <div className="h-80 w-[70%] flex items-center justify-around gap-2 bg-white rounded-lg">
          <div className="rounded-md bg-white/5 p-1">
            <img
              src={Toys}
              alt=""
              className="w-[600px] h-60 rounded-xl overflow-hidden "
            />
          </div>
          <div className="rounded-md bg-white/5 p-1">
            <img
              src={Toys}
              alt=""
              className="w-[600px] h-60 rounded-xl overflow-hidden "
            />
          </div>
          <div className="rounded-md bg-white/5 p-1">
            <img
              src={Toys}
              alt=""
              className="w-[600px] h-60 rounded-xl overflow-hidden "
            />
          </div>
          <div className="rounded-md bg-white/5 p-1">
            <img
              src={Toys}
              alt=""
              className="w-[600px] h-60 rounded-xl overflow-hidden "
            />
          </div>
          {/* <Carousel
            autoPlay
            axis="horizontal"
            infiniteLoop
            emulateTouch
            centerMode
            showThumbs>
            <div>
              <img src={Toys} alt="" className="w-40 " />
            </div>
            <div>
              <img src={Toys} alt="" className="w-40 " />
            </div>
            <div>
              <img src={Toys} alt="" className="w-40 " />
            </div>
          </Carousel> */}
        </div>
      </div>
    </div>
  );
};

export default HeldEvents;
