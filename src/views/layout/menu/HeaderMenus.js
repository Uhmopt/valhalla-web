import React from "react";
import HeaderMenuButton from "./HeaderMenuButton";

export default function HeaderMenus() {
  return (
    <ul className="navbar-nav rounded-sm col-md-12 col-sm-12 col-lg-3 right-nav">
      {MENU_DATA.map((menu, menuIndex) => (
        <HeaderMenuButton key={menuIndex} to={menu.to} label={menu.label} />
      ))}
    </ul>
  );
}

export const MENU_DATA = [
  { label: "Veras", to: "#" },
  { label: "News", to: "/news" },
];
