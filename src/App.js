import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";
const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  return (
    <div>
      <h2 className="title">Plan Your Next Adventure!</h2>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;
