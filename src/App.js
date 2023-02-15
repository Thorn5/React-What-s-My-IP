import "./App.css";
import React, { useState } from "react";
import GetApiData from "./Components/GetApiData";
import ShowLocation from "./Components/ShowLocation";

function App() {
  const [apiData, setApiData] = useState(null);
  
  return (
    <div className="App">
      {/* <GetApiData
        apiData={apiData}
        setApiData={setApiData}
      /> */}
      <ShowLocation />
    </div>
  );
}

export default App;
