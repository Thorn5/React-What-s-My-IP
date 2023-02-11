import React, { useState, useEffect } from "react";

const GetApiData =({apiData, setApiData, error, setError, loading, setLoading, userUrl, setUserUrl})=>{
    useEffect(() => {
        async function fetchData() {
            // fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_ZMa23mQ2nIaxv2YKfDSuCwZUPeQ5w&ipAddress=${userUrl}`
            await fetch(
                `https://geo.ipify.org/api/v2/country,city?apiKey=at_ZMa23mQ2nIaxv2YKfDSuCwZUPeQ5w&ipAddress=${userUrl}`
            )
                .then((response) => response.json())
                .then((data) => setApiData(data))
                .catch(() => setError("error message"))
                .finally(() => setLoading(true));
        }
        fetchData();
    }, []);
    return(
        <div>
            GetApiData.js
        </div>
    )
}

export default GetApiData
