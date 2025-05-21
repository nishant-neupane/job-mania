import { useState, useEffect } from "react";
import {
  FileText,
  X,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { fetchApplications } from "@/app/dashboard/utils/constants";
import DateFilter from "./(DashboardOverview)/DateFilter";
import { subDays } from "date-fns";

const PAGE_SIZE = 6;

export default function Application() {
  const [dateRange, setDateRange] = useState([
    {
      startDate: subDays(new Date(), 6),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [applications, setApplications] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function loadData() {
      const data = fetchApplications();
      setApplications(data);
    }
    loadData();
  }, []);

  useEffect(() => {
    setCurrentPage(1); // Reset to page 1 when filters or tab changes
  }, [searchQuery, statusFilter, activeTab]);

  const filterApplications = () => {
    return applications.filter((app) => {
      const matchesTab = activeTab === "All" || app.status === activeTab;
      const matchesSearch =
        app.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.role.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatusFilter =
        statusFilter === "All" || app.status === statusFilter;
      return matchesTab && matchesSearch && matchesStatusFilter;
    });
  };

  const filteredApps = filterApplications();
  const totalPages = Math.ceil(filteredApps.length / PAGE_SIZE);
  const currentData = filteredApps.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const statusList = [...new Set(applications.map((a) => a.status))];
  const tabs = [
    { label: "All", count: applications.length },
    ...statusList.map((status) => ({
      label: status,
      count: applications.filter((a) => a.status === status).length,
    })),
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
      case "Declined":
        return "bg-red-50 text-red-500 border border-red-200";
      case "Accepted":
        return "bg-green-50 text-green-600 border border-green-200";
      default:
        return "bg-gray-100 text-gray-600 border border-gray-200";
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="flex-1 overflow-auto p-6">
        {/* Welcome */}
        <div className="flex items-center justify-between mb-6">
          <div className="mb-6">
            <h2 className="font-clash font-[600] text-2xl text-[#25324B] mb-1">
              Keep it up, Jake
            </h2>
            <p className="font-epilogue font-[500] text-base text-[#7C8493]">
              Here is your job application status summary.
            </p>
          </div>
          <DateFilter
            dateRange={dateRange}
            setDateRange={setDateRange}
            showDatePicker={showDatePicker}
            setShowDatePicker={setShowDatePicker}
          />
        </div>

        {/* Feature Alert */}
        <div className="bg-[#F6F6FD] rounded-lg p-4 mb-6 relative flex items-center">
          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
            <FileText size={18} className="text-indigo-600" />
          </div>
          <div>
            <h3 className="font-epilogue font-[600] text-lg text-[#4640DE] mb-1">
              New Feature
            </h3>
            <p className="font-epilogue font-[400] text-base text-[#7C8493] max-w-[735px]">
              You can request a follow-up 7 days after applying for a job if the
              application status is in review. Only one follow-up is allowed per
              job.
            </p>
          </div>
          <button className="absolute right-4 top-4 text-[#25324B] hover:text-gray-600">
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b mb-6">
          <div className="flex items-center">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                className={`px-4 py-2 font-epilogue font-[600] text-base relative ${
                  activeTab === tab.label
                    ? "text-[#25324B] border-b-2 border-indigo-600"
                    : "text-[#7C8493] hover:text-gray-800"
                }`}
                onClick={() => setActiveTab(tab.label)}
              >
                {tab.label}{" "}
                <span
                  className={`${
                    activeTab === tab.label
                      ? "text-[#4640DE]"
                      : "text-[#7C8493]"
                  }`}
                >
                  ({tab.count})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Search + Status Filter */}
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            placeholder="Search by company or role..."
            className="border px-3 py-2 rounded text-sm w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="border px-3 py-2 rounded text-sm"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Statuses</option>
            {statusList.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        {/* Applications Table */}
        <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
          <div className="grid grid-cols-12 px-6 py-3 bg-gray-50 border-b text-sm font-medium text-gray-600">
            <div className="col-span-1">#</div>
            <div className="col-span-3">Company</div>
            <div className="col-span-3">Role</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1"></div>
          </div>

          {currentData.length > 0 ? (
            currentData.map((app, index) => (
              <div
                key={app.id}
                className="grid grid-cols-12 px-6 py-4 border-b items-center text-sm"
              >
                <div className="col-span-1 text-gray-600">
                  {(currentPage - 1) * PAGE_SIZE + index + 1}
                </div>
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
            ))
          ) : (
            <div className="p-6 text-center text-gray-500">
              No applications found
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 0 && (
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-1">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="p-2 border rounded text-gray-600 hover:bg-gray-50"
              >
                <ChevronLeft size={16} />
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-indigo-600 text-white"
                      : "hover:bg-gray-100 text-gray-600"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                className="p-2 border rounded text-gray-600 hover:bg-gray-50"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
