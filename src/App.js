import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  // code for the plus function
  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const minus = (e) => {
    // code for the minus function
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  const times = (e) => {
    // code for the multiply function
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  const divide = (e) => {
    // code for the divide function
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  const resetInput = (e) => {
    // code for the resetInput function
    e.preventDefault();
    inputRef.current.value = 0;
  };

  const resetResult = (e) => {
    // code for the resetResult function
    e.preventDefault();
    setResult((prevVal) => prevVal * 0);
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <div className="container">
          <div className="button-container">
            <button className="button" onClick={plus}>
              add
            </button>
          </div>
          <div className="button-container">
            <button className="button" onClick={minus}>
              subtract
            </button>
          </div>
          <div className="button-container">
            <button className="button" onClick={times}>
              multiply
            </button>
          </div>
          <div className="button-container">
            <button className="button" onClick={divide}>
              divide
            </button>
          </div>
          <div className="button-container">
            <button className="button-reset" onClick={resetInput}>
              reset input
            </button>
          </div>
          <div className="button-container">
            <button className="button-reset" onClick={resetResult}>
              reset result
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
