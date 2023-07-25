import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/SingleImdeta.css";
import Extraimg from "../Commponent/Extraimg";
import { Link } from "react-router-dom";
const SingleImdeta = () => {
  const { id } = useParams();
  const [singpagedeta, setSingpagedeta] = useState([""]);
  const [loddingr, setLoddingr] = useState(true);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=38320105-b762e964374d782b30b2f8654&id=${id}`
    )
      .then((res) => res.json())
      .then((singpage) => {
        setSingpagedeta(singpage.hits);
        setLoddingr(false);
      });
  });
  /* ==================== downloade images ==================== */
  const ImageDownlode = (imagSrc, ImageName) => {
    fetch(imagSrc)
      .then((res) => res.blob())
      .then((file) => {
        let tampurl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tampurl;
        aTag.download = ImageName;

        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <>
      <div className="singlepage">
        {/*  */}
        <div className="Si-navbaar">
            <Link to="/" className="a"> <h1>Shutter Up</h1></Link>
         
        </div>
        {/*  */}
        <div className="downloade-button">
          <button
            className="d-button"
            onClick={() =>
              ImageDownlode(singpagedeta[0].webformatURL, "Shutter-Up.jpg")
            }
          >
            downloade
          </button>
        </div>
        {/*  */}
        {loddingr ? (
          <>
            <h1>Lodding....</h1>
          </>
        ) : (
          <div className="show-img">
            <div className="center-img">
              <div className="details-img">
                <div className="view">
                  <i className="fa-solid fa-eye"></i>
                  <p className="view-number">{singpagedeta[0].views}</p>
                </div>

                <div className="like">
                  <i className="fa-solid fa-heart"></i>
                  <p className="like-number">{singpagedeta[0].likes}</p>
                </div>

                <div className="downloade">
                  <i className="fa-solid fa-download"></i>
                  <p className="downloade-number">
                    {singpagedeta[0].downloads}
                  </p>
                </div>
              </div>

              <img
                className="images-show"
                src={singpagedeta[0].webformatURL}
                alt="images.jpg"
              />
            </div>
          </div>
        )}

        {/* ============ same images ================ */}
        <Extraimg tagsdata={singpagedeta} />
      </div>
    </>
  );
};

export default SingleImdeta;
