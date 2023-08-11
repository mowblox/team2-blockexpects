import React, { useState } from "react";
import "./App.css"; // Import your CSS file
import { useMetaMask } from "metamask-react";


function App() {
  const { status, connect } = useMetaMask();
  const [inputValue, setInputValue] = useState("");
  const [styledText, setStyledText] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleStyleText = () => {
    setStyledText(inputValue);
    setInputValue("");
  };

  return (
    <div className="App">
      {status === "notConnected" ? (
        <button onClick={connect}>Connect Metamask</button>
      ) : (
        <div className="container">
          <h1>Welcome to BlockExpert </h1>
            <h5>We help you create Shipment and track all your goods </h5>
          <input
            type="text"
            placeholder="Search to track shipment"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={handleStyleText}>Track Shipment</button>
          <p className="styled-text">{styledText}</p>
        </div>
      )}
       <div className="rectangle-row">
      <a href="./components/creatsShiment.js" className="rectangle-link">
        <div className="rectangle">Create New shipment</div>
      </a>
      <a href="#" className="rectangle-link">
        <div className="rectangle">completed shipment</div>
      </a>
      <a href="#" className="rectangle-link">
        <div className="rectangle">Delivered Shipment</div>
      </a>
      <a href="#" className="rectangle-link">
        <div className="rectangle">Make Payment</div>
      </a>
    </div>
       
    </div>
  


  );
}

export default App;
