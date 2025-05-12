"use client";
import Image from "next/image";
import Link from "next/link";
import { tagColors } from "../utils/constants";

export default function CompanyCard({ company }) {
  return (
    <div className="relative bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
      {/* Job count at top-right */}
      <Link
        href={company.jobsLink || "#"}
        className="absolute top-4 right-4 text-sm font-semibold text-[#A88BFF]"
      >
        {company.jobCount} Jobs
      </Link>

      {/* Company Icon */}
      <div className="mb-4">
        <Image
          src={company.icon}
          alt={company.name}
          width={48}
          height={48}
          className="rounded"
        />
      </div>

      {/* Company Name */}
      <h3 className="font-semibold text-lg text-[#25324B] mb-1">
        {company.name}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#515B6F] leading-[1.5] mb-4">
        {company.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
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
  );
}
