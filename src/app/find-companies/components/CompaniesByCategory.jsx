import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  PencilRuler,
  Briefcase,
  Globe,
  Building2,
  Code,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import gsap from "gsap";
import Image from "next/image";
import { companiesData } from "../utils/constants";
import { jobsData } from "@/app/find-jobs/utils/constants";

const createCategoryData = () => {
  const uniqueCategories = [...new Set(jobsData.map((job) => job.category))];

  const categoryData = uniqueCategories.map((category) => {
    let icon;
    let color = "#4640DE";

    switch (category) {
      case "Design":
        icon = PencilRuler;
        break;
      case "Marketing":
        icon = Globe;
        break;
      case "Technology":
        icon = Code;
        break;
      case "Sales":
        icon = Building2;
        break;
      case "HR":
      case "Finance":
      case "Content":
      default:
        icon = Briefcase;
    }

    const companiesInCategory = [];
    const companyJobCounts = {};

    jobsData
      .filter((job) => job.category === category)
      .forEach((job) => {
        if (!companyJobCounts[job.company]) {
          companyJobCounts[job.company] = 0;
        }
        companyJobCounts[job.company]++;
      });

    Object.keys(companyJobCounts).forEach((companyName) => {
      const company = companiesData.find((c) => c.name === companyName);
      if (company) {
        const logo = companyName.charAt(0);

        const colorHash =
          Math.abs(
            companyName
              .split("")
              .reduce((acc, char) => acc + char.charCodeAt(0), 0)
          ) % 4;

        let bgColor;
        switch (colorHash) {
          case 0:
            bgColor = "bg-blue-500";
            break;
          case 1:
            bgColor = "bg-purple-500";
            break;
          case 2:
            bgColor = "bg-green-500";
            break;
          case 3:
            bgColor = "bg-orange-500";
            break;
          default:
            bgColor = "bg-blue-500";
        }

        companiesInCategory.push({
          id: company.name.replace(/\s+/g, "-").toLowerCase(),
          name: company.name,
          jobs: companyJobCounts[companyName],
          logo: logo,
          color: bgColor,
        });
      }
    });

    companiesInCategory.sort((a, b) => b.jobs - a.jobs);

    return {
      id: category,
      name: category,
      icon: icon,
      companies: companiesInCategory,
    };
  });

  return categoryData;
};

export default function CompaniesByCategory() {
  const categoryData = createCategoryData();
  const [activeCategory, setActiveCategory] = useState(
    categoryData[0]?.id || "Design"
  );
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const companiesRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const activeCategoryData =
    categoryData.find((category) => category.id === activeCategory) ||
    categoryData[0];

  const totalJobs =
    activeCategoryData?.companies.reduce(
      (total, company) => total + company.jobs,
      0
    ) || 0;

  const handleCategoryChange = (categoryId) => {
    if (categoryId !== activeCategory) {
      setActiveCategory(categoryId);
    }
  };

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener(
        "scroll",
        checkScrollPosition
      );
      checkScrollPosition();
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener(
          "scroll",
          checkScrollPosition
        );
      }
    };
  }, []);

  useEffect(() => {
    if (companiesRef.current) {
      gsap.fromTo(
        companiesRef.current.children,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.4,
          ease: "power1.out",
        }
      );
    }
  }, [activeCategory]);

  return (
    <div className="bg-[#F8F8FD] relative">
      <div className="container mx-auto py-12 rounded-lg shadow-sm">
        <div className="absolute top-0 left-0 hidden lg:flex rotate-180">
          <Image
            src="/home/hero/ractangle.png"
            width={150}
            height={150}
            alt=""
          />
        </div>
        <h2 className="font-clash font-[600] text-[32px] leading-[120%] text-[#25324B] mb-6">
          Companies by Category
        </h2>

        <div className="relative">
          {showLeftButton && (
            <button
              onClick={scrollLeft}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-[#4640DE] p-2 shadow-md hover:bg-gray-100"
            >
              <ArrowLeft color="#FFFFFF" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-8 pb-4 mb-6 scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <style>{`
              .scroll-smooth::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {categoryData.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex flex-col justify-center items-start min-w-[274px] min-h-[173px] p-6 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-[#4640DE] text-white shadow-md"
                      : "bg-white text-[#25324B] hover:bg-gray-100"
                  }`}
                >
                  <Icon size={48} className="" />
                  <span className="font-[600] font-clash text-2xl leading-[120%] pt-6">
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>

          {showRightButton && (
            <button
              onClick={scrollRight}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-[#4640DE] p-2 shadow-md hover:bg-gray-100"
            >
              <ArrowRight color="#FFFFFF" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
            {React.createElement(activeCategoryData.icon, {
              size: 24,
              className: "text-[#4640DE]",
            })}
          </span>
          <span className="font-[600] font-clash text-2xl leading-[120%] text-[#202430]">
            {activeCategoryData.companies.length} Results
          </span>
        </div>

        <div
          ref={companiesRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {activeCategoryData.companies.map((company) => (
            <Link
              key={company.id}
              href={`/find-jobs?company=${encodeURIComponent(company.name)}`}
              passHref
            >
              <span className="block bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 ${company.color} rounded-full flex items-center justify-center text-white font-bold`}
                  >
                    {company.logo}
                  </div>
                  <h3 className="font-[600] font-clash text-2xl leading-[120%] text-[#25324B] py-6">
                    {company.name}
                  </h3>
                  <p className="text-[#4640DE] font-epilogue font-[400] text-base leading-[160%]">
                    {company.jobs} jobs
                  </p>
                </div>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-[#4640DE] font-epilogue font-[600] text-base leading-[160%]">
          <Link
            href={`/find-jobs?category=${encodeURIComponent(
              activeCategoryData.name
            )}`}
            passHref
          >
            <span className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
              View more {activeCategoryData.name} companies
              <ArrowRight size={16} className="ml-1" strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
