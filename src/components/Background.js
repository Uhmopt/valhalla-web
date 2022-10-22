import React from "react";

export default function Background() {
  return (
    <React.Fragment>
      <div className="overlay-bottom"></div>
      <div className="overlay-right"></div>
      <div
        className="wallpaper"
        style={{ backgroundImage: "url('wallpaper.jpg')" }}
      ></div>
    </React.Fragment>
  );
}
