import React from "react";


const SmallBanner = ({category, title, price1, price2, img}) => {
  return (
    <>
      <div className="small-banner position-relative">
        <img
          className="img-fluid rounded-3"
          src={img}
          alt="mainBanner"
        />
        <div className="small-banner-content position-absolute">
          <h4>{category}</h4>
          <h5>{title}</h5>
          <p>
            From TND{price1} <br /> or TND{price2}/mo
          </p>
        </div>
      </div>
    </>
  );
};

export default SmallBanner;
