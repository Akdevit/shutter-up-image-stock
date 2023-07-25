import React from "react";
import HeroImg from "../Images/hero.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="Hero_section">
        <img className="hero-img" src={HeroImg} alt="hero.jpg" />

        <div className="section_search">
          <div className="search-box">
            <h1 className="text-h1">
              Stunning royalty-free images & royalty-free stock
            </h1>
            <p className="text-p">
              Over 4 million+ high quality stock images, videos and music shared
              by our talented community.
            </p>
            <Link className="a" to="/Images">
              <div className="search_baar">
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                <input
                  className="input-ser"
                  type="search"
                  placeholder="Search for all images Shutter Up"
                />
                <button className="search-btn">
                  <i className="fa-solid fa-magnifying-glass search-btn-icon"></i>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
