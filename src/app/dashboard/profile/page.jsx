import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  Edit3,
  Plus,
  MoreHorizontal,
  Flag,
} from "lucide-react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Background Banner with Edit Icon */}
              <div className="h-48 bg-[url('/profile/bg.png')] bg-cover bg-center relative">
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 border border-gray-300 hover:bg-gray-50 text-[#F8F8FD] hover:text-black rounded">
                    <Edit3 size={16} />
                  </button>
                </div>
              </div>

              {/* Main Content */}
              <div className="px-6 pb-6 mt-6 relative">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-4">
                  {/* Profile Image */}
                  <div className="absolute -top-16 left-6">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                      alt="Profile"
                      className="w-32 h-32 rounded-full border-4 border-white object-cover"
                    />
                  </div>

                  {/* Profile Info and Action */}
                  <div className="flex flex-col justify-between flex-1">
                    {/* Info */}
                    <div className="flex justify-evenly">
                      <div className="mb-4">
                        <h1 className="text-2xl font-bold text-gray-900 mb-1">
                          John Doe
                        </h1>
                        <p className="text-lg text-gray-700 mb-2">
                          Product Designer at Twitter
                        </p>
                        <p className="text-sm text-gray-600 mb-3 flex gap-2 items-center">
                          <MapPin />
                          <span>San Francisco, California, United States</span>
                        </p>
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div className="flex items-center bg-green-50 text-green-600 rounded-md px-4 py-2 text-sm font-medium">
                            <Flag size={16} className="mr-2" />
                            OPEN FOR OPPORTUNITIES
                          </div>
                        </div>
                      </div>
                      <div>
                        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 text-sm">
                          Edit Profile
                        </button>
                      </div>
                    </div>

                    {/* Action Buttons */}
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">About</h2>
                <button className="p-2 hover:bg-gray-100 rounded">
                  <Edit3 size={16} />
                </button>
              </div>
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate product designer with 8+ years of experience
                creating user-centered digital experiences. I specialize in
                UX/UI design, user research, and design systems. I'm passionate
                about solving complex problems through thoughtful design and
                creating products that make a real difference in people's lives.
              </p>
            </div>

            {/* Experience Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Experience
                </h2>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <Plus size={16} />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <Edit3 size={16} />
                  </button>
                </div>
              </div>

              {/* Experience Item 1 */}
              <div className="flex space-x-4 mb-6 pb-6 border-b border-gray-200">
                <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">
                    Product Designer
                  </h3>
                  <p className="text-gray-700 mb-1">Twitter · Full-time</p>
                  <p className="text-sm text-gray-600 mb-2">
                    Jan 2022 - Present · 2 yrs 5 mo
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    San Francisco, California, United States
                  </p>
                  <p className="text-sm text-gray-700">
                    Designed and built custom logistic networks to automate
                    direct and inventory management workflow.
                  </p>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">
                    Growth Marketing Designer
                  </h3>
                  <p className="text-gray-700 mb-1">Google · Full-time</p>
                  <p className="text-sm text-gray-600 mb-2">
                    Jan 2020 - Dec 2021 · 2 yrs
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    Mountain View, California, United States
                  </p>
                  <p className="text-sm text-gray-700">
                    Developed optimal growth strategies, analytics/systems
                    architecture, and marketing automation workflows.
                  </p>
                </div>
              </div>

              <button className="text-blue-600 text-sm font-medium mt-4 hover:underline">
                Show 2 more experiences
              </button>
            </div>

            {/* Education Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Education
                </h2>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <Plus size={16} />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <Edit3 size={16} />
                  </button>
                </div>
              </div>

              {/* Education Item 1 */}
              <div className="flex space-x-4 mb-6 pb-6 border-b border-gray-200">
                <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">H</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">
                    Harvard University
                  </h3>
                  <p className="text-gray-700 mb-1">
                    Bachelor of Arts - BA, Economics
                  </p>
                  <p className="text-sm text-gray-600 mb-3">2016 - 2020</p>
                  <p className="text-sm text-gray-700">
                    Got acquainted with the fundamental theoretical and
                    empirical methods and evidence on which the economic theory
                    is founded. Gained extensive knowledge and understanding of
                    the macroeconomic and microeconomic behaviour.
                  </p>
                </div>
              </div>

              {/* Education Item 2 */}
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-blue-900 rounded flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">Y</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">
                    Yale University
                  </h3>
                  <p className="text-gray-700 mb-1">
                    Master of Business Administration - MBA
                  </p>
                  <p className="text-sm text-gray-600">2020 - 2022</p>
                </div>
              </div>

              <button className="text-blue-600 text-sm font-medium mt-4 hover:underline">
                Show 2 more educations
              </button>
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <Plus size={16} />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <Edit3 size={16} />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "Communication",
                  "Analytics",
                  "Facebook Ads",
                  "Content Strategy",
                  "Community Manager",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Portfolio Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Portfolio
                </h2>
                <button className="p-2 hover:bg-gray-100 rounded">
                  <Edit3 size={16} />
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Microsoft Office & Excel",
                    subtitle: "Data analysis",
                  },
                  { title: "Smartly", subtitle: "Dashboard" },
                  { title: "Goal Mapping", subtitle: "Project Reports" },
                  { title: "Patient Project", subtitle: "Management App" },
                  { title: "Report Stack", subtitle: "Stack" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow"
                  >
                    <div className="w-full h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded mb-2"></div>
                    <h4 className="font-medium text-sm text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600">{item.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">
                  Additional Details
                </h3>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Edit3 size={14} />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail size={16} className="text-gray-500" />
                  <span className="text-gray-700">johndoe@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone size={16} className="text-gray-500" />
                  <span className="text-gray-700">+1 (415) 555-0123</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin size={16} className="text-gray-500" />
                  <span className="text-gray-700">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Social Links</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <ExternalLink size={16} className="text-blue-600" />
                  <a href="#" className="text-blue-600 hover:underline">
                    Personal Website
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <ExternalLink size={16} className="text-blue-600" />
                  <a href="#" className="text-blue-600 hover:underline">
                    Twitter
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <ExternalLink size={16} className="text-blue-600" />
                  <a href="#" className="text-blue-600 hover:underline">
                    GitHub
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <ExternalLink size={16} className="text-blue-600" />
                  <a href="#" className="text-blue-600 hover:underline">
                    Dribbble
                  </a>
                </div>
              </div>
            </div>

            {/* People Also Viewed */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                People also viewed
              </h3>
              <div className="space-y-4">
                {[
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
                ].map((person, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm text-gray-900">
                        {person.name}
                      </p>
                      <p className="text-xs text-gray-600">{person.title}</p>
                    </div>
                    <button className="px-3 py-1 border border-gray-300 text-gray-700 text-xs rounded-full hover:bg-gray-50">
                      Connect
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
