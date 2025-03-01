import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css"

const Home = () => {
  return (
    <div className="home-container">
      {/* Banner Section */}
      <div className="banner">
        <h1 className="site-title">WELCOME TO HOUSE4U</h1>
        <p className="slogan">Your at home appraisal service!</p>
      </div>

      {/* Two clickable halves */}
      <div className="halves">
        <div className="half">
          <Link to="/buyers" className="link-button">
            <h2>Go to Buyers Page</h2>
            <p>Explore our collection of items</p>
          </Link>
        </div>
        <div className="half">
          <Link to="/sellers" className="link-button">
            <h2>Go to Sellers Page</h2>
            <p>View your profile information</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
