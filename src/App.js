import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";
const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <div>No tours left</div>

        <button onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="title">Customized Tour Experiences Await!</h2>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;
