"use client";
import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import CompanyList from "../find-companies/components/CompanyList";
import { FilterSection } from "../find-companies/components/FilterSection";
import { MobileFilterButton } from "../find-companies/components/MobileFilterButton";
import { companiesData } from "../find-companies/utils/constants";

export default function CompanyBoard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [industries, setIndustries] = useState([]);
  const [companySizes, setCompanySizes] = useState([]);
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
      company.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation =
      locationTerm === "" ||
      company.location?.toLowerCase().includes(locationTerm.toLowerCase());

    const matchesIndustry =
      industries.length === 0 || industries.includes(company.industry);

    const matchesCompanySize =
      companySizes.length === 0 || companySizes.includes(company.size);

    return (
      matchesSearch && matchesLocation && matchesIndustry && matchesCompanySize
    );
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, locationTerm, industries, companySizes, sortOption]);

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

      <div className="container grid grid-cols-1 md:grid-cols-4 gap-y-6 md:gap-6 pt-12">
        <MobileFilterButton
          showMobileFilters={showMobileFilters}
          setShowMobileFilters={setShowMobileFilters}
        />

        <FilterSection
          showMobileFilters={showMobileFilters}
          setShowMobileFilters={setShowMobileFilters}
          industries={industries}
          setIndustries={setIndustries}
          companySizes={companySizes}
          setCompanySizes={setCompanySizes}
          toggleFilter={toggleFilter}
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
          setCompanySizes={setCompanySizes}
        />
      </div>
    </div>
  );
}
