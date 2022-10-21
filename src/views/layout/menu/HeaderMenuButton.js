import React from "react";
import Link from "../../../components/Link";

export default function HeaderMenuButton({ to = "#", label = "" }) {
  return (
    <li className="nav-item">
      <Link href={to}>
        <div className="skewed-bg skewed-right veras-link"></div>
      </Link>
      <p className="nav-link">{label}</p>
    </li>
  );
}
