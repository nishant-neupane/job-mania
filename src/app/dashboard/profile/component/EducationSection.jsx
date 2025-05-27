"use client";
import React, { useState } from "react";
import { Plus, SquarePen, Trash2, Save } from "lucide-react";

const EducationSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [educations, setEducations] = useState([
    {
      id: 1,
      university: "Harvard University",
      logo: "https://upload.wikimedia.org/wikipedia/en/2/29/Harvard_shield_wreath.svg",
      degree: "Bachelor of Arts - BA, Economics",
      duration: "2016 - 2020",
      description:
        "Acquired deep knowledge in theoretical and empirical economics, gaining a strong foundation in macro and microeconomic analysis.",
    },
    {
      id: 2,
      university: "Yale University",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/Yale_University_Shield_1.svg",
      degree: "Master of Business Administration - MBA",
      duration: "2020 - 2022",
      description:
        "Focused on strategic management, entrepreneurship, and data-driven decision-making in a global business context.",
    },
  ]);

  const [newEducation, setNewEducation] = useState({
    university: "",
    logo: "",
    degree: "",
    duration: "",
    description: "",
  });

  const visibleEducations = showAll ? educations : educations.slice(0, 2);

  const handleDelete = (id) => {
    setEducations((prev) => prev.filter((edu) => edu.id !== id));
  };

  const handleAddEducation = () => {
    if (
      newEducation.university &&
      newEducation.logo &&
      newEducation.degree &&
      newEducation.duration
    ) {
      const newEntry = {
        id: Date.now(),
        ...newEducation,
      };
      setEducations((prev) => [...prev, newEntry]);
      setNewEducation({
        university: "",
        logo: "",
        degree: "",
        duration: "",
        description: "",
      });
      setShowAddForm(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-[#D6DDEB]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-epilogue font-semibold text-xl text-[#25324B]">
          Education
        </h2>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="p-2 border border-[#D6DDEB] hover:bg-[#4640DE] text-[#4640DE] hover:text-white hover:border-[#4640DE]"
        >
          <Plus size={20} />
        </button>
      </div>

      {showAddForm && (
        <div className="mb-6 p-4 border border-gray-200 rounded-md bg-gray-50">
          <input
            type="text"
            placeholder="University"
            className="w-full mb-2 p-2 border rounded"
            value={newEducation.university}
            onChange={(e) =>
              setNewEducation({ ...newEducation, university: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Logo URL"
            className="w-full mb-2 p-2 border rounded"
            value={newEducation.logo}
            onChange={(e) =>
              setNewEducation({ ...newEducation, logo: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Degree"
            className="w-full mb-2 p-2 border rounded"
            value={newEducation.degree}
            onChange={(e) =>
              setNewEducation({ ...newEducation, degree: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Duration"
            className="w-full mb-2 p-2 border rounded"
            value={newEducation.duration}
            onChange={(e) =>
              setNewEducation({ ...newEducation, duration: e.target.value })
            }
          />
          <textarea
            placeholder="Description"
            className="w-full mb-2 p-2 border rounded"
            value={newEducation.description}
            onChange={(e) =>
              setNewEducation({ ...newEducation, description: e.target.value })
            }
          />
          <button
            onClick={handleAddEducation}
            className="px-4 py-2 bg-[#4640DE] text-white rounded hover:bg-[#3730a3]"
          >
            Add Education
          </button>
        </div>
      )}

      {visibleEducations.map((edu, index) => (
        <div
          key={edu.id}
          className={`flex items-start gap-4 ${
            index !== visibleEducations.length - 1
              ? "pb-6 mb-6 border-b border-gray-200"
              : ""
          }`}
        >
          <img
            src={edu.logo}
            alt={edu.university}
            className="w-12 h-12 rounded-full object-cover bg-gray-100"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                {editingId === edu.id ? (
                  <>
                    <input
                      type="text"
                      value={edu.university}
                      className="font-epilogue text-lg text-[#25324B] mb-1 border-b border-gray-300"
                      readOnly
                    />
                    <input
                      type="text"
                      value={edu.degree}
                      className="font-epilogue text-base text-[#515B6F] mb-1 border-b border-gray-300"
                      readOnly
                    />
                    <input
                      type="text"
                      value={edu.duration}
                      className="font-epilogue text-base text-[#7C8493] mb-1 border-b border-gray-300"
                      readOnly
                    />
                  </>
                ) : (
                  <>
                    <h3 className="font-epilogue font-[600] text-lg leading-[160%] text-[#25324B] mb-1">
                      {edu.university}
                    </h3>
                    <p className="font-epilogue font-[400] text-base leading-[160%] text-[#515B6F] mb-1">
                      {edu.degree}
                    </p>
                    <p className="font-epilogue font-[400] text-base leading-[160%] text-[#7C8493] mb-1">
                      {edu.duration}
                    </p>
                  </>
                )}
              </div>
              <div className="flex gap-2">
                {editingId === edu.id ? (
                  <>
                    <button
                      onClick={() => setEditingId(null)}
                      className="p-2 border border-green-500 hover:bg-green-500 text-green-600 hover:text-white hover:border-green-500"
                    >
                      <Save size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(edu.id)}
                      className="p-2 border border-red-500 hover:bg-red-500 text-red-600 hover:text-white hover:border-red-500"
                    >
                      <Trash2 size={16} />
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setEditingId(edu.id)}
                    className="p-2 border border-[#D6DDEB] hover:bg-[#4640DE] text-[#4640DE] hover:text-white hover:border-[#4640DE]"
                  >
                    <SquarePen size={16} />
                  </button>
                )}
              </div>
            </div>
            {edu.description && (
              <p className="font-epilogue font-[400] text-base leading-[160%] text-[#25324B] mt-2">
                {edu.description}
              </p>
            )}
          </div>
        </div>
      ))}

      {educations.length > 2 && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-[#4640DE] font-medium hover:underline"
          >
            {showAll
              ? "Show less education"
              : `Show ${educations.length - 2} more education`}
          </button>
        </div>
      )}
    </div>
  );
};

export default EducationSection;
