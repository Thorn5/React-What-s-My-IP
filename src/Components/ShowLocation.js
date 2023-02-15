import "./ShowLocation.css";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";

const ShowLocation = ({apiData}) => {
  // const position = [apiData.location.lat, apiData.location.lng]
  const position = [apiData.lat, apiData.lon]
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Your IP location
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default ShowLocation;
