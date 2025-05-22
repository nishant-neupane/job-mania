// components/NotificationPreferences.js
import { useState } from "react";

export default function NotificationsTab() {
  const [preferences, setPreferences] = useState({
    applications: true,
    jobs: false,
    recommendations: false,
  });

  const handleChange = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleUpdate = () => {
    console.log("Notification Preferences:", preferences);
  };

  return (
    <div className="p-8 bg-white rounded-md">
      <div className="mb-6 border-b pb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          Basic Information
        </h2>
        <p className="text-sm text-gray-500">
          This is your personal information that you can update anytime.
        </p>
      </div>    

      <div className="flex space-x-10">
        <div className="w-1/3">
          <p className="text-sm font-medium text-gray-900 mb-1">
            Notifications
          </p>
          <p className="text-sm text-gray-500">Customize your preferences</p>
        </div>

        <div className="space-y-4">
          {[
            {
              key: "applications",
              label: "Applications",
              desc: "Notifications for jobs you have applied to",
            },
            {
              key: "jobs",
              label: "Jobs",
              desc: "Notifications for job openings matching your profile",
            },
            {
              key: "recommendations",
              label: "Recommendations",
              desc: "Personalized recommendations from recruiters",
            },
          ].map(({ key, label, desc }) => (
            <label
              key={key}
              className="flex items-start space-x-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={preferences[key]}
                onChange={() => handleChange(key)}
                className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <div>
                <p className="text-sm font-medium text-gray-900">{label}</p>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            </label>
          ))}

          <div className="pt-2">
            <button
              onClick={handleUpdate}
              className="px-4 py-2 bg-[#2E60F3] text-white text-sm rounded shadow hover:bg-blue-700 transition-all"
            >
              Update Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
