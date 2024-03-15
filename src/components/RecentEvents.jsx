import React from "react";
import sunsetMoon from "../assets/images/sunsetMoon.png";
import Moon from "../assets/svg/moon-spin.gif";

const RecentEvents = () => {
  return (
    <div
      name="events"
      className="w-full h-screen flex flex-col items-center justify-start pt-4 text-gray-300">
      {" "}
      <h2 className="text-3xl font-bold tracking-widest">Recent Events</h2>
      <div className=" w-full h-full flex items-center justify-center">
        {" "}
        <div className="relative">
          {" "}
          <img src={sunsetMoon} alt="" className="w-[880px] hidden md:block" />
          <div className="hidden md:block absolute -top-40 -left-44 ">
            <img src={Moon} alt="" className="w-[300px]" />
          </div>
          <div className="md:absolute md:bottom-10  md:-right-60 bg-[#BBB6B6BF] flex flex-col  space-y-2 p-5 rounded-sm w-[400px] h-max md:w-[500px] md:h-[378px]">
            <p>18/06/2023</p>
            <h3 className="text-3xl">Talk on Dark Matter</h3>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar
              duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit
              amet consectetur. Augue duis etiam pulvinar duis interdum accumsan
              tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue
              duis etiam pulvinar duis interdum accumsan tempor bibendum amet.
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur. Augue duis etiam pulvinar duis interdum accumsan
              tempor bibendum amet.
            </p>
            <div className="bg-white flex items-center justify-center px-2 py-1 text-black w-24 rounded-sm my-4 text-sm">
              Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentEvents;
