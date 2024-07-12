import React from "react";

function NewsCard({ newsItem }) {
  return (
    <div className="w-full flex gap-3">
      <img className="w-52 rounded-xl" src={newsItem?.image} alt="image" />
      <div>
        <h2 className="font-bold">{newsItem?.title}</h2>
        <p className="text-gray-500 text-sm">{newsItem?.create_at}</p>
        <p className="text-gray-600 line-clamp-3">{newsItem?.description}</p>
      </div>
    </div>
  );
}

export default NewsCard;
