"use client";
import {
  Home,
  MessageSquare,
  FileText,
  Search,
  Building2,
  User,
  Settings,
  HelpCircle,
} from "lucide-react";
import Image from "next/image";

export default function Navigation({ activeNavItem, setActiveNavItem }) {
  const navItems = [
    { label: "Dashboard", icon: Home },
    { label: "Messages", icon: MessageSquare, badge: 1 },
    { label: "Applications", icon: FileText },
    { label: "Find Jobs", icon: Search },
    { label: "Browse Companies", icon: Building2 },
    { label: "My Public Profile", icon: User },
  ];

  const settingsItems = [
    { label: "Settings", icon: Settings },
    { label: "Help Center", icon: HelpCircle },
  ];

  return (
    <>
      <nav className="flex-1 py-4 px-3">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                className={`flex items-center w-full p-3 rounded-lg font-epilogue font-[500] text-base leading-[160%] ${
                  activeNavItem === item.label
                    ? "bg-[#E9EBFD] text-[#4640DE]"
                    : "hover:bg-gray-100 text-[#7C8493]"
                }`}
                onClick={() => setActiveNavItem(item.label)}
              >
                <item.icon size={20} className="mr-3" />
                <span className="">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-purple-600 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
                    {item.badge}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <div className="font-epilogue font-[600] text-sm leading-6 text-[#202430] mb-2 px-3">
            SETTINGS
          </div>
          <ul className="space-y-2">
            {settingsItems.map((item) => (
              <li key={item.label}>
                <button
                  className={`flex items-center w-full p-3 rounded-lg font-epilogue font-[500] text-base leading-6 ${
                    activeNavItem === item.label
                      ? "bg-[#E9EBFD] text-[#4640DE]"
                      : "hover:bg-gray-100 text-[#7C8493]"
                  }`}
                  onClick={() => setActiveNavItem(item.label)}
                >
                  <item.icon size={20} className="mr-3" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="p-4 border-t border-purple-100">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-purple-600 overflow-hidden">
            <Image
              src="/hero.jpg"
              width={40}
              height={40}
              alt="User Avatar"
            />
          </div>
          <div className="ml-3">
            <div className="font-epilogue font-[600] text-lg leading-[160%] text-[#202430]">
              Subas Kandel
            </div>
            <div className="font-epilogue font-[400] text-xs leading-[160%] text-[#202430] truncate">
              kandelsuba89@gmail.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
