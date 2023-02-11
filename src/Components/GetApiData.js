import React, { useState, useEffect } from "react";

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
      {loading ? <p>Loading..</p> : apiData ? apiData.ip : <p>Error</p>}
    </div>
  );
};

export default GetApiData;
