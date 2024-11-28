import { howtobuy, howToBuybg, howtobuyVido } from "@/public/assets/images";
import Image from "next/image";

const HowToBuy = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${howToBuybg.src})`, // Correctly reference the blur image
        width: "100%",
        // height: "800px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "cover",
        marginTop: "-300px",
      }}
      className="w-full p-3 "
    >
      <div className="max-w-[600px] mx-auto  pt-[350px] lg:pt-[400px] bg-transparent  rounded-[20px] ">
        <Image
          src={howtobuyVido}
          alt=""
          style={{
            width: "100%",
            borderRadius: "20px",
          }}
        />
      </div>
      <div className="max-w-[700px] mx-auto  mt-[50px] lg:mt-[100px] bg-[linear-gradient(0deg,rgba(8,1,0,1)_9%,rgba(255,255,255,1)_100%)] p-[1px] rounded-2xl">
        <div className="bg-[#000] rounded-2xl p-3">
          <p className="">
            {" "}
            Terminus represents belief in Elon Musk’s vision of building Mars’
            first city, but it offers no guarantees, promises, or intrinsic
            value. The project is now fully in the hands of the community, with
            no centralized control or roadmap. Holding Terminus means joining a
            movement of dreamers, embracing the unknown, and fueling a future
            beyond Earth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
