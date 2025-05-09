"use client";
import { useState, useEffect } from "react";

const jobsData = [
  {
    id: 1,
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    tags: ["Design", "Marketing"],
    applicants: 4,
    capacity: 10,
    type: "Full Time",
    category: "Marketing",
    level: "Entry",
    salary: 1000,
  },
  {
    id: 2,
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, USA",
    tags: ["Design"],
    applicants: 2,
    capacity: 10,
    type: "Full Time",
    category: "Design",
    level: "Mid",
    salary: 2500,
  },
  {
    id: 3,
    title: "Interactive Developer",
    company: "Maze",
    location: "Hamburg, Germany",
    tags: ["UI Design"],
    applicants: 6,
    capacity: 10,
    type: "Contract",
    category: "Design",
    level: "Senior",
    salary: 3500,
  },
  {
    id: 4,
    title: "Email Marketing",
    company: "Webflow",
    location: "Remote",
    tags: ["Marketing"],
    applicants: 8,
    capacity: 10,
    type: "Remote",
    category: "Marketing",
    level: "Mid",
    salary: 2000,
  },
  {
    id: 5,
    title: "Lead Engineer",
    company: "Convex",
    location: "Berlin, Germany",
    tags: ["Technology"],
    applicants: 3,
    capacity: 10,
    type: "Full Time",
    category: "Technology",
    level: "Senior",
    salary: 4000,
  },
  {
    id: 6,
    title: "Product Designer",
    company: "Figma",
    location: "Remote",
    tags: ["Design"],
    applicants: 7,
    capacity: 10,
    type: "Remote",
    category: "Design",
    level: "Senior",
    salary: 3200,
  },
  {
    id: 7,
    title: "Customer Manager",
    company: "Pitch",
    location: "Berlin, Germany",
    tags: ["Marketing"],
    applicants: 5,
    capacity: 10,
    type: "Part Time",
    category: "Marketing",
    level: "Mid",
    salary: 1800,
  },
  {
    id: 8,
    title: "Frontend Developer",
    company: "HubSpot",
    location: "Remote",
    tags: ["Technology"],
    applicants: 9,
    capacity: 10,
    type: "Remote",
    category: "Technology",
    level: "Senior",
    salary: 3800,
  },
  {
    id: 9,
    title: "Marketing Intern",
    company: "Nike",
    location: "Portland, USA",
    tags: ["Marketing"],
    applicants: 1,
    capacity: 10,
    type: "Internship",
    category: "Marketing",
    level: "Entry",
    salary: 800,
  },
  {
    id: 10,
    title: "Sales Representative",
    company: "Salesforce",
    location: "New York, USA",
    tags: ["Sales"],
    applicants: 4,
    capacity: 10,
    type: "Full Time",
    category: "Sales",
    level: "Mid",
    salary: 2200,
  },
];

export default function JobBoard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [employmentTypes, setEmploymentTypes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [jobLevels, setJobLevels] = useState([]);
  const [salaryRanges, setSalaryRanges] = useState([]);
  const [sortOption, setSortOption] = useState("Most relevant");

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

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
      jobLevels.length === 0 || jobLevels.includes(job.level);

    const matchesSalaryRange =
      salaryRanges.length === 0 ||
      (salaryRanges.includes("< €1000") && job.salary < 1000) ||
      (salaryRanges.includes("€1000 - €2000") &&
        job.salary >= 1000 &&
        job.salary <= 2000) ||
      (salaryRanges.includes("€2000 - €3000") &&
        job.salary > 2000 &&
        job.salary <= 3000) ||
      (salaryRanges.includes("> €3000") && job.salary > 3000);

    return (
      matchesSearch &&
      matchesLocation &&
      matchesEmploymentType &&
      matchesCategory &&
      matchesJobLevel &&
      matchesSalaryRange
    );
  });

  // Sort jobs
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortOption === "Newest") {
      return b.id - a.id;
    } else {
      // Most relevant (default) - sort by applicants descending
      return b.applicants - a.applicants;
    }
  });

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = sortedJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(sortedJobs.length / jobsPerPage);

  // Handle filter toggles
  const toggleFilter = (filterArray, setFilterArray, value) => {
    if (filterArray.includes(value)) {
      setFilterArray(filterArray.filter((item) => item !== value));
    } else {
      setFilterArray([...filterArray, value]);
    }
  };

  // Reset pagination when filters change
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

  return (
    <div className="container bg-white text-black p-4 md:p-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">
          Find your <span className="text-blue-500">dream job</span>
        </h1>
        <p className="text-gray-500">
          Find your next career at companies like HubSpot, Nike, and Dropbox
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 my-6 items-center justify-center">
        <input
          type="text"
          placeholder="Job title or keyword"
          className="w-full md:w-1/2 p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Florence, Italy"
          className="w-full md:w-1/4 p-2 border rounded"
          value={locationTerm}
          onChange={(e) => setLocationTerm(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => {
            // Reset all filters
            setSearchTerm("");
            setLocationTerm("");
            setEmploymentTypes([]);
            setCategories([]);
            setJobLevels([]);
            setSalaryRanges([]);
          }}
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters */}
        <div className="col-span-1 space-y-6">
          {/* Employment Type */}
          <div>
            <h3 className="font-semibold mb-2">Type of Employment</h3>
            {["Full Time", "Part Time", "Remote", "Internship", "Contract"].map(
              (type) => (
                <div key={type} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={type}
                    checked={employmentTypes.includes(type)}
                    onChange={() =>
                      toggleFilter(employmentTypes, setEmploymentTypes, type)
                    }
                  />
                  <label htmlFor={type}>{type}</label>
                </div>
              )
            )}
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-2">Categories</h3>
            {["Design", "Marketing", "Business Dev", "Sales", "Technology"].map(
              (cat) => (
                <div key={cat} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={cat}
                    checked={categories.includes(cat)}
                    onChange={() =>
                      toggleFilter(categories, setCategories, cat)
                    }
                  />
                  <label htmlFor={cat}>{cat}</label>
                </div>
              )
            )}
          </div>

          <div>
            <h3 className="font-semibold mb-2">Job Level</h3>
            {["Entry", "Mid", "Senior"].map((level) => (
              <div key={level} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={level}
                  checked={jobLevels.includes(level)}
                  onChange={() => toggleFilter(jobLevels, setJobLevels, level)}
                />
                <label htmlFor={level}>{level}</label>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-2">Salary Range</h3>
            {["< €1000", "€1000 - €2000", "€2000 - €3000", "> €3000"].map(
              (range) => (
                <div key={range} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={range}
                    checked={salaryRanges.includes(range)}
                    onChange={() =>
                      toggleFilter(salaryRanges, setSalaryRanges, range)
                    }
                  />
                  <label htmlFor={range}>{range}</label>
                </div>
              )
            )}
          </div>
        </div>

        <div className="col-span-3">
          <div className="flex justify-between mb-4 items-center">
            <span>Showing {filteredJobs.length} results</span>
            <select
              className="border rounded px-2 py-1 text-sm"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option>Most relevant</option>
              <option>Newest</option>
            </select>
          </div>

          <div className="space-y-4">
            {currentJobs.length > 0 ? (
              currentJobs.map((job) => (
                <div
                  key={job.id}
                  className="border rounded-lg p-4 flex flex-col md:flex-row justify-between items-start md:items-center"
                >
                  <div>
                    <h4 className="font-semibold text-lg">{job.title}</h4>
                    <p className="text-gray-500">
                      {job.company} • {job.location}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-end mt-4 md:mt-0">
                    <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">
                      Apply
                    </button>
                    <span className="text-sm text-gray-400 mt-1">
                      {job.applicants} applied of {job.capacity} capacity
                    </span>
                  </div>
                </div>
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

            {filteredJobs.length > jobsPerPage && (
              <div className="flex justify-center mt-6 gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (n) => (
                    <button
                      key={n}
                      className={`px-3 py-1 rounded text-sm ${
                        n === currentPage
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                      }`}
                      onClick={() => setCurrentPage(n)}
                    >
                      {n}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
