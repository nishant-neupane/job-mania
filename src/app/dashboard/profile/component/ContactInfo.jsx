import React from "react";
import { Mail, Smartphone, Languages, SquarePen } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-[#D6DDEB]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-epilogue font-[600] text-xl lead-[120%] text-[#25324B]">
          Additional Details
        </h3>
        <button className="p-2.5 border border-[#D6DDEB] hover:bg-[#4640DE] text-[#4640DE] hover:text-white hover:border-[#4640DE]">
          <SquarePen size={16} />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex space-x-2">
          <Mail size={20} className="text-[#7C8493] mt-1" />
          <div className="flex flex-col">
            <label className="font-epilogue font-[400] text-base leading-[160%] text-[#7C8493]">
              Email
            </label>
            <span className="font-epilogue font-[400] text-base leading-[160%] text-[#25324B]">
              johndoe@gmail.com
            </span>
          </div>
        </div>

        <div className="flex space-x-2">
          <Smartphone size={20} className="text-[#7C8493] mt-1" />
          <div className="flex flex-col">
            <label className="font-epilogue font-[400] text-base leading-[160%] text-[#7C8493]">
              Phone
            </label>
            <span className="font-epilogue font-[400] text-base leading-[160%] text-[#25324B]">
              +1 (415) 555-0123
            </span>
          </div>
        </div>

        <div className="flex space-x-2">
          <Languages size={20} className="text-[#7C8493] mt-1" />
          <div className="flex flex-col">
            <label className="font-epilogue font-[400] text-base leading-[160%] text-[#7C8493]">
              Languages
            </label>
            <span className="font-epilogue font-[400] text-base leading-[160%] text-[#25324B]">
              English, French
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;