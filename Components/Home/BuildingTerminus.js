import Image from "next/image";
import elonMusk from "../../public/assets/images/elonMusk.png";

export default function BuildingTerminus() {
  return (
    <div className="p-[100px] bg-[#D56C22]">
      <div className="">
        <div className=" border-2 p-3  bg-black h-[310px] z-[100] w-[273px] rounded-[14px]">
          <div className="flex gap-x-2">
            <div className="w-[27px] md:w-[27px]">
              <Image
                src={elonMusk}
                alt="elonMusk"
                width={100} // Ensure to adjust sizes for optimization
                height={100}
                className="w-full rounded-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-white text-[10px] flex items-center gap-2 font-sans">
                Elon musk
              </h2>
              <span className="text-[#4B4D51] text-[10px] ">@elonmusk</span>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
