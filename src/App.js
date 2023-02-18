import "./App.css";
import React, { useState, useEffect } from "react";
import GetApiData from "./Components/GetApiData";
import Header from "./Components/Header";
import Team from "./Components/Team";

function App() {
  const [apiData, setApiData] = useState({});

  return (
    <div className="App">
      <Header />
      <GetApiData
        apiData={apiData}
        setApiData={setApiData}
      />
      {/* <Team /> */}
    </div>
  );
}

export default App;
