import './App.css';
import React, { useState } from "react";
import GetApiData from './Components/GetApiData';
import DisplayIPDetails from './Components/DisplayIPDetails';
import TestAPI from './Components/TestAPI';


function App() {
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userUrl, setUserUrl] = useState("8.8.8.8");
  console.log(apiData.ip);
  return (
    <div className="App">
    <h3>SandBox Branch</h3>
    {/* <GetApiData apiData={apiData} setApiData={setApiData} error={error} setError={setError} loading={loading} setLoading={setLoading} userUrl={userUrl} setUserUrl={setUserUrl} /> */}
    <DisplayIPDetails apiData={apiData} userUrl={userUrl} setUserUrl={setUserUrl} />
    {/* <TestAPI apiData={apiData} setApiData={setApiData} error={error} setError={setError} loading={loading} setLoading={setLoading} userUrl={userUrl} setUserUrl={setUserUrl}/> */}
    </div>
  );
}

export default App;

// https://geo.ipify.org/login
// user: zktvmxskprvxowhvgw@tcwlx.com
// pass: TtRrYyGgVvEe_456
// API: at_9Ph3l5ptOchbzCa9X17mki9GkuQIK

