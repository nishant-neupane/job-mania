"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Share2,
  MapPin,
  Clock,
  DollarSign,
  Calendar,
  Users,
  TrendingUp,
  Edit,
  Award,
  Home,
  CreditCard,
  Heart,
  Star,
  CircleCheck,
} from "lucide-react";
import { jobsData } from "@/app/find-jobs/utils/constants";

export default function Description({ params }) {
  const [isApplied, setIsApplied] = useState(false);
  const jobId = parseInt(params.id);
  const job = jobsData.find((job) => job.id === jobId);

  if (!job) {
    return <div className="container p-8">Job not found</div>;
  }

  const handleApply = () => {
    setIsApplied(true);
    setTimeout(() => setIsApplied(false), 3000);
  };

  return (
    <div className="container">
      <div className="bg-[#F8F8FD] p-8">
        <div className="flex items-center justify-between p-6 bg-white border border-[#D6DDEB]">
          <div className="flex items-center space-x-4">
            <div>
              <Image
                src={job.icon || "/logo.png"}
                alt="Company Logo"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="font-clash font-[600] text-[32px] leading-[120%] text-[#25324B]">
                {job.title}
              </h1>
              <p className="font-epilogue font-[400] text-xl leading-[160%] text-[#515B6F]">
                {job.company} • {job.location} • {job.type}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-6">
            <div className="relative">
              <button
                onClick={() => alert("Location feature coming soon!")}
                className="p-2 transition-colors text-[#7C8493]"
              >
                <Share2 size={20} />
              </button>
            </div>
            <hr className="hidden sm:block h-[32px] w-[1px] bg-[#D6DDEB]" />
            <button
              onClick={handleApply}
              className={`px-8 py-2.5 font-semibold transition-all ${
                isApplied
                  ? "bg-green-500 text-white"
                  : "bg-[#4640DE] text-white hover:bg-gray-50"
              }`}
            >
              {isApplied ? "Applied!" : "Apply"}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Description */}
          <section className="mb-8">
            <h2 className="font-epilogue font-[600] text-2xl leading-[120%] text-[#25324B] mb-4">
              Description
            </h2>
            <p className="font-epilogue font-[400] text-base leading-[160%] text-[#515B6F] mb-6">
              We are looking for a talented {job.title} to join our team at{" "}
              {job.company}. This is a {job.type.toLowerCase()} position based
              in {job.location.split(",")[0]}.
              {job.level &&
                ` This is an ${job.level.toLowerCase()} level position.`}
            </p>
          </section>

          {/* Responsibilities */}
          <section className="mb-8">
            <h2 className="font-epilogue font-[600] text-2xl leading-[120%] text-[#25324B] mb-4">
              Responsibilities
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2 font-epilogue font-[400] text-base leading-[160%] text-[#515B6F]">
                <CircleCheck size={20} color="#56CDAD" /> Develop and implement
                strategies to achieve company goals
              </li>
              <li className="flex items-center gap-2 font-epilogue font-[400] text-base leading-[160%] text-[#515B6F]">
                <CircleCheck size={20} color="#56CDAD" /> Collaborate with
                cross-functional teams to deliver projects
              </li>
              <li className="flex items-center gap-2 font-epilogue font-[400] text-base leading-[160%] text-[#515B6F]">
                <CircleCheck size={20} color="#56CDAD" /> Monitor and report on
                performance metrics
              </li>
              {job.category === "Technology" && (
                <li className="flex items-center gap-2 font-epilogue font-[400] text-base leading-[160%] text-[#515B6F]">
                  <CircleCheck size={20} color="#56CDAD" /> Write clean,
                  maintainable, and efficient code
                </li>
              )}
            </ul>
          </section>

          {/* Who You Are */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Who You Are</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                You have excellent communication and collaboration skills
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                You're passionate about {job.category.toLowerCase()}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                You're a problem solver with a growth mindset
              </li>
            </ul>
          </section>

          {/* Nice-To-Haves */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Nice-To-Haves</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Experience with related tools and technologies
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {job.category === "Technology"
                  ? "Open source contributions"
                  : "Published work in the field"}
              </li>
            </ul>
          </section>

          {/* Perks & Benefits */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Perks & Benefits</h2>
            <p className="text-gray-600 mb-6">
              This position comes with several perks and benefits.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Heart className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Full Healthcare</h3>
                <p className="text-sm text-gray-600">
                  Comprehensive health coverage for you and your family.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Calendar className="text-purple-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Flexible Time Off</h3>
                <p className="text-sm text-gray-600">
                  Take time when you need it with our unlimited PTO policy.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Career Growth</h3>
                <p className="text-sm text-gray-600">
                  Opportunities for professional development and advancement.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Home className="text-orange-600" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Remote Options</h3>
                <p className="text-sm text-gray-600">
                  Work from anywhere with our flexible remote policy.
                </p>
              </div>
            </div>
          </section>

          {/* Company Info */}
          <section className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {job.company.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{job.company}</h3>
                <p className="text-gray-600">
                  {job.category} •{" "}
                  {job.capacity <= 5
                    ? "Small"
                    : job.capacity <= 10
                    ? "Medium"
                    : "Large"}
                </p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              {job.company} is a leading company in the{" "}
              {job.category.toLowerCase()} space. We're committed to innovation
              and excellence in everything we do.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=120&fit=crop"
                alt="Office"
                className="w-full h-20 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=120&fit=crop"
                alt="Team"
                className="w-full h-20 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=200&h=120&fit=crop"
                alt="Workspace"
                className="w-full h-20 object-cover rounded-lg"
              />
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-80 bg-gray-50 p-6">
          <div className="bg-white rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-4">About this role</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Applied</span>
                <span className="font-medium">{job.applicants} people</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 flex items-center">
                  <Clock size={16} className="mr-1" />
                  Capacity
                </span>
                <span className="font-medium">{job.capacity} spots</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Job Type</span>
                <span className="font-medium">{job.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Level</span>
                <span className="font-medium">{job.level}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Salary</span>
                <span className="font-medium">${job.salary} USD</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 mb-6">
            <h3 className="font-semibold mb-4">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-4">
            <h3 className="font-semibold mb-4">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.category === "Technology" && (
                <>
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    Programming
                  </span>
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    Problem Solving
                  </span>
                </>
              )}
              {job.category === "Design" && (
                <>
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    Creativity
                  </span>
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    UI/UX
                  </span>
                </>
              )}
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                Communication
              </span>
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                Teamwork
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
