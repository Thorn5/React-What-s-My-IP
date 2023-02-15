import React, { useState, useEffect } from "react";
import DisplayIPDetails from "../Components/DisplayIPDetails";
import ShowLocation from "../Components/ShowLocation";

const GetApiData = ({ apiData, setApiData }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const apiUrl = (`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IPIFY_API}`)
  // const apiUrl = (`http://ip-api.com/json/`)
  const apiUrl = (`http://ip-api.com/json/122.209.48.3`)
  useEffect(() => {
    function fetchData() {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setApiData(data))
        .catch(() => setError("error message"))
        .finally(() => setLoading(false));
    }
    fetchData();
  }, []);

  return (
    <div>
      {loading ? <p>Loading..</p> : apiData ? <> <DisplayIPDetails apiData={apiData} /> <ShowLocation apiData={apiData} /> </>: <p>{error}</p>}
    </div>
  );
};

export default GetApiData;
