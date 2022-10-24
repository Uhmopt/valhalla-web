import React from "react";
import Img from "../../../components/Img";
import RawHtml from "../../../components/RawHtml";
import Tags from "../../../components/Tags";

export default function NewsDetailContent({ data = {} }) {
  return (
    <div className="container news-container">
      <Img src={data.coverUrl} alt={data?.title ?? "thumbnail header image"} />
      <div className="container">
        <Tags data={data?.tags ?? []} />
        <h2>{data?.title ?? ""}</h2>
        <p>{data?.caption ?? ""}</p>
        <hr />
        <RawHtml html={data?.content ?? ""} />
      </div>
    </div>
  );
}
