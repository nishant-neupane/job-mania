import { Search } from "lucide-react";

export function SearchSection({ searchQuery, onSearchChange }) {
  return (
    <>
      <p className="font-epilogue font-[500] text-base text-[#7C8493] leading-[160%] mb-2">
        Type your question or keyword
      </p>
      <div className="flex items-center border rounded px-3 py-2">
        <Search className="w-5 h-5 text-[#515B6F] mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none font-epilogue font-[400] text-base text-[#A8ADB7] leading-[160%] bg-gray-50"
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
          className={`font-epilogue font-[500] text-base leading-[160%] cursor-pointer ${
            activeCategory === category
              ? "text-[#4640DE] font-[600]"
              : "text-[#515B6F]"
          }`}
          onClick={() => onCategorySelect(category)}
        >
          {category}
          <hr className="my-4" />
        </h4>
      ))}
    </nav>
  );
}

export function ContactCard({ onContactClick }) {
  return (
    <div className="mt-10 bg-indigo-700 text-white p-4 relative overflow-hidden">
      <div className="absolute -bottom-10 -right-10 h-28 w-28 bg-white/10 rounded-full"></div>
      <div className="absolute -bottom-10 right-14 h-[4.5rem] w-[4.5rem] bg-white/10 rounded-full"></div>

      <h4 className="font-epilogue font-[600] text-xl leading-[120%] mb-1">
        Didn't find what you were looking for?
      </h4>
      <p className="font-epilogue font-[400] text-base leading-[160%] text-[#F8F8FD] mb-4">
        Contact our customer service
      </p>
      <button
        className="bg-white text-[#4640DE] px-4 py-3 text-sm font-semibold hover:bg-gray-100"
        onClick={onContactClick}
      >
        Contact Us
      </button>
    </div>
  );
}
