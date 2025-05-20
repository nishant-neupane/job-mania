import { useState } from "react";
import {
  Home,
  MessageSquare,
  FileText,
  Search,
  Building2,
  User,
  Settings,
  HelpCircle,
  Bell,
  Calendar,
  X,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Application() {
  const [activeNavItem, setActiveNavItem] = useState("My Applications");
  const [activeTab, setActiveTab] = useState("All");

  const navItems = [
    { label: "Dashboard", icon: Home },
    { label: "Messages", icon: MessageSquare, badge: 1 },
    { label: "My Applications", icon: FileText },
    { label: "Find Jobs", icon: Search },
    { label: "Browse Companies", icon: Building2 },
    { label: "My Public Profile", icon: User },
  ];

  const settingsItems = [
    { label: "Settings", icon: Settings },
    { label: "Help Center", icon: HelpCircle },
  ];

  const tabs = [
    { label: "All", count: 45 },
    { label: "In Review", count: 34 },
    { label: "Interviewing", count: 18 },
    { label: "Assessment", count: 5 },
    { label: "Offered", count: 2 },
    { label: "Hired", count: 1 },
  ];

  const applications = [
    {
      id: 1,
      company: "Nomad",
      role: "Social Media Assistant",
      date: "24 July 2021",
      status: "In Review",
      logoColor: "bg-emerald-500",
    },
    {
      id: 2,
      company: "Udacity",
      role: "Social Media Assistant",
      date: "20 July 2021",
      status: "Shortlisted",
      logoColor: "bg-cyan-400",
    },
    {
      id: 3,
      company: "Packer",
      role: "Social Media Assistant",
      date: "16 July 2021",
      status: "Offered",
      logoColor: "bg-red-400",
    },
    {
      id: 4,
      company: "Divvy",
      role: "Social Media Assistant",
      date: "14 July 2021",
      status: "Interviewing",
      logoColor: "bg-black",
    },
    {
      id: 5,
      company: "DigitalOcean",
      role: "Social Media Assistant",
      date: "10 July 2021",
      status: "Unsuitable",
      logoColor: "bg-blue-400",
    },
  ];

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "In Review":
        return "bg-amber-50 text-amber-600 border border-amber-200";
      case "Shortlisted":
        return "bg-cyan-50 text-cyan-600 border border-cyan-200";
      case "Offered":
        return "bg-indigo-50 text-indigo-600 border border-indigo-200";
      case "Interviewing":
        return "bg-amber-50 text-amber-600 border border-amber-200";
      case "Unsuitable":
        return "bg-red-50 text-red-500 border border-red-200";
      default:
        return "bg-gray-100 text-gray-600 border border-gray-200";
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Dashboard Content */}
        <div className="p-6">
          {/* Welcome Section */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              Keep it up, Jake
            </h2>
            <p className="text-gray-600 text-sm">
              Here is job applications status from July 19 - July 25.
            </p>
          </div>

          {/* New Feature Alert */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 relative flex items-center">
            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
              <FileText size={18} className="text-indigo-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">New Feature</h3>
              <p className="text-gray-600 text-sm">
                You can request a follow-up 7 days after applying for a job if
                the application status is in review.
                <br />
                Only one follow-up is allowed per job.
              </p>
            </div>
            <button className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
              <X size={18} />
            </button>
          </div>

          {/* Tabs */}
          <div className="border-b mb-6">
            <div className="flex items-center">
              {tabs.map((tab) => (
                <button
                  key={tab.label}
                  className={`px-4 py-2 text-sm font-medium relative ${
                    activeTab === tab.label
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() => setActiveTab(tab.label)}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>

          {/* Applications History */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-800">
                Applications History
              </h3>
              <div className="flex gap-2">
                <button className="flex items-center border rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  <Search size={16} className="mr-2" />
                  Search
                </button>
                <button className="flex items-center border rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                  <span className="mr-2">Filter</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4H14M4 8H12M6 12H10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-12 px-6 py-3 bg-gray-50 border-b text-sm font-medium text-gray-600">
                <div className="col-span-1">#</div>
                <div className="col-span-3">Company Name</div>
                <div className="col-span-3">Roles</div>
                <div className="col-span-2">Date Applied</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-1"></div>
              </div>

              {/* Table Body */}
              {applications.map((app) => (
                <div
                  key={app.id}
                  className="grid grid-cols-12 px-6 py-4 border-b items-center text-sm"
                >
                  <div className="col-span-1 text-gray-600">{app.id}</div>
                  <div className="col-span-3 flex items-center">
                    <div
                      className={`h-8 w-8 rounded-lg ${app.logoColor} text-white flex items-center justify-center mr-3`}
                    >
                      {app.company.charAt(0)}
                    </div>
                    <span className="font-medium">{app.company}</span>
                  </div>
                  <div className="col-span-3 text-gray-800">{app.role}</div>
                  <div className="col-span-2 text-gray-600">{app.date}</div>
                  <div className="col-span-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${getStatusBadgeColor(
                        app.status
                      )}`}
                    >
                      {app.status}
                    </span>
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center space-x-1">
                <button className="p-2 border rounded text-gray-600 hover:bg-gray-50">
                  <ChevronLeft size={16} />
                </button>
                <button className="px-3 py-1 rounded bg-indigo-600 text-white">
                  1
                </button>
                <button className="px-3 py-1 rounded hover:bg-gray-100 text-gray-600">
                  2
                </button>
                <button className="px-3 py-1 rounded hover:bg-gray-100 text-gray-600">
                  3
                </button>
                <button className="px-3 py-1 rounded hover:bg-gray-100 text-gray-600">
                  4
                </button>
                <button className="px-3 py-1 rounded hover:bg-gray-100 text-gray-600">
                  5
                </button>
                <span className="text-gray-500">...</span>
                <button className="px-3 py-1 rounded hover:bg-gray-100 text-gray-600">
                  33
                </button>
                <button className="p-2 border rounded text-gray-600 hover:bg-gray-50">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
