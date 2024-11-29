import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

const Footer = () => {
  return (
    <>
      <div className=" mx-auto  lg:bg-[linear-gradient(0deg,rgba(8,1,0,1)_9%,rgba(255,255,255,1)_100%)] p-[1px] rounded-t-2xl">
        <div className=" flex flex-col lg:flex-row items-center justify-center item-center lg:justify-between max-auto  bg-[#000] rounded-t-2xl p-3 gap-y-6">
          <div>2024 — Terminus</div>
          <div className="flex gap-8">
            <span>build</span>
            <span>Ecosystem</span>
            <span>Careers</span>
            <span>Documentation</span>
          </div>
          <div className="flex gap-6 ">
            <FaDiscord className="text-[25px]" />
            <FaTwitter className="text-[25px]" />
            <FaTelegramPlane className="text-[25px]" />
            <ImGithub className="text-[25px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
