import "./css/Counter.css";
import { useState } from "react";
const Counter = (props) => {
  const handleMoins = () => {
    setCounter(counter - 1);
  };
  const handlePlus = () => {
    setCounter(counter + 1);
  };
  const handleReset = () => {
    setCounter(0);
  };
  const [counter, setCounter] = useState(0);
  return (
    <div className="counter-container">
      <div className="counter-operation">
        <div>
          <button
            style={{
              visibility: counter <= 0 ? "hidden" : "visible",
            }}
            onClick={handleMoins}
          >
            -
          </button>
        </div>
        <div> {counter} </div>
        <div>
          <button
            style={{
              visibility: counter === 10 ? "hidden" : "visible",
            }}
            onClick={handlePlus}
          >
            +
          </button>
        </div>
      </div>
      <button onClick={handleReset}> Reset</button>
    </div>
  );
};
export default Counter;
