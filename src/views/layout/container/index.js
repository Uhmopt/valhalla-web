import React from "react";

export default function Container({ children = null }) {
  return (
    <div>
      <div class="overlay-bottom"></div>
      <div class="overlay-right"></div>
      <div
        class="wallpaper"
        style={{ backgroundImage: "url('wallpaper.jpg')" }}
      ></div>
      {children}
    </div>
  );
}
