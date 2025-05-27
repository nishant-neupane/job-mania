import React from "react";
import { Plus, SquarePen } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    "Communication",
    "Analytics",
    "Facebook Ads",
    "Content Strategy",
    "Community Manager",
    "Content Strategy",
    "Community Manager",
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-[#D6DDEB]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-epilogue font-semibold text-xl text-[#25324B] leading-[160%]">
          Skills
        </h2>
        <div className="flex gap-2">
          <button className="p-2 border border-[#D6DDEB] hover:bg-[#4640DE] text-[#4640DE] hover:text-white hover:border-[#4640DE]">
            <Plus size={20} />
          </button>
          <button className="p-2 border border-[#D6DDEB] hover:bg-[#4640DE] text-[#4640DE] hover:text-white hover:border-[#4640DE]">
            <SquarePen size={16} />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-6 py-2.5 bg-[#F8F8FD] text-[#4640DE] font-epilogue font-[400] text-base leading-[160%]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
