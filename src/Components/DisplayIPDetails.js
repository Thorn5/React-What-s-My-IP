import React from "react";
import DateInfo from "./DateInfo";

const DisplayIPDetails = ({ apiData }) => {
  return (
    <div>
      <div>
        {/* <div>Your IP is: {apiData.ip}</div>
            <div>Your location is: {apiData.location.city}</div>
            <div>Your ISP is: {apiData.isp}</div> */}
        <div>Your IP is: {apiData.query}</div>
        <div>Your location is: {apiData.city}</div>
        <div>Your ISP is: {apiData.isp}</div>
        <DateInfo />
      </div>
    </div>
  );
};

export default DisplayIPDetails;
