"use client";
import React, { useState } from "react";
import { Plus, SquarePen } from "lucide-react";

const ExperienceSection = () => {
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      id: 1,
      company: "Twitter",
      logo: "https://upload.wikimedia.org/wikipedia/en/9/9f/Twitter_bird_logo_2012.svg",
      role: "Product Designer",
      type: "Full-Time",
      location: "Manchester, UK",
      duration: "Jun 2019 – Present",
      period: "1y 1m",
      description:
        "Created and executed social media plan for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads.",
    },
    {
      id: 2,
      company: "GoDaddy",
      logo: "https://cdn.worldvectorlogo.com/logos/godaddy-2.svg",
      role: "Growth Marketing Designer",
      type: "Full-Time",
      location: "Manchester, UK",
      duration: "Jun 2011 – May 2019",
      period: "8y",
      description:
        "Developed digital marketing strategies, activation plans, proposals, contests and promotions for client initiatives.",
    },
    {
      id: 3,
      company: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Logo_2021.svg",
      role: "UX Designer",
      type: "Full-Time",
      location: "London, UK",
      duration: "May 2019 – May 2021",
      period: "2y",
      description:
        "Led cross-functional teams to create accessible design systems across Meta's web apps for a better user experience.",
    },
    {
      id: 4,
      company: "Shopify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Shopify_logo_2018.svg",
      role: "Design Lead",
      type: "Contract",
      location: "Remote",
      duration: "Jan 2021 – Dec 2022",
      period: "2y",
      description:
        "Directed e-commerce platform redesign, improving conversion by 15% using modern design practices and A/B testing.",
    },
    {
      id: 5,
      company: "Figma",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      role: "Interface Designer",
      type: "Full-Time",
      location: "Berlin, Germany",
      duration: "Jan 2023 – Present",
      period: "1y 5m",
      description:
        "Crafted collaborative UI/UX workflows and helped launch a new prototyping tool used by over 100,000 users.",
    },
  ];

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 2);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-[#D6DDEB]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-epilogue font-semibold text-xl text-[#25324B]">
          Experiences
        </h2>
        <button className="p-2 border border-[#D6DDEB] hover:bg-[#4640DE] text-[#4640DE] hover:text-white hover:border-[#4640DE]">
          <Plus size={20} />
        </button>
      </div>

      {visibleExperiences.map((exp, index) => (
        <div
          key={exp.id}
          className={`flex items-start gap-4 ${
            index !== visibleExperiences.length - 1
              ? "pb-6 mb-6 border-b border-gray-200"
              : ""
          }`}
        >
          <img
            src={exp.logo}
            alt={exp.company}
            className="w-12 h-12 rounded-full object-cover bg-gray-100"
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <div>
                <h3 className="font-epilogue font-[600] text-lg leading-[160%] text-[#25324B] mb-1">
                  {exp.role}
                </h3>
                <p className="font-epilogue font-[400] text-base leading-[160%] text-[#515B6F] mb-1">
                  <span className="font-[500] text-[#25324B]">
                    {exp.company}
                  </span>{" "}
                  <span className="text-[#A8ADB7] text-sm">●</span> {exp.type}{" "}
                  <span className="text-[#A8ADB7] text-sm">●</span>{" "}
                  {exp.duration} ({exp.period})
                </p>
                <p className="font-epilogue font-[400] text-base leading-[160%] text-[#7C8493] mb-1">
                  {exp.location}
                </p>
              </div>
              <div>
                <button className="p-2 border border-[#D6DDEB] hover:bg-[#4640DE] text-[#4640DE] hover:text-white hover:border-[#4640DE]">
                  <SquarePen size={16} />
                </button>
              </div>
            </div>
            <p className="font-epilogue font-[400] text-base leading-[160%] text-[#25324B] mt-2">
              {exp.description}
            </p>
          </div>
        </div>
      ))}

      {experiences.length > 2 && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-[#4640DE] font-medium hover:underline"
          >
            {showAll
              ? "Show less experiences"
              : `Show ${experiences.length - 2} more experiences`}
          </button>
        </div>
      )}
    </div>
  );
};

export default ExperienceSection;
