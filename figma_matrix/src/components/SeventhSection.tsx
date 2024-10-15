import React from "react";

const SeventhSection: React.FC = () => {
  return (
    <div
      className="text-white h-[380px] max-h-[380px] w-[80%] m-auto flex flex-col gap-6 justify-center items-center rounded-[20px] mt-[30px]"
      style={{
        boxShadow: "inset 0px 1px 25px 0px rgba(29, 206, 242, 0.25)",
        padding: "16px", // Optional: Add padding for better spacing
      }}
    >
      <h1 className="text-[40px] custom-sm:text-[32px] sm:text-[32px] md:text-[40px] lg:text-[40px] font-medium font-space text-center">
        Explore Our <span className="text-logoColor">dApp</span>
      </h1>
      <p className="text-[14px] custom-sm:text-[10px] sm:text-[10px] md:text-[10px] lg:text-[10px]  w-[80%] font-normal font-space text-center text-fontColor">
        EthAi is an AI-powered dApp designed to help traders make smarter,
        data-driven decisions. By tracking smart money flows, monitoring key
        wallets, and providing real-time market insights, EthAi empowers users
        to stay ahead of trends. The platform offers intuitive AI features for
        asset recommendations, market analysis, and personalized crypto Q&A,
        making it the ultimate tool for both novice and experienced traders.
      </p>
      <button
        style={{
          boxShadow: `
              0px 0px 1px 1px rgba(76, 221, 253, 1) inset,
              0px 1px 1px 0px rgba(76, 221, 253, 1) inset,
              0px 0px 4px 2px rgba(255, 255, 255, 0.12) inset,
              0px -8px 16px -4px rgba(55, 197, 229, 0.12),
              0px 6px 20px 0px rgba(55, 197, 229, 0.12),
              0px 4px 12px 0px rgba(55, 197, 229, 0.12),
              0px 4px 6px 0px rgba(55, 197, 229, 0.12),
              0px 1px 4px 0px rgba(55, 197, 229, 0.12)
            `,
        }}
        className="w-[139.91px] h-[44px] bg-navButtonColor text-black rounded-[12px]
            hover:bg-[#76dfff] hover:text-gray-800 
            hover:shadow-[0px_0px_5px_3px_rgba(76,221,253,1),
                          0px_1px_2px_0px_rgba(76,221,253,1)] 
            text-[16px] font-medium leading-[16px] tracking-[-0.12px] text-center 
            pt-[12px] pr-[24px] pb-[12px] pl-[24px] 
            transition-all duration-200 ease-in-out flex justify-center items-center font-normal"
      >
        Open dApp
      </button>
    </div>
  );
};

export default SeventhSection;