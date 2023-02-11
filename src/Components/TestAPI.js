import React, { useState, useEffect } from "react";

const TestAPI = () => {
    const [apiData, setApiData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userUrl, setUserUrl] = useState("87.153.54.148")

    const ale_key = "at_TVG63iHfwfaDK3aS3cXHeIiGHgrbO"

    useEffect( () => {

        async function fetchData () {
            // await  fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${ale_key}&ipAddress=${userUrl}`
            await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_ZMa23mQ2nIaxv2YKfDSuCwZUPeQ5w&ipAddress=${userUrl}`
            )
                .then((response) => response.json())
                .then((data) => setApiData(data))
                .catch(() => setError("error message"))
                .finally(() => setLoading(true));

            }
            // console.log(apiData);
            // console.log(apiData.ip);
            fetchData();
        }, []);
            

const TrygClick = () => {
    setUserUrl("87.153.54.148")
    console.log(userUrl);
}

const AlleClick = () => {
    setUserUrl("93.229.201.99")
    console.log(userUrl);
}

const JapanClick =()=>{
    setUserUrl("101.110.0.0")
}


return (
    <>
        <button onClick={TrygClick}>Tryg</button>
        <button onClick={AlleClick}>Alle</button>
        <button onClick={JapanClick}>Japan</button>
        <div>Your IP is: {apiData.ip}</div>
        <div>Your location is: {apiData.location.city}</div>
        {/* <div>Your location is: {apiData.isp}</div> */}
    </>
);
};

export default TestAPI;
