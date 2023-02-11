import React, { useState } from "react";

const DisplayIPDetails =(apiData, userUrl, setUserUrl)=>{
    
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

    return(<div>
        DisplayIPDetails

        <div>
            <button onClick={TrygClick}>Tryg</button>
            <button onClick={AlleClick}>Alle</button>
            <button onClick={JapanClick}>Japan</button>
            <button onClick={GoogleClick}>Google</button>
            {/* <div>Your IP is: {apiData.ip}</div>
            <div>Your location is: {apiData.location.city}</div>
            <div>Your location is: {apiData.isp}</div> */}
        </div>


    </div>)
}

export default DisplayIPDetails