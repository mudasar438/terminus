import Image from "next/image";
import elonMusk from "../../public/assets/images/elonMusk.png";
import moon from "../../public/assets/images/moon.png";
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
import { BiRepost } from "react-icons/bi";
import { term } from "@/public/assets/images";

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
        className=" mt-[-204px] px-4 w-full h-full bg-no-repeat bg-bottom md:bg-center md-[170px] xl:pb-[0px]   bg-cover z-10"
        style={{
          backgroundImage: `url(${GroupBg.src})`, // Correctly reference the blur image
        }}
      >
        <div className=" flex flex-col lg:flex-row items-start justify-between  container mx-auto  gap-y-10">
          <div className=" w-full lg:w-[40%] xl:w-[50%] relative flex flex-col justify-end h-[470px] ">
            <div className="sm:w-[230px] xl:w-[280px] w-full  lg:absolute top-[-130px] xl:left-[170px] mx-auto">
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
                    <div className="h-[150px] xl:h-[220px] bg-white w-[1px]" />
                  </div>
                  <div>
                    <p className="text-white font-sans text-[8px]">
                      Musk said in September that SpaceX will land Starship on
                      Mars in 2026 and a crewed mission will follow in four
                      years time.
                    </p>
                    <div className="w-[103px] h-[100px] xl:h-[173px] my-1">
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
                <p className="rounded-[48px] w-full sm:w-[278px] py-4 px-2 font-[700] text-[14px] leading-none text-center">
                  We must build Terminus - Elon Musk
                </p>
              </div>
            </div>

            <div className="mt-[40px] md:mt-11 flex justify-between  mx-auto lg:mx-0 w-full md:w-[70%] lg:w-[85%] backdrop-blur-[13px]  p-3 rounded-[88px]">
              {imgArray.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" w-[55px] h-[28px] xl:w-[77px] xl:h-[42px]"
                  >
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
          <div className="w-full lg:w-[60%] xl:w-[50%] flex justify-end">
            <BuyCard />
          </div>
        </div>
        <div className="text-center container mx-auto max-w-[1100px]  ">
          <p
            className="text-[19px] sm:text-[30px] lg:text-[40px] xl:text-[64px] font-sandro text-left mt-5 lg:mt-[-30px] ;
"
          >
            Building
          </p>
          <div className="max-w-7xl  w-[full] sm:w-[60%] md:w-[65%] mx-auto sm:mt-[-20px] lg:mt-[-30px]   ">
            <Image src={term} alt="" style={{ width: "100%" }} />
          </div>
          <div className=" text-lg   mt-20">
            Elon Musk envisions Mars as the next frontier for humanity, a
            critical step in our evolution into a multi-planetary species. His
            goal is to establish Terminus, the first sustainable city on the Red
            Planet—a hub of innovation, sustainability, and exploration.
            Leveraging SpaceX’s cutting-edge technology, Musk aims to transport
            humanity to Mars and lay the foundation for a self-sustaining
            colony, ensuring the long-term survival of our species. The Terminus
            token serves as a gateway for you to participate in this historic
            journey, supporting the mission to bring humanity to Mars and build
            a future beyond Earth.
          </div>
          <div className="mt-4 text-lg leading-relaxed ">
            More than just another cryptocurrency, the Terminus token is a
            digital asset directly inspired by Elon Musk’s vision. As SpaceX
            moves closer to realizing this ambitious goal, Terminus represents
            the financial infrastructure for a future Martian economy. It
            symbolizes a shared belief in this transformative mission, giving
            holders the opportunity to participate in building the first city on
            Mars. Aligned with Musk’s vision of a decentralized, self-sustaining
            society on Mars, where resources, technology, and innovation flow
            freely, the Terminus token is at the forefront of making this vision
            a reality. By holding Terminus, you become part of a global movement
            that actively supports and accelerates humanity’s journey to Mars.
          </div>
        </div>
      </div>
    </>
  );
}
