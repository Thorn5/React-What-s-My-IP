import "./App.css";
import React, { useState, useEffect } from "react";
import GetApiData from "./Components/GetApiData";

function App() {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
      setApiData({
    "ip": "91.22.166.170",
    "location": {
      "country": "DE",
      "region": "Nordrhein-Westfalen",
      "city": "Düsseldorf",
      "lat": 51.22172,
      "lng": 6.77616,
      "postalCode": "40469",
      "timezone": "+01:00",
      "geonameId": 2934246
    },
    "as": {
      "asn": 3320,
      "name": "DTAG",
      "route": "91.0.0.0/10",
      "domain": "https://globalcarrier.telekom.com",
      "type": "NSP"
    },
    "isp": "Deutsche Telekom AG"
  })

  }, [])
  

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
