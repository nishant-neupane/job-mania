import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="container px-4 sm:px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 sm:gap-8 items-center">
          <Link href="/">
            <Image
              src="/home/Header/logo.png"
              width={160}
              height={36}
              alt="Logo"
              className="w-32 sm:w-40 md:w-48 lg:w-40"
            />
          </Link>
          <div className="hidden md:flex gap-4 lg:gap-8">
            <Link href="/jobs">
              <p className="font-epilogue font-[500] text-sm sm:text-base leading-[160%] text-[#515B6F] cursor-pointer hover:text-[#4640DE] transition-colors">
                Find Jobs
              </p>
            </Link>
            <Link href="/companies">
              <p className="font-epilogue font-[500] text-sm sm:text-base leading-[160%] text-[#515B6F] cursor-pointer hover:text-[#4640DE] transition-colors">
                Browse Companies
              </p>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="font-epilogue font-[700] text-sm sm:text-base leading-[160%] text-[#4640DE] px-2 sm:px-0">
            Login
          </button>
          <div className="w-px h-6 sm:h-8 bg-[#D6DDEB]" />
          <button className="font-epilogue font-[700] text-sm sm:text-base leading-[160%] text-white bg-[#4640DE] px-3 sm:px-4 py-1 sm:py-2 rounded">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
