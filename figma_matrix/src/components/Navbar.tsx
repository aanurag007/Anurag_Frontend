import { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="pt-2 ">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-[5px]">
          <div className="grid grid-cols-3 gap-[1px]  p-2 max-w-max">
            <div className="w-[11.31px] h-[11.31px]  bg-logoBg1 rounded-tr-[100px]"></div>

            <div className="w-[11.31px] h-[11.31px] left-[12.34px] bg-logoBg2 "></div>
            <div className="w-[11.31px] h-[11.31px]  bg-logoBg2 rounded-tr-[100px] top-[12.34px] left-[24.69px]"></div>
            <div className="w-[11.31px] h-[11.31px]  bg-logoBg2 top-[12.34px] "></div>
            <div className="w-[11.31px] h-[11.31px]  bg-none "></div>
            <div className="w-[11.31px] h-[11.31px]  bg-logoBg2 top-[24.69px] left-[24.69px] "></div>
            <div className="w-[11.31px] h-[11.31px]  bg-logoBg2 rounded-bl-[100px] top-[24.69px]"></div>
            <div className="w-[11.31px] h-[11.31px]  bg-logoBg1   rounded-br-[100px] top-[24.69px] left-[12.34px]"></div>
            <div className="w-[11.31px] h-[11.31px]  bg-logoBg2 rounded-bl-[100px] top-[24.69px] left-[24.69px]"></div>
          </div>
          <div className="hidden custom-lg:block  text-[24px] font-bold leading-[22px] tracking-[-0.03px] text-white font-play">
            EthAi
          </div>
        </div>

        <div
          className={`block custom-lg:hidden cursor-pointer transition-transform duration-300 ${
            isMenuOpen ? "transform rotate-90" : ""
          }`}
          onClick={toggleMenu}
        >
          {!isMenuOpen ? (
            <>
              <span className="block w-[20px] h-[2px] bg-white mb-2 rounded-[10px]"></span>
              <span className="block w-[20px] h-[2px] bg-white rounded-[10px]"></span>
            </>
          ) : (
            <>
              <span className="block w-[20px] h-[2px] bg-white mb-0.5 rounded-[10px] transform rotate-45"></span>
              <span className="block w-[20px] h-[2px] bg-white rounded-[10px] transform -rotate-45"></span>
            </>
          )}
        </div>

        <div className="hidden custom-lg:flex space-x-4">
          <button className="px-4 py-2 text-white text-[16px] rounded hover:scale-105 transition-all duration-200 ease-in-out">
            Log in
          </button>
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
            className="w-[139.71px] h-[44px] bg-navButtonColor text-black 
              hover:bg-[#76dfff] hover:text-gray-800 
              hover:shadow-[0px_0px_5px_3px_rgba(76,221,253,1),
                            0px_1px_2px_0px_rgba(76,221,253,1)] 
              text-[16px] font-medium leading-[20px] tracking-[-0.16px] text-center 
              rounded-[12px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] 
              transition-all duration-200 ease-in-out"
          >
            Whitepaper
          </button>
        </div>
      </div>

      <div className="hidden custom-lg:flex flex-1 justify-center">
        <ul className="mt-2 flex justify-between h-[64px] w-[653px] lg:w-[550px] md:w-[430px] bg-navColor backdrop-blur-[10px] text-[16px] md:text-[14px] lg:text-[16px] text-fontColor rounded-full p-2 fixed top-3 border-[1.2px] border-navBorder pl-28 pr-28 lg:pl-16 lg:pr-16 md:pl-12 md:pr-12 leading-6 tracking-tight font-space">
          <li className="py-2 cursor-pointer hover:text-[#76dfff] hover:scale-105 transition-all duration-200 ease-in-out">
            Features
          </li>
          <li className="py-2 cursor-pointer hover:text-[#76dfff] hover:scale-105 transition-all duration-200 ease-in-out">
            Why Us
          </li>
          <li className="py-2 cursor-pointer hover:text-[#76dfff] hover:scale-105 transition-all duration-200 ease-in-out">
            Tokenomics
          </li>
          <li className="py-2 cursor-pointer hover:text-[#76dfff] hover:scale-105 transition-all duration-200 ease-in-out">
            Roadmap
          </li>
        </ul>
      </div>

      <div
        className={`absolute top-16 left-0 right-0 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {isMenuOpen && (
          <div
            className={`absolute top- left-0 right-0 transition-all duration-500 ease-in-out ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[-20px]"
            }`}
          >
            <ul className=" flex flex-col items-center space-y-4 p-4 bg-navColor backdrop-blur-[10px] text-[16px] text-fontColor  leading-6 tracking-tight font-space">
              <li className="py-2 cursor-pointer hover:text-[#76dfff] hover:scale-105 transition-all duration-200 ease-in-out">
                Features
              </li>
              <li className="py-2 cursor-pointer hover:text-[#76dfff] hover:scale-105 transition-all duration-200 ease-in-out">
                Why Us
              </li>
              <li className="py-2 cursor-pointer hover:text-[#76dfff] hover:scale-105 transition-all duration-200 ease-in-out">
                Tokenomics
              </li>
              <li className="py-2 cursor-pointer hover:text-[#76dfff] hover:scale-105 transition-all duration-200 ease-in-out">
                Roadmap
              </li>
              <li>
                <button className="block w-full px-4 py-2 rounded text-white hover:scale-105 transition-all duration-200 ease-in-out">
                  Log in
                </button>
              </li>
              <li>
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
                  className="block w-full px-4 py-2  h-[44px] bg-navButtonColor text-black 
                  hover:bg-[#76dfff] hover:text-gray-800 
                  hover:shadow-[0px_0px_5px_3px_rgba(76,221,253,1),
                                0px_1px_2px_0px_rgba(76,221,253,1)] 
                  text-[16px] font-medium leading-[20px] tracking-[-0.16px] text-center 
                  rounded-[12px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] 
                  transition-all duration-200 ease-in-out "
                >
                  Whitepaper
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;