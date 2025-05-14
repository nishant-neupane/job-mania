"use client";
import { useEffect, useState } from "react";
import { getProfile } from "@/lib/api/Auth";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await getProfile();
        console.log("Fetched profile:", data);
        setProfile(data);
      } catch (err) {
        console.error("Error fetching profile:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  if (loading)
    return <div className="p-4 text-gray-600">Loading profile...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
      <p>
        <strong>Full Name:</strong> {profile.full_name}
      </p>
      <p>
        <strong>Contact:</strong> {profile.contact_number}
      </p>
      <p>
        <strong>Experience:</strong> {profile.experience}
      </p>
      <p>
        <strong>Education:</strong> {profile.education}
      </p>
      <p>
        <strong>Resume:</strong>{" "}
        <a
          href={profile.resume_url}
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View
        </a>
      </p>
      <div className="mt-2">
        <strong>Skills:</strong>
        <ul className="list-disc ml-6 mt-1 text-sm">
          {profile.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
