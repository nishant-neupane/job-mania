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
  Marketing: "border-[#FFB836] border-[1px] text-[#FFB836]",
  Design: "border-[#4640DE] border-[1px] text-[#4640DE]",
  Technology: "bg-[#FF65501A] text-[#FF6550]",
  "UI Design": "border-[#00B8D9] border-[1px] text-[#00B8D9]",
  Sales: "border-[#36B37E] border-[1px] text-[#36B37E]",
};
// Utility functions to calculate counts from jobsData
const getEmploymentTypeCounts = (jobs) => {
  const counts = {};
  jobs.forEach((job) => {
    counts[job.type] = (counts[job.type] || 0) + 1;
  });
  return ["Full Time", "Part Time", "Remote", "Internship", "Contract"].map(
    (type) => ({
      label: type,
      count: counts[type] || 0,
    })
  );
};

const getCategoryCounts = (jobs) => {
  const counts = {};
  jobs.forEach((job) => {
    counts[job.category] = (counts[job.category] || 0) + 1;
  });
  return [
    "Design",
    "Sales",
    "Marketing",
    "Business",
    "Human Resource",
    "Finance",
    "Engineering",
    "Technology",
  ].map((category) => ({
    label: category,
    count: counts[category] || 0,
  }));
};

const getJobLevelCounts = (jobs) => {
  const counts = {};
  jobs.forEach((job) => {
    counts[job.level] = (counts[job.level] || 0) + 1;
  });
  return ["Entry", "Mid", "Senior", "Director", "VP or Above"].map((level) => ({
    label:
      level === "Entry"
        ? "Entry Level"
        : level === "Mid"
        ? "Mid Level"
        : level === "Senior"
        ? "Senior Level"
        : level === "VP or Above"
        ? "VP or Above"
        : level,
    count: counts[level] || 0,
  }));
};
const applyJobs = () => {
  console.log("job Applied");
};

const getSalaryRangeCounts = (jobs) => {
  const ranges = [
    { label: "Rs 70,000 - Rs 100,000", min: 70000, max: 100000 },
    { label: "Rs 100,000 - Rs 150,000", min: 100000, max: 150000 },
    { label: "Rs 150,000 - Rs 200,000", min: 150000, max: 200000 },
    { label: "Rs 300,000 or above", min: 300000, max: Infinity },
  ];

  return ranges.map((range) => ({
    label: range.label,
    count: jobs.filter(
      (job) => job.salary >= range.min && job.salary <= range.max
    ).length,
  }));
};

const jobsData = [
  {
    id: 1,
    title: "Social Media Assistant",
    company: "CloudFactory",
    location: "Kathmandu, Nepal",
    tags: ["Design", "Marketing"],
    applicants: 4,
    capacity: 10,
    type: "Full Time",
    category: "Marketing",
    level: "Entry",
    salary: 40000,
    icon: "/jobs/sample.png",
  },
  {
    id: 2,
    title: "Brand Designer",
    company: "Fusemachines",
    location: "Lalitpur, Nepal",
    tags: ["Design"],
    applicants: 2,
    capacity: 10,
    type: "Full Time",
    category: "Design",
    level: "Mid",
    salary: 80000,
    icon: "/jobs/sample.png",
  },
  {
    id: 3,
    title: "Interactive Developer",
    company: "Leapfrog Technology",
    location: "Kathmandu, Nepal",
    tags: ["UI Design"],
    applicants: 6,
    capacity: 10,
    type: "Contract",
    category: "Design",
    level: "Senior",
    salary: 120000,
    icon: "/jobs/sample.png",
  },
  {
    id: 4,
    title: "Email Marketing Specialist",
    company: "Verisk Nepal",
    location: "Bhaktapur, Nepal",
    tags: ["Marketing"],
    applicants: 8,
    capacity: 10,
    type: "Remote",
    category: "Marketing",
    level: "Mid",
    salary: 70000,
    icon: "/jobs/sample.png",
  },
  {
    id: 5,
    title: "Lead Engineer",
    company: "Cotiviti Nepal",
    location: "Kathmandu, Nepal",
    tags: ["Technology"],
    applicants: 3,
    capacity: 10,
    type: "Full Time",
    category: "Technology",
    level: "Senior",
    salary: 150000,
    icon: "/jobs/sample.png",
  },
  {
    id: 6,
    title: "Product Designer",
    company: "Deerwalk",
    location: "Lalitpur, Nepal",
    tags: ["Design"],
    applicants: 7,
    capacity: 10,
    type: "Remote",
    category: "Design",
    level: "Senior",
    salary: 110000,
    icon: "/jobs/sample.png",
  },
  {
    id: 7,
    title: "Customer Relationship Manager",
    company: "Nepal Payment Solutions",
    location: "Kathmandu, Nepal",
    tags: ["Marketing"],
    applicants: 5,
    capacity: 10,
    type: "Part Time",
    category: "Marketing",
    level: "Mid",
    salary: 60000,
    icon: "/jobs/sample.png",
  },
  {
    id: 8,
    title: "Frontend Developer",
    company: "F1Soft International",
    location: "Kathmandu, Nepal",
    tags: ["Technology"],
    applicants: 9,
    capacity: 10,
    type: "Remote",
    category: "Technology",
    level: "Senior",
    salary: 130000,
    icon: "/jobs/sample.png",
  },
  {
    id: 9,
    title: "Marketing Intern",
    company: "Daraz Nepal",
    location: "Bhaktapur, Nepal",
    tags: ["Marketing"],
    applicants: 1,
    capacity: 10,
    type: "Internship",
    category: "Marketing",
    level: "Entry",
    salary: 20000,
    icon: "/jobs/sample.png",
  },
  {
    id: 10,
    title: "Sales Representative",
    company: "CG Corp Global",
    location: "Lalitpur, Nepal",
    tags: ["Sales"],
    applicants: 4,
    capacity: 10,
    type: "Full Time",
    category: "Sales",
    level: "Mid",
    salary: 75000,
    icon: "/jobs/sample.png",
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
        localStorage.setItem("recentJobSearches", JSON.stringify(updated));
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
    const saved = localStorage.getItem("recentJobSearches");
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
    <div className="text-center pb-6 flex flex-col justify-center ">
      <h1 className="font-clash font-[600] text-5xl text-[#25324B] leading-[110%] pb-6">
        Find your{" "}
        <span className="relative">
          <span className="text-[#26A4FF] z-10 relative">dream job</span>
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
        Find your next career at companies like HubSpot, Nike, and Dropbox
      </p>

      <div className="w-full flex items-center justify-center pt-6 pb-3">
        <div
          className="flex flex-col md:flex-row items-stretch justify-between bg-white px-4 py-4 w-full gap-4 md:gap-2"
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
                placeholder="Job title or keyword"
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
            className="bg-[#4640DE] hover:bg-[#3530C0] transition-colors duration-300 text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2"
          >
            <Search size={18} />
            <span>Search</span>
          </button>
        </div>
      </div>
      <p className="font-epilogue font-[400] text-base leading-[160%] text-[#515B6F] pb-10 text-center sm:text-left">
        Popular : UI Designer, UX Researcher, Android, Admin
      </p>
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
        <span>Filter Jobs</span>
      </button>
    </div>
  );
}

function JobList({
  filteredJobs,
  sortOption,
  setSortOption,
  currentPage,
  setCurrentPage,

  setSearchTerm,
  setLocationTerm,
  setEmploymentTypes,
  setCategories,
  setJobLevels,
  setSalaryRanges,
}) {
  const [viewMode, setViewMode] = useState("list");
  const jobsPerPage = viewMode === "list" ? 5 : 6;
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortOption === "Newest") {
      return b.id - a.id;
    } else {
      return b.applicants - a.applicants;
    }
  });

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = sortedJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(sortedJobs.length / jobsPerPage);

  return (
    <div className="col-span-3 flex flex-col min-h-[80vh]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="font-clash font-[600] text-[32px] leading-[120%] text-[#25324B] pb-1">
            All Jobs
          </h2>
          <p className="font-epilogue font-[400] text-base leading-[160%] text-[#7C8493]">
            Showing {filteredJobs.length} results
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

      {/* Job Grid/List */}
      <div
        className={`flex-1 ${
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 gap-4"
            : "space-y-4"
        }`}
      >
        {currentJobs.length > 0 ? (
          currentJobs.map((job) => (
            <JobCard key={job.id} job={job} viewMode={viewMode} />
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">
              No jobs found matching your criteria
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => {
                setSearchTerm("");
                setLocationTerm("");
                setEmploymentTypes([]);
                setCategories([]);
                setJobLevels([]);
                setSalaryRanges([]);
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Pagination Below Job Cards */}
      {filteredJobs.length > jobsPerPage && (
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

function JobCard({ job, viewMode }) {
  return (
    <div className="flex items-start gap-6 border-[1px] border-[#D6DDEB] p-6">
      {/* Job Info Section */}
      <div>
        <Image
          src={job.icon}
          alt={job.company}
          width={64}
          height={64}
          className="rounded"
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-epilogue font-[600] text-lg !leading-[160%] text-[#25324B]">
          {job.title}
        </h3>
        <p className="font-epilogue font-[400] text-base leading-[160%] text-[#515B6F] pb-3 pt-1 flex items-center">
          {job.company} • {job.location}
        </p>
        <div className="flex gap-2 divide-x-2 divide-[#D6DDEB]">
          <span className="font-epilogue font-[600] text-sm leading-[160%] bg-[#56CDAD1A] text-[#56CDAD] px-3 py-1 rounded-full">
            {job.type}
          </span>
          <div className="hidden sm:flex justify-center items-center sm:flex-row gap-2 pl-2">
            {job.tags.map((tag) => (
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
        <button
          onClick={() => applyJobs()}
          className="bg-[#4640DE] text-white font-medium w-full py-2 rounded-sm hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer"
        >
          Apply
        </button>
        <div className="w-full h-2 bg-gray-200 rounded mt-2">
          <div
            className="h-full bg-[#56CDAD] rounded"
            style={{ width: `${(job.applicants / job.capacity) * 100}%` }}
          />
        </div>
        <span className="text-sm mt-1">
          <span className="font-semibold text-gray-900">
            {job.applicants} applied
          </span>{" "}
          <span className="text-gray-400">of {job.capacity} capacity</span>
        </span>
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
  employmentTypes,
  setEmploymentTypes,
  categories,
  setCategories,
  jobLevels,
  setJobLevels,
  salaryRanges,
  setSalaryRanges,
  toggleFilter,
  jobsData,
}) {
  const [showEmployment, setShowEmployment] = useState(true);
  const [showCategories, setShowCategories] = useState(true);
  const [showJobLevels, setShowJobLevels] = useState(true);
  const [showSalaries, setShowSalaries] = useState(true);
  const employmentOptions = getEmploymentTypeCounts(jobsData);
  const categoryOptions = getCategoryCounts(jobsData);
  const jobLevelOptions = getJobLevelCounts(jobsData);
  const salaryOptions = getSalaryRangeCounts(jobsData);

  // const employmentOptions = [
  //   { label: "Full-time", count: 3 },
  //   { label: "Part-time", count: 5 },
  //   { label: "Remote", count: 2 },
  //   { label: "Internship", count: 24 },
  //   { label: "Contract", count: 3 },
  // ];

  // const categoryOptions = [
  //   { label: "Design", count: 24 },
  //   { label: "Sales", count: 3 },
  //   { label: "Marketing", count: 3 },
  //   { label: "Business", count: 3 },
  //   { label: "Human Resource", count: 6 },
  //   { label: "Finance", count: 4 },
  //   { label: "Engineering", count: 4 },
  //   { label: "Technology", count: 5 },
  // ];

  // const jobLevelOptions = [
  //   { label: "Entry Level", count: 57 },
  //   { label: "Mid Level", count: 3 },
  //   { label: "Senior Level", count: 5 },
  //   { label: "Director", count: 12 },
  //   { label: "VP or Above", count: 8 },
  // ];

  // const salaryOptions = [
  //   { label: "$700 - $1000", count: 4 },
  //   { label: "$1000 - $1500", count: 6 },
  //   { label: "$1500 - $2000", count: 10 },
  //   { label: "$3000 or above", count: 4 },
  // ];

  const handleApplyFilters = () => setShowMobileFilters(false);

  const clearAllFilters = () => {
    setEmploymentTypes([]);
    setCategories([]);
    setJobLevels([]);
    setSalaryRanges([]);
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
          "Type of Employment",
          employmentOptions,
          employmentTypes,
          setEmploymentTypes,
          () => setShowEmployment(!showEmployment),
          showEmployment
        )}

        {renderSection(
          "Categories",
          categoryOptions,
          categories,
          setCategories,
          () => setShowCategories(!showCategories),
          showCategories
        )}

        {renderSection(
          "Job Level",
          jobLevelOptions,
          jobLevels,
          setJobLevels,
          () => setShowJobLevels(!showJobLevels),
          showJobLevels
        )}

        {renderSection(
          "Salary Range",
          salaryOptions,
          salaryRanges,
          setSalaryRanges,
          () => setShowSalaries(!showSalaries),
          showSalaries
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
                "Type of Employment",
                employmentOptions,
                employmentTypes,
                setEmploymentTypes,
                () => setShowEmployment(!showEmployment),
                showEmployment
              )}

              {renderSection(
                "Categories",
                categoryOptions,
                categories,
                setCategories,
                () => setShowCategories(!showCategories),
                showCategories
              )}

              {renderSection(
                "Job Level",
                jobLevelOptions,
                jobLevels,
                setJobLevels,
                () => setShowJobLevels(!showJobLevels),
                showJobLevels
              )}

              {renderSection(
                "Salary Range",
                salaryOptions,
                salaryRanges,
                setSalaryRanges,
                () => setShowSalaries(!showSalaries),
                showSalaries
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

export default function JobBoard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [employmentTypes, setEmploymentTypes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [jobLevels, setJobLevels] = useState([]);
  const [salaryRanges, setSalaryRanges] = useState([]);
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

  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation = job.location
      .toLowerCase()
      .includes(locationTerm.toLowerCase());

    const matchesEmploymentType =
      employmentTypes.length === 0 || employmentTypes.includes(job.type);

    const matchesCategory =
      categories.length === 0 || categories.includes(job.category);

    const matchesJobLevel =
      jobLevels.length === 0 ||
      jobLevels.some((level) => {
        if (level === "Entry Level") return job.level === "Entry";
        if (level === "Mid Level") return job.level === "Mid";
        if (level === "Senior Level") return job.level === "Senior";
        return job.level === level;
      });

    const matchesSalaryRange =
      salaryRanges.length === 0 ||
      (salaryRanges.includes("Rs 70,000 - Rs 100,000") &&
        job.salary >= 70000 &&
        job.salary <= 100000) ||
      (salaryRanges.includes("Rs 100,000 - Rs 150,000") &&
        job.salary >= 100000 &&
        job.salary <= 150000) ||
      (salaryRanges.includes("Rs 150,000 - Rs 200,000") &&
        job.salary >= 150000 &&
        job.salary <= 200000) ||
      (salaryRanges.includes("Rs 300,000 or above") && job.salary >= 300000);

    return (
      matchesSearch &&
      matchesLocation &&
      matchesEmploymentType &&
      matchesCategory &&
      matchesJobLevel &&
      matchesSalaryRange
    );
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [
    searchTerm,
    locationTerm,
    employmentTypes,
    categories,
    jobLevels,
    salaryRanges,
    sortOption,
  ]);

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
    <div className="container mx-auto px-4 pt-6 pb-12">
      <HeroSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        locationTerm={locationTerm}
        setLocationTerm={setLocationTerm}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 md:gap-6">
        <MobileFilterButton
          showMobileFilters={showMobileFilters}
          setShowMobileFilters={setShowMobileFilters}
        />

        <FilterSection
          showMobileFilters={showMobileFilters}
          setShowMobileFilters={setShowMobileFilters}
          employmentTypes={employmentTypes}
          setEmploymentTypes={setEmploymentTypes}
          categories={categories}
          setCategories={setCategories}
          jobLevels={jobLevels}
          setJobLevels={setJobLevels}
          salaryRanges={salaryRanges}
          setSalaryRanges={setSalaryRanges}
          toggleFilter={toggleFilter}
          jobsData={jobsData}
        />

        <JobList
          filteredJobs={filteredJobs}
          sortOption={sortOption}
          setSortOption={setSortOption}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setSearchTerm={setSearchTerm}
          setLocationTerm={setLocationTerm}
          setEmploymentTypes={setEmploymentTypes}
          setCategories={setCategories}
          setJobLevels={setJobLevels}
          setSalaryRanges={setSalaryRanges}
        />
      </div>
    </div>
  );
}
