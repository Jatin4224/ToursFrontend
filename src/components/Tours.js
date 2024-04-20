import React from "react";
import Card from "./Card";

const Tours = ({ tours, removeTour }) => {
  return (
    <div className="cards">
      {tours.map((tour) => {
        return <Card {...tour} removeTour={removeTour} />;
      })}
    </div>
  );
};

export default Tours;
