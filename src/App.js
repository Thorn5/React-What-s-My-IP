import "./App.css";
import React, { useState, useEffect } from "react";
import GetApiData from "./Components/GetApiData";

function App() {
  const [apiData, setApiData] = useState({});

  return (
    <div className="App">
      <GetApiData
        apiData={apiData}
        setApiData={setApiData}
      />
    </div>
  );
}

export default App;
