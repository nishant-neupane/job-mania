"use client";
import React, { useRef, useState, useEffect } from "react";
import { Plus } from "lucide-react";

const PortfolioSection = () => {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const portfolioItems = [
    { title: "Clinically - clinic & health care website" },
    { title: "Growthly - SaaS Analytics & Sales Website" },
    { title: "Planna - Project Management App" },
    { title: "Funiro - Furniture E-Commerce" },
    { title: "SmartHR - HR Dashboard System" },
    { title: "Marketly - Marketing Tools App" },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const handleScroll = () => {
      const scrollLeft = scrollContainer.scrollLeft;
      const scrollWidth =
        scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const progress = (scrollLeft / scrollWidth) * 100;
      setScrollProgress(progress);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-[#D6DDEB]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Portfolios</h2>
        <button className="p-2 border border-[#D6DDEB] rounded hover:bg-[#4640DE] text-[#4640DE] hover:text-white hover:border-[#4640DE]">
          <Plus size={20} />
        </button>
      </div>

      <div ref={scrollRef} className="overflow-x-auto" style={{ scrollbarWidth: "none" }}>
        <div className="flex space-x-4 min-w-max pb-2">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="min-w-[200px] max-w-[220px] border border-gray-200 rounded-lg bg-white p-2 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-full h-36 bg-gradient-to-br from-blue-100 to-purple-100 rounded mb-2"></div>
              <p className="text-sm font-medium text-gray-900">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 w-full h-[3px] bg-gray-200 rounded">
        <div
          className="h-full bg-[#4640DE] rounded transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default PortfolioSection;
