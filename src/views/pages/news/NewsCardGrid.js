import React from "react";
import NewsCard from "../../../components/NewsCard";
import { NEWS_DATA } from "../../../service/newsData";

export default function NewsCardGrid() {
  return (
    <div className="row news-cards-container">
      {NEWS_DATA.map((item, itemIndex) => (
        <NewsCard
          key={itemIndex}
          id={item.id}
          title={item.title}
          caption={item.caption}
          tags={item.tags}
          coverUrl={item.coverUrl}
        />
      ))}
    </div>
  );
}
