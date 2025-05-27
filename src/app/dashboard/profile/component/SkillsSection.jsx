import React from "react";
import { Plus, SquarePen } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    "Communication",
    "Analytics",
    "Facebook Ads",
    "Content Strategy",
    "Community Manager",
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-[#D6DDEB]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded">
            <Plus size={16} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <SquarePen size={24} />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;