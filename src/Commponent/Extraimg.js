import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Extraimg = ({ tagsdata }) => {
  let navigate = useNavigate();
  const [sameim, setSameim] = useState([""]);
  const [loddinge, setLoddinge] = useState(true);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=38320105-b762e964374d782b30b2f8654&q=${tagsdata[0].tags}`
    )
      .then((res) => res.json())
      .then((sameitm) => {
        // console.log(sameitm);
        setSameim(sameitm.hits);
        setLoddinge(false);
      });
  });

  return (
    <>
      <h1 className="relate-text">Related Images:</h1>
      <div className="same-img">
        <div className="img-deta-same">
          {loddinge ? (
            <>
              <h1>Lodding...</h1>
            </>
          ) : (
            sameim.map((res) => {
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
                      height={`${res.webformatHeight}`}
                    />
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default Extraimg;
