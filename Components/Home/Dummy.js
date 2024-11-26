<div className="flex  gap-2 sm:gap-5 ">
  {/* Left Section */}
  <div className="flex flex-col">
    <div className="flex gap-x-[10px] items-center">
      <div className="w-[27px] md:w-[27px]">
        <Image
          src={elonMusk}
          alt="elonMusk"
          width={100} // Ensure to adjust sizes for optimization
          height={100}
          className="w-full rounded-full object-contain"
        />
      </div>
      <div className="flex flex-col border-2">
        <h2 className="text-white text-[10px] flex items-center gap-2 font-sans">
          Elon musk
        </h2>
        <span className="text-[#4B4D51] text-[10px] ">@elonmusk</span>
      </div>
      {/* <div className="h-full bg-white w-[1px]" /> */}
    </div>
    <div className="h-full bg-white w-[1px]" />

    <div className="flex gap-x-[10px] items-center">
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
  </div>

  {/* Right Section */}
  <div className="flex flex-col gap-3 w-full">
    {/* Top Info */}
    <div className="w-full">
      <h3 className="text-white font-sans text-[8px]">
        Musk said in September that SpaceX will land Starship on Mars in
        2026 and a crewed mission will follow in four years time.
      </h3>
    </div>

    {/* Content Box */}
    <div>
      <div className="w-[163px] h-[163px]">
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
</div>;
