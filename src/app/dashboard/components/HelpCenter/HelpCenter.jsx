import { useState } from "react";
import { ContactPopup } from "./ContactPopup";
import { SearchSection, CategoryList, ContactCard } from "./SidebarComponents";
import { ArticleList } from "./ArticleComponents";

const CATEGORIES = [
  "Getting Started",
  "My Profile",
  "Applying for a job",
  "Job Search Tips",
  "Job Alerts",
];

const ARTICLES = [
  {
    id: 1,
    title: "What is My Applications?",
    content:
      "My Applications is a way for you to track jobs as you move through the application process...",
    category: "Getting Started",
  },
  {
    id: 2,
    title: "How to access my applications history",
    content:
      "To access applications history, go to your My Applications page...",
    category: "Getting Started",
  },
  {
    id: 3,
    title: "Not seeing jobs you applied in your my application list?",
    content:
      "Please note that we are unable to track materials submitted for jobs...",
    category: "Getting Started",
  },
  {
    id: 4,
    title: "My Profile",
    content:
      "You can update your profile by navigating to the 'My Profile' section...",
    category: "My Profile",
  },
  {
    id: 5,
    title: "Resume upload and formatting guidelines",
    content: "We accept PDF, DOC, and DOCX formats for resumes...",
    category: "My Profile",
  },
  {
    id: 6,
    title: "Job Alerts",
    content:
      "Create job alerts by saving your search criteria after performing a job search...",
    category: "Job Alerts",
  },
  {
    id: 7,
    title: "How to delete my account",
    content:
      "Account deletion can be performed in the 'Account Settings' under 'Privacy'...",
    category: "My Profile",
  },
  {
    id: 8,
    title: "Troubleshooting login issues",
    content:
      "If you're having trouble logging in, try resetting your password...",
    category: "Getting Started",
  },
  {
    id: 9,
    title: "Understanding application statuses",
    content:
      "Applications can show various statuses: 'Submitted', 'Viewed', etc...",
    category: "Applying for a job",
  },
  {
    id: 10,
    title: "How to withdraw an application",
    content: "To withdraw an application, go to your 'My Applications' page...",
    category: "Applying for a job",
  },
  {
    id: 11,
    title: "Premium account benefits",
    content:
      "Premium members get priority in search results, advanced analytics...",
    category: "My Profile",
  },
  {
    id: 12,
    title: "Changing notification preferences",
    content:
      "Manage your notification settings in the 'Notifications' section...",
    category: "My Profile",
  },
  {
    id: 13,
    title: "Applying for a job",
    content:
      "Step-by-step guide on how to apply for jobs through our platform...",
    category: "Applying for a job",
  },
  {
    id: 14,
    title: "Job Search Tips",
    content: "Expert tips to improve your job search and get better results...",
    category: "Job Search Tips",
  },
];

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [helpfulFeedback, setHelpfulFeedback] = useState({});
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sortOption, setSortOption] = useState("relevance");

  const handleFeedback = (articleId, isHelpful) => {
    setHelpfulFeedback((prev) => ({ ...prev, [articleId]: isHelpful }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setShowContactPopup(false);
    setContactForm({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const filteredArticles = ARTICLES.filter((article) =>
    searchQuery
      ? article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase())
      : article.category === activeCategory
  ).sort((a, b) => {
    if (sortOption === "az") return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <div className="p-6">
      {showContactPopup && (
        <ContactPopup
          contactForm={contactForm}
          onInputChange={handleInputChange}
          onSubmit={handleContactSubmit}
          onClose={() => setShowContactPopup(false)}
        />
      )}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 border-r border-gray-200 p-6">
          <SearchSection
            searchQuery={searchQuery}
            onSearchChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <div className="flex flex-col justify-between h-[75vh]">
            <CategoryList
              categories={CATEGORIES}
              activeCategory={activeCategory}
              onCategorySelect={(category) => {
                setActiveCategory(category);
                setSearchQuery("");
              }}
            />
            <ContactCard onContactClick={() => setShowContactPopup(true)} />
          </div>
        </div>

        <div className="w-full md:w-3/4 p-6">
          <div className="flex items-center justify-between mb-4">
            <label className="text-sm text-gray-500 flex items-center space-x-2">
              <span>Sort by:</span>
              <select
                className="text-sm text-gray-700 border border-gray-300 rounded px-2 py-1"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="relevance">Most relevant</option>
                <option value="az">A – Z</option>
              </select>
            </label>
          </div>
          <ArticleList
            articles={filteredArticles}
            helpfulFeedback={helpfulFeedback}
            onFeedback={handleFeedback}
          />
        </div>
      </div>
    </div>
  );
}
