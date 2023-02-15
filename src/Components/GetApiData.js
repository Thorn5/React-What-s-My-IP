import React, { useState, useEffect } from "react";
import DisplayIPDetails from "../Components/DisplayIPDetails";

const GetApiData = ({ apiData, setApiData }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const apiUrl = (`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IPIFY_API}`)
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
      {loading ? <p>Loading..</p> : apiData ? <DisplayIPDetails apiData={apiData} /> : <p>{error}</p>}
    </div>
  );
};

export default GetApiData;
