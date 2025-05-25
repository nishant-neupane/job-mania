"use client";
import { useState } from "react";
import { subDays } from "date-fns";
import DateFilter from "./DateFilter";
import StatsCards from "./StatsCards";
import RecentApplications from "./RecentApplications";
import JobDashboard from "./JobDashboard";

export default function DashboardOverview() {
  const [dateRange, setDateRange] = useState([
    {
      startDate: subDays(new Date(), 6),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="bg-gray-50 container mx-auto py-6">
      <div className="flex justify-between sm:flex-row flex-col">
        <div className="mb-6">
          <h2 className="font-clash font-semibold text-2xl text-[#25324B]">
            Good morning, Subas
          </h2>
          <p className="text-base text-[#7C8493]">
            Here is what's happening with your job search applications.
          </p>
        </div>
        
        <DateFilter
          dateRange={dateRange}
          setDateRange={setDateRange}
          showDatePicker={showDatePicker}
          setShowDatePicker={setShowDatePicker}
        />
      </div>
      <JobDashboard
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        dateRange={dateRange}
      />

      {/* <StatsCards dateRange={dateRange} /> */}
      <RecentApplications dateRange={dateRange} />
    </div>
  );
}
