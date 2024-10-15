import React from "react";
import KickingOffImage from "../assets/images/KickingOff.png"; 
import BiggerInsightsImage from "../assets/images/BiggerInsightsImage.png"; 
import FullPowerImage from "../assets/images/FullPowerImage.png"; 
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const FifthSection: React.FC = () => {
  return (
    <>
      <div className="container mx-auto p-4 gap-8 text-white flex flex-col ">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row w-full gap-8 mb-8">
          <div className="w-full md:w-[50%] p-4 flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col items-center md:items-start sm:items-start custom-sm:items-start w-full">
              <button className="bg-white text-black w-[71px] h-[28px] rounded-[4px] px-[12px] py-[6px] font-space text-[12px] font-medium mb-4">
                PHASE 1
              </button>
              <p className="text-[40px] font-space font-medium text-center md:text-[32px]">
                Kicking Off
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full ">
              <div className="flex items-center w-full ">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Launch of EthAi: Officially
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Development of Core Ai Agents
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Use Onboarding Campaign
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Community Engagement Initiatives
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[50%] relative">
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(180deg, #00161D 0%, rgba(0, 22, 29, 0) 37.69%), 
                  linear-gradient(180deg, rgba(0, 22, 29, 0) 81.47%, #00161D 100%), 
                  linear-gradient(270deg, rgba(0, 22, 29, 0) 82.85%, #00161D 100%)
                `,
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
            <img
              className="w-full max-w-[300px] h-auto object-cover"
              src={KickingOffImage}
              alt="Kicking Off"
              style={{
                zIndex: 0,
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse w-full gap-8 mb-8">
          <div className="w-full md:w-[50%] p-4 flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col items-center md:items-start sm:items-start custom-sm:items-start w-full">
              <button className="bg-white text-black w-[71px] h-[28px] rounded-[4px] px-[12px] py-[6px] font-space text-[12px] font-medium mb-4">
                PHASE 2
              </button>
              <p className="text-[40px] font-space font-medium text-center md:text-[32px]">
                Bigger Insights
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full ">
              <div className="flex items-center w-full ">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Introduction of Advanced AI Agents
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Strategic Partnerships
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  User Interface Optimization
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Comprehensive Marketing Campaign
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[50%] relative">
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(180deg, #00161D 0%, rgba(0, 22, 29, 0) 37.69%), 
                  linear-gradient(180deg, rgba(0, 22, 29, 0) 81.47%, #00161D 100%), 
                  linear-gradient(270deg, rgba(0, 22, 29, 0) 82.85%, #00161D 100%)
                `,
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
            <img
              className="w-full max-w-[300px] h-auto object-cover"
              src={BiggerInsightsImage}
              alt="Bigger Insights"
              style={{
                zIndex: 0,
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row w-full gap-8 mb-8">
          <div className="w-full md:w-[50%] p-4 flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col items-center md:items-start sm:items-start custom-sm:items-start w-full">
              <button className="bg-white text-black w-[71px] h-[28px] rounded-[4px] px-[12px] py-[6px] font-space text-[12px] font-medium mb-4">
                PHASE 3
              </button>
              <p className="text-[40px] font-space font-medium text-center md:text-[32px]">
                Full Power
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full ">
              <div className="flex items-center w-full ">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Full Decentralization
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Launch of User-Owned Marketplaces
                </p>
              </div>
              <div className="flex items-center w-full">
                <span>
                  <IoIosCheckmarkCircleOutline
                    style={{ color: "rgba(97, 240, 254, 1)", fontSize: "20px" }}
                  />
                </span>
                <p
                  className="text-[18px] font-space font-normal ml-2"
                  style={{ color: "rgba(239, 239, 232, 1)" }}
                >
                  Long-Term Community Building
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[50%] relative">
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(180deg, #00161D 0%, rgba(0, 22, 29, 0) 37.69%), 
                  linear-gradient(180deg, rgba(0, 22, 29, 0) 81.47%, #00161D 100%), 
                  linear-gradient(270deg, rgba(0, 22, 29, 0) 82.85%, #00161D 100%)
                `,
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
            <img
              className="w-full max-w-[300px] h-auto object-cover"
              src={FullPowerImage}
              alt="Full Power"
              style={{
                zIndex: 0,
                width: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthSection;
