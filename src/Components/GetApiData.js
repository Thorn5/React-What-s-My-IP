import React, { useState, useEffect } from "react";
import DisplayIPDetails from "../Components/DisplayIPDetails";
import ShowLocation from "../Components/ShowLocation";
import CountryInfo from "./CountryInfo";

const GetApiData = ({ apiData, setApiData }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    //! uncomment before publish
  // const apiUrl = (`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IPIFY_API}`)
  // console.log(apiUrl);
  // useEffect(() => {
  //   function fetchData() {
  //     fetch(apiUrl)
  //       .then((response) => response.json())
  //       .then((data) => setApiData(data))
  //       .catch(() => setError("error message"))
  //       .finally(() => setLoading(false));
  //   }
  //   fetchData();
  // }, []);

useEffect(() => {
  setLoading(false)
}, [])


console.log(apiData);

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
