import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow-xl">
      <nav className="bg-slate-800 py-3 px-5">
        <p className="mb-2 text-2xl font-bold tracking-tight text-white">
          <NavLink to="/" className="">Movies/Shows App</NavLink>
        </p>
      </nav>
    </header>
  );
};

export default Header;
