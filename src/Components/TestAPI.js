import React, { useState } from "react";

const TestAPI = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        fetch(
            "https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_TVG63iHfwfaDK3aS3cXHeIiGHgrbO&ipAddress=8.8.8.8"
        )
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch(() => setError("error message"))
            .finally(() => setLoading(true));
    };

    return (
        <div>TestAPI.js</div>    
        );
};

export default TestAPI;
