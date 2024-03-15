import React from "react";
import Socials1 from "../assets/images/socials1.png";
import Socials8 from "../assets/images/socials8.png";
import Socials2 from "../assets/images/socials2.png";
import Socials3 from "../assets/images/socials3.png";
import Socials4 from "../assets/images/socials4.png";
import Socials5 from "../assets/images/socials5.png";
import Socials6 from "../assets/images/socials6.png";
import Socials7 from "../assets/images/socials7.png";
import Socials9 from "../assets/images/socials9.png";

const Socials = () => {
  return (
    <div
      name="club"
      className="w-full h-screen repeating-bg flex flex-col items-center justify-center pt-4 text-gray-300">
      {" "}
      <h2 className="text-[48px] mt-20 font-bold tracking-widest">
        Let’s check out our socials
      </h2>
      <div className="flex items-center justify-center my-10">
        <div className=" mx-auto w-full h-full grid grid-cols-3 grid-rows-3 gap-8">
          <img src={Socials1} alt="" className="w-60" />
          <img src={Socials2} alt="" className="w-60" />
          <img src={Socials3} alt="" className="w-60" />
          <img src={Socials4} alt="" className="w-60" />
          <img src={Socials5} alt="" className="w-60" />
          <img src={Socials6} alt="" className="w-60" />
          <img src={Socials7} alt="" className="w-60" />
          <img src={Socials8} alt="" className="w-60" />
          <img src={Socials9} alt="" className="w-60" />
        </div>
      </div>
    </div>
  );
};

export default Socials;
