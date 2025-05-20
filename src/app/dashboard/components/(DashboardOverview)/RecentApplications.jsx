import { ArrowRight, MoreHorizontal } from "lucide-react";

export default function RecentApplications() {
  const applications = [
    {
      position: "Social Media Assistant",
      company: "Nomad",
      location: "Paris, France",
      type: "Full-Time",
      date: "24 July 2021",
      status: "In Review",
      logoColor: "bg-emerald-500",
    },
    {
      position: "Social Media Assistant",
      company: "Uirectly",
      location: "New York, USA",
      type: "Full-Time",
      date: "23 July 2021",
      status: "Shortlisted",
      logoColor: "bg-blue-400",
    },
    {
      position: "Social Media Assistant",
      company: "Packer",
      location: "Madrid, Spain",
      type: "Full-Time",
      date: "22 July 2021",
      status: "Declined",
      logoColor: "bg-red-400",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "In Review":
        return "bg-amber-50 text-amber-600";
      case "Shortlisted":
        return "bg-indigo-50 text-indigo-600";
      case "Declined":
        return "bg-red-50 text-red-500";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      <h3 className="mb-6">
        Recent Applications History
      </h3>
      <div className="space-y-2">
        {applications.map((app, index) => (
          <div key={index} className="border p-4 rounded-lg flex justify-between items-center">
            <div className="flex items-center">
              <div className={`h-10 w-10 rounded-lg ${app.logoColor} text-white flex items-center justify-center mr-4`}>
                {app.company.charAt(0)}
              </div>
              <div>
                <div className="font-medium mb-1">{app.position}</div>
                <div className="text-sm text-gray-500">
                  {app.company} • {app.location} • {app.type}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="mr-6">
                <div className="text-xs text-gray-500 mb-1">Date Applied</div>
                <div className="text-sm">{app.date}</div>
              </div>
              <div className="mr-4">
                <span className={`text-xs px-3 py-1 rounded-full ${getStatusColor(app.status)}`}>
                  {app.status}
                </span>
              </div>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <button className="flex items-center text-purple-600 text-sm font-medium">
          View all applications history
          <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );
}
