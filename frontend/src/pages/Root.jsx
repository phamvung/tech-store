import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Guide from "../components/Guide/Guide";
import ProductPrortfolio from "../components/ProductPortfolio/ProductPrortfolio";

function Root() {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <nav className="max-w-[1300px] m-auto flex gap-5">
        <ProductPrortfolio hidden={pathname !== "/"} />
        <Guide />
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Root;
