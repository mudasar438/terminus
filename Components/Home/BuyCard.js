import Image from "next/image";
import bnb from "../../public/assets/images/bnb.png";

export default function BuyCard() {
  return (
    <>
      <div
        className="w-[80%]  flex rounded-[14px] "
        style={{
          background:
            "linear-gradient(135deg, rgba(24,24,24,1) 0%, rgba(83,68,56,1) 100%)",
        }}
      >
        <div className="w-full md:w-[54%] p-3">
          <div className="w-full  border-[1px] rounded-[24px] p-4 bg-[#121211]">
            <button className="py-2 px-3 rounded-[17px] bg-[linear-gradient(180deg,_#C1C1C1_0%,_#000000_100%)]">
              Connect Wallet
            </button>

            {/* ------------- Text ------------- */}
            <div className="flex flex-col gap-y-1">
              <div className="pt-3 flex flex-col gap-y-1">
                <div className="flex justify-between">
                  <p className="text-[12px]">Crudo Protocol Presale</p>
                  <p className="text-[#218ACB] text-[12px]">Stage 2 of 10</p>
                </div>
                <p className="text-[12px]">USDT Raised:$ 475,669</p>
                <p className="text-[12px]">
                  Tokens Sold in Stage 2 : 17,422,543{" "}
                  <span style={{ color: "#A0A0A0" }}>/ 40,000,000</span>
                </p>
                <p className="text-[12px]">Token Price : $ 0.009</p>
              </div>
              <div className="progress-container">
                <div class="progress-bar">
                  <span class="progress-text">71%</span>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between">
                  <p className="text-[12px]">0</p>
                  <p className="text-[] text-[10px]">80,000,000</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <p className="text-[14px]">Total Token Sold:</p>
                  <p className=" text-[13px]">57,422,543</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <p className="text-[14px]">Listing Price:</p>
                  <p className=" text-[13px]">$ 0.20</p>
                </div>
              </div>
            </div>
            {/* ---------------------- Buttons --------------- */}
            <div>
              <button
                className="w-[40%] py-2 px-4 mx-auto bg-white rounded-[14px] flex justify-center
                pt-3"
              >
                <Image src={bnb} alt="" className="w-[20px] object-contain" />
              </button>
            </div>
            {/* ---------------------- Input ----------------- */}
            <div className="flex flex-col gap-y-3 mt-3">
              <input
                type="number"
                placeholder="0"
                className="w-full h-[32px] rounded-[7px] text-[12px] pl-[14px]"
              />
              <input
                type="number"
                placeholder="Max CRUDO Received"
                className="w-full rounded-[7px] h-[32px] text-[12px] pl-[14px]"
              />
            </div>

            {/* ---------------------- Button ---------------- */}
            <div className="flex flex-col gap-y-3 mt-3">
              <button className="w-full h-[32px] rounded-[9px] bg-[linear-gradient(106.27deg,_#D56C22_16.3%,_#F89C57_87.94%)]">
                Select Currency
              </button>
              <button className="w-full h-[32px] rounded-[9px] bg-[linear-gradient(106.27deg,_#D56C22_16.3%,_#F89C57_87.94%)]">
                Transaction Dashboard
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[43%]  ">
          <p className="text-[39px] uppercase">
            Lorem Ipsum <br />
            <span style={{ color: "#E18949" }}>
              dummy <br /> text
            </span>
            <br /> PRESALE
          </p>
          <p className="text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
          </p>
        </div>
      </div>
    </>
  );
}
