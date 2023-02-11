import "./App.css";
import React, { useState } from "react";
import SetIP from "./Components/SetIP";
import GetApiData from "./Components/GetApiData";
import DisplayIPDetails from "./Components/DisplayIPDetails";

function App() {
  const [apiData, setApiData] = useState(null);
  const [apiKey, setApiKey] = useState("at_9Ph3l5ptOchbzCa9X17mki9GkuQIK");
  // const [userIp, setUserIp] = useState("87.153.54.148");
  const [apiString, setApiString] = useState(
    // `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${userIp}`
    `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`
  );
  // console.log("UserIP: " + userIp);
  // console.log(apiString);
  // console.log(apiData);
  // console.log(apiData.ip);
  return (
    <div className="App">
      {/* <SetIP apiKey={apiKey} userIp={userIp} setUserIp={setUserIp} setApiString={setApiString} /> */}
      <GetApiData
        apiData={apiData}
        setApiData={setApiData}
        apiString={apiString}
      />
      {/* <DisplayIPDetails apiData={apiData} /> */}
    </div>
  );
}

export default App;

// https://geo.ipify.org/login
// user: zktvmxskprvxowhvgw@tcwlx.com
// pass: TtRrYyGgVvEe_456
// API: at_9Ph3l5ptOchbzCa9X17mki9GkuQIK
