import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="container py-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-8 items-center">
          <Link href="/">
            <Image src="/Header/logo.png" width={160} height={36} alt="Logo" />
          </Link>
          <div className="flex gap-8">
            <Link href="/jobs">
              <p className="font-epilogue font-[500] text-base leading-[160%] text-[#515B6F] cursor-pointer hover:text-[#4640DE]">
                Find Jobs
              </p>
            </Link>
            <Link href="/companies">
              <p className="font-epilogue font-[500] text-base leading-[160%] text-[#515B6F] cursor-pointer hover:text-[#4640DE]">
                Browse Companies
              </p>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="font-epilogue font-[700] text-base leading-[160%] text-[#4640DE]">
            Login
          </button>
          <div className="w-px h-8 bg-[#D6DDEB]" />
          <button className="font-epilogue font-[700] text-base leading-[160%] text-white bg-[#4640DE] px-4 py-2 rounded">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
