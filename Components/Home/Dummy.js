import Image from "next/image";
import elonMusk from "../../public/assets/images/elonMusk.png";
import moon from "../../public/assets/images/moon.png";
import { BiRepost } from "react-icons/bi";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { RiShare2Line } from "react-icons/ri";

export default function BuildingTerminus() {
  return (
    <div className="p-[100px] bg-[#D56C22]">
      <div className="">
        <div className="p-3 flex gap-x-2 bg-black w-[20%] z-[100]  rounded-[14px]">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[32px] md:w-[32px]">
              <Image
                src={elonMusk}
                alt="elonMusk"
                width={100} // Ensure to adjust sizes for optimization
                height={100}
                className="w-full rounded-full object-contain"
              />
            </div>
            <div className="h-full bg-white w-[1px]" />
            <div className="w-[32px] md:w-[32px]">
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
            <div className="flex flex-col ">
              <h2 className="text-white text-[10px] flex items-center gap-2 font-sans">
                Elon musk
              </h2>
              <span className="text-[#788FA0] text-[10px] ">@elonmusk</span>
            </div>
            <div>
              <p className="text-white font-sans text-[8px]">
                Musk said in September that SpaceX will land Starship on Mars in
                2026 and a crewed mission will follow in four years time.
              </p>
            </div>
            <div className="w-[173px] h-[173px] my-3 mb-4">
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

            <div className="">
              <div className="flex flex-col ">
                <h2 className="text-white text-[10px] flex items-center gap-2 font-sans">
                  Elon musk
                </h2>
                <span className="text-[#788FA0] text-[10px] ">@elonmusk</span>
              </div>
              <div className="flex items-center justify-between p-2 mt-2 border-t border-t-1">
                <BsArrowUpRightCircle />
                <BiRepost />
                <CiHeart />
                <RiShare2Line />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
