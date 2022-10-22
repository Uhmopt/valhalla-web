import React from "react";
import NewsCard from "../../../components/NewsCard";

export default function NewsCardGrid() {
  return (
    <div class="row news-cards-container">
      {[
        {
          id: 9,
          title: "Patch Notes 0.3.0",
          caption: "Published on 08-10-2022",
          tags: ["Patch Notes"],
          coverUrl: "/news/news-9/cover.png",
        },
        {
          id: 8,
          title: "Patch Notes 0.2.1",
          caption: "Published on 07-25-2022",
          tags: ["Patch Notes"],
          coverUrl: "/news/news-8/cover.png",
        },
        {
          id: 7,
          title: "Skaerrót Release",
          caption: "Published on 07-25-2022",
          tags: ["Patch Notes"],
          coverUrl: "/news/news-7/cover.png",
        },
        {
          id: 6,
          title: "Patch Notes 0.2.0",
          caption: "Published on 05-02-2022",
          tags: ["Patch Notes"],
          coverUrl: "/news/news-6/cover.jpg",
        },
        {
          id: 5,
          title: "Patch Notes 0.1.3",
          caption: "Published on 03-28-2022",
          tags: ["Patch Notes"],
          coverUrl: "/news/news-5/news_header_advert.png",
        },
        {
          id: 4,
          title: "Patch Notes 0.1.2",
          caption: "Published on 03-07-2022",
          tags: ["Patch Notes"],
          coverUrl: "/news/news-4/Bear_Arsenal.png",
        },
        {
          id: 3,
          title: "Patch Notes 0.1.1",
          caption: "Published on 03-03-2022",
          tags: ["Patch Notes"],
          coverUrl: "/news/news-3/Knockup-ability.png",
        },
        {
          id: 2,
          title: "Release Notes",
          caption: "Published on 02-28-2022",
          tags: ["Patch Notes"],
          coverUrl: "/news/news-2/Styleframe-BattleArena.png",
        },
        {
          id: 1,
          title: "The Real Beginning",
          caption: "Published on 02-28-2022",
          tags: ["Article"],
          coverUrl: "/news/news-1/island_town.png",
        },
      ].map((item, itemIndex) => (
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
