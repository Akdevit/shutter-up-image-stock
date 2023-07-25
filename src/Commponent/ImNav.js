import React, { useState } from "react";
import ImFilter from "../Commponent/ImFilter";
import { Link } from "react-router-dom";
import LogoImg from "../Images/logo.png"
const ImNav = () => {
  const [inpvalue, setInpvalue] = useState("");
  const [serdata, setSerdata] = useState("nature");

  const hamdalechange = () => {
    setSerdata(inpvalue);
   
  };
  
  return (
    <>
      <div className="Im_nav_baar">
        <Link to="/" className="a">
          <div className="Im-name-nave">
            <img className="logo-img" src={LogoImg} alt="logo.png"/>
            <h1 className="im-name">ShutterUp</h1>
          </div>
        </Link>

        <div className="Im-search-box">
          <input
            className="Im-input"
            type="search"
            placeholder="search images"
            onChange={(d) => setInpvalue(d.target.value)}
          />
          <i
            className="fa-solid fa-magnifying-glass search-im-icon"
            onClick={hamdalechange}
          ></i>
        </div>

        <div className="Im-hame-menu">
          <i className="fa-solid fa-bars hame-menu-im"></i>
        </div>
        <button className="uploade-img up">Uploade</button>
      </div>
      <ImFilter inputdata={serdata} />
    </>
  );
};

export default ImNav;
