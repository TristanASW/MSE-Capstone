// frontend/src/components/NavBar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/nav.css";

const NavBar = () => {

  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="title">HouseXplainer</div>
      {/*
        <div className="buttons">
        {location.pathname === "/" && (
          <Link to="/" className="button">
            Search
          </Link>
        )}
        {location.pathname === "/grid" && (
          <>
            <Link to="/" className="button-un">
              Search
            </Link>
            <Link to="/listings" className="button">
              Listings
            </Link>
          </>
        )}
      </div>
      */}
    </nav>
  );
};

export default NavBar;
