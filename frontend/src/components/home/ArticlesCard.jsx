import React from "react";
import ArticleSingleCard from "./ArticleSingleCard";

const ArticlesCard = ({ articles }) => {
  return (
    <div className="p-1 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {articles.map((item) => (
        <ArticleSingleCard key={item._id} article={item}/>
      ))}
    </div>
  );
};

export default ArticlesCard;
