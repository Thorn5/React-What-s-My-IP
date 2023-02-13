import "./App.css";
import React, { useState } from "react";
import GetApiData from "./Components/GetApiData";

function App() {
  const [apiData, setApiData] = useState(null);
  
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
