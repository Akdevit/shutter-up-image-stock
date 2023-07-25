import React, { useState } from "react";

const Catogreis = ({updateurldeta}) => {
  const FilterCatogries = ["all", "photo", "illustration", "vector"];
  const [active, setActive] = useState(null)
  let num = 0;



  const clickUpdateactive = (filterdata)=>{
    updateurldeta(filterdata)
    setActive(filterdata)
  }
  return (
    <>
      <div className="filter-catogries">
        {FilterCatogries.map((filter) => {
          return (
            <>
              <div
                key={num++}
                className={`filter-cat-name ${active === filter && 'Active-filter'}`}
                onClick={()=>clickUpdateactive(filter)}
              >
                {filter}
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Catogreis;
//updateurldeta(filter)
