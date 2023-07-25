import React, { useEffect, useState } from "react";
import Catogreis from "./Catogreis";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const ImagesresH = () => {
  let navigate = useNavigate();
  const [data, setData] = useState([""]);
  const [url, setUrl] = useState(
    `https://pixabay.com/api/?key=38320105-b762e964374d782b30b2f8654&image_type=All&pretty=true&per_page=50 `
  );

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((imgdata) => {
        setData(imgdata.hits);
        // console.log(imgdata)
      });
  }, [url]);

  const UpdateUrl = (deta) => {
    setUrl(
      `https://pixabay.com/api/?key=38320105-b762e964374d782b30b2f8654&image_type=${deta}&pretty=true&per_page=50`
    );
  };

  return (
    <>
      <Catogreis updateurldeta={(deta) => UpdateUrl(deta)} />
      <div className="ImagesresH-box">
        <div className="imagesss">
          {data.map((res) => {
            return (
              <>
                <div
                  className="img-res"
                 
                   
                 
                  onClick={() => {
                    navigate(`/${res.id}`);
                  }}
                  key={res.id}
                >
                  <LazyLoadImage
                    className="on-img"
                    src={res.webformatURL}
                    alt="img.jpg"
                    effect="blur"
                    width={`${res.webformatWidth}`}
                    height= {`${res.webformatHeight}`}
                  />
                </div>
              </>
            );
          })}
        </div>
        {/* ======== Load More ================ */}
        <div className="load_more">
          <Link to="/Images">
            <button className="load_more_btn">View More</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ImagesresH;
