import React from "react";
import { Plus, SquarePen } from "lucide-react";

const EducationSection = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-[#D6DDEB]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Education</h2>
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded">
            <Plus size={16} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">
            <SquarePen size={24} />
          </button>
        </div>
      </div>

      {/* Education Item 1 */}
      <div className="flex space-x-4 mb-6 pb-6 border-b border-gray-200">
        <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-xs">H</span>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">Harvard University</h3>
          <p className="text-gray-700 mb-1">
            Bachelor of Arts - BA, Economics
          </p>
          <p className="text-sm text-gray-600 mb-3">2016 - 2020</p>
          <p className="text-sm text-gray-700">
            Got acquainted with the fundamental theoretical and empirical
            methods and evidence on which the economic theory is founded.
            Gained extensive knowledge and understanding of the macroeconomic
            and microeconomic behaviour.
          </p>
        </div>
      </div>

      {/* Education Item 2 */}
      <div className="flex space-x-4">
        <div className="w-12 h-12 bg-blue-900 rounded flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-xs">Y</span>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">Yale University</h3>
          <p className="text-gray-700 mb-1">
            Master of Business Administration - MBA
          </p>
          <p className="text-sm text-gray-600">2020 - 2022</p>
        </div>
      </div>

      <button className="text-blue-600 text-sm font-medium mt-4 hover:underline">
        Show 2 more educations
      </button>
    </div>
  );
};

export default EducationSection;