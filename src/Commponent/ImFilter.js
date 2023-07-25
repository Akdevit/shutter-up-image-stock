import React, { useState } from "react";
import ImImagesRes from "./ImImagesRes";
const ImFilter = ({inputdata}) => {
  const [allimagedeta, setAllimagedeta] = useState();
  const [horizon, setHorizon] = useState();
  const [safesear, setSafesear] = useState();
  const [orderi, setOrderi] = useState();
  const [colors, setColors] = useState();

  const AllImages = (e) => {
    setAllimagedeta(e.target.value);
  };

  const orientation = (oria) => {
    setHorizon(oria.target.value);
  };

  const safeserc = (sef) => {
    setSafesear(sef.target.value);
  };

  const order = (or) => {
    setOrderi(or.target.value);
  };

  const color = (cl) => {
    setColors(cl.target.value);
  };
  

  return (
    <>
      <div className="Im-filter-container">
        {/*  */}
        <div className="Im-drop-down-menu">
          <label for="All-Images">All Images:</label>

          <select
            id="All-Images"
            value={allimagedeta}
            onChange={(AllImg) => AllImages(AllImg)}
          >
            <option>all</option>
            <option>photo</option>
            <option>illustration</option>
            <option>vector</option>
          </select>

          <label for="Orientation">Orientation:</label>
          <select
            id="Orientation"
            value={horizon}
            onChange={(ori) => orientation(ori)}
          >
            <option>all</option>
            <option>horizontal</option>
            <option>vertical</option>
          </select>

          <label for="safesearch">safesearch:</label>
          <select
            id="safesearch"
            value={safesear}
            onChange={(fal) => safeserc(fal)}
          >
            <option>false</option>
            <option>true</option>
          </select>

          <label for="order">order:</label>
          <select id="order" value={orderi} onChange={(ord) => order(ord)}>
            <option>popular</option>
            <option>latest</option>
          </select>

          <label for="color">Color:</label>
          <select id="color" value={colors} onChange={(col) => color(col)}>
            <option></option>
            <option>grayscale</option>
            <option>transparent</option>
            <option>red</option>
            <option>orange</option>
            <option>yellow</option>
            <option>green</option>
            <option>turquoise</option>
            <option>blue</option>
            <option>lilac</option>
            <option>pink</option>
            <option>white</option>
            <option>gray</option>
            <option>black</option>
            <option>brown</option>
          </select>
        </div>
      </div>
      <div className="Im-ser-text-name">
        <h1 className="ser-Im-text">{inputdata} Pictures & Images</h1>
        <p className="ser-Im-text">
          Explore our amazing collection of beautifully-shot HD food pictures &
          photos. Download royalty free food images for background, wallpapers &
          more!
        </p>
      </div>
      <ImImagesRes
        allimagedetaa={allimagedeta}
        gethorizon={horizon}
        Safesearch={safesear}
        orderitem={orderi}
        color={colors}
        inputvaluedata={inputdata}
      />
    </>
  );
};

export default ImFilter;
