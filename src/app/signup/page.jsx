"use client";
import { useState } from "react";
import AuthLayout from "@/components/AuthLayout";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [activeTab, setActiveTab] = useState("jobseeker");
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signing up as:", activeTab);
    router.push("/dashboard");
  };

  const handleGoogleSignup = () => {
    console.log("Google signup triggered");
    router.push("/dashboard");
  };

  return (
    <AuthLayout>
      <div className="flex items-center justify-center bg-white py-16 px-6">
        <div className="w-full max-w-lg space-y-8">
          <div className="flex justify-center">
            <button
              className={`px-4 py-2 font-epilogue font-[600] text-base leading-[160%] ${
                activeTab === "jobseeker" ? "bg-[#E9EBFD] text-[#4640DE]" : ""
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
            Get more opportunities
          </h2>

          <div className="space-y-6">
            <button
              onClick={handleGoogleSignup}
              className="font-epilogue font-[700] text-base leading-[160%] text-[#4640DE] w-full border border-gray-300 py-3 rounded flex items-center justify-center space-x-2 hover:bg-gray-100"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span>Sign up with Google</span>
            </button>

            <div className="flex items-center justify-center gap-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="font-epilogue font-[400] text-base leading-[160%] text-[#202430]">
                Or sign up with email
              </span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            <form className="space-y-6" onSubmit={handleSignup}>
              <div className="space-y-2">
                <label className="font-epilogue font-[600] text-base leading-[160%] text-[#515B6F]">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 font-epilogue font-[400] text-base leading-[160%] text-[#202430]"
                />
              </div>

              <div className="space-y-2">
                <label className="font-epilogue font-[600] text-base leading-[160%] text-[#515B6F]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 font-epilogue font-[400] text-base leading-[160%] text-[#202430]"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 font-epilogue font-[400] text-base leading-[160%] text-[#202430]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#4640DE] text-white py-3 rounded hover:bg-[#3730c0] transition font-epilogue font-[700] text-base leading-[160%]"
              >
                Continue
              </button>
            </form>

            <p className="pt-2 font-epilogue font-[400] text-base leading-[160%] text-[#202430]">
              Already have an account?{" "}
              <a href="/login" className="text-[#4640DE] font-[600]">
                Login
              </a>
            </p>

            <p className="font-epilogue font-[400] text-sm leading-[160%] text-[#7C8493] tracking-wider mt-2">
              By clicking Continue, you acknowledge that you have read and
              accept the{" "}
              <a href="#" className="text-[#4640DE]">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#4640DE]">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
