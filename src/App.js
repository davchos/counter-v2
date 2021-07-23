import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [counters, setCounters] = useState(["<Counter/>"]);
  const handleClick = () => {
    if (counters.length <= 2) {
      const tmp = [...counters];
      tmp.push("<Counter/>");
      setCounters(tmp);
      console.log(counters);
      if (counters.length === 2) {
      }
    }
  };
  return (
    <div className="main">
      <button
        style={{
          visibility: counters.length === 3 ? "hidden" : "visible",
        }}
        onClick={handleClick}
      >
        {" "}
        Add counter{" "}
      </button>
      <div className="counters">
        {counters.map((elem, index) => {
          console.log(elem);
          return (
            <div key={index}>
              <Counter />
            </div>
          );
          // return <div key={index}> {index}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
