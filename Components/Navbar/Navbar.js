"use client"; // Add this line at the very top

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const array = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Vision",
      link: "/",
    },
    {
      name: "Tokenomics",
      link: "/",
    },
    {
      name: "How To Buy",
      link: "/",
    },
  ];

  return (
    <nav className="container bg-white/30 z-50 rounded-[24px] lg:rounded-[88px] w-[98%] py-1 fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 backdrop-blur-md  ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-white text-xl font-bold">
              <div className="w-[170px] h-[40px] xl:w-[216px] xl:h-[70px] ">
                <Image
                  src={logo}
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          </div>

          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex justify-evenly gap-3 xl:gap-7">
            {array.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.link}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md  font-normal font-sandro "
                >
                  <p className="text-[12px] sm:text-[13px] xl:text-[18px]">
                    {item.name}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* Buttons visible on desktop */}
          <div className="hidden lg:flex items-center gap-4 px-4">
            <button className="border border-white text-white py-2 px-6 rounded-xl font-sandro text-[12px] sm:text-[13px] xl:text-[20px]">
              Buy Now
            </button>
            <button
              className="text-white py-2 px-6 rounded-xl font-sandro text-[12px] sm:text-[13px] xl:text-[18px]"
              style={{
                background:
                  "linear-gradient(106.27deg, #D56C22 16.3%, #F89C57 87.94%)",
              }}
            >
              Connect wallet
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden pl-5 pr-5  mt-7 ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {array.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.link}
                  className="block text-black hover:text-white px-3 py-2 rounded-md text-base font-sandro"
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Add buttons inside the mobile menu */}
            <div className="space-y-2 mt-4 flex flex-col">
              <button className="border border-white text-white py-2 px-6 rounded-xl font-sandro">
                Buy Now
              </button>
              <button
                className="text-white py-2 px-6 rounded-xl font-sandro"
                style={{
                  background:
                    "linear-gradient(106.27deg, #D56C22 16.3%, #F89C57 87.94%)",
                }}
              >
                Connect wallet
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
