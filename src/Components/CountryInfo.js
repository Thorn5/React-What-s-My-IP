import React, { useState, useEffect } from "react";
import "./CountryInfo.css";

const CountryInfo = ({ apiData }) => {
  const [extraInfo, setExtraInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const country = apiData.location.country;
  const apiUrl = `https://restcountries.com/v3.1/alpha/${country}`;
  useEffect(() => {
    function fetchData() {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setExtraInfo(data))
        .catch(() => setError("error message"))
        .finally(() => setLoading(false));
    }
    fetchData();
  }, []);

  console.log(extraInfo);
  return (
    <div>
      {loading ? (
        <p>Loading..</p>
      ) : apiData ? (
        <div>
          <div>This IP is located in {extraInfo[0].name.common}</div>
          <div>The spoken language is {extraInfo[0].languages.deu}</div>
          {!extraInfo[0].coatOfArms.svg ? null : (
            <div>
              The coat of arms is:{" "}
              <img src={extraInfo[0].coatOfArms.svg} alt="Coat of arms" />
            </div>
          )}
          <div>
            And the flag is:
            <img src={extraInfo[0].flags.svg} alt="Country Flag" />
          </div>
        </div>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default CountryInfo;
