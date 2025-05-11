"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  // Helper function to determine if a link is active
  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <div className="container pt-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 sm:gap-8 items-center">
          <Link href="/">
            <Image
              src="/home/Header/logo.png"
              width={160}
              height={36}
              alt="Logo"
              className="w-32 sm:w-40 md:w-48 lg:w-40 mb-4"
            />
          </Link>
          <div className="hidden md:flex gap-4 lg:gap-8">
            <Link href="/find-jobs">
              <p
                className={`font-epilogue font-[500] text-sm sm:text-base leading-[160%] cursor-pointer transition-colors ${
                  isActive("/find-jobs")
                    ? "text-[#4640DE] border-b-4 border-[#4640DE] pb-4"
                    : "text-[#515B6F] hover:text-[#4640DE] pb-4"
                }`}
              >
                Find Jobs
              </p>
            </Link>
            <Link href="/find-companies">
              <p
                className={`font-epilogue font-[500] text-sm sm:text-base leading-[160%] cursor-pointer transition-colors ${
                  isActive("/find-companies")
                    ? "text-[#4640DE] border-b-4 border-[#4640DE] pb-4"
                    : "text-[#515B6F] hover:text-[#4640DE] pb-4"
                }`}
              >
                Browse Companies
              </p>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 mb-4">
          <button className="font-epilogue font-[700] text-sm sm:text-base leading-[160%] text-[#4640DE] px-2 sm:px-0">
            Login
          </button>
          <div className="w-px h-6 sm:h-8 bg-[#D6DDEB]" />
          <button className="font-epilogue font-[700] text-sm sm:text-base leading-[160%] text-white bg-[#4640DE] px-3 sm:px-4 py-1 sm:py-2">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
