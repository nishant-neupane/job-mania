"use client";
import { useState } from "react";
import AuthLayout from "@/components/AuthLayout";
import { useRouter } from "next/navigation";

export default function Login() {
  const [activeTab, setActiveTab] = useState("jobseeker");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in as:", activeTab);
    router.push("/dashboard");
  };

  const handleGoogleLogin = () => {
    console.log("Google login triggered");
    router.push("/dashboard");
  };

  return (
    <AuthLayout>
      <div className="flex items-center justify-center bg-white py-16 px-6">
        <div className="w-full max-w-lg space-y-8">
          <div className="flex justify-center gap-4">
            <button
              className={`px-4 py-2 font-epilogue font-[600] text-base leading-[160%] ${
                activeTab === "jobseeker" ? " bg-[#E9EBFD] text-[#4640DE]" : ""
              }`}
              onClick={() => setActiveTab("jobseeker")}
            >
              Job Seeker
            </button>
            <button
              className={`px-4 py-2 font-epilogue font-[600] text-base leading-[160%] ${
                activeTab === "company" ? "bg-[#E9EBFD] text-[#4640DE]" : ""
              }`}
              onClick={() => setActiveTab("company")}
            >
              Company
            </button>
          </div>

          <h2 className="font-clash font-[600] text-[32px] leading-[120%] text-center text-[#202430]">
            Welcome Back, {activeTab === "jobseeker" ? "Dude" : "Boss"}
          </h2>

          <div className="space-y-6">
            <button
              onClick={handleGoogleLogin}
              className="font-epilogue font-[700] text-base leading-[160%] text-[#4640DE] w-full border border-gray-300 py-3 rounded flex items-center justify-center space-x-2 hover:bg-gray-100"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span>Login with Google</span>
            </button>

            <div className="flex items-center justify-center gap-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="font-epilogue font-[400] text-base leading-[160%] text-[#202430]">
                Or login with email
              </span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="space-y-2">
                <label className="font-epilogue font-[600] text-base leading-[160%] text-[#515B6F]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 font-epilogue font-[400] text-base leading-[160%] text-[#A8ADB7]"
                />
              </div>

              <div className="space-y-2">
                <label className="font-epilogue font-[600] text-base leading-[160%] text-[#515B6F]">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 font-epilogue font-[400] text-base leading-[160%] text-[#A8ADB7]"
                />
              </div>

              <div className="flex items-center justify-between font-epilogue font-[400] text-base leading-[160%] text-[#515B6F]">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox accent-blue-600"
                  />
                  <span>Remember me</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition font-epilogue font-[700] text-base leading-[160%]"
              >
                Login
              </button>
            </form>

            <p className="pt-2 font-epilogue font-[400] text-base leading-[160%] text-[#202430]">
              Don’t have an account?{" "}
              <a href="/signup" className="text-[#4640DE] font-[600]">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
