"use client";
import React, { useState } from "react";
import { use } from "react";
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
import { jobsData, tagColors } from "@/app/find-jobs/utils/constants";

// Icon mapping
const iconComponents = {
  share: Share2,
  clock: Clock,
  calendar: Calendar,
  trending: TrendingUp,
  home: Home,
  heart: Heart,
  check: CircleCheck,
};

// Perks data
const perksData = [
  {
    title: "Full Healthcare",
    description:
      "We believe in thriving communities and that starts with our team being happy and healthy.",
    icon: "🩺",
  },
  {
    title: "Unlimited Vacation",
    description:
      "We believe you should have a flexible schedule that makes space for family, wellness, and fun.",
    icon: "🏖️",
  },
  {
    title: "Remote Working",
    description:
      "You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.",
    icon: "☕",
  },
  {
    title: "Commuter Benefits",
    description:
      "We’re grateful for all the time and energy each team member puts into getting to work every day.",
    icon: "🚗",
  },
  {
    title: "Skill Development",
    description:
      "We believe in always learning and leveling up our skills. Whether it’s a conference or online course.",
    icon: "🎓",
  },
  {
    title: "We give back.",
    description:
      "We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most–times two.",
    icon: "🤝",
  },
  {
    title: "Team Summits",
    description:
      "Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.",
    icon: "📅",
  },
];

export default function Description({ params }) {
  const unwrappedParams = use(params);
  const [isApplied, setIsApplied] = useState(false);
  const jobId = parseInt(unwrappedParams.id);
  const job = jobsData.find((job) => job.id === jobId);

  if (!job) {
    return <div className="container p-8">Job not found</div>;
  }

  const handleApply = () => {
    setIsApplied(true);
    setTimeout(() => setIsApplied(false), 3000);
  };
  const progressPercentage = Math.min(
    100,
    Math.round((job.applicants / job.capacity) * 100)
  );

  // Responsibilities array
  const responsibilities = [
    "Develop and implement strategies to achieve company goals",
    "Collaborate with cross-functional teams to deliver projects",
    "Monitor and report on performance metrics",
    job.category === "Technology" &&
      "Write clean, maintainable, and efficient code",
  ].filter(Boolean);

  // Who You Are array
  const whoYouAre = [
    "You have excellent communication and collaboration skills",
    `You're passionate about ${job.category.toLowerCase()}`,
    "You're a problem solver with a growth mindset",
  ];

  // Nice-To-Haves array
  const niceToHaves = [
    "Experience with related tools and technologies",
    job.category === "Technology"
      ? "Open source contributions"
      : "Published work in the field",
  ];

  // Required skills based on category
  const requiredSkills = [
    ...(job.category === "Technology"
      ? ["Programming", "Problem Solving"]
      : ["Creativity", "UI/UX"]),
    "Communication",
    "Teamwork",
  ];

  return (
    <div className="container">
      <div className="bg-[#F8F8FD] p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 bg-white border border-[#D6DDEB] gap-4">
          <div className="flex items-start sm:items-center space-x-4 w-full sm:w-auto">
            <div className="hidden sm:block min-w-[64px]">
              <Image
                src={job.icon || "/logo.png"}
                alt="Company Logo"
                width={64}
                height={64}
                className="object-cover w-12 h-12 sm:w-16 sm:h-16"
              />
            </div>
            <div className="flex-1 sm:flex-none">
              <h1 className="font-clash font-[600] text-xl sm:text-[32px] leading-[120%] text-[#25324B]">
                {job.title}
              </h1>
              <p className="font-epilogue font-[400] text-sm sm:text-xl leading-[160%] text-[#515B6F]">
                {job.company} • {job.location} • {job.type}
              </p>
            </div>
          </div>
          <div className="flex justify-between sm:justify-center items-center w-full sm:w-auto space-x-2 sm:space-x-6 border-t sm:border-t-0 pt-4 sm:pt-0">
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
              className={`px-4 sm:px-8 py-2 text-sm sm:text-base font-semibold transition-all ${
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

      <div className="flex flex-col xl:flex-row">
        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Description */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <section className="mb-8">
                <h2 className="font-epilogue font-[600] text-xl sm:text-2xl leading-[120%] text-[#25324B] mb-4">
                  Description
                </h2>
                <p className="font-epilogue font-[400] text-sm sm:text-base leading-[160%] text-[#515B6F] mb-6">
                  We are looking for a talented {job.title} to join our team at{" "}
                  {job.company}. This is a {job.type.toLowerCase()} position
                  based in {job.location.split(",")[0]}.
                  {job.level &&
                    ` This is an ${job.level.toLowerCase()} level position.`}
                </p>
              </section>

              {/* Responsibilities */}
              <section className="mb-8">
                <h2 className="font-epilogue font-[600] text-xl sm:text-2xl leading-[120%] text-[#25324B] mb-4">
                  Responsibilities
                </h2>
                <ul className="space-y-3">
                  {responsibilities.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start sm:items-center gap-2 font-epilogue font-[400] text-sm sm:text-base leading-[160%] text-[#515B6F]"
                    >
                      <CircleCheck
                        size={20}
                        color="#56CDAD"
                        className="flex-shrink-0 mt-1 sm:mt-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Who You Are */}
              <section className="mb-8">
                <h2 className="font-epilogue font-[600] text-xl sm:text-2xl leading-[120%] text-[#25324B] mb-4">
                  Who You Are
                </h2>
                <ul className="space-y-3">
                  {whoYouAre.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start sm:items-center gap-2 font-epilogue font-[400] text-sm sm:text-base leading-[160%] text-[#515B6F]"
                    >
                      <CircleCheck
                        size={20}
                        color="#56CDAD"
                        className="flex-shrink-0 mt-1 sm:mt-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Nice-To-Haves */}
              <section className="mb-8">
                <h2 className="font-epilogue font-[600] text-xl sm:text-2xl leading-[120%] text-[#25324B] mb-4">
                  Nice-To-Haves
                </h2>
                <ul className="space-y-3">
                  {niceToHaves.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start sm:items-center gap-2 font-epilogue font-[400] text-sm sm:text-base leading-[160%] text-[#515B6F]"
                    >
                      <CircleCheck
                        size={20}
                        color="#56CDAD"
                        className="flex-shrink-0 mt-1 sm:mt-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-80">
              <div className="border-b border-[#D6DDEB] p-4 sm:p-6">
                <h3 className="font-clash font-[600] text-xl sm:text-2xl leading-[120%] text-[#25324B] mb-4">
                  About this role
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="py-4 sm:py-6 px-4 w-full bg-[#F8F8FD] rounded">
                    <p className="mb-3 sm:mb-4">
                      <span className="font-epilogue font-[600] text-sm sm:text-base leading-[160%] text-[#25324B]">
                        {job.applicants} Applied
                      </span>{" "}
                      <span className="font-[400] text-[#7C8493]">
                        of {job.capacity} capacity
                      </span>
                    </p>
                    <div className="w-full h-2 bg-[#D6DDEB] rounded-full">
                      <div
                        className="h-full bg-[#56CDAD] rounded-full"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between py-2 ">
                    <span className="font-epilogue font-[400] text-sm sm:text-base leading-[160%] text-[#515B6F]">
                      Apply Before
                    </span>
                    <span className="font-epilogue font-[600] text-sm sm:text-base leading-[160%] text-[#25324B]">
                      {job.type}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 ">
                    <span className="font-epilogue font-[400] text-sm sm:text-base leading-[160%] text-[#515B6F]">
                      Job Posted On
                    </span>
                    <span className="font-epilogue font-[600] text-sm sm:text-base leading-[160%] text-[#25324B]">
                      {job.level}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 ">
                    <span className="font-epilogue font-[400] text-sm sm:text-base leading-[160%] text-[#515B6F]">
                      Job Type
                    </span>
                    <span className="font-epilogue font-[600] text-sm sm:text-base leading-[160%] text-[#25324B]">
                      {job.type}
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-epilogue font-[400] text-sm sm:text-base leading-[160%] text-[#515B6F]">
                      Salary
                    </span>
                    <span className="font-epilogue font-[600] text-sm sm:text-base leading-[160%] text-[#25324B]">
                      Rs. {job.salary}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 border-b border-[#D6DDEB]">
                <h3 className="font-clash font-[600] text-xl sm:text-2xl leading-[120%] text-[#25324B] mb-4">
                  Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, index) => (
                    <span
                      key={tag}
                      className={`font-epilogue font-[600] text-xs sm:text-sm leading-[160%] px-2 sm:px-3 py-1 rounded-full ${
                        tagColors[tag] || "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className=" border-b border-[#D6DDEB] p-4 sm:p-6 mb-6">
                <h3 className="font-clash font-[600] text-xl sm:text-2xl leading-[120%] text-[#25324B] mb-4">
                  Required Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {requiredSkills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-block px-2 sm:px-3 py-1 font-epilogue font-[400] text-sm sm:text-base leading-[160%] text-[#4640DE] bg-[#F8F8FD] rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Perks & Benefits */}
          <section className="mb-12">
            <h2 className="mb-6">
              <p className="font-epilogue font-semibold text-[32px] text-[#25324B] mb-2">
                Perks & Benefits
              </p>
              <p className="font-epilogue font-normal text-base text-[#515B6F]">
                This job comes with several perks and benefits
              </p>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {perksData.map((perk, index) => (
                <div key={index} className="p-4 ">
                  <div className="text-3xl mb-2">{perk.icon}</div>
                  <h3 className="font-clash font-[600] text-base leading-[120%] text-[#25324B] mb-1">
                    {perk.title}
                  </h3>
                  <p className="font-epilogue font-normal text-base text-[#515B6F]">
                    {perk.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Company Info */}
          <section className="p-6 flex flex-col md:flex-row items-start gap-6">
            {/* Left Column */}
            <div className="flex-1">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={job.icon || "/logo.png"}
                  alt="Company Logo"
                  width={48}
                  height={48}
                  className="rounded-md"
                />
                <div>
                  <h3 className="font-epilogue font-semibold text-[32px] text-[#25324B] leading-7">
                    {job.company}
                  </h3>
                  <a
                    href="#"
                    className="font-epilogue font-[600] text-sm sm:text-base text-[#4640DE] leading-[160%]"
                  >
                    Read more about {job.company} →
                  </a>
                </div>
              </div>
              <p className="font-epilogue font-[400] text-base text-[#515B6F] leading-[160%]">
                {job.company} is a technology company that builds economic
                infrastructure for the internet. Businesses of every size—from
                new startups to public companies—use our software to accept
                payments and manage their businesses online.
              </p>
            </div>

            {/* Right Column: Images */}
            <div className="grid grid-cols-2 gap-3 w-full md:w-1/2">
              {[
                {
                  src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=120&fit=crop",
                  alt: "Office",
                },
                {
                  src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=120&fit=crop",
                  alt: "Team",
                },
                {
                  src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=200&h=120&fit=crop",
                  alt: "Workspace",
                },
              ].map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-24 object-cover rounded-md"
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
