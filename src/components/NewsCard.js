import React from "react";
import Link from "./Link";
import Tags from "./Tags";

export default function NewsCard({
  id = "",
  title = "",
  caption = "",
  tags = [],
  coverUrl = "",
}) {
  return (
    <div className="card news-card col-lg-6 col-sm-12 col-md-12">
      <Link href={`/news/${id}`}>
        <div
          className="imgWrapper"
          style={{ backgroundImage: `url(${coverUrl})` }}
        ></div>
        <div className="card-body">
          <Tags data={tags} />
          <h3 className="card-title">{title}</h3>
          <p className="card-text publish-date">{caption}</p>
        </div>
      </Link>
    </div>
  );
}
