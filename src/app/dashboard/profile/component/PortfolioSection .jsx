import React from "react";
import { SquarePen } from "lucide-react";

const PortfolioSection = () => {
  const portfolioItems = [
    { title: "Microsoft Office & Excel", subtitle: "Data analysis" },
    { title: "Smartly", subtitle: "Dashboard" },
    { title: "Goal Mapping", subtitle: "Project Reports" },
    { title: "Patient Project", subtitle: "Management App" },
    { title: "Report Stack", subtitle: "Stack" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-[#D6DDEB]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Portfolio</h2>
        <button className="p-2 hover:bg-gray-100 rounded">
          <SquarePen size={24} />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow"
          >
            <div className="w-full h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded mb-2"></div>
            <h4 className="font-medium text-sm text-gray-900">{item.title}</h4>
            <p className="text-xs text-gray-600">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;