"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Navigation from "./Navigation/Navigation";
import DashboardOverview from "./DashboardOverview/DashboardOverview";
import Image from "next/image";
import Messages from "./Message/Messages";
import Application from "./Application/Application";
import Companies from "./Companies/Companies";
import Profile from "./Profile/Profile";
import HelpCenter from "./HelpCenter/HelpCenter";
import JobSearch from "./Job/JobSearch";
import Setting from "./Setting/Setting";
import NotificationSystem from "./Notification/NotificationSystem ";

export default function Dashboard() {
  const [activeNavItem, setActiveNavItem] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-gray-50">
      <div
        className={`fixed top-0 left-0 z-20 h-full w-64 bg-white border-r border-purple-100 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6 border-b border-purple-100 flex justify-between items-center my-4">
          <Image src="/logo.png" alt="Logo" width={216} height={40} />
          <button
            className="md:hidden text-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <Navigation
          activeNavItem={activeNavItem}
          setActiveNavItem={(item) => {
            setActiveNavItem(item);
            setSidebarOpen(false);
          }}
        />
      </div>

      <div className="md:ml-64">
        <header className="bg-white p-4 md:p-6 border-b flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden text-gray-700"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            <h1 className="font-clash font-semibold text-2xl md:text-[32px] text-[#25324B]">
              {activeNavItem}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 border border-[#CCCCF5] font-epilogue font-semibold text-[#4640DE] hover:bg-[#E9EBFD] rounded-lg">
              <p className="block sm:hidden text-lg">←</p>
              <p className="block sm:hidden text-sm">Home</p>
              <p className="hidden sm:block text-base">Back to homepage</p>
            </button>
            <div className="p-2 text-[#25324B] hover:bg-gray-100 rounded-full">
              <NotificationSystem />
            </div>
          </div>
        </header>

        <main className="h-[calc(100vh-80px)] overflow-y-auto">
          {activeNavItem === "Dashboard" && <DashboardOverview />}
          {activeNavItem === "Messages" && <Messages />}
          {activeNavItem === "Applications" && <Application />}
          {activeNavItem === "Find Jobs" && <JobSearch />}
          {activeNavItem === "Browse Companies" && <Companies />}
          {activeNavItem === "My Public Profile" && <Profile />}
          {activeNavItem === "Settings" && <Setting />}
          {activeNavItem === "Help Center" && <HelpCenter />}
        </main>
      </div>
    </div>
  );
}
