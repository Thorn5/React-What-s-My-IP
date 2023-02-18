import "./App.css";
import React, { useState, useEffect } from "react";
import GetApiData from "./Components/GetApiData";
import Header from "./Components/Header";
import Team from "./Components/Team";

function App() {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    setApiData({
      "ip": "122.209.48.3",
      "location": {
          "country": "JP",
          "region": "Tokyo Prefecture",
          "city": "Chiyoda",
          "lat": 35.68449,
          "lng": 139.75056,
          "postalCode": "",
          "timezone": "+09:00",
          "geonameId": 11749713
      },
      "as": {
          "asn": 17506,
          "name": "APNIC-17408",
          "route": "122.208.0.0/14",
          "domain": "http://www.arteria-net.com/en/",
          "type": "NSP"
      },
      "isp": "ARTERIA Networks Corporation",
      "proxy": {
          "proxy": false,
          "vpn": false,
          "tor": false
      }
  })

  }, [])


  return (
    <div className="App">
      <Header />
      <GetApiData
        apiData={apiData}
        setApiData={setApiData}
      />
      <Team />
    </div>
  );
}

export default App;
