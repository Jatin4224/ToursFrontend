import React, { useState } from "react";

const Card = ({ id, name, info, price, image, removeTour }) => {
  const [readmore, setReadmore] = useState(false);

  const description = readmore ? info : `${info.substring(0, 200)}...`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }
  return (
    <div className="card">
      <img src={image} className="image" alt="tour image" />
      <div className="tour-details">
        <h4 className="tour-price">{price}</h4>
        <h4 className="tour-name">{name}</h4>
      </div>

      <div className="description">{description}</div>
      <span onClick={readmoreHandler} className="read-more">
        {readmore ? "showless" : "read more"}
      </span>
      <div>
        <button className="btn-red" onClick={() => removeTour(id)}>
          Not Intrested
        </button>
      </div>
    </div>
  );
};

export default Card;
