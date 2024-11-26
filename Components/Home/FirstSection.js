import Image from "next/image";
import rocket from "../../public/assets/images/rocket.png";
import MARS from "../../public/assets/images/MARS.png";
import elonMusk from "../../public/assets/images/elonMusk.png";
import blur from "../../public/assets/images/blur.png";
import moon from "../../public/assets/images/moon.png";

export default function FirstSection() {
  return (
    <div
      className="flex absolute items-center justify-center  w-full h-full"
      style={{
        backgroundImage: `url(${blur.src})`, // Correctly reference the blur image
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col items-center justify-center ">
        <div className="container flex items-center justify-center ">
          <div className="">
            <div className=" flex flex-col items-center relative ">
              <p className="text-[24px] sm:text-[44px] md:text-[64px] font-sandro text-center font-Orbitron">
                The First City On
              </p>
              <div className="absolute  top-[-57px] md:top-[49px] w-[100px] h-[200px] md:w-[300px] md:h-[100px]  ">
                <Image
                  src={MARS}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-[80px] md:w-[140px] h-[170px] absolute left-[-10px] md:left-[64px] top-[-30px] md:top-[20px]">
                <Image
                  src={rocket}
                  alt="Logo"
                  className="w-full h-full object-contain"
                  style={{ transform: "rotate(-8deg)" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container flex items-center justify-center mt-[60px]">
          <span
            className="font-[18px] sm:text-[20px] text-center w-full  md:w-[800px] p-[14px] font-Orbitron"
            style={{ lineHeight: "27px" }}
          >
            The Terminus token is inspired by Elon Musk vision of establishing
            the first city on Mars. It is designed to support the development of
            a future Martian economy, empowering believers to participate in
            humanity’s next great frontier.
          </span>
        </div>
        <div className="flex  items-center justify-center mt-3">
          <button
            className="font-Orbitron"
            style={{
              paddingLeft: "24px",
              paddingRight: "24px",
              paddingTop: "17px",
              paddingBottom: "17px",
              borderRadius: "25px",
              border: "1px solid #fff",
              fontSize: "18px",
            }}
          >
            Join The Movement
          </button>
        </div>
      </div>
    </div>
  );
}
