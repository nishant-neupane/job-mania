import React from "react";
import { SquarePen } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-[#D6DDEB]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-epilogue font-[600] text-xl lead-[120%] text-[#25324B]">
          About Me
        </h3>
        <button className="p-2.5 border border-[#D6DDEB] hover:bg-[#4640DE] text-[#4640DE] hover:text-white hover:border-[#4640DE]">
          <SquarePen size={16} />
        </button>
      </div>
      <p className="font-epilogue font-[400] text-base leading-[160%] text-[#515B6F]">
        I'm a product designer + filmmaker currently working remotely at Twitter
        from beautiful Manchester, United Kingdom. I'm passionate about
        designing digital products that have a positive impact on the world.{" "}
        <br /> <br />
        For 10 years, I've specialised in interface, experience & interaction
        design as well as working in user research and product strategy for
        product agencies, big tech companies & start-ups.
      </p>
    </div>
  );
};

export default AboutSection;
