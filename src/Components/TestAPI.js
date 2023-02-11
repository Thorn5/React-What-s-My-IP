import React, { useState, useEffect } from "react";

const TestAPI = ({apiData, setApiData, error, setError, loading, setLoading, userUrl, setUserUrl
}) => {


    const ale_key = "at_TVG63iHfwfaDK3aS3cXHeIiGHgrbO";

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

    const GoogleClick = () => {
        setUserUrl("8.8.8.8");
    };

    const TrygClick = () => {
        setUserUrl("87.153.54.148");
    };

    const AlleClick = () => {
        setUserUrl("93.229.201.99");
    };

    const JapanClick = () => {
        setUserUrl("101.110.0.0");
    };

    console.log(userUrl);
    return (
        <div>
            <button onClick={TrygClick}>Tryg</button>
            <button onClick={AlleClick}>Alle</button>
            <button onClick={JapanClick}>Japan</button>
            <button onClick={GoogleClick}>Google</button>
            {/* <div>Your IP is: {apiData.ip}</div>
            <div>Your location is: {apiData.location.city}</div>
            <div>Your location is: {apiData.isp}</div> */}
        </div>
    );
};

export default TestAPI;
