import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";

export default function Link({
  to = "",
  href = "",
  target = "_self",
  children = null,
}) {
  const targetUrl = useMemo(() => to || href || "#", [to, href]);

  const isInternal = useMemo(
    () => targetUrl.includes("http") >= 0,
    [targetUrl]
  );

  return isInternal ? (
    <NavLink to={targetUrl} target={target}>
      {children}
    </NavLink>
  ) : (
    <a href={targetUrl} target={target}>
      {children}
    </a>
  );
}
