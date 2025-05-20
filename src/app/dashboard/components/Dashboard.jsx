"use client";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  RefreshCw,
  MoreHorizontal,
  FileText,
  Bell,
  BellDot,
} from "lucide-react";
import Navigation from "./Navigation";
import DashboardOverview from "./(DashboardOverview)/DashboardOverview";
import Messages from "./Messages";
import JobSearch from "./JobSearch";
import Companies from "./Companies";
import Profile from "./Profile";
import Application from "./Application";
import Image from "next/image";

export default function Dashboard() {
  const [activeNavItem, setActiveNavItem] = useState("Dashboard");

  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-purple-100 flex flex-col">
        <div className="p-6 border-b border-purple-100">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={216} height={40} />
            {/* <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center">
              <span className="text-white text-lg font-bold">J</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">
              JobMania
            </span> */}
          </div>
        </div>
        <Navigation
          activeNavItem={activeNavItem}
          setActiveNavItem={setActiveNavItem}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white p-6 border-b flex justify-between items-center">
          <h1 className="font-clash font-[600] text-[32px] leading-[120%] text-[#25324B]">
            {activeNavItem}
          </h1>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 border-[1px] border-[#CCCCF5] font-epilogue font-[700] text-base leading-[160%] text-[#4640DE] hover:bg-[#E9EBFD] rounded-lg flex items-center gap-2">
              Back to homepage
            </button>
            <button className="p-2 text-[#25324B] hover:bg-gray-100 rounded-full">
              {/* <RefreshCw size={20} /> */}
              <Bell size={20} />
              {/* <BellDot size={20} /> */}
            </button>
          </div>
        </header>

        <div className="p-6">
          {activeNavItem === "Dashboard" && <DashboardOverview />}
          {activeNavItem === "Messages" && <Messages />}
          {activeNavItem === "My Applications" && <Application />}
          {activeNavItem === "Find Jobs" && <JobSearch />}
          {activeNavItem === "Browse Companies" && <Companies />}
          {activeNavItem === "My Public Profile" && <Profile />}
        </div>
      </div>
    </div>
  );
}
