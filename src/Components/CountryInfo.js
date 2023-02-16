import React, { useState, useEffect } from "react";
import "./CountryInfo.css"

const CountryInfo = ({apiData}) => {
    const [ extraInfo, setExtraInfo] = useState({})
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const country = apiData.country.toLowerCase();
  // console.log(country);
  // const apiUrl = `http://restcountries.com/v3.1/name/${country}`;
  const apiUrl = `https://restcountries.com/v3.1/name/${country}`;
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

  // console.log(apiData.country);
  console.log(extraInfo);
  // console.log(apiUrl);
  return (
    <div>
      {loading ? (
        <p>Loading..</p>
      ) : apiData ? (
        <div>
        <div>
          This IP is located in {extraInfo[0].name.common} 
        </div>
        <div>
          The spoken language is {extraInfo[0].languages.deu}
        </div>
        <div>
          The coat of arms is:
          <img src={extraInfo[0].coatOfArms.svg} alt="Logo" />
        </div>
        <div>
          And the flag is:
          <img src={extraInfo[0].flags.svg} alt="Logo" />
        </div>
        
      </div>      ) : (
        <p>{error}</p>
      )}
    </div>
  )
}

export default CountryInfo