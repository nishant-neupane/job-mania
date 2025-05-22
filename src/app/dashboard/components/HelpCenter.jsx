// components/HelpCenterSection.jsx
export default function HelpCenter() {
  return (
    <div className="">
      <div className="">
        <div className="bg-white r p-6">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Type your question or search keyword"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-4">
                Getting Started
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    My Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    Applying for a job
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    Job Search Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-700">
                    Job Alerts
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900 mb-2">
                  What is My Applications?
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  My Applications is a way for you to track jobs as you move
                  through the application process. Depending on how you applied
                  to the job your applications may also receive notifications...
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-gray-500">
                    Was this article helpful?
                  </span>
                  <button className="text-blue-600 hover:text-blue-700">
                    👍 Yes
                  </button>
                  <button className="text-blue-600 hover:text-blue-700">
                    👎 No
                  </button>
                </div>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium text-gray-900 mb-2">
                  How to access my applications history
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  To access applications history, go to your My Applications
                  page on your dashboard...
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-gray-500">
                    Was this article helpful?
                  </span>
                  <button className="text-blue-600 hover:text-blue-700">
                    👍 Yes
                  </button>
                  <button className="text-blue-600 hover:text-blue-700">
                    👎 No
                  </button>
                </div>
              </div>

              <div className="mt-8 bg-blue-600 text-white p-6 rounded-lg">
                <h3 className="font-medium mb-2">
                  Didn't find what you were looking for?
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  Contact our customer service
                </p>
                <button className="bg-white text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
