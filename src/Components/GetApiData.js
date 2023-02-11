import React, { useState, useEffect } from "react";
import DisplayIPDetails from "../Components/DisplayIPDetails";

const GetApiData = ({ apiData, setApiData, apiString }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    function fetchData() {
      fetch(apiString)
        .then((response) => response.json())
        .then((data) => setApiData(data))
        .catch(() => setError("error message"))
        .finally(() => setLoading(false));
    }
    fetchData();
  }, []);

  return (
    <div>
      {loading ? <p>Loading..</p> : apiData ? <DisplayIPDetails apiData={apiData} /> : <p>Error</p>}
      <REACT_APP_USER_IP_DATA=apiData/>
    </div>
  );
};

export default GetApiData;
