import { Card, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import DisplayIPDetails from "../Components/DisplayIPDetails";
import ShowLocation from "../Components/ShowLocation";
import CountryInfo from "./CountryInfo";
import DateInfo from "./DateInfo";

const GetApiData = ({ apiData, setApiData }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //! uncomment before publish
  const apiUrl = (`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_IPIFY_API}`)
  console.log(apiUrl);
  useEffect(() => {
    function fetchData() {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setApiData(data))
        .catch(() => setError("error message"))
        .finally(() => setLoading(false));
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   setLoading(false)
  // }, [])


  console.log(apiData);

  return (
    <div>
      {loading ? (
        <p>Loading..</p>
      ) : apiData ? (
        <>
          <Grid container spacing={2}
            style={{
              // center all the elements
              display: "flex",
              alignItems: "center",
            }}>
            {apiData.country}
            <Grid item xs={6}
              style={{
                // center all the elements
                // display: "flex",
                alignContent: "center",
              }}>
              <Card variant="outlined"
                sx={{
                  display: 'inline-block',
                  mx: '2px',
                  transform: 'scale(1)'
                }} >
                <DisplayIPDetails apiData={apiData} />
              </Card>
              <Card variant="outlined"
                sx={{
                  display: 'inline-block',
                  mx: '2px',
                  transform: 'scale(1)'
                }} >
                <DateInfo apiData={apiData} />
              </Card>
              <Card variant="outlined"
                sx={{
                  display: 'inline-block',
                  mx: '2px',
                  transform: 'scale(1)'
                }} >
                <CountryInfo apiData={apiData} />
              </Card>
            </Grid>
            <Grid item xs={2}>
              <ShowLocation apiData={apiData} />
            </Grid>
          </Grid>
        </>
      ) : (
        <p>{error}</p>
      )
      }
    </div >
  );
};

export default GetApiData;
