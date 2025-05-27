"use client";
import React, { useState } from "react";
import { Plus, SquarePen } from "lucide-react";

const EducationSection = () => {
  const [showAll, setShowAll] = useState(false);

  const educations = [
    {
      id: 1,
      university: "Harvard University",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/29/Harvard_shield_wreath.svg",
      degree: "Bachelor of Arts - BA, Economics",
      duration: "2016 - 2020",
      description:
        "Acquired deep knowledge in theoretical and empirical economics, gaining a strong foundation in macro and microeconomic analysis.",
    },
    {
      id: 2,
      university: "Yale University",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Yale_University_Shield_1.svg",
      degree: "Master of Business Administration - MBA",
      duration: "2020 - 2022",
      description:
        "Focused on strategic management, entrepreneurship, and data-driven decision-making in a global business context.",
    },
    {
      id: 3,
      university: "Stanford University",
      logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Stanford_University_seal_2003.svg",
      degree: "Master of Science - MS, Computer Science",
      duration: "2014 - 2016",
      description:
        "Specialized in human-computer interaction and machine learning, developing scalable applications with real-world impact.",
    },
    {
      id: 4,
      university: "Massachusetts Institute of Technology (MIT)",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg",
      degree: "Bachelor of Science - BS, Electrical Engineering",
      duration: "2010 - 2014",
      description:
        "Built strong technical foundation in circuits, signal processing, and embedded systems with hands-on lab experience.",
    },
    {
      id: 5,
      university: "University of Oxford",
      logo: "https://upload.wikimedia.org/wikipedia/en/d/db/Coat_of_arms_of_the_University_of_Oxford.svg",
      degree: "Doctor of Philosophy - PhD, Artificial Intelligence",
      duration: "2022 - Present",
      description:
        "Conducting advanced research in natural language processing and neural networks with applications in education technology.",
    },
  ];

  const visibleEducations = showAll ? educations : educations.slice(0, 2);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-[#D6DDEB]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-epilogue font-semibold text-xl text-[#25324B]">
          Education
        </h2>
        <button className="p-2 border border-[#D6DDEB] hover:bg-[#4640DE] text-[#4640DE] hover:text-white hover:border-[#4640DE]">
          <Plus size={20} />
        </button>
      </div>

      {visibleEducations.map((edu, index) => (
        <div
          key={edu.id}
          className={`flex items-start gap-4 ${
            index !== visibleEducations.length - 1
              ? "pb-6 mb-6 border-b border-gray-200"
              : ""
          }`}
        >
          <img
            src={edu.logo}
            alt={edu.university}
            className="w-12 h-12 rounded-full object-cover bg-gray-100"
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="font-epilogue font-[600] text-lg leading-[160%] text-[#25324B] mb-1">
                  {edu.university}
                </h3>
                <p className="font-epilogue font-[400] text-base leading-[160%] text-[#515B6F] mb-1">
                  {edu.degree}
                </p>
                <p className="font-epilogue font-[400] text-base leading-[160%] text-[#7C8493] mb-1">
                  {edu.duration}
                </p>
              </div>
              <div>
                <button className="p-2 border border-[#D6DDEB] hover:bg-[#4640DE] text-[#4640DE] hover:text-white hover:border-[#4640DE]">
                  <SquarePen size={16} />
                </button>
              </div>
            </div>
            {edu.description && (
              <p className="font-epilogue font-[400] text-base leading-[160%] text-[#25324B] mt-2">
                {edu.description}
              </p>
            )}
          </div>
        </div>
      ))}

      {educations.length > 2 && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-[#4640DE] font-medium hover:underline"
          >
            {showAll
              ? "Show less education"
              : `Show ${educations.length - 2} more education`}
          </button>
        </div>
      )}
    </div>
  );
};

export default EducationSection;
