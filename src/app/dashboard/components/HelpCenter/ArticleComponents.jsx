import { MoreHorizontal } from "lucide-react";

export function ArticleCard({ article, feedback, onFeedback }) {
  return (
    <div className="border border-gray-200 rounded-md p-4 flex justify-between">
      <div>
        <h3 className="font-semibold text-gray-900 mb-2">{article.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{article.content}</p>
        <div className="flex items-center space-x-4 text-sm">
          <span className="text-gray-500">Was this article helpful?</span>
          <button className={`hover:underline ${feedback === true ? "text-green-600" : "text-blue-600"}`} onClick={() => onFeedback(article.id, true)}>👍 Yes</button>
          <button className={`hover:underline ${feedback === false ? "text-red-600" : "text-blue-600"}`} onClick={() => onFeedback(article.id, false)}>👎 No</button>
          {feedback !== undefined && (
            <span className="text-gray-500 text-xs">Thank you for your feedback!</span>
          )}
        </div>
      </div>
      <MoreHorizontal size={16} />
    </div>
  );
}

export function ArticleList({ articles, helpfulFeedback, onFeedback }) {
  if (articles.length === 0) {
    return <div className="text-center py-10 text-gray-600">No articles found matching your search.</div>;
  }
  return (
    <div className="space-y-6 max-h-[80vh] overflow-y-auto" style={{ scrollbarWidth: "none" }}>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} feedback={helpfulFeedback[article.id]} onFeedback={onFeedback} />
      ))}
    </div>
  );
}