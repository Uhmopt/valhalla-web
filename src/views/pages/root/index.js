import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../../layout/container";
import Footer from "../../layout/Footer";
import Header from "../../layout/header";

export default function Root({ children = null }) {
  return (
    <div>
      <Header />
      <Container>
        {children}
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}
