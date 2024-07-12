import React from "react";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import NewsCard from "../../UI/Card/NewsCard";
import { getNewsList } from "../../util/http";

function News() {
  const {
    data: newsData,
    isPending: isPendingNewsData,
    error: errorNewsData,
  } = useQuery({ queryKey: ["news"], queryFn: getNewsList });

  return (
    <div className="max-w-[1300px] m-auto px-2 mt-2 mb-20">
      <div>
        <NavLink to="/">Trang chủ</NavLink>
        <span> / </span>
        <NavLink to="/news" className="text-gray-400">
          Tin tức
        </NavLink>
      </div>

      <div className="flex gap-5">
        <div className="flex-auto">
          <h1 className="text-4xl my-10 font-semibold">Tin tức</h1>
          {isPendingNewsData && <p>Loading...</p>}

          {!isPendingNewsData && (
            <ul className="flex flex-col gap-5">
              {newsData?.news.map((newsItem) => (
                <li key={newsItem?.id}>
                  <NewsCard newsItem={newsItem} />
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="min-w-[300px] border-l pl-5">
          <h2 className=" text-2xl ">Tin nổi bật</h2>
          <p>Đang cập nhật...</p>
        </div>
      </div>
    </div>
  );
}

export default News;
