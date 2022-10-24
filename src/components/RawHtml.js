import React from "react";

export default function RawHtml({ children = null, html = "" }) {
  return html ? (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  ) : children ? (
    <div>{children}</div>
  ) : null;
}
