import React from "react";
import Link from "../../../components/Link";
import Logo from "../../../components/Logo";
import HeaderMenus from "../menu/HeaderMenus";

export default function Header() {
  return (
    <div className="container-fluid navbar-container fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark justify-content-center container">
        <ul className="navbar-nav col-md-12 col-sm-12 justify-content-end col-lg-3 left-nav">
          <li className="nav-item">
            <Link href="/play">
              <div className="skewed-bg skewed-left nav-play-button"></div>
            </Link>
            <p className="nav-link">Play</p>
          </li>
        </ul>
        <ul className="navbar-nav justify-content-center logo-nav">
          <li className="nav-item active">
            <Link href="/">
              <Logo />
            </Link>
          </li>
        </ul>
        <HeaderMenus />
      </nav>
    </div>
  );
}
