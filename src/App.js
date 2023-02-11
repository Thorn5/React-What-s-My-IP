import './App.css';
import React, { useState } from "react";
import TestAPI from './Components/TestAPI';


function App() {
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userUrl, setUserUrl] = useState("8.8.8.8");
  return (
    <div className="App">
    <h3>SandBox Branch</h3>
    <TestAPI apiData={apiData} setApiData={setApiData} error={error} setError={setError} loading={loading} setLoading={setLoading} userUrl={userUrl} setUserUrl={setUserUrl}/>
    </div>
  );
}

export default App;



