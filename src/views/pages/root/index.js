import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../../layout/container";
import Footer from "../../layout/Footer";
import Header from "../../layout/header";

export default function Root() {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}
