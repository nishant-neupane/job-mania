"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  MapPin,
  X,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

const tagColors = {
  Technology: "border-[#FFB836] border-[1px] text-[#FFB836]",
  Finance: "border-[#4640DE] border-[1px] text-[#4640DE]",
  Ecommerce: "bg-[#FF65501A] text-[#FF6550]",
  Healthcare: "border-[#00B8D9] border-[1px] text-[#00B8D9]",
  Education: "border-[#36B37E] border-[1px] text-[#36B37E]",
};

// Utility functions to calculate counts from companiesData
const getIndustryCounts = (companies) => {
  const counts = {};
  companies.forEach((company) => {
    counts[company.industry] = (counts[company.industry] || 0) + 1;
  });
  return ["Technology", "Finance", "Ecommerce", "Healthcare", "Education"].map(
    (industry) => ({
      label: industry,
      count: counts[industry] || 0,
    })
  );
};

const getSizeCounts = (companies) => {
  const counts = {};
  companies.forEach((company) => {
    counts[company.size] = (counts[company.size] || 0) + 1;
  });
  return ["1-50", "51-200", "201-500", "501-1000", "1000+"].map((size) => ({
    label: size,
    count: counts[size] || 0,
  }));
};

const getLocationCounts = (companies) => {
  const counts = {};
  companies.forEach((company) => {
    counts[company.location] = (counts[company.location] || 0) + 1;
  });
  return [
    "Kathmandu, Nepal",
    "Lalitpur, Nepal",
    "Bhaktapur, Nepal",
    "Pokhara, Nepal",
    "Other",
  ].map((location) => ({
    label: location,
    count: counts[location] || 0,
  }));
};

const companiesData = [
  {
    id: 1,
    name: "CloudFactory",
    description: "Cloud-based workforce solutions for global businesses",
    location: "Kathmandu, Nepal",
    industry: "Technology",
    size: "501-1000",
    jobs: 12,
    founded: 2010,
    logo: "/companies/sample.png",
    tags: ["Technology", "AI"],
  },
  {
    id: 2,
    name: "F1Soft International",
    description: "Digital payment solutions provider",
    location: "Kathmandu, Nepal",
    industry: "Finance",
    size: "1000+",
    jobs: 8,
    founded: 2004,
    logo: "/companies/sample.png",
    tags: ["Finance", "Banking"],
  },
  {
    id: 3,
    name: "Daraz Nepal",
    description: "Online shopping and e-commerce platform",
    location: "Kathmandu, Nepal",
    industry: "Ecommerce",
    size: "1000+",
    jobs: 15,
    founded: 2012,
    logo: "/companies/sample.png",
    tags: ["Ecommerce", "Retail"],
  },
  {
    id: 4,
    name: "Leapfrog Technology",
    description: "Software development and IT services",
    location: "Lalitpur, Nepal",
    industry: "Technology",
    size: "201-500",
    jobs: 7,
    founded: 2010,
    logo: "/companies/sample.png",
    tags: ["Technology", "Software"],
  },
  {
    id: 5,
    name: "Mediciti Hospital",
    description: "Advanced healthcare services provider",
    location: "Bhaktapur, Nepal",
    industry: "Healthcare",
    size: "501-1000",
    jobs: 5,
    founded: 2015,
    logo: "/companies/sample.png",
    tags: ["Healthcare", "Medical"],
  },
  {
    id: 6,
    name: "Cotiviti Nepal",
    description: "Healthcare analytics and payment accuracy solutions",
    location: "Kathmandu, Nepal",
    industry: "Healthcare",
    size: "1000+",
    jobs: 9,
    founded: 2005,
    logo: "/companies/sample.png",
    tags: ["Healthcare", "Analytics"],
  },
  {
    id: 7,
    name: "Fusemachines",
    description: "AI solutions and education provider",
    location: "Kathmandu, Nepal",
    industry: "Technology",
    size: "51-200",
    jobs: 6,
    founded: 2013,
    logo: "/companies/sample.png",
    tags: ["Technology", "AI"],
  },
  {
    id: 8,
    name: "Deerwalk",
    description: "Healthcare analytics and software solutions",
    location: "Lalitpur, Nepal",
    industry: "Healthcare",
    size: "201-500",
    jobs: 4,
    founded: 2010,
    logo: "/companies/sample.png",
    tags: ["Healthcare", "Technology"],
  },
  {
    id: 9,
    name: "Verisk Nepal",
    description: "Data analytics for insurance industry",
    location: "Bhaktapur, Nepal",
    industry: "Finance",
    size: "201-500",
    jobs: 3,
    founded: 2012,
    logo: "/companies/sample.png",
    tags: ["Finance", "Analytics"],
  },
  {
    id: 10,
    name: "Karkhana",
    description: "STEAM education and maker space",
    location: "Kathmandu, Nepal",
    industry: "Education",
    size: "1-50",
    jobs: 2,
    founded: 2015,
    logo: "/companies/sample.png",
    tags: ["Education", "STEAM"],
  },
];

function HeroSection({
  searchTerm,
  setSearchTerm,
  locationTerm,
  setLocationTerm,
}) {
  const [recentSearches, setRecentSearches] = useState([]);
  const [showRecentSearches, setShowRecentSearches] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const searchRef = useRef(null);
  const locationRef = useRef(null);
  const router = useRouter();

  const locations = [
    "Kathmandu, Nepal",
    "Lalitpur, Nepal",
    "Bhaktapur, Nepal",
    "Pokhara, Nepal",
    "Biratnagar, Nepal",
    "Birgunj, Nepal",
  ];

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const trimmed = searchTerm.trim();
      if (!recentSearches.includes(trimmed)) {
        const updated = [trimmed, ...recentSearches.slice(0, 4)];
        setRecentSearches(updated);
        localStorage.setItem("recentCompanySearches", JSON.stringify(updated));
      }
    }

    setShowRecentSearches(false);
    setShowLocationDropdown(false);

    const query = `?search=${encodeURIComponent(
      searchTerm
    )}&location=${encodeURIComponent(locationTerm)}`;
    router.push(`/search${query}`);
  };

  const handleRecentSearchClick = (term) => {
    setSearchTerm(term);
    setShowRecentSearches(false);
  };

  const handleLocationSelect = (location) => {
    setLocationTerm(location);
    setShowLocationDropdown(false);
  };

  const clearSearch = () => {
    setSearchTerm("");
    searchRef.current?.focus();
  };

  const clearLocation = () => {
    setLocationTerm("");
    locationRef.current?.focus();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!searchRef.current?.contains(event.target)) {
        setShowRecentSearches(false);
      }
      if (!locationRef.current?.contains(event.target)) {
        setShowLocationDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("recentCompanySearches");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setRecentSearches(parsed);
        }
      } catch (e) {
        console.error("Error parsing recent searches:", e);
      }
    }
  }, []);

  return (
    <div className="bg-[#F8F8FD] ">
      <div className="container text-center py-12 flex flex-col justify-center ">
        <h1 className="font-clash font-[600] text-5xl text-[#25324B] leading-[110%] pb-6">
          Find your{" "}
          <span className="relative">
            <span className="text-[#26A4FF] z-10 relative">dream company</span>
            <Image
              src="/home/Hero/underline.svg"
              alt="underline"
              width={355}
              height={39}
              className="absolute left-0 -bottom-4 object-contain"
            />
          </span>
        </h1>
        <p className="font-epilogue font-[400] text-lg leading-[160%] text-[#515B6F] mb-4">
          Discover companies that match your career aspirations
        </p>

        <div className="w-full flex items-center justify-center pt-6 pb-3">
          <div
            className="flex flex-col md:flex-row items-stretch justify-between bg-white px-6 py-6 w-full gap-4 md:gap-2"
            style={{
              boxShadow: `
      0px 2.71px 4.4px 0px #C0C0C007,
      0px 6.86px 11.12px 0px #C0C0C00A,
      0px 14px 22.68px 0px #C0C0C00C,
      0px 28.84px 46.72px 0px #C0C0C00F,
      0px 79px 128px 0px #C0C0C017
    `,
            }}
          >
            <div className="flex-1 relative" ref={searchRef}>
              <div className="flex items-center w-full border-b border-[#D6DDEB] pb-2">
                <Search className="min-w-5 text-[#25324B]" />
                <input
                  type="text"
                  placeholder="Company name or keyword"
                  className="w-full p-2 pl-3 outline-none text-[#25324B]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setShowRecentSearches(true)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                {searchTerm && (
                  <button
                    onClick={clearSearch}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <X size={16} className="text-[#25324B]" />
                  </button>
                )}
              </div>

              {showRecentSearches && recentSearches.length > 0 && (
                <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg py-2 max-h-60 overflow-auto">
                  <p className="px-4 py-1 text-xs font-medium text-gray-500 uppercase">
                    Recent Searches
                  </p>
                  {recentSearches.map((term, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                      onClick={() => handleRecentSearchClick(term)}
                    >
                      <Search size={14} className="mr-2 text-[#25324B]" />
                      <span>{term}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex-1 relative" ref={locationRef}>
              <div className="flex items-center w-full border-b border-[#D6DDEB] pb-2">
                <MapPin className="min-w-5 text-[#25324B]" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full p-2 pl-3 outline-none text-[#25324B]"
                  value={locationTerm}
                  onChange={(e) => setLocationTerm(e.target.value)}
                  onFocus={() => setShowLocationDropdown(true)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                {locationTerm && (
                  <button
                    onClick={clearLocation}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <X size={16} className="text-gray-400" />
                  </button>
                )}
              </div>

              {showLocationDropdown && (
                <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg py-2 max-h-60 overflow-auto">
                  {locations
                    .filter((loc) =>
                      loc.toLowerCase().includes(locationTerm.toLowerCase())
                    )
                    .map((location, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                        onClick={() => handleLocationSelect(location)}
                      >
                        <MapPin size={14} className="mr-2 text-gray-400" />
                        <span>{location}</span>
                      </div>
                    ))}
                </div>
              )}
            </div>

            <button
              onClick={handleSearch}
              className="bg-[#4640DE] hover:bg-[#3530C0] transition-colors duration-300 text-white px-6 py-3 font-medium flex items-center justify-center gap-2"
            >
              <Search size={18} />
              <span>Search</span>
            </button>
          </div>
        </div>
        <p className="font-epilogue font-[400] text-base leading-[160%] text-[#515B6F] text-center sm:text-left">
          Popular : Tech, Finance, Healthcare, Education, Ecommerce
        </p>
      </div>
    </div>
  );
}

function MobileFilterButton({ showMobileFilters, setShowMobileFilters }) {
  return (
    <div className="md:hidden">
      <button
        onClick={() => setShowMobileFilters(true)}
        className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
      >
        <Filter size={18} />
        <span>Filter Companies</span>
      </button>
    </div>
  );
}

function CompanyList({
  filteredCompanies,
  sortOption,
  setSortOption,
  currentPage,
  setCurrentPage,
  setSearchTerm,
  setLocationTerm,
  setIndustries,
  setSizes,
  setLocations,
}) {
  const [viewMode, setViewMode] = useState("list");
  const companiesPerPage = viewMode === "list" ? 5 : 6;
  const sortedCompanies = [...filteredCompanies].sort((a, b) => {
    if (sortOption === "Newest") {
      return b.founded - a.founded;
    } else {
      return b.jobs - a.jobs;
    }
  });

  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = sortedCompanies.slice(
    indexOfFirstCompany,
    indexOfLastCompany
  );
  const totalPages = Math.ceil(sortedCompanies.length / companiesPerPage);

  return (
    <div className="col-span-3 flex flex-col min-h-[80vh]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="font-clash font-[600] text-[32px] leading-[120%] text-[#25324B] pb-1">
            All Companies
          </h2>
          <p className="font-epilogue font-[400] text-base leading-[160%] text-[#7C8493]">
            Showing {filteredCompanies.length} results
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="font-epilogue font-[400] text-base leading-[160%] text-[#7C8493]">
            Sort by:{" "}
            <select
              className="font-epilogue font-[500] text-base leading-[160%] text-[#25324B] focus:outline-none"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option>Most relevant</option>
              <option>Newest</option>
              <option>Most jobs</option>
            </select>
          </div>
          <div className="hidden sm:block h-[24px] w-[1px] bg-[#202430]/50" />
          <div className="hidden sm:flex justify-center items-center space-x-2 p-1 rounded-md">
            <button
              className={`p-1 rounded ${
                viewMode === "grid" ? "bg-white shadow-sm" : "hover:bg-white"
              }`}
              onClick={() => setViewMode("grid")}
            >
              <svg
                className={`w-8 h-8 ${
                  viewMode === "grid" ? "text-indigo-600" : "text-gray-400"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 4h4v4H4V4zm0 6h4v4H4v-4zm6-6h4v4h-4V4zm0 6h4v4h-4v-4z" />
              </svg>
            </button>
            <button
              className={`p-1 rounded ${
                viewMode === "list" ? "bg-white shadow-sm" : "hover:bg-white"
              }`}
              onClick={() => setViewMode("list")}
            >
              <svg
                className={`w-6 h-6 ${
                  viewMode === "list" ? "text-indigo-600" : "text-gray-400"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3 5h14a1 1 0 100-2H3a1 1 0 100 2zm0 6h14a1 1 0 100-2H3a1 1 0 100 2zm0 6h14a1 1 0 100-2H3a1 1 0 100 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Company Grid/List */}
      <div
        className={`flex-1 ${
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 gap-4"
            : "space-y-4"
        }`}
      >
        {currentCompanies.length > 0 ? (
          currentCompanies.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
              viewMode={viewMode}
            />
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">
              No companies found matching your criteria
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => {
                setSearchTerm("");
                setLocationTerm("");
                setIndustries([]);
                setSizes([]);
                setLocations([]);
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Pagination Below Company Cards */}
      {filteredCompanies.length > companiesPerPage && (
        <div className="mt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
}

function CompanyCard({ company, viewMode }) {
  return (
    <div className="flex items-start gap-6 border-[1px] border-[#D6DDEB] p-6">
      {/* Company Info Section */}
      <div>
        <Image
          src={company.logo}
          alt={company.name}
          width={64}
          height={64}
          className="rounded"
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-epilogue font-[600] text-lg !leading-[160%] text-[#25324B]">
          {company.name}
        </h3>
        <p className="font-epilogue font-[400] text-sm leading-[160%] text-[#515B6F] pb-2">
          {company.description}
        </p>
        <p className="font-epilogue font-[400] text-base leading-[160%] text-[#515B6F] pb-3 flex items-center">
          <MapPin size={16} className="mr-1" /> {company.location}
        </p>
        <div className="flex gap-2 divide-x-2 divide-[#D6DDEB]">
          <span className="font-epilogue font-[600] text-sm leading-[160%] bg-[#56CDAD1A] text-[#56CDAD] px-3 py-1 rounded-full">
            {company.industry}
          </span>
          <div className="hidden sm:flex justify-center items-center sm:flex-row gap-2 pl-2">
            {company.tags.map((tag) => (
              <span
                key={tag}
                className={`font-epilogue font-[600] text-sm leading-[160%] px-3 py-1 rounded-full ${tagColors[tag]}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center mt-4">
        <div className="text-center mb-4">
          <p className="font-epilogue font-[600] text-lg text-[#25324B]">
            {company.jobs}
          </p>
          <p className="font-epilogue font-[400] text-sm text-[#7C8493]">
            Open jobs
          </p>
        </div>
        <button className="bg-[#4640DE] text-white font-medium w-full py-2 rounded-sm hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer">
          View Jobs
        </button>
      </div>
    </div>
  );
}

function Pagination({ currentPage, totalPages, setCurrentPage }) {
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 4) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 3) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center mt-6 items-center gap-2 text-sm text-gray-700">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="disabled:opacity-50"
      >
        <ChevronLeft size={18} />
      </button>

      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-2">
            ...
          </span>
        ) : (
          <button
            key={page}
            className={`w-8 h-8 rounded ${
              page === currentPage
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-200"
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        )
      )}

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="disabled:opacity-50"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

function FilterSection({
  showMobileFilters,
  setShowMobileFilters,
  industries,
  setIndustries,
  sizes,
  setSizes,
  locations,
  setLocations,
  toggleFilter,
  companiesData,
}) {
  const [showIndustry, setShowIndustry] = useState(true);
  const [showSize, setShowSize] = useState(true);
  const [showLocation, setShowLocation] = useState(true);
  const industryOptions = getIndustryCounts(companiesData);
  const sizeOptions = getSizeCounts(companiesData);
  const locationOptions = getLocationCounts(companiesData);

  const handleApplyFilters = () => setShowMobileFilters(false);

  const clearAllFilters = () => {
    setIndustries([]);
    setSizes([]);
    setLocations([]);
  };

  const renderSection = (
    title,
    items,
    selected,
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
                checked={selected.includes(label)}
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
          sizeOptions,
          sizes,
          setSizes,
          () => setShowSize(!showSize),
          showSize
        )}

        {renderSection(
          "Location",
          locationOptions,
          locations,
          setLocations,
          () => setShowLocation(!showLocation),
          showLocation
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
                sizeOptions,
                sizes,
                setSizes,
                () => setShowSize(!showSize),
                showSize
              )}

              {renderSection(
                "Location",
                locationOptions,
                locations,
                setLocations,
                () => setShowLocation(!showLocation),
                showLocation
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
}

export default function CompanyBoard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [industries, setIndustries] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [sortOption, setSortOption] = useState("Most relevant");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleFilter = (filterArray, setFilterArray, value) => {
    if (filterArray.includes(value)) {
      setFilterArray(filterArray.filter((item) => item !== value));
    } else {
      setFilterArray([...filterArray, value]);
    }
  };

  const filteredCompanies = companiesData.filter((company) => {
    const matchesSearch =
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesLocation = company.location
      .toLowerCase()
      .includes(locationTerm.toLowerCase());

    const matchesIndustry =
      industries.length === 0 || industries.includes(company.industry);

    const matchesSize = sizes.length === 0 || sizes.includes(company.size);

    const matchesLocationFilter =
      locations.length === 0 ||
      locations.some((loc) => {
        if (loc === "Other") {
          return ![
            "Kathmandu, Nepal",
            "Lalitpur, Nepal",
            "Bhaktapur, Nepal",
            "Pokhara, Nepal",
          ].includes(company.location);
        }
        return company.location === loc;
      });

    return (
      matchesSearch &&
      matchesLocation &&
      matchesIndustry &&
      matchesSize &&
      matchesLocationFilter
    );
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, locationTerm, industries, sizes, locations, sortOption]);

  useEffect(() => {
    if (showMobileFilters) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileFilters]);

  return (
    <div className="">
      <HeroSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        locationTerm={locationTerm}
        setLocationTerm={setLocationTerm}
      />

      <div className=" container grid grid-cols-1 md:grid-cols-4 gap-y-6 md:gap-6 pt-12">
        <MobileFilterButton
          showMobileFilters={showMobileFilters}
          setShowMobileFilters={setShowMobileFilters}
        />

        <FilterSection
          showMobileFilters={showMobileFilters}
          setShowMobileFilters={setShowMobileFilters}
          industries={industries}
          setIndustries={setIndustries}
          sizes={sizes}
          setSizes={setSizes}
          locations={locations}
          setLocations={setLocations}
          toggleFilter={toggleFilter}
          companiesData={companiesData}
        />

        <CompanyList
          filteredCompanies={filteredCompanies}
          sortOption={sortOption}
          setSortOption={setSortOption}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setSearchTerm={setSearchTerm}
          setLocationTerm={setLocationTerm}
          setIndustries={setIndustries}
          setSizes={setSizes}
          setLocations={setLocations}
        />
      </div>
    </div>
  );
}
