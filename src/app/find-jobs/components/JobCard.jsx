"use client";
import Image from "next/image";
import { tagColors } from "../utils/constants";

const applyJobs = () => {
  console.log("job Applied");
};

export default function JobCard({ job, viewMode }) {
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