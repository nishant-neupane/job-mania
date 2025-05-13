"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function GoogleCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const user = searchParams.get("user");
  const error = searchParams.get("error");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (error) {
      setLoading(false);
      return;
    }

    if (token) {
      try {
        localStorage.setItem("token", token);

        if (user) {
          try {
            const userData = JSON.parse(decodeURIComponent(user));
            localStorage.setItem("user", JSON.stringify(userData));
          } catch (e) {
            console.error("Failed to parse user data:", e);
          }
        }

        router.push("/dashboard");
      } catch (err) {
        console.error("OAuth error:", err);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [token, user, error, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-gray-700 text-lg">Logging you in with Google...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center max-w-md p-6 bg-red-50 rounded-lg">
          <h2 className="text-red-600 text-xl font-semibold mb-4">
            Authentication Error
          </h2>
          <p className="text-gray-700 mb-4">{error}</p>
          <a
            href="/login"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Return to Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="text-gray-700 text-lg">
          No authentication data received. Please try again.
        </p>
        <a
          href="/login"
          className="text-blue-600 hover:text-blue-800 font-medium mt-4 inline-block"
        >
          Return to Login
        </a>
      </div>
    </div>
  );
}