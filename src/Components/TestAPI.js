import React, { useState } from "react";

const TestAPI = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userUrl, setUserUrl] = useState("")

    const ale_key = "at_TVG63iHfwfaDK3aS3cXHeIiGHgrbO"

    const fetchData = () => {
        fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${ale_key}&ipAddress=${userUrl}`
            
        )
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch(() => setError("error message"))
            .finally(() => setLoading(true));
    };

    const TrygClick =() => {
        setUserUrl(87.153.54.148)
    }
    
    const AlleClick =() => {
        setUserUrl(93.229.201.99)
    }


    return (
        <div>
        <button onClick={TrygClick}>Tryg</button>
        <button onClick={AlleClick}>Alle</button>
        {data.ip}          
        </div>
        
        );
};

export default TestAPI;
