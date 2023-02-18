import "./ShowLocation.css";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";

const ShowLocation = ({ apiData }) => {
  const position = [apiData.location.lat, apiData.location.lng]
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}
      style={{
        height: "400px",
        width: "400px",
      }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <div>Your IP location is roughly:</div>
          <div>Latitude: {apiData.lat} </div>
          <div>Longitude: {apiData.lon} </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default ShowLocation;
