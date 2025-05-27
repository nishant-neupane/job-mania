import React from "react";
import { MapPin, Flag, SquarePen } from "lucide-react";

const ProfileHeader = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-[#D6DDEB]">
      <div className="h-48 bg-[url('/profile/bg.png')] bg-cover bg-center relative">
        <div className="absolute top-5 right-5 flex space-x-2">
          <button className="p-2 border border-[#A8ADB7]/50 hover:bg-white text-[#F8F8FD] hover:text-black">
            <SquarePen size={24} />
          </button>
        </div>
      </div>

      <div className="px-6 mt-6 relative">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-4">
          <div className="md:absolute -top-20 left-6">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Profile"
              className="w-36 h-36 rounded-full border-[8px] border-white object-cover"
            />
          </div>

          <div className="flex flex-col justify-between flex-1">
            <div className="grid md:grid-cols-[20%_40%_40%] gap-4">
              <div className="hidden md:block"></div>
              <div className="mb-4">
                <h1 className="font-clash font-[600] text-2xl text-[#25324B] leading-[120%] mb-1">
                  John Doe
                </h1>
                <p className="font-epilogue font-[400] text-lg leading-[160%] text-[#7C8493] mb-2">
                  Product Designer at{" "}
                  <span className="font-[500] text-[#25324B]">Twitter</span>
                </p>
                <p className="font-epilogue font-[400] text-lg leading-[160%] text-[#7C8493] mb-3 flex gap-2 items-center">
                  <MapPin strokeWidth={2} />
                  <span>San Francisco, California, United States</span>
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center font-epilogue font-[600] text-sm md:text-base leading-[160%] text-[#56CDAD] bg-[#56CDAD1A] px-6 py-3">
                    <Flag size={16} className="mr-2" />
                    OPEN FOR OPPORTUNITIES
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-start md:justify-end mr-6">
                <button className="px-6 py-3 font-epilogue font-[700] text-base leading-[160%] text-[#4640DE] border-[1px] border-[#CCCCF5] hover:scale-[1.03] transition-all duration-300 ease-in-out">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
