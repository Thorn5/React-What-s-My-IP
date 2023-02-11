import React, { useState, useEffect } from "react";

const SetIP = (apiKey, userIp, setUserIp, setApiString) => {
    
    const GoogleClick = () => {
        setUserIp("8.8.8.8");
        setApiString(
            `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${userIp}`
        );
    };

    const TrygClick = () => {
        setUserIp("87.153.54.148");
        setApiString(
            `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${userIp}`
        );
    };

    const AlleClick = () => {
        setUserIp("93.229.201.99");
        setApiString(
            `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${userIp}`
        );
    };

    const JapanClick = () => {
        setUserIp("101.110.0.0");
        setApiString(
            `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${userIp}`
        );
    };
    return (
        <div>
            <button onClick={TrygClick}>Tryg</button>
            <button onClick={AlleClick}>Alle</button>
            <button onClick={JapanClick}>Japan</button>
            <button onClick={GoogleClick}>Google</button>
            <p>UserIP: {userIp}</p>
        </div>
    );
};

export default SetIP;
