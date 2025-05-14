"use client";
import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import JobList from "./components/JobList";
import { FilterSection } from "./components/FilterSection";
import { MobileFilterButton } from "./components/MobileFilterButton";
import { jobsData } from "./utils/constants";
import { companiesData } from "../find-companies/utils/constants"; 

export default function JobBoard({ searchParams }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [employmentTypes, setEmploymentTypes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [jobLevels, setJobLevels] = useState([]);
  const [salaryRanges, setSalaryRanges] = useState([]);
  const [sortOption, setSortOption] = useState("Most relevant");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const companyFilter = searchParams?.company ?? "";

  const getCompanyByJobId = (jobId) => {
    return companiesData.find((company) => company.jobs.includes(jobId));
  };

  const toggleFilter = (filterArray, setFilterArray, value) => {
    if (filterArray.includes(value)) {
      setFilterArray(filterArray.filter((item) => item !== value));
    } else {
      setFilterArray([...filterArray, value]);
    }
  };

  const filteredJobs = jobsData.filter((job) => {
    if (companyFilter) {
      const company = companiesData.find(
        (c) =>
          c.name.toLowerCase() ===
          decodeURIComponent(companyFilter).toLowerCase()
      );
      if (!company?.jobs.includes(job.id)) return false;
    }

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
    if (companyFilter) {
      const companyName = decodeURIComponent(companyFilter);
      setSearchTerm(companyName);
    }
  }, [companyFilter]);

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
    companyFilter,
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
    <div className="">
      <HeroSection
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        locationTerm={locationTerm}
        setLocationTerm={setLocationTerm}
        companyFilter={companyFilter}
      />

      <div className="container grid grid-cols-1 md:grid-cols-4 gap-y-6 md:gap-6 pt-12">
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
          companyFilter={companyFilter}
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
          getCompanyByJobId={getCompanyByJobId}
          companyFilter={companyFilter}
        />
      </div>
    </div>
  );
}
