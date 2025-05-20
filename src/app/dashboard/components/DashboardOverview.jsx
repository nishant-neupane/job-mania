"use client";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  MoreHorizontal,
} from "lucide-react";

export default function DashboardOverview() {
  const upcomingInterviews = [
    {
      time: "10:00 AM",
      interviewer: "Joe Bartmann",
      position: "HR Manager at Divvy",
      avatar: "/api/placeholder/40/40",
    },
  ];

  const recentApplications = [
    {
      position: "Social Media Assistant",
      company: "Nomad",
      location: "Paris, France",
      type: "Full-Time",
      date: "24 July 2021",
      status: "In Review",
      logoColor: "bg-emerald-500",
    },
    {
      position: "Social Media Assistant",
      company: "Uirectly",
      location: "New York, USA",
      type: "Full-Time",
      date: "23 July 2021",
      status: "Shortlisted",
      logoColor: "bg-blue-400",
    },
    {
      position: "Social Media Assistant",
      company: "Packer",
      location: "Madrid, Spain",
      type: "Full-Time",
      date: "22 July 2021",
      status: "Declined",
      logoColor: "bg-red-400",
    },
  ];

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "In Review":
        return "bg-amber-50 text-amber-600";
      case "Shortlisted":
        return "bg-indigo-50 text-indigo-600";
      case "Declined":
        return "bg-red-50 text-red-500";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-gray-50 p-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          Good morning, Jake
        </h2>
        <p className="text-gray-600">
          Here is what's happening with your job search applications from July
          19 - July 25.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Jobs Applied */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 className="text-gray-600 font-medium mb-4">Total Jobs Applied</h3>
          <div className="flex items-center">
            <span className="text-5xl font-bold text-gray-800">45</span>
            <div className="ml-auto">
              <div className="h-16 w-16 bg-blue-50 rounded-lg flex items-center justify-center">
                <svg
                  className="text-blue-300 w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 4v16h16V4H4z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Jobs Applied Status */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 className="text-gray-600 font-medium mb-4">
            Jobs Applied Status
          </h3>
          <div className="flex items-center">
            <div className="h-28 w-28 relative">
              <div className="h-full w-full rounded-full border-8 border-gray-100">
                <div
                  className="absolute inset-0 rounded-full border-8 border-purple-500"
                  style={{
                    clipPath: "polygon(50% 50%, 100% 0%, 100% 50%)",
                    transform: "rotate(60deg)",
                  }}
                />
              </div>
            </div>
            <div className="ml-4">
              <div className="flex items-center mb-2">
                <div className="h-4 w-4 bg-purple-600 mr-2"></div>
                <span className="text-gray-600 mr-2">60%</span>
                <span className="text-gray-500 text-sm">Unsuitable</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 bg-gray-300 mr-2"></div>
                <span className="text-gray-600 mr-2">40%</span>
                <span className="text-gray-500 text-sm">Interviewed</span>
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="flex items-center text-purple-600 text-sm font-medium">
              View All Applications
              <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>

        {/* Interviewed */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h3 className="text-gray-600 font-medium mb-4">
            Upcoming Interviews
          </h3>
          <div className="mb-2 flex justify-between items-center">
            <div className="text-sm font-medium">Today, 26 November</div>
            <div className="flex">
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <ChevronLeft size={16} />
              </button>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div>
            {upcomingInterviews.map((interview, index) => (
              <div key={index} className="py-2 flex items-center">
                <div className="text-sm text-gray-600 w-16">
                  {interview.time}
                </div>
                <div className="flex items-center ml-4">
                  <div className="h-8 w-8 rounded-full bg-blue-500 overflow-hidden mr-3">
                    <img
                      src={interview.avatar}
                      alt={interview.interviewer}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-medium">
                      {interview.interviewer}
                    </div>
                    <div className="text-xs text-gray-500">
                      {interview.position}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="py-2 flex items-center opacity-50">
              <div className="text-sm text-gray-600 w-16">11:00 AM</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Applications */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
        <h3 className="text-gray-800 font-medium mb-4">
          Recent Applications History
        </h3>

        <div className="space-y-2">
          {recentApplications.map((app, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-lg p-4 flex items-center justify-between"
            >
              <div className="flex items-center">
                <div
                  className={`h-10 w-10 rounded-lg ${app.logoColor} text-white flex items-center justify-center mr-4`}
                >
                  {app.company.charAt(0)}
                </div>
                <div>
                  <div className="font-medium mb-1">{app.position}</div>
                  <div className="text-sm text-gray-500">
                    {app.company} • {app.location} • {app.type}
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-6">
                  <div className="text-xs text-gray-500 mb-1">Date Applied</div>
                  <div className="text-sm">{app.date}</div>
                </div>
                <div className="mr-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${getStatusBadgeColor(
                      app.status
                    )}`}
                  >
                    {app.status}
                  </span>
                </div>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <button className="flex items-center text-purple-600 text-sm font-medium">
            View all applications history
            <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
