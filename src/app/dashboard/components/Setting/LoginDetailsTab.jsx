// LoginDetailsTab.js
import { CheckCircle } from "lucide-react";

export default function LoginDetailsTab() {
  return (
    <div className="px-6 py-8 text-sm text-gray-700">
      {/* Title */}
      <div className="mb-8">
        <h2 className="text-base font-semibold text-gray-900 mb-1">
          Basic Information
        </h2>
        <p className="text-sm text-gray-500">
          This is login information that you can update anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div>
          <p className="text-sm font-medium text-gray-900 mb-1">Update Email</p>
          <p className="text-sm text-gray-500">
            Update your email address to make sure it is safe
          </p>
        </div>

        <div>
          <div className="text-sm text-gray-900 mb-2">
            <span className="font-medium">jakegyll@email.com</span>{" "}
            <CheckCircle className="inline w-4 h-4 text-green-500" />
            <p className="text-xs text-gray-500">
              Your email address is verified.
            </p>
          </div>

          <input
            type="email"
            placeholder="Enter your new email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-[#2E60F3]"
          />
          <button className="bg-[#2E60F3] text-white text-sm font-medium px-4 py-2 rounded-md">
            Update Email
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-2 border-gray-200" />

      {/* Change Password Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div>
          <p className="text-sm font-medium text-gray-900 mb-1">New Password</p>
          <p className="text-sm text-gray-500">
            Manage your password to make sure it is safe
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Old Password
            </label>
            <input
              type="password"
              placeholder="Enter your old password"
              className="w-full rounded-md border border-gray-300 px-3 py-2"
            />
            <p className="text-xs text-gray-400 mt-1">Minimum 8 characters</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter your new password"
              className="w-full rounded-md border border-gray-300 px-3 py-2"
            />
            <p className="text-xs text-gray-400 mt-1">Minimum 8 characters</p>
          </div>

          <button className="bg-[#2E60F3] text-white text-sm font-medium px-4 py-2 rounded-md">
            Change Password
          </button>
        </div>
      </div>

      {/* Close Account */}
      <div className="flex justify-end">
        <button className="text-sm text-red-600 hover:underline flex items-center gap-1">
          Close Account
          <span className="text-xs text-red-400">ⓘ</span>
        </button>
      </div>
    </div>
  );
}
