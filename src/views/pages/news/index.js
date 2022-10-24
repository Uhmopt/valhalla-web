import React from "react";
import PageButtons from "../../../components/PageButtons";
import NewsCardGrid from "./NewsCardGrid";

export default function News() {
  return (
    <div className="container news-list-container">
      <h2>News</h2>

      <div className="row tags-container justify-content-center"></div>

      <NewsCardGrid />

      <PageButtons />
    </div>
  );
}
