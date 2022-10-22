import React from "react";
import { useLocation } from "react-router-dom";
import Link from "../../../components/Link";

export default function HeaderMenuButton({ to = "#", label = "" }) {
  const location = useLocation();

  const isActive = location.pathname.includes(to);

  return (
    <li className={`nav-item ${isActive ? "active" : ""}`}>
      <Link href={to}>
        <div className="skewed-bg skewed-right veras-link"></div>
      </Link>
      <p className="nav-link">{label}</p>
    </li>
  );
}
