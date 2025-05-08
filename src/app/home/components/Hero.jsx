import { MapPin, Search } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[#f9f9fd]">
      <div className="container py-24">
        <div className="">
          <h1 className="font-clash font-[600] text-7xl leading-[110%] max-w-[480px]">
            Discover more than{" "}
            <span className="text-[#26A4FF]">
              5000+ Jobs
              <div className="pt-1">
                <Image
                  src="/Hero/underline.svg"
                  alt="underline"
                  width={455}
                  height={39}
                  className="object-contain"
                />
              </div>
            </span>
          </h1>
          <p className="font-epilogue font-[400] text-xl leading-[160%] text-[#515B6F] max-w-[500px] pt-2">
            Great platform for the job seekers that searching for new career
            heights and passionate about startups.
          </p>

          <div className="mt-8 flex flex-col justify-between md:flex-row items-stretch md:items-center gap-4 md:gap-2 bg-white rounded-lg shadow-md p-4 w-full max-w-3xl">
            <div className="flex justify-center items-center gap-4 w-1/3">
              <Search />
              <input
                type="text"
                placeholder="Job title or keyword"
                className="border-b border-[#D6DDEB] font-epilogue font-[400] text-base leading-[160%] text-[#7C8493] pb-1"
              />
            </div>
            <div className="flex justify-center items-center gap-4 w-1/3">
              <MapPin />
              <select className="border-b border-[#D6DDEB] font-epilogue font-[400] text-base leading-[160%] text-[#25324B] pb-1">
                <option>Florence, Italy</option>
                <option>Remote</option>
                <option>New York, USA</option>
              </select>
            </div>

            <button className="bg-[#4640DE] text-white font-epilogue font-[700] text-lg leading-[160%] px-6 py-3 w-1/3">
              Search my job
            </button>
          </div>

          <div className="font-epilogue font-[500] text-base leading-[160%] text-[#202430] pt-4">
            <span className="font-[400]"> Popular:</span> UI Designer, UX
            Researcher, Android, Admin
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
