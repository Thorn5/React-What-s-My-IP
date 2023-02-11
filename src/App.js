import "./App.css";
import React, { useState } from "react";
import GetApiData from "./Components/GetApiData";

function App() {
  const [apiData, setApiData] = useState(null);
  // const [apiKey, setApiKey] = useState(development.env.REACT_APP_IPIFY_API);
  // const apiKey = development.env.REACT_APP_IPIFY_API ;
  // const [apiString, setApiString] = useState(`https://geo.ipify.org/api/v2/country,city?apiKey=${development.env.REACT_APP_IPIFY_API}`);
  
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

// REACT_APP_IPIFY_API=at_9Ph3l5ptOchbzCa9X17mki9GkuQIK
// REACT_APP_USER_IP_DATA=null