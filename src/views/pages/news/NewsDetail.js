import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { DEFAULT_NEWS_DATA, NEWS_DATA } from "../../../service/newsData";
import NewsDetailContent from "./NewsDetailContent";

export default function NewsDetail() {
  const { id } = useParams();

  const data =
    useMemo(() => NEWS_DATA.find((item) => `${item?.id}` === `${id}`), [id]) ??
    DEFAULT_NEWS_DATA;

  return <NewsDetailContent data={data} />;
}
