import React from "react";

export default function Tags({ data = [] }) {
  return (
    <div className="tags">
      {data.map((tag, tagIndex) => (
        <span key={tagIndex} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}
