import Navbar from "./Navbar";
import HomePageVideo from "../assets/video/HomePageVideo.mp4";

import React from "react";

const FirstSection: React.FC  = () => {
  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={HomePageVideo}
        autoPlay
        loop
        muted
      />

      <div className="relative z-30">
        <Navbar />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white -mt-32">
      <h1 className="text-[35px]  sm:text-[54px] md:text-[64px] lg:text-[72px] font-medium font-space">
  <span>When Innovation</span>
  
  <br />
  <span>Meets</span>{" "}
  <span className="bg-investment rounded-full py-1 px-5 text-black font-medium">
    Investment
  </span>
</h1>

        <p className=" text-[20px] font-normal mt-8 font-space text-fontColor">
          Empowering Trading Through Advanced Technology
        </p>
        <button
          className="mt-8 h-[44px] border-dAppBorder border-[1px] text-white rounded-[12px] 
               px-[24px] transition duration-300 bg-dApp
             font-space text-[16px] 
             
             hover:bg-navButtonColor hover:text-black hover:font-medium
            "
        >
          Open dApp
        </button>
      </div>
    </div>
  );
};

export default FirstSection;