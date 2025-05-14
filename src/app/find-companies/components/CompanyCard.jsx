"use client";

import Image from "next/image";
import Link from "next/link";
import { tagColors } from "../utils/constants";

export default function CompanyCard({ company, viewMode = "grid" }) {
  const isGrid = viewMode === "grid" || viewMode === "recommended";

  return (
    <div
      className={`relative bg-white border border-[#D6DDEB] rounded-lg p-6 transition-all duration-300 w-full
        ${
          isGrid
            ? "max-w-sm h-[226px]  flex flex-col"
            : "flex gap-4 items-start h-[226px] "
        }
      `}
    >
      {/* Jobs Link */}
      <Link
        href={company.jobsLink || "#"}
        className="absolute top-4 right-4 text-sm font-semibold text-[#A88BFF] hover:underline"
      >
        {company.jobs} Jobs
      </Link>

      {/* Logo */}
      <div className={`${isGrid ? "mb-4" : "flex-shrink-0"}`}>
        <Image
          src={company.icon}
          alt={company.name}
          width={48}
          height={48}
          className="rounded"
        />
      </div>

      {/* Content */}
      <div className={`${isGrid ? "flex flex-col flex-1" : "flex-1"}`}>
        <h3 className="font-semibold text-lg text-[#25324B] mb-1">
          {company.name}
        </h3>
        <p
          className={`text-sm text-[#515B6F] leading-[1.5] mb-4 ${
            isGrid ? "line-clamp-3" : "line-clamp-4"
          }`}
        >
          {company.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {company.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-semibold px-3 py-1 rounded-full ${
                tagColors[tag] || "bg-gray-100 text-gray-700"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
