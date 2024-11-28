import Image from "next/image";
import elonMusk from "../../public/assets/images/elonMusk.png";
import moon from "../../public/assets/images/moon.png";
import { BiRepost } from "react-icons/bi";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { RiShare2Line } from "react-icons/ri";
import a1 from "../../public/assets/images/a1.png";
import a2 from "../../public/assets/images/a2.png";
import a3 from "../../public/assets/images/a3.png";
import a4 from "../../public/assets/images/a4.png";
import a7 from "../../public/assets/images/a7.png";
import buildingterminusbg from "../../public/assets/images/buildingterminusbg.png";
import GroupBg from "../../public/assets/images/GroupBg.png";
import BuyCard from "./BuyCard";

const imgArray = [
  {
    img: a1,
  },
  {
    img: a2,
  },
  {
    img: a3,
  },
  {
    img: a4,
  },
  {
    img: a7,
  },
];

export default function BuildingTerminus() {
  return (
    <>
      <div
        className=" mt-[-204px] px-4 w-full h-[1220px] bg-no-repeat bg-bottom md:bg-top   bg-cover z-10 "
        style={{
          backgroundImage: `url(${GroupBg.src})`, // Correctly reference the blur image
        }}
      >
        <div className=" flex items-start justify-between  container mx-auto  h-full ">
          <div className="w-[100%] relative flex flex-col justify-end h-[470px]">
            <div className="w-[280px]  absolute top-[-130px] left-[170px]">
              <div className="p-4 flex flex-col gap-x-2 bg-black w-[100%]   rounded-[14px]">
                <div className="flex gap-x-2  ">
                  <div>
                    <div className="w-[32px]">
                      <Image
                        src={elonMusk}
                        alt="elonMusk"
                        width={100} // Ensure to adjust sizes for optimization
                        height={100}
                        className="w-full rounded-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col ">
                    <h2 className="text-white text-[10px] flex items-center gap-2 font-sans">
                      Elon musk
                    </h2>
                    <span className="text-[#788FA0] text-[10px] ">
                      @elonmusk
                    </span>
                  </div>
                </div>
                <div className="flex gap-x-2 justify-center items-center">
                  <div className="h-full flex justify-center items-center w-[69px] ">
                    <div className="h-[220px] bg-white w-[1px]" />
                  </div>
                  <div>
                    <p className="text-white font-sans text-[8px]">
                      Musk said in September that SpaceX will land Starship on
                      Mars in 2026 and a crewed mission will follow in four
                      years time.
                    </p>
                    <div className="w-[173px] h-[173px] my-1">
                      <Image
                        src={moon}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-2 w-full">
                  <div className="w-[32px] md:w-[32px]">
                    <Image
                      src={elonMusk}
                      alt="elonMusk"
                      width={100} // Ensure to adjust sizes for optimization
                      height={100}
                      className="w-full rounded-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col w-full ">
                    <h2 className="text-white text-[10px] flex items-center gap-2 font-sans">
                      Elon musk
                    </h2>
                    <span className="text-[#788FA0] text-[10px] ">
                      @elonmusk
                    </span>
                    <div className="flex items-center justify-between p-2 mt-2 border-t border-t-1 w-full border-1">
                      <BsArrowUpRightCircle />
                      <BiRepost />
                      <CiHeart />
                      <RiShare2Line />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <p className="border-2 rounded-[48px] w-[278px] py-4 px-2 font-[700] text-[14px] leading-none text-center">
                  We must build Terminus - Elon Musk
                </p>
              </div>
            </div>

            <div className="mt-[140px] md:mt-11 flex justify-between w-full  md:w-[547px] backdrop-blur-[13px]  p-3 rounded-[88px] border-2">
              {imgArray.map((item, index) => {
                return (
                  <div key={index} className="w-[77px] h-[42px]">
                    <Image
                      src={item.img}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <BuyCard />
        </div>
      </div>
    </>
  );
}
