import React, { useState, useEffect } from "react";
import DisplayIPDetails from "../Components/DisplayIPDetails";
import ShowLocation from "../Components/ShowLocation";


const GetApiData = ({ apiData, setApiData }) => {
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const apiUrl = (`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IPIFY_API}`)
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
    setApiData({
      ip: "8.8.8.8",
      location: {
        country: "US",
        region: "California",
        city: "Mountain View",
        lat: 37.40599,
        lng: -122.078514,
        postalCode: "94043",
        timezone: "-07:00",
        geonameId: 5375481,
      },
      domains: [
        "0d2.net",
        "003725.com",
        "0f6.b0094c.cn",
        "007515.com",
        "0guhi.jocose.cn",
      ],
      as: {
        asn: 15169,
        name: "Google LLC",
        route: "8.8.8.0/24",
        domain: "https://about.google/intl/en/",
        type: "Content",
      },
      isp: "Google LLC",
    });
    setApiData()
    setLoading(false);
  }, [])

  return (
    <div>
      {loading ? <p>Loading..</p> : apiData ?
        <>
          <DisplayIPDetails apiData={apiData} />
          <ShowLocation apiData={apiData} />
        </>
        }
      // : <p>{error}</p>}
    </div>
  );
};

export default GetApiData;
