import React from "react";
import { Instagram, Twitter, Globe, SquarePen } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-[#D6DDEB]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-epilogue font-[600] text-xl lead-[120%] text-[#25324B]">
          Social Links
        </h3>
        <button className="p-2.5 border border-[#D6DDEB] hover:bg-[#4640DE] text-[#4640DE] hover:text-white hover:border-[#4640DE]">
          <SquarePen size={16} />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex space-x-2">
          <Instagram size={20} className="text-[#7C8493] mt-1" />
          <div className="flex flex-col">
            <label className="font-epilogue font-[400] text-base leading-[160%] text-[#7C8493]">
              Instagram
            </label>
            <a
              href="https://instagram.com/nishant-neupane"
              target="_blank"
              rel="noopener noreferrer"
              className="font-epilogue font-[400] text-base leading-[160%] text-[#4640DE] hover:underline"
            >
              instagram.com/nishant-neupane
            </a>
          </div>
        </div>

        <div className="flex space-x-2">
          <Twitter size={20} className="text-[#7C8493] mt-1" />
          <div className="flex flex-col">
            <label className="font-epilogue font-[400] text-base leading-[160%] text-[#7C8493]">
              Twitter
            </label>
            <a
              href="https://twitter.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="font-epilogue font-[400] text-base leading-[160%] text-[#4640DE] hover:underline"
            >
              twitter.com/nishant-neupane
            </a>
          </div>
        </div>

        <div className="flex space-x-2">
          <Globe size={20} className="text-[#7C8493] mt-1" />
          <div className="flex flex-col">
            <label className="font-epilogue font-[400] text-base leading-[160%] text-[#7C8493]">
              Website
            </label>
            <a
              href="https://johndoe.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-epilogue font-[400] text-base leading-[160%] text-[#4640DE] hover:underline"
            >
              nishantneupane488.com.np
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
