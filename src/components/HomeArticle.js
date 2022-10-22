import React from "react";
import { APP_NAME } from "../config/appConfig";
import Img, { DEFAULT_IMAGE } from "./Img";

export default function HomeArticle({
  title = "",
  texts = [],
  img = { src: DEFAULT_IMAGE, alt: APP_NAME },
}) {
  return (
    <div className="container-fluid ksp">
      <div className="row">
        <div className="jumbotron col-lg-6 col-md-12 col-sm-12">
          <h2>{title}</h2>
          <p></p>
          {texts.map((text, textIndex) => (
            <p key={textIndex}>{text}</p>
          ))}
          <p></p>
        </div>

        <div className="preview col-lg-6 col-md-12 col-sm-12">
          <Img src={img.src} alt={img.alt} />
        </div>
      </div>
    </div>
  );
}
