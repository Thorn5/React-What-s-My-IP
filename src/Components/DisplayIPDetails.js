import React from "react";

const DisplayIPDetails = ({ apiData }) => {
    return (
        <div>
            <div>
                <div>Your IP is: {apiData.ip}</div>
            <div>Your location is: {apiData.location.city}</div>
            <div>Your ISP is: {apiData.isp}</div>
            </div>
        </div>
    );
};

export default DisplayIPDetails;
