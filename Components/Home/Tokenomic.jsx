"use client";

import {
  chat,
  communityDot,
  dot,
  howtobuy,
  markitingDot,
  tablebg,
  teamDot,
  tokenmetric,
} from "@/public/assets/images";
import tokenomicbg from "../../public/assets/images/tokenomicbg.png";
import Image from "next/image";
import TecnomicTable from "./Table";

const array = [
  {
    text: 1,
  },
  {
    text: 0,
  },
  {
    text: "M",
  },
  {
    text: "I",
  },
  {
    text: "L",
  },
  {
    text: "L",
  },
  {
    text: "I",
  },
  {
    text: "O",
  },
  {
    text: "N",
  },
];

const tocArray = [
  {
    img: dot,
    heading: "80% (8m)",
    text: "Liquidity paired with 1 ETH -> liquidity locked 1 year  ",
  },
  {
    img: markitingDot,
    heading: "5% (500k)",
    text: "Marketing (not to pay KOLs!) ",
  },
  {
    img: teamDot,
    heading: "10% (1m)",
    text: "Team tokens",
  },
  {
    img: communityDot,
    heading: "5% (500k)",
    text: "Community bonus System (regular rewards for competitions/ community super stars/ new communities)",
  },
];

const Tokenomic = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${tokenomicbg.src})`, // Correctly reference the blur image
          width: "100%",
          // height: "800px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        className="w-full p-4 "
      >
        <div className="container m-auto  pt-10 pb-20">
          <p
            className="text-[19px] sm:text-[30px] lg:text-[40px] xl:text-[54px] font-sandro text-left  ;
"
          >
            Tokenomics
          </p>
          <div className="max-w-7xl  w-[full] sm:w-[80%] md:w-[80%] mx-auto sm:mt-[-20px] lg:mt-[-30px] ">
            <Image src={tokenmetric} alt="" style={{ width: "100%" }} />
          </div>
          <div className="flex justify-center gap-x-1 lg:gap-x-4  mt-[60px] lg:mt-[120px]">
            {array?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-[linear-gradient(106.27deg,_#D56C22_16.3%,_#F89C57_87.94%),_linear-gradient(180deg,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0)_100%)] h-[50px] lg:h-[100px] w-[45px] lg:w-[70px] shadow-[inset_0px_4px_15px_0px_#FFFFFF] rounded-[8px] flex items-center justify-center text-[20px] lg:text-[45px] font-Syne Mono font-[600]"
                >
                  {item?.text}
                </div>
              );
            })}
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <p className="mx-auto text-center font-sandro text-[30px] sm:text-[40px] lg:text-[50px] ">
              Total Supply
            </p>
            <div className="mt-[40px] w-[300px] sm:w-[400px] lg:w-[500px]">
              <Image src={chat} alt="" style={{ width: "100%" }} />
            </div>
            <div className="grid  grid-cols-2 items-start lg:grid-cols-4 gap-10 mx-auto  max-w-[1100px] backdrop-blur-[1px] bg-[#371F0A]/1 mt-[50px] rounded-3xl">
              {tocArray.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-center items-center "
                  >
                    <div className="w-[80px] lg:w-[100px]">
                      <Image src={item?.img} alt="" />
                    </div>
                    <p className="mx-auto  text-center font-sandro text-[20px] ">
                      {item?.heading}
                    </p>
                    <p className="mx-auto text-center  text-[14px] w-[70%]  ">
                      {item?.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <TecnomicTable />
        <div className="max-w-[600px] w-[80%] sm:w-[80%] md:w-[80%] lg:w-[600px] mx-auto mt-[50px]">
          <Image src={howtobuy} alt="" style={{ width: "100%" }} />
        </div>
        <div className="border-2 max-w-[800px] rounded-[32px] mx-auto p-2 backdrop-blur-[5px] bg-[#371F0A]/10 mt-[30px] lg:mt-[50px]">
          <p className="text-center text-[12px] sm:text-[16px]">
            OKX Web3 wallet is recommended, don't forget to turn on the MEV
            protection while trading Terminus!
          </p>
          <p className="text-center text-[12px] sm:text-[16px] whitespace-pre-wrap break-words break-all">
            CA: 0x44e18207b6e98f4a786957954e462ed46b8c95be
          </p>
        </div>
      </div>
    </>
  );
};

export default Tokenomic;
