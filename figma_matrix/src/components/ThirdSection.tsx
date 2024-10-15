import React from "react";
import { BiBarChart } from "react-icons/bi";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { MdAccountBalanceWallet } from "react-icons/md";
import { RiRobot2Fill } from "react-icons/ri";
import "./styles/ThirdSectionStyle.css";
const ThirdSection: React.FC = () => {
  return (
    <>
      <div className="h-auto pb-[50px] top-[24px] flex flex-col items-center gap-6 mt-[42px]">
        <h1 className="text-white font-space text-[40px] md:text-[40px] sm:text-[32px] font-medium text-center">
          About EthAi
        </h1>
        <p className="w-[60%] text-fontColor font-space text-[14px] md:text-[16px] sm:text-[8px] font-normal text-center">
          At EthAi, we're all about making crypto trading easier and more
          intuitive. We provide tools that help traders keep up with all new
          market trends, track top traders' movements
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
          className="w-[108.91px] h-[40px] bg-navButtonColor text-black rounded-[12px]
              hover:bg-[#76dfff] hover:text-gray-800 
              hover:shadow-[0px_0px_5px_3px_rgba(76,221,253,1),
                            0px_1px_2px_0px_rgba(76,221,253,1)] 
              text-[14px] font-medium leading-[16px] tracking-[-0.12px] text-center 
              rounded-[12px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] 
              transition-all duration-200 ease-in-out flex  justify-center item-center"
        >
          Read more
        </button>

        <div className="main w-[60%]   rounded-[20px] bg-AboutEthAiColor mt-[40px] p-6">
          <div className="about flex  flex-wrap items-start justify-center">
            {/* Section 1 */}
            <div className="flex flex-col items-start justify-start lg:w-1/2 p-8 gap-[12px] smallBox">
              <div>
                <BiBarChart
                  style={{ color: "rgba(97, 240, 254, 1)", fontSize: "24px" }}
                />
              </div>
              <p className="text-white font-space text-[18px] md:text-[18px] sm:text-[16px] font-medium">
                Stay Ahead
              </p>
              <p className="text-fontColor font-space text-[16px] font-normal">
                No more guesswork-get clear, trustable insights.
              </p>
            </div>

            <div className="flex flex-col items-start justify-start lg:w-1/2 p-6 gap-[12px] smallBox">
              <div>
                <MdAccountBalanceWallet
                  style={{ color: "rgba(97, 240, 254, 1)", fontSize: "24px" }}
                />
              </div>
              <p className="text-white font-space text-[18px] md:text-[18px] sm:text-[16px] font-medium">
                Know Your Assets
              </p>
              <p className="text-fontColor font-space text-[16px]  font-normal">
                Always stay on top of how your investments are performing.
              </p>
            </div>

            <div className="flex flex-col items-start justify-start lg:w-1/2 p-6 gap-[12px] ">
              <div>
                <FaScrewdriverWrench
                  style={{ color: "rgba(97, 240, 254, 1)", fontSize: "px" }}
                />
              </div>
              <p className="text-white font-space text-[18px] md:text-[18px] sm:text-[16px] font-medium">
                Simple, Not Overwhelming
              </p>
              <p className="text-fontColor font-space text-[16px] font-normal">
                Our tools are designed to make complex analysis easu to
                understand and act on.
              </p>
            </div>

            <div className="flex flex-col items-start justify-start lg:lg:w-1/2 p-6 gap-[12px]">
              <div>
                <RiRobot2Fill
                  style={{ color: "rgba(97, 240, 254, 1)", fontSize: "px" }}
                />
              </div>
              <p className="text-white font-space text-[18px] md:text-[18px] sm:text-[16px] font-medium">
                Future-Proof
              </p>
              <p className="text-fontColor font-space text-[16px] font-normal">
                We're constantly improving, adding new features to help you make
                the most informed decisions possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;