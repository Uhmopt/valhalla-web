import React from "react";
import Img from "./Img";
import arrow from "../assets/arrow.png";

export default function PageButtons({
  onNext = () => {},
  onBefore = () => {},
}) {
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="previous-button">
          <Img
            src={arrow}
            alt="Before"
            className="page-button"
            onClick={onBefore}
          />
        </li>
        <li className="next-button">
          <Img
            src={arrow}
            alt="Next"
            className="page-button"
            onClick={onNext}
          />
        </li>
      </ul>
    </nav>
  );
}
