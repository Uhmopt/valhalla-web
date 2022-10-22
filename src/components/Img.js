import React from "react";
import defaultImage from "../assets/wallpaper.jpg";
import { APP_NAME } from "../config/appConfig";

export default function Img({
  src = defaultImage,
  alt = APP_NAME,
  className = "",
  onClick = () => {},
  ...props
}) {
  return (
    <img
      src={src || defaultImage}
      alt={alt || APP_NAME}
      className={className}
      onClick={onClick}
      {...props}
    />
  );
}

export const DEFAULT_IMAGE = defaultImage;
