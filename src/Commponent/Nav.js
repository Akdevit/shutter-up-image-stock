import React from "react";
import "../css/Home.css";
import LogoImg from "../Images/logo.png"
const Nav = () => {
  return (
    <>
      <div className="Nav-Baar">
        <div className="nav_name">
          <img className="logo-img" src={LogoImg} alt="logo.png"/>
          <h1 className="name">Shutter Up</h1>
        </div>

        <div className="nav_profile">
          <div className="bell-icon">
            <i className="fa-solid fa-bell"></i>
          </div>
          <div className="profile-img">
            <img
              className="profile-img-img"
              src="https://pixabay.com/static/img/profile_images/green.svg"
              alt="p.jpg"
            />
          </div>
          <button className="uploade-img">Uploade</button>
        </div>
      </div>
    </>
  );
};

export default Nav;
