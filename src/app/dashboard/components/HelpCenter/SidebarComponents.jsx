import { Search } from "lucide-react";

export function SearchSection({ searchQuery, onSearchChange }) {
  return (
    <>
      <p className="text-sm text-gray-500 mb-2">Type your question or keyword</p>
      <div className="flex items-center border rounded px-3 py-2">
        <Search className="w-5 h-5 text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none w-full text-sm text-gray-700"
          value={searchQuery}
          onChange={onSearchChange}
        />
      </div>
    </>
  );
}

export function CategoryList({ categories, activeCategory, onCategorySelect }) {
  return (
    <nav className="space-y-4 text-sm text-gray-700 mt-6">
      {categories.map((category) => (
        <h4
          key={category}
          className={`font-semibold cursor-pointer ${
            activeCategory === category ? "text-blue-600" : "text-gray-900"
          }`}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </h4>
      ))}
    </nav>
  );
}

export function ContactCard({ onContactClick }) {
  return (
    <div className="mt-10 bg-indigo-700 text-white p-4 rounded-md">
      <h4 className="font-semibold text-sm mb-1">Didn't find what you were looking for?</h4>
      <p className="text-sm text-indigo-200 mb-4">Contact our customer service</p>
      <button className="bg-white text-indigo-700 px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-100" onClick={onContactClick}>Contact Us</button>
    </div>
  );
}