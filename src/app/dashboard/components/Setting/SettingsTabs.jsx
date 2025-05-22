// SettingsTabs.js
export default function SettingsTabs({ activeTab, setActiveTab }) {
  const tabs = ["My Profile", "Login Details", "Notifications"];

  return (
    <div className="border-b px-6 pt-6">
      <nav className="flex space-x-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-sm font-medium ${
              activeTab === tab
                ? "text-[#2E60F3] border-b-2 border-[#2E60F3]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
}