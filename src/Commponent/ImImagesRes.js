import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const ImImagesRes = ({
  allimagedetaa,
  gethorizon,
  Safesearch,
  orderitem,
  color,
  inputvaluedata,
}) => {
  let navigate = useNavigate();
  const [imagedeta, setImagedeta] = useState([""]);
  const [page, setPage] = useState(1);
  const [lodding, setLodding] = useState(true);
  const [pagedata, setPagedata] = useState([""]);
  const FetchImagesData = () => {
    fetch(
      `https://pixabay.com/api/?key=38320105-b762e964374d782b30b2f8654&q=${inputvaluedata}&image_type=${allimagedetaa}&orientation=${gethorizon}&safesearch=${Safesearch}&order=${orderitem}&colors=${color}&per_page=100&page=${page}`
    )
      .then((res) => res.json())
      .then((ImageData) => {
        // console.log(ImageData);
        setPagedata(ImageData.totalHits);
        setImagedeta(ImageData.hits);
        setLodding(false);
      });
  };
  useEffect(() => {
    FetchImagesData();
  });

  /* ============== Pagination ================ */
  const PriviewPage = () => {
    setPage(page - 1);
    if (page === 1) {
      setPage(1);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const Nextpage = () => {
    setPage(page + 1);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="Im-Images-Container">
        <div className="Im-Images-Container-box">
          {lodding ? (
            <>
              <h1 style={{ textAlign: "center" }}>Lodding.....</h1>
            </>
          ) : (
            imagedeta.map((elements) => {
              return (
                <>
                  <div
                    className="img-res"
                    onClick={() => {
                      navigate(`/${elements.id}`);
                    }}
                    key={elements.id}
                  >
                    <LazyLoadImage
                      className="on-img"
                      src={elements.webformatURL}
                      alt="img.jpg"
                      effect="blur"
                      height={ `${elements.webformatHeight}`}
                      width={`${elements.webformatWidth}`}
                    />
                  </div>
                </>
              );
            })
          )}
        </div>
      </div>
      {/* ============ Pagination ========= */}
      <div className="Im-Pagination">
        <button className="prive-btn" onClick={() => PriviewPage()}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>

        <p className="loade-data-pagination">
          {page}/{pagedata}
        </p>

        <button className="next_btn" onClick={() => Nextpage()}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
};

export default ImImagesRes;
