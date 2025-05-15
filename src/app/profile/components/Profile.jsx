"use client";
import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "@/lib/api/Auth";
import { useRouter } from "next/navigation";

export default function ProfileForm() {
  const [profile, setProfile] = useState({
    full_name: "",
    contact_number: "",
    resume_url: "",
    skills: [],
    experience: "",
    education: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [skillsInput, setSkillsInput] = useState("");

  const router = useRouter();

  useEffect(() => {
    async function fetchProfile() {
      try {
        const data = await getProfile();
        setProfile(data);
        setSkillsInput(data.skills?.join(", ") || "");
      } catch (err) {
        console.error("Error fetching profile:", err.message);
        setError("You may not have a profile yet.");
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProfile = {
        ...profile,
        skills: skillsInput
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean),
      };
      await updateProfile(updatedProfile);
      setSuccess("Profile updated successfully.");
      setError("");
    } catch (err) {
      setError(err.message);
      setSuccess("");
    }
  };

  if (loading) return <div className="p-4 text-gray-600">Loading form...</div>;

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-xl p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">
        {error ? "Create Your Profile" : "Edit Your Profile"}
      </h2>

      {error && <p className="text-yellow-600 mb-4">{error}</p>}
      {success && <p className="text-green-600 mb-4">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="full_name"
          value={profile.full_name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full p-2 border rounded"
        />
        <input
          name="contact_number"
          value={profile.contact_number}
          onChange={handleChange}
          placeholder="Contact Number"
          className="w-full p-2 border rounded"
        />
        <input
          name="resume_url"
          value={profile.resume_url}
          onChange={handleChange}
          placeholder="Resume URL"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="experience"
          value={profile.experience}
          onChange={handleChange}
          placeholder="Experience"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="education"
          value={profile.education}
          onChange={handleChange}
          placeholder="Education"
          className="w-full p-2 border rounded"
        />
        <input
          value={skillsInput}
          onChange={(e) => setSkillsInput(e.target.value)}
          placeholder="Skills (comma-separated)"
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}
