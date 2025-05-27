import React from "react";

const PeopleViewed = () => {
  const people = [
    {
      name: "Sarah Johnson",
      title: "UX Designer at Apple",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b8c5?w=50&h=50&fit=crop&crop=face",
    },
    {
      name: "Mike Chen",
      title: "Product Manager at Meta",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    },
    {
      name: "Emily Davis",
      title: "Design Director at Airbnb",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-[#D6DDEB]">
      <h3 className="font-semibold text-gray-900 mb-4">People also viewed</h3>
      <div className="space-y-4">
        {people.map((person, index) => (
          <div key={index} className="flex items-center space-x-3">
            <img
              src={person.image}
              alt={person.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="font-medium text-sm text-gray-900">{person.name}</p>
              <p className="text-xs text-gray-600">{person.title}</p>
            </div>
            <button className="px-3 py-1 border border-gray-300 text-gray-700 text-xs rounded-full hover:bg-gray-50">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleViewed;