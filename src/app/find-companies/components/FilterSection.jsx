"use client";
import { useState } from "react";
import { ChevronDown, X } from "lucide-react";

export const FilterSection = ({
  showMobileFilters,
  setShowMobileFilters,
  industries = [],
  setIndustries,
  companySizes = [],
  setCompanySizes,
  toggleFilter,
}) => {
  const [showIndustry, setShowIndustry] = useState(true);
  const [showCompanySize, setShowCompanySize] = useState(true);

  const industryOptions = [
    { label: "Advertising", count: 43 },
    { label: "Business Service", count: 4 },
    { label: "Blockchain", count: 5 },
    { label: "Cloud", count: 15 },
    { label: "Consumer Tech", count: 5 },
    { label: "Education", count: 34 },
    { label: "Fintech", count: 45 },
    { label: "Gaming", count: 33 },
    { label: "Food & Beverage", count: 5 },
    { label: "Healthcare", count: 3 },
    { label: "Hosting", count: 5 },
  ];

  const companySizeOptions = [
    { label: "1-50", count: 25 },
    { label: "51-150", count: 57 },
    { label: "151-250", count: 45 },
    { label: "251-500", count: 4 },
    { label: "501-1000", count: 43 },
    { label: "1000-above", count: 23 },
  ];

  const handleApplyFilters = () => setShowMobileFilters(false);

  const clearAllFilters = () => {
    setIndustries([]);
    setCompanySizes([]);
  };

  const renderSection = (
    title,
    items,
    selected = [],
    setSelected,
    toggleSection,
    isOpen
  ) => (
    <div>
      <div
        onClick={toggleSection}
        className="flex justify-between items-center cursor-pointer mb-2"
      >
        <h3 className="font-epilogue font-[700] text-base leading-[150%] text-[#25324B]">
          {title}
        </h3>
        <ChevronDown
          strokeWidth={3}
          className={`transition-transform h-4 w-4 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="space-y-2 mt-2">
          {items.map(({ label, count }) => (
            <div key={label} className="flex items-center gap-2">
              <input
                type="checkbox"
                id={label}
                checked={selected?.includes ? selected.includes(label) : false}
                onChange={() => toggleFilter(selected, setSelected, label)}
                className="w-4 h-4 bg-[#4640DE] rounded"
              />
              <label
                htmlFor={label}
                className={`font-epilogue font-[400] text-base leading-[160%] text-[#515B6F] px-2 py-0.5 rounded cursor-pointer`}
              >
                {label} ({count})
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <div className="hidden md:block col-span-1 space-y-6 bg-white p-4 rounded-lg shadow-md">
        {renderSection(
          "Industry",
          industryOptions,
          industries,
          setIndustries,
          () => setShowIndustry(!showIndustry),
          showIndustry
        )}

        {renderSection(
          "Company Size",
          companySizeOptions,
          companySizes,
          setCompanySizes,
          () => setShowCompanySize(!showCompanySize),
          showCompanySize
        )}
      </div>

      {showMobileFilters && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setShowMobileFilters(false)}
          />
          <div className="md:hidden fixed left-0 top-0 h-full w-4/5 max-w-sm bg-white z-50 overflow-y-auto transition-transform duration-300 ease-in-out shadow-xl">
            <div className="p-5 space-y-6">
              <div className="flex justify-between items-center border-b pb-4">
                <h2 className="text-xl font-bold">Filters</h2>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>

              {renderSection(
                "Industry",
                industryOptions,
                industries,
                setIndustries,
                () => setShowIndustry(!showIndustry),
                showIndustry
              )}

              {renderSection(
                "Company Size",
                companySizeOptions,
                companySizes,
                setCompanySizes,
                () => setShowCompanySize(!showCompanySize),
                showCompanySize
              )}

              <div className="flex gap-3 pt-4 border-t sticky bottom-0 bg-white pb-4">
                <button
                  onClick={clearAllFilters}
                  className="flex-1 border border-gray-300 py-3 rounded-lg font-medium"
                >
                  Clear All
                </button>
                <button
                  onClick={handleApplyFilters}
                  className="flex-1 bg-blue-500 text-white py-3 rounded-lg font-medium"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
