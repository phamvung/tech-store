import React from "react";
import imgs from "../../assets/imgs";
import NavBar from "../NavBar/NavBar";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-red-600 py-3">
      <div className="max-w-[1300px] m-auto">
        <div className="flex items-center gap-2">
          <Link to="/" className="w-[300px]">
            <img src={imgs.logo} alt="Logo" />
          </Link>
          <section className="flex-auto mx-3">
            <Search />
          </section>
          <NavBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
