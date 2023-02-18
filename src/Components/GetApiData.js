import React, { useState, useEffect } from "react";
import DisplayIPDetails from "../Components/DisplayIPDetails";
import ShowLocation from "../Components/ShowLocation";
import CountryInfo from "./CountryInfo";

const GetApiData = ({ apiData, setApiData }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = `http://ip-api.com/json/`;
  useEffect(() => {
    function fetchData() {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setApiData(data))
        .catch(() => setError("error message"))
        .finally(() => setLoading(false));
    }
    fetchData();
    console.log(apiData);
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading..</p>
      ) : apiData ? (
        <>
          {apiData.country}
          <DisplayIPDetails apiData={apiData} />
          <ShowLocation apiData={apiData} />
          <CountryInfo apiData={apiData} />
        </>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default GetApiData;
